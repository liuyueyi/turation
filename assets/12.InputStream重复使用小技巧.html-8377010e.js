import{_ as n,V as s,W as a,a1 as t,X as p,a0 as e}from"./framework-23f3cf9b.js";const c={},o=p("p",null,"在日常的编码中，有时会遇到，需要重复获取InputStream中的数据的需求；然后一般的流，只能读一次，读完就没了；那么如果我希望有一个可以重复读取数据的InputStream，可以怎么操作？",-1),l=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 转换为字节数组输入流，可以重复消费流中数据
 *
 * <span class="token keyword">@param</span> <span class="token parameter">inputStream</span>
 * <span class="token keyword">@return</span>
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ByteArrayInputStream</span> <span class="token function">toByteArrayInputStream</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> inputStream<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inputStream <span class="token keyword">instanceof</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">)</span> inputStream<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayOutputStream</span> bos <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BufferedInputStream</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">;</span> <span class="token punctuation">(</span>c <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            bos<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 主动告知回收</span>
        b <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bos<span class="token punctuation">.</span><span class="token function">toByteArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现方式基本就是将InputStream中的数据读取，写入到一个临时的输出流，然后再封装为<code>ByteArrayInputStream</code>即可</p><p>当我们使用时，如果需要重复消费流中数据，手动调用<code>java.io.ByteArrayInputStream#reset</code></p>`,3);function u(i,r){return s(),a("div",null,[o,t(" more "),l])}const d=n(c,[["render",u],["__file","12.InputStream重复使用小技巧.html.vue"]]);export{d as default};
