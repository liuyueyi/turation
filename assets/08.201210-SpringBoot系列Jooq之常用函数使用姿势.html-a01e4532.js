const e=JSON.parse('{"key":"v-2c6cd376","path":"/spring/db/Jooq/08.201210-SpringBoot%E7%B3%BB%E5%88%97Jooq%E4%B9%8B%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html","title":"8.Jooq之常用函数","lang":"zh-CN","frontmatter":{"index":8,"title":"8.Jooq之常用函数","tag":["Jooq"],"category":["SpringBoot","DB系列","Jooq"],"date":"2020-12-10T20:26:16.000Z","keywords":"Spring Mysql Jooq orm","description":"在我们的实际业务开发中，某些场景下会借助一些数据库支持的函数来做一些简单的操作，如针对浮点数的取整（ceil, floor）,字符串的长度获取(length)等，本文将介绍一下jooq中一些常见的函数使用姿势","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/Jooq/08.201210-SpringBoot%E7%B3%BB%E5%88%97Jooq%E4%B9%8B%E5%B8%B8%E7%94%A8%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"8.Jooq之常用函数"}],["meta",{"property":"og:description","content":"在我们的实际业务开发中，某些场景下会借助一些数据库支持的函数来做一些简单的操作，如针对浮点数的取整（ceil, floor）,字符串的长度获取(length)等，本文将介绍一下jooq中一些常见的函数使用姿势"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"Jooq"}],["meta",{"property":"article:published_time","content":"2020-12-10T20:26:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.Jooq之常用函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-10T20:26:16.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 项目搭建","slug":"i-项目搭建","link":"#i-项目搭建","children":[{"level":3,"title":"1. 项目依赖","slug":"_1-项目依赖","link":"#_1-项目依赖","children":[]},{"level":3,"title":"2. 数据准备","slug":"_2-数据准备","link":"#_2-数据准备","children":[]}]},{"level":2,"title":"II. 使用姿势","slug":"ii-使用姿势","link":"#ii-使用姿势","children":[{"level":3,"title":"0. 基本准备","slug":"_0-基本准备","link":"#_0-基本准备","children":[]},{"level":3,"title":"1. abs","slug":"_1-abs","link":"#_1-abs","children":[]},{"level":3,"title":"2. sqrt","slug":"_2-sqrt","link":"#_2-sqrt","children":[]},{"level":3,"title":"3. pow","slug":"_3-pow","link":"#_3-pow","children":[]},{"level":3,"title":"4. mod","slug":"_4-mod","link":"#_4-mod","children":[]},{"level":3,"title":"5. ceil, floor, round","slug":"_5-ceil-floor-round","link":"#_5-ceil-floor-round","children":[]},{"level":3,"title":"6. rand","slug":"_6-rand","link":"#_6-rand","children":[]},{"level":3,"title":"7. length","slug":"_7-length","link":"#_7-length","children":[]},{"level":3,"title":"8. concat","slug":"_8-concat","link":"#_8-concat","children":[]},{"level":3,"title":"9. replace","slug":"_9-replace","link":"#_9-replace","children":[]},{"level":3,"title":"10. lower, upper","slug":"_10-lower-upper","link":"#_10-lower-upper","children":[]},{"level":3,"title":"11. left, right","slug":"_11-left-right","link":"#_11-left-right","children":[]},{"level":3,"title":"12. trim","slug":"_12-trim","link":"#_12-trim","children":[]},{"level":3,"title":"13. reverse","slug":"_13-reverse","link":"#_13-reverse","children":[]},{"level":3,"title":"14. 日期相关","slug":"_14-日期相关","link":"#_14-日期相关","children":[]},{"level":3,"title":"15. 日期加减","slug":"_15-日期加减","link":"#_15-日期加减","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":5.06,"words":1519},"filePathRelative":"spring/db/Jooq/08.201210-SpringBoot系列Jooq之常用函数使用姿势.md","localizedDate":"2020年12月10日","excerpt":"<p>在我们的实际业务开发中，某些场景下会借助一些数据库支持的函数来做一些简单的操作，如针对浮点数的取整（<code>ceil</code>, <code>floor</code>）,字符串的长度获取(<code>length</code>)等，本文将介绍一下jooq中一些常见的函数使用姿势</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
