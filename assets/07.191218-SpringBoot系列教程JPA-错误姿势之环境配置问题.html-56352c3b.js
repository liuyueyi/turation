const e=JSON.parse('{"key":"v-63a4d750","path":"/spring/db/JPA/07.191218-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BJPA-%E9%94%99%E8%AF%AF%E5%A7%BF%E5%8A%BF%E4%B9%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E9%97%AE%E9%A2%98.html","title":"7.JPA 错误姿势之环境配置问题","lang":"zh-CN","frontmatter":{"order":7,"title":"7.JPA 错误姿势之环境配置问题","tag":["JPA"],"category":["SpringBoot","DB系列","JPA"],"date":"2019-12-18T19:51:38.000Z","keywords":"JPA SpringBoot Mysql 环境配置 注入失败 Repository","description":"又回到jpa的教程上了，这一篇源于某个简单的项目需要读写db，本想着直接使用jpa会比较简单，然而悲催的是实际开发过程中，发现了不少的坑；本文为错误姿势第一篇，Repository接口无法注入问题","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/db/JPA/07.191218-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BJPA-%E9%94%99%E8%AF%AF%E5%A7%BF%E5%8A%BF%E4%B9%8B%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"7.JPA 错误姿势之环境配置问题"}],["meta",{"property":"og:description","content":"又回到jpa的教程上了，这一篇源于某个简单的项目需要读写db，本想着直接使用jpa会比较简单，然而悲催的是实际开发过程中，发现了不少的坑；本文为错误姿势第一篇，Repository接口无法注入问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"JPA"}],["meta",{"property":"article:published_time","content":"2019-12-18T19:51:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7.JPA 错误姿势之环境配置问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-18T19:51:38.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 配置问题","slug":"i-配置问题","link":"#i-配置问题","children":[{"level":3,"title":"1. 基本配置","slug":"_1-基本配置","link":"#_1-基本配置","children":[]},{"level":3,"title":"2. 注入失败case复现","slug":"_2-注入失败case复现","link":"#_2-注入失败case复现","children":[]},{"level":3,"title":"3. case分析","slug":"_3-case分析","link":"#_3-case分析","children":[]},{"level":3,"title":"4. 解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]},{"level":3,"title":"5. 小结","slug":"_5-小结","link":"#_5-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":4.26,"words":1279},"filePathRelative":"spring/db/JPA/07.191218-SpringBoot系列教程JPA-错误姿势之环境配置问题.md","localizedDate":"2019年12月18日","excerpt":"<p>又回到jpa的教程上了，这一篇源于某个简单的项目需要读写db，本想着直接使用jpa会比较简单，然而悲催的是实际开发过程中，发现了不少的坑；本文为错误姿势第一篇，Repository接口无法注入问题</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
