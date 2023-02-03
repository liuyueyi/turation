const e=JSON.parse('{"key":"v-b3c2365e","path":"/spring/basic/%E9%85%8D%E7%BD%AE/13.220425-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8B%E5%9F%BA%E4%BA%8Emaven%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html","title":"13.基于maven多环境配置","lang":"zh-CN","frontmatter":{"order":25,"title":"13.基于maven多环境配置","banner":"/imgs/220425/logo.jpg","tag":["Maven"],"category":["SpringBoot","基础系列","配置"],"date":"2022-04-25T20:45:50.000Z","keywords":["SpringBoot","Maven","环境配置"],"description":"SpringBoot系列之基于maven多环境配置 实际开发过程中，配置的多环境区分属于标配了，当我们不考虑配置中心时，将多环境的配置就放在项目的resource目录下，那么可以怎样做多环境的配置管理呢? 之前介绍过一篇基于 spring.profiles.active 配置来选择对应的配置文件的方式，有了解这个配置的小伙伴可以很快找到这种方式的特点 如配置值为dev，则加载 application-dev.yml 配置文件，如果为prod，则加载application-prod.yml 那么缺点就很明显了，当我每个环境的配置很多时，上面这种方式真的好用么？ 接下来本文介绍另外一种常见的基于maven的多环境配置方式","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/%E9%85%8D%E7%BD%AE/13.220425-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8B%E5%9F%BA%E4%BA%8Emaven%E5%A4%9A%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"13.基于maven多环境配置"}],["meta",{"property":"og:description","content":"SpringBoot系列之基于maven多环境配置 实际开发过程中，配置的多环境区分属于标配了，当我们不考虑配置中心时，将多环境的配置就放在项目的resource目录下，那么可以怎样做多环境的配置管理呢? 之前介绍过一篇基于 spring.profiles.active 配置来选择对应的配置文件的方式，有了解这个配置的小伙伴可以很快找到这种方式的特点 如配置值为dev，则加载 application-dev.yml 配置文件，如果为prod，则加载application-prod.yml 那么缺点就很明显了，当我每个环境的配置很多时，上面这种方式真的好用么？ 接下来本文介绍另外一种常见的基于maven的多环境配置方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/imgs/220425/logo.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T08:06:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"13.基于maven多环境配置"}],["meta",{"property":"article:tag","content":"Maven"}],["meta",{"property":"article:published_time","content":"2022-04-25T20:45:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T08:06:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13.基于maven多环境配置\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/imgs/220425/logo.jpg\\"],\\"datePublished\\":\\"2022-04-25T20:45:50.000Z\\",\\"dateModified\\":\\"2023-02-03T08:06:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 项目搭建","slug":"i-项目搭建","link":"#i-项目搭建","children":[{"level":3,"title":"1. 项目依赖","slug":"_1-项目依赖","link":"#_1-项目依赖","children":[]},{"level":3,"title":"2. 多环境配置","slug":"_2-多环境配置","link":"#_2-多环境配置","children":[]}]},{"level":2,"title":"II. 环境选择验证","slug":"ii-环境选择验证","link":"#ii-环境选择验证","children":[{"level":3,"title":"1.配置类","slug":"_1-配置类","link":"#_1-配置类","children":[]},{"level":3,"title":"2. 测试端点","slug":"_2-测试端点","link":"#_2-测试端点","children":[]},{"level":3,"title":"3. 启动测试","slug":"_3-启动测试","link":"#_3-启动测试","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"III. 不能错过的源码和相关知识点","slug":"iii-不能错过的源码和相关知识点","link":"#iii-不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]},{"level":3,"title":"1. 微信公众号: 一灰灰Blog","slug":"_1-微信公众号-一灰灰blog","link":"#_1-微信公众号-一灰灰blog","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675411610000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":4.55,"words":1364},"filePathRelative":"spring/basic/配置/13.220425-SpringBoot系列之基于maven多环境配置.md","localizedDate":"2022年4月25日","excerpt":"<blockquote>\\n<p>SpringBoot系列之基于maven多环境配置</p>\\n</blockquote>\\n<p>实际开发过程中，配置的多环境区分属于标配了，当我们不考虑配置中心时，将多环境的配置就放在项目的resource目录下，那么可以怎样做多环境的配置管理呢?</p>\\n<p>之前介绍过一篇基于 <code>spring.profiles.active</code> 配置来选择对应的配置文件的方式，有了解这个配置的小伙伴可以很快找到这种方式的特点</p>\\n<p>如配置值为dev，则加载 <code>application-dev.yml</code> 配置文件，如果为prod，则加载<code>application-prod.yml</code></p>\\n<p>那么缺点就很明显了，当我每个环境的配置很多时，上面这种方式真的好用么？</p>\\n<p>接下来本文介绍另外一种常见的基于maven的多环境配置方式</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
