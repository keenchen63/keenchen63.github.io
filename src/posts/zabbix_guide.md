---
isOriginal: true
date: 2023-04-23
category: "网络"
tag: [
   "Zabbix",
   "运维监控",
]
cover: "https://s1.ax1x.com/2023/04/22/p9Vg3Jx.png"
---

# Zabbix 基础介绍及安装部署

### 一、为什么需要监控系统

监控系统可以实时监控和管理系统、网络设备、应用程序等，帮助运维管理员**及时发现和解决问题**，提高系统的可用性、安全性和性能，节约运维成本。

### 二、什么是Zabbix

> Zabbix 是一个**企业级**的**开源分布式**网络监控解决方案；可用于监视各种IT设备，包括服务器、网络设备、数据库、应用程序等。
>
> - 企业级：Zabbix具有可扩展性、高可用性、安全性、可定制性和易于使用和管理等特点，这使得它成为了一种适合大型企业和组织使用的监控系统。
> - 开源：Zabbix是一个开源的监控系统，意味着它是免费的，并且源代码是公开的，可以自由地使用、修改和分发。
> - 分布式：Zabbix支持分布式监控，这意味着可以将监控负载分散到多个Zabbix服务器上，从而实现更高的可扩展性和容错性。

<!-- more -->
<img src="https://s1.ax1x.com/2023/04/22/p9VcqII.jpg" alt="Banner" style="zoom:80%;float:left;" />



### 三、Zabbix的监控对象

- 数据库：    MySQL、MariaDB、Oracle、SQL Server		agent
- 应用程序：Nginx、Apache、IIS                                            agent

------

- 虚拟化：    VMWare、KVM、Docker、K8s                         agent

- 操作系统：Linux、Windows、macOS                                 agent

----

- 硬件：        服务器、存储                                                        IPMI

- 网络设备：交换机、路由器、防火墙                                     SNMP



### 四、Zabbix基本架构

<img src="https://s1.ax1x.com/2023/04/22/p9VcOit.png" alt="架构图" style="zoom:50%;" />

- Zabbix Server：整个 Zabbix 软件的核心程序，负责执行监控数据的主动轮询和被动获取，向用户发送通知；
- Zabbix Web：为了从任何地方和任何平台轻松访问，提供的基于 Web 的前端界面。
- Database：数据库，用于存储Zabbix 收集的所有配置信息以及数据。
- Zabbix Proxy：可代Server 收集Agent的数据，从而分散单个 Zabbix Server 的负载，在Zabbix部署中，Proxy 为可选项；
- Zabbix Agent：部署在被监控目标上，以主动监控本地资源等信息，并将收集到的数据上报给Zabbix Server。



### 五、安装Zabbix

#### 1.安装要求

- 硬件配置

  | 安装规模 | 监控指标  | CPU内核 | 内存 GB | 数据库                                                      |
  | -------- | --------- | ------- | ------- | ----------------------------------------------------------- |
  | 小       | 1 000     | 2       | 8       | MySQL<br />Percona<br />MariaDB<br />PostgreSQL               |
  | 中       | 10 000    | 4       | 16      | MySQL<br />Percona<br />MariaDB<br />PostgreSQL             |
  | 大       | 100 000   | 16      | 64      | MySQL<br />Percona<br />MariaDB<br />PostgreSQL<br />Oracle |
  | 非常大   | 1 000 000 | 32      | 96      | MySQL<br />Percona<br />MariaDB<br />PostgreSQL<br />Oracle |

- 操作系统

  - Ubuntu
  - CentOS
  - Debian
  - Oracle Linux
  - SUSE 
  - Red Hat
  - macOS
  - 等类UNIX系统

#### 2.安装Zabbix

##### Linux系统二进制包安装

进入Zabbix官网`https://www.zabbix.com/cn/download`，选在Zabbix版本及服务器平台等信息；

安装Zabbix，以Ubuntu 22.04 + MySQL + Nginx 为例

- 在服务器/虚拟化中安装好Ubuntu 22.04系统，此不展开；

