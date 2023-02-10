import{_ as p,V as o,W as c,a1 as l,Y as n,a0 as s,Z as t,X as e,F as i}from"./framework-ad59245f.js";const u={},r=n("p",null,[s("通过代理访问，对于java后端可能用得不多的，但有过爬虫开发经验的小伙伴可能一点也不会陌生，有时候不太方便直接去访问目标资源，借助代理是要给选择，对于RestTemplate而言，使用代理的姿势同样如设置超时一般，借助"),n("code",null,"SimpleClientHttpRequestFactory"),s("来实现，本文演示一下具体的使用case")],-1),k=e(`<h2 id="i-环境准备" tabindex="-1"><a class="header-anchor" href="#i-环境准备" aria-hidden="true">#</a> I. 环境准备</h2><h3 id="_1-项目环境" tabindex="-1"><a class="header-anchor" href="#_1-项目环境" aria-hidden="true">#</a> 1. 项目环境</h3><p>借助SpringBoot搭建一个SpringWEB项目，提供一些用于测试的REST服务</p><ul><li>SpringBoot版本: <code>2.2.1.RELEASE</code></li><li>核心依赖: <code>spring-boot-stater-web</code></li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了后续输出的日志更直观，这里设置了一下日志输出格式，在配置文件<code>application.yml</code>中，添加</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">pattern</span><span class="token punctuation">:</span>
    <span class="token key atrule">console</span><span class="token punctuation">:</span> (%msg%n%n)<span class="token punctuation">{</span>blue<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-测试端点" tabindex="-1"><a class="header-anchor" href="#_2-测试端点" aria-hidden="true">#</a> 2. 测试端点</h3><p>我们的测试端点，主要需要返回客户端主机信息，我们这里直接借助<code>HttpServletRequest#getRemoteHost</code> + <code>HttpServlet#getRemotePort</code>来实现（当然实际的业务开发中不建议直接使用它）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoRest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getHeaders</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> headerNames <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeaderNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> name<span class="token punctuation">;</span>

        <span class="token class-name">JSONObject</span> headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>headerNames<span class="token punctuation">.</span><span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> headerNames<span class="token punctuation">.</span><span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            headers<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> headers<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getParams</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cookies <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> cookies<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">JSONObject</span> ck <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Cookie</span> cookie <span class="token operator">:</span> cookies<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            ck<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>cookie<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cookie<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ck<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">buildResult</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">buildResult</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">buildResult</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> params <span class="token operator">=</span> <span class="token function">getParams</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> headers <span class="token operator">=</span> <span class="token function">getHeaders</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> cookies <span class="token operator">=</span> <span class="token function">getCookies</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            params <span class="token operator">+=</span> <span class="token string">&quot; | &quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token string">&quot;params: &quot;</span> <span class="token operator">+</span> params <span class="token operator">+</span> <span class="token string">&quot;\\nheaders: &quot;</span> <span class="token operator">+</span> headers <span class="token operator">+</span> <span class="token string">&quot;\\ncookies: &quot;</span> <span class="token operator">+</span> cookies<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;proxy&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> remote <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRemoteHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:&quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getRemotePort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">buildResult</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\\n&gt;&gt;&gt;remote ipInfo: &quot;</span> <span class="token operator">+</span> remote<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-代理服务器搭建" tabindex="-1"><a class="header-anchor" href="#_3-代理服务器搭建" aria-hidden="true">#</a> 3. 代理服务器搭建</h3>`,11),d={href:"https://blog.hhui.top/hexblog/2020/06/19/200619-http%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8tinyproxy%E6%90%AD%E5%BB%BA%E6%89%8B%E5%86%8C/",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>本文的演示中，是在<code>192.168.0.241</code>状态centos机器上安装的，步骤如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. <span class="token function">sudo</span> yum <span class="token function">install</span> tinyproxy <span class="token parameter variable">-y</span>


<span class="token comment"># 设置配置</span>
<span class="token number">2</span>. <span class="token function">vim</span> /etc/tinyproxy/tinyproxy.conf

<span class="token comment"># 下面这个ip是我测试用例的机器ip</span>
Allow <span class="token number">192.168</span>.0.174


<span class="token number">3</span>. 启动服务
systemctl start tinyproxy.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-代理访问" tabindex="-1"><a class="header-anchor" href="#ii-代理访问" aria-hidden="true">#</a> II. 代理访问</h2><p>接下来进入正文演示，核心代码也比较简单</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 代理访问
 */</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SimpleClientHttpRequestFactory</span> requestFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleClientHttpRequestFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 请注意，我这里是在241机器上，借助tinyproxy搭建了一个http的代理，并设置端口为18888，所以可以正常演示代理访问</span>
    <span class="token comment">// 拉源码运行的小伙，需要注意使用自己的代理来替换</span>
    requestFactory<span class="token punctuation">.</span><span class="token function">setProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token class-name">Proxy<span class="token punctuation">.</span>Type</span><span class="token punctuation">.</span><span class="token constant">HTTP</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span><span class="token string">&quot;192.168.0.241&quot;</span><span class="token punctuation">,</span> <span class="token number">18888</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    restTemplate<span class="token punctuation">.</span><span class="token function">setRequestFactory</span><span class="token punctuation">(</span>requestFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 因为使用代理访问，所以这个ip就不能是127.0.0.1，不然访问的就是代理服务器上了</span>
    <span class="token class-name">HttpEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> ans <span class="token operator">=</span>
            restTemplate<span class="token punctuation">.</span><span class="token function">getForEntity</span><span class="token punctuation">(</span><span class="token string">&quot;http://192.168.0.174:8080/proxy?name=一灰灰&amp;age=20&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;proxy request ans: {}&quot;</span><span class="token punctuation">,</span> ans<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，上面的使用姿势中</p><ul><li>Proxy的方式除了HTTP之外还有SOCKS，这个是与代理服务器的支持方式相关的</li><li><code>postForEntity</code>中url的ip是我本机的ip，而不是<code>127.0.0.1</code></li></ul><p>测试输出如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(proxy request ans: &lt;200,params: {&quot;name&quot;:[&quot;一灰灰&quot;],&quot;age&quot;:[&quot;20&quot;]}
headers: {&quot;host&quot;:&quot;192.168.0.174:8080&quot;,&quot;connection&quot;:&quot;close&quot;,&quot;via&quot;:&quot;1.1 tinyproxy (tinyproxy/1.8.3)&quot;,&quot;accept&quot;:&quot;text/plain, application/json, application/*+json, */*&quot;,&quot;user-agent&quot;:&quot;Java/1.8.0_171&quot;}
cookies: 
&gt;&gt;&gt;remote ipInfo: 192.168.0.241:56122,[Via:&quot;1.1 tinyproxy (tinyproxy/1.8.3)&quot;, Content-Type:&quot;text/plain;charset=UTF-8&quot;, Date:&quot;Mon, 29 Jun 2020 08:46:47 GMT&quot;, Content-Length:&quot;286&quot;]&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目-系列博文" tabindex="-1"><a class="header-anchor" href="#_0-项目-系列博文" aria-hidden="true">#</a> 0. 项目&amp;系列博文</h3><p><strong>博文</strong></p>`,12),v={href:"http://spring.hhui.top/spring-blog/2020/07/02/200702-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%B6%85%E6%97%B6%E8%AE%BE%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://spring.hhui.top/spring-blog/2020/07/01/200701-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98fix/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://spring.hhui.top/spring-blog/2020/06/30/200630-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%B7%E6%B1%82%E5%A4%B4/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://spring.hhui.top/spring-blog/2020/06/30/200630-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%B7%E6%B1%82%E5%A4%B4/",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[n("strong",null,"源码")],-1),q={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/221-web-resttemplate",target:"_blank",rel:"noopener noreferrer"};function E(_,B){const a=i("ExternalLinkIcon");return o(),c("div",null,[r,l(" more "),k,n("p",null,[s("我们这里借助tinyproxy来搭建代理服务器，详细步骤可以参考博文: "),n("a",d,[s("http代理服务器tinyproxy搭建手册"),t(a)])]),m,n("ul",null,[n("li",null,[n("a",v,[s("【WEB系列】RestTemplate之超时设置"),t(a)])]),n("li",null,[n("a",b,[s("【WEB系列】RestTemplate之中文乱码问题fix"),t(a)])]),n("li",null,[n("a",g,[s("【WEB系列】RestTemplate之自定义请求头"),t(a)])]),n("li",null,[n("a",h,[s("【WEB系列】RestTemplate基础用法小结"),t(a)])])]),y,n("ul",null,[n("li",null,[s("工程："),n("a",q,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])]),n("li",null,[s("源码: "),n("a",f,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/221-web-resttemplate"),t(a)])])])])}const S=p(u,[["render",E],["__file","200703-SpringBoot系列RestTemplate之代理访问.html.vue"]]);export{S as default};
