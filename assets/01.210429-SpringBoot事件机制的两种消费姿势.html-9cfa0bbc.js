import{_ as t,V as p,W as o,a1 as c,Y as n,a0 as s,Z as e,X as i,F as l}from"./framework-ad59245f.js";const u={},d=n("p",null,"借助Spring可以非常简单的实现事件监听机制，本文简单介绍下面向接口与注解监听的两种姿势",-1),r=i(`<h2 id="i-项目环境" tabindex="-1"><a class="header-anchor" href="#i-项目环境" aria-hidden="true">#</a> I. 项目环境</h2><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><p>为了后面的发布事件验证，起一个web服务</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-事件机制" tabindex="-1"><a class="header-anchor" href="#ii-事件机制" aria-hidden="true">#</a> II. 事件机制</h2><h3 id="_1-事件对象" tabindex="-1"><a class="header-anchor" href="#_1-事件对象" aria-hidden="true">#</a> 1. 事件对象</h3><p>在Spring中，所有的事件需要继承自<code>ApplicationEvent</code>，一个最基础的<code>MsgEvent</code>如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> msg<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Create a new <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">ApplicationEvent</span></span></span><span class="token punctuation">}</span>.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">source</span> the object on which the event initially occurred or with
     *               which the event is associated (never <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token keyword">null</span></span></span><span class="token punctuation">}</span>)
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">MsgEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> msg<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;MsgEvent{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;msg=&#39;&quot;</span> <span class="token operator">+</span> msg <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-接口方式消费" tabindex="-1"><a class="header-anchor" href="#_2-接口方式消费" aria-hidden="true">#</a> 2. 接口方式消费</h3><p>消费事件有两种方式，接口的声明，主要是实现<code>ApplicationListener</code>接口；注意需要将listener声明为Spring的bean对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgEventListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MsgEvent</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">MsgEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;receive msg event: &quot;</span> <span class="token operator">+</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-注解方式消费" tabindex="-1"><a class="header-anchor" href="#_3-注解方式消费" aria-hidden="true">#</a> 3. 注解方式消费</h3><p>实现接口需要新建实现类，更简单的方法是直接在消费方法上加一个注解<code>@EventListener</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EventListener</span><span class="token punctuation">(</span><span class="token class-name">MsgEvent</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">consumer</span><span class="token punctuation">(</span><span class="token class-name">MsgEvent</span> msgEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;receive msg by @anno: &quot;</span> <span class="token operator">+</span> msgEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个注解，支持根据Event参数类型进行匹配，即上面的实例中，方法上直接加<code>@EventListener</code>不指定圆括号内部的也没关系</p><h3 id="_4-发布事件" tabindex="-1"><a class="header-anchor" href="#_4-发布事件" aria-hidden="true">#</a> 4. 发布事件</h3><p>前面是消费事件，消费的前提是有事件产生，在Spring中，发布事件主要需要借助<code>ApplicationContext</code>来实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MsgPublisher</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        applicationContext<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MsgEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-测试" tabindex="-1"><a class="header-anchor" href="#_5-测试" aria-hidden="true">#</a> 5. 测试</h3><p>一个简单的测试demo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IndexController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">MsgPublisher</span> msgPublisher<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">&quot;pub&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        msgPublisher<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ok&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问: <code>curl http://localhost:8082/pub?msg=一灰灰blog</code></p><p>输出日志:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>receive msg by @anno: MsgEvent{msg=&#39;一灰灰blog&#39;}
receive msg event: MsgEvent{msg=&#39;一灰灰blog&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这个测试两种消费方式都可以成功，但是，在实测的过程中发现一种case，注解消费方式不生效，测试姿势如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token class-name">MsgPublisher</span> msgPublisher<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        msgPublisher<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;一灰灰blog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接在启动类的构造方法中发布事件，发现接口方式可以接收事件，但是注解方式不生效，why?</p>`,27),k={href:"https://stackoverflow.com/questions/38487474/springboot-eventlistener-dont-receive-events",target:"_blank",rel:"noopener noreferrer"},v=n("ul",null,[n("li",null,"发布消息比事件消费注册的要早")],-1),m=n("p",null,"那么是这个原因么？ 静待下次源码分析",-1),b=n("h2",{id:"ii-其他",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ii-其他","aria-hidden":"true"},"#"),s(" II. 其他")],-1),g=n("h3",{id:"_0-项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0-项目","aria-hidden":"true"},"#"),s(" 0. 项目")],-1),h={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/012-context-listener/",target:"_blank",rel:"noopener noreferrer"};function _(w,x){const a=l("ExternalLinkIcon");return p(),o("div",null,[d,c(" more "),r,n("p",null,[s("在stockoverstack上有个相似的问题 "),n("a",k,[s("https://stackoverflow.com/questions/38487474/springboot-eventlistener-dont-receive-events"),e(a)]),s("，这里主要提了一个观点")]),v,m,b,g,n("ul",null,[n("li",null,[s("工程："),n("a",h,[s("https://github.com/liuyueyi/spring-boot-demo"),e(a)])]),n("li",null,[s("源码："),n("a",y,[s("https://github.com/liuyueyi/spring-boot-demo/blob/master/spring-boot/012-context-listener/"),e(a)])])])])}const E=t(u,[["render",_],["__file","01.210429-SpringBoot事件机制的两种消费姿势.html.vue"]]);export{E as default};
