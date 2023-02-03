const e=JSON.parse('{"key":"v-1616da44","path":"/spring/basic/Bean/14.191214-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%94%9F%E6%95%88.html","title":"14.自动配置选择生效","lang":"zh-CN","frontmatter":{"order":14,"title":"14.自动配置选择生效","tag":["Bean"],"category":["SpringBoot","基础系列","Bean"],"date":"2019-12-14T11:08:42.000Z","keywords":"Spring SpringBoot ImportSelector 配置选择","description":"写了这么久的Spring系列博文，发现了一个问题，之前所有的文章都是围绕的让一个东西生效；那么有没有反其道而行之的呢？ 我们知道可以通过@ConditionOnXxx来决定一个配置类是否可以加载，那么假设有这么个应用场景 有一个Print的抽象接口，有多个实现，如输出到控制台的ConsolePrint, 输出到文件的 FilePrint, 输出到db的 DbPrint 我们在实际使用的时候，根据用户的选择，使用其中的一个具体实现 针对上面的case，当然也可以使用@ConditionOnExpression来实现，除此之外推荐一种更优雅的选择注入方式ImportSelector","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/Bean/14.191214-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AE%E9%80%89%E6%8B%A9%E7%94%9F%E6%95%88.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"14.自动配置选择生效"}],["meta",{"property":"og:description","content":"写了这么久的Spring系列博文，发现了一个问题，之前所有的文章都是围绕的让一个东西生效；那么有没有反其道而行之的呢？ 我们知道可以通过@ConditionOnXxx来决定一个配置类是否可以加载，那么假设有这么个应用场景 有一个Print的抽象接口，有多个实现，如输出到控制台的ConsolePrint, 输出到文件的 FilePrint, 输出到db的 DbPrint 我们在实际使用的时候，根据用户的选择，使用其中的一个具体实现 针对上面的case，当然也可以使用@ConditionOnExpression来实现，除此之外推荐一种更优雅的选择注入方式ImportSelector"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:published_time","content":"2019-12-14T11:08:42.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14.自动配置选择生效\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-14T11:08:42.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 配置选择","slug":"i-配置选择","link":"#i-配置选择","children":[{"level":3,"title":"1. Print类","slug":"_1-print类","link":"#_1-print类","children":[]},{"level":3,"title":"2. 选择类","slug":"_2-选择类","link":"#_2-选择类","children":[]},{"level":3,"title":"3. PrintSelector注解","slug":"_3-printselector注解","link":"#_3-printselector注解","children":[]},{"level":3,"title":"4. 测试","slug":"_4-测试","link":"#_4-测试","children":[]}]},{"level":2,"title":"II. 扩展","slug":"ii-扩展","link":"#ii-扩展","children":[{"level":3,"title":"1. demo设计","slug":"_1-demo设计","link":"#_1-demo设计","children":[]},{"level":3,"title":"2. 加载顺序实测","slug":"_2-加载顺序实测","link":"#_2-加载顺序实测","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":4.96,"words":1488},"filePathRelative":"spring/basic/Bean/14.191214-SpringBoot系列教程自动配置选择生效.md","localizedDate":"2019年12月14日","excerpt":"<p>写了这么久的Spring系列博文，发现了一个问题，之前所有的文章都是围绕的让一个东西生效；那么有没有反其道而行之的呢？</p>\\n<p>我们知道可以通过<code>@ConditionOnXxx</code>来决定一个配置类是否可以加载，那么假设有这么个应用场景</p>\\n<ul>\\n<li>有一个Print的抽象接口，有多个实现，如输出到控制台的ConsolePrint, 输出到文件的 FilePrint, 输出到db的 DbPrint</li>\\n<li>我们在实际使用的时候，根据用户的选择，使用其中的一个具体实现</li>\\n</ul>\\n<p>针对上面的case，当然也可以使用<code>@ConditionOnExpression</code>来实现，除此之外推荐一种更优雅的选择注入方式<code>ImportSelector</code></p>\\n","copyright":{},"autoDesc":true}');export{e as data};
