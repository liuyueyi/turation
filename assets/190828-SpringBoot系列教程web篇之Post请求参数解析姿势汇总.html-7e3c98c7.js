import{_ as e,V as o,W as l,Y as n,a0 as s,Z as t,a1 as c,X as p,F as i}from"./framework-ad59245f.js";const u="/tutorial/imgs/190828/01.jpg",r={},k={href:"http://spring.hhui.top/spring-blog/2019/08/24/190824-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8BGet%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,"本篇主要内容包括以下几种姿势",-1),g=n("ul",null,[n("li",null,"@RequestBody json格式"),n("li",null,"RequestEntity"),n("li",null,"MultipartFile 文件上传")],-1),v=p(`<h2 id="i-环境搭建" tabindex="-1"><a class="header-anchor" href="#i-环境搭建" aria-hidden="true">#</a> I. 环境搭建</h2><p>首先得搭建一个web应用才有可能继续后续的测试，借助SpringBoot搭建一个web应用属于比较简单的活;</p><p>创建一个maven项目，pom文件如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加项目启动类<code>Application.cass</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在演示请求参数的解析实例中，我们使用终端的curl命令来发起http请求（主要原因是截图上传太麻烦，还是终端的文本输出比较方便；缺点是不太直观）</p><h2 id="ii-post请求参数解析" tabindex="-1"><a class="header-anchor" href="#ii-post请求参数解析" aria-hidden="true">#</a> II. POST请求参数解析</h2><p>接下来我们正式进入参数解析的妖娆姿势篇，会介绍一下常见的一些case（并不能说包含了所有的使用case）</p><p>下面所有的方法都放在 <code>ParamPostRest</code> 这个Controller中</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ParamPostRest</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={href:"http://spring.hhui.top/spring-blog/2019/08/24/190824-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8BGet%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB/",target:"_blank",rel:"noopener noreferrer"},b=p(`<h3 id="_1-httpservletrequest" tabindex="-1"><a class="header-anchor" href="#_1-httpservletrequest" aria-hidden="true">#</a> 1. HttpServletRequest</h3><p>首先看一下最基本的使用case，和get请求里的case一样，我们先开一个接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;req&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">requestParam</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">JSONObject</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">getParameterMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们测试下两种post请求下，会出现怎样的结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 常规的表单提交方式</span>
<span class="token comment"># content-type: application/x-www-form-urlencoded</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/req&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&#39;name=yihui&amp;age=18&#39;</span>
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;yihui&quot;</span><span class="token punctuation">]</span>,<span class="token string">&quot;age&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;18&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>% 

