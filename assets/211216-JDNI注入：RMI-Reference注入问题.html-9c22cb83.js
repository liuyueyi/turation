const e=JSON.parse('{"key":"v-bc8cce1a","path":"/java/%E5%AE%89%E5%85%A8/211216-JDNI%E6%B3%A8%E5%85%A5%EF%BC%9ARMI-Reference%E6%B3%A8%E5%85%A5%E9%97%AE%E9%A2%98.html","title":"2 JDNI注入：RMI Reference注入问题","lang":"zh-CN","frontmatter":{"order":2,"title":"2 JDNI注入：RMI Reference注入问题","tag":["Java","JNDI","RMI"],"category":["Java","JNDI"],"date":"2021-12-16T19:04:00.000Z","keywords":["Java","JNDI","RMI","注入"],"description":"前面一篇介绍了基础的RMI的使用case JDNI注入：RMI基本知识点介绍 - 一灰灰Blog，其中有说到客户端通过rmi访问server时，表现和我们常见的rpc也一致，客户端拿到代理执行的方法，也是在远程服务端执行的，怎么就存在注入问题呢? 接下来我们再来看一个知识点，RMI + Reference，利用反序列化来实现注入","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/%E5%AE%89%E5%85%A8/211216-JDNI%E6%B3%A8%E5%85%A5%EF%BC%9ARMI-Reference%E6%B3%A8%E5%85%A5%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"2 JDNI注入：RMI Reference注入问题"}],["meta",{"property":"og:description","content":"前面一篇介绍了基础的RMI的使用case JDNI注入：RMI基本知识点介绍 - 一灰灰Blog，其中有说到客户端通过rmi访问server时，表现和我们常见的rpc也一致，客户端拿到代理执行的方法，也是在远程服务端执行的，怎么就存在注入问题呢? 接下来我们再来看一个知识点，RMI + Reference，利用反序列化来实现注入"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JNDI"}],["meta",{"property":"article:tag","content":"RMI"}],["meta",{"property":"article:published_time","content":"2021-12-16T19:04:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2 JDNI注入：RMI Reference注入问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-12-16T19:04:00.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"1. Reference服务端使用姿势","slug":"_1-reference服务端使用姿势","link":"#_1-reference服务端使用姿势","children":[]},{"level":3,"title":"2. 客户端实测","slug":"_2-客户端实测","link":"#_2-客户端实测","children":[]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1060},"filePathRelative":"java/安全/211216-JDNI注入：RMI-Reference注入问题.md","localizedDate":"2021年12月16日","excerpt":"<p>前面一篇介绍了基础的RMI的使用case <a href=\\"https://blog.hhui.top/hexblog/2021/12/13/211213-JDNI%E6%B3%A8%E5%85%A5%EF%BC%9ARMI%E5%9F%BA%E6%9C%AC%E7%9F%A5%E8%AF%86%E7%82%B9%E4%BB%8B%E7%BB%8D/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JDNI注入：RMI基本知识点介绍 - 一灰灰Blog</a>，其中有说到客户端通过rmi访问server时，表现和我们常见的rpc也一致，客户端拿到代理执行的方法，也是在远程服务端执行的，怎么就存在注入问题呢?</p>\\n<p>接下来我们再来看一个知识点，RMI + Reference，利用反序列化来实现注入</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