- 添加Zabbix的apt/yum软件仓库源：

  ```shell
  # 下载Zabbix软件仓库源的deb包
  wget https://repo.zabbix.com/zabbix/6.0/ubuntu/pool/main/z/zabbix-release/zabbix-release_6.0-4+ubuntu22.04_all.deb
  # 安装deb包，实际作用为在 `/etc/apt/sources.list.d/` 路径下添加Zabbix软件仓库源
  sudo dpkg -i zabbix-release_6.0-4+ubuntu22.04_all.deb
  # 更新APT软件包索引
  sudo apt update
  ```
  
  Zabbix官方软件仓库源为境外服务器，若执行`apt update`后长时间无法完成，可将官方源地址换成国内镜像源；
  
  常见镜像源：阿里云、华为云、南京大学等
  
  
  
- 使用apt/yum包管理工具安装Zabbix server，Web前端，agent：

  ```shell
  # 执行 apt install 命令，安装所需软件
  sudo apt install zabbix-server-mysql zabbix-frontend-php zabbix-nginx-conf zabbix-sql-scripts zabbix-agent
  ```
  
  
  
- 安装并初始化 MySQL 数据库：

  ```shell
  # 执行 apt install 命令，安装MySQL
  sudo apt install mysql-server
  # 启动MySQL进程，并设置开机自启
  sudo systemctl start mysql
  sudo systemctl enable mysql
  # 设置MySQL数据库密码
  mysql -uroot
  mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Reeko@123';
  mysql> exit;
  ```

  

- 创建Zabbix所需的数据库和数据库用户：

  ```mysql
  mysql -uroot -p
  输入数据库root用户密码
  create database zabbix character set utf8mb4 collate utf8mb4_bin;    #创建zabbix数据库
  create user zabbix@localhost identified by 'Reeko@123';              #设置zabbix用户密码
  grant all privileges on zabbix.* to zabbix@localhost;                #设置用户权限
  set global log_bin_trust_function_creators = 1;             #更改系统变量以允许导入初始化数据
  exit;
  ```

  

- 导入Zabbix初始架构和数据：

  ```shell
  # 导入server.sql.gz初始架构和数据至MySQL的zabbix数据库中
  # 执行命令后需要输入数据库密码，视设备性能不同，需等待1-5分钟
  zcat /usr/share/zabbix-sql-scripts/mysql/server.sql.gz | mysql --default-character-set=utf8mb4 -uzabbix -p zabbix
  # 导入成功后，将数据库系统变量 log_bin_trust_function_creators 改回0
  mysql -uroot -p
  输入数据库root用户密码
  set global log_bin_trust_function_creators = 0;
  exit;
  ```

  

- 配置Zabbix Server的数据库及Web前端服务的相关参数：

  ```shell
  #使用vim/nano等文本编辑器打开数据库配置文件
  nano /etc/zabbix/zabbix_server.conf
  #找到DBPassword=，设置对应数据库密码并保存
  DBPassword=Reeko@123
  
  #使用vim/nano等文本编辑器打开Nginx配置文件
  nano /etc/zabbix/nginx.conf
  #设置端口号'listen' 和 域名'server_name' 并保存
  listen 23461;
  server_name example.com;
  ```

  

- 启动Zabbix进程，并为它们设置开机自启：

  ```shell
  # 启动Zabbix进程，并设置开机自启
  sudo systemctl restart zabbix-server zabbix-agent nginx php8.1-fpm
  sudo systemctl enable zabbix-server zabbix-agent nginx php8.1-fpm       
  ```

  

- 浏览器打开Web界面 `IP:Port`，完成初始化向导：

<img src="https://s1.ax1x.com/2023/04/22/p9VxIl8.png" alt="p9VxIl8.png" style="zoom: 40%;float:left;" />

若Web初始化界面无法选择中文，原因是服务器系统没有安装中文语言包

```shell
# 执行 apt install 安装中文语言包
sudo apt install language-pack-zh-hans
#重启Zabbix进程
sudo systemctl restart zabbix-server zabbix-agent nginx php8.1-fpm
```

<img src="https://s1.ax1x.com/2023/04/22/p9VzWB4.png" alt="p9VzWB4.png" style="zoom:55%;float:left;" />

在Web页面完成初始化向导，安装完成。

##### Docker容器安装

  时间有限，不展开，可参考官方文档。



