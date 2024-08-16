import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as u,b as t,d as e,e as i,w as n,a as r,o as g,f as c}from"./app-Dz8Xngx4.js";const h="/imgs/jumpserver_guide/img02.png",m="/imgs/jumpserver_guide/img01.png",v="/imgs/jumpserver_guide/img03.png",b="/imgs/jumpserver_guide/img04.png",_="/imgs/jumpserver_guide/img05.png",k="/imgs/jumpserver_guide/img12.png",S="/imgs/jumpserver_guide/img13.png",f="/imgs/jumpserver_guide/img14.png",y="/imgs/jumpserver_guide/img15.png",j="/imgs/jumpserver_guide/img16.png",A="/imgs/jumpserver_guide/img17.png",x="/imgs/jumpserver_guide/img18.png",J="/imgs/jumpserver_guide/img19.png",D="/imgs/jumpserver_guide/img06.png",R="/imgs/jumpserver_guide/img08.png",F="/imgs/jumpserver_guide/img09.png",z="/imgs/jumpserver_guide/img07.png",C="/imgs/jumpserver_guide/img10.png",W="/imgs/jumpserver_guide/img20.png",w="/imgs/jumpserver_guide/img21.png",P="/imgs/jumpserver_guide/img11.png",M={},B=r('<h1 id="jumpserver-介绍及安装部署" tabindex="-1"><a class="header-anchor" href="#jumpserver-介绍及安装部署"><span>JumpServer 介绍及安装部署</span></a></h1><h2 id="jumpserver-介绍" tabindex="-1"><a class="header-anchor" href="#jumpserver-介绍"><span>JumpServer 介绍</span></a></h2><h3 id="为什么需要堡垒机" tabindex="-1"><a class="header-anchor" href="#为什么需要堡垒机"><span>为什么需要堡垒机</span></a></h3><p>以更安全的⽅式管控和登录各种类型的资产。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>堡垒机的 4A 能力</p>',6),H=t("strong",null,"身份冒⽤",-1),L=t("strong",null,"复⽤",-1),T=t("strong",null,"误操作",-1),I=t("strong",null,"权限滥用",-1),N=t("strong",null,"追溯",-1),E=t("strong",null,"事故分析",-1),O=r('<h3 id="什么是-jumpserver" tabindex="-1"><a class="header-anchor" href="#什么是-jumpserver"><span>什么是 JumpServer</span></a></h3><p>JumpServer 是广受欢迎的开源堡垒机，是符合 4A 规范的专业运维安全审计系统。JumpServer 堡垒机帮助企业以更安全的方式管控和登录各种类型的资产，包括：</p><table><thead><tr><th>类型</th><th>内容</th></tr></thead><tbody><tr><td>SSH</td><td>Linux / Unix / 网络设备 等</td></tr><tr><td>Windows</td><td>Web 方式连接 / 原生 RDP 连接</td></tr><tr><td>数据库</td><td>MySQL / MariaDB / PostgreSQL / Oracle / SQLServer / ClickHouse 等</td></tr><tr><td>NoSQL</td><td>Redis / MongoDB 等</td></tr><tr><td>GPT</td><td>ChatGPT 等</td></tr><tr><td>云服务</td><td>Kubernetes / VMware vSphere 等</td></tr><tr><td>Web 站点</td><td>各类系统的 Web 管理后台</td></tr><tr><td>应用</td><td>通过 Remote App 连接各类应用</td></tr></tbody></table><figure><img src="'+m+'" alt="JumpServer的能力范围" tabindex="0" loading="lazy"><figcaption>JumpServer的能力范围</figcaption></figure><table><thead><tr><th>身份鉴别 Authentication</th><th>授权控制 Authorization</th><th>账号管理 Accounting</th><th>安全审计 Auditing</th></tr></thead><tbody><tr><td>登录认证</td><td>多维度授权</td><td>账号列表</td><td>会话审计</td></tr><tr><td>MFA认证</td><td>资产授权</td><td>账号模板</td><td>录像审计</td></tr><tr><td>登录复核</td><td>动作授权</td><td>账号推送</td><td>命令审计</td></tr><tr><td>登录限制</td><td>时间授权</td><td></td><td>文件传输</td></tr><tr><td></td><td>命令过滤</td><td></td><td>实时监控</td></tr><tr><td></td><td>文件管理</td><td></td><td>登录日志</td></tr><tr><td></td><td>协议授权</td><td></td><td>操作日志</td></tr></tbody></table><figure><img src="'+v+'" alt="UI展示" tabindex="0" loading="lazy"><figcaption>UI展示</figcaption></figure><h3 id="jumpserver-系统架构" tabindex="-1"><a class="header-anchor" href="#jumpserver-系统架构"><span>JumpServer 系统架构</span></a></h3><p>JumpServer 采用分层架构，分别是负载层、接入层、核心层、数据层、存储层。</p><p>应用架构图如下：</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>其中，多个组件间大致的架构如下图所示：</p><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="jumpserver-安装部署" tabindex="-1"><a class="header-anchor" href="#jumpserver-安装部署"><span>JumpServer 安装部署</span></a></h2><p>支持 Linux单机部署、Linux集群部署、k8s模式部署</p><h3 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h3><ul><li>支持主流 Linux 发行版本（基于 Debian / RedHat，包括国产操作系统）</li></ul><table><thead><tr><th>操作系统</th><th>架构</th><th>Linux 内核</th><th>软件要求</th><th>最小化硬件配置</th></tr></thead><tbody><tr><td>linux/amd64</td><td>x86_64</td><td>&gt;= 4.0</td><td>wget, curl, tar, gettext, iptables, python</td><td>2 Core / 8GB RAM / 60G HDD</td></tr><tr><td>linux/arm64</td><td>aarch64</td><td>&gt;= 4.0</td><td>wget, curl, tar, gettext, iptables, python</td><td>2 Core / 8GB RAM / 60G HDD</td></tr></tbody></table><h3 id="部署演示-linux单机部署" tabindex="-1"><a class="header-anchor" href="#部署演示-linux单机部署"><span>部署演示（Linux单机部署）</span></a></h3><p>1.从官网<a href="https://community.fit2cloud.com/#/products/jumpserver/downloads" target="_blank" rel="noopener noreferrer">https://community.fit2cloud.com/#/products/jumpserver/downloads</a>下载最新的离线安装包，并上传至部署服务器<code>/opt</code> 目录；</p><p>2.解压缩;</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 进入 /opt 目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 解压缩安装包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jumpserver-ce-v4.0.2-x86_64.tar.gz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 进入安装包目录</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> jumpserver-ce-v4.0.2-x86_64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.安装；</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./jmsctl.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">./jmsctl.sh</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.访问登录</p><blockquote><p>地址: http://&lt;JumpServer服务器IP地址&gt;:&lt;端口默认80&gt;</p><p>用户名: admin</p><p>密码: ChangeMe</p></blockquote><h2 id="jumpserver远程应用部署" tabindex="-1"><a class="header-anchor" href="#jumpserver远程应用部署"><span>JumpServer远程应用部署</span></a></h2><h3 id="功能简介" tabindex="-1"><a class="header-anchor" href="#功能简介"><span>功能简介</span></a></h3><p>远程应用（RemoteApp）功能是微软在 Windows Server 2008之后，在其系统中集成的一项服务功能，使用户可以通过远程桌面访问远端的桌面与程序，客户端本机无须安装系统与应用程序的情况下也能正常使用远端发布的各种的桌面与应用。</p><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="应用发布机" tabindex="-1"><a class="header-anchor" href="#应用发布机"><span>应用发布机</span></a></h3><ul><li>远程应用（RemoteApp）功能需准备应用发布机环境来进行支持。</li><li><strong>应用发布机是用来运行 Web 页面资产或者使用远程应用 Navicat 等连接数据的程序运行主体。</strong></li></ul><ol><li>版本要求</li></ol><p>应用发布机为 Windows Server 服务器：</p>',33),V=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"Windows Server 2016"),t("th",{style:{"text-align":"center"}},"Windows Server 2019")])],-1),G={style:{"text-align":"center"}},U={style:{"text-align":"center"}},Z={start:"2"},K=t("li",null,[t("strong",null,"系统管理员"),e("身份登录")],-1),Q=r("<li>点击<code>远程应用</code> - <code>应用发布机</code>页面的<code>创建</code>按钮即新建一个应用发布机</li><li>支持通过 <strong>WinRM</strong> 和 <strong>OpenSSH</strong> 的协议进行应用发布机的部署（推荐使用 Windows-Server 自带的 <strong>WinRM</strong> 服务）</li>",2),q=t("ul",null,[t("li",null,"通过 WinRM 协议部署应用发布机，在创建应用发布机页面新增 WinRM 协议即可。")],-1),X=t("figure",null,[t("img",{src:S,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),Y=t("p",null,"参数说明：",-1),$=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"名称"),t("td",null,"远程应用发布机的名称，识别信息。")]),t("tr",null,[t("td",null,"IP/主机"),t("td",null,"远程应用发布机的IP信息。")]),t("tr",null,[t("td",null,"协议组"),t("td",null,"远程应用发布机支持的协议族以及协议组的端口。")]),t("tr",null,[t("td",null,"账号列表"),t("td",null,"远程应用发布机的连接账号信息，例如 Administrator 用户。")]),t("tr",null,[t("td",null,"自动创建帐号"),t("td",null,"该选项创建的帐号用于连接发布的应用。")]),t("tr",null,[t("td",null,"创建帐号数量"),t("td",null,"公用帐号创建的数量。")]),t("tr",null,[t("td",null,"Core服务地址"),t("td",null,"远程应用发布机的 Agent 与 JumpServer 后端 Core 组件服务的通信地址。")]),t("tr",null,[t("td",null,"RDS 许可证"),t("td",null,"RDS 许可证启用选项。")]),t("tr",null,[t("td",null,"RDS 许可服务器"),t("td",null,"RDS 许可服务器信息。")]),t("tr",null,[t("td",null,"RDS 授权模式"),t("td",null,'选择"设备"或"用户"设置授权模式。')]),t("tr",null,[t("td"),t("td",null,"A.设备：允许一台设备（任何用户使用的）连接到远程应用发布机。")]),t("tr",null,[t("td"),t("td",null,"B.用户：授予一个用户从无限数目的客户端计算机或设备访问远程应用发布机。")]),t("tr",null,[t("td",null,"RDS 单用户单会话"),t("td",null,'选择"禁用"或"启用"设置单用户单会话模式。')]),t("tr",null,[t("td"),t("td",null,"A.禁用：允许每个用户可以同时多台客户端电脑连接服务器远程桌面。")]),t("tr",null,[t("td"),t("td",null,"B.启用：禁止每个用户可以同时多台客户端电脑连接服务器远程桌面。")]),t("tr",null,[t("td",null,"RDS 最大断开时间"),t("td",null,"如果某个会话连接达到了此最大时间，连接即断开。")]),t("tr",null,[t("td",null,"RDS 远程应用注销时间限制"),t("td",null,"远程应用会话断开后的注销时间。")])])],-1),tt=t("ul",null,[t("li",null,[e("通过 OpenSSH 协议部署需要安装 OpenSSH ，可以在 JumpServer 页面 - "),t("code",null,"帮助"),e(" - "),t("code",null,"关于"),e(" - "),t("code",null,"下载中心"),e(" 页面找到 OpenSSH 安装包。 "),t("img",{src:f,alt:"",loading:"lazy"}),t("img",{src:y,alt:"",loading:"lazy"})]),t("li",null,"下载 OpenSSH 安装包后，传到应用发布机桌面，双击进行安装"),t("li",null,"安装完成后，在创建应用发布机页面选择 OpenSSH 协议进行配置即可")],-1),et=t("p",null,"参数说明：",-1),it=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"名称"),t("td",null,"远程应用发布机的名称，识别信息。")]),t("tr",null,[t("td",null,"IP/主机"),t("td",null,"远程应用发布机的IP信息。")]),t("tr",null,[t("td",null,"协议组"),t("td",null,"远程应用发布机支持的协议族以及协议组的端口。")]),t("tr",null,[t("td",null,"账号列表"),t("td",null,"远程应用发布机的连接账号信息，例如 Administrator 用户。")]),t("tr",null,[t("td",null,"自动创建帐号"),t("td",null,"该选项创建的帐号用于连接发布的应用。")]),t("tr",null,[t("td",null,"创建帐号数量"),t("td",null,"公用帐号创建的数量。")]),t("tr",null,[t("td",null,"Core服务地址"),t("td",null,"远程应用发布机的 Agent 与 JumpServer 后端 Core 组件服务的通信地址。")]),t("tr",null,[t("td",null,"RDS 许可证"),t("td",null,"RDS 许可证启用选项。")]),t("tr",null,[t("td",null,"RDS 许可服务器"),t("td",null,"RDS 许可服务器信息。")]),t("tr",null,[t("td",null,"RDS 授权模式"),t("td",null,'选择"设备"或"用户"设置授权模式。')]),t("tr",null,[t("td"),t("td",null,"A.设备：允许一台设备（任何用户使用的）连接到远程应用发布机。")]),t("tr",null,[t("td"),t("td",null,"B.用户：授予一个用户从无限数目的客户端计算机或设备访问远程应用发布机。")]),t("tr",null,[t("td",null,"RDS 单用户单会话"),t("td",null,'选择"禁用"或"启用"设置单用户单会话模式。')]),t("tr",null,[t("td"),t("td",null,"A.禁用：允许每个用户可以同时多台客户端电脑连接服务器远程桌面。")]),t("tr",null,[t("td"),t("td",null,"B.启用：禁止每个用户可以同时多台客户端电脑连接服务器远程桌面。")]),t("tr",null,[t("td",null,"RDS 最大断开时间"),t("td",null,"如果某个会话连接达到了此最大时间，连接即断开。")]),t("tr",null,[t("td",null,"RDS 远程应用注销时间限制"),t("td",null,"远程应用会话断开后的注销时间。")])])],-1),lt=r('<ol start="3"><li>部署应用发布机 <ul><li>点击应用发布机名称进入应用发布机详情页中，选择<code>发布机部署</code>页签，点击<code>初始化部署</code>按钮，初始化应用发布机 <img src="'+j+'" alt="" loading="lazy"></li><li>查看日志，确保部署成功 <img src="'+A+'" alt="" loading="lazy"></li></ul></li></ol><h3 id="远程应用" tabindex="-1"><a class="header-anchor" href="#远程应用"><span>远程应用</span></a></h3>',2),rt=t("p",null,"添加远程应用",-1),nt=t("li",null,[t("strong",null,"系统管理员"),e("身份登录")],-1),dt=t("li",null,[e("点击"),t("code",null,"远程应用"),e(" - "),t("code",null,"远程应用"),e("页面")],-1),st=t("li",null,[e("点击"),t("code",null,"应用市场"),e("，下载所需远程应用")],-1),at=t("li",null,[e("点击"),t("code",null,"上传"),e("，上传远程应用 "),t("img",{src:x,alt:"",loading:"lazy"})],-1),ot=r('<li><p>部署远程应用</p><ul><li>点击<code>应用发布机</code>页签</li><li>点击应用发布机名称进入应用发布机详情页中，选择<code>远程应用</code>页签</li><li>点击所需应用的<code>部署</code>按键进行远程应用部署，发布状态为<code>成功</code>即部署成功 <img src="'+J+'" alt="" loading="lazy"></li></ul></li>',1),pt=r('<h3 id="创建-web-资产" tabindex="-1"><a class="header-anchor" href="#创建-web-资产"><span>创建 Web 资产</span></a></h3><p><a href="#create-website">跳转此章节：资产管理 - 创建Web资产</a></p><h2 id="jumpserver管理员手册" tabindex="-1"><a class="header-anchor" href="#jumpserver管理员手册"><span>JumpServer管理员手册</span></a></h2><p>该章节包含JumpServer堡垒机<strong>管理员</strong>基础功能配置</p><h3 id="页面说明" tabindex="-1"><a class="header-anchor" href="#页面说明"><span>页面说明</span></a></h3><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><strong>控制台</strong>：管理员操作入口，通过控制台，管理员可进行用户管理、资产管理、应用管理、账号管理、权限管理、访问控制等配置。</li><li><strong>审计台</strong>：审计员操作入口，通过审计台，审计员可查看各会话的连接详细信息及各类型日志,组织审计员只能够看到该组织下的相关数据。</li><li><strong>工作台</strong>：普通用户操作入口，通过工作台，普通用户可以通过工作台看到自己有权限操作运维的资产。</li></ul><h3 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理"><span>用户管理</span></a></h3><ol><li>创建用户</li></ol><ul><li>进入<code>控制台</code></li><li>点击<code>用户管理</code> - <code>用户列表</code> 页面的<code>创建</code>按钮，进入用户详细创建页面。</li></ul><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>名称</td><td>用户识别名称，可重复。</td></tr><tr><td>用户名</td><td>登录 JumpServer 的登录账号，不可重复。</td></tr><tr><td>邮箱</td><td>登录账号对应的邮箱地址，不可重复。</td></tr><tr><td>用户组</td><td>将用户按组进行管理，主要用于资产授权，当某个资产对某个用户组授权时，这个用户组所有的用户都对这个资产有相应的权限。</td></tr><tr><td>密码策略</td><td>密码在管理员创建用户的过程中可以自主设置；也可以生成密码连接，通过邮件发送给用户。JumpServer 会发送一条“设置用户密码”的邮件到所填写的用户邮箱。</td></tr><tr><td>MFA</td><td>多因子身份认证。启用 MFA 后，用户登录时需输入用户名、密码（第一安全要素）及 MFA 设备的动态验证码（第二安全要素），提高账户安全保护。</td></tr><tr><td>来源</td><td>指定该用户的来源，如手动创建则为“数据库”，如从 LDAP 中导入则为 “LDAP”。</td></tr><tr><td>系统角色</td><td>系统角色决定用户在系统层面的权限（如系统管理员、审计员、用户/其他自定义角色）。</td></tr><tr><td>组织角色</td><td>组织角色决定用户在组织层面的权限（如组织管理员、审计员、用户/其他自定义角色）。</td></tr><tr><td>激活</td><td>表示用户状态是否正常可登录，非激活状态用户不可登录。</td></tr><tr><td>失效日期</td><td>指用户可进行登录的最后日期，失效后不可登录。</td></tr><tr><td>手机</td><td>非必填项，配置用户的手机号，用于 “MFA” 手机短信的接收。</td></tr><tr><td>备注</td><td>非必填项，管理员配置该用户的备注信息。</td></tr></tbody></table><ol start="2"><li>创建用户组</li></ol><ul><li>进入<code>控制台</code></li><li>点击<code>用户管理</code> - <code>用户组</code> 页面的<code>创建</code>按钮，进入用户组创建页面。</li></ul><figure><img src="'+F+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>名称</td><td>用户组名称。</td></tr><tr><td>用户</td><td>将用户添加到该用户组中。</td></tr></tbody></table><h3 id="资产管理" tabindex="-1"><a class="header-anchor" href="#资产管理"><span>资产管理</span></a></h3><ol><li>手动创建资产</li></ol><ul><li>进入<code>控制台</code></li><li>点击<code>资产管理</code> - <code>资产列表</code> 进入页面</li><li>点击页面左上角的<code>创建</code>按钮，选择资产类型（以 Linux 主机为例），进入资产创建页面，填写资产详细信息。</li></ul><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>名称</td><td>必填项，该资产在 JumpServer 中的名称，与资产本身计算机名无关，不可重名。</td></tr><tr><td>IP/主机</td><td>必填项，资产的真实 IP 或 VIP 或域名。允许重名。</td></tr><tr><td>资产平台</td><td>默认项，资产的资产平台，各个平台可以设置不同的字符编码及连接参数以及改密命令。</td></tr><tr><td>节点</td><td>必填项，该资产所属于的节点。</td></tr><tr><td>协议组</td><td>必填项，资产访问时用到的协议，可选一个或多个。</td></tr><tr><td>账号列表</td><td>必填项，该资产的账号，可创建多个账号。账号与资产绑定。</td></tr><tr><td>网域</td><td>可选项，针对某些跨网段资产，需要以网域网关（sshpass）为代理进行访问。</td></tr><tr><td>标签</td><td>可选项，给该资产添加的标签, 方便管理。</td></tr><tr><td>激活</td><td>必选项，该资产是否可使用。</td></tr></tbody></table><ol start="2"><li>通过 Excel 批量导入资产</li></ol><ul><li>JumpServer 提供两种模板信息，csv 与 xlsx</li><li>进入<code>控制台</code></li><li>点击<code>资产管理</code> - <code>资产列表</code> 点击资产分类进入具体的分类页面</li><li>首次导入资产，可点击资产列表的右上角导入按钮，下载导入模板后根据模板提示填写需要导入或更新的信息，填写完成后在导入页面导入文件即可。</li></ul><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><a id="create-website"></a></p><ol start="3"><li>创建 Web 资产</li></ol><ul><li>进入<code>控制台</code></li><li>点击<code>资产管理</code> - <code>资产列表</code> 进入页面</li><li>点击页面左上角的<code>创建</code>按钮，选择资产类型（Web - Website），进入资产创建页面，填写资产详细信息</li><li>其中<code>选择器</code>参数，需要根据目标 Url 页面中的代码参数中获取,正确配置起到<strong>密码代填</strong>及<strong>自动登录</strong>的功能</li><li>通过 F12 打开目标 Url 的开发者工具页面，步骤如下图： <img src="'+W+'" alt="" loading="lazy"></li><li>依次获取“用户名”、“密码”、“登录按钮”对应的选择器id与参数</li><li>把获取到的参数填写至创建的目标 Website 资产，如下图： <img src="'+w+'" alt="" loading="lazy"></li><li>完成其他信息填写后，点击<code>提交</code>完成 Web 资产创建</li></ul><h3 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理"><span>权限管理</span></a></h3><ol><li>授权简述</li></ol><ul><li>资产的授权规则通过三个维度确定用户拥有什么样的权限；</li><li>资产授权规则三个维度分别如下:</li></ul><table><thead><tr><th>维度</th><th>说明</th></tr></thead><tbody><tr><td>用户</td><td>用户维度主要包括用户与用户组（代表该用户组下所有的用户）</td></tr><tr><td>资产</td><td>资产维度主要包括资产、节点（资产组的概念，代表该节点下的所有资产）、账号（登录资产的账号）</td></tr><tr><td>动作</td><td>动作维度主要包括连接权限、上传下载权限、复制粘贴权限（仅支持SSH协议、RDP协议和VNC协议）</td></tr></tbody></table><ol start="2"><li>创建资产授权规则</li></ol><ul><li>进入<code>控制台</code></li><li>点击<code>授权管理</code> - <code>资产授权</code> 进入页面</li><li>点击<code>创建</code>按钮，进入资产授权创建页面</li></ul><p><strong>如示例图，创建了<code>user组</code>用户授权<code>/DEFAULT/Linux主机</code>节点的权限</strong></p><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>名称</td><td>授权规则的名称。</td></tr><tr><td>用户</td><td>JumpServer 登录用户，即给该用户授权后续资产的连接或其它权限。</td></tr><tr><td>用户组</td><td>JumpServer 登录用户组，即给该用户组授权后续资产的连接或其它权限。</td></tr><tr><td>资产</td><td>授权的资产，即用户需求连接的资产。</td></tr><tr><td>节点</td><td>授权的节点，即用户需求连接的资产组。</td></tr><tr><td>账号</td><td>授权资产登录的账号。</td></tr><tr><td></td><td>A. 所有账号：资产上添加的所有账号都授权；</td></tr><tr><td></td><td>B. 指定账号：手动输入需要授权的账号名称；</td></tr><tr><td></td><td>C. 手动输入：授权用户连接时自行输入用户名/密码；</td></tr><tr><td></td><td>D. 同名账户：授权用户连接时使用与用户同名的账号。</td></tr><tr><td>协议</td><td>A. 所有：所有协议均可使用;</td></tr><tr><td></td><td>B. 指定: 指定用户使用 SSH、SFTP、RDP 等协议。</td></tr><tr><td>权限</td><td>授权的动作，即用户对资产可以做什么。</td></tr><tr><td></td><td>注：剪贴板权限控制目前仅支持 RDP/VNC 协议的连接。</td></tr><tr><td>开始日期</td><td>该授权规则开始的时间，默认为该授权规则创建的时间。</td></tr><tr><td>失效日期</td><td>该授权规则失效的时间。</td></tr></tbody></table><h2 id="jumpserver用户手册" tabindex="-1"><a class="header-anchor" href="#jumpserver用户手册"><span>JumpServer用户手册</span></a></h2><p>该章节包含JumpServer堡垒机<strong>用户</strong>基础操作</p><p>留坑</p><h2 id="jumpserver审计员手册" tabindex="-1"><a class="header-anchor" href="#jumpserver审计员手册"><span>JumpServer审计员手册</span></a></h2><p>该章节包含JumpServer堡垒机<strong>审计员</strong>基础操作</p><p>留坑</p>',42);function ut(gt,ct){const l=a("HopeIcon"),o=a("Tabs");return g(),u("div",null,[B,t("ul",null,[t("li",null,[e("身份鉴别 Authentication     "),i(l,{icon:"right-long"}),e("     防⽌ "),H,e(" 和 "),L]),t("li",null,[e("授权控制 Authorization        "),i(l,{icon:"right-long"}),e("     防止内部"),T,e("和"),I]),t("li",null,[e("账号管理 Accounting             "),i(l,{icon:"right-long"}),e("     人员和资产的管理")]),t("li",null,[e("安全审计 Auditing                   "),i(l,{icon:"right-long"}),e("     "),N,e("的保障和"),E,e("的依据")])]),O,t("table",null,[V,t("tbody",null,[t("tr",null,[t("td",G,[i(l,{icon:"check"})]),t("td",U,[i(l,{icon:"check"})])])])]),t("ol",Z,[t("li",null,[e("创建应用发布机 "),t("ul",null,[K,t("li",null,[e("点击右上角"),i(l,{icon:"gear"}),e("，进入系统设置")]),Q])])]),i(o,{id:"455",data:[{id:"WinRM"},{id:"OpenSSH"}]},{title0:n(({value:d,isActive:s})=>[e("WinRM")]),title1:n(({value:d,isActive:s})=>[e("OpenSSH")]),tab0:n(({value:d,isActive:s})=>[q,X,Y,$]),tab1:n(({value:d,isActive:s})=>[c(" tab 2 内容 "),tt,et,it]),_:1}),lt,t("ol",null,[t("li",null,[rt,t("ul",null,[nt,t("li",null,[e("点击右上角"),i(l,{icon:"gear"}),e("，进入系统设置")]),dt,st,at])]),ot]),pt])}const vt=p(M,[["render",ut],["__file","jumpserver_guide.html.vue"]]),bt=JSON.parse(`{"path":"/posts/jumpserver_guide.html","title":"JumpServer 介绍及安装部署","lang":"zh-CN","frontmatter":{"isOriginal":true,"date":"2024-07-23T00:00:00.000Z","category":"网络","tag":["JumpServer","运维"],"cover":"https://jumpserver.org/images/logo/logo-dark-JumpServer.svg","description":"JumpServer 介绍及安装部署 JumpServer 介绍 为什么需要堡垒机 以更安全的⽅式管控和登录各种类型的资产。 堡垒机的 4A 能力 身份鉴别 Authentication 授权控制 Authorization 账号管理 Accounting 安全审计 Auditing 什么是 JumpServer JumpServer 是广受欢迎的开源...","head":[["meta",{"property":"og:url","content":"https://okeen.top/posts/jumpserver_guide.html"}],["meta",{"property":"og:site_name","content":"Keen's Blog"}],["meta",{"property":"og:title","content":"JumpServer 介绍及安装部署"}],["meta",{"property":"og:description","content":"JumpServer 介绍及安装部署 JumpServer 介绍 为什么需要堡垒机 以更安全的⽅式管控和登录各种类型的资产。 堡垒机的 4A 能力 身份鉴别 Authentication 授权控制 Authorization 账号管理 Accounting 安全审计 Auditing 什么是 JumpServer JumpServer 是广受欢迎的开源..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jumpserver.org/images/logo/logo-dark-JumpServer.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-16T10:03:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://jumpserver.org/images/logo/logo-dark-JumpServer.svg"}],["meta",{"name":"twitter:image:alt","content":"JumpServer 介绍及安装部署"}],["meta",{"property":"article:author","content":"Keen"}],["meta",{"property":"article:tag","content":"JumpServer"}],["meta",{"property":"article:tag","content":"运维"}],["meta",{"property":"article:published_time","content":"2024-07-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-16T10:03:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JumpServer 介绍及安装部署\\",\\"image\\":[\\"https://okeen.top/imgs/jumpserver_guide/img02.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img01.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img03.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img04.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img05.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img12.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img13.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img14.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img15.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img16.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img17.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img18.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img19.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img06.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img08.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img09.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img07.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img10.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img20.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img21.png\\",\\"https://okeen.top/imgs/jumpserver_guide/img11.png\\"],\\"datePublished\\":\\"2024-07-23T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-16T10:03:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Keen\\",\\"url\\":\\"https://okeen.top\\"}]}"]]},"headers":[{"level":2,"title":"JumpServer 介绍","slug":"jumpserver-介绍","link":"#jumpserver-介绍","children":[{"level":3,"title":"为什么需要堡垒机","slug":"为什么需要堡垒机","link":"#为什么需要堡垒机","children":[]},{"level":3,"title":"什么是 JumpServer","slug":"什么是-jumpserver","link":"#什么是-jumpserver","children":[]},{"level":3,"title":"JumpServer 系统架构","slug":"jumpserver-系统架构","link":"#jumpserver-系统架构","children":[]}]},{"level":2,"title":"JumpServer 安装部署","slug":"jumpserver-安装部署","link":"#jumpserver-安装部署","children":[{"level":3,"title":"环境要求","slug":"环境要求","link":"#环境要求","children":[]},{"level":3,"title":"部署演示（Linux单机部署）","slug":"部署演示-linux单机部署","link":"#部署演示-linux单机部署","children":[]}]},{"level":2,"title":"JumpServer远程应用部署","slug":"jumpserver远程应用部署","link":"#jumpserver远程应用部署","children":[{"level":3,"title":"功能简介","slug":"功能简介","link":"#功能简介","children":[]},{"level":3,"title":"应用发布机","slug":"应用发布机","link":"#应用发布机","children":[]},{"level":3,"title":"远程应用","slug":"远程应用","link":"#远程应用","children":[]},{"level":3,"title":"创建 Web 资产","slug":"创建-web-资产","link":"#创建-web-资产","children":[]}]},{"level":2,"title":"JumpServer管理员手册","slug":"jumpserver管理员手册","link":"#jumpserver管理员手册","children":[{"level":3,"title":"页面说明","slug":"页面说明","link":"#页面说明","children":[]},{"level":3,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[]},{"level":3,"title":"资产管理","slug":"资产管理","link":"#资产管理","children":[]},{"level":3,"title":"权限管理","slug":"权限管理","link":"#权限管理","children":[]}]},{"level":2,"title":"JumpServer用户手册","slug":"jumpserver用户手册","link":"#jumpserver用户手册","children":[]},{"level":2,"title":"JumpServer审计员手册","slug":"jumpserver审计员手册","link":"#jumpserver审计员手册","children":[]}],"git":{"createdTime":1722505477000,"updatedTime":1723802634000,"contributors":[{"name":"Keen","email":"keenchen63@outlook.com","commits":3}]},"readingTime":{"minutes":13.4,"words":4020},"filePathRelative":"posts/jumpserver_guide.md","localizedDate":"2024年7月23日","excerpt":"\\n<h2>JumpServer 介绍</h2>\\n<h3>为什么需要堡垒机</h3>\\n<p>以更安全的⽅式管控和登录各种类型的资产。</p>\\n<figure><img src=\\"/imgs/jumpserver_guide/img02.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>堡垒机的 4A 能力</p>\\n<ul>\\n<li>身份鉴别 Authentication &nbsp;&nbsp;&nbsp; </li>\\n<li>授权控制 Authorization &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>\\n<li>账号管理 Accounting &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>\\n<li>安全审计 Auditing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </li>\\n</ul>","autoDesc":true}`);export{vt as comp,bt as data};
