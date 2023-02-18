const a=JSON.parse('{"key":"v-0e78bd2b","path":"/java/skill/02.%E6%95%B0%E7%BB%84%E4%B8%8Elist%E4%BA%92%E8%BD%AC.html","title":"2. 数组与list互转","lang":"zh-CN","frontmatter":{"title":"2. 数组与list互转","order":2,"tag":["JDK","编程技巧"],"category":["Java","编程技巧"],"date":"2021-08-10T08:42:44.000Z","keywords":"jdk string list collection java 实战 编程","description":"实战2：数组与list互转 这个考题比较常见，也比较简单，难道就这也有什么可以说到的门路不成？ 接下来本文好好的说一说它的几种实现姿势，总有一款你喜欢的 1.数组转List 1.1. Array.asList 这个考题太简单了，直接使用Array.asList不就完事了么，比如 @Test public void ary2list() { String[] ary = new String[]{ \\"1\\", \\"a\\"}; List&lt;String&gt; list = Arrays.asList((ary); System.out.println(list); }","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/skill/02.%E6%95%B0%E7%BB%84%E4%B8%8Elist%E4%BA%92%E8%BD%AC.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"2. 数组与list互转"}],["meta",{"property":"og:description","content":"实战2：数组与list互转 这个考题比较常见，也比较简单，难道就这也有什么可以说到的门路不成？ 接下来本文好好的说一说它的几种实现姿势，总有一款你喜欢的 1.数组转List 1.1. Array.asList 这个考题太简单了，直接使用Array.asList不就完事了么，比如 @Test public void ary2list() { String[] ary = new String[]{ \\"1\\", \\"a\\"}; List&lt;String&gt; list = Arrays.asList((ary); System.out.println(list); }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-17T14:22:08.000Z"}],["meta",{"property":"article:tag","content":"JDK"}],["meta",{"property":"article:tag","content":"编程技巧"}],["meta",{"property":"article:published_time","content":"2021-08-10T08:42:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-17T14:22:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2. 数组与list互转\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-08-10T08:42:44.000Z\\",\\"dateModified\\":\\"2023-02-17T14:22:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.数组转List","slug":"_1-数组转list","link":"#_1-数组转list","children":[{"level":3,"title":"1.1. Array.asList","slug":"_1-1-array-aslist","link":"#_1-1-array-aslist","children":[]},{"level":3,"title":"1.2. new ArrayList","slug":"_1-2-new-arraylist","link":"#_1-2-new-arraylist","children":[]},{"level":3,"title":"1.3. Collections.addAll","slug":"_1-3-collections-addall","link":"#_1-3-collections-addall","children":[]}]},{"level":2,"title":"2. 列表转数组","slug":"_2-列表转数组","link":"#_2-列表转数组","children":[]},{"level":2,"title":"3. 小结","slug":"_3-小结","link":"#_3-小结","children":[]}],"git":{"createdTime":1676643728000,"updatedTime":1676643728000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":3.94,"words":1183},"filePathRelative":"java/skill/02.数组与list互转.md","localizedDate":"2021年8月10日","excerpt":"<h1> 实战2：数组与list互转</h1>\\n<p>这个考题比较常见，也比较简单，难道就这也有什么可以说到的门路不成？</p>\\n<p>接下来本文好好的说一说它的几种实现姿势，总有一款你喜欢的</p>\\n<h2> 1.数组转List</h2>\\n<h3> 1.1. Array.asList</h3>\\n<p>这个考题太简单了，直接使用<code>Array.asList</code>不就完事了么，比如</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token annotation punctuation\\">@Test</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">ary2list</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> ary <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">{</span> <span class=\\"token string\\">\\"1\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"a\\"</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">List</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span> list <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Arrays</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">asList</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span>ary<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>list<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
