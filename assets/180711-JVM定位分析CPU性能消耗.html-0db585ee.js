import{_ as a,V as e,W as s,a0 as n}from"./framework-23f3cf9b.js";const i={},d=n(`<h1 id="jvm分析cpu性能消耗" tabindex="-1"><a class="header-anchor" href="#jvm分析cpu性能消耗" aria-hidden="true">#</a> JVM分析CPU性能消耗</h1><p>分三步走，看下JVM中的线程占用的CPU资源，以及定位这些线程为什么如此消耗资源</p><h2 id="i-分析三板斧" tabindex="-1"><a class="header-anchor" href="#i-分析三板斧" aria-hidden="true">#</a> I. 分析三板斧</h2><h3 id="_1-获取jvm进程号" tabindex="-1"><a class="header-anchor" href="#_1-获取jvm进程号" aria-hidden="true">#</a> 1. 获取JVM进程号</h3><p>使用top方式查看进程号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span>
// 按c显示详情
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用jps方式查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jps <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-查看进程中不同线程对cpu的资源消耗" tabindex="-1"><a class="header-anchor" href="#_2-查看进程中不同线程对cpu的资源消耗" aria-hidden="true">#</a> 2. 查看进程中不同线程对CPU的资源消耗</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">top</span> <span class="token parameter variable">-Hp</span> 进程号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://upload-images.jianshu.io/upload_images/1405936-27f8707d35cd01b2.png" alt="show" tabindex="0" loading="lazy"><figcaption>show</figcaption></figure><p>获取其中占用CPU资源较多的几个线程PID, 转16进制，可以使用shell命令如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">printf</span> <span class="token string">&quot;%x<span class="token entity" title="\\n">\\n</span>&quot;</span> <span class="token number">4485</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-jstack分析线程" tabindex="-1"><a class="header-anchor" href="#_3-jstack分析线程" aria-hidden="true">#</a> 3. jstack分析线程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>jstack 进程号 <span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> xxx.tmp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入tmp文件，然后根据前面计算的十六进制，定位到具体的线程</p>`,16),r=[d];function t(l,c){return e(),s("div",null,r)}const o=a(i,[["render",t],["__file","180711-JVM定位分析CPU性能消耗.html.vue"]]);export{o as default};
