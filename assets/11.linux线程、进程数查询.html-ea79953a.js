import{_ as s,V as n,W as i,a1 as r,X as a,Y as e,a0 as l}from"./framework-23f3cf9b.js";const t={},d=a("p",null,[e("ssh登录远程服务，忽然提示"),a("code",null,"su: failed to execute /bin/bash: 资源暂时不可用"),e("，然后通过root账号登录服务器没有问题，但是使用su切换用户时，依然失败，提示上面的错误，搜索一下可能原因是线程数沾满，杀掉一些占用大量线程的进程即可；然后记录下linux下线程数的相关操作")],-1),c=l(`<h2 id="i-最大值查询" tabindex="-1"><a class="header-anchor" href="#i-最大值查询" aria-hidden="true">#</a> I. 最大值查询</h2><h3 id="_1-最大进程数查询" tabindex="-1"><a class="header-anchor" href="#_1-最大进程数查询" aria-hidden="true">#</a> 1. 最大进程数查询</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/sys/kernel/pid_max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>个人阿里云机器(单核2g)上输出如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>32768
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-最大线程数查询" tabindex="-1"><a class="header-anchor" href="#_2-最大线程数查询" aria-hidden="true">#</a> 2. 最大线程数查询</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /proc/sys/kernel/threads-max
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>阿里云机器输出如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>14566
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-用户最大进程数" tabindex="-1"><a class="header-anchor" href="#_3-用户最大进程数" aria-hidden="true">#</a> 3. 用户最大进程数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-u</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7283
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-用户进程数查询" tabindex="-1"><a class="header-anchor" href="#_4-用户进程数查询" aria-hidden="true">#</a> 4. 用户进程数查询</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示所有进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span> 
<span class="token comment"># 显示用户进程</span>
<span class="token function">ps</span> uf <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-jvm设置" tabindex="-1"><a class="header-anchor" href="#ii-jvm设置" aria-hidden="true">#</a> II. JVM设置</h2><p>java应用启动时，可以通过设置相关参数来限制</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xms</span>  <span class="token comment">#intial java heap size</span>
<span class="token parameter variable">-Xmx</span>  <span class="token comment">#maximum java heap size</span>
<span class="token parameter variable">-Xss</span>  <span class="token comment">#the stack size for each thread</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-进程的线程数查询" tabindex="-1"><a class="header-anchor" href="#iii-进程的线程数查询" aria-hidden="true">#</a> III. 进程的线程数查询</h2><h3 id="_1-具体进程的线程数查询" tabindex="-1"><a class="header-anchor" href="#_1-具体进程的线程数查询" aria-hidden="true">#</a> 1. 具体进程的线程数查询</h3><p>想知道一个进程开辟了多少个线程，有两种姿势，常见的ps和pstree</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-hH</span> 进程号 <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-p</span> 进程号 <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-获取所有java的线程总数" tabindex="-1"><a class="header-anchor" href="#_2-获取所有java的线程总数" aria-hidden="true">#</a> 2. 获取所有java的线程总数</h3><p>利用管道来做这个统计，如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span>  <span class="token function">xargs</span> <span class="token parameter variable">-I</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> pstree <span class="token parameter variable">-p</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-查询当前用户所有线程数" tabindex="-1"><a class="header-anchor" href="#_3-查询当前用户所有线程数" aria-hidden="true">#</a> 3. 查询当前用户所有线程数</h3><p>不指定具体的进程号即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pstree <span class="token parameter variable">-p</span> <span class="token operator">|</span> <span class="token function">wc</span> <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30);function p(o,u){return n(),i("div",null,[d,r(" more "),c])}const v=s(t,[["render",p],["__file","11.linux线程、进程数查询.html.vue"]]);export{v as default};
