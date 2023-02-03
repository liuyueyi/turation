const e=JSON.parse('{"key":"v-e130d576","path":"/spring/db/JPA/02.190614-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BJPA%E4%B9%8B%E6%96%B0%E5%A2%9E%E8%AE%B0%E5%BD%95%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html","title":"2.JPA之新增记录使用姿势","lang":"zh-CN","frontmatter":{"order":2,"title":"2.JPA之新增记录使用姿势","tag":["JPA"],"category":["SpringBoot","DB系列","JPA"],"date":"2019-06-14T14:23:05.000Z","keywords":"Spring SpringBoot JPA MySql Hibernate Insert save saveAndFlush","description":"上一篇文章介绍了如何快速的搭建一个JPA的项目环境，并给出了一个简单的演示demo，接下来我们开始业务教程，也就是我们常说的CURD，接下来进入第一篇，如何添加数据 通过本篇文章，你可以get到以下技能点 POJO对象如何与表关联 如何向DB中添加单条记录 如何批量向DB中添加记录 save 与 saveAndFlush的区别","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/db/JPA/02.190614-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BJPA%E4%B9%8B%E6%96%B0%E5%A2%9E%E8%AE%B0%E5%BD%95%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"2.JPA之新增记录使用姿势"}],["meta",{"property":"og:description","content":"上一篇文章介绍了如何快速的搭建一个JPA的项目环境，并给出了一个简单的演示demo，接下来我们开始业务教程，也就是我们常说的CURD，接下来进入第一篇，如何添加数据 通过本篇文章，你可以get到以下技能点 POJO对象如何与表关联 如何向DB中添加单条记录 如何批量向DB中添加记录 save 与 saveAndFlush的区别"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"JPA"}],["meta",{"property":"article:published_time","content":"2019-06-14T14:23:05.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.JPA之新增记录使用姿势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-06-14T14:23:05.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 环境准备","slug":"i-环境准备","link":"#i-环境准备","children":[{"level":3,"title":"1. 表准备","slug":"_1-表准备","link":"#_1-表准备","children":[]},{"level":3,"title":"2. 项目配置","slug":"_2-项目配置","link":"#_2-项目配置","children":[]}]},{"level":2,"title":"II. Insert使用教程","slug":"ii-insert使用教程","link":"#ii-insert使用教程","children":[{"level":3,"title":"1. POJO与表关联","slug":"_1-pojo与表关联","link":"#_1-pojo与表关联","children":[]},{"level":3,"title":"2. Repository API声明","slug":"_2-repository-api声明","link":"#_2-repository-api声明","children":[]},{"level":3,"title":"3. 使用姿势","slug":"_3-使用姿势","link":"#_3-使用姿势","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"-1. 相关博文","slug":"_1-相关博文","link":"#_1-相关博文","children":[]},{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":12.11,"words":3632},"filePathRelative":"spring/db/JPA/02.190614-SpringBoot系列教程JPA之新增记录使用姿势.md","localizedDate":"2019年6月14日","excerpt":"<p>上一篇文章介绍了如何快速的搭建一个JPA的项目环境，并给出了一个简单的演示demo，接下来我们开始业务教程，也就是我们常说的CURD，接下来进入第一篇，如何添加数据</p>\\n<p>通过本篇文章，你可以get到以下技能点</p>\\n<ul>\\n<li>POJO对象如何与表关联</li>\\n<li>如何向DB中添加单条记录</li>\\n<li>如何批量向DB中添加记录</li>\\n<li>save 与 saveAndFlush的区别</li>\\n</ul>\\n","copyright":{},"autoDesc":true}');export{e as data};
