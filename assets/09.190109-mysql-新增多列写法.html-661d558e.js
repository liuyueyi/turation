const a=JSON.parse(`{"key":"v-9083810e","path":"/db/mysql/skill/09.190109-mysql-%E6%96%B0%E5%A2%9E%E5%A4%9A%E5%88%97%E5%86%99%E6%B3%95.html","title":"mysql 新增多列写法","lang":"zh-CN","frontmatter":{"title":"mysql 新增多列写法","tag":["Mysql"],"category":["DB","Mysql"],"date":"2019-01-09T18:26:55.000Z","keywords":"Mysql,Alter","order":5,"description":"记录下同时新增多列的sql写法 alter table table_name add (amount decimal(20,8) NOT NULL DEFAULT '0.00000000' COMMENT '数量' , price decimal(20,8) NOT NULL DEFAULT '0.00000000' COMMENT '价格');","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/db/mysql/skill/09.190109-mysql-%E6%96%B0%E5%A2%9E%E5%A4%9A%E5%88%97%E5%86%99%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"mysql 新增多列写法"}],["meta",{"property":"og:description","content":"记录下同时新增多列的sql写法 alter table table_name add (amount decimal(20,8) NOT NULL DEFAULT '0.00000000' COMMENT '数量' , price decimal(20,8) NOT NULL DEFAULT '0.00000000' COMMENT '价格');"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:published_time","content":"2019-01-09T18:26:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql 新增多列写法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-01-09T18:26:55.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":0.24,"words":73},"filePathRelative":"db/mysql/skill/09.190109-mysql-新增多列写法.md","localizedDate":"2019年1月9日","excerpt":"<p>记录下同时新增多列的sql写法</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">alter</span> <span class=\\"token keyword\\">table</span> table_name <span class=\\"token keyword\\">add</span> <span class=\\"token punctuation\\">(</span>amount <span class=\\"token keyword\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">'0.00000000'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'数量'</span> <span class=\\"token punctuation\\">,</span> price <span class=\\"token keyword\\">decimal</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">DEFAULT</span> <span class=\\"token string\\">'0.00000000'</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">'价格'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}`);export{a as data};
