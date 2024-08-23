const e=JSON.parse('{"key":"v-ae67ae2c","path":"/column/app/trace-watch-dog/05.%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF%E4%BC%A0%E9%80%92.html","title":"5. 上下文信息传递","lang":"zh-CN","frontmatter":{"order":5,"title":"5. 上下文信息传递","tag":["trace-watch-dog"],"category":["技术组件"],"date":"2024-08-23T09:19:48.000Z","keywords":["Java","trace"],"description":"前面完成的TraceRecoder支持了异步代码块的调度，接下来我们就需要重点解决一下多线程下的数据传递问题，确保异步代码块的执行过程中，不会出现各种难以理解的并发问题 1. 并发问题复现 首先我们先来看一下，TraceRecoder 会在什么场景出现问题 1.1 上下文再线程池场景下的共享异常 既然我们的工具类是支持异步代码块封装，考虑到上下文的共享，我们第一想到就是使用InheritableThreadLocal 来替代 ThreadLocal 来存储上下文信息","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/column/app/trace-watch-dog/05.%E4%B8%8A%E4%B8%8B%E6%96%87%E4%BF%A1%E6%81%AF%E4%BC%A0%E9%80%92.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"5. 上下文信息传递"}],["meta",{"property":"og:description","content":"前面完成的TraceRecoder支持了异步代码块的调度，接下来我们就需要重点解决一下多线程下的数据传递问题，确保异步代码块的执行过程中，不会出现各种难以理解的并发问题 1. 并发问题复现 首先我们先来看一下，TraceRecoder 会在什么场景出现问题 1.1 上下文再线程池场景下的共享异常 既然我们的工具类是支持异步代码块封装，考虑到上下文的共享，我们第一想到就是使用InheritableThreadLocal 来替代 ThreadLocal 来存储上下文信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T10:27:59.000Z"}],["meta",{"property":"article:tag","content":"trace-watch-dog"}],["meta",{"property":"article:published_time","content":"2024-08-23T09:19:48.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-23T10:27:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5. 上下文信息传递\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-23T09:19:48.000Z\\",\\"dateModified\\":\\"2024-08-23T10:27:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. 并发问题复现","slug":"_1-并发问题复现","link":"#_1-并发问题复现","children":[{"level":3,"title":"1.1 上下文再线程池场景下的共享异常","slug":"_1-1-上下文再线程池场景下的共享异常","link":"#_1-1-上下文再线程池场景下的共享异常","children":[]},{"level":3,"title":"1.2 解决方案","slug":"_1-2-解决方案","link":"#_1-2-解决方案","children":[]}]},{"level":2,"title":"2. 并发问题改造","slug":"_2-并发问题改造","link":"#_2-并发问题改造","children":[{"level":3,"title":"2.1 异步工具类适配","slug":"_2-1-异步工具类适配","link":"#_2-1-异步工具类适配","children":[]},{"level":3,"title":"2.2 要求使用TransmittableThreadLocal上下文","slug":"_2-2-要求使用transmittablethreadlocal上下文","link":"#_2-2-要求使用transmittablethreadlocal上下文","children":[]}]}],"git":{"createdTime":1724408879000,"updatedTime":1724408879000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":3.83,"words":1150},"filePathRelative":"column/app/trace-watch-dog/05.上下文信息传递.md","localizedDate":"2024年8月23日","excerpt":"<p>前面完成的<code>TraceRecoder</code>支持了异步代码块的调度，接下来我们就需要重点解决一下多线程下的数据传递问题，确保异步代码块的执行过程中，不会出现各种难以理解的并发问题</p>\\n<h2> 1. 并发问题复现</h2>\\n<p>首先我们先来看一下，<code>TraceRecoder</code> 会在什么场景出现问题</p>\\n<h3> 1.1 上下文再线程池场景下的共享异常</h3>\\n<p>既然我们的工具类是支持异步代码块封装，考虑到上下文的共享，我们第一想到就是使用<code>InheritableThreadLocal</code> 来替代 <code>ThreadLocal</code> 来存储上下文信息</p>","copyright":{},"autoDesc":true}');export{e as data};
