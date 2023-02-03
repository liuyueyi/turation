const e=JSON.parse('{"key":"v-3e85f465","path":"/spring/basic/%E9%85%8D%E7%BD%AE/08.210117-SpringBoot%E7%B3%BB%E5%88%97ConfigurationProperties%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E4%B8%AD%E9%82%A3%E4%BA%9B%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%E6%83%85.html","title":"8.ConfigurationProperties配置绑定中那些你不知道的事情","lang":"zh-CN","frontmatter":{"order":8,"title":"8.ConfigurationProperties配置绑定中那些你不知道的事情","tag":["ConfigurationProperties","Config"],"category":["SpringBoot","基础系列","配置"],"date":"2021-01-17T19:39:51.000Z","keywords":"ConfigurationProperties config validate 配置 SpringBoot","description":"在SpringBoot项目中，获取配置属性可以说是一个非常简单的事情，将配置写在aplication.yml文件之后，我们就可以直接通过@Value注解来绑定并获取；此外我们也可以将一个结构化的配置，借助@ConfigurationPorperties绑定到一个POJO，然后供项目使用，那么在使用它的时候，不知是否有想过 @ConfigurationPorperties修饰的类如何生效 配置参数与定义的POJO类型不匹配时会怎样 配置参数的必要性校验可以怎么支持 自定义的配置参数，idea中如何自动补全 已废弃的参数定义，怎样友好的提示使用方 List/Map格式的参数，怎么使用 自定义参数解析规则如何支持 如果上面这些都已经了然于心，那么本文的帮助将不会特别大；如果对此有所疑问，接下来将逐一进行解惑","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/%E9%85%8D%E7%BD%AE/08.210117-SpringBoot%E7%B3%BB%E5%88%97ConfigurationProperties%E9%85%8D%E7%BD%AE%E7%BB%91%E5%AE%9A%E4%B8%AD%E9%82%A3%E4%BA%9B%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%E6%83%85.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"8.ConfigurationProperties配置绑定中那些你不知道的事情"}],["meta",{"property":"og:description","content":"在SpringBoot项目中，获取配置属性可以说是一个非常简单的事情，将配置写在aplication.yml文件之后，我们就可以直接通过@Value注解来绑定并获取；此外我们也可以将一个结构化的配置，借助@ConfigurationPorperties绑定到一个POJO，然后供项目使用，那么在使用它的时候，不知是否有想过 @ConfigurationPorperties修饰的类如何生效 配置参数与定义的POJO类型不匹配时会怎样 配置参数的必要性校验可以怎么支持 自定义的配置参数，idea中如何自动补全 已废弃的参数定义，怎样友好的提示使用方 List/Map格式的参数，怎么使用 自定义参数解析规则如何支持 如果上面这些都已经了然于心，那么本文的帮助将不会特别大；如果对此有所疑问，接下来将逐一进行解惑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"ConfigurationProperties"}],["meta",{"property":"article:tag","content":"Config"}],["meta",{"property":"article:published_time","content":"2021-01-17T19:39:51.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.ConfigurationProperties配置绑定中那些你不知道的事情\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-01-17T19:39:51.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 项目环境","slug":"i-项目环境","link":"#i-项目环境","children":[]},{"level":2,"title":"II. ConfigurationProperties详解","slug":"ii-configurationproperties详解","link":"#ii-configurationproperties详解","children":[{"level":3,"title":"1. 配置绑定","slug":"_1-配置绑定","link":"#_1-配置绑定","children":[]},{"level":3,"title":"2. 注册生效","slug":"_2-注册生效","link":"#_2-注册生效","children":[]},{"level":3,"title":"3. 参数类型不匹配","slug":"_3-参数类型不匹配","link":"#_3-参数类型不匹配","children":[]},{"level":3,"title":"4. 配置解析规则","slug":"_4-配置解析规则","link":"#_4-配置解析规则","children":[]},{"level":3,"title":"5. 配置不存在场景","slug":"_5-配置不存在场景","link":"#_5-配置不存在场景","children":[]},{"level":3,"title":"6. 参数校验","slug":"_6-参数校验","link":"#_6-参数校验","children":[]},{"level":3,"title":"7. IDEA自动补全提示","slug":"_7-idea自动补全提示","link":"#_7-idea自动补全提示","children":[]},{"level":3,"title":"8.小结","slug":"_8-小结","link":"#_8-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":10.11,"words":3032},"filePathRelative":"spring/basic/配置/08.210117-SpringBoot系列ConfigurationProperties配置绑定中那些你不知道的事情.md","localizedDate":"2021年1月17日","excerpt":"<p>在SpringBoot项目中，获取配置属性可以说是一个非常简单的事情，将配置写在<code>aplication.yml</code>文件之后，我们就可以直接通过<code>@Value</code>注解来绑定并获取；此外我们也可以将一个结构化的配置，借助<code>@ConfigurationPorperties</code>绑定到一个POJO，然后供项目使用，那么在使用它的时候，不知是否有想过</p>\\n<ul>\\n<li><code>@ConfigurationPorperties</code>修饰的类如何生效</li>\\n<li>配置参数与定义的POJO类型不匹配时会怎样</li>\\n<li>配置参数的必要性校验可以怎么支持</li>\\n<li>自定义的配置参数，idea中如何自动补全</li>\\n<li>已废弃的参数定义，怎样友好的提示使用方</li>\\n<li>List/Map格式的参数，怎么使用</li>\\n<li>自定义参数解析规则如何支持</li>\\n</ul>\\n<p>如果上面这些都已经了然于心，那么本文的帮助将不会特别大；如果对此有所疑问，接下来将逐一进行解惑</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
