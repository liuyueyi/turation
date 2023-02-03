const e=JSON.parse('{"key":"v-6a04b5a0","path":"/spring/basic/%E5%AE%9E%E6%88%98/04.181017-SpringBoot%E5%BA%94%E7%94%A8%E7%AF%87Bean%E4%B9%8B%E6%B3%A8%E9%94%80%E4%B8%8E%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C%E5%AE%9E%E7%8E%B0%E6%9C%8D%E5%8A%A1mock.html","title":"1.Bean之注销与动态注册实现服务mock（应用篇）","lang":"zh-CN","frontmatter":{"order":4,"title":"1.Bean之注销与动态注册实现服务mock（应用篇）","tag":["Bean","应用"],"category":["SpringBoot","基础系列","Bean","应用篇"],"date":"2018-10-17T10:31:35.000Z","keywords":"动态注册,SpringBoot,Bean,Bean注册,Bean删除","description":"前面一篇博文介绍了动态注册Bean的姿势，看完之后难免会有个疑问，在我n年的业务开发中，还真没遇到过需要自己来注册bean的场景（常年的if-else, curd还真不可能遇到）那么这个东西到底有什么用，或者可以给我们打开哪些思路呢？ 本篇博文将以应用的角度，简单的演示一下可以怎么用","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/basic/%E5%AE%9E%E6%88%98/04.181017-SpringBoot%E5%BA%94%E7%94%A8%E7%AF%87Bean%E4%B9%8B%E6%B3%A8%E9%94%80%E4%B8%8E%E5%8A%A8%E6%80%81%E6%B3%A8%E5%86%8C%E5%AE%9E%E7%8E%B0%E6%9C%8D%E5%8A%A1mock.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1.Bean之注销与动态注册实现服务mock（应用篇）"}],["meta",{"property":"og:description","content":"前面一篇博文介绍了动态注册Bean的姿势，看完之后难免会有个疑问，在我n年的业务开发中，还真没遇到过需要自己来注册bean的场景（常年的if-else, curd还真不可能遇到）那么这个东西到底有什么用，或者可以给我们打开哪些思路呢？ 本篇博文将以应用的角度，简单的演示一下可以怎么用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:tag","content":"应用"}],["meta",{"property":"article:published_time","content":"2018-10-17T10:31:35.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.Bean之注销与动态注册实现服务mock（应用篇）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-17T10:31:35.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 应用说明","slug":"i-应用说明","link":"#i-应用说明","children":[{"level":3,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":3,"title":"2. 方案","slug":"_2-方案","link":"#_2-方案","children":[]},{"level":3,"title":"3. 实现","slug":"_3-实现","link":"#_3-实现","children":[]},{"level":3,"title":"4. 扩展","slug":"_4-扩展","link":"#_4-扩展","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"spring/basic/实战/04.181017-SpringBoot应用篇Bean之注销与动态注册实现服务mock.md","localizedDate":"2018年10月17日","excerpt":"<p>前面一篇博文介绍了动态注册Bean的姿势，看完之后难免会有个疑问，在我n年的业务开发中，还真没遇到过需要自己来注册bean的场景（常年的if-else, curd还真不可能遇到）那么这个东西到底有什么用，或者可以给我们打开哪些思路呢？</p>\\n<p>本篇博文将以应用的角度，简单的演示一下可以怎么用</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
