const a=JSON.parse(`{"key":"v-00cb470a","path":"/spring/db/%E5%AE%9E%E4%BE%8B/02.191210-SpringBoot-Mysql-%E6%97%A0%E6%B3%95%E4%BF%9D%E5%AD%98emoj%E8%A1%A8%E6%83%85%EF%BC%9F.html","title":"2.SpringBoot+Mysql 无法保存emoj表情","lang":"zh-CN","frontmatter":{"order":2,"title":"2.SpringBoot+Mysql 无法保存emoj表情","tag":["MySql","DB"],"category":["SpringBoot","DB系列","采坑记录"],"date":"2019-12-10T18:03:41.000Z","keywords":"SpringBoot emoj utf8mb4 mysql db","description":"尤记得很久以前，想存emoj表情到mysql中，需要额外的将emoj表情转码之后保存，每次读取时，再解码还原成一下；每次这种sb的操作，真心感觉心塞，那么有没有办法直接存呢？ mysql本身可以通过选择编码集（如utfbmb4）来支持emoj表情，然而今天遇到了一个相当鬼畜的问题，表中可以直接写入emoj表情，但是通过spring boot代码塞入的emoj时，却抛出异常： Caused by: java.sql.SQLException: Incorrect string value: '\\\\xF0\\\\x9F\\\\x98\\\\x9D\\\\xE6\\\\xB1...' for column 'nick' at row 1 \\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:1084) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4232) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4164) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2615) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2776) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2838) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.PreparedStatement.executeInternal(PreparedStatement.java:2082) ~[mysql-connector-java-5.1.30.jar:na] 接下来演示一下正确的使用姿势，以及导致上面问题的错误case，避免大家重复采坑","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/db/%E5%AE%9E%E4%BE%8B/02.191210-SpringBoot-Mysql-%E6%97%A0%E6%B3%95%E4%BF%9D%E5%AD%98emoj%E8%A1%A8%E6%83%85%EF%BC%9F.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"2.SpringBoot+Mysql 无法保存emoj表情"}],["meta",{"property":"og:description","content":"尤记得很久以前，想存emoj表情到mysql中，需要额外的将emoj表情转码之后保存，每次读取时，再解码还原成一下；每次这种sb的操作，真心感觉心塞，那么有没有办法直接存呢？ mysql本身可以通过选择编码集（如utfbmb4）来支持emoj表情，然而今天遇到了一个相当鬼畜的问题，表中可以直接写入emoj表情，但是通过spring boot代码塞入的emoj时，却抛出异常： Caused by: java.sql.SQLException: Incorrect string value: '\\\\xF0\\\\x9F\\\\x98\\\\x9D\\\\xE6\\\\xB1...' for column 'nick' at row 1 \\tat com.mysql.jdbc.SQLError.createSQLException(SQLError.java:1084) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4232) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.checkErrorPacket(MysqlIO.java:4164) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.sendCommand(MysqlIO.java:2615) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.MysqlIO.sqlQueryDirect(MysqlIO.java:2776) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.ConnectionImpl.execSQL(ConnectionImpl.java:2838) ~[mysql-connector-java-5.1.30.jar:na] \\tat com.mysql.jdbc.PreparedStatement.executeInternal(PreparedStatement.java:2082) ~[mysql-connector-java-5.1.30.jar:na] 接下来演示一下正确的使用姿势，以及导致上面问题的错误case，避免大家重复采坑"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T10:09:21.000Z"}],["meta",{"property":"article:tag","content":"MySql"}],["meta",{"property":"article:tag","content":"DB"}],["meta",{"property":"article:published_time","content":"2019-12-10T18:03:41.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T10:09:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.SpringBoot+Mysql 无法保存emoj表情\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-12-10T18:03:41.000Z\\",\\"dateModified\\":\\"2023-02-03T10:09:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. Emoj表情支持之旅","slug":"i-emoj表情支持之旅","link":"#i-emoj表情支持之旅","children":[{"level":3,"title":"1. 表字符集","slug":"_1-表字符集","link":"#_1-表字符集","children":[]},{"level":3,"title":"2. SpringBoot支持","slug":"_2-springboot支持","link":"#_2-springboot支持","children":[]},{"level":3,"title":"3. 场景复现","slug":"_3-场景复现","link":"#_3-场景复现","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675418961000,"updatedTime":1675418961000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":4.32,"words":1297},"filePathRelative":"spring/db/实例/02.191210-SpringBoot-Mysql-无法保存emoj表情？.md","localizedDate":"2019年12月10日","excerpt":"<p>尤记得很久以前，想存emoj表情到mysql中，需要额外的将emoj表情转码之后保存，每次读取时，再解码还原成一下；每次这种sb的操作，真心感觉心塞，那么有没有办法直接存呢？</p>\\n<p>mysql本身可以通过选择编码集（如utfbmb4）来支持emoj表情，然而今天遇到了一个相当鬼畜的问题，表中可以直接写入emoj表情，但是通过spring boot代码塞入的emoj时，却抛出异常：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>Caused by: java.sql.SQLException: Incorrect string value: <span class=\\"token string\\">'\\\\xF0\\\\x9F\\\\x98\\\\x9D\\\\xE6\\\\xB1...'</span> <span class=\\"token keyword\\">for</span> <span class=\\"token function\\">column</span> <span class=\\"token string\\">'nick'</span> at row <span class=\\"token number\\">1</span>\\n\\tat com.mysql.jdbc.SQLError.createSQLException<span class=\\"token punctuation\\">(</span>SQLError.java:1084<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.MysqlIO.checkErrorPacket<span class=\\"token punctuation\\">(</span>MysqlIO.java:4232<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.MysqlIO.checkErrorPacket<span class=\\"token punctuation\\">(</span>MysqlIO.java:4164<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.MysqlIO.sendCommand<span class=\\"token punctuation\\">(</span>MysqlIO.java:2615<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.MysqlIO.sqlQueryDirect<span class=\\"token punctuation\\">(</span>MysqlIO.java:2776<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.ConnectionImpl.execSQL<span class=\\"token punctuation\\">(</span>ConnectionImpl.java:2838<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n\\tat com.mysql.jdbc.PreparedStatement.executeInternal<span class=\\"token punctuation\\">(</span>PreparedStatement.java:2082<span class=\\"token punctuation\\">)</span> ~<span class=\\"token punctuation\\">[</span>mysql-connector-java-5.1.30.jar:na<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>接下来演示一下正确的使用姿势，以及导致上面问题的错误case，避免大家重复采坑</p>\\n","copyright":{},"autoDesc":true}`);export{a as data};
