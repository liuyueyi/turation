const e=JSON.parse('{"key":"v-0d503c2e","path":"/spring/db/Redis/03.181108-SpringBoot%E9%AB%98%E7%BA%A7%E7%AF%87Redis%E4%B9%8BString%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%9A%84%E8%AF%BB%E5%86%99.html","title":"3.String数据结构的读写","lang":"zh-CN","frontmatter":{"order":3,"title":"3.String数据结构的读写","tag":["Redis"],"category":["SpringBoot","DB系列","Redis"],"date":"2018-11-08T19:53:55.000Z","keywords":"Redis,ReidsTemplate,SpringBoot,Spring,nosql","description":"Redis目前常用的存储结构有五种，String字符串，List列表，Set集合，Hash散列，ZSet有序集合；本篇则主要集中在String这个数据结构的读写操作之上 对于String的操作，除了常见的get/set之外，还有一些比较有特色的功能，如用于实现redis分布式锁的setnx/getset方法；用于实现计数的incr/decr方法；位图算法的经典实用场景之bitmap的使用方法等也有必要了解一下","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/Redis/03.181108-SpringBoot%E9%AB%98%E7%BA%A7%E7%AF%87Redis%E4%B9%8BString%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E7%9A%84%E8%AF%BB%E5%86%99.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"3.String数据结构的读写"}],["meta",{"property":"og:description","content":"Redis目前常用的存储结构有五种，String字符串，List列表，Set集合，Hash散列，ZSet有序集合；本篇则主要集中在String这个数据结构的读写操作之上 对于String的操作，除了常见的get/set之外，还有一些比较有特色的功能，如用于实现redis分布式锁的setnx/getset方法；用于实现计数的incr/decr方法；位图算法的经典实用场景之bitmap的使用方法等也有必要了解一下"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:published_time","content":"2018-11-08T19:53:55.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3.String数据结构的读写\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-08T19:53:55.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 使用方法","slug":"i-使用方法","link":"#i-使用方法","children":[{"level":3,"title":"1. 基本配置","slug":"_1-基本配置","link":"#_1-基本配置","children":[]},{"level":3,"title":"2. Get/Set方法","slug":"_2-get-set方法","link":"#_2-get-set方法","children":[]},{"level":3,"title":"3. 计数","slug":"_3-计数","link":"#_3-计数","children":[]},{"level":3,"title":"4. bitmap操作","slug":"_4-bitmap操作","link":"#_4-bitmap操作","children":[]},{"level":3,"title":"5. 其他","slug":"_5-其他","link":"#_5-其他","children":[]}]},{"level":2,"title":"II. 简单测试","slug":"ii-简单测试","link":"#ii-简单测试","children":[]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":5.43,"words":1629},"filePathRelative":"spring/db/Redis/03.181108-SpringBoot高级篇Redis之String数据结构的读写.md","localizedDate":"2018年11月8日","excerpt":"<p>Redis目前常用的存储结构有五种，String字符串，List列表，Set集合，Hash散列，ZSet有序集合；本篇则主要集中在String这个数据结构的读写操作之上</p>\\n<p>对于String的操作，除了常见的get/set之外，还有一些比较有特色的功能，如用于实现redis分布式锁的setnx/getset方法；用于实现计数的incr/decr方法；位图算法的经典实用场景之bitmap的使用方法等也有必要了解一下</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
