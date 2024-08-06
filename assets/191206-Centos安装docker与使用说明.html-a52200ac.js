import{_ as i,V as c,W as d,a1 as l,X as e,Y as a,Z as t,a0 as s,F as o}from"./framework-23f3cf9b.js";const r="/tutorial/hexblog/imgs/191206/00.jpg",p="/tutorial/hexblog/imgs/191206/01.jpg",u="/tutorial/hexblog/imgs/191206/02.jpg",m="/tutorial/hexblog/imgs/191206/03.jpg",v="/tutorial/hexblog/imgs/191206/04.jpg",g="/tutorial/hexblog/imgs/191206/05.jpg",b="/tutorial/hexblog/imgs/191206/06.jpg",h={},k=e("p",null,"本文主要介绍Centos下如何安装docker，并给出一些基本的使用case",-1),f=s(`<h3 id="_1-安装说明" tabindex="-1"><a class="header-anchor" href="#_1-安装说明" aria-hidden="true">#</a> 1. 安装说明</h3><p>通过脚本进行docker安装，比较简单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完毕之后，启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后开始验证是否可以使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
<span class="token comment"># 查看所有的容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果安装正确，如下</p><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-使用相关" tabindex="-1"><a class="header-anchor" href="#_2-使用相关" aria-hidden="true">#</a> 2. 使用相关</h3><h4 id="_1-安装centos镜像" tabindex="-1"><a class="header-anchor" href="#_1-安装centos镜像" aria-hidden="true">#</a> 1. 安装centos镜像</h4><p>在docker中安装一个centos的镜像，然后在docker中的centos里面搞事情</p><p>安装命令: <code>docker pull 镜像名:版本</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装镜像</span>
<span class="token function">docker</span> pull centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在安装之前，如果我们不确定有哪些镜像，可以怎么办？可以简单的搜索一下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># docker hub上查找centos的镜像</span>
<span class="token function">docker</span> search centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后从上面的搜索结果中，挑选合适的镜像进行下载，然后可以查看本地镜像列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地镜像</span>
<span class="token comment"># docker images -a  # 查看本地所有镜像</span>
<span class="token function">docker</span> images centos

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
centos              <span class="token number">7.4</span>.1708            295a0b2bd8ea        <span class="token number">8</span> weeks ago         197MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-容器使用" tabindex="-1"><a class="header-anchor" href="#_2-容器使用" aria-hidden="true">#</a> 2. 容器使用</h4><p>这一小节，主要目的就是如何加载一个镜像，启动，关闭，删除容器等操作</p><p><strong>加载镜像</strong></p><p>主要就是run方式运行容器, 下面启动一个可交互的centos容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面执行完毕之后，会进入容器内的centos，通过 <code>exit</code>退出</p><p><strong>查看容器</strong></p><p>查看docker当前加载的容器列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行之后，可以看到刚才的centos对应的容器，状态为突出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
9e0c9c3a6545        centos              <span class="token string">&quot;/bin/bash&quot;</span>         <span class="token number">8</span> seconds ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">5</span> seconds ago                       nifty_elgamal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们能再次进入这个容器么？</p><p><strong>启动容器</strong></p><p>想进入上面这个容器，首先得让它跑起来,通过start命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注意后面的那串文本，为CONTAINER ID</span>
<span class="token function">docker</span> start 9e0c9c3a6545
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>进入容器</strong></p><p>通过 <code>docker exec</code> 方式进入容器，之前看到一个博文，说是有四种进入方式，这里选择exec方式进入</p>`,35),x={href:"http://www.cnblogs.com/xhyan/p/6593075.html",target:"_blank",rel:"noopener noreferrer"},_=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 9e0c9c3a6545 /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面执行完毕之后，会发现又一次进入了容器内的centos系统</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>到这里就会有个疑问</p><ul><li>我在这个容器里面的修改是否会保留下来，我下次进来的时候，是不是这些东西还有没有</li><li>每次退出之后，容器都会停止运行么？</li></ul><p>针对上面的两个疑问，实际的操作一下，结果如下图</p><ul><li>容器内的修改会保留</li><li>exit退出之后，容器并不会停止，依然是运行的状态</li></ul><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>停止容器</strong></p><p>如果想要关闭容器，也比较简单</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 9e0c9c3a6545
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除容器</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 9e0c9c3a6545
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-定制镜像" tabindex="-1"><a class="header-anchor" href="#_3-定制镜像" aria-hidden="true">#</a> 3. 定制镜像</h4><p>以交互式运行centos镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就进入了docker中的centos操作系统了，然后可以在里面部署基本的环境，先做一个简单的演示，在home文件夹下初始化几个目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /home/
mkdir yihui data soft

# 退出容器
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行过程如下</p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>退出容器之后，将上面我们的修改保存</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit 47476c86c510 yihui/centos
<span class="token comment"># 查看本地的所有镜像，会多一个 yihui/centos</span>
<span class="token function">docker</span> images <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们改的docker实际上是在原始docker的基础上改进而来，可以通过下面的命令查看演进过程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">history</span> 240840e65297
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来就是如何使用我们修改后的镜像了，首先是加载自定义的容器, 然后一番操作如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加载镜像</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-it</span> yihui/centos
<span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 0e118346222c /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>保存后的镜像，还可以修改tag，命令如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag xxx yihui/centos:v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31);function y(E,I){const n=o("ExternalLinkIcon");return c(),d("div",null,[k,l(" more "),f,e("ul",null,[e("li",null,[a("原文："),e("a",x,[a("Docker容器进入的4种方式"),t(n)])])]),_])}const A=i(h,[["render",y],["__file","191206-Centos安装docker与使用说明.html.vue"]]);export{A as default};
