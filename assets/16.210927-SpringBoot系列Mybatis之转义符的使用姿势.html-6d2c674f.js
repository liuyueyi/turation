const t=JSON.parse('{"key":"v-5d1faced","path":"/spring/db/Mybatis/16.210927-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E4%B9%8B%E8%BD%AC%E4%B9%89%E7%AC%A6%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html","title":"16.转义符的使用姿势","lang":"zh-CN","frontmatter":{"order":16,"title":"16.转义符的使用姿势","tag":["Mybatis"],"category":["SpringBoot","DB系列","Mybatis"],"date":"2021-09-27T20:21:44.000Z","keywords":"mybatis springboot mysql 转义","description":"在mybatis的xml文件中直接写sql比较方便简洁，但是需要注意的是，在xml文件中，经常会遇到一些需要转义的场景，比如查询 id &lt; xxx的数据，这个小于号就不能直接写在sql中，接下来我们将看一下，mybatis中的有哪些转义符，可以怎么处理转义问题","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/db/Mybatis/16.210927-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E4%B9%8B%E8%BD%AC%E4%B9%89%E7%AC%A6%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"16.转义符的使用姿势"}],["meta",{"property":"og:description","content":"在mybatis的xml文件中直接写sql比较方便简洁，但是需要注意的是，在xml文件中，经常会遇到一些需要转义的场景，比如查询 id &lt; xxx的数据，这个小于号就不能直接写在sql中，接下来我们将看一下，mybatis中的有哪些转义符，可以怎么处理转义问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:published_time","content":"2021-09-27T20:21:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16.转义符的使用姿势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-09-27T20:21:44.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I.转义","slug":"i-转义","link":"#i-转义","children":[{"level":3,"title":"1. 转义符","slug":"_1-转义符","link":"#_1-转义符","children":[]},{"level":3,"title":"2. <![CDATA[ ]]> 写法","slug":"_2-cdata-写法","link":"#_2-cdata-写法","children":[]}]},{"level":2,"title":"III. 不能错过的源码和相关知识点","slug":"iii-不能错过的源码和相关知识点","link":"#iii-不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]},{"level":3,"title":"1. 微信公众号: 一灰灰Blog","slug":"_1-微信公众号-一灰灰blog","link":"#_1-微信公众号-一灰灰blog","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":2.95,"words":886},"filePathRelative":"spring/db/Mybatis/16.210927-SpringBoot系列Mybatis之转义符的使用姿势.md","localizedDate":"2021年9月27日","excerpt":"<p>在mybatis的xml文件中直接写sql比较方便简洁，但是需要注意的是，在xml文件中，经常会遇到一些需要转义的场景，比如查询 <code>id &lt; xxx</code>的数据，这个小于号就不能直接写在sql中，接下来我们将看一下，mybatis中的有哪些转义符，可以怎么处理转义问题</p>\\n","copyright":{},"autoDesc":true}');export{t as data};
