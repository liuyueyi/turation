import{_ as e,V as p,W as o,a1 as c,Y as n,a0 as a,Z as t,X as i,F as l}from"./framework-ad59245f.js";const u={},r=n("p",null,"Spring在3.1版本，就提供了一条基于注解的缓存策略，实际使用起来还是很丝滑的，本文将针对几个常用的注解进行简单的介绍说明，有需要的小伙伴可以尝试一下",-1),d=n("p",null,"本文主要知识点：",-1),k=n("ul",null,[n("li",null,"@Cacheable: 缓存存在，则使用缓存；不存在，则执行方法，并将结果塞入缓存"),n("li",null,"@CacheEvit: 失效缓存"),n("li",null,"@CachePut: 更新缓存")],-1),v=i(`<h2 id="i-项目环境" tabindex="-1"><a class="header-anchor" href="#i-项目环境" aria-hidden="true">#</a> I. 项目环境</h2><h3 id="_1-项目依赖" tabindex="-1"><a class="header-anchor" href="#_1-项目依赖" aria-hidden="true">#</a> 1. 项目依赖</h3><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code> + <code>redis5.0</code>进行开发</p><p>开一个web服务用于测试</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全程使用默认配置，redis本机，端口6379，无密码</p><h2 id="ii-缓存注解介绍" tabindex="-1"><a class="header-anchor" href="#ii-缓存注解介绍" aria-hidden="true">#</a> II. 缓存注解介绍</h2><h3 id="_1-cacheable" tabindex="-1"><a class="header-anchor" href="#_1-cacheable" aria-hidden="true">#</a> 1. <code>@Cacheable</code></h3><p>这个注解用于修饰方法or类，当我们访问它修饰的方法时，优先从缓存中获取，若缓存中存在，则直接获取缓存的值；缓存不存在时，执行方法，并将结果写入缓存</p><p>这个注解，有两个比较核心的设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	/**
	 * 与 cacheNames 效果等价
	 */
	@AliasFor(&quot;cacheNames&quot;)
	String[] value() default {};

	
	@AliasFor(&quot;value&quot;)
	String[] cacheNames() default {};

	/**
	 * 缓存key
	 */
	String key() default &quot;&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cacheNames可以理解为缓存key的前缀，可以为组件缓存的key变量；当key不设置时，使用方法参数来初始化，注意key为SpEL表达式，因此如果要写字符串时，用单引号括起来</p><p>一个简单的使用姿势</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 首先从缓存中查，查到之后，直接返回缓存数据；否则执行方法，并将结果缓存
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
 * redisKey: cacheNames + key 组合而成 --&gt; 支持SpEL
 * redisValue: 返回结果
 *
 * <span class="token keyword">@param</span> <span class="token parameter">name</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;&#39;p_&#39;+ #name&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;hello+&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如我们传参为 yihuihui, 那么缓存key为 <code>say::p_yihuihui</code></p><p>除了上面三个配置值之外，查看<code>@Cacheable</code>注解源码的童鞋可以看到还有<code>condition</code>设置，这个表示当它设置的条件达成时，才写入缓存</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 满足condition条件的才写入缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">age</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;condition&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">,</span> condition <span class="token operator">=</span> <span class="token string">&quot;#age % 2 == 0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">setByCondition</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;condition:&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个case中，age为偶数的时候，才走缓存；否则不写缓存</p><p>接下来是<code>unless</code>参数，从名字上可以看出它表示不满足条件时才写入缓存</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * unless, 不满足条件才写入缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">age</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;unless&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">,</span> unless <span class="token operator">=</span> <span class="token string">&quot;#age % 2 == 0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">setUnless</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;unless:&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-cacheput" tabindex="-1"><a class="header-anchor" href="#_2-cacheput" aria-hidden="true">#</a> 2. @CachePut</h3><p>不管缓存有没有，都将方法的返回结果写入缓存；适用于缓存更新</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 不管缓存有没有，都写入缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">age</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@CachePut</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;t4&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">cachePut</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;t4:&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-cacheevict" tabindex="-1"><a class="header-anchor" href="#_3-cacheevict" aria-hidden="true">#</a> 3. @CacheEvict</h3><p>这个就是我们理解的删除缓存</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 失效缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">name</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;&#39;p_&#39;+ #name&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">evict</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;evict+&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-caching" tabindex="-1"><a class="header-anchor" href="#_4-caching" aria-hidden="true">#</a> 4. @Caching</h3><p>在实际的工作中，经常会遇到一个数据变动，更新多个缓存的场景，对于这个场景，可以通过<code>@Caching</code>来实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * caching实现组合，添加缓存，并失效其他的缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">age</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Caching</span><span class="token punctuation">(</span>cacheable <span class="token operator">=</span> <span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;caching&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> evict <span class="token operator">=</span> <span class="token annotation punctuation">@CacheEvict</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;t4&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">caching</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;caching: &quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot;--&gt;&quot;</span> <span class="token operator">+</span> <span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个就是组合操作</p><ul><li>从 <code>caching::age</code>缓存取数据，不存在时执行方法并写入缓存；</li><li>失效缓存 <code>t4::age</code></li></ul><h3 id="_5-异常时-缓存会怎样" tabindex="-1"><a class="header-anchor" href="#_5-异常时-缓存会怎样" aria-hidden="true">#</a> 5. 异常时，缓存会怎样？</h3><p>上面的几个case，都是正常的场景，当方法抛出异常时，这个缓存表现会怎样？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用于测试异常时，是否会写入缓存
 *
 * <span class="token keyword">@param</span> <span class="token parameter">age</span>
 * <span class="token keyword">@return</span>
 */</span>
<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;exception&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;#age&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Cacheable</span><span class="token punctuation">(</span>cacheNames <span class="token operator">=</span> <span class="token string">&quot;say&quot;</span><span class="token punctuation">,</span> key <span class="token operator">=</span> <span class="token string">&quot;&#39;p_yihuihui&#39;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">exception</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">10</span> <span class="token operator">/</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据实测结果，当<code>age==0</code>时，上面两个缓存都不会成功</p><h3 id="_6-测试用例" tabindex="-1"><a class="header-anchor" href="#_6-测试用例" aria-hidden="true">#</a> 6. 测试用例</h3><p>接下来验证下缓存注解与上面描述的是否一致</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexRest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">BasicDemo</span> helloService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个主要是验证<code>@Cacheable</code>注解，若缓存不命中，每次返回的结果应该都不一样，然而实际访问时，会发现返回的都是相同的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost:8080/?name<span class="token operator">=</span>yihuihui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>失效缓存</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;evict&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">evict</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">evict</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失效缓存，需要和上面的case配合起来使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> http://localhost:8080/evict?name<span class="token operator">=</span>yihuihui
<span class="token function">curl</span> http://localhost:8080/?name<span class="token operator">=</span>yihuihui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>剩下其他的相关测试类就比较好理解了，一并贴出对应的代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;condition&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">t1</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">setByCondition</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;unless&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">t2</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">setUnless</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;exception&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">exception</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>helloService<span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;cachePut&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">cachePut</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> helloService<span class="token punctuation">.</span><span class="token function">cachePut</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-小结" tabindex="-1"><a class="header-anchor" href="#_7-小结" aria-hidden="true">#</a> 7. 小结</h3><p>最后管理小结一下Spring提供的几个缓存注解</p><ul><li><code>@Cacheable</code>: 缓存存在，则从缓存取；否则执行方法，并将返回结果写入缓存</li><li><code>@CacheEvit</code>: 失效缓存</li><li><code>@CachePut</code>: 更新缓存</li><li><code>@Caching</code>: 都注解组合</li></ul><p>上面虽说可以满足常见的缓存使用场景，但是有一个非常重要的点没有说明，缓存失效时间应该怎么设置？？？</p><p>如何给每个缓存设置不同的缓存失效时间，咱么下篇博文见，我是一灰灰，欢迎关注长草的公众号<code>一灰灰blog</code></p><h2 id="iii-不能错过的源码和相关知识点" tabindex="-1"><a class="header-anchor" href="#iii-不能错过的源码和相关知识点" aria-hidden="true">#</a> III. 不能错过的源码和相关知识点</h2><h3 id="_0-项目" tabindex="-1"><a class="header-anchor" href="#_0-项目" aria-hidden="true">#</a> 0. 项目</h3>`,53),m={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/125-cache-ano",target:"_blank",rel:"noopener noreferrer"};function b(h,y){const s=l("ExternalLinkIcon");return p(),o("div",null,[r,d,k,c(" more "),v,n("ul",null,[n("li",null,[a("工程："),n("a",m,[a("https://github.com/liuyueyi/spring-boot-demo"),t(s)])]),n("li",null,[a("源码："),n("a",g,[a("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/125-cache-ano"),t(s)])])])])}const f=e(u,[["render",b],["__file","17.210616-SpringBoot缓存注解-Cacheable-CacheEvit-CachePut使用姿势介绍.html.vue"]]);export{f as default};
