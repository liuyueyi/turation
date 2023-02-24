import{_ as a,V as o,W as s,a1 as n,Y as e,X as d}from"./framework-eef79181.js";const t={},i=e("p",null,"后续的所有文章的基础，都是需要先连上mongodb，然后才能执行各种命令操作；",-1),r=e("p",null,"本文将介绍一下如何连接一个已经启动的mongodb服务器",-1),l=d(`<h3 id="_1-连接语法" tabindex="-1"><a class="header-anchor" href="#_1-连接语法" aria-hidden="true">#</a> 1. 连接语法</h3><p>标准URI连接语法：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>mongodb://</code> 固定前缀</li><li><code>username:password@</code>: 如果开启了用户登录验证，需要指定用户名密码</li><li><code>host1:port1</code>: mongodb服务器的ip/域名 + 端口(不填时，默认为27017)</li><li><code>database</code>: 如果指定<code>username:password@</code>，连接并验证登陆指定数据库。若不指定，默认打开 test 数据库</li><li><code>?options</code>: 是连接选项。如果不使用/database，则前面需要加上</li></ul><h3 id="_2-实例" tabindex="-1"><a class="header-anchor" href="#_2-实例" aria-hidden="true">#</a> 2. 实例</h3><p>直接连接方式如下，注意这种方式会保留用户名和密码，会有一定的安全风险</p><p><strong>连接目标服务器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 连接本地mongodb</span>
mongo mongodb://root:root@127.0.0.1:27017/admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>连接多台服务器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongo mongodb://root:root@127.0.0.1:27017,127.0.0.1:27018/admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>连接 replica set 三台服务器, 写入操作应用在主服务器 并且分布查询到从服务器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mongo mongodb://host1,host2,host3/?slaveOk<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12);function c(m,p){return o(),s("div",null,[i,r,n(" more "),l])}const h=a(t,[["render",c],["__file","04.MongoDb系列教程二-连接.html.vue"]]);export{h as default};
