const e=JSON.parse('{"key":"v-4e6cee7c","path":"/spring/db/JdbcTemplate/01.190407-SpringBoot%E9%AB%98%E7%BA%A7%E7%AF%87JdbcTemplate%E4%B9%8B%E6%95%B0%E6%8D%AE%E6%8F%92%E5%85%A5%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E8%AF%A6%E8%A7%A3.html","title":"1.数据插入-Insert","lang":"zh-CN","frontmatter":{"order":1,"title":"1.数据插入-Insert","tag":["JdbcTemplate","DB"],"category":["SpringBoot","DB系列","JdbcTemplate"],"date":"2019-04-07T22:08:03.000Z","keywords":"MySql,JdbcTemplate,SpringBoot,Spring","description":"db操作可以说是java后端的必备技能了，实际项目中，直接使用JdbcTemplate的机会并不多，大多是mybatis，hibernate，jpa或者是jooq，然后前几天写一个项目，因为db操作非常简单，就直接使用JdbcTemplate，然而悲催的发现，对他的操作并没有预期中的那么顺畅，所以有必要好好的学一下JdbcTemplate的CURD；本文为第一篇，插入数据","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/JdbcTemplate/01.190407-SpringBoot%E9%AB%98%E7%BA%A7%E7%AF%87JdbcTemplate%E4%B9%8B%E6%95%B0%E6%8D%AE%E6%8F%92%E5%85%A5%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1.数据插入-Insert"}],["meta",{"property":"og:description","content":"db操作可以说是java后端的必备技能了，实际项目中，直接使用JdbcTemplate的机会并不多，大多是mybatis，hibernate，jpa或者是jooq，然后前几天写一个项目，因为db操作非常简单，就直接使用JdbcTemplate，然而悲催的发现，对他的操作并没有预期中的那么顺畅，所以有必要好好的学一下JdbcTemplate的CURD；本文为第一篇，插入数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"JdbcTemplate"}],["meta",{"property":"article:tag","content":"DB"}],["meta",{"property":"article:published_time","content":"2019-04-07T22:08:03.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.数据插入-Insert\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-04-07T22:08:03.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 环境","slug":"i-环境","link":"#i-环境","children":[{"level":3,"title":"1. 配置相关","slug":"_1-配置相关","link":"#_1-配置相关","children":[]},{"level":3,"title":"2. 测试db","slug":"_2-测试db","link":"#_2-测试db","children":[]}]},{"level":2,"title":"II. 使用姿势","slug":"ii-使用姿势","link":"#ii-使用姿势","children":[{"level":3,"title":"1. sql直接插入一条数据","slug":"_1-sql直接插入一条数据","link":"#_1-sql直接插入一条数据","children":[]},{"level":3,"title":"2. 参数替换方式插入","slug":"_2-参数替换方式插入","link":"#_2-参数替换方式插入","children":[]},{"level":3,"title":"3. 通过Statement方式插入","slug":"_3-通过statement方式插入","link":"#_3-通过statement方式插入","children":[]},{"level":3,"title":"4. 插入并返回主键id","slug":"_4-插入并返回主键id","link":"#_4-插入并返回主键id","children":[]},{"level":3,"title":"5. 批量插入","slug":"_5-批量插入","link":"#_5-批量插入","children":[]},{"level":3,"title":"6. 测试","slug":"_6-测试","link":"#_6-测试","children":[]}]},{"level":2,"title":"II. 扩展","slug":"ii-扩展","link":"#ii-扩展","children":[{"level":3,"title":"1. 批量插入并返回主键id","slug":"_1-批量插入并返回主键id","link":"#_1-批量插入并返回主键id","children":[]},{"level":3,"title":"2. 小结","slug":"_2-小结","link":"#_2-小结","children":[]}]},{"level":2,"title":"IV. 其他","slug":"iv-其他","link":"#iv-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":6.76,"words":2029},"filePathRelative":"spring/db/JdbcTemplate/01.190407-SpringBoot高级篇JdbcTemplate之数据插入使用姿势详解.md","localizedDate":"2019年4月7日","excerpt":"<p>db操作可以说是java后端的必备技能了，实际项目中，直接使用JdbcTemplate的机会并不多，大多是mybatis，hibernate，jpa或者是jooq，然后前几天写一个项目，因为db操作非常简单，就直接使用JdbcTemplate，然而悲催的发现，对他的操作并没有预期中的那么顺畅，所以有必要好好的学一下JdbcTemplate的CURD；本文为第一篇，插入数据</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
