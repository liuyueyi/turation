import{_ as e,V as p,W as o,a1 as c,Y as n,a0 as a,Z as t,X as l,F as i}from"./framework-ad59245f.js";const u={},r=n("p",null,"我又回来更新RestTemplate了，前面更完之后忽然发现还漏了两个常用的场景，连接池的配置以及错误重试，这就迅速的把这个补上；本篇主要介绍RestTemplate如何设置连接池",-1),d=l(`<h2 id="i-项目搭建" tabindex="-1"><a class="header-anchor" href="#i-项目搭建" aria-hidden="true">#</a> I. 项目搭建</h2><p>本项目基于SpringBoot <code>2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>idea</code>进行开发</p><h3 id="_1-pom依赖" tabindex="-1"><a class="header-anchor" href="#_1-pom依赖" aria-hidden="true">#</a> 1. pom依赖</h3><p>核心pom依赖如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.httpcomponents<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>httpclient<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，我们这里引入的依赖，多了一个<code>httpclient</code>，在下面的连接池配置中，主要借助它的连接池管理来创建HttpClient对象</p><h2 id="ii-使用姿势" tabindex="-1"><a class="header-anchor" href="#ii-使用姿势" aria-hidden="true">#</a> II. 使用姿势</h2><h3 id="_1-连接池配置" tabindex="-1"><a class="header-anchor" href="#_1-连接池配置" aria-hidden="true">#</a> 1. 连接池配置</h3><p>一般来讲，借助<code>httpcomponents</code>这个包进行连接池配置时，可以分为三步</p><p><strong>初始化连接池管理类</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 连接池管理</span>
<span class="token class-name">PoolingHttpClientConnectionManager</span> poolingConnectionManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PoolingHttpClientConnectionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 连接池最大连接数</span>
poolingConnectionManager<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 每个主机的并发</span>
poolingConnectionManager<span class="token punctuation">.</span><span class="token function">setDefaultMaxPerRoute</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可用空闲连接过期时间</span>
poolingConnectionManager<span class="token punctuation">.</span><span class="token function">setValidateAfterInactivity</span><span class="token punctuation">(</span><span class="token number">10_000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>HttpClient构造器</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HttpClientBuilder</span> httpClientBuilder <span class="token operator">=</span> <span class="token class-name">HttpClientBuilder</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
httpClientBuilder<span class="token punctuation">.</span><span class="token function">setConnectionManager</span><span class="token punctuation">(</span>poolingConnectionManager<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RestTemplate RequestFactory创建</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HttpComponentsClientHttpRequestFactory</span> requestFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HttpComponentsClientHttpRequestFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
requestFactory<span class="token punctuation">.</span><span class="token function">setHttpClient</span><span class="token punctuation">(</span>httpClientBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 连接超时时间/毫秒</span>
requestFactory<span class="token punctuation">.</span><span class="token function">setConnectTimeout</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 读写超时时间/毫秒</span>
requestFactory<span class="token punctuation">.</span><span class="token function">setReadTimeout</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求超时时间/毫秒</span>
requestFactory<span class="token punctuation">.</span><span class="token function">setConnectionRequestTimeout</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本上就是前面的初始化RestTemplate的环节了</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 创建restemplate对象，并制定 RequestFactory</span>
<span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
restTemplate<span class="token punctuation">.</span><span class="token function">setRequestFactory</span><span class="token punctuation">(</span>requestFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-okhttp方式" tabindex="-1"><a class="header-anchor" href="#_2-okhttp方式" aria-hidden="true">#</a> 2. OkHttp方式</h3><p>对于RestTemplate的HttpClient执行库，除了上面的<code>httpcomponents</code>之外，还有一个OkHttp目前也是大受欢迎，如果我们使用OkHttp，那么可以怎么设置呢?</p><p>首先依然是引入依赖</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.squareup.okhttp3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>okhttp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次和上面三步骤差不多的设置</p><p><strong>初始化连接池</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 设置连接池参数，最大空闲连接数200，空闲连接存活时间10s</span>
<span class="token class-name">ConnectionPool</span> connectionPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionPool</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建OkHttpClient</strong></p><p>注意这里和上面是有区别的，前面是构建HttpClient构造器，而这里直接生成了一个OkHttpClient，内置连接池</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">OkHttpClient</span> okHttpClient <span class="token operator">=</span>
      <span class="token keyword">new</span> <span class="token class-name">OkHttpClient<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">retryOnConnectionFailure</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">connectionPool</span><span class="token punctuation">(</span>connectionPool<span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">connectTimeout</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">readTimeout</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">writeTimeout</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RestTemplate RequestFactory创建</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClientHttpRequestFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OkHttp3ClientHttpRequestFactory</span><span class="token punctuation">(</span>okHttpClient<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后就是创建<code>RestTemplate</code>了</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">RestTemplate</span> restTemplate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
restTemplate<span class="token punctuation">.</span><span class="token function">setRequestFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目-系列博文" tabindex="-1"><a class="header-anchor" href="#_0-项目-系列博文" aria-hidden="true">#</a> 0. 项目&amp;系列博文</h3><p><strong>博文</strong></p>`,34),k={href:"http://spring.hhui.top/spring-blog/2020/07/10/200710-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://spring.hhui.top/spring-blog/2020/07/07/200707-SpringBoot%E7%B3%BB%E5%88%97AsyncRestTemplate%E4%B9%8B%E5%BC%82%E6%AD%A5%E9%9D%9E%E9%98%BB%E5%A1%9E%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82%E4%BB%8B%E7%BB%8D%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},g={href:"http://spring.hhui.top/spring-blog/2020/07/05/200705-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E9%9D%9E200%E7%8A%B6%E6%80%81%E7%A0%81%E4%BF%A1%E6%81%AF%E6%8D%95%E8%8E%B7/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://spring.hhui.top/spring-blog/2020/07/04/200704-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8BBasic-Auth%E6%8E%88%E6%9D%83/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://spring.hhui.top/spring-blog/2020/07/03/200703-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E4%BB%A3%E7%90%86%E8%AE%BF%E9%97%AE/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://spring.hhui.top/spring-blog/2020/07/02/200702-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%B6%85%E6%97%B6%E8%AE%BE%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://spring.hhui.top/spring-blog/2020/07/01/200701-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98fix/",target:"_blank",rel:"noopener noreferrer"},E={href:"http://spring.hhui.top/spring-blog/2020/06/30/200630-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%B7%E6%B1%82%E5%A4%B4/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://spring.hhui.top/spring-blog/2020/06/30/200630-SpringBoot%E7%B3%BB%E5%88%97RestTemplate%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E8%AF%B7%E6%B1%82%E5%A4%B4/",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[n("strong",null,"源码")],-1),T={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/221-web-resttemplate",target:"_blank",rel:"noopener noreferrer"};function R(y,A){const s=i("ExternalLinkIcon");return p(),o("div",null,[r,c(" more "),d,n("ul",null,[n("li",null,[n("a",k,[a("【WEB系列】RestTemplate之文件上传"),t(s)])]),n("li",null,[n("a",m,[a("【WEB系列】AsyncRestTemplate之异步非阻塞网络请求介绍篇"),t(s)])]),n("li",null,[n("a",g,[a("【WEB系列】RestTemplate之非200状态码信息捕获"),t(s)])]),n("li",null,[n("a",v,[a("【WEB系列】RestTemplate之Basic Auth授权"),t(s)])]),n("li",null,[n("a",h,[a("【WEB系列】RestTemplate之代理访问"),t(s)])]),n("li",null,[n("a",b,[a("【WEB系列】RestTemplate之超时设置"),t(s)])]),n("li",null,[n("a",B,[a("【WEB系列】RestTemplate之中文乱码问题fix"),t(s)])]),n("li",null,[n("a",E,[a("【WEB系列】RestTemplate之自定义请求头"),t(s)])]),n("li",null,[n("a",_,[a("【WEB系列】RestTemplate基础用法小结"),t(s)])])]),f,n("ul",null,[n("li",null,[a("工程："),n("a",T,[a("https://github.com/liuyueyi/spring-boot-demo"),t(s)])]),n("li",null,[a("源码: "),n("a",C,[a("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/221-web-resttemplate"),t(s)])])])])}const H=e(u,[["render",R],["__file","200723-SpringBoot系列RestTemplate之连接池配置.html.vue"]]);export{H as default};