### 六、配置Zabbix

#### 1.登录和配置用户

- 使用超级管理员`Admin`及默认密码：`zabbix`登录<br>[![p9ZCjQP.png](https://s1.ax1x.com/2023/04/22/p9ZCjQP.png)](https://imgse.com/i/p9ZCjQP)
- 在`管理 → 用户` 可查看用户信息，点击创建用户：<br>[![p9ZHUq1.png](https://s1.ax1x.com/2023/04/23/p9ZHUq1.png)](https://imgse.com/i/p9ZHUq1)
- 输入用户名、密码，选择加入`Zabbix administrators`管理员群组:<br>[![p9ZPg0S.png](https://s1.ax1x.com/2023/04/22/p9ZPg0S.png)](https://imgse.com/i/p9ZPg0S)
- 在权限页，选择`Admin role`，完成用户创建：<br>[![p9ZPhfs.png](https://s1.ax1x.com/2023/04/22/p9ZPhfs.png)](https://imgse.com/i/p9ZPhfs)



#### 2.Zabbix常见的名词定义

>
>- host（主机）- 要通过 IP/DNS 监控的联网设备。
>- host group（主机组）- 主机的逻辑分组。
>- item（监控项） - 你想要接收的主机的特定数据，一个度量/指标数据。
>- trigger（触发器） - 一个被用于定义问题阈值的逻辑表达式。 当接收到的数据高于阈值时，触发器从 'Ok' 变成 'Problem' 状态。
>- event（事件） - 一次发生的需要注意的事情，例如 触发器状态改变、自动发现agent。
>- action（动作） - 对事件作出反应的预先定义的方法。
>- media（媒介） - 发送告警通知的渠道；传输媒介。
>- template（模板） - 可以应用于主机的一组实体集 （包含监控项、触发器、图表、低级别自动发现规则、web场景等）。
>
>......
>
>引用自：`https://www.zabbix.com/documentation/6.0/zh/manual/definitions`
[![p9ZkyOx.png](https://s1.ax1x.com/2023/04/22/p9ZkyOx.png)](https://imgse.com/i/p9ZkyOx)



#### 3.添加被监控主机

##### 通过SNMP协议添加

以添加华为交换机SNMP V2为例：

- 交换机端正确配置SNMP

- 在`配置→主机`可查看已添加的主机，点击创建主机来新增一台主机：<br>

[![p9ZYitJ.png](https://s1.ax1x.com/2023/04/22/p9ZYitJ.png)](https://imgse.com/i/p9ZYitJ)

- 输入主机名称，选择模板`Huawei VRP by SNMP`，通过SNMP添加接口，填写正确的`IP地址`、`SNMP版本`、`SNMP团体名`：<br>[![p9ZNv6I.png](https://s1.ax1x.com/2023/04/23/p9ZNv6I.png)](https://imgse.com/i/p9ZNv6I)

- 填写无误后，点击`添加`，可在主机列表中看到新添加的主机：<br>[![p9ZHrGD.png](https://s1.ax1x.com/2023/04/23/p9ZHrGD.png)](https://imgse.com/i/p9ZHrGD)

  - ![icon_zbx_gray.png](https://www.zabbix.com/documentation/6.0/assets/en/manual/quickstart/icon_zbx_gray.png) - 表示主机状态尚未建立，尚未发生监控指标检查
  - ![icon_zbx_green.png](https://www.zabbix.com/documentation/6.0/assets/en/manual/quickstart/icon_zbx_green.png) - 表示主机可用，监控指标检查已成功
  - ![icon_zbx_red.png](https://www.zabbix.com/documentation/6.0/assets/en/manual/quickstart/icon_zbx_red.png) - 表示主机不可用，监控指标检查失败（将鼠标光标移动到图标上以查看错误消息)。可能是由于接口凭证不正确造成了通信问题。

  

##### 通过Zabbix Agent添加

以添加Windows系统为例：

- 访问官网`https://www.zabbix.com/cn/download_agents`选择对应版本的Zabbix Agent<br>

[<img src="https://s1.ax1x.com/2023/04/23/p9ZsuY6.png" alt="p9ZsuY6.png" style="zoom:63%;" />](https://imgse.com/i/p9ZsuY6)

- 下载Zabbix Agent安装包，进行安装：<br>

[[<img src="https://s1.ax1x.com/2023/04/23/p9Z2PsS.png" alt="p9Z2PsS.png" style="zoom:63%;" />](https://imgse.com/i/p9Z2PsS)

填写正确的服务器信息，下一步

- Zabbix Agent安装完成：<br>[<img src="https://s1.ax1x.com/2023/04/23/p9ZsonJ.png" alt="p9ZsonJ.png" style="zoom:63%;" />](https://imgse.com/i/p9ZsonJ)

- 在Zabbix服务器Web后台添加主机，方法同上：<br>[![p9Z28o9.png](https://s1.ax1x.com/2023/04/23/p9Z28o9.png)](https://imgse.com/i/p9Z28o9)



#### 4.新建监控项

##### 以新建华为设备为例：

- 在`配置→主机`选择需要新建监控项的主机：<br>[![p9ZfLlt.png](https://s1.ax1x.com/2023/04/23/p9ZfLlt.png)](https://imgse.com/i/p9ZfLlt)

- 点击创建监控项：<br>[![p9Z2HWq.png](https://s1.ax1x.com/2023/04/23/p9Z2HWq.png)](https://imgse.com/i/p9Z2HWq)

- 输入所需监控项的`名称`、`键值`、`SNMP OID`：<br>[![p9ZRl1P.png](https://s1.ax1x.com/2023/04/23/p9ZRl1P.png)](https://imgse.com/i/p9ZRl1P)


监控项的`键值`、`OID`可在华为官网`https://info.support.huawei.com/info-finder/tool/zh/enterprise/mib`查询，如下图为交换机CPU占用率的MIB信息：

[![p9ZRbAH.png](https://s1.ax1x.com/2023/04/23/p9ZRbAH.png)](https://imgse.com/i/p9ZRbAH)

- 可通过以下Linux命令对OID进行测试：

  ```shell
  snmpwalk -v 2c -c 团体名 设备IP  OID
  ```

  [<img src="https://s1.ax1x.com/2023/04/23/p9ZWHMV.png" alt="p9ZWHMV.png" style="zoom: 50%;" />](https://imgse.com/i/p9ZWHMV)

返回值为1，即CPU占用率为1%

- 测试无误后点添加即可添加监控项<br>[![p9ZfiqO.png](https://s1.ax1x.com/2023/04/23/p9ZfiqO.png)](https://imgse.com/i/p9ZfiqO)



#### 5.新建触发器

- 在`配置→主机`选择需要新建触发器的主机，点击旁边的触发器 ，然后点击创建触发器：<br>[<img src="https://s1.ax1x.com/2023/04/23/p9Z4Jvq.png" alt="p9Z4Jvq.png" style="zoom:70%;" />](https://imgse.com/i/p9Z4Jvq)

- 输入触发器表达式，表达式非常灵活，可以利用它创建复杂的逻辑表达关系。

详细的表达式用法参考官方文档：

`https://www.zabbix.com/documentation/6.0/zh/manual/config/triggers/expression`

- 完成后，点击*添加*。新的触发器将会显示在触发器列表中。



#### 6.编辑仪表版

可通过编辑仪表盘，自定义仪表盘显示的监控内容

[![p9Z5zTO.png](https://s1.ax1x.com/2023/04/23/p9Z5zTO.png)](https://imgse.com/i/p9Z5zTO)

#### 7.主机监控项图表

在`检测→主机`选择需要查看图标的主机，点击旁边的`图形` ，可根据不同时间跨度查看主机监控项的图表：[![p9Z5XOx.png](https://s1.ax1x.com/2023/04/23/p9Z5XOx.png)](https://imgse.com/i/p9Z5XOx)



### 七、资料推荐及Q&A

- 官方文档（强推）`https://www.zabbix.com/documentation/6.0/zh/`

- Zabbix测试Demo（已失效）：


- Zabbix镜像源：
  - 南京大学镜像站`https://mirrors.nju.edu.cn/zabbix/`
  - 阿里云镜像站`https://mirrors.aliyun.com/zabbix/`
  - 华为云镜像站`https://repo.huaweicloud.com/zabbix/`