import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,a as t}from"./app-CkgDO1OX.js";const a={},l=t(`<h1 id="网络性能测试的一些方法-工具" tabindex="-1"><a class="header-anchor" href="#网络性能测试的一些方法-工具"><span>网络性能测试的一些方法 &amp; 工具</span></a></h1><h2 id="一、-意义" tabindex="-1"><a class="header-anchor" href="#一、-意义"><span>一、 意义</span></a></h2><p>测试网络性能</p><h2 id="二、-网络性能指标" tabindex="-1"><a class="header-anchor" href="#二、-网络性能指标"><span>二、 网络性能指标</span></a></h2><ul><li><p>带宽（Bandwidth）</p><ul><li><strong>定义</strong>：网络连接在单位时间内能够传输的最大数据量，通常以每秒兆比特（Mbps）或每秒千兆比特（Gbps）来表示。</li><li><strong>正常范围</strong>：取决于网络类型和需求。例如，家庭宽带通常为100 Mbps到1 Gbps；企业网络可能为100 Mbps到10 Gbps或更高。</li></ul></li><li><p>吞吐量（throughput）</p><ul><li><strong>定义</strong>：实际在单位时间内传输的数据量，通常以每秒兆比特（Mbps）来表示。</li><li><strong>正常范围</strong>：理想情况下接近带宽，但由于网络开销和其他因素，实际吞吐量通常比带宽低。</li></ul></li><li><p>延迟（Latency）</p><ul><li><strong>定义</strong>：数据包从源端到达目的端所需的时间，通常以毫秒（ms）为单位。</li><li><strong>正常范围</strong>：局域网（LAN）通常在1 ms到5 ms之间；广域网（WAN）可能在10 ms到100 ms或更高。</li></ul></li><li><p>抖动（Jitter）</p><ul><li><strong>定义</strong>：数据包传输延迟的变异性，通常以毫秒（ms）为单位。</li><li><strong>正常范围</strong>：对于语音和视频应用，抖动应尽量低，一般在30 ms以内较为理想。</li></ul></li><li><p>丢包率（Pocket Lost Rate）</p><ul><li><strong>定义</strong>：在数据传输过程中丢失的数据包占总数据包的比例，通常以百分比表示。</li><li><strong>正常范围</strong>：理想情况下应接近0%。对于大多数应用，丢包率应低于1%；对于实时应用如视频会议，丢包率应低于0.1%。</li></ul></li></ul><h2 id="三、-环境准备" tabindex="-1"><a class="header-anchor" href="#三、-环境准备"><span>三、 环境准备</span></a></h2><h3 id="确定测试目标" tabindex="-1"><a class="header-anchor" href="#确定测试目标"><span>确定测试目标</span></a></h3><p>如下图网络环境，需测试<strong>接入层</strong>至<strong>核心层</strong>的有线无线网络性能，则需将服务器放置在<strong>核心层</strong>。</p><img src="https://s21.ax1x.com/2024/07/21/pk7EnW8.png" alt="测试拓扑" width="400"><h3 id="测试设备" tabindex="-1"><a class="header-anchor" href="#测试设备"><span>测试设备</span></a></h3><p>如测试10G网络，确保服务器及测试终端拥有足够处理性能，同时具备10G网络接入能力，尽量使用Linux系统进行测试；无线测试终端确保拥有高性能无线网卡，以尽可能消除测试终端的性能瓶颈。</p><h3 id="测试时间" tabindex="-1"><a class="header-anchor" href="#测试时间"><span>测试时间</span></a></h3><p>选择网络流量低峰期测试，以减少外界干扰</p><h2 id="四、-测试工具" tabindex="-1"><a class="header-anchor" href="#四、-测试工具"><span>四、 测试工具</span></a></h2><h3 id="_1-iperf3-c-s" tabindex="-1"><a class="header-anchor" href="#_1-iperf3-c-s"><span>1. iPerf3 (C/S)</span></a></h3><blockquote><p><em>iPerf及微软官方均不建议在Windows环境下使用iPerf3，测试性能可能会降低，具体原因可浏览以下文章：<a href="https://techcommunity.microsoft.com/t5/networking-blog/three-reasons-why-you-should-not-use-iperf3-on-windows/ba-p/4117876" target="_blank" rel="noopener noreferrer">不应该在 Windows 上使用 iPerf3 的三个原因</a></em></p></blockquote><hr><h4 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端"><span>服务端</span></a></h4><p><strong>Linux</strong></p><ul><li>根据不同Linux系统，安装iPerf3</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">          ### 用于 RedHat/CentOS/openEuler</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apt-get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### 用于 Debian/Ubuntu</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行iPerf3服务端</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">         ### 查看帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">         ### 以服务端模式运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### 以服务端模式运行并开启进程守护</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，iPerf3服务端以运行并默认监听5201端口</p><img src="https://s21.ax1x.com/2024/07/21/pk7EKSS.jpg" alt="运行iPerf3服务端" width="600"><p><strong>Windows</strong> <em>（官方不建议）</em></p><ul><li>从<code>https://files.budman.pw/</code>下载iPerf3</li><li>将压缩包内的exe及dll文件解压并复制到目录<code>C:\\Windows\\System32</code></li><li>运行iPerf3服务端</li></ul><p>打开 <em>CMD/PowerShell:</em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">         ### 查看帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">         ### 以服务端模式运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### 以服务端模式运行并开启进程守护</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，iPerf3服务端以运行并默认监听5201端口</p><img src="https://s21.ax1x.com/2024/07/21/pk7EmJf.jpg" alt="运行iPerf3服务端" width="600"><hr><h4 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端"><span>客户端</span></a></h4><p><strong>Linux / Windows</strong></p><ul><li>安装iPerf3：客户端与服务端为相同程序，安装方法参考服务端</li><li>使用iPerf3，（Windows通过<em>CMD/PowerShell</em>）</li></ul><p>以下列举几个常用的性能指标测试，可根据实际情况使用具体参数，参数说明通过<code>iperf3 -h</code>命令查看。</p><p><strong>吞吐量测试</strong></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Server_I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">P&gt;         </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">### 基本TCP吞吐量测试</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Server_I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">P&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-t</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 30</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> m</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ### 指定测试持续时间为 30 秒，单位为Mbits/s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下图为TCP吞吐量测试结果，输出结果中包含多项参数指标：</p><img src="https://s21.ax1x.com/2024/07/21/pk7EMQg.jpg" alt="TCP测试结果" width="700"><ul><li>Interval：表示测试的时间段，从 0 到 5 秒，默认每隔 1 秒汇报一次结果;</li><li>Transfer：表示在单位时间内传输的数据总量;</li><li>Bitrate：表示在单位时间内的平均传输速率，单位可以是 Kbits/sec、Mbits/sec 或 Gbits/sec，可通过 <code>-f</code> 参数指定单位;</li><li>Retr：表示在测试过程中 TCP 数据包重传的次数,重传次数越多，可能表明网络质量较差;</li><li>Cwnd：表示 TCP 拥塞窗口的大小，反映了 TCP 连接的流量控制情况。</li></ul><p><strong>网络抖动、丢包率测试</strong></p><blockquote><p>实时应用（如视频会议、VoIP、直播等）通常使用 UDP，因为这些应用更关心网络<strong>抖动</strong>和<strong>丢包</strong>，而不需要数据包重传。因此，使用 <strong>UDP 模式</strong>可以更真实地模拟这些应用的网络行为，而 TCP 模式主要关注吞吐量和连接的可靠性。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iperf3</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Server_I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">P&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-u</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 100M</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### UDP模式测试，指定目标带宽为 100 Mbps</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下图为UDP抖动、丢包率测试结果，输出结果中包含多项参数指标：</p><img src="https://s21.ax1x.com/2024/07/21/pk7EQyQ.jpg" alt="UDP测试结果" width="700"><ul><li>Interval：表示测试的时间段，从 0 到 5 秒，默认每隔 1 秒汇报一次结果;</li><li>Transfer：表示在单位时间内传输的数据总量;</li><li>Bitrate：表示在单位时间内的平均传输速率，单位可以是 Kbits/sec、Mbits/sec 或 Gbits/sec，可通过 <code>-f</code> 参数指定单位;</li><li>Total Datagrams：表示在单位时间内传输的数据包总量;</li><li><strong>Jitter</strong>：表示网络延迟的变化情况;抖动值越小，网络延迟越稳定;</li><li><strong>Lost/Total Datagrams</strong>：表示测试过程中的丢包率。</li></ul><p><strong>移动端</strong></p><ul><li>Android系统使用华为<code>CloudCamups APP</code></li></ul><img src="https://s21.ax1x.com/2024/08/02/pkjKNpF.jpg" alt="UDP测试结果" width="650"><ul><li>iOS系统自行寻找兼容iPerf3的APP</li></ul><hr><h3 id="_2-ethr-c-s" tabindex="-1"><a class="header-anchor" href="#_2-ethr-c-s"><span>2. ethr (C/S)</span></a></h3><h4 id="服务端-1" tabindex="-1"><a class="header-anchor" href="#服务端-1"><span>服务端</span></a></h4><p><strong>Linux</strong></p><ul><li>安装ethr</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/microsoft/ethr/releases/latest/download/ethr_linux.zip</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### 下载软件包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unzip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ethr_linux.zip</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">             ### 解压软件包</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./ethr</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/bin</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">         ### 复制ethr至系统可执行文件目录/usr/local/bin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行ethr服务端</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">           ### 查看帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -ui</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">       ### 以服务端模式运行ethr，并开启ui界面</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，ethr服务端以运行并默认监听8888端口</p><img src="https://s21.ax1x.com/2024/08/02/pkjKJYT.jpg" alt="运行ethr服务端" width="700"><p><strong>Windows</strong></p><ul><li>从<code>https://github.com/microsoft/ethr/releases/latest/download/ethr_windows.zip</code>下载软件包</li><li>将压缩包内的exe文件解压并复制到目录<code>C:\\Windows\\System32</code></li><li>运行ethr服务端</li></ul><p>打开 <em>CMD/PowerShell:</em></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -h</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">           ### 查看帮助</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">           ### 以服务端模式运行ethr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，ethr服务端以运行并默认监听8888端口</p><img src="https://s21.ax1x.com/2024/07/21/pk7E3es.jpg" alt="运行ethr服务端" width="670"><h4 id="客户端-1" tabindex="-1"><a class="header-anchor" href="#客户端-1"><span>客户端</span></a></h4><p><strong>Linux / Windows</strong></p><ul><li>安装ethr：方法与服务端相同</li><li>吞吐量测试，（Windows通过<em>CMD/PowerShell</em>）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ethr</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Server_I</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">P&gt; </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 5s</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        ### 测试TCP吞吐量，维持时间5秒</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下图为TCP吞吐量测试结果，输出结果中包含多项参数指标：</p><img src="https://s21.ax1x.com/2024/08/02/pkjKYfU.jpg" alt="TCP测试结果" width="650"><ul><li>Protocol：测试协议，默认为TCP，可通过<code>-p</code>参数指定</li><li>Interval：表示测试的时间段，从 0 到 5 秒，默认每隔 1 秒汇报一次结果</li><li>Bits/s：表示在单位时间内的平均传输速率</li></ul><h3 id="_3-speedtest-b-s" tabindex="-1"><a class="header-anchor" href="#_3-speedtest-b-s"><span>3. Speedtest (B/S)</span></a></h3><p>相比iPerf、ethr，Speedtest提供Web测速界面，对客户端提供更直观、便捷的测速体验。</p><h4 id="服务端-2" tabindex="-1"><a class="header-anchor" href="#服务端-2"><span>服务端</span></a></h4><p>以下为<strong>Linux</strong>系统下通过Docker容器运行Speedtest</p><ul><li>安装Docker环境</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &lt;(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -sSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://linuxmirrors.cn/docker.sh)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### Docker 一键安装脚本</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      ### 查看Docker版本</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行Speedtest</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ghcr.io/librespeed/speedtest:latest</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">     ### 拉取Speedtest镜像</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name=speedtest</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 80:80</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ghcr.io/librespeed/speedtest:latest</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ### 运行Speedtest容器，监听80端口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="客户端-2" tabindex="-1"><a class="header-anchor" href="#客户端-2"><span>客户端</span></a></h4><p><strong>PC端/移动端</strong></p><ul><li>打开浏览器，建议使用Chrome/Edge等主流高性能浏览器</li><li>访问http://&lt;Server_ip&gt;:80</li><li>开始测速</li></ul><img src="https://s21.ax1x.com/2024/08/02/pkjKGkV.png" alt="Speedtest测试结果" width="700"><h3 id="个人建议" tabindex="-1"><a class="header-anchor" href="#个人建议"><span>个人建议</span></a></h3><p>万兆网络测试建议服务端和客户端均使用<strong>Linux</strong>系统，经过反复测试，相同环境下，<strong>Windows</strong>在上述3个工具的测试结果均只达到<strong>3G+bps/s</strong>，<strong>Linux</strong>则均能接近<strong>10Gbps/s</strong>。实验不完全严谨，结论仅供参考。</p><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h3><blockquote><p><a href="https://software.es.net/iperf/">iPerf3 官网</a></p></blockquote><blockquote><p><a href="https://github.com/microsoft/ethr">ethr</a></p></blockquote><blockquote><p><a href="https://github.com/librespeed/speedtest">Speedtest</a></p></blockquote>`,93),n=[l];function h(r,p){return e(),s("div",null,n)}const o=i(a,[["render",h],["__file","network_measurement.html.vue"]]),g=JSON.parse(`{"path":"/posts/network_measurement.html","title":"网络性能测试的一些方法 & 工具","lang":"zh-CN","frontmatter":{"isOriginal":true,"date":"2024-07-18T00:00:00.000Z","category":"网络","tag":["网络测速","打流","iPerf"],"cover":"https://8635674.fs1.hubspotusercontent-na1.net/hub/8635674/hubfs/checking-internet-speed-.jpeg?width=1800&name=checking-internet-speed-.jpeg","description":"网络性能测试的一些方法 & 工具 一、 意义 测试网络性能 二、 网络性能指标 带宽（Bandwidth） 定义：网络连接在单位时间内能够传输的最大数据量，通常以每秒兆比特（Mbps）或每秒千兆比特（Gbps）来表示。 正常范围：取决于网络类型和需求。例如，家庭宽带通常为100 Mbps到1 Gbps；企业网络可能为100 Mbps到10 Gbps或更...","head":[["meta",{"property":"og:url","content":"https://keenchen63.github.io/posts/network_measurement.html"}],["meta",{"property":"og:site_name","content":"Keen's Blog"}],["meta",{"property":"og:title","content":"网络性能测试的一些方法 & 工具"}],["meta",{"property":"og:description","content":"网络性能测试的一些方法 & 工具 一、 意义 测试网络性能 二、 网络性能指标 带宽（Bandwidth） 定义：网络连接在单位时间内能够传输的最大数据量，通常以每秒兆比特（Mbps）或每秒千兆比特（Gbps）来表示。 正常范围：取决于网络类型和需求。例如，家庭宽带通常为100 Mbps到1 Gbps；企业网络可能为100 Mbps到10 Gbps或更..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://8635674.fs1.hubspotusercontent-na1.net/hub/8635674/hubfs/checking-internet-speed-.jpeg?width=1800&name=checking-internet-speed-.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T15:26:30.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://8635674.fs1.hubspotusercontent-na1.net/hub/8635674/hubfs/checking-internet-speed-.jpeg?width=1800&name=checking-internet-speed-.jpeg"}],["meta",{"name":"twitter:image:alt","content":"网络性能测试的一些方法 & 工具"}],["meta",{"property":"article:author","content":"Keen"}],["meta",{"property":"article:tag","content":"网络测速"}],["meta",{"property":"article:tag","content":"打流"}],["meta",{"property":"article:tag","content":"iPerf"}],["meta",{"property":"article:published_time","content":"2024-07-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T15:26:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络性能测试的一些方法 & 工具\\",\\"image\\":[\\"https://8635674.fs1.hubspotusercontent-na1.net/hub/8635674/hubfs/checking-internet-speed-.jpeg?width=1800&name=checking-internet-speed-.jpeg\\"],\\"datePublished\\":\\"2024-07-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-02T15:26:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Keen\\",\\"url\\":\\"https://keenchen63.github.io\\"}]}"]]},"headers":[{"level":2,"title":"一、 意义","slug":"一、-意义","link":"#一、-意义","children":[]},{"level":2,"title":"二、 网络性能指标","slug":"二、-网络性能指标","link":"#二、-网络性能指标","children":[]},{"level":2,"title":"三、 环境准备","slug":"三、-环境准备","link":"#三、-环境准备","children":[{"level":3,"title":"确定测试目标","slug":"确定测试目标","link":"#确定测试目标","children":[]},{"level":3,"title":"测试设备","slug":"测试设备","link":"#测试设备","children":[]},{"level":3,"title":"测试时间","slug":"测试时间","link":"#测试时间","children":[]}]},{"level":2,"title":"四、 测试工具","slug":"四、-测试工具","link":"#四、-测试工具","children":[{"level":3,"title":"1. iPerf3 (C/S)","slug":"_1-iperf3-c-s","link":"#_1-iperf3-c-s","children":[]},{"level":3,"title":"2. ethr (C/S)","slug":"_2-ethr-c-s","link":"#_2-ethr-c-s","children":[]},{"level":3,"title":"3. Speedtest (B/S)","slug":"_3-speedtest-b-s","link":"#_3-speedtest-b-s","children":[]},{"level":3,"title":"个人建议","slug":"个人建议","link":"#个人建议","children":[]},{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"git":{"createdTime":1722505477000,"updatedTime":1722612390000,"contributors":[{"name":"Keen","email":"keenchen63@outlook.com","commits":3}]},"readingTime":{"minutes":6.92,"words":2076},"filePathRelative":"posts/network_measurement.md","localizedDate":"2024年7月18日","excerpt":"\\n<h2>一、 意义</h2>\\n<p>测试网络性能</p>\\n<h2>二、 网络性能指标</h2>\\n<ul>\\n<li>\\n<p>带宽（Bandwidth）</p>\\n<ul>\\n<li><strong>定义</strong>：网络连接在单位时间内能够传输的最大数据量，通常以每秒兆比特（Mbps）或每秒千兆比特（Gbps）来表示。</li>\\n<li><strong>正常范围</strong>：取决于网络类型和需求。例如，家庭宽带通常为100 Mbps到1 Gbps；企业网络可能为100 Mbps到10 Gbps或更高。</li>\\n</ul>\\n</li>\\n<li>\\n<p>吞吐量（throughput）</p>\\n<ul>\\n<li><strong>定义</strong>：实际在单位时间内传输的数据量，通常以每秒兆比特（Mbps）来表示。</li>\\n<li><strong>正常范围</strong>：理想情况下接近带宽，但由于网络开销和其他因素，实际吞吐量通常比带宽低。</li>\\n</ul>\\n</li>\\n<li>\\n<p>延迟（Latency）</p>\\n<ul>\\n<li><strong>定义</strong>：数据包从源端到达目的端所需的时间，通常以毫秒（ms）为单位。</li>\\n<li><strong>正常范围</strong>：局域网（LAN）通常在1 ms到5 ms之间；广域网（WAN）可能在10 ms到100 ms或更高。</li>\\n</ul>\\n</li>\\n<li>\\n<p>抖动（Jitter）</p>\\n<ul>\\n<li><strong>定义</strong>：数据包传输延迟的变异性，通常以毫秒（ms）为单位。</li>\\n<li><strong>正常范围</strong>：对于语音和视频应用，抖动应尽量低，一般在30 ms以内较为理想。</li>\\n</ul>\\n</li>\\n<li>\\n<p>丢包率（Pocket Lost Rate）</p>\\n<ul>\\n<li><strong>定义</strong>：在数据传输过程中丢失的数据包占总数据包的比例，通常以百分比表示。</li>\\n<li><strong>正常范围</strong>：理想情况下应接近0%。对于大多数应用，丢包率应低于1%；对于实时应用如视频会议，丢包率应低于0.1%。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}`);export{o as comp,g as data};
