const n=JSON.parse('{"key":"v-34580fa0","path":"/spring/basic/Bean/06.181019-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87Bean%E4%B9%8B-ConditionalOnBean%E4%B8%8E@ConditionalOnClass.html","title":"6.@ConditionalOnBean与@ConditionalOnClass","lang":"zh-CN","frontmatter":{"order":6,"title":"6.@ConditionalOnBean与@ConditionalOnClass","tag":["Bean","Condition"],"category":["SpringBoot","基础系列","Bean"],"date":"2018-10-19T10:38:15.000Z","keywords":"Spring,SpringBoot,Bean,Condition,@ConditionalOnBean,@ConditionalOnMissingBean,@ConditionalOnClass,@ConditionalOnMissingClass","description":"bean的条件注入，除了前面一篇博文中介绍的通过@Conditional注解配合Condition接口的实现之外，还提供了更多简化的注解使用方式，省略了自己实现Condtion接口，本篇博文主要介绍下面几个常用的注解使用方式 @ConditionalOnBean @ConditionalOnMissingBean @ConditionalOnClass @ConditionalOnMissingClass","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/Bean/06.181019-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87Bean%E4%B9%8B-ConditionalOnBean%E4%B8%8E@ConditionalOnClass.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"6.@ConditionalOnBean与@ConditionalOnClass"}],["meta",{"property":"og:description","content":"bean的条件注入，除了前面一篇博文中介绍的通过@Conditional注解配合Condition接口的实现之外，还提供了更多简化的注解使用方式，省略了自己实现Condtion接口，本篇博文主要介绍下面几个常用的注解使用方式 @ConditionalOnBean @ConditionalOnMissingBean @ConditionalOnClass @ConditionalOnMissingClass"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:tag","content":"Condition"}],["meta",{"property":"article:published_time","content":"2018-10-19T10:38:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"6.@ConditionalOnBean与@ConditionalOnClass\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-19T10:38:15.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. Bean的存在与否作为条件","slug":"i-bean的存在与否作为条件","link":"#i-bean的存在与否作为条件","children":[{"level":3,"title":"1. @ConditionalOnBean","slug":"_1-conditionalonbean","link":"#_1-conditionalonbean","children":[]},{"level":3,"title":"2. ConditionalOnMissingBean","slug":"_2-conditionalonmissingbean","link":"#_2-conditionalonmissingbean","children":[]},{"level":3,"title":"3. 实例演示","slug":"_3-实例演示","link":"#_3-实例演示","children":[]}]},{"level":2,"title":"II. Class的存在与否作为条件","slug":"ii-class的存在与否作为条件","link":"#ii-class的存在与否作为条件","children":[{"level":3,"title":"1. @ConditionalOnClass","slug":"_1-conditionalonclass","link":"#_1-conditionalonclass","children":[]},{"level":3,"title":"2. @ConditionalOnMissingClass","slug":"_2-conditionalonmissingclass","link":"#_2-conditionalonmissingclass","children":[]},{"level":3,"title":"3. 实例演示","slug":"_3-实例演示-1","link":"#_3-实例演示-1","children":[]}]},{"level":2,"title":"III. 其他","slug":"iii-其他","link":"#iii-其他","children":[{"level":3,"title":"0. 相关","slug":"_0-相关","link":"#_0-相关","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":5.71,"words":1713},"filePathRelative":"spring/basic/Bean/06.181019-SpringBoot基础篇Bean之-ConditionalOnBean与@ConditionalOnClass.md","localizedDate":"2018年10月19日","excerpt":"<p>bean的条件注入，除了前面一篇博文中介绍的通过<code>@Conditional</code>注解配合<code>Condition</code>接口的实现之外，还提供了更多简化的注解使用方式，省略了自己实现<code>Condtion</code>接口，本篇博文主要介绍下面几个常用的注解使用方式</p>\\n<ul>\\n<li><code>@ConditionalOnBean</code></li>\\n<li><code>@ConditionalOnMissingBean</code></li>\\n<li><code>@ConditionalOnClass</code></li>\\n<li><code>@ConditionalOnMissingClass</code></li>\\n</ul>\\n","copyright":{},"autoDesc":true}');export{n as data};
