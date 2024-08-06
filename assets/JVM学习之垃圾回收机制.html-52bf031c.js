const e=JSON.parse('{"key":"v-5da3f1f9","path":"/java/jdk/jvm/JVM%E5%AD%A6%E4%B9%A0%E4%B9%8B%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.html","title":"JVM学习之垃圾回收机制","lang":"zh-CN","frontmatter":{"title":"JVM学习之垃圾回收机制","tag":["Java","JDK"],"category":["Java","JVM"],"date":"2018-03-15T20:18:44.000Z","description":"jvm的垃圾回收算法，除了我们熟悉的引用计数判断对象是否活着之外，其他还有那些有意思的东西呢？ 总是听到的年轻代年老代又是啥？ 传说中的YoungGC(MinorGC) 和 FullGC的时机是什么，又干了些啥？ I. 对象存活判断 垃圾回收，回收的都是那些不在使用的对象（也就是没有存活的对象），因此怎么判断对象是否存活，就显得比较重要了 对这个映像最深刻的就是引用计数方式，一个对象被使用了，计数就+1；不用了，技术就-1；当计数为0的时候，就表示对象没人用了，简单粗暴，然而实际的情况中，大都不用这个方式，因为无法解决对象相互循环引用的问题","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/jdk/jvm/JVM%E5%AD%A6%E4%B9%A0%E4%B9%8B%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E6%9C%BA%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"JVM学习之垃圾回收机制"}],["meta",{"property":"og:description","content":"jvm的垃圾回收算法，除了我们熟悉的引用计数判断对象是否活着之外，其他还有那些有意思的东西呢？ 总是听到的年轻代年老代又是啥？ 传说中的YoungGC(MinorGC) 和 FullGC的时机是什么，又干了些啥？ I. 对象存活判断 垃圾回收，回收的都是那些不在使用的对象（也就是没有存活的对象），因此怎么判断对象是否存活，就显得比较重要了 对这个映像最深刻的就是引用计数方式，一个对象被使用了，计数就+1；不用了，技术就-1；当计数为0的时候，就表示对象没人用了，简单粗暴，然而实际的情况中，大都不用这个方式，因为无法解决对象相互循环引用的问题"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-06T00:41:18.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:published_time","content":"2018-03-15T20:18:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-06T00:41:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM学习之垃圾回收机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-15T20:18:44.000Z\\",\\"dateModified\\":\\"2024-08-06T00:41:18.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 对象存活判断","slug":"i-对象存活判断","link":"#i-对象存活判断","children":[]},{"level":2,"title":"II. 垃圾回收算法","slug":"ii-垃圾回收算法","link":"#ii-垃圾回收算法","children":[{"level":3,"title":"1. 标记-清除算法","slug":"_1-标记-清除算法","link":"#_1-标记-清除算法","children":[]},{"level":3,"title":"2. 复制算法","slug":"_2-复制算法","link":"#_2-复制算法","children":[]},{"level":3,"title":"3. 标记-压缩算法（或标记-整理算法）","slug":"_3-标记-压缩算法-或标记-整理算法","link":"#_3-标记-压缩算法-或标记-整理算法","children":[]},{"level":3,"title":"4. 分代收集算法","slug":"_4-分代收集算法","link":"#_4-分代收集算法","children":[]}]},{"level":2,"title":"III. 简单说下垃圾收集器","slug":"iii-简单说下垃圾收集器","link":"#iii-简单说下垃圾收集器","children":[{"level":3,"title":"1. Serial收集","slug":"_1-serial收集","link":"#_1-serial收集","children":[]},{"level":3,"title":"2. ParNew收集","slug":"_2-parnew收集","link":"#_2-parnew收集","children":[]},{"level":3,"title":"3. Parallel收集","slug":"_3-parallel收集","link":"#_3-parallel收集","children":[]},{"level":3,"title":"4. Parallel Old 收集器","slug":"_4-parallel-old-收集器","link":"#_4-parallel-old-收集器","children":[]},{"level":3,"title":"5. CMS收集器","slug":"_5-cms收集器","link":"#_5-cms收集器","children":[]},{"level":3,"title":"6. G1收集器","slug":"_6-g1收集器","link":"#_6-g1收集器","children":[]}]},{"level":2,"title":"IV. GC分析","slug":"iv-gc分析","link":"#iv-gc分析","children":[{"level":3,"title":"内存分配和回收策略","slug":"内存分配和回收策略","link":"#内存分配和回收策略","children":[]}]},{"level":2,"title":"V. 小结","slug":"v-小结","link":"#v-小结","children":[{"level":3,"title":"1. 怎么判断对象是否存活","slug":"_1-怎么判断对象是否存活","link":"#_1-怎么判断对象是否存活","children":[]},{"level":3,"title":"2. 几种回收算法对比","slug":"_2-几种回收算法对比","link":"#_2-几种回收算法对比","children":[]},{"level":3,"title":"3. CMS和G1阶段对比","slug":"_3-cms和g1阶段对比","link":"#_3-cms和g1阶段对比","children":[]},{"level":3,"title":"4. 简述内存分配和回收","slug":"_4-简述内存分配和回收","link":"#_4-简述内存分配和回收","children":[]}]}],"git":{"createdTime":1722595318000,"updatedTime":1722904878000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":9.2,"words":2760},"filePathRelative":"java/jdk/jvm/JVM学习之垃圾回收机制.md","localizedDate":"2018年3月15日","excerpt":"<p>jvm的垃圾回收算法，除了我们熟悉的引用计数判断对象是否活着之外，其他还有那些有意思的东西呢？</p>\\n<p>总是听到的年轻代年老代又是啥？</p>\\n<p>传说中的YoungGC(MinorGC) 和 FullGC的时机是什么，又干了些啥？</p>\\n<h2> I. 对象存活判断</h2>\\n<p>垃圾回收，回收的都是那些不在使用的对象（也就是没有存活的对象），因此怎么判断对象是否存活，就显得比较重要了</p>\\n<p>对这个映像最深刻的就是引用计数方式，一个对象被使用了，计数就+1；不用了，技术就-1；当计数为0的时候，就表示对象没人用了，简单粗暴，然而实际的情况中，大都不用这个方式，因为无法解决对象相互循环引用的问题</p>","copyright":{},"autoDesc":true}');export{e as data};
