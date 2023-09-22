const e=JSON.parse('{"key":"v-001f40ea","path":"/spring/web/%E5%AE%9E%E4%BE%8B/230325-SpringBoot%E5%AE%9E%E6%88%98%E4%B9%8B%E5%9F%BA%E4%BA%8EWebListener%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0%E7%BB%9F%E8%AE%A1.html","title":"9. 实战之基于WebListener实现实时在线人数统计","lang":"zh-CN","frontmatter":{"order":9,"title":"9. 实战之基于WebListener实现实时在线人数统计","tag":["Listener"],"category":["SpringBoot","WEB系列","应用篇"],"date":"2023-03-25T20:33:47.000Z","keywords":["HttpSession","Cookie"],"description":"很多pc网站都有一个实时在线人数的统计功能，那么一般这种是采用什么方式来实现的呢？ 这里我们介绍一个最基础的是实现方式，基于Session结合WebListener来实现在线人数统计","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/web/%E5%AE%9E%E4%BE%8B/230325-SpringBoot%E5%AE%9E%E6%88%98%E4%B9%8B%E5%9F%BA%E4%BA%8EWebListener%E5%AE%9E%E7%8E%B0%E5%AE%9E%E6%97%B6%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0%E7%BB%9F%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"9. 实战之基于WebListener实现实时在线人数统计"}],["meta",{"property":"og:description","content":"很多pc网站都有一个实时在线人数的统计功能，那么一般这种是采用什么方式来实现的呢？ 这里我们介绍一个最基础的是实现方式，基于Session结合WebListener来实现在线人数统计"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T09:55:31.000Z"}],["meta",{"property":"article:tag","content":"Listener"}],["meta",{"property":"article:published_time","content":"2023-03-25T20:33:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T09:55:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. 实战之基于WebListener实现实时在线人数统计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-25T20:33:47.000Z\\",\\"dateModified\\":\\"2023-09-21T09:55:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"项目配置","slug":"项目配置","link":"#项目配置","children":[{"level":3,"title":"1. 依赖","slug":"_1-依赖","link":"#_1-依赖","children":[]},{"level":3,"title":"2. 启动入口","slug":"_2-启动入口","link":"#_2-启动入口","children":[]},{"level":3,"title":"3. web配置","slug":"_3-web配置","link":"#_3-web配置","children":[]}]},{"level":2,"title":"在线人数统计实现","slug":"在线人数统计实现","link":"#在线人数统计实现","children":[{"level":3,"title":"1. 计数服务","slug":"_1-计数服务","link":"#_1-计数服务","children":[]},{"level":3,"title":"2. Session监听器","slug":"_2-session监听器","link":"#_2-session监听器","children":[]},{"level":3,"title":"3. 登录登出接口","slug":"_3-登录登出接口","link":"#_3-登录登出接口","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"不能错过的源码和相关知识点","slug":"不能错过的源码和相关知识点","link":"#不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1695290131000,"updatedTime":1695290131000,"contributors":[{"name":"wuzebang","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":2.98,"words":894},"filePathRelative":"spring/web/实例/230325-SpringBoot实战之基于WebListener实现实时在线人数统计.md","localizedDate":"2023年3月25日","excerpt":"<p>很多pc网站都有一个实时在线人数的统计功能，那么一般这种是采用什么方式来实现的呢？ 这里我们介绍一个最基础的是实现方式，基于Session结合WebListener来实现在线人数统计</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
