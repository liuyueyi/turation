const e=JSON.parse('{"key":"v-15a91744","path":"/spring/basic/%E9%85%8D%E7%BD%AE/10.210610-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE%E6%BA%90%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html","title":"10.自定义配置源的使用姿势","lang":"zh-CN","frontmatter":{"order":10,"title":"10.自定义配置源的使用姿势","tag":["Value"],"category":["SpringBoot","基础系列","配置"],"date":"2021-06-10T19:44:53.000Z","keywords":"springboot @value MapPropertySource","description":"前面一篇博文介绍了一个@Value的一些知识点，其中提了一个点，@Value对应的配置，除了是配置文件中之外，可以从其他的数据源中获取么，如从redis，db，http中获取配置？ 了解过SpringCloud Config的可以给出确切的答案，可以，而且用起来还老爽了，远程配置，支持配置动态刷新，接下来我们来看一下，在SpringBoot中，如何配置自定义的数据源","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/%E9%85%8D%E7%BD%AE/10.210610-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE%E6%BA%90%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"10.自定义配置源的使用姿势"}],["meta",{"property":"og:description","content":"前面一篇博文介绍了一个@Value的一些知识点，其中提了一个点，@Value对应的配置，除了是配置文件中之外，可以从其他的数据源中获取么，如从redis，db，http中获取配置？ 了解过SpringCloud Config的可以给出确切的答案，可以，而且用起来还老爽了，远程配置，支持配置动态刷新，接下来我们来看一下，在SpringBoot中，如何配置自定义的数据源"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Value"}],["meta",{"property":"article:published_time","content":"2021-06-10T19:44:53.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10.自定义配置源的使用姿势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-06-10T19:44:53.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 项目环境","slug":"i-项目环境","link":"#i-项目环境","children":[{"level":3,"title":"1. 项目依赖","slug":"_1-项目依赖","link":"#_1-项目依赖","children":[]}]},{"level":2,"title":"II. 自定义配置源","slug":"ii-自定义配置源","link":"#ii-自定义配置源","children":[{"level":3,"title":"1. 自定义数据源","slug":"_1-自定义数据源","link":"#_1-自定义数据源","children":[]},{"level":3,"title":"2. 数据源注册","slug":"_2-数据源注册","link":"#_2-数据源注册","children":[]},{"level":3,"title":"3. 基于文件的自定义配置源","slug":"_3-基于文件的自定义配置源","link":"#_3-基于文件的自定义配置源","children":[]},{"level":3,"title":"4. @Value绑定自定义配置","slug":"_4-value绑定自定义配置","link":"#_4-value绑定自定义配置","children":[]},{"level":3,"title":"5. 小结","slug":"_5-小结","link":"#_5-小结","children":[]}]},{"level":2,"title":"III. 不能错过的源码和相关知识点","slug":"iii-不能错过的源码和相关知识点","link":"#iii-不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":6.36,"words":1908},"filePathRelative":"spring/basic/配置/10.210610-SpringBoot基础篇之自定义配置源的使用姿势.md","localizedDate":"2021年6月10日","excerpt":"<p>前面一篇博文介绍了一个<code>@Value</code>的一些知识点，其中提了一个点，<code>@Value</code>对应的配置，除了是配置文件中之外，可以从其他的数据源中获取么，如从redis，db，http中获取配置？</p>\\n<p>了解过SpringCloud Config的可以给出确切的答案，可以，而且用起来还老爽了，远程配置，支持配置动态刷新，接下来我们来看一下，在SpringBoot中，如何配置自定义的数据源</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
