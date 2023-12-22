import{_ as p,V as e,W as o,a1 as c,Y as n,Z as s,$ as t,X as l,F as i}from"./framework-eef79181.js";const u="/tutorial/imgs/231108/00.jpg",r="/tutorial/imgs/231108/01.jpg",k="/tutorial/imgs/231108/02.jpg",d="/tutorial/imgs/231108/03.jpg",m={},v=n("p",null,"本文将介绍一个SpringBoot进阶技巧：压缩返回结果实例演示，旨在提升您的网站访问性能。",-1),b=n("p",null,"当返回的数据较大时，网络开销通常不可忽视。为了解决这个问题，我们可以考虑压缩返回的结果，以减少传输的数据量，从而降低网络开销并提高性能。对于依赖Spring生态的Java开发者来说，幸运的是SpringBoot提供了非常便捷的使用方式。",-1),g=n("p",null,"接下来，我们将介绍几种不同情况下的压缩返回的使用方式：",-1),q=n("ul",null,[n("li",null,"直接返回文本：使用text/plain作为响应类型。"),n("li",null,"返回JSON数据：使用application/json作为响应类型。"),n("li",null,"返回静态资源文件：对于静态资源文件，可以使用压缩算法进行压缩后再返回。")],-1),y=l(`<h2 id="i-项目配置" tabindex="-1"><a class="header-anchor" href="#i-项目配置" aria-hidden="true">#</a> I. 项目配置</h2><h3 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖" aria-hidden="true">#</a> 1. 依赖</h3><p>首先搭建一个标准的SpringBoot项目工程，相关版本以及依赖如下</p><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><p>核心依赖 <code>spring-boot-starter-web</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-启动入口" tabindex="-1"><a class="header-anchor" href="#_2-启动入口" aria-hidden="true">#</a> 2. 启动入口</h3><p>我们使用默认的配置进行测试，因此启动入口也可以使用最基础的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-返回结果压缩" tabindex="-1"><a class="header-anchor" href="#ii-返回结果压缩" aria-hidden="true">#</a> II. 返回结果压缩</h2><h3 id="_1-开启gzip压缩" tabindex="-1"><a class="header-anchor" href="#_1-开启gzip压缩" aria-hidden="true">#</a> 1. 开启gzip压缩</h3><p>在Spring Boot中开启压缩，只需要在配置文件中添加以下配置即可自动开启：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">compression</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启支持gzip压缩</span>
    <span class="token key atrule">min-response-size</span><span class="token punctuation">:</span> <span class="token number">128</span> <span class="token comment"># 当响应长度超过128时，才执行压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面的两个配置，其中 <code>server.compression.enabled</code> 用于控制是否开启压缩；而<code>server.compression.min-response-size</code>则根据实际返回的大小，来决定是否需要开启压缩，上面的配置表示，只有返回的长度超过128时，才开启压缩。</p><p>写一个简单的demo进行验证</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 返回结果
 *
 * <span class="token keyword">@author</span> YiHui
 * <span class="token keyword">@date</span> 2023/11/6
 */</span>
<span class="token annotation punctuation">@Controller</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RspController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Data</span>
    <span class="token annotation punctuation">@NoArgsConstructor</span>
    <span class="token annotation punctuation">@AllArgsConstructor</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token class-name">Integer</span> code<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">allUsers</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserInfo</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;_用户&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 字符串方式返回, 会根据设置的最小长度，来确定是否会对返回结果进行gzip压缩
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@ResponseBody</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;strList&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">strList</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token string">&quot;128&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">allUsers</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图为实际访问对比，从两次请求的返回头来看，左边的示例表示没有开启压缩处理，而右边的示例则开启了gzip压缩。</p><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-返回json对象时最小返回阈值不生效问题" tabindex="-1"><a class="header-anchor" href="#_2-返回json对象时最小返回阈值不生效问题" aria-hidden="true">#</a> 2. 返回json对象时最小返回阈值不生效问题</h3><p>接下来我们再看一个特殊的场景，当我们返回的是jsonObject对象时，即便返回的内容小于前面配置的128，也会开启压缩</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 对象方式返回, 用于模拟不管返回的内容多小，都会进行gzip压缩
 *
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token string">&quot;128&quot;</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token function">allUsers</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">subList</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据上述实际表现，我们注意到一个令人费解的现象：同样返回一条数据时，如前面返回String时，不需要进行压缩；然而，当数据类型为JsonObject时，即使返回的内容小于128字节，也会启用gzip压缩。</p><p>这一现象的主要原因则是：</p><p>在Spring Boot框架中，默认情况下会对所有的json对象进行压缩处理。即使返回的数据量较小，即使未达到最小返回阈值，系统也会自动对其进行压缩操作。这样做的目的是为了减少传输的数据量并提高性能。</p><blockquote><p>即当返回的是对象，即<code>Content-Type: application/json</code>时，不会设置Content-Length，服务端无法判断长度，并且是通过<code>Transfer-Encoding: chunked</code>的方式发送给客户端，因此一定会做压缩。</p></blockquote><p>若我们希望严格按照预期来执行，那么可以通过对返回结果进行包装，补齐<code>Content-Length</code>来实现</p><p>自定义一个过滤器，借助<code>ContentCachingResponseWrapper</code>来包装返回结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 所有的返回结果，包装一个 content-length 返回
 *
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">FilterRegistrationBean</span> <span class="token function">filterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">FilterRegistrationBean</span> filterBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterRegistrationBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setFilter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AddContentLengthFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    filterBean<span class="token punctuation">.</span><span class="token function">setUrlPatterns</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> filterBean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 现象：当返回的是json对象时， server.compression.min-response-size不起作用，不管这个对象的大小，默认全部做gzip压缩。
 * 原因：
 * - 当返回的是字符串，即Content-Type: text/plain 时，会设置Content-Length，则会根据实际返回的大小来判断是否需要进行gzip压缩
 * - 而当返回的是对象，即Content-Type: application/json时，不会设置Content-Length，服务端无法判断长度，并且是通过Transfer-Encoding: chunked的方式发送给客户端，因此一定会做压缩。
 * 解决方案:
 * - 加上全局的 content-length
 */</span>
<span class="token keyword">class</span> <span class="token class-name">AddContentLengthFilter</span> <span class="token keyword">extends</span> <span class="token class-name">OncePerRequestFilter</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doFilterInternal</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">FilterChain</span> filterChain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token comment">// ContentCachingResponseWrapper会缓存所有写给OutputStream的数据，并且因为缓存了内容，所以可以获取Content-Length并帮忙设置</span>
        <span class="token class-name">ContentCachingResponseWrapper</span> cacheResponseWrapper<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token keyword">instanceof</span> <span class="token class-name">ContentCachingResponseWrapper</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cacheResponseWrapper <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ContentCachingResponseWrapper</span><span class="token punctuation">)</span> response<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            cacheResponseWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ContentCachingResponseWrapper</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> cacheResponseWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cacheResponseWrapper<span class="token punctuation">.</span><span class="token function">copyBodyToResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次访问验证一下，结果和我们预期的保持一致了</p><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-返回静态资源压缩" tabindex="-1"><a class="header-anchor" href="#_3-返回静态资源压缩" aria-hidden="true">#</a> 3. 返回静态资源压缩</h3><p>对于前后端未分离的项目，后端可能还需要返回静态资源文件，如JavaScript、CSS和图像等。在Spring Boot中，这些静态资源文件也可以被压缩并返回。为了实现这一功能，主要借助了<code>EncodedResourceResolver</code>类。</p><p><code>EncodedResourceResolver</code>是Spring框架中的一个类，用于解析和处理静态资源文件的编码和解码。通过使用<code>EncodedResourceResolver</code>，我们可以对静态资源文件进行压缩，并将其作为响应返回给前端。</p><p>一个简单的使用实例如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 配置返回的静态资源的压缩与缓存方式
     *
     * <span class="token keyword">@param</span> <span class="token parameter">registry</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addResourceHandlers</span><span class="token punctuation">(</span><span class="token class-name">ResourceHandlerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addResourceHandler</span><span class="token punctuation">(</span><span class="token string">&quot;/static/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResourceLocations</span><span class="token punctuation">(</span><span class="token string">&quot;classpath:/static/&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setCacheControl</span><span class="token punctuation">(</span><span class="token class-name">CacheControl</span><span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">DAYS</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cachePrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">resourceChain</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EncodedResourceResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">addResolver</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">VersionResourceResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addContentVersionStrategy</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置中，表示将static资源目录下的文件，作为静态资源返回，会设置缓存时间，并开启压缩支持</p><p>我们可以再项目的 <code>resources/static/</code> 目录下新增一个 <code>txt.txt</code> 文件，并再其中随意补充一些内容</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;1ff56203-47b2-404b-b102-77e5bc5e6a0f_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;8ba610db-6c30-4a6c-86b6-b4b7e8ff2a66_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;887e3b3d-1101-40a4-978f-7ad30c2b119e_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;134a9046-6109-41d8-9608-f5537a13e447_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;ae2a6d0a-e1f5-474f-bbf1-ea49f1f50277_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;bbc40c4b-a87b-43a0-b742-f47dab4d955d_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;602fcaa1-cf43-49cb-ae37-93d5055d0103_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;110f2b1f-5d0c-4ac7-8c75-1dac60bf85ae_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;e0225ce4-9ec5-4346-9333-e4ca9aa654d5_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;50beae64-1e09-42aa-9944-1a68ec061ddc_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;415640d8-7f33-4b92-a78f-fc0ac952e2c3_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;e7c5f4d7-5891-4424-8849-cf71b9107a25_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;2727b14f-70b6-4a2c-bd44-625b3c26dcc3_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;59037e13-fd39-4703-8227-dd5958ceaa05_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">13</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;c81b748a-d41d-4b3f-9a2b-2ab9ea74d10b_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">14</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;aaaafc2f-00cb-4a06-8c5a-be0473d80111_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;2a6de89e-3dee-41c1-993a-1dbfdd1951a8_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;ebd72458-b889-4207-b097-a9e84bc083ca_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;a9e3b70f-df3f-4173-a33c-75281c8cc3cc_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;e6bd6f87-62cc-446c-be30-d5d4ef2dc4da_用户&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后直接访问验证一下</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上面的访问示例可以看出，首次访问时，压缩返回；再次访问时，因为资源未发生变更，所以直接使用本地的缓存。这是因为浏览器在第一次请求静态资源时会将其缓存起来，以便下次访问时能够更快地加载。如果资源发生了更改，浏览器将不会使用缓存的版本，而是重新发起请求以获取最新的资源。</p><h3 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h3><p>最后对文中介绍的内容做一个整体的总结，在Spring Boot中开启gzip压缩可以通过以下方式实现：</p><ol><li>在配置文件中添加如下配置：</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">compression</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># 开启支持gzip压缩</span>
    <span class="token key atrule">min-response-size</span><span class="token punctuation">:</span> <span class="token number">128</span> <span class="token comment"># 当响应长度超过128时，才执行压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>返回json对象时最小返回阈值不生效问题：</li></ol><p>当返回的是对象时，即使返回的内容小于前面配置的128字节，也会启用gzip压缩。这是因为在Spring Boot框架中，默认会对所有的json对象进行压缩处理。如果不想压缩，可以将返回结果进行包装，实现按需压缩。</p><ol start="3"><li>返回静态资源压缩：</li></ol><p>对于前后端未分离的项目，后端可能还需要返回静态资源文件，如JavaScript、CSS和图像等。在Spring Boot中，这些静态资源文件也可以被压缩并返回。为了实现这一功能，主要借助了<code>EncodedResourceResolver</code>类，通过设置静态资源的压缩方式，并再<code>WebMvcConfigurer</code>实现中进行注册，从而实现静态资源的压缩与缓存</p><h2 id="iii-不能错过的源码和相关知识点" tabindex="-1"><a class="header-anchor" href="#iii-不能错过的源码和相关知识点" aria-hidden="true">#</a> III. 不能错过的源码和相关知识点</h2><h3 id="_0-项目" tabindex="-1"><a class="header-anchor" href="#_0-项目" aria-hidden="true">#</a> 0. 项目</h3>`,52),f={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/207-web-res-gzip",target:"_blank",rel:"noopener noreferrer"};function _(w,R){const a=i("ExternalLinkIcon");return e(),o("div",null,[v,b,g,q,c(" more "),y,n("ul",null,[n("li",null,[s("工程："),n("a",f,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])]),n("li",null,[s("源码："),n("a",h,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/207-web-res-gzip"),t(a)])])])])}const x=p(m,[["render",_],["__file","231108-SpringBoot系列之压缩返回结果实例演示.html.vue"]]);export{x as default};
