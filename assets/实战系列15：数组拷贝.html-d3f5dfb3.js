import{_ as a,V as s,W as t,a1 as p,Y as n,a0 as e,X as o}from"./framework-ad59245f.js";const c={},l=n("h1",{id:"实战15-数组拷贝",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战15-数组拷贝","aria-hidden":"true"},"#"),e(" 实战15："),n("strong",null,[n("code",null,"数组拷贝")])],-1),u=n("p",null,"说实话，在实际的业务开发中，基本上很少很少很少...会遇到数组拷贝的场景，甚至是我们一般都不怎么用数组，List它不香嘛，为啥要用数组",-1),i=n("p",null,"现在问题来了，要实现数组拷贝，怎么整？",-1),r=o(`<h2 id="_1-实现方式" tabindex="-1"><a class="header-anchor" href="#_1-实现方式" aria-hidden="true">#</a> 1. 实现方式</h2><h3 id="_1-1-基础写法" tabindex="-1"><a class="header-anchor" href="#_1-1-基础写法" aria-hidden="true">#</a> 1.1. 基础写法</h3><p>最简单直接的写法，那就是新建一个数组，一个一个拷贝进去，不就完事了么</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> ans <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>data<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ans<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-借用容器中转" tabindex="-1"><a class="header-anchor" href="#_1-2-借用容器中转" aria-hidden="true">#</a> 1.2. 借用容器中转</h3><p>数组用起来有点麻烦，还是用容器舒爽，借助List来实现数组的拷贝，也就几行代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>data<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span>out<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-array-copy" tabindex="-1"><a class="header-anchor" href="#_1-3-array-copy" aria-hidden="true">#</a> 1.3. Array.copy</h3><p>上面这个有点绕得远了， 直接使用Array.copy</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> out <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-system-arraycopy" tabindex="-1"><a class="header-anchor" href="#_1-4-system-arraycopy" aria-hidden="true">#</a> 1.4. System.arraycopy</h3><p>除了上面的，还可以使用更基础的用法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span>data<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> out<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有看过jdk源码的小伙伴，上面这个用法应该不会陌生，特别是在容器类，这种数组拷贝的方式比比可见</p><p>参数说明:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">arraycopy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> src<span class="token punctuation">,</span>  <span class="token keyword">int</span>  srcPos<span class="token punctuation">,</span>
        <span class="token class-name">Object</span> dest<span class="token punctuation">,</span> <span class="token keyword">int</span> destPos<span class="token punctuation">,</span>
        <span class="token keyword">int</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>src : 原数组</li><li>srcPos: 原数组用于拷贝的起始下标</li><li>dest: 拷贝后的数组</li><li>destPos: 目标数组的小标</li><li>length: 原数组中拷贝过去的数组长度</li></ul><p>从上面的描述也能看出来，这个方法不仅能实现数组拷贝，还可以实现数组内指定片段的拷贝</p>`,18);function k(d,v){return s(),t("div",null,[l,u,i,p(" more "),r])}const g=a(c,[["render",k],["__file","实战系列15：数组拷贝.html.vue"]]);export{g as default};
