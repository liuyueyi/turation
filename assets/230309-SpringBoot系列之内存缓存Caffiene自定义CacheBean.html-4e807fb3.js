const e=JSON.parse('{"key":"v-e8ea5ed2","path":"/spring/basic/%E7%BC%93%E5%AD%98/230309-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8B%E5%86%85%E5%AD%98%E7%BC%93%E5%AD%98Caffiene%E8%87%AA%E5%AE%9A%E4%B9%89CacheBean.html","title":"3.内存缓存Caffiene自定义CacheManager","lang":"zh-CN","frontmatter":{"order":3,"title":"3.内存缓存Caffiene自定义CacheManager","tag":["Caffiene"],"category":["SpringBoot","中间件","Caffiene"],"date":"2023-03-09T17:55:36.000Z","keywords":["Caffiene","内存缓存"],"description":"上一篇介绍了Caffiene整合Spring的缓存注解@Cacheable，在这篇示例中，所有的缓存公用，但是实际的场景中，我们可能会更希望针对不同的场景，配置不同的缓存（比如我的关键数据，虽然访问频率可能没那么高，但是每次实际读取的成本很高，又不怎么变动，我希望可以更长久的缓存；不希望这些数据因为缓存的淘汰策略被其他的热点数据给淘汰掉），那么可以怎么处理呢？ 接下来我们来看一下两种不同的方式，来实现上面的诉求","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/basic/%E7%BC%93%E5%AD%98/230309-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8B%E5%86%85%E5%AD%98%E7%BC%93%E5%AD%98Caffiene%E8%87%AA%E5%AE%9A%E4%B9%89CacheBean.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"3.内存缓存Caffiene自定义CacheManager"}],["meta",{"property":"og:description","content":"上一篇介绍了Caffiene整合Spring的缓存注解@Cacheable，在这篇示例中，所有的缓存公用，但是实际的场景中，我们可能会更希望针对不同的场景，配置不同的缓存（比如我的关键数据，虽然访问频率可能没那么高，但是每次实际读取的成本很高，又不怎么变动，我希望可以更长久的缓存；不希望这些数据因为缓存的淘汰策略被其他的热点数据给淘汰掉），那么可以怎么处理呢？ 接下来我们来看一下两种不同的方式，来实现上面的诉求"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T09:55:31.000Z"}],["meta",{"property":"article:tag","content":"Caffiene"}],["meta",{"property":"article:published_time","content":"2023-03-09T17:55:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T09:55:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.内存缓存Caffiene自定义CacheManager\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-09T17:55:36.000Z\\",\\"dateModified\\":\\"2023-09-21T09:55:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"项目配置","slug":"项目配置","link":"#项目配置","children":[{"level":3,"title":"1. 依赖","slug":"_1-依赖","link":"#_1-依赖","children":[]},{"level":3,"title":"2. 配置类","slug":"_2-配置类","link":"#_2-配置类","children":[]}]},{"level":2,"title":"使用实例","slug":"使用实例","link":"#使用实例","children":[{"level":3,"title":"1. SimpleCacheManager 使用实例","slug":"_1-simplecachemanager-使用实例","link":"#_1-simplecachemanager-使用实例","children":[]},{"level":3,"title":"2. CaffeineCacheManager 方式","slug":"_2-caffeinecachemanager-方式","link":"#_2-caffeinecachemanager-方式","children":[]},{"level":3,"title":"3. 测试","slug":"_3-测试","link":"#_3-测试","children":[]}]},{"level":2,"title":"不能错过的源码和相关知识点","slug":"不能错过的源码和相关知识点","link":"#不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1695290131000,"updatedTime":1695290131000,"contributors":[{"name":"wuzebang","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1306},"filePathRelative":"spring/basic/缓存/230309-SpringBoot系列之内存缓存Caffiene自定义CacheBean.md","localizedDate":"2023年3月9日","excerpt":"<p>上一篇介绍了Caffiene整合Spring的缓存注解@Cacheable，在这篇示例中，所有的缓存公用，但是实际的场景中，我们可能会更希望针对不同的场景，配置不同的缓存（比如我的关键数据，虽然访问频率可能没那么高，但是每次实际读取的成本很高，又不怎么变动，我希望可以更长久的缓存；不希望这些数据因为缓存的淘汰策略被其他的热点数据给淘汰掉），那么可以怎么处理呢？</p>\\n<p>接下来我们来看一下两种不同的方式，来实现上面的诉求</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
