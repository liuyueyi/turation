const t=JSON.parse('{"key":"v-4ed6f6f2","path":"/spring/db/%E5%9F%BA%E7%A1%80/230719-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8BDB%E6%89%A7%E8%A1%8C%E6%97%A5%E5%BF%97%E6%89%93%E5%8D%B0%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"5.SQL执行日志打印的几种方式","lang":"zh-CN","frontmatter":{"order":5,"title":"5.SQL执行日志打印的几种方式","tag":["Mybatis"],"category":["SpringBoot","DB系列","Mybatis"],"date":"2023-07-19T08:52:04.000Z","keywords":["Mybatis"],"description":"sql日志打印，再我们日常排查问题时，某些时候帮助可以说是非常大的，那么一般的Spring项目中，可以怎么打印执行的sql日志呢？ 本文将介绍三种sql日志打印的方式： Druid打印sql日志 Mybatis自带的日志输出 基于拦截器实现sql日志输出","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/db/%E5%9F%BA%E7%A1%80/230719-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8BDB%E6%89%A7%E8%A1%8C%E6%97%A5%E5%BF%97%E6%89%93%E5%8D%B0%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"5.SQL执行日志打印的几种方式"}],["meta",{"property":"og:description","content":"sql日志打印，再我们日常排查问题时，某些时候帮助可以说是非常大的，那么一般的Spring项目中，可以怎么打印执行的sql日志呢？ 本文将介绍三种sql日志打印的方式： Druid打印sql日志 Mybatis自带的日志输出 基于拦截器实现sql日志输出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-22T01:52:53.000Z"}],["meta",{"property":"article:tag","content":"Mybatis"}],["meta",{"property":"article:published_time","content":"2023-07-19T08:52:04.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-22T01:52:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.SQL执行日志打印的几种方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-19T08:52:04.000Z\\",\\"dateModified\\":\\"2023-09-22T01:52:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 项目配置","slug":"i-项目配置","link":"#i-项目配置","children":[{"level":3,"title":"1. 依赖","slug":"_1-依赖","link":"#_1-依赖","children":[]},{"level":3,"title":"2. 配置","slug":"_2-配置","link":"#_2-配置","children":[]}]},{"level":2,"title":"II. 实例","slug":"ii-实例","link":"#ii-实例","children":[{"level":3,"title":"1. mybatis默认配置","slug":"_1-mybatis默认配置","link":"#_1-mybatis默认配置","children":[]},{"level":3,"title":"2. Druid日志输出","slug":"_2-druid日志输出","link":"#_2-druid日志输出","children":[]},{"level":3,"title":"3. 基于Mybatis的Interceptor实现方案","slug":"_3-基于mybatis的interceptor实现方案","link":"#_3-基于mybatis的interceptor实现方案","children":[]},{"level":3,"title":"3. 小结","slug":"_3-小结","link":"#_3-小结","children":[]}]},{"level":2,"title":"III. 不能错过的源码和相关知识点","slug":"iii-不能错过的源码和相关知识点","link":"#iii-不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1695290131000,"updatedTime":1695347573000,"contributors":[{"name":"wuzebang","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":6.97,"words":2092},"filePathRelative":"spring/db/基础/230719-SpringBoot系列之DB执行日志打印的几种方式.md","localizedDate":"2023年7月19日","excerpt":"<p>sql日志打印，再我们日常排查问题时，某些时候帮助可以说是非常大的，那么一般的Spring项目中，可以怎么打印执行的sql日志呢？</p>\\n<p>本文将介绍三种sql日志打印的方式：</p>\\n<ol>\\n<li>Druid打印sql日志</li>\\n<li>Mybatis自带的日志输出</li>\\n<li>基于拦截器实现sql日志输出</li>\\n</ol>\\n","copyright":{},"autoDesc":true}');export{t as data};
