import{_ as p,V as e,W as o,a1 as c,Y as n,a0 as s,Z as t,X as l,F as i}from"./framework-ad59245f.js";const u="/tutorial/imgs/190905/00.gif",r="/tutorial/imgs/190905/01.gif",k={},d=n("p",null,"前面几篇介绍了如何获取http请求参数，在实际测试的时候发现了一个问题，如果传入的参数为中文的时候，接收没什么问题；但是返回有中文的时候，会出现乱码；接下来我们看一下这个问题如何解决",-1),g=l(`<h2 id="i-基本环境" tabindex="-1"><a class="header-anchor" href="#i-基本环境" aria-hidden="true">#</a> I. 基本环境</h2><p>首先得搭建一个web应用才有可能继续后续的测试，借助SpringBoot搭建一个web应用属于比较简单的活;</p><p>创建一个maven项目，pom文件如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from update --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.build.sourceEncoding</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project.reporting.outputEncoding</span><span class="token punctuation">&gt;</span></span>UTF-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project.reporting.outputEncoding</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-cloud.version</span><span class="token punctuation">&gt;</span></span>Finchley.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-cloud.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pluginManagement</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pluginManagement</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>spring-milestones<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Spring Milestones<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>https://repo.spring.io/milestone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshots</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enabled</span><span class="token punctuation">&gt;</span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>enabled</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshots</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-中文乱码" tabindex="-1"><a class="header-anchor" href="#ii-中文乱码" aria-hidden="true">#</a> II. 中文乱码</h2><h3 id="_1-问题复现" tabindex="-1"><a class="header-anchor" href="#_1-问题复现" aria-hidden="true">#</a> 1. 问题复现</h3><p>一个简单的rest接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ParamGetRest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;arg&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">argParam</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> ans <span class="token operator">=</span> <span class="token string">&quot;name: &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot; age: &quot;</span> <span class="token operator">+</span> age<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们实际测试一下，发现接收的name参数里的中文可以正常显示，输出控制台也没有问题；但是返回的正文却出现了乱码</p><figure><img src="`+u+`" alt="showcase" tabindex="0" loading="lazy"><figcaption>showcase</figcaption></figure><h3 id="_2-乱码问题修复" tabindex="-1"><a class="header-anchor" href="#_2-乱码问题修复" aria-hidden="true">#</a> 2. 乱码问题修复</h3><p>为什么返回的中文会出现乱码呢？要确定这个问题有必要先了解一下返回数据的处理逻辑，前面介绍了几篇web结合页面渲染引擎(thymeleaf, freemaker,beetl)的博文，里面返回的是视图，在参数解析篇里面，返回的是数据；那么web返回又有哪些不同的操作姿势呢，本篇将集中在解决返回中文乱码的问题上，至于上面提出的问题，则将作为后续的研究目标</p><h4 id="a-httpmessageconverter" tabindex="-1"><a class="header-anchor" href="#a-httpmessageconverter" aria-hidden="true">#</a> a. HttpMessageConverter</h4><p>对于返回数据的处理，有一个非常重要的类就是<code>HttpMessageConverter</code>，从命名上也可以看出，他的主要做那个用就是实现http信息的转换</p><p>至于导致我们出现中文乱码的，主要是<code>StringHttpMessageConverter</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StringHttpMessageConverter</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHttpMessageConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Charset</span> <span class="token constant">DEFAULT_CHARSET</span> <span class="token operator">=</span> <span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">ISO_8859_1</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * A default constructor that uses <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token string">&quot;ISO-8859-1&quot;</span></span></span><span class="token punctuation">}</span> as the default charset.
	 * <span class="token keyword">@see</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">StringHttpMessageConverter</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">)</span></span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">StringHttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">(</span><span class="token constant">DEFAULT_CHARSET</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token doc-comment comment">/**
	 * A constructor accepting a default charset to use if the requested content
	 * type does not specify one.
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">StringHttpMessageConverter</span><span class="token punctuation">(</span><span class="token class-name">Charset</span> defaultCharset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>defaultCharset<span class="token punctuation">,</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">TEXT_PLAIN</span><span class="token punctuation">,</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是字符串转换类的默认构造方式，指定的字符集为<code>&quot;ISO-8859-1&quot;</code>，而这个字符集是没法处理中文的，所以为了处理中文，我们希望指定编码为<code>UTF-8</code></p><h4 id="b-注册httpmessageconverter" tabindex="-1"><a class="header-anchor" href="#b-注册httpmessageconverter" aria-hidden="true">#</a> b. 注册HttpMessageConverter</h4><p>所以为了解决中文乱码的问题，我们的一个思路就是通过<code>new StringHttpMessageConverter(Charset.forName(&quot;UTF-8&quot;));</code>创建一个支持utf8编码的字符串转换类，然后将它注册给Spring容器，具体的操作借助配置类<code>WebMvcConfigurationSupport</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">HttpMessageConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">responseBodyConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringHttpMessageConverter</span> converter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringHttpMessageConverter</span><span class="token punctuation">(</span><span class="token class-name">Charset</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> converter<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureMessageConverters</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HttpMessageConverter</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> converters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">configureMessageConverters</span><span class="token punctuation">(</span>converters<span class="token punctuation">)</span><span class="token punctuation">;</span>
        converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">responseBodyConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-测试验证" tabindex="-1"><a class="header-anchor" href="#c-测试验证" aria-hidden="true">#</a> c. 测试验证</h4><p>然后再次测试验证下我们的处理是否生效</p><figure><img src="`+r+'" alt="showcase" tabindex="0" loading="lazy"><figcaption>showcase</figcaption></figure><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目-博文" tabindex="-1"><a class="header-anchor" href="#_0-项目-博文" aria-hidden="true">#</a> 0. 项目&amp;博文</h3>',25),v={href:"http://spring.hhui.top/spring-blog/2019/08/24/190824-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8BGet%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB/",target:"_blank",rel:"noopener noreferrer"},m={href:"http://spring.hhui.top/spring-blog/2019/08/28/190828-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8BPost%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB/",target:"_blank",rel:"noopener noreferrer"},b={href:"http://spring.hhui.top/spring-blog/2019/08/31/190831-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8B%E5%A6%82%E4%BD%95%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%99%A8/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/202-web-params",target:"_blank",rel:"noopener noreferrer"};function E(_,w){const a=i("ExternalLinkIcon");return e(),o("div",null,[d,c(" more "),g,n("ul",null,[n("li",null,[n("p",null,[n("a",v,[s("190824-SpringBoot系列教程web篇之Get请求参数解析姿势汇总"),t(a)])])]),n("li",null,[n("p",null,[n("a",m,[s("190828-SpringBoot系列教程web篇之Post请求参数解析姿势汇总"),t(a)])])]),n("li",null,[n("p",null,[n("a",b,[s("190831-SpringBoot系列教程web篇之如何自定义参数解析器"),t(a)])])]),n("li",null,[n("p",null,[s("工程："),n("a",h,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])])]),n("li",null,[n("p",null,[s("项目: "),n("a",f,[s("https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/202-web-params"),t(a)])])])])])}const y=p(k,[["render",E],["__file","190905-SpringBoot系列教程web篇之中文乱码问题解决.html.vue"]]);export{y as default};
