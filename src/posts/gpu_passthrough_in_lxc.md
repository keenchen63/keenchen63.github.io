---
isOriginal: false
date: 2023-08-30
author: "Zimri"
category: "服务器虚拟化"
tag: [
   "ProxmoxVE",
   "GPU虚拟化",
]
cover: /imgs/gpu_passthrough_in_lxc/0121131913.jpg
---

# ProxmoxVE GPU 直通 LXC 容器方案
GPU 直通已成为PVE下获取GPU性能的最佳方案，但独占模式使得GPU变得很局限；比如我有俩个VPS都需要使用GPU，那么加入俩张物理显卡进行分配

当然使用Proxmox VE(PVE)虚拟化的GPU可以通过以下几种方案来实现

- intel GVT-g
- Nvida vGPU
- GPU Passthrough
- Docker-Nvidia

相对来说还是比较灵活，当然每种方案都有利有弊这里会简要的总结一下特点:

| 方案            | 性能                | 运行模式                  | 成本                  |
| :-------------- | :------------------ | :------------------------ | :-------------------- |
| intel GVT-g     | 最低(intel集成显卡) | 多台VPS可同时使用         | 低(随有核显CPU的得到) |
| Nvida vGPU      | 高(可控)            | 多台VPS可同时使用         | 昂贵且vGPU需商业授权  |
| GPU Passthrough | 高(视显卡型号)      | 独占1台VPS来使用          | 按需购买独立显卡      |
| Docker-Nvidia   | 较高(视显卡型号)    | 宿主独占 多Docker同时使用 | 按需购买独立显卡      |

同时还有一些细节问题需要是注意：

- intel GVT-g 技术有最大并发限制大约在1-4数量之间具体视CPU规格
- Nvida vGPU 无数量限制 但商业授权按个数授权
- GPU Passthrough 游戏显卡并发数限制为3个 专业图形卡和服务器卡则没有限制
- Docker-Nvidia 和下面即将介绍的LXC 方案受限为物理卡限制

