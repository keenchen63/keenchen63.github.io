---
isOriginal: true
date: 2024-05-18
category: "服务器虚拟化"
tag: [
   "PVE LinuxOS安装",
   "openEuler",
]
cover: /imgs/pve_install_openEulerOS/logo.D1Si0Lp6.svg
---

# Proxmox VE 安装 openEuler 24.03


## 获取 OS 镜像下载链接

通过[官网](https://www.openeuler.org/zh/download/?version=openEuler%2024.03%20LTS)或镜像站[^1]获取下载链接


选择系统架构及所需镜像版本


![](/imgs/pve_install_openEulerOS/image-20240807100343025.png)
- Network Install ISO（网络安装 ISO）：
    - 特点：这是一个较小的 ISO 镜像，通常只包含基本的安装程序和必要的工具。
    - 用途：在安装过程中需要连接到网络，从在线存储库中下载和安装软件包。
    - 适用场景：适用于网络环境良好的场合，可以灵活选择和安装最新的软件包和组件。

<!-- more -->

- Offline Everything ISO（离线全量 ISO）：
    - 特点：这是一个较大的 ISO 镜像，包含 openEuler 操作系统的所有软件包和组件。
    - 用途：可以在没有网络连接的情况下进行完全离线安装。
    - 适用场景：适用于无法联网或网络连接不稳定的场合，确保所有需要的软件包都能离线安装。


- Offline Standard ISO（离线标准 ISO）：
    - 特点：这是一个中等大小的 ISO 镜像，包含常用的系统组件和软件包，但不包括所有可选的软件包。
    - 用途：可以在没有网络连接的情况下进行基本系统的离线安装。
    - 适用场景：适用于无法联网或网络连接不稳定，但只需要基本功能的场合。


## 下载 OS 镜像至 ProxmoxVE
登录 Proxmox VE，点击 ``` 存储 ``` - ``` ISO镜像 ``` - ``` 从URL下载 ```

![](/imgs/pve_install_openEulerOS/aadf00011cffae17cadcf4e5c254f33.png)


粘贴下载链接，点击``` 查询网址 ```后，点击``` 下载 ```，等待下载完成

![](/imgs/pve_install_openEulerOS/img_20240807141340.png)


## 创建虚拟机

点击右上角![](/imgs/pve_install_openEulerOS/img_20240807150500.png =x25)，选择openEuler系统镜像，其他虚拟机参数根据实际需求进行配置

![](/imgs/pve_install_openEulerOS/img_20240807150302.png)


## 安装系统

右键对应虚拟机，点击 ``` 启动 ```

![](/imgs/pve_install_openEulerOS/img_20240807152450.png)

进入虚拟机控制台，选择第一项 ``` Install openEuler XXXXX ```

![](/imgs/pve_install_openEulerOS/img_20240807152812.png)


若出现以下报错：

![](/imgs/pve_install_openEulerOS/img_20240807162510.png)

将处理器类别改为``` host ```

![](/imgs/pve_install_openEulerOS/img_20240807162708.png)

**选择语言**

![](/imgs/pve_install_openEulerOS/img_20240807163851.png)

完成带有感叹号标志的内容配置

![](/imgs/pve_install_openEulerOS/img_20240807163951.png)

由于使用的是网络安装ISO镜像，需要配置网络安装源，且确保**网络畅通**


**网络配置**


进入 *网络和主机名* 页面，配置网卡IP地址或自动获取。

![](/imgs/pve_install_openEulerOS/img_20240807164144.png)

**安装源配置**

进入 *安装源* 页面，输入安装源地址，地址为：```https://repo.openeuler.org/openEuler-{version}/OS/$basearch/``` ，其中 version 为版本号，$basearch 为CPU 架构，根据**实际情况**输入，同时可使用国内镜像站[^1]地址，提升下载速度

如该案例安装源地址为：
::: tabs

@tab 官方地址

https://repo.openeuler.org/openEuler-24.03-LTS/OS/x86_64/

@tab 镜像站地址

南京大学镜像站

https://mirrors.nju.edu.cn/openeuler/openEuler-24.03-LTS/OS/x86_64/

:::

![](/imgs/pve_install_openEulerOS/img_20240807165242.png)


**开始安装**

其他内容根据需求进行配置，全部配置完成后，点击``` 开始安装 ```

![](/imgs/pve_install_openEulerOS/img_20240807170214.png)

进度条走完，点击``` 重启系统 ```完成安装

![](/imgs/pve_install_openEulerOS/img_20240807172022.png)

完成安装后，可将虚拟机系统镜像卸载，确保启动引导正确（非必要）

![](/imgs/pve_install_openEulerOS/img_20240807172342.png)

[^1]:开源镜像站：<br>[阿里云](https://mirrors.aliyun.com/openeuler/)https://mirrors.aliyun.com/openeuler/<br>[网易](https://mirrors.163.com/openeuler/)https://mirrors.163.com/openeuler/<br>[南京大学](https://mirrors.nju.edu.cn/openeuler/)https://mirrors.nju.edu.cn/openeuler/<br>等...
