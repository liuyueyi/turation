const s=JSON.parse('{"key":"v-223f64d9","path":"/java/basic/15.ArrayList-sublist%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html","title":"15. ArrayList#sublist的推荐使用姿势","lang":"zh-CN","frontmatter":{"order":15,"title":"15. ArrayList#sublist的推荐使用姿势","tag":["JDK"],"category":["Java","JDK","容器"],"date":"2019-05-15T20:22:39.000Z","keywords":"Java,ArrayList,JDK,sublist,深拷贝,浅拷贝,System.copy","description":"我们有这么一个场景，给你一个列表，可以动态的新增，但是最终要求列表升序，要求长度小于20，可以怎么做？ 这个还不简单，几行代码就可以了 public List&lt;Integer&gt; trimList(List&lt;Integer&gt; list, int add) { list.add(add); list.sort(null); if (list.size() &gt; 20) { list = list.subList(0, 20); } return list; }","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/basic/15.ArrayList-sublist%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"15. ArrayList#sublist的推荐使用姿势"}],["meta",{"property":"og:description","content":"我们有这么一个场景，给你一个列表，可以动态的新增，但是最终要求列表升序，要求长度小于20，可以怎么做？ 这个还不简单，几行代码就可以了 public List&lt;Integer&gt; trimList(List&lt;Integer&gt; list, int add) { list.add(add); list.sort(null); if (list.size() &gt; 20) { list = list.subList(0, 20); } return list; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:published_time","content":"2019-05-15T20:22:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15. ArrayList#sublist的推荐使用姿势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-05-15T20:22:39.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"1. 测试验证","slug":"_1-测试验证","link":"#_1-测试验证","children":[]},{"level":3,"title":"2. SubList 方法揭秘","slug":"_2-sublist-方法揭秘","link":"#_2-sublist-方法揭秘","children":[]},{"level":3,"title":"3. 正确使用姿势","slug":"_3-正确使用姿势","link":"#_3-正确使用姿势","children":[]},{"level":3,"title":"4. 知识点扩展","slug":"_4-知识点扩展","link":"#_4-知识点扩展","children":[]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1492},"filePathRelative":"java/basic/15.ArrayList-sublist推荐使用姿势.md","localizedDate":"2019年5月15日","excerpt":"<p>我们有这么一个场景，给你一个列表，可以动态的新增，但是最终要求列表升序，要求长度小于20，可以怎么做？</p>\\n<p>这个还不简单，几行代码就可以了</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token function\\">trimList</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Integer</span><span class=\\"token punctuation\\">&gt;</span></span> list<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> add<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>add<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sort</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">size</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        list <span class=\\"token operator\\">=</span> list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">subList</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">return</span> list<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{s as data};
