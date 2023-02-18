const e=JSON.parse('{"key":"v-1c5995e4","path":"/java/skill/24.%E5%9F%BA%E4%BA%8EJDK%E7%9A%84LRU%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0.html","title":"24.基于JDK的LRU算法实现","lang":"zh-CN","frontmatter":{"title":"24.基于JDK的LRU算法实现","order":24,"tag":["JDK","编程技巧"],"category":["Java","编程技巧"],"date":"2021-10-21T18:54:08.000Z","keywords":["Java","LRU"],"description":"实战24： 基于JDK的LRU算法实现 1. LRU算法 缓存淘汰算法--LRU算法LRU（Least recently used，最近最少使用）算法 根据数据的历史访问记录来进行淘汰数据，其核心思想是\\"如果数据最近被访问过，那么将来被访问的几率也更高\\" 再Java中可以非常简单的实现LRU算法，主要利用的是LinkedHashMap容器 1.1 LRU算法实现 inkedHashMap底层就是用的HashMap加双链表实现的，而且本身已经实现了按照访问顺序的存储。此外，LinkedHashMap中本身就实现了一个方法removeEldestEntry用于判断是否需要移除最不常读取的数，方法默认是直接返回false，不会移除元素","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/skill/24.%E5%9F%BA%E4%BA%8EJDK%E7%9A%84LRU%E7%AE%97%E6%B3%95%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"24.基于JDK的LRU算法实现"}],["meta",{"property":"og:description","content":"实战24： 基于JDK的LRU算法实现 1. LRU算法 缓存淘汰算法--LRU算法LRU（Least recently used，最近最少使用）算法 根据数据的历史访问记录来进行淘汰数据，其核心思想是\\"如果数据最近被访问过，那么将来被访问的几率也更高\\" 再Java中可以非常简单的实现LRU算法，主要利用的是LinkedHashMap容器 1.1 LRU算法实现 inkedHashMap底层就是用的HashMap加双链表实现的，而且本身已经实现了按照访问顺序的存储。此外，LinkedHashMap中本身就实现了一个方法removeEldestEntry用于判断是否需要移除最不常读取的数，方法默认是直接返回false，不会移除元素"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T14:22:08.000Z"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:tag","content":"编程技巧"}],["meta",{"property":"article:published_time","content":"2021-10-21T18:54:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T14:22:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"24.基于JDK的LRU算法实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-21T18:54:08.000Z\\",\\"dateModified\\":\\"2023-02-17T14:22:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. LRU算法","slug":"_1-lru算法","link":"#_1-lru算法","children":[{"level":3,"title":"1.1 LRU算法实现","slug":"_1-1-lru算法实现","link":"#_1-1-lru算法实现","children":[]},{"level":3,"title":"1.2 小结","slug":"_1-2-小结","link":"#_1-2-小结","children":[]}]}],"git":{"createdTime":1676643728000,"updatedTime":1676643728000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":2.07,"words":620},"filePathRelative":"java/skill/24.基于JDK的LRU算法实现.md","localizedDate":"2021年10月21日","excerpt":"<h1> 实战24： 基于JDK的LRU算法实现</h1>\\n<h2> 1. LRU算法</h2>\\n<p>缓存淘汰算法--LRU算法LRU（Least recently used，最近最少使用）算法</p>\\n<p>根据数据的历史访问记录来进行淘汰数据，其核心思想是\\"如果数据最近被访问过，那么将来被访问的几率也更高\\"</p>\\n<p>再Java中可以非常简单的实现LRU算法，主要利用的是LinkedHashMap容器</p>\\n<h3> 1.1 LRU算法实现</h3>\\n<p>inkedHashMap底层就是用的HashMap加双链表实现的，而且本身已经实现了按照访问顺序的存储。此外，LinkedHashMap中本身就实现了一个方法removeEldestEntry用于判断是否需要移除最不常读取的数，方法默认是直接返回false，不会移除元素</p>","copyright":{},"autoDesc":true}');export{e as data};
