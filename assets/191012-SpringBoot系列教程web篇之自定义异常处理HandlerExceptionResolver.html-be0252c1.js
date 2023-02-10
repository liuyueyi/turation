const e=JSON.parse('{"key":"v-1b790b9c","path":"/spring/web/Response/191012-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86HandlerExceptionResolver.html","title":"8.自定义异常处理HandlerExceptionResolver","lang":"zh-CN","frontmatter":{"order":8,"title":"8.自定义异常处理HandlerExceptionResolver","tag":["Web","异常处理"],"category":["SpringBoot","WEB系列","Response"],"date":"2019-10-12T19:53:50.000Z","keywords":"异常处理 SpringBoot Spring ControllerAdvice ExceptionHandler ResponseStatus NoHandlerFoundException HandlerExceptionResolver","description":"关于Web应用的全局异常处理，上一篇介绍了ControllerAdvice结合@ExceptionHandler的方式来实现web应用的全局异常管理； 本篇博文则带来另外一种并不常见的使用方式，通过实现自定义的HandlerExceptionResolver，来处理异常状态 上篇博文链接: SpringBoot系列教程web篇之全局异常处理","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/web/Response/191012-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8Bweb%E7%AF%87%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86HandlerExceptionResolver.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"8.自定义异常处理HandlerExceptionResolver"}],["meta",{"property":"og:description","content":"关于Web应用的全局异常处理，上一篇介绍了ControllerAdvice结合@ExceptionHandler的方式来实现web应用的全局异常管理； 本篇博文则带来另外一种并不常见的使用方式，通过实现自定义的HandlerExceptionResolver，来处理异常状态 上篇博文链接: SpringBoot系列教程web篇之全局异常处理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-10T04:50:05.000Z"}],["meta",{"property":"article:tag","content":"Web"}],["meta",{"property":"article:tag","content":"异常处理"}],["meta",{"property":"article:published_time","content":"2019-10-12T19:53:50.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-10T04:50:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"8.自定义异常处理HandlerExceptionResolver\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-12T19:53:50.000Z\\",\\"dateModified\\":\\"2023-02-10T04:50:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 环境搭建","slug":"i-环境搭建","link":"#i-环境搭建","children":[]},{"level":2,"title":"II. HandlerExceptionResolver","slug":"ii-handlerexceptionresolver","link":"#ii-handlerexceptionresolver","children":[{"level":3,"title":"1. 自定义异常处理","slug":"_1-自定义异常处理","link":"#_1-自定义异常处理","children":[]},{"level":3,"title":"2. 测试case","slug":"_2-测试case","link":"#_2-测试case","children":[]},{"level":3,"title":"3. 小结","slug":"_3-小结","link":"#_3-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[]}],"git":{"createdTime":1676004605000,"updatedTime":1676004605000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":6.29,"words":1888},"filePathRelative":"spring/web/Response/191012-SpringBoot系列教程web篇之自定义异常处理HandlerExceptionResolver.md","localizedDate":"2019年10月12日","excerpt":"<p>关于Web应用的全局异常处理，上一篇介绍了<code>ControllerAdvice</code>结合<code>@ExceptionHandler</code>的方式来实现web应用的全局异常管理；</p>\\n<p>本篇博文则带来另外一种并不常见的使用方式，通过实现自定义的<code>HandlerExceptionResolver</code>，来处理异常状态</p>\\n<blockquote>\\n<p>上篇博文链接: <a href=\\"https://mp.weixin.qq.com/s?__biz=MzU3MTAzNTMzMQ==&amp;mid=2247484344&amp;idx=1&amp;sn=d4b1422a709d9540583e33443aab6fff&amp;chksm=fce71814cb9091025a960312c878ff9fc4f44fd0035aa597f55f37c90dcbac25a3e96ee2c528&amp;token=118864495&amp;lang=zh_CN#rd\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">SpringBoot系列教程web篇之全局异常处理</a></p>\\n</blockquote>\\n","copyright":{},"autoDesc":true}');export{e as data};
