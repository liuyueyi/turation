import{_ as t,V as p,W as c,a1 as o,Y as n,Z as s,$ as e,X as i,F as l}from"./framework-eef79181.js";const u="/tutorial/imgs/230308/00.gif",r={},d=n("p",null,[s("前面一片文章虽说介绍了Caffeine的使用方式，但是更多的是偏向于基础的Caffeine用法；接下来这边博文将给大家介绍一下Caffeine结合Spring的"),n("code",null,"@Cacheable"),s("注解，来实现内部缓存的使用姿势")],-1),k=i(`<h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><h3 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖" aria-hidden="true">#</a> 1. 依赖</h3><p>首先搭建一个标准的SpringBoot项目工程，相关版本以及依赖如下</p><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.ben-manes.caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>caffeine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-cache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h3><p>SpringBoot官方对Caffeine的集成，提供了非常好的支持，比如本文介绍的在使用 <code>@Cacheable</code> 注解来处理缓存时，我们无需额外操作，直接在配置文件来实现缓存的指定，以及对应的Caffeine相关配置限定</p><p>核心配置如下 application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 指定全局默认的缓存策略</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> caffeine
    <span class="token key atrule">caffeine</span><span class="token punctuation">:</span>
      <span class="token key atrule">spec</span><span class="token punctuation">:</span> initialCapacity=10<span class="token punctuation">,</span>maximumSize=200<span class="token punctuation">,</span>expireAfterWrite=5m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的 spring.cache.type 主要用来表明缓存注解的具体缓存实现为 Caffeine，当然还可以是Guava、redis等</p><p>其次就是 <code>spring.cache.caffeine.spec</code>， 它指定了Caffeine的初始化容量大小，最大个数，失效时间等 （无特殊场景时，所有的缓存注解都是公用这个配置的）</p><h2 id="使用实例" tabindex="-1"><a class="header-anchor" href="#使用实例" aria-hidden="true">#</a> 使用实例</h2><h3 id="_1-开启缓存注解支持" tabindex="-1"><a class="header-anchor" href="#_1-开启缓存注解支持" aria-hidden="true">#</a> 1. 开启缓存注解支持</h3><p>首先在启动类上添加 <code>@EnableCaching</code> 注解，注意若不加则缓存不会生效</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableCaching</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用实例" tabindex="-1"><a class="header-anchor" href="#_2-使用实例" aria-hidden="true">#</a> 2. 使用实例</h3><p>我们定义一个UserService，主要是用来操作用户相关信息，现在先定义一个<code>User</code>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> uid<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> uname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后添加增删查</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token comment">// 这个注释的是默认的缓存策略，此时对应的 cacheManager 由 spring.cache.caffeine.spec 来指定缓存规则</span>
<span class="token annotation punctuation">@CacheConfig</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;customCache&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnoCacheService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 用一个map来模拟存储
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> userDb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 添加数据，并保存到缓存中, 不管缓存中有没有，都会更新缓存
     *
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     */</span>
    <span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;#user.uid&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDb<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getUid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 优先从缓存中获取数据，若不存在，则从 userDb 中查询，并会将结果写入到缓存中
     *
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;#userId&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;doGetUser from DB:&quot;</span> <span class="token operator">+</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> userDb<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">&quot;#userId&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">removeUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userDb<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面分别介绍了三个注解</p><ul><li>CachePut: 不管缓存有没有，都将方法的返回结果写入缓存中</li><li>Cacheable: 先从缓存查，没有则执行方法，并塞入缓存</li><li>CacheEvit: 失效缓存</li></ul><p>其次在类上还有一个<code>@CacheConfig</code>注解，主要定义了一个 <code>cacheNames</code> 属性，当我们使用缓存注解时，需要注意的是这个cacheNames必须得有，否则就会报错</p><p>当一个类中所有缓存公用一个cacheNames时，可以直接在类上添加<code>@CacheConfig</code>来避免在每个地方都添加指定</p><h3 id="_3-写个测试demo" tabindex="-1"><a class="header-anchor" href="#_3-写个测试demo" aria-hidden="true">#</a> 3. 写个测试demo</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">AnoCacheService</span> anoCacheService<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> uid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;save&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> anoCacheService<span class="token punctuation">.</span><span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>uid<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;query&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> anoCacheService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> user <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> user<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;remove&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        anoCacheService<span class="token punctuation">.</span><span class="token function">removeUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来实际看一下，第一次没有数据时，返回的是不是空；当有数据之后，缓存是否会命中</p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h3><p>这篇博文主要介绍了SpringBoot如何整合Caffeine，结合Spring的缓存注解，基于可以说是很低成本的就让我们的方法实现缓存功能，但是请注意，有几个注意点</p><ol><li>当我并不希望所有数据公用一个缓存时，怎么处理？</li></ol><ul><li>比如我有一些关键数据，虽然访问频率可能没那么高，但是还每次实际读取的成本很高，又不怎么变动，我希望可以更长久的缓存；</li><li>如果公用一个缓存，则有可能导致它们被其他的热点数据给挤下线了（超过最大数量限制给删除了）</li></ul><ol start="2"><li>在实际使用时，需要特别注意，加了缓存注解之后，返回的实际上是缓存中的对象，如上面返回的是User对象还好，如果返回的是一个容器，那么直接像这些容器中进行额外的添加、删除元素，是直接影响缓存结果的</li></ol><p>另外，查看本文推荐结合下面几篇博文一起享用，以获取更多的知识点</p>',34),v={href:"https://spring.hhui.top/spring-blog/2021/06/16/210616-SpringBoot%E7%BC%93%E5%AD%98%E6%B3%A8%E8%A7%A3-Cacheable-CacheEvit-CachePut%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E4%BB%8B%E7%BB%8D/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://spring.hhui.top/spring-blog/2021/07/01/210701-SpringBoot%E7%BC%93%E5%AD%98%E6%B3%A8%E8%A7%A3-Cacheable%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89key%E7%AD%96%E7%95%A5%E5%8F%8A%E7%BC%93%E5%AD%98%E5%A4%B1%E6%95%88%E6%97%B6%E9%97%B4%E6%8C%87%E5%AE%9A/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"不能错过的源码和相关知识点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#不能错过的源码和相关知识点","aria-hidden":"true"},"#"),s(" 不能错过的源码和相关知识点")],-1),g=n("h3",{id:"_0-项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0-项目","aria-hidden":"true"},"#"),s(" 0. 项目")],-1),h={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/500-cache-caffeine",target:"_blank",rel:"noopener noreferrer"};function y(_,C){const a=l("ExternalLinkIcon");return p(),c("div",null,[d,o(" more "),k,n("ul",null,[n("li",null,[n("a",v,[s("【DB系列】缓存注解@Cacheable @CacheEvit @CachePut使用姿势介绍 | 一灰灰Blog"),e(a)])]),n("li",null,[n("a",m,[s("【DB系列】SpringBoot缓存注解@Cacheable之自定义key策略及缓存失效时间指定 | 一灰灰Blog"),e(a)])])]),b,g,n("ul",null,[n("li",null,[s("工程："),n("a",h,[s("https://github.com/liuyueyi/spring-boot-demo"),e(a)])]),n("li",null,[s("源码："),n("a",f,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/500-cache-caffeine"),e(a)])])])])}const E=t(r,[["render",y],["__file","230308-SpringBoot系列之内存缓存Caffeine整合Cachebale注解.html.vue"]]);export{E as default};
