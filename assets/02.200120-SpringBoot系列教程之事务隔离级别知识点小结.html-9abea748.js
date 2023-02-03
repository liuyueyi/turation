const e=JSON.parse('{"key":"v-114aa294","path":"/spring/db/%E4%BA%8B%E5%8A%A1/02.200120-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8B%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB%E7%9F%A5%E8%AF%86%E7%82%B9%E5%B0%8F%E7%BB%93.html","title":"2.事务隔离级别知识点小结","lang":"zh-CN","frontmatter":{"order":2,"title":"2.事务隔离级别知识点小结","tag":["事务","Transactional"],"category":["SpringBoot","DB系列","事务"],"date":"2020-01-20T14:07:39.000Z","keywords":"MySql SpringBoot JdbcTemplate 事务 Transactional Isolation 隔离级别 RR RU RC SERIALIZABLE","description":"终于渡过漫长的自我隔离期，健康的活着真好；为武汉祈福，希望快点渡过，能早日回归大武汉 😭😭😭 上一篇博文介绍了声明式事务@Transactional的简单使用姿势，最文章的最后给出了这个注解的多个属性，本文将着重放在事务隔离级别的知识点上，并通过实例演示不同的事务隔离级别下，脏读、不可重复读、幻读的具体场景","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/%E4%BA%8B%E5%8A%A1/02.200120-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8B%E4%BA%8B%E5%8A%A1%E9%9A%94%E7%A6%BB%E7%BA%A7%E5%88%AB%E7%9F%A5%E8%AF%86%E7%82%B9%E5%B0%8F%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"2.事务隔离级别知识点小结"}],["meta",{"property":"og:description","content":"终于渡过漫长的自我隔离期，健康的活着真好；为武汉祈福，希望快点渡过，能早日回归大武汉 😭😭😭 上一篇博文介绍了声明式事务@Transactional的简单使用姿势，最文章的最后给出了这个注解的多个属性，本文将着重放在事务隔离级别的知识点上，并通过实例演示不同的事务隔离级别下，脏读、不可重复读、幻读的具体场景"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"事务"}],["meta",{"property":"article:tag","content":"Transactional"}],["meta",{"property":"article:published_time","content":"2020-01-20T14:07:39.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.事务隔离级别知识点小结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T14:07:39.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 基础知识","slug":"i-基础知识","link":"#i-基础知识","children":[{"level":3,"title":"1. 基本概念","slug":"_1-基本概念","link":"#_1-基本概念","children":[]},{"level":3,"title":"2. 隔离级别","slug":"_2-隔离级别","link":"#_2-隔离级别","children":[]}]},{"level":2,"title":"II. 配置","slug":"ii-配置","link":"#ii-配置","children":[{"level":3,"title":"1. 项目配置","slug":"_1-项目配置","link":"#_1-项目配置","children":[]},{"level":3,"title":"2. 数据库配置","slug":"_2-数据库配置","link":"#_2-数据库配置","children":[]},{"level":3,"title":"3. 数据库","slug":"_3-数据库","link":"#_3-数据库","children":[]}]},{"level":2,"title":"III. 实例演示","slug":"iii-实例演示","link":"#iii-实例演示","children":[{"level":3,"title":"1. 初始化数据","slug":"_1-初始化数据","link":"#_1-初始化数据","children":[]},{"level":3,"title":"2. RU隔离级别","slug":"_2-ru隔离级别","link":"#_2-ru隔离级别","children":[]},{"level":3,"title":"3. RC事务隔离级别","slug":"_3-rc事务隔离级别","link":"#_3-rc事务隔离级别","children":[]},{"level":3,"title":"4. RR事务隔离级别","slug":"_4-rr事务隔离级别","link":"#_4-rr事务隔离级别","children":[]},{"level":3,"title":"5. SERIALIZABLE事务隔离级别","slug":"_5-serializable事务隔离级别","link":"#_5-serializable事务隔离级别","children":[]},{"level":3,"title":"6. 小结","slug":"_6-小结","link":"#_6-小结","children":[]}]},{"level":2,"title":"IV. 其他","slug":"iv-其他","link":"#iv-其他","children":[{"level":3,"title":"0. 系列博文&源码","slug":"_0-系列博文-源码","link":"#_0-系列博文-源码","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":12.86,"words":3857},"filePathRelative":"spring/db/事务/02.200120-SpringBoot系列教程之事务隔离级别知识点小结.md","localizedDate":"2020年1月20日","excerpt":"<blockquote>\\n<p>终于渡过漫长的自我隔离期，健康的活着真好；为武汉祈福，希望快点渡过，能早日回归大武汉 😭😭😭</p>\\n</blockquote>\\n<p>上一篇博文介绍了声明式事务<code>@Transactional</code>的简单使用姿势，最文章的最后给出了这个注解的多个属性，本文将着重放在事务隔离级别的知识点上，并通过实例演示不同的事务隔离级别下，脏读、不可重复读、幻读的具体场景</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
