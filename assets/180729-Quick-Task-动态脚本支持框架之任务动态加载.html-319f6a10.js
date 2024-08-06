const e=JSON.parse('{"key":"v-53cfb0a1","path":"/column/app/task/180729-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD.html","title":"4. 动态脚本支持框架之任务动态加载","lang":"zh-CN","frontmatter":{"order":4,"title":"4. 动态脚本支持框架之任务动态加载","tag":["技术方案"],"category":["Quick系列","QuickTask"],"date":"2018-07-29T17:06:59.000Z","keywords":"Java,QuickTask,开源项目,Groovy","description":"Quick-Task 动态脚本支持框架之任务动态加载 前面几篇博文分别介绍了整个项目的基本架构，使用说明，以及整体框架的设计与实现初稿，接下来则进入更细节的实现篇，将整个工程中核心实现捞出来，从为什么这么设计到最终的实现给予说明 相关系列博文： 180702-QuickTask动态脚本支持框架整体介绍篇 180719-Quick-Task 动态脚本支持框架之使用介绍篇 180723-Quick-Task 动态脚本支持框架之结构设计篇","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/column/app/task/180729-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E5%8A%A0%E8%BD%BD.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"4. 动态脚本支持框架之任务动态加载"}],["meta",{"property":"og:description","content":"Quick-Task 动态脚本支持框架之任务动态加载 前面几篇博文分别介绍了整个项目的基本架构，使用说明，以及整体框架的设计与实现初稿，接下来则进入更细节的实现篇，将整个工程中核心实现捞出来，从为什么这么设计到最终的实现给予说明 相关系列博文： 180702-QuickTask动态脚本支持框架整体介绍篇 180719-Quick-Task 动态脚本支持框架之使用介绍篇 180723-Quick-Task 动态脚本支持框架之结构设计篇"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"技术方案"}],["meta",{"property":"article:published_time","content":"2018-07-29T17:06:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4. 动态脚本支持框架之任务动态加载\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-07-29T17:06:59.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 任务动态加载","slug":"i-任务动态加载","link":"#i-任务动态加载","children":[{"level":3,"title":"1. 任务监听的从0到1","slug":"_1-任务监听的从0到1","link":"#_1-任务监听的从0到1","children":[]},{"level":3,"title":"2. 任务监听的实现","slug":"_2-任务监听的实现","link":"#_2-任务监听的实现","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 相关","slug":"_0-相关","link":"#_0-相关","children":[]},{"level":3,"title":"1. 一灰灰Blog： https://liuyueyi.github.io/hexblog","slug":"_1-一灰灰blog-https-liuyueyi-github-io-hexblog","link":"#_1-一灰灰blog-https-liuyueyi-github-io-hexblog","children":[]},{"level":3,"title":"2. 声明","slug":"_2-声明","link":"#_2-声明","children":[]},{"level":3,"title":"3. 扫描关注","slug":"_3-扫描关注","link":"#_3-扫描关注","children":[]}]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":6.78,"words":2033},"filePathRelative":"column/app/task/180729-Quick-Task-动态脚本支持框架之任务动态加载.md","localizedDate":"2018年7月29日","excerpt":"<h1> Quick-Task 动态脚本支持框架之任务动态加载</h1>\\n<p>前面几篇博文分别介绍了整个项目的基本架构，使用说明，以及整体框架的设计与实现初稿，接下来则进入更细节的实现篇，将整个工程中核心实现捞出来，从为什么这么设计到最终的实现给予说明</p>\\n<p>相关系列博文：</p>\\n<ul>\\n<li><a href=\\"https://liuyueyi.github.io/hexblog/2018/07/02/180702-QuickTask%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D%E7%AF%87/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">180702-QuickTask动态脚本支持框架整体介绍篇</a></li>\\n<li><a href=\\"https://liuyueyi.github.io/hexblog/2018/07/19/180719-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D%E7%AF%87/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">180719-Quick-Task 动态脚本支持框架之使用介绍篇</a></li>\\n<li><a href=\\"https://liuyueyi.github.io/hexblog/2018/07/23/180723-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1%E7%AF%87/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">180723-Quick-Task 动态脚本支持框架之结构设计篇</a></li>\\n</ul>\\n","copyright":{},"autoDesc":true}');export{e as data};
