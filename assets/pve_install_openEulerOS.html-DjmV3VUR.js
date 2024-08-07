import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,c as s,d as g,w as e,a as p,o as c,e as i,f as n}from"./app-DsnBKYy5.js";const _="/imgs/pve_install_openEulerOS/image-20240807100343025.png",m="/imgs/pve_install_openEulerOS/aadf00011cffae17cadcf4e5c254f33.png",u="/imgs/pve_install_openEulerOS/img_20240807141340.png",f="/imgs/pve_install_openEulerOS/img_20240807150500.png",d="/imgs/pve_install_openEulerOS/img_20240807150302.png",h="/imgs/pve_install_openEulerOS/img_20240807152450.png",S="/imgs/pve_install_openEulerOS/img_20240807152812.png",O="/imgs/pve_install_openEulerOS/img_20240807162510.png",v="/imgs/pve_install_openEulerOS/img_20240807162708.png",E="/imgs/pve_install_openEulerOS/img_20240807163851.png",x="/imgs/pve_install_openEulerOS/img_20240807163951.png",b="/imgs/pve_install_openEulerOS/img_20240807164144.png",k="/imgs/pve_install_openEulerOS/img_20240807165242.png",y="/imgs/pve_install_openEulerOS/img_20240807170214.png",I="/imgs/pve_install_openEulerOS/img_20240807172022.png",z="/imgs/pve_install_openEulerOS/img_20240807172342.png",w={},P=p('<h1 id="proxmox-ve-安装-openeuler-24-03" tabindex="-1"><a class="header-anchor" href="#proxmox-ve-安装-openeuler-24-03"><span>Proxmox VE 安装 openEuler 24.03</span></a></h1><h2 id="获取-os-镜像下载链接" tabindex="-1"><a class="header-anchor" href="#获取-os-镜像下载链接"><span>获取 OS 镜像下载链接</span></a></h2><p>通过<a href="https://www.openeuler.org/zh/download/?version=openEuler%2024.03%20LTS" target="_blank" rel="noopener noreferrer">官网</a>或镜像站<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>获取下载链接</p><p>选择系统架构及所需镜像版本</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>Network Install ISO（网络安装 ISO）：</p><ul><li>特点：这是一个较小的 ISO 镜像，通常只包含基本的安装程序和必要的工具。</li><li>用途：在安装过程中需要连接到网络，从在线存储库中下载和安装软件包。</li><li>适用场景：适用于网络环境良好的场合，可以灵活选择和安装最新的软件包和组件。</li></ul></li><li><p>Offline Everything ISO（离线全量 ISO）：</p><ul><li>特点：这是一个较大的 ISO 镜像，包含 openEuler 操作系统的所有软件包和组件。</li><li>用途：可以在没有网络连接的情况下进行完全离线安装。</li><li>适用场景：适用于无法联网或网络连接不稳定的场合，确保所有需要的软件包都能离线安装。</li></ul></li><li><p>Offline Standard ISO（离线标准 ISO）：</p><ul><li>特点：这是一个中等大小的 ISO 镜像，包含常用的系统组件和软件包，但不包括所有可选的软件包。</li><li>用途：可以在没有网络连接的情况下进行基本系统的离线安装。</li><li>适用场景：适用于无法联网或网络连接不稳定，但只需要基本功能的场合。</li></ul></li></ul><h2 id="下载-os-镜像至-proxmoxve" tabindex="-1"><a class="header-anchor" href="#下载-os-镜像至-proxmoxve"><span>下载 OS 镜像至 ProxmoxVE</span></a></h2><p>登录 Proxmox VE，点击 <code>存储</code> - <code>ISO镜像</code> - <code>从URL下载</code></p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>粘贴下载链接，点击<code>查询网址</code>后，点击<code>下载</code>，等待下载完成</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="创建虚拟机" tabindex="-1"><a class="header-anchor" href="#创建虚拟机"><span>创建虚拟机</span></a></h2><p>点击右上角<img src="'+f+'" alt="" height="25" loading="lazy">，选择openEuler系统镜像，其他虚拟机参数根据实际需求进行配置</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="安装系统" tabindex="-1"><a class="header-anchor" href="#安装系统"><span>安装系统</span></a></h2><p>右键对应虚拟机，点击 <code>启动</code></p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入虚拟机控制台，选择第一项 <code>Install openEuler XXXXX</code></p><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>若出现以下报错：</p><figure><img src="'+O+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将处理器类别改为<code>host</code></p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>选择语言</strong></p><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完成带有感叹号标志的内容配置</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于使用的是网络安装ISO镜像，需要配置网络安装源，且确保<strong>网络畅通</strong></p><p><strong>网络配置</strong></p><p>进入 <em>网络和主机名</em> 页面，配置网卡IP地址或自动获取。</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>安装源配置</strong></p><p>进入 <em>安装源</em> 页面，输入安装源地址，地址为：<code>https://repo.openeuler.org/openEuler-{version}/OS/$basearch/</code> ，其中 version 为版本号，$basearch 为CPU 架构，根据<strong>实际情况</strong>输入，同时可使用国内镜像站<sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup>地址，提升下载速度</p><p>如该案例安装源地址为：</p>',34),T=n("p",null,"https://repo.openeuler.org/openEuler-24.03-LTS/OS/x86_64/",-1),V=n("p",null,"南京大学镜像站",-1),N=n("p",null,"https://mirrors.nju.edu.cn/openeuler/openEuler-24.03-LTS/OS/x86_64/",-1),A=p('<figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>开始安装</strong></p><p>其他内容根据需求进行配置，全部配置完成后，点击<code>开始安装</code></p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进度条走完，点击<code>重启系统</code>完成安装</p><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完成安装后，可将虚拟机系统镜像卸载，确保启动引导正确（非必要）</p><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>开源镜像站：<br><a href="https://mirrors.aliyun.com/openeuler/" target="_blank" rel="noopener noreferrer">阿里云</a>https://mirrors.aliyun.com/openeuler/<br><a href="https://mirrors.163.com/openeuler/" target="_blank" rel="noopener noreferrer">网易</a>https://mirrors.163.com/openeuler/<br><a href="https://mirrors.nju.edu.cn/openeuler/" target="_blank" rel="noopener noreferrer">南京大学</a>https://mirrors.nju.edu.cn/openeuler/<br>等... <a href="#footnote-ref1" class="footnote-backref">↩︎</a> <a href="#footnote-ref1:1" class="footnote-backref">↩︎</a></p></li></ol></section>',10);function C(L,X){const r=a("Tabs");return c(),s("div",null,[P,g(r,{id:"167",data:[{id:"官方地址"},{id:"镜像站地址"}]},{title0:e(({value:o,isActive:t})=>[i("官方地址")]),title1:e(({value:o,isActive:t})=>[i("镜像站地址")]),tab0:e(({value:o,isActive:t})=>[T]),tab1:e(({value:o,isActive:t})=>[V,N]),_:1}),A])}const K=l(w,[["render",C],["__file","pve_install_openEulerOS.html.vue"]]),Z=JSON.parse(`{"path":"/posts/pve_install_openEulerOS.html","title":"Proxmox VE 安装 openEuler 24.03","lang":"zh-CN","frontmatter":{"description":"Proxmox VE 安装 openEuler 24.03 获取 OS 镜像下载链接 通过官网或镜像站[1]获取下载链接 选择系统架构及所需镜像版本 Network Install ISO（网络安装 ISO）： 特点：这是一个较小的 ISO 镜像，通常只包含基本的安装程序和必要的工具。 用途：在安装过程中需要连接到网络，从在线存储库中下载和安装软件包。...","head":[["meta",{"property":"og:url","content":"https://okeen.top/posts/pve_install_openEulerOS.html"}],["meta",{"property":"og:site_name","content":"Keen's Blog"}],["meta",{"property":"og:title","content":"Proxmox VE 安装 openEuler 24.03"}],["meta",{"property":"og:description","content":"Proxmox VE 安装 openEuler 24.03 获取 OS 镜像下载链接 通过官网或镜像站[1]获取下载链接 选择系统架构及所需镜像版本 Network Install ISO（网络安装 ISO）： 特点：这是一个较小的 ISO 镜像，通常只包含基本的安装程序和必要的工具。 用途：在安装过程中需要连接到网络，从在线存储库中下载和安装软件包。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://okeen.top/imgs/pve_install_openEulerOS/image-20240807100343025.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-07T09:42:19.000Z"}],["meta",{"property":"article:author","content":"Keen"}],["meta",{"property":"article:modified_time","content":"2024-08-07T09:42:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Proxmox VE 安装 openEuler 24.03\\",\\"image\\":[\\"https://okeen.top/imgs/pve_install_openEulerOS/image-20240807100343025.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/aadf00011cffae17cadcf4e5c254f33.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807141340.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807150500.png =x25\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807150302.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807152450.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807152812.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807162510.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807162708.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807163851.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807163951.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807164144.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807165242.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807170214.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807172022.png\\",\\"https://okeen.top/imgs/pve_install_openEulerOS/img_20240807172342.png\\"],\\"dateModified\\":\\"2024-08-07T09:42:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Keen\\",\\"url\\":\\"https://okeen.top\\"}]}"]]},"headers":[{"level":2,"title":"获取 OS 镜像下载链接","slug":"获取-os-镜像下载链接","link":"#获取-os-镜像下载链接","children":[]},{"level":2,"title":"下载 OS 镜像至 ProxmoxVE","slug":"下载-os-镜像至-proxmoxve","link":"#下载-os-镜像至-proxmoxve","children":[]},{"level":2,"title":"创建虚拟机","slug":"创建虚拟机","link":"#创建虚拟机","children":[]},{"level":2,"title":"安装系统","slug":"安装系统","link":"#安装系统","children":[]}],"git":{"createdTime":1723023739000,"updatedTime":1723023739000,"contributors":[{"name":"Keen","email":"keenchen63@outlook.com","commits":1}]},"readingTime":{"minutes":2.58,"words":775},"filePathRelative":"posts/pve_install_openEulerOS.md","localizedDate":"2024年8月7日","excerpt":"\\n<h2>获取 OS 镜像下载链接</h2>\\n<p>通过<a href=\\"https://www.openeuler.org/zh/download/?version=openEuler%2024.03%20LTS\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">官网</a>或镜像站<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">获取下载链接</a></p>","autoDesc":true}`);export{K as comp,Z as data};
