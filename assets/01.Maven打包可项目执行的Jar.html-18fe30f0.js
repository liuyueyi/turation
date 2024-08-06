const a=JSON.parse('{"key":"v-68e8fa0e","path":"/java/basic/01.Maven%E6%89%93%E5%8C%85%E5%8F%AF%E9%A1%B9%E7%9B%AE%E6%89%A7%E8%A1%8C%E7%9A%84Jar.html","title":"1. Maven打包可项目执行的Jar","lang":"zh-CN","frontmatter":{"order":1,"title":"1. Maven打包可项目执行的Jar","tag":["Maven"],"category":["Shell","Maven"],"date":"2018-07-17T21:15:07.000Z","keywords":"maven,pom,jar,打包","description":"当我们希望项目打包为一个可执行的jar文件，丢到服务器上运行时，可以怎么做？借助maven。可以比较简单的实现这个 I. 使用小结 在pmo依赖文件中，添加下面的依赖 &lt;build&gt; &lt;plugins&gt; &lt;plugin&gt; &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt; &lt;artifactId&gt;maven-assembly-plugin&lt;/artifactId&gt; &lt;configuration&gt; &lt;appendAssemblyId&gt;false&lt;/appendAssemblyId&gt; &lt;descriptorRefs&gt; &lt;descriptorRef&gt;jar-with-dependencies&lt;/descriptorRef&gt; &lt;/descriptorRefs&gt; &lt;archive&gt; &lt;manifest&gt; &lt;mainClass&gt;com.git.hui.task.AppLaunch&lt;/mainClass&gt; &lt;/manifest&gt; &lt;/archive&gt; &lt;/configuration&gt; &lt;executions&gt; &lt;execution&gt; &lt;id&gt;make-assembly&lt;/id&gt; &lt;phase&gt;package&lt;/phase&gt; &lt;goals&gt; &lt;goal&gt;assembly&lt;/goal&gt; &lt;/goals&gt; &lt;/execution&gt; &lt;/executions&gt; &lt;/plugin&gt; &lt;/plugins&gt; &lt;/build&gt;","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/basic/01.Maven%E6%89%93%E5%8C%85%E5%8F%AF%E9%A1%B9%E7%9B%AE%E6%89%A7%E8%A1%8C%E7%9A%84Jar.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1. Maven打包可项目执行的Jar"}],["meta",{"property":"og:description","content":"当我们希望项目打包为一个可执行的jar文件，丢到服务器上运行时，可以怎么做？借助maven。可以比较简单的实现这个 I. 使用小结 在pmo依赖文件中，添加下面的依赖 &lt;build&gt; &lt;plugins&gt; &lt;plugin&gt; &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt; &lt;artifactId&gt;maven-assembly-plugin&lt;/artifactId&gt; &lt;configuration&gt; &lt;appendAssemblyId&gt;false&lt;/appendAssemblyId&gt; &lt;descriptorRefs&gt; &lt;descriptorRef&gt;jar-with-dependencies&lt;/descriptorRef&gt; &lt;/descriptorRefs&gt; &lt;archive&gt; &lt;manifest&gt; &lt;mainClass&gt;com.git.hui.task.AppLaunch&lt;/mainClass&gt; &lt;/manifest&gt; &lt;/archive&gt; &lt;/configuration&gt; &lt;executions&gt; &lt;execution&gt; &lt;id&gt;make-assembly&lt;/id&gt; &lt;phase&gt;package&lt;/phase&gt; &lt;goals&gt; &lt;goal&gt;assembly&lt;/goal&gt; &lt;/goals&gt; &lt;/execution&gt; &lt;/executions&gt; &lt;/plugin&gt; &lt;/plugins&gt; &lt;/build&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2018-07-17T21:15:07.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Maven打包可项目执行的Jar\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-17T21:15:07.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 使用小结","slug":"i-使用小结","link":"#i-使用小结","children":[]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":0.83,"words":248},"filePathRelative":"java/basic/01.Maven打包可项目执行的Jar.md","localizedDate":"2018年7月17日","excerpt":"<p>当我们希望项目打包为一个可执行的jar文件，丢到服务器上运行时，可以怎么做？借助maven。可以比较简单的实现这个</p>\\n<h2> I. 使用小结</h2>\\n<p>在pmo依赖文件中，添加下面的依赖</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>plugins</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>plugin</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.apache.maven.plugins<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>maven-assembly-plugin<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>configuration</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>appendAssemblyId</span><span class=\\"token punctuation\\">&gt;</span></span>false<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>appendAssemblyId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>descriptorRefs</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>descriptorRef</span><span class=\\"token punctuation\\">&gt;</span></span>jar-with-dependencies<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>descriptorRef</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>descriptorRefs</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>archive</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>manifest</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>mainClass</span><span class=\\"token punctuation\\">&gt;</span></span>com.git.hui.task.AppLaunch<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>mainClass</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>manifest</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>archive</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>configuration</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>executions</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>execution</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>make-assembly<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>id</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>phase</span><span class=\\"token punctuation\\">&gt;</span></span>package<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>phase</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>goals</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>goal</span><span class=\\"token punctuation\\">&gt;</span></span>assembly<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>goal</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>goals</span><span class=\\"token punctuation\\">&gt;</span></span>\\n                <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>execution</span><span class=\\"token punctuation\\">&gt;</span></span>\\n            <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>executions</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>plugin</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>plugins</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>build</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