<span class="token comment"># json传提交</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/req&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json;charset:UTF-8&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;name&quot;: &quot;yihui&quot;, &quot;age&quot;: 20}&#39;</span>
<span class="token punctuation">{</span><span class="token punctuation">}</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的case中可以知道，通过传统的表达方式提交的数据时，获取参数和get获取参数使用姿势一样；然而当然传入的是json串格式的数据时，直接通过<code>javax.servlet.ServletRequest#getParameter</code>获取不到对应的参数</p><p>我们通过debug，来看一下在传json串数据的时候，如果我们要获取数据，可以怎么做</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上面截图演示了我们从请求的InputStream中获取post参数；所以再实际使用的时候需要注意，流中的数据只能读一次，读完了就没了; 这个和我们使用GET传参是有很大的差别的</p><p><strong>注意：如果您有一个打印请求参数日志的切面，在获取post传的参数时需要注意，是不是把流的数据读了，导致业务中无法获取到正确的数据！！！</strong></p><h3 id="_2-requestbody" tabindex="-1"><a class="header-anchor" href="#_2-requestbody" aria-hidden="true">#</a> 2. RequestBody</h3><p>上面说到传json串数据时，后端直接通过<code>HttpServletRequest</code>获取数据不太方便，那么有更优雅的使用姿势么？下面我们看一下<code>@RequestBody</code>注解的使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BaseReqDO</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">8706843673978981262L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> uIds<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">bodyParam</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">BaseReqDO</span> req<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> req <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token string">&quot;null&quot;</span> <span class="token operator">:</span> req<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只需要在参数中添加<code>@RequestBody</code>注解即可，然后这个接口就支持json串的POST提交了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># json串数据提交</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/body&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json;charset:UTF-8&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;name&quot;: &quot;yihui&quot;, &quot;age&quot;: 20}&#39;</span>
BaseReqDO<span class="token punctuation">(</span>name<span class="token operator">=</span>yihui, <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">20</span>, <span class="token assign-left variable">uIds</span><span class="token operator">=</span>null<span class="token punctuation">)</span>%

<span class="token comment"># 表单数据提交</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/body&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&#39;name=yihui&amp;age=20&#39;</span>
<span class="token punctuation">{</span><span class="token string">&quot;timestamp&quot;</span>:1566987651551,<span class="token string">&quot;status&quot;</span>:415,<span class="token string">&quot;error&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Unsupported Media Type&quot;</span>,<span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Content type &#39;application/x-www-form-urlencoded;charset=UTF-8&#39; not supported&quot;</span>,<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/post/body&quot;</span><span class="token punctuation">}</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：使用<code>@RequestBody</code>注解之后，可解析提交的json串；但不再支持表单提交参数方式(<code>application/x-www-form-urlencoded</code>)</strong></p><h3 id="_3-requestentity" tabindex="-1"><a class="header-anchor" href="#_3-requestentity" aria-hidden="true">#</a> 3. RequestEntity</h3><p>使用RequestEntity来解析参数，可能并不太常见，它用来解析json串提交的参数也比较合适，使用姿势也比较简单</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;entity&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">entityParam</span><span class="token punctuation">(</span><span class="token class-name">RequestEntity</span> requestEntity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>requestEntity<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用case如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># json串数据提交</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/entity&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-H</span> <span class="token string">&#39;content-type:application/json;charset:UTF-8&#39;</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;{&quot;name&quot;: &quot;yihui&quot;, &quot;age&quot;: 20}&#39;</span>
<span class="token punctuation">{</span>name<span class="token operator">=</span>yihui, <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">}</span>%

<span class="token comment"># 表单数据提交不行</span>
➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/entity&#39;</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">-d</span> <span class="token string">&#39;name=yihui&amp;age=19&#39;</span>
<span class="token punctuation">{</span><span class="token string">&quot;timestamp&quot;</span>:1566988137298,<span class="token string">&quot;status&quot;</span>:415,<span class="token string">&quot;error&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Unsupported Media Type&quot;</span>,<span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Content type &#39;application/x-www-form-urlencoded;charset=UTF-8&#39; not supported&quot;</span>,<span class="token string">&quot;path&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;/post/entity&quot;</span><span class="token punctuation">}</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-multipartfile-文件上传" tabindex="-1"><a class="header-anchor" href="#_4-multipartfile-文件上传" aria-hidden="true">#</a> 4. MultipartFile 文件上传</h3><p>文件上传也是一个比较常见的，支持起来也比较简单，有两种方式，一个是使用MultipartHttpServletRequest参数来获取上传的文件；一个是借助 <code>@RequestParam</code>注解</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> ans <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        ans <span class="token operator">=</span> file<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; = &quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ans<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 文件上传
 *
 * curl &#39;http://127.0.0.1:8080/post/file&#39; -X POST -F &#39;file=@hello.txt&#39;
 *
 * <span class="token keyword">@param</span> <span class="token parameter">file</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">fileParam</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span> <span class="token class-name">MultipartFile</span> file<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getMsg</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;file2&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">fileParam2</span><span class="token punctuation">(</span><span class="token class-name">MultipartHttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">MultipartFile</span> file <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getFile</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">getMsg</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试case如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建一个文本文件</span>
➜  ~ <span class="token function">vim</span> hello.txt
hello, this is yhh<span class="token string">&#39;s spring test!

# 使用curl -F 实现文件上传，注意使用姿势
➜  ~ curl &#39;</span>http://127.0.0.1:8080/post/file<span class="token string">&#39; -F &#39;</span><span class="token assign-left variable">file</span><span class="token operator">=</span>@hello.txt<span class="token string">&#39;
file = hello, this is yhh&#39;</span>s spring test<span class="token operator">!</span>

➜  ~ <span class="token function">curl</span> <span class="token string">&#39;http://127.0.0.1:8080/post/file2&#39;</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;file=@hello.txt&#39;</span>
<span class="token function">file</span> <span class="token operator">=</span> hello, this is yhh&#39;s spring test<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-其他" tabindex="-1"><a class="header-anchor" href="#_5-其他" aria-hidden="true">#</a> 5. 其他</h3><p>上面介绍的几种有别于GET篇中的请求姿势，请注意GET请求参数的解析方式，在POST请求中，可能也是适用的，为什么说可能？因为在post请求中，不同的<code>content-type</code>，对参数的解析影响还是有的；</p><p>需要注意的是，对于传统的表单提交(application/x-www-form-urlencoded)方式，post的参数解析依然可以使用</p><ul><li>@RequsetParam</li><li>POJO（BEAN的解析方式）</li><li>@PathVariable参数解析</li><li>方法参数解析</li></ul><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目-相关博文" tabindex="-1"><a class="header-anchor" href="#_0-项目-相关博文" aria-hidden="true">#</a> 0. 项目&amp;相关博文</h3>`,32),h={href:"http://spring.hhui.top/spring-blog/2019/08/24/190824-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8BGet%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E5%A7%BF%E5%8A%BF%E6%B1%87%E6%80%BB/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/202-web-params",target:"_blank",rel:"noopener noreferrer"};function y(E,w){const a=i("ExternalLinkIcon");return o(),l("div",null,[n("p",null,[s("作为一个常年提供各种Http接口的后端而言，如何获取请求参数可以说是一项基本技能了，本篇为《"),n("a",k,[s("190824-SpringBoot系列教程web篇之Get请求参数解析姿势汇总"),t(a)]),s("》之后的第二篇，对于POST请求方式下，又可以怎样获取请求参数呢")]),d,g,c(" more "),v,n("p",null,[s("在正式介绍之前，强烈推荐看一下《"),n("a",m,[s("190824-SpringBoot系列教程web篇之Get请求参数解析姿势汇总"),t(a)]),s("》, 因为get传参的姿势，在post参数解析中同样适用，下面的内容并不会再次详细介绍")]),b,n("ul",null,[n("li",null,[n("a",h,[s("190824-SpringBoot系列教程web篇之Get请求参数解析姿势汇总"),t(a)])]),n("li",null,[s("工程："),n("a",q,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])]),n("li",null,[s("项目: "),n("a",f,[s("https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/202-web-params"),t(a)])])])])}const B=e(r,[["render",y],["__file","190828-SpringBoot系列教程web篇之Post请求参数解析姿势汇总.html.vue"]]);export{B as default};
