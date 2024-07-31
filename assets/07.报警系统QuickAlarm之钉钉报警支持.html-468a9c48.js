import{_ as e,V as o,W as c,a1 as l,X as n,Y as s,Z as t,a0 as p,F as i}from"./framework-23f3cf9b.js";const u={},k=n("p",null,"Quick-Alarm时隔一年半，新增钉钉报警支持，在原有的项目基础上，新增报警规则比较简单；下面介绍一下实现与使用姿势",-1),r=p(`<h3 id="_1-钉钉报警支持" tabindex="-1"><a class="header-anchor" href="#_1-钉钉报警支持" aria-hidden="true">#</a> 1. 钉钉报警支持</h3><p>Quick-Alarm系统提供基于SPI方式进行报警方式的扩展，当我们需要新增一种报警方式时，实现接口<code>IExecute</code>，并注册spi文件即可</p><p>所以我们的<code>DingdingExecute</code>实现如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingdingExecute</span> <span class="token keyword">implements</span> <span class="token class-name">IExecute</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> users<span class="token punctuation">,</span> <span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> user <span class="token operator">:</span> users<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">DingdingPublisher</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={href:"https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq",target:"_blank",rel:"noopener noreferrer"},v=p(`<p>从官方文档中，调用钉钉机器人，实际上就是向一个特定的url，发送post请求；http请求工具这里选择了 <code>OkHttp</code> 这个库，具体实现代码如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DingdingPublisher</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">TEMPLATE</span> <span class="token operator">=</span> <span class="token string">&quot;title:\\t%s\\n\\ncontent:\\t%s&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token class-name">DingdingPublisher</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">DING_TALK_URL</span> <span class="token operator">=</span> <span class="token string">&quot;https://oapi.dingtalk.com/robot/send?access_token=&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">MediaType</span> <span class="token constant">JSON</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">OkHttpClient</span> okHttpClient<span class="token punctuation">;</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        okHttpClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OkHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token constant">JSON</span> <span class="token operator">=</span> <span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;application/json; charset=utf-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> title<span class="token punctuation">,</span> <span class="token class-name">String</span> content<span class="token punctuation">,</span> <span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token constant">TEMPLATE</span><span class="token punctuation">,</span> title<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token function">doPost</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;failed to publish msg: {} to DingDing! {}&quot;</span><span class="token punctuation">,</span> msg<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">,</span> <span class="token class-name">String</span> token<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token class-name">RequestBody</span> body <span class="token operator">=</span> <span class="token class-name">RequestBody</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token function">buildTextMsgBody</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Response</span> response <span class="token operator">=</span> okHttpClient
                <span class="token punctuation">.</span><span class="token function">newCall</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token constant">DING_TALK_URL</span> <span class="token operator">+</span> token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">buildTextMsgBody</span><span class="token punctuation">(</span><span class="token class-name">String</span> content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">JSONObject</span> msg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;msgtype&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JSONObject</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JSONObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        text<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>
        msg<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> msg<span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面基本上就完成了一个报警器的代码实现，接下来别忘了需要注册，在资源目录下，新建文件夹 <code>META-INF/services</code>（注意上面是两层目录）, 添加文件<code>com.hust.hui.alarm.core.execut.api.IExecute</code>， 文件内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>com.hust.hui.alarm.plugin.dingding.DingdingExecute
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-测试使用" tabindex="-1"><a class="header-anchor" href="#_2-测试使用" aria-hidden="true">#</a> 2. 测试使用</h3><p>使用钉钉报警时，需要先有一个自定义的钉钉机器人，可以在一个群里面申请，会获得一个token；然后将这个token 配置到我们的预警规则里面</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;XXX,YYY&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LOG&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;autoIncEmergency&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DINGDING&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;threshold&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
                <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&quot;请用实际的token替换!!!&quot;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;yihui&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的配置中，所以我们需要在users里面填写你的机器人token，这个需要额外注意；</p><p>此外新版的钉钉机器人有三种安全校验方式</p><ul><li>关键词：需要你的报警内容中，包含对应的关键字</li><li>加签：暂时不支持这种场景，感觉意义不大</li><li>ip白名单：确保使用的机器ip在白名单内部</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 测试异常升级的case</span>
    <span class="token comment">// 计数 [10 - 12) 钉钉报警</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">AlarmWrapper</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token string">&quot;YYY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;异常报警升级测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>项目源码</strong></p>`,12),m={href:"https://github.com/liuyueyi/quick-alarm",target:"_blank",rel:"noopener noreferrer"};function b(g,y){const a=i("ExternalLinkIcon");return o(),c("div",null,[k,l(" more "),r,n("p",null,[s("具体的钉钉推送，抽象了一个辅助类，关于钉钉机器人的使用姿势，可以参考一下官方文档: "),n("a",d,[s("获取自定义机器人webhook"),t(a)])]),v,n("ul",null,[n("li",null,[n("a",m,[s("https://github.com/liuyueyi/quick-alarm"),t(a)])])])])}const q=e(u,[["render",b],["__file","07.报警系统QuickAlarm之钉钉报警支持.html.vue"]]);export{q as default};
