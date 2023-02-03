const e=JSON.parse('{"key":"v-9a74497a","path":"/spring/basic/%E5%AE%9A%E6%97%B6%E5%99%A8/01.200412-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8B%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%88%86%E5%B8%83%E5%BC%8F%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1.html","title":"1.实现一个简单的分布式定时任务(应用篇)","lang":"zh-CN","frontmatter":{"order":1,"title":"1.实现一个简单的分布式定时任务(应用篇)","tag":["Scheduled","应用"],"category":["SpringBoot","基础系列","定时器","应用篇"],"date":"2020-04-12T13:47:52.000Z","keywords":"SpringBoot Spring 定时任务 AOP Scheduled","description":"在SpringBoot中，想使用定时器比较简单，一个注解@Scheduled配合上cron表达式即可支持各种定时任务了； 单机任务还是比较简单的，但是当我们的服务有多个实例在运行时，如果只希望一个实例上的定时任务执行，可以怎么出了呢？","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/basic/%E5%AE%9A%E6%97%B6%E5%99%A8/01.200412-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8B%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E5%88%86%E5%B8%83%E5%BC%8F%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1.实现一个简单的分布式定时任务(应用篇)"}],["meta",{"property":"og:description","content":"在SpringBoot中，想使用定时器比较简单，一个注解@Scheduled配合上cron表达式即可支持各种定时任务了； 单机任务还是比较简单的，但是当我们的服务有多个实例在运行时，如果只希望一个实例上的定时任务执行，可以怎么出了呢？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Scheduled"}],["meta",{"property":"article:tag","content":"应用"}],["meta",{"property":"article:published_time","content":"2020-04-12T13:47:52.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.实现一个简单的分布式定时任务(应用篇)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-04-12T13:47:52.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 场景分析","slug":"i-场景分析","link":"#i-场景分析","children":[{"level":3,"title":"1. 需求说明","slug":"_1-需求说明","link":"#_1-需求说明","children":[]},{"level":3,"title":"2. 方案设计","slug":"_2-方案设计","link":"#_2-方案设计","children":[]}]},{"level":2,"title":"II. 分布式定时任务实现","slug":"ii-分布式定时任务实现","link":"#ii-分布式定时任务实现","children":[{"level":3,"title":"0. 分析","slug":"_0-分析","link":"#_0-分析","children":[]},{"level":3,"title":"1. AOP实现方式","slug":"_1-aop实现方式","link":"#_1-aop实现方式","children":[]},{"level":3,"title":"2. 定时任务扩展","slug":"_2-定时任务扩展","link":"#_2-定时任务扩展","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":5.76,"words":1728},"filePathRelative":"spring/basic/定时器/01.200412-SpringBoot系列教程之实现一个简单的分布式定时任务.md","localizedDate":"2020年4月12日","excerpt":"<p>在SpringBoot中，想使用定时器比较简单，一个注解<code>@Scheduled</code>配合上cron表达式即可支持各种定时任务了；</p>\\n<p>单机任务还是比较简单的，但是当我们的服务有多个实例在运行时，如果只希望一个实例上的定时任务执行，可以怎么出了呢？</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
