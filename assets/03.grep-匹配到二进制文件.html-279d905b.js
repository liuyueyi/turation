import{_ as e,V as s,W as a,a0 as n}from"./framework-23f3cf9b.js";const r={},c=n(`<p>直接使用grep 发现一个奇怪的问题，居然提示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> <span class="token string">&#39;error&#39;</span> cic.log
匹配到二进制文件 cic.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>grep如果碰到\\000 NUL字符，就会认为文件是二进制文件。必须加上-a或--text选项强制让grep认为是文本文件才可以看到正常的结果</p></blockquote><p>因此解决方案是:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">grep</span> <span class="token string">&#39;error&#39;</span> cic.log <span class="token parameter variable">--text</span>
<span class="token comment"># 或者如下</span>
$ <span class="token function">grep</span> <span class="token string">&#39;error&#39;</span> cic.log <span class="token parameter variable">--a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[c];function l(t,o){return s(),a("div",null,i)}const d=e(r,[["render",l],["__file","03.grep-匹配到二进制文件.html.vue"]]);export{d as default};
