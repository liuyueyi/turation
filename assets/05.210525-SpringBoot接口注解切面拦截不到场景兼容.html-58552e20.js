const e=JSON.parse('{"key":"v-117fe30e","path":"/spring/basic/AOP/05.210525-SpringBoot%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3%E5%88%87%E9%9D%A2%E6%8B%A6%E6%88%AA%E4%B8%8D%E5%88%B0%E5%9C%BA%E6%99%AF%E5%85%BC%E5%AE%B9.html","title":"5.接口上注解AOP拦截不到场景兼容","lang":"zh-CN","frontmatter":{"weight":9,"title":"5.接口上注解AOP拦截不到场景兼容","banner":"/imgs/210525/logo.jpg","tag":["AOP"],"category":["SpringBoot","基础系列","AOP"],"date":"2021-05-25T12:33:16.000Z","keywords":"aop spring springboot 切面 接口注解 注解拦截","description":"在Java的开发过程中，面向接口的编程可能是大家的常态，切面也是各位大佬使用Spring时，或多或少会使用的一项基本技能；结果这两个碰到一起，有意思的事情就发生了，接口方法上添加注解，面向注解的切面拦截，居然不生效 这就有点奇怪了啊，最开始遇到这个问题时，表示难以相信；事务注解也挺多是写在接口上的，好像也没有遇到这个问题（难道是也不生效，只是自己没有关注到？） 接下来我们好好瞅瞅，这到底是怎么个情况","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/AOP/05.210525-SpringBoot%E6%8E%A5%E5%8F%A3%E6%B3%A8%E8%A7%A3%E5%88%87%E9%9D%A2%E6%8B%A6%E6%88%AA%E4%B8%8D%E5%88%B0%E5%9C%BA%E6%99%AF%E5%85%BC%E5%AE%B9.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"5.接口上注解AOP拦截不到场景兼容"}],["meta",{"property":"og:description","content":"在Java的开发过程中，面向接口的编程可能是大家的常态，切面也是各位大佬使用Spring时，或多或少会使用的一项基本技能；结果这两个碰到一起，有意思的事情就发生了，接口方法上添加注解，面向注解的切面拦截，居然不生效 这就有点奇怪了啊，最开始遇到这个问题时，表示难以相信；事务注解也挺多是写在接口上的，好像也没有遇到这个问题（难道是也不生效，只是自己没有关注到？） 接下来我们好好瞅瞅，这到底是怎么个情况"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/imgs/210525/logo.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T08:06:50.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"5.接口上注解AOP拦截不到场景兼容"}],["meta",{"property":"article:tag","content":"AOP"}],["meta",{"property":"article:published_time","content":"2021-05-25T12:33:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T08:06:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.接口上注解AOP拦截不到场景兼容\\",\\"image\\":[\\"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/imgs/210525/logo.jpg\\"],\\"datePublished\\":\\"2021-05-25T12:33:16.000Z\\",\\"dateModified\\":\\"2023-02-03T08:06:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 场景复现","slug":"i-场景复现","link":"#i-场景复现","children":[{"level":3,"title":"1. 项目环境","slug":"_1-项目环境","link":"#_1-项目环境","children":[]},{"level":3,"title":"2. 复现case","slug":"_2-复现case","link":"#_2-复现case","children":[]},{"level":3,"title":"3. 事务注解测试","slug":"_3-事务注解测试","link":"#_3-事务注解测试","children":[]}]},{"level":2,"title":"II. 接口注解切面拦截实现","slug":"ii-接口注解切面拦截实现","link":"#ii-接口注解切面拦截实现","children":[{"level":3,"title":"1. 自定义Pointcut","slug":"_1-自定义pointcut","link":"#_1-自定义pointcut","children":[]},{"level":3,"title":"2. 自定义Advice","slug":"_2-自定义advice","link":"#_2-自定义advice","children":[]},{"level":3,"title":"3. 自定义Advisor","slug":"_3-自定义advisor","link":"#_3-自定义advisor","children":[]},{"level":3,"title":"4. 最后注册切面","slug":"_4-最后注册切面","link":"#_4-最后注册切面","children":[]},{"level":3,"title":"5. 小结","slug":"_5-小结","link":"#_5-小结","children":[]}]},{"level":2,"title":"III. 其他","slug":"iii-其他","link":"#iii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675411610000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":6.05,"words":1815},"filePathRelative":"spring/basic/AOP/05.210525-SpringBoot接口注解切面拦截不到场景兼容.md","localizedDate":"2021年5月25日","excerpt":"<p>在Java的开发过程中，面向接口的编程可能是大家的常态，切面也是各位大佬使用Spring时，或多或少会使用的一项基本技能；结果这两个碰到一起，有意思的事情就发生了，接口方法上添加注解，面向注解的切面拦截，居然不生效</p>\\n<p>这就有点奇怪了啊，最开始遇到这个问题时，表示难以相信；事务注解也挺多是写在接口上的，好像也没有遇到这个问题（难道是也不生效，只是自己没有关注到？）</p>\\n<p>接下来我们好好瞅瞅，这到底是怎么个情况</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