可以通过查看 [Nvidia NVDEC](https://developer.nvidia.com/video-encode-decode-gpu-support-matrix) 来获得大多数N卡的详细信息

> 通过 Nvidia NVDEC信息表 得知我所需的环境性价比最好的应该是 P2200 所以我选择了它

小规模团队、工作室、家庭、个人来说 一块放进服务器中的GPU当然希望他的性能能接近100%榨干；

当然还有微软平台的Hyper-V 也有不错的 GPU虚拟化方案，只是驱动兼容和配置修改较为复杂这里直接排除；

所以这里就出现了 直通GPU给LXC 容器的解决方案，这个方案的特点和**Docker-Nvidia** 类似，只是LXC容器的特性使得容器更接近VPS环境，配合 Proxmox VE(PVE) 可以说在大多数架构上来使用体验接近VPS环境了；

![](/imgs/gpu_passthrough_in_lxc/1.png)




## 部署步骤

### 宿主机操作部分

更新源参考这里
[[Proxmox VE 配置源及关闭订阅提醒]]

然后更新库。

```shell
apt-get update -y
apt-get dist-upgrade -y
```

#### 安装header

Proxmox VE(PVE) 有个命令可直接安装header 无需查询

```shell
apt update
apt install pve-headers -y
```

使用这个命令安装的下面步骤省略

如需手动查询安装：
通过`uname -a` 查询自己的内核。
然后，`apt-cache search pve-header` 查询跟自己内核版本一样的`header`

注意这里说的是`pve-header` 而不是`linux-header`
然后 `apt install pve-headers-5.11.22-4-pve`这个是我的，PVE7下的具体要把 `install` 后面的内容换自己实际的版本号。

#### 环境准备

安装一下驱动安装所需要的环境

```shell
apt update -y
apt install dkms -y
```

然后再确认一下，GPU插上了，并且能准确显示：

```shell
lspci | grep -i nvidia
```

您应该会看到如下输出：

```shell
01:00.0 VGA compatible controller: NVIDIA Corporation GP106GL [Quadro P2200] (rev a1)
01:00.1 Audio device: NVIDIA Corporation GP106 High Definition Audio Controller (rev a1)
```

#### 安装显卡驱动

PVE7

```shell
apt-get update
apt-get install -t bullseye-backports nvidia-driver nvidia-smi
```

PVE6

```shell
apt-get update
apt-get install -t buster-backports nvidia-driver nvidia-smi 
```

#### 添加模块

驱动无错安装之后，注意检查以下目录内容

```shell
ls /etc/modules-load.d/*
```

我这里返回 3个文件

```shell
/etc/modules-load.d/modules.conf 
/etc/modules-load.d/qemu-server.conf
/etc/modules-load.d/nvidia.conf
```

查看`cat /etc/modules-load.d/nvidia.conf`文件内容：

```shell
nvidia-drm
```

向`nvidia.conf`中添加模块，确保文件内容如下：

```shell
nvidia-drm
nvidia
nvidia_uvm 
```

**注意：**

- 因PVE版本和驱动差异 注意检查`/etc/modules-load.d/` 每一个文件内容，保证添加的模块不能少，也不能重复；
- 如果没有`nvidia.conf` 则吧上面的内容添加到`/etc/modules-load.d/modules.conf `文件中

#### 屏蔽不兼容驱动

查看目录

```shell
ls /etc/modprobe.d/*
```

返回

```shell
/etc/modprobe.d/dkms.conf 
/etc/modprobe.d/nvidia-kernel-common.conf
/etc/modprobe.d/nvidia-blacklists-nouveau.conf  
/etc/modprobe.d/pve-blacklist.conf
/etc/modprobe.d/nvidia.conf
```

检查 `cat /etc/modprobe.d/nvidia-blacklists-nouveau.conf  ` 和 `/etc/modprobe.d/pve-blacklist.conf` 文件确保里面内容包含

```shell
blacklist nouveau
blacklist nvidiafb
```

保证内容没有被注释 同时 也**不能重复**

#### 更新模块

UEFI模式安装的PVE使用命令：

```shell
update-initramfs -u -k all
```

兼容模式或传统模式安装的使用：

```shell
update-grub
```

没把握的俩个都运行一下

#### 创建规则

创建一个文件 `nano /etc/udev/rules.d/70-nvidia.rules`并填充：

```shell
# Create /nvidia0, /dev/nvidia1 … and /nvidiactl when nvidia module is loaded
KERNEL=="nvidia", RUN+="/bin/bash -c '/usr/bin/nvidia-smi -L && /bin/chmod 666 /dev/nvidia*'"
# Create the CUDA node when nvidia_uvm CUDA module is loaded
KERNEL=="nvidia_uvm", RUN+="/bin/bash -c '/usr/bin/nvidia-modprobe -c0 -u && /bin/chmod 0666 /dev/nvidia-uvm*'"
```

这些规则作用：

- 设置更宽松的权限
- 启用默认情况下未启动的 nvidia_uvm（至少对于我的卡而言）

#### 重启

```shell
reboot
```

期待一个没有报错、没有宕机、没有BUG的醒来

#### 检查

重新启动主机，并检查的输出`ls -al /dev/nvidia*`，并`ls -al /dev/dri/*`为类似下面：

```shell
crw-rw-rw- 1 root root 195, 0 Feb 11 18:11 /dev/nvidia0
crw-rw-rw- 1 root root 195, 255 Feb 11 18:11 /dev/nvidiactl
crw-rw-rw- 1 root root 195, 254 Feb 11 18:11 /dev/nvidia-modeset
crw-rw-rw- 1 root root 236, 0 Feb 11 18:11 /dev/nvidia-uvm
crw-rw-rw- 1 root root 236, 1 Feb 11 18:11 /dev/nvidia-uvm-tools

crw-rw---- 1 root video 226, 0 May 1 17:43 /dev/dri/card0
crw-rw---- 1 root video 226, 1 May 1 17:43 /dev/dri/card1
crw-rw---- 1 root render 226, 128 May 1 17:43 /dev/dri/renderD128
```

记下号码的第五列以上`195`，`236`并`226`分别。这些是之后LXC中需要的。
**注意：** 上述设备缺一不可至少包含：nvidia0、nvidiactl、nvidia-modeset、vidia-uvm、nvidia-uvm-tools； 少了说明驱动有组件没有安装成功，请详细检查；

此外，您可以使用`nvidia-smi`应该显示类似内容的命令检查 nvidia 卡是否正在工作

![](/imgs/gpu_passthrough_in_lxc/2.png)





### LXC操作部分

接下来，我们需要在容器内安装 Nvidia 驱动程序。Proxmox 主机和容器之间的确切 Nvidia 驱动程序版本匹配非常重要！

Debian(ProxmoxVE) 使用较旧的 Nvidia 驱动程序`460.91.03`，因此我必须在我的 LXC Linux 容器中也需要手动安装 对应版本的Nvidia 驱动程序。

#### 下载驱动程序

LXC开机，进入LXC中 下载驱动程序
**注意：LXC容器只能为 非特权容器**
直接穷举出URL：

```shell
wget https://us.download.nvidia.com/XFree86/Linux-x86_64/460.91.03/NVIDIA-Linux-x86_64-460.91.03.run
```

在没有内核模块的情况下执行安装：

```shell
chmod +x NVIDIA-Linux-x86_64-460.91.03.run
bash  NVIDIA-Linux-x86_64-460.91.03.run --no-kernel-module
```

安装成功无报错就关闭LXC

##### 修改LXC配置文件

宿主机进入`/etc/pve/lxc/` 找到对应LXC的ID配置文件nano打开 在最后一行加入一下内容：

```shell
lxc.cgroup.devices.allow: c 195:* rwm
lxc.cgroup.devices.allow: c 236:* rwm
lxc.cgroup.devices.allow: c 226:* rwm
lxc.mount.entry: /dev/nvidia0 dev/nvidia0 none bind,optional,create=file
lxc.mount.entry: /dev/nvidiactl dev/nvidiactl none bind,optional,create=file
lxc.mount.entry: /dev/nvidia-uvm dev/nvidia-uvm none bind,optional,create=file
lxc.mount.entry: /dev/nvidia-modeset dev/nvidia-modeset none bind,optional,create=file
lxc.mount.entry: /dev/nvidia-uvm-tools dev/nvidia-uvm-tools none bind,optional,create=file
lxc.mount.entry: /dev/dri dev/dri none bind,optional,create=dir
```

其中 `195`，`236`和`226` 数字是上面记录的，注意按实际更换填写

修改好保存，开机
登陆LXC 输入命令 `nvidia-smi`
返回

![](/imgs/gpu_passthrough_in_lxc/3.png)





## 应用实例

### LXC GPU容器中安装Emby

LXC GPU直通的特性，LXC容器只能为 非特权容器直通
如果是特权容器启动 运行 `nvidia-smi`会返回

```shell
Failed to initialize NVML: Unknown Error
```

这个特性问题无解，官方无解、Hack无解；
同时，又因为**非特权容器** 的特性，无法从容器中使用 **SMB/CIFS** **NFS** 协议来链接外部存储。

![](/imgs/gpu_passthrough_in_lxc/4.png)





使用以上架构的各位极客，多半存储位于外部NAS中的分布式；所以这里还需解决媒体目录挂载到LXC容器中问题，值得庆幸的是PromoxVE(PVE) 在WebUI中给予了大家一个非常有用的目录挂载功能，下面就来一一部署。

#### 下载emby安装文件

[官方下载地址](https://emby.media/linux-server.html)

#### 安装emby server

例 下载的文件为`emby-server-deb_4.6.4.0_amd64.deb`
先授执行权限

```shell
chmod +x emby-server-deb_4.6.4.0_amd64.deb
```

然后执行安装

```shell
dpkg -i emby-server-deb_4.6.4.0_amd64.deb
```

#### 设置emby

打开浏览器 `http://localhost:8096` 执行设置；
设置过程略过，注意其中设置媒体库的时候跳过 不设置。

#### 设置转码

安装初始设置后，进入管理后台：转码 - 启用硬件加速 -开启

![](/imgs/gpu_passthrough_in_lxc/5.png)





此步骤 主要是校验LXC容器中的GPU

#### 解决NAS挂载

这步最为重要，按照目前的 LXC/LXD 容器技术来看，要在非特权容器中直接解决这个问题是没有办法的，各位极客如果时间宝贵就不要尝试了，当然折腾精神永不灭，如果你在非特权容器中找到直接挂载`SMB/CIFS`的方法 请务必分享一下。

> 这里分享一下折腾案例，非特权容器中使用 `smbclient` 是可以访问到 NAS 的，这里会造成错觉。这并不意味着`mount -t cifs` or `mount.cifs` 能正确挂载

所以就是如此的无奈，非特权才能"vGPU"。 特权才能`SMB/CIFS`

好在还有一个办法能非常巧妙的平衡这个不足，思路为：

**Proxmox VE(PVE)宿主机挂载NAS目录** - **LXC 非特权容器挂载宿主机中目录**

说到这里可能意识了到了**LXC 非特权容器挂载宿主机中目录** 为
上一步**Proxmox VE(PVE)宿主机挂载NAS的目录**

接下来实践：
打开 WebUI 定位到 **数据中心-存储-添加-SMB/CIFS**

![](/imgs/gpu_passthrough_in_lxc/6.png)



添加一个存储

![](/imgs/gpu_passthrough_in_lxc/7.png)





| 选项   | 值           | 解释                                          |
| :----- | :----------- | :-------------------------------------------- |
| ID     | video-nas    | SMB/CIFS的ID 这个名称会作为宿主机内文件夹名称 |
| 服务器 | 10.10.200.50 | NAS的内网IP地址                               |
| 用户名 | movide       | NAS共享目录的用户                             |
| 密码   | ************ | NAS共享目录的密码                             |

填写完上面的信息之后 **Share** 选项才能被激活，打开**Share**选项里面就是NAS的目录

![](/imgs/gpu_passthrough_in_lxc/8.png)





除了 服务器、用户名、密码、Share 4个选项 其余配置可以参考我的设置，其中**启用** 是关闭的，这个操作主要为了不让这个目录显示在ProxmoxVE WebGUI中，就不显的那么凌乱了

确定配置无误即可 添加

添加之后可以通过 路径/目标 获得NAS目录在宿主机中挂载位置，并记录下它
例如我的是` /mnt/pve/video-nas`

![](/imgs/gpu_passthrough_in_lxc/9.png)





最后关闭正在运行的LXC，然后只需要用下面的命令挂载这个目录到GPU LXC中：

```
pct set 100 -mp0 /mnt/pve/video-nas,mp=/video
```

命令解释：挂载宿主机目录`/mnt/pve/video-nas`到 ID为100 LXC容器中的`/video`目录下

#### 目录权限

**问题一：**
可能会遇到 LXC 容器中 `/video`目录只能读取不能写入的问题，需要从一下几点进行尝试：

##### 1. NAS 账号权限

NAS账号是否已经对共享目录给予了读写权限

##### 2. 宿主机目录权限

可以尝试 使用命令来修复权限

```shell
 chmod 755 /mnt/pve/video-nas
```

##### 4. LXC目录权限

```shell
 chmod 755 /video
```

**问题二：**
emby server对挂载来的目录没有写入权限

##### 4. LXC 目录权限

```shell
 chown -R emby:emby  /video
```

### LXC GPU容器中安装Plex

方法请类推，基本一致

### LXC GPU容器中安装Jellyfin

方法请类推，基本一致

参考资料：

[GPU (Nvidia) passthrough on Proxmox LXC container](https://passbe.com/2020/02/19/gpu-nvidia-passthrough-on-proxmox-lxc-container/)

[Nvidia GPU passthrough in LXC](https://theorangeone.net/posts/lxc-nvidia-gpu-passthrough/)

[【亿点笔记】Proxmox VE(PVE) 下直通GPU给LXC 进行CUDA coding](https://www.bilibili.com/read/cv13181675)

<br>

> 本文转载自：[https://www.insilen.com/archives/17.html](https://www.insilen.com/archives/17.html)