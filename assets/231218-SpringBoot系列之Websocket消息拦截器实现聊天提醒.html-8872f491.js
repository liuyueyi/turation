const e=JSON.parse('{"key":"v-17e85724","path":"/spring/web/WebSocket/231218-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8BWebsocket%E6%B6%88%E6%81%AF%E6%8B%A6%E6%88%AA%E5%99%A8%E5%AE%9E%E7%8E%B0%E8%81%8A%E5%A4%A9%E6%8F%90%E9%86%92.html","title":"4.SpringBoot WebSocket进阶：如何利用消息拦截器优化聊天功能？","lang":"zh-CN","frontmatter":{"order":4,"title":"4.SpringBoot WebSocket进阶：如何利用消息拦截器优化聊天功能？","tag":["WebSocket","STOMP"],"category":["WEB系列","WebSocket"],"date":"2023-12-18T14:23:43.000Z","keywords":["SpringBoot","WebSocket","STOMP"],"description":"在上一篇文章中，我们成功地为WebSocket的聊天应用添加了身份验证功能。然而，当时遗留了一个关键问题：当一个新用户加入群聊时，我们希望向群聊内的其他成员发送一条欢迎消息，以告知他们有新朋友加入了。那么，如何实现这一需求呢？ 接下来，我们将重点介绍如何使用ChannelInterceptor来实现加入/退出群聊的通知功能。","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/web/WebSocket/231218-SpringBoot%E7%B3%BB%E5%88%97%E4%B9%8BWebsocket%E6%B6%88%E6%81%AF%E6%8B%A6%E6%88%AA%E5%99%A8%E5%AE%9E%E7%8E%B0%E8%81%8A%E5%A4%A9%E6%8F%90%E9%86%92.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"4.SpringBoot WebSocket进阶：如何利用消息拦截器优化聊天功能？"}],["meta",{"property":"og:description","content":"在上一篇文章中，我们成功地为WebSocket的聊天应用添加了身份验证功能。然而，当时遗留了一个关键问题：当一个新用户加入群聊时，我们希望向群聊内的其他成员发送一条欢迎消息，以告知他们有新朋友加入了。那么，如何实现这一需求呢？ 接下来，我们将重点介绍如何使用ChannelInterceptor来实现加入/退出群聊的通知功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-22T03:01:10.000Z"}],["meta",{"property":"article:tag","content":"WebSocket"}],["meta",{"property":"article:tag","content":"STOMP"}],["meta",{"property":"article:published_time","content":"2023-12-18T14:23:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-22T03:01:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.SpringBoot WebSocket进阶：如何利用消息拦截器优化聊天功能？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-18T14:23:43.000Z\\",\\"dateModified\\":\\"2023-12-22T03:01:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 实例演示","slug":"i-实例演示","link":"#i-实例演示","children":[{"level":3,"title":"1. 项目搭建","slug":"_1-项目搭建","link":"#_1-项目搭建","children":[]},{"level":3,"title":"2. WebSocket配置","slug":"_2-websocket配置","link":"#_2-websocket配置","children":[]},{"level":3,"title":"3. 管道拦截","slug":"_3-管道拦截","link":"#_3-管道拦截","children":[]},{"level":3,"title":"4. 前端订阅/取消订阅","slug":"_4-前端订阅-取消订阅","link":"#_4-前端订阅-取消订阅","children":[]},{"level":3,"title":"5. 效果演示","slug":"_5-效果演示","link":"#_5-效果演示","children":[]},{"level":3,"title":"6. 小结","slug":"_6-小结","link":"#_6-小结","children":[]}]},{"level":2,"title":"III. 不能错过的源码和相关知识点","slug":"iii-不能错过的源码和相关知识点","link":"#iii-不能错过的源码和相关知识点","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1703214070000,"updatedTime":1703214070000,"contributors":[{"name":"wuzebang","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":8.7,"words":2611},"filePathRelative":"spring/web/WebSocket/231218-SpringBoot系列之Websocket消息拦截器实现聊天提醒.md","localizedDate":"2023年12月18日","excerpt":"<p>在上一篇文章中，我们成功地为WebSocket的聊天应用添加了身份验证功能。然而，当时遗留了一个关键问题：当一个新用户加入群聊时，我们希望向群聊内的其他成员发送一条欢迎消息，以告知他们有新朋友加入了。那么，如何实现这一需求呢？</p>\\n<p>接下来，我们将重点介绍如何使用<code>ChannelInterceptor</code>来实现加入/退出群聊的通知功能。</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
