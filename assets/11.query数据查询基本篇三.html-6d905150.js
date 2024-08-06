import{_ as a,V as e,W as s,a1 as t,X as i,a0 as n}from"./framework-23f3cf9b.js";const r="/tutorial/imgs/200403/00.jpg",l="/tutorial/imgs/200403/01.jpg",o="/tutorial/imgs/200403/02.jpg",d="/tutorial/imgs/200403/03.jpg",c={},p=i("p",null,"前面介绍了两篇influxdb的查询基本操作姿势，然后有些小伙伴在实际的使用过程中，发现了一些有意思的问题，这里单独开一篇进行说明",-1),g=n(`<h3 id="_1-select-tag-无返回" tabindex="-1"><a class="header-anchor" href="#_1-select-tag-无返回" aria-hidden="true">#</a> 1. select tag 无返回</h3><p>select的查询语句格式定义如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> <span class="token string">&quot;&lt;field_key&gt;&quot;</span>::field,<span class="token string">&quot;&lt;tag_key&gt;&quot;</span>::tag from xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们查询字段中，只有tag时，就会发现啥都没有</p><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当我们需要查询tag value值时，请使用下面的方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>show tag values from measurements on <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;tagKey&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如下</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-distinct-tag-无返回" tabindex="-1"><a class="header-anchor" href="#_2-distinct-tag-无返回" aria-hidden="true">#</a> 2. distinct(tag) 无返回</h3><p>distinct函数主要用于去重，但是请注意函数内的只能是field，不能是tag，官方文档有说明</p><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-模糊查询" tabindex="-1"><a class="header-anchor" href="#_3-模糊查询" aria-hidden="true">#</a> 3. 模糊查询</h3><p>influxdb的查询条件支持正则表达式，无论是tag，还是field都是可以的</p><p>语法如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>where <span class="token punctuation">[</span>tagName<span class="token operator">|</span>fieldName<span class="token punctuation">]</span><span class="token operator">=~</span>/xxx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>演示如下</p><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18);function u(_,m){return e(),s("div",null,[p,t(" more "),g])}const f=a(c,[["render",u],["__file","11.query数据查询基本篇三.html.vue"]]);export{f as default};
