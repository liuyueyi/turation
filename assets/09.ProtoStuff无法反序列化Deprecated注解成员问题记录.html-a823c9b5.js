const t=JSON.parse('{"key":"v-42aa0636","path":"/java/%E5%BA%8F%E5%88%97%E5%8C%96/09.ProtoStuff%E6%97%A0%E6%B3%95%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96Deprecated%E6%B3%A8%E8%A7%A3%E6%88%90%E5%91%98%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95.html","title":"9. ProtoStuff无法反序列化Deprecated注解成员问题记录","lang":"zh-CN","frontmatter":{"order":9,"title":"9. ProtoStuff无法反序列化Deprecated注解成员问题记录","tag":["ProtoStuff"],"category":["Java","问题记录"],"date":"2019-08-21T19:11:24.000Z","keywords":"Java 序列化 ProtoStuff Deprecated","description":"今天开发过程中，遇到一个鬼畜的问题，在DO的某个成员上添加@Deprecated注解之后，通过ProtoStuff反序列化得到的DO中，这个成员一直为null；花了不少时间才定位这个问题，特此记录一下","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/%E5%BA%8F%E5%88%97%E5%8C%96/09.ProtoStuff%E6%97%A0%E6%B3%95%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96Deprecated%E6%B3%A8%E8%A7%A3%E6%88%90%E5%91%98%E9%97%AE%E9%A2%98%E8%AE%B0%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"9. ProtoStuff无法反序列化Deprecated注解成员问题记录"}],["meta",{"property":"og:description","content":"今天开发过程中，遇到一个鬼畜的问题，在DO的某个成员上添加@Deprecated注解之后，通过ProtoStuff反序列化得到的DO中，这个成员一直为null；花了不少时间才定位这个问题，特此记录一下"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"ProtoStuff"}],["meta",{"property":"article:published_time","content":"2019-08-21T19:11:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. ProtoStuff无法反序列化Deprecated注解成员问题记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-08-21T19:11:24.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 全程实录","slug":"i-全程实录","link":"#i-全程实录","children":[{"level":3,"title":"1. 环境相关","slug":"_1-环境相关","link":"#_1-环境相关","children":[]},{"level":3,"title":"2. 场景复现","slug":"_2-场景复现","link":"#_2-场景复现","children":[]},{"level":3,"title":"3. 兼容方案","slug":"_3-兼容方案","link":"#_3-兼容方案","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":3.01,"words":904},"filePathRelative":"java/序列化/09.ProtoStuff无法反序列化Deprecated注解成员问题记录.md","localizedDate":"2019年8月21日","excerpt":"<p>今天开发过程中，遇到一个鬼畜的问题，在DO的某个成员上添加<code>@Deprecated</code>注解之后，通过ProtoStuff反序列化得到的DO中，这个成员一直为null；花了不少时间才定位这个问题，特此记录一下</p>\\n","copyright":{},"autoDesc":true}');export{t as data};
