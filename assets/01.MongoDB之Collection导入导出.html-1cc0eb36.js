import{_ as s,V as n,W as o,a1 as t,X as a,Y as e,a0 as r}from"./framework-23f3cf9b.js";const l={},c=a("p",null,"mongodb中集合的导入导出，在robot3t工具中没有找到对应的方法，记录下控制台的操作流程",-1),d=a("p",null,[e("主要利用： "),a("code",null,"mongoexport"),e(" 与 "),a("code",null,"mongoimport")],-1),p=r(`<h3 id="_1-集合导出" tabindex="-1"><a class="header-anchor" href="#_1-集合导出" aria-hidden="true">#</a> 1. 集合导出</h3><p>直接使用 <code>mognoexport</code> 即可，通过<code>mongoexport --help</code>查看对应的使用说明</p><p>将库<code>database</code>中的集合<code>collection</code>导出到json文件<code>out.json</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/mongoexport <span class="token parameter variable">-h</span> localhost:27107 <span class="token parameter variable">-u</span> user <span class="token parameter variable">-p</span> <span class="token builtin class-name">pwd</span> <span class="token parameter variable">-d</span> database <span class="token parameter variable">-c</span> collection <span class="token parameter variable">-o</span> out.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-集合导入" tabindex="-1"><a class="header-anchor" href="#_2-集合导入" aria-hidden="true">#</a> 2. 集合导入</h3><p>使用 <code>mongoimport</code> 实现导入，同样可以输入<code>--help</code>查看使用说明</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/mongoimport <span class="token parameter variable">-h</span> localhost:27107 <span class="token parameter variable">-u</span> user <span class="token parameter variable">-p</span> <span class="token builtin class-name">pwd</span> <span class="token parameter variable">-d</span> database <span class="token parameter variable">-c</span> new_collection ./out.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function i(m,b){return n(),o("div",null,[c,d,t(" more "),p])}const u=s(l,[["render",i],["__file","01.MongoDB之Collection导入导出.html.vue"]]);export{u as default};
