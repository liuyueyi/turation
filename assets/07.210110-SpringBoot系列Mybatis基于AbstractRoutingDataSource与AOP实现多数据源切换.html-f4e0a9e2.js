const t=JSON.parse('{"key":"v-22c92830","path":"/spring/db/Mybatis/07.210110-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%9F%BA%E4%BA%8EAbstractRoutingDataSource%E4%B8%8EAOP%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E5%88%87%E6%8D%A2.html","title":"7.基于AbstractRoutingDataSource与AOP实现多数据源切换","lang":"zh-CN","frontmatter":{"order":7,"title":"7.基于AbstractRoutingDataSource与AOP实现多数据源切换","tag":["Mybatis","多数据源"],"category":["SpringBoot","DB系列","Mybatis"],"date":"2021-01-10T10:15:17.000Z","keywords":"Mybatis SpringBoot 多数据源 Datasource AbstractRoutingDataSource AOP 切面","description":"前面一篇博文介绍了Mybatis多数据源的配置，简单来讲就是一个数据源一个配置指定，不同数据源的Mapper分开指定；本文将介绍另外一种方式，借助AbstractRoutingDataSource来实现动态切换数据源，并通过自定义注解方式 + AOP来实现数据源的指定","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/Mybatis/07.210110-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%9F%BA%E4%BA%8EAbstractRoutingDataSource%E4%B8%8EAOP%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E5%88%87%E6%8D%A2.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"7.基于AbstractRoutingDataSource与AOP实现多数据源切换"}],["meta",{"property":"og:description","content":"前面一篇博文介绍了Mybatis多数据源的配置，简单来讲就是一个数据源一个配置指定，不同数据源的Mapper分开指定；本文将介绍另外一种方式，借助AbstractRoutingDataSource来实现动态切换数据源，并通过自定义注解方式 + AOP来实现数据源的指定"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:tag","content":"多数据源"}],["meta",{"property":"article:published_time","content":"2021-01-10T10:15:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7.基于AbstractRoutingDataSource与AOP实现多数据源切换\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-10T10:15:17.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 环境准备","slug":"i-环境准备","link":"#i-环境准备","children":[{"level":3,"title":"1. 数据库相关","slug":"_1-数据库相关","link":"#_1-数据库相关","children":[]},{"level":3,"title":"2. 项目环境","slug":"_2-项目环境","link":"#_2-项目环境","children":[]}]},{"level":2,"title":"II. 多数据源配置","slug":"ii-多数据源配置","link":"#ii-多数据源配置","children":[{"level":3,"title":"1. AbstractRoutingDataSource","slug":"_1-abstractroutingdatasource","link":"#_1-abstractroutingdatasource","children":[]},{"level":3,"title":"2. 动态数据源实现","slug":"_2-动态数据源实现","link":"#_2-动态数据源实现","children":[]},{"level":3,"title":"3. 注解实现","slug":"_3-注解实现","link":"#_3-注解实现","children":[]},{"level":3,"title":"4. 注册配置","slug":"_4-注册配置","link":"#_4-注册配置","children":[]},{"level":3,"title":"5. 数据库实体类","slug":"_5-数据库实体类","link":"#_5-数据库实体类","children":[]},{"level":3,"title":"6. 测试","slug":"_6-测试","link":"#_6-测试","children":[]},{"level":3,"title":"6.小结","slug":"_6-小结","link":"#_6-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":7.78,"words":2335},"filePathRelative":"spring/db/Mybatis/07.210110-SpringBoot系列Mybatis基于AbstractRoutingDataSource与AOP实现多数据源切换.md","localizedDate":"2021年1月10日","excerpt":"<p>前面一篇博文介绍了Mybatis多数据源的配置，简单来讲就是一个数据源一个配置指定，不同数据源的Mapper分开指定；本文将介绍另外一种方式，借助<code>AbstractRoutingDataSource</code>来实现动态切换数据源，并通过自定义注解方式 + AOP来实现数据源的指定</p>\\n","copyright":{},"autoDesc":true}');export{t as data};
