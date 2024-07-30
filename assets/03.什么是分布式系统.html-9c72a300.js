const e=JSON.parse('{"key":"v-72d14eba","path":"/column/arch/distribute/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/03.%E4%BB%80%E4%B9%88%E6%98%AF%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F.html","title":"什么是分布式系统","lang":"zh-CN","frontmatter":{"order":3,"title":"什么是分布式系统","tag":["分布式"],"category":["分布式","设计模式"],"date":"2022-08-13T19:27:54.000Z","keywords":["分布式","设计模式"],"description":"分布式的概念存在年头有点久了，在正式进入我们《分布式专栏》之前，感觉有必要来聊一聊，什么是分布式，分布式特点是什么，它又有哪些问题，在了解完这个概念之后，再去看它的架构设计，理论奠基可能帮助会更大 本文将作为专栏的第0篇，将从三个方面来讲述一下我理解的\\"分布式系统\\" 分布式系统的特点 分布式系统面临的挑战 如何衡量一个分布式系统 1.分布式系统特点 什么是分布式系统，看一下wiki上的描述 1.1 定义 分布式系统（distributed system）是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/column/arch/distribute/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/03.%E4%BB%80%E4%B9%88%E6%98%AF%E5%88%86%E5%B8%83%E5%BC%8F%E7%B3%BB%E7%BB%9F.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"什么是分布式系统"}],["meta",{"property":"og:description","content":"分布式的概念存在年头有点久了，在正式进入我们《分布式专栏》之前，感觉有必要来聊一聊，什么是分布式，分布式特点是什么，它又有哪些问题，在了解完这个概念之后，再去看它的架构设计，理论奠基可能帮助会更大 本文将作为专栏的第0篇，将从三个方面来讲述一下我理解的\\"分布式系统\\" 分布式系统的特点 分布式系统面临的挑战 如何衡量一个分布式系统 1.分布式系统特点 什么是分布式系统，看一下wiki上的描述 1.1 定义 分布式系统（distributed system）是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-29T08:58:55.000Z"}],["meta",{"property":"article:tag","content":"分布式"}],["meta",{"property":"article:published_time","content":"2022-08-13T19:27:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-29T08:58:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"什么是分布式系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-13T19:27:54.000Z\\",\\"dateModified\\":\\"2024-07-29T08:58:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.分布式系统特点","slug":"_1-分布式系统特点","link":"#_1-分布式系统特点","children":[{"level":3,"title":"1.1 定义","slug":"_1-1-定义","link":"#_1-1-定义","children":[]},{"level":3,"title":"1.2 分布性","slug":"_1-2-分布性","link":"#_1-2-分布性","children":[]},{"level":3,"title":"1.3 对等性","slug":"_1-3-对等性","link":"#_1-3-对等性","children":[]},{"level":3,"title":"1.4 自治性","slug":"_1-4-自治性","link":"#_1-4-自治性","children":[]},{"level":3,"title":"1.5 并发性","slug":"_1-5-并发性","link":"#_1-5-并发性","children":[]}]},{"level":2,"title":"2. 分布式系统面临的问题","slug":"_2-分布式系统面临的问题","link":"#_2-分布式系统面临的问题","children":[{"level":3,"title":"2.1 全局时钟","slug":"_2-1-全局时钟","link":"#_2-1-全局时钟","children":[]},{"level":3,"title":"2.2 网络延迟、异常","slug":"_2-2-网络延迟、异常","link":"#_2-2-网络延迟、异常","children":[]},{"level":3,"title":"2.3 数据一致性","slug":"_2-3-数据一致性","link":"#_2-3-数据一致性","children":[]},{"level":3,"title":"2.4 节点异常","slug":"_2-4-节点异常","link":"#_2-4-节点异常","children":[]},{"level":3,"title":"2.5 资源竞争","slug":"_2-5-资源竞争","link":"#_2-5-资源竞争","children":[]},{"level":3,"title":"2.6 全局协调","slug":"_2-6-全局协调","link":"#_2-6-全局协调","children":[]},{"level":3,"title":"2.7 一灰灰的小结","slug":"_2-7-一灰灰的小结","link":"#_2-7-一灰灰的小结","children":[]}]},{"level":2,"title":"3. 分布式系统的衡量指标","slug":"_3-分布式系统的衡量指标","link":"#_3-分布式系统的衡量指标","children":[{"level":3,"title":"3.1 性能指标","slug":"_3-1-性能指标","link":"#_3-1-性能指标","children":[]},{"level":3,"title":"3.2 可用性","slug":"_3-2-可用性","link":"#_3-2-可用性","children":[]},{"level":3,"title":"3.3 扩展性","slug":"_3-3-扩展性","link":"#_3-3-扩展性","children":[]},{"level":3,"title":"3.4 一致性","slug":"_3-4-一致性","link":"#_3-4-一致性","children":[]}]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":1722243535000,"updatedTime":1722243535000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":9.19,"words":2758},"filePathRelative":"column/arch/distribute/设计模式/03.什么是分布式系统.md","localizedDate":"2022年8月13日","excerpt":"<p>分布式的概念存在年头有点久了，在正式进入我们《分布式专栏》之前，感觉有必要来聊一聊，什么是分布式，分布式特点是什么，它又有哪些问题，在了解完这个概念之后，再去看它的架构设计，理论奠基可能帮助会更大</p>\\n<p>本文将作为专栏的第0篇，将从三个方面来讲述一下我理解的\\"分布式系统\\"</p>\\n<ul>\\n<li>分布式系统的特点</li>\\n<li>分布式系统面临的挑战</li>\\n<li>如何衡量一个分布式系统</li>\\n</ul>\\n<h2> 1.分布式系统特点</h2>\\n<p>什么是分布式系统，看一下wiki上的描述</p>\\n<h3> 1.1 定义</h3>\\n<p>分布式系统（distributed system）是建立在网络之上的软件系统。正是因为软件的特性，所以分布式系统具有高度的内聚性和透明性。因此，网络和分布式系统之间的区别更多的在于高层软件（特别是操作系统），而不是硬件</p>","copyright":{},"autoDesc":true}');export{e as data};
