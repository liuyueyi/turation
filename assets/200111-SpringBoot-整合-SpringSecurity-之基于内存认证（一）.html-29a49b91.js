const e=JSON.parse('{"key":"v-13b79988","path":"/spring/security/basic/200111-SpringBoot-%E6%95%B4%E5%90%88-SpringSecurity-%E4%B9%8B%E5%9F%BA%E4%BA%8E%E5%86%85%E5%AD%98%E8%AE%A4%E8%AF%81%EF%BC%88%E4%B8%80%EF%BC%89.html","title":"1.基于内存认证（一）","lang":"zh-CN","frontmatter":{"order":2,"title":"1.基于内存认证（一）","tag":["SpringSecurity"],"category":["SpringSecurity"],"date":"2020-01-11T11:53:44.000Z","keywords":"SpringgSecurity Spring SpringBoot UserDetailService 内存认证 认证","description":"在第一篇的教程中，我们简单的了解了一下SpringSecurity的使用姿势，添加依赖，在application.yml文件中加几行配置，就可以实现一个基本的登录认证； 默认的配置只能设置一个账号，那么如果需要多个账号可以怎么支持呢？ 本文将介绍一下基于内存的认证方式","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/security/basic/200111-SpringBoot-%E6%95%B4%E5%90%88-SpringSecurity-%E4%B9%8B%E5%9F%BA%E4%BA%8E%E5%86%85%E5%AD%98%E8%AE%A4%E8%AF%81%EF%BC%88%E4%B8%80%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1.基于内存认证（一）"}],["meta",{"property":"og:description","content":"在第一篇的教程中，我们简单的了解了一下SpringSecurity的使用姿势，添加依赖，在application.yml文件中加几行配置，就可以实现一个基本的登录认证； 默认的配置只能设置一个账号，那么如果需要多个账号可以怎么支持呢？ 本文将介绍一下基于内存的认证方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-10T04:50:05.000Z"}],["meta",{"property":"article:tag","content":"SpringSecurity"}],["meta",{"property":"article:published_time","content":"2020-01-11T11:53:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-10T04:50:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.基于内存认证（一）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-11T11:53:44.000Z\\",\\"dateModified\\":\\"2023-02-10T04:50:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 内存认证","slug":"i-内存认证","link":"#i-内存认证","children":[{"level":3,"title":"0. 项目配置","slug":"_0-项目配置","link":"#_0-项目配置","children":[]},{"level":3,"title":"1. WebSecurityConfigurerAdapter","slug":"_1-websecurityconfigureradapter","link":"#_1-websecurityconfigureradapter","children":[]},{"level":3,"title":"2. UserDetailsService","slug":"_2-userdetailsservice","link":"#_2-userdetailsservice","children":[]},{"level":3,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 系列博文&项目源码","slug":"_0-系列博文-项目源码","link":"#_0-系列博文-项目源码","children":[]}]}],"git":{"createdTime":1676004605000,"updatedTime":1676004605000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":2.87,"words":862},"filePathRelative":"spring/security/basic/200111-SpringBoot-整合-SpringSecurity-之基于内存认证（一）.md","localizedDate":"2020年1月11日","excerpt":"<p>在第一篇的教程中，我们简单的了解了一下SpringSecurity的使用姿势，添加依赖，在<code>application.yml</code>文件中加几行配置，就可以实现一个基本的登录认证；</p>\\n<p>默认的配置只能设置一个账号，那么如果需要多个账号可以怎么支持呢？</p>\\n<p>本文将介绍一下基于内存的认证方式</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
