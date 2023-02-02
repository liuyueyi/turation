import{ab as p,H as u,I as d,F as a,O as n,V as s,ad as i,ac as e,Y as o}from"./framework-b6e5a340.js";const r="/imgs/qrcode/zwebdemo.gif",k={},g=a("a",{href:"https://blog.hhui.top",target:"_blank"},[a("img",{src:"https://img.shields.io/badge/-微信关注“一灰灰blog”公众号-orange.svg",alt:"#",align:"right",style:{"margin-right":"20%"}})],-1),h={href:"https://gitter.im/quick-media/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge",target:"_blank",rel:"noopener noreferrer"},m=a("img",{src:"https://badges.gitter.im/quick-media/Lobby.svg",alt:"Join the chat at https://gitter.im/quick-media/Lobby",loading:"lazy"},null,-1),b={href:"https://travis-ci.org/liuyueyi/quick-media",target:"_blank",rel:"noopener noreferrer"},_=a("img",{src:"https://travis-ci.org/liuyueyi/quick-media.svg?branch=master",alt:"Builder",loading:"lazy"},null,-1),v={href:"https://jitpack.io/#liuyueyi/quick-media",target:"_blank",rel:"noopener noreferrer"},y=a("img",{src:"https://jitpack.io/v/liuyueyi/quick-media.svg",alt:"JitPack",loading:"lazy"},null,-1),f={href:"https://search.maven.org/search?q=g:com.github.liuyueyi.media",target:"_blank",rel:"noopener noreferrer"},E=a("img",{src:"https://img.shields.io/maven-central/v/com.github.liuyueyi.media/plugins.svg",alt:"Maven Central with version prefix filter",loading:"lazy"},null,-1),x={href:"https://codecov.io/gh/liuyueyi/quick-media",target:"_blank",rel:"noopener noreferrer"},B=a("img",{src:"https://codecov.io/gh/liuyueyi/quick-media/branch/master/graph/badge.svg",alt:"codecov",loading:"lazy"},null,-1),I={href:"http://isitmaintained.com/project/liuyueyi/quick-media",title:"Average time to resolve an issue",target:"_blank",rel:"noopener noreferrer"},q=a("img",{src:"http://isitmaintained.com/badge/resolution/liuyueyi/quick-media.svg",alt:"Average time to resolve an issue",loading:"lazy"},null,-1),A={href:"http://isitmaintained.com/project/liuyueyi/quick-media",title:"Percentage of issues still open",target:"_blank",rel:"noopener noreferrer"},w=a("img",{src:"http://isitmaintained.com/badge/open/liuyueyi/quick-media.svg",alt:"Percentage of issues still open",loading:"lazy"},null,-1),F=a("blockquote",null,[a("p",null,"多媒体处理web服务"),a("p",null,"mult-media process Web Service by FFMPEG & ImageMagic & SpringMVC")],-1),z=a("p",null,[s("组建了一个微信技术交流群，有兴趣的小伙伴欢迎关注公众号"),a("code",null,"一灰灰blog"),s("，回复加群一起愉快玩耍")],-1),C=a("figure",null,[a("img",{src:"https://spring.hhui.top/spring-blog/imgs/info/info.png",alt:"QrCode",tabindex:"0",loading:"lazy"}),a("figcaption",null,"QrCode")],-1),j=a("p",null,"本项目为一个提供图片 + 音频 + 视频 + 二维码 + 网页 + markdown处理的Web项目，我们的目标是封装一套多媒体文件处理的公共类库，简化各种复杂的调用；利用 spring-boot 来提供http接口实现多媒体的操作实例功能",-1),D=a("p",null,"整理了下QuickMedia的使用与技术文档，可以通过下面的链接进行查看",-1),V={href:"http://liuyueyi.gitee.io/quick-media/#/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://liuyueyi.github.io/quick-media/#/",target:"_blank",rel:"noopener noreferrer"},L=a("p",null,"线上体验地址",-1),Q={href:"http://tool.hhui.top",target:"_blank",rel:"noopener noreferrer"},M=a("h3",{id:"使用说明",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用说明","aria-hidden":"true"},"#"),s(" 使用说明")],-1),S=a("p",null,"目前最新版jar包已提交到maven仓库，因此想直接引入的小伙伴，不需要再采用下面的两种方案了（请注意jitpack的包通常来讲更新会更频繁些，而中央仓库的会更稳定些；相同的版本号对应的代码保持一致）",-1),P={href:"https://mvnrepository.com/artifact/com.github.liuyueyi.media",target:"_blank",rel:"noopener noreferrer"},N=e(`<p>举例如二维码插件的依赖如下即可</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/qrcode-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>qrcode-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 以中央仓库最新版本为准 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.6.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>在下载本项目之后，有些常见事项需要注意一二</p><ul><li><s>工程中使用lombok简化大量的代码，因此使用idea的童鞋请装一下lombok的插件(最新版已移除lombok依赖)</s></li><li>部分插件依赖第三方库，如 ffmpge, phantomjs, image-magic，请确保已经安装</li></ul><p><strong>jitpack使用方式</strong></p>`,6),H=a("code",null,"jitpack",-1),O={href:"https://github.com/liuyueyi/quick-media/#/%E8%BF%AD%E4%BB%A3/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97?id=b-jitpack-%e4%bb%93%e5%ba%93",target:"_blank",rel:"noopener noreferrer"},R=e(`<p>一个简单的示例如下:</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repositories</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>jitpack.io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://jitpack.io<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repositories</span><span class="token punctuation">&gt;</span></span>


<span class="token comment">&lt;!-- 请注意groupId和github的方式有一些区别哦 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.quick-media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>qrcode-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.6.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="i-项目分析" tabindex="-1"><a class="header-anchor" href="#i-项目分析" aria-hidden="true">#</a> I. 项目分析</h2><h3 id="_1-技术栈" tabindex="-1"><a class="header-anchor" href="#_1-技术栈" aria-hidden="true">#</a> 1. 技术栈</h3><ul><li>spring-boot</li><li>ffmpeg</li><li>ImageMagic</li><li>zxing</li><li>batik</li><li>flexmark</li><li>phantomjs</li><li>jhlabs</li></ul><h3 id="_2-结构分析" tabindex="-1"><a class="header-anchor" href="#_2-结构分析" aria-hidden="true">#</a> 2. 结构分析</h3><p>目前项目主要结构区分为web/plugins两个模块，</p><h4 id="web" tabindex="-1"><a class="header-anchor" href="#web" aria-hidden="true">#</a> web</h4>`,8),W=a("li",null,"根据spring-boot可以迅速搭建一个web服务，提供http接口用于功能测试",-1),G={href:"http://media.hhui.top:8089/media/webs",target:"_blank",rel:"noopener noreferrer"},T={href:"https://zweb.hhui.top/#/index",target:"_blank",rel:"noopener noreferrer"},Y=a("li",null,"内部实现了小程序【图文小工具】的后端逻辑",-1),Z={href:"https://tool.hhui.top",target:"_blank",rel:"noopener noreferrer"},K=a("h4",{id:"plugins",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),s(" plugins")],-1),U=a("p",null,"插件工程，根据不同的场景，支持不同的服务功能，目前将所有的插件抽象出来，可以独立作为工具包提供给第三方依赖，直接引入使用",-1),X=a("p",null,[a("strong",null,"audio-plugin")],-1),$=e(`<p>中央仓库导入方式，注意groupId不同(为什么需要改变groupId? 因为上传到maven中央仓库，要求groupId与github的项目所属相同)</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/audio-plugin --&gt;</span>
<span class="token comment">&lt;!-- 请注意最新报，请直接到maven中央仓库查看，或者到迭代日志中获取 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>audio-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>date-plugin</strong></p>`,3),aa=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/date-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>date-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>image-plugin</strong></p>`,2),sa=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/image-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>image-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>markdown-plugin</strong></p>`,2),na=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/markdown-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>markdown-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>phantom-plugin</strong></p><p>提供根据phantomjs渲染html的封装</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/phantom-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>phantom-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>qrcode-plugin</strong></p>`,5),ta={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/%E4%BA%8C%E7%BB%B4%E7%A0%81/%E4%BA%8C%E7%BB%B4%E7%A0%81%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},ea=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/qrcode-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>qrcode-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>svg-plugin</strong></p>`,2),ia=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/svg-core --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>svg-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>imagic-plugin</strong></p>`,2),la=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/imagic-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>imagic-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>photo-plugin</strong></p><p>相片、图片处理插件，适用于图像的各种处理，如灰度，素描，滤镜等</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/com.github.liuyueyi.media/imagic-plugin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.liuyueyi.media<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>photo-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-已支持服务" tabindex="-1"><a class="header-anchor" href="#ii-已支持服务" aria-hidden="true">#</a> II. 已支持服务</h2><h3 id="_1-音频转码" tabindex="-1"><a class="header-anchor" href="#_1-音频转码" aria-hidden="true">#</a> 1. 音频转码</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 音频不同格式的相互转码</label></li></ul><h3 id="_2-二维码生成-解析" tabindex="-1"><a class="header-anchor" href="#_2-二维码生成-解析" aria-hidden="true">#</a> 2. 二维码生成 &amp; 解析</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 二维码生成</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 个性二维码生成</label><ul><li>支持logo</li><li>支持logo样式 （圆角logo， 边框）</li><li>支持二维码颜色设置</li><li>支持二维码圆角</li><li>支持探测图形颜色设置</li><li>支持探测图形图片定制</li><li>支持背景图</li><li>支持背景图圆角设置</li><li>支持base64格式的二维码图片</li><li>支持二维码定制绘制信息样式</li><li>三角形</li><li>矩形</li><li>五边形 （五角星待支持）</li><li>六边形</li><li>八边形</li><li>圆</li><li>自定义图片</li><li>前置图支持</li></ul></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 动态二维码生成支持</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 二维码信息解析</label></li></ul>`,9),oa={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/%E4%BA%8C%E7%BB%B4%E7%A0%81/%E4%BA%8C%E7%BB%B4%E7%A0%81%E6%8F%92%E4%BB%B6%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},ca=a("p",null,"给出一个实际生成的case如下:",-1),pa=a("img",{src:"http://ww1.sinaimg.cn/large/8154e929gy1g8wadvkt56g20pz08zwl5.gif"},null,-1),ua=a("h3",{id:"_3-图片",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-图片","aria-hidden":"true"},"#"),s(" 3. 图片")],-1),da={class:"task-list-container"},ra={class:"task-list-item"},ka=a("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-5",checked:"checked",disabled:"disabled"},null,-1),ga=a("label",{class:"task-list-item-label",for:"task-item-5"}," 长图文生成",-1),ha={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/image/Java%E5%AE%9E%E7%8E%B0%E9%95%BF%E5%9B%BE%E6%96%87%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},ma={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/image/Java%E5%AE%9E%E7%8E%B0%E7%AB%96%E6%8E%92%E9%95%BF%E5%9B%BE%E6%96%87%E7%94%9F%E6%88%90",target:"_blank",rel:"noopener noreferrer"},ba=a("li",null,"第三方字体支持",-1),_a={class:"task-list-item"},va=a("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-6",checked:"checked",disabled:"disabled"},null,-1),ya=a("label",{class:"task-list-item-label",for:"task-item-6"}," markdown 转 image",-1),fa={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/markdown/markdown%E8%BD%AChtml",target:"_blank",rel:"noopener noreferrer"},Ea={href:"https://liuyueyi.github.io/quick-media/#/markdown%E8%BD%ACimage",target:"_blank",rel:"noopener noreferrer"},xa={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/phantom/Java&PhantomJs%E5%AE%9E%E7%8E%B0html%E8%BE%93%E5%87%BA%E5%9B%BE%E7%89%87",target:"_blank",rel:"noopener noreferrer"},Ba=a("li",{class:"task-list-item"},[a("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-7",checked:"checked",disabled:"disabled"}),a("label",{class:"task-list-item-label",for:"task-item-7"}," gif图生成")],-1),Ia={class:"task-list-item"},qa=a("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-8",checked:"checked",disabled:"disabled"},null,-1),Aa=a("label",{class:"task-list-item-label",for:"task-item-8"}," 合成",-1),wa={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/image/%E5%9B%BE%E7%89%87%E5%90%88%E6%88%90",target:"_blank",rel:"noopener noreferrer"},Fa=e('<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 水印</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> svg渲染</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 裁剪</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 压缩</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 旋转</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 缩放</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> 灰度化，像素化</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> 转字符图</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> 位图转矢量图</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> 格式转换</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> 相片处理</label><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> 相片转素描</label></li></ul></li>',11),za={href:"https://liuyueyi.github.io/quick-media/#/%E6%8F%92%E4%BB%B6/image/%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C",target:"_blank",rel:"noopener noreferrer"},Ca=e('<h3 id="_4-图像" tabindex="-1"><a class="header-anchor" href="#_4-图像" aria-hidden="true">#</a> 4. 图像</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> 图像转素描风格</label></li></ul><h3 id="_5-视频相关" tabindex="-1"><a class="header-anchor" href="#_5-视频相关" aria-hidden="true">#</a> 5. 视频相关</h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> 视频压缩</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> 转码</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" disabled="disabled"><label class="task-list-item-label" for="task-item-24"> 截取</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" disabled="disabled"><label class="task-list-item-label" for="task-item-25"> 码率调整</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" disabled="disabled"><label class="task-list-item-label" for="task-item-26"> 生成gif</label></li></ul><h2 id="iii-阶段记录" tabindex="-1"><a class="header-anchor" href="#iii-阶段记录" aria-hidden="true">#</a> III. 阶段记录</h2>',5),ja={href:"https://liuyueyi.github.io/quick-media/#/%E8%BF%AD%E4%BB%A3/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97",target:"_blank",rel:"noopener noreferrer"},Da=a("h2",{id:"iv-文档",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iv-文档","aria-hidden":"true"},"#"),s(" IV. 文档")],-1),Va={href:"https://liuyueyi.github.io/quick-media/#/",target:"_blank",rel:"noopener noreferrer"},Ja=a("h3",{id:"问题记录汇总",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#问题记录汇总","aria-hidden":"true"},"#"),s(" 问题记录汇总")],-1),La={href:"https://liuyueyi.github.io/quick-media/#/%E9%87%87%E5%9D%91/%E5%9B%BE%E7%89%87%E6%97%8B%E8%BD%AC%E9%97%AE%E9%A2%98%E4%BF%AE%E5%A4%8D",target:"_blank",rel:"noopener noreferrer"},Qa={href:"https://liuyueyi.github.io/quick-media/#/%E9%87%87%E5%9D%91/markdown%E8%BD%AC%E5%9B%BE%E7%89%87%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81",target:"_blank",rel:"noopener noreferrer"},Ma={href:"https://liuyueyi.github.io/quick-media/#/%E9%87%87%E5%9D%91/Batik%E6%B8%B2%E6%9F%93png%E5%9B%BE%E7%89%87%E5%BC%82%E5%B8%B8%E7%9A%84bug%E4%BF%AE%E5%A4%8D",target:"_blank",rel:"noopener noreferrer"},Sa={href:"https://liuyueyi.github.io/quick-media/#/%E9%87%87%E5%9D%91/%E5%85%BC%E5%AE%B9ImageIO%E8%AF%BB%E5%8F%96jpeg%E5%9B%BE%E7%89%87%E5%8F%98%E7%BA%A2",target:"_blank",rel:"noopener noreferrer"},Pa=a("h2",{id:"v-其他",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#v-其他","aria-hidden":"true"},"#"),s(" V. 其他")],-1),Na=a("h3",{id:"其他",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#其他","aria-hidden":"true"},"#"),s(" 其他")],-1),Ha=a("p",null,"看到下面的star走势图，难道真的没有动心点点🖱小小的👍一下么",-1),Oa={href:"https://starchart.cc/liuyueyi/quick-media",target:"_blank",rel:"noopener noreferrer"},Ra=a("img",{src:"https://starchart.cc/liuyueyi/quick-media.svg",alt:"Stargazers over time",tabindex:"0",loading:"lazy"},null,-1),Wa=a("figcaption",null,"Stargazers over time",-1),Ga=e('<h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3><p>尽信书则不如，已上内容，一家之言，因个人能力有限，难免有疏漏和错误之处，如发现bug或者有更好的建议，欢迎批评指正，不吝感激</p><ul><li>微博地址: 小灰灰Blog</li><li>QQ： 一灰灰/3302797840</li><li>WeChat: 一灰/liuyueyi25</li></ul><h3 id="扫描关注" tabindex="-1"><a class="header-anchor" href="#扫描关注" aria-hidden="true">#</a> 扫描关注</h3><p><strong>打赏列表</strong></p><blockquote><p>1一分也是❤️，感谢大佬的打赏 (打赏的小伙伴不妨留个备注名)</p></blockquote>',6),Ta={href:"https://github.com/datouliang",target:"_blank",rel:"noopener noreferrer"},Ya=a("li",null,[a("a",{href:""},"*桑")],-1),Za=a("li",null,[a("a",{href:""},"坏笑")],-1),Ka=e('<p><strong>公众号&amp;博客</strong></p><figure><img src="https://blog.hhui.top/hexblog/imgs/info/blogHhui.png" alt="QrCode" tabindex="0" loading="lazy"><figcaption>QrCode</figcaption></figure><p><strong>打赏码</strong></p><figure><img src="https://blog.hhui.top/hexblog/imgs/info/payHhui.png" alt="pay" tabindex="0" loading="lazy"><figcaption>pay</figcaption></figure><hr><h3 id="实例演示" tabindex="-1"><a class="header-anchor" href="#实例演示" aria-hidden="true">#</a> 实例演示</h3><h4 id="_0-应用网站" tabindex="-1"><a class="header-anchor" href="#_0-应用网站" aria-hidden="true">#</a> 0. 应用网站</h4><p>项目本身提供一个控制台，基于reactjs搭建，在console模块下，启动即可</p>',8),Ua={href:"http://localhost:8089",target:"_blank",rel:"noopener noreferrer"},Xa=a("p",null,"使用react.js重构后的前端网站，实现前后端分离，前端网页借助gitee的pages直接部署，测试链接",-1),$a={href:"http://liuyueyi.gitee.io/zweb",target:"_blank",rel:"noopener noreferrer"},as={href:"https://zweb.hhui.top/#/index",target:"_blank",rel:"noopener noreferrer"},ss=a("p",null,"web实际演示图:",-1),ns=a("figure",null,[a("img",{src:r,alt:"demo",tabindex:"0",loading:"lazy"}),a("figcaption",null,"demo")],-1);function ts(es,is){const t=o("ExternalLinkIcon"),l=o("RouterLink"),c=o("font");return u(),d("div",null,[g,a("p",null,[a("a",h,[m,n(t)]),a("a",b,[_,n(t)]),a("a",v,[y,n(t)]),a("a",f,[E,n(t)]),a("a",x,[B,n(t)]),a("a",I,[q,n(t)]),a("a",A,[w,n(t)])]),F,z,C,j,D,a("ul",null,[a("li",null,[a("a",V,[s("http://liuyueyi.gitee.io/quick-media/#/"),n(t)])]),a("li",null,[a("a",J,[s("https://liuyueyi.github.io/quick-media/#/"),n(t)])])]),L,a("ul",null,[a("li",null,[s("Z+ | web : "),a("a",Q,[s("http://tool.hhui.top"),n(t)])])]),M,S,a("p",null,[s("中央仓库引入地址: "),a("a",P,[s("https://mvnrepository.com/artifact/com.github.liuyueyi.media"),n(t)])]),N,a("p",null,[s("由于某些原因，导致github访问太慢，无法下载依赖包时，这里也给出了第二种选择方案，借助"),H,s("仓库，详情使用文档，请查看："),a("a",O,[s("quick-media jitpack-仓库导入"),n(t)])]),R,a("ul",null,[W,a("li",null,[a("s",null,[s("内部集成了一个简单的web网站，打开: "),a("a",G,[s("http://media.hhui.top:8089/media/webs"),n(t)]),s(" 查看")])]),a("li",null,[a("s",null,[s("使用ReactJS，前后端分离，写了一个更友好的网站，打开: "),a("a",T,[s("https://zweb.hhui.top/#/index"),n(t)]),s(" 查看")])]),Y,a("li",null,[s("本项目所有功能，将移植到 "),a("a",Z,[s("一灰灰的神奇小工具"),n(t)])])]),K,U,X,a("p",null,[s("提供音频转码服务，使用依赖如下，详细查看: "),n(l,{to:"/git/quick-media/audio/"},{default:i(()=>[s("audio-plugin说明")]),_:1})]),$,a("p",null,[s("提供时间戳、日期转换为农历日期，详细查看："),n(l,{to:"/git/quick-media/date/"},{default:i(()=>[s("date-plugin说明")]),_:1})]),aa,a("p",null,[s("提供图片合成，提供gif图片生成等图片操作的封装类，详细查看： "),n(l,{to:"/git/quick-media/image/"},{default:i(()=>[s("image-plugin说明")]),_:1})]),sa,a("p",null,[s("markdown转html，转图片的封装类， 详细内容查看: "),n(l,{to:"/git/quick-media/markdown/"},{default:i(()=>[s("markdown-plugin")]),_:1})]),na,a("p",null,[s("提供二维码生成和解析的封装，详细查看: "),n(l,{to:"/git/quick-media/qrcode/"},{default:i(()=>[s("qrcode-plugin使用说明")]),_:1})]),a("blockquote",null,[a("p",null,[a("a",ta,[s("qrcode使用手册"),n(t)])])]),ea,a("p",null,[s("提供svg文档的渲染，输出图片的封装，详细查看: "),n(l,{to:"/git/quick-media/svg/"},{default:i(()=>[s("svg-plugin使用说明")]),_:1})]),ia,a("p",null,[s("基于imagic-magic实现的图片编辑插件封装，详细查看: "),n(l,{to:"/git/quick-media/imagic/"},{default:i(()=>[s("imagic-plugin使用说明")]),_:1})]),la,a("p",null,[a("a",oa,[s("查看更多二维码详情"),n(t)])]),n(c,{color:"red"},{default:i(()=>[s("最新版本2.5.4，详情查看 [迭代日志](https://liuyueyi.github.io/quick-media/#/%E8%BF%AD%E4%BB%A3/%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97?id=_27-qrcode-plugin)")]),_:1}),ca,pa,ua,a("ul",da,[a("li",ra,[ka,ga,a("ul",null,[a("li",null,[a("a",ha,[s("水平文字，上下布局长图文生成"),n(t)])]),a("li",null,[a("a",ma,[s("垂直文字，左右布局长图文生成"),n(t)])]),ba])]),a("li",_a,[va,ya,a("ul",null,[a("li",null,[a("a",fa,[s("markdown 转 html"),n(t)])]),a("li",null,[a("a",Ea,[s("html 转 image"),n(t)])]),a("li",null,[a("a",xa,[s("利用phantomjs实现html转image"),n(t)])])])]),Ba,a("li",Ia,[qa,Aa,a("ul",null,[a("li",null,[a("a",wa,[s("图片合成支持"),n(t)])])])]),Fa]),a("p",null,[a("a",za,[s("查看更多图片服务详情"),n(t)])]),Ca,a("p",null,[s("详情查看: "),a("a",ja,[s("quick-media更新迭代日志"),n(t)])]),Da,a("p",null,[s("所有使用以及技术文档，开发过程中一些常见问题汇总，可以点击👉: "),a("a",Va,[s("quick-media文档"),n(t)])]),Ja,a("ul",null,[a("li",null,[a("a",La,[s("图片旋转不生效问题"),n(t)])]),a("li",null,[a("a",Qa,[s("markdonw转图片中文乱码问题"),n(t)])]),a("li",null,[a("a",Ma,[s("兼容ImageIO读取jpeg图片变红"),n(t)])]),a("li",null,[a("a",Sa,[s("Batik渲染png图片异常的bug修复"),n(t)])])]),Pa,Na,Ha,a("figure",null,[a("a",Oa,[Ra,n(t)]),Wa]),Ga,a("ul",null,[a("li",null,[a("a",Ta,[s("datouliang"),n(t)])]),Ya,Za]),Ka,a("ul",null,[a("li",null,[a("a",Ua,[s("http://localhost:8089"),n(t)])])]),Xa,a("ul",null,[a("li",null,[s("gitee静态页面: "),a("a",$a,[s("http://liuyueyi.gitee.io/zweb"),n(t)])]),a("li",null,[a("del",null,[a("a",as,[s("https://zweb.hhui.top/#/index"),n(t)]),s(" 服务器hold不住，后端逻辑已下线😭 ")])])]),ss,ns])}const os=p(k,[["render",ts],["__file","index.html.vue"]]);export{os as default};
