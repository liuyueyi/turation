const e=JSON.parse('{"key":"v-ecca9172","path":"/db/mysql/learning/02.180322-mysql%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95%E5%AD%A6%E4%B9%A0%E5%B0%8F%E7%BB%93.html","title":"mysql基本语法学习小结","lang":"zh-CN","frontmatter":{"title":"mysql基本语法学习小结","tag":["Mysql"],"category":["DB","Mysql"],"date":"2018-03-22T09:29:58.000Z","order":1,"description":"本篇将主要集中在mysql的使用上，包括如何创建标，如何进行insert,update,select,delete，以及一些常见的sql中关键字的使用姿势 I. 数据库管理相关 首先是从结构上知晓，一般的关系型数据库，先创建database(数据库), 然后可以在database中创建多个table(表) 通常，在业务稍微大一点的公司而言，不会把所有的数据都放在一个database中，相反会根据不同的业务，创建不同的database，然后在各自的database中维护自己的表，好处就是不会相互影响，后续扩容也方便","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/db/mysql/learning/02.180322-mysql%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95%E5%AD%A6%E4%B9%A0%E5%B0%8F%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"mysql基本语法学习小结"}],["meta",{"property":"og:description","content":"本篇将主要集中在mysql的使用上，包括如何创建标，如何进行insert,update,select,delete，以及一些常见的sql中关键字的使用姿势 I. 数据库管理相关 首先是从结构上知晓，一般的关系型数据库，先创建database(数据库), 然后可以在database中创建多个table(表) 通常，在业务稍微大一点的公司而言，不会把所有的数据都放在一个database中，相反会根据不同的业务，创建不同的database，然后在各自的database中维护自己的表，好处就是不会相互影响，后续扩容也方便"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"Mysql"}],["meta",{"property":"article:published_time","content":"2018-03-22T09:29:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mysql基本语法学习小结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-03-22T09:29:58.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 数据库管理相关","slug":"i-数据库管理相关","link":"#i-数据库管理相关","children":[{"level":3,"title":"1. 创建database","slug":"_1-创建database","link":"#_1-创建database","children":[]},{"level":3,"title":"2. 切换databasae","slug":"_2-切换databasae","link":"#_2-切换databasae","children":[]},{"level":3,"title":"3. 删除database","slug":"_3-删除database","link":"#_3-删除database","children":[]},{"level":3,"title":"4. 显示所有数据库","slug":"_4-显示所有数据库","link":"#_4-显示所有数据库","children":[]}]},{"level":2,"title":"II. 表相关","slug":"ii-表相关","link":"#ii-表相关","children":[{"level":3,"title":"1. 创建表","slug":"_1-创建表","link":"#_1-创建表","children":[]},{"level":3,"title":"2. 显示表信息","slug":"_2-显示表信息","link":"#_2-显示表信息","children":[]},{"level":3,"title":"3. 修改表","slug":"_3-修改表","link":"#_3-修改表","children":[]},{"level":3,"title":"4. 增删改查","slug":"_4-增删改查","link":"#_4-增删改查","children":[]}]},{"level":2,"title":"III. 玩出花的查询语句","slug":"iii-玩出花的查询语句","link":"#iii-玩出花的查询语句","children":[{"level":3,"title":"1. 基本查询","slug":"_1-基本查询","link":"#_1-基本查询","children":[]},{"level":3,"title":"2. 跨表查询","slug":"_2-跨表查询","link":"#_2-跨表查询","children":[]}]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":8.17,"words":2452},"filePathRelative":"db/mysql/learning/02.180322-mysql基本语法学习小结.md","localizedDate":"2018年3月22日","excerpt":"<p>本篇将主要集中在mysql的使用上，包括如何创建标，如何进行insert,update,select,delete，以及一些常见的sql中关键字的使用姿势</p>\\n<!--more-->\\n<h2> I. 数据库管理相关</h2>\\n<p>首先是从结构上知晓，一般的关系型数据库，先创建database(数据库), 然后可以在database中创建多个table(表)</p>\\n<p>通常，在业务稍微大一点的公司而言，不会把所有的数据都放在一个database中，相反会根据不同的业务，创建不同的database，然后在各自的database中维护自己的表，好处就是不会相互影响，后续扩容也方便</p>","copyright":{},"autoDesc":true}');export{e as data};
