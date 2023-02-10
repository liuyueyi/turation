import{_ as p,V as o,W as c,a1 as l,Y as n,a0 as a,Z as t,X as e,F as i}from"./framework-ad59245f.js";const u="/tutorial/imgs/200706/00.jpg",r="/tutorial/imgs/200706/01.jpg",d={},k=n("p",null,"使用XML作为传参和返回结果，在实际的编码中可能不太常见，特别是当前json大行其道的时候；那么为什么突然来这么一出呢？源于对接微信公众号的消息接收，自动回复的开发时，惊奇的发现微信使用xml格式进行交互，所以也就不得不支持了",-1),m=n("p",null,"下面介绍一下SpringBoot中如何支持xml传参解析与返回xml文档",-1),g=e(`<h2 id="i-项目环境" tabindex="-1"><a class="header-anchor" href="#i-项目环境" aria-hidden="true">#</a> I. 项目环境</h2><p>本文创建的实例工程采用<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>idea</code>进行开发</p><h3 id="_1-pom依赖" tabindex="-1"><a class="header-anchor" href="#_1-pom依赖" aria-hidden="true">#</a> 1. pom依赖</h3><p>具体的SpringBoot项目工程创建就不赘述了，对于pom文件中，需要重点关注下面两个依赖类</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.dataformat<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-dataformat-xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.10.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>请注意jackson-dataformat-xml版本，不要选择太老的</strong></p><h2 id="ii-实例演示" tabindex="-1"><a class="header-anchor" href="#ii-实例演示" aria-hidden="true">#</a> II. 实例演示</h2><h3 id="_1-传参bean" tabindex="-1"><a class="header-anchor" href="#_1-传参bean" aria-hidden="true">#</a> 1. 传参Bean</h3><p>定义一个接受参数的bean对象，如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@JacksonXmlRootElement</span><span class="token punctuation">(</span>localName <span class="token operator">=</span> <span class="token string">&quot;req&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">XmlBean</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    
    <span class="token annotation punctuation">@JacksonXmlProperty</span><span class="token punctuation">(</span>localName <span class="token operator">=</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，我们使用<code>@JacksonXmlRootElement</code>注解来修饰这个bean，localName中的value，相当于xml的根标签；如果类中的属性成员名，和xml标签名不一样，可以使用注解<code>@JacksonXmlProperty(localName = &quot;xxx&quot;)</code>来修饰</p><p>其次，请保留bean的默认无参构造函数，get/set方法 （我上面为了简洁，使用了lombok（最近看到了不少抨击lombok的文章...），不希望使用lombok的小伙伴，可以利用IDEA的自动生成，来实现相关的代码）</p><h3 id="_2-response-bean" tabindex="-1"><a class="header-anchor" href="#_2-response-bean" aria-hidden="true">#</a> 2. Response Bean</h3><p>定义返回的也是一个xml bean</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@JacksonXmlRootElement</span><span class="token punctuation">(</span>localName <span class="token operator">=</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">XmlRes</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-rest服务" tabindex="-1"><a class="header-anchor" href="#_3-rest服务" aria-hidden="true">#</a> 3. rest服务</h3><p>然后像平常一样，实现一个&quot;普通&quot;的rest服务即可</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;xml&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XmlParamsRest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span> consumes <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_XML_VALUE</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            produces <span class="token operator">=</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">APPLICATION_XML_VALUE</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">XmlRes</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">XmlBean</span> bean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">XmlRes</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XmlRes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">setCode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>bean<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意三点</p><ul><li><code>@RestController</code>：返回的不是视图</li><li><code>@PostMapping</code>注解中的 <code>consumes</code> 和 <code>produces</code>参数，指定了&quot;application/xml&quot;，表示我们接收和返回的都是xml文档</li><li><code>@RequestBody</code>：不加这个注解时，无法获取传参哦（可以想一想why?)</li></ul><p><strong>接口测试</strong></p><p>我个人倾向于万能的curl进行测试，打开终端即可使用，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 测试命令</span>
<span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&#39;http://127.0.0.1:8080/xml/show&#39;</span> <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/xml&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;&lt;req&gt;&lt;name&gt;一灰灰&lt;/name&gt;&lt;age&gt;18&lt;/age&gt;&lt;/req&gt;&#39;</span> <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>考虑到有些小伙伴更青睐于Postman进行url测试，下面是具体的请求姿势</p><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-解析异常问题" tabindex="-1"><a class="header-anchor" href="#_4-解析异常问题" aria-hidden="true">#</a> 4. 解析异常问题</h3>',27),v={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/202-web-params",target:"_blank",rel:"noopener noreferrer"},b=e(`<p>某些场景下，直接使用上面的姿势貌似不能正常工作，会抛出一个<code>Resolved [org.springframework.web.HttpMediaTypeNotSupportedException: Content type &#39;application/xml;charset=UTF-8&#39; not supported]</code>的异常信息</p><p>针对出现<code>HttpMediaTypeNotSupportedException</code>的场景，解决办法也很明确，增加一个xml的<code>HttpMesssageConverter</code>即可，依然是借助<code>MappingJackson2XmlHttpMessageConverter</code>，如</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MvcConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebMvcConfigurationSupport</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureMessageConverters</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HttpMessageConverter</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> converters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">configureMessageConverters</span><span class="token punctuation">(</span>converters<span class="token punctuation">)</span><span class="token punctuation">;</span>
        converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MappingJackson2XmlHttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目" tabindex="-1"><a class="header-anchor" href="#_0-项目" aria-hidden="true">#</a> 0. 项目</h3>`,5),h={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/202-web-params",target:"_blank",rel:"noopener noreferrer"};function f(y,x){const s=i("ExternalLinkIcon");return o(),c("div",null,[k,m,l(" more "),g,n("blockquote",null,[n("p",null,[a("如果需要重新这个问题，可以参考项目: "),n("a",v,[a("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/202-web-params"),t(s)])])]),b,n("ul",null,[n("li",null,[a("工程："),n("a",h,[a("https://github.com/liuyueyi/spring-boot-demo"),t(s)])]),n("li",null,[a("源码："),n("a",_,[a("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/202-web-params"),t(s)])])])])}const q=p(d,[["render",f],["__file","200706-SpringBoot系列教程之xml传参与返回使用姿势.html.vue"]]);export{q as default};
