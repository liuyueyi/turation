const t=JSON.parse('{"key":"v-44b8833a","path":"/java/basic/14.Java%E6%A0%B9%E6%8D%AE%E8%B7%AF%E5%BE%84%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9.html","title":"14. Java根据路径获取文件内容","lang":"zh-CN","frontmatter":{"order":14,"title":"14. Java根据路径获取文件内容","tag":["Java"],"category":["工具","工具类"],"date":"2018-09-10T20:27:12.000Z","keywords":"JDK,FileRead,相对路径,绝对路径","description":"给出一个资源路径，然后获取资源文件的信息，可以说是非常常见的一种需求场景了，当然划分一下，本文针对最常见的三种状况进行分析 网络地址 本地绝对路径 本地相对路径 I. 实现 1. 思路 http or no-http 给出一个String表示资源文件的标识，如何判断是网络的文件还是本地的文件？ http开头的看成是网络文件 否则看做是本地文件","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/java/basic/14.Java%E6%A0%B9%E6%8D%AE%E8%B7%AF%E5%BE%84%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6%E5%86%85%E5%AE%B9.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"14. Java根据路径获取文件内容"}],["meta",{"property":"og:description","content":"给出一个资源路径，然后获取资源文件的信息，可以说是非常常见的一种需求场景了，当然划分一下，本文针对最常见的三种状况进行分析 网络地址 本地绝对路径 本地相对路径 I. 实现 1. 思路 http or no-http 给出一个String表示资源文件的标识，如何判断是网络的文件还是本地的文件？ http开头的看成是网络文件 否则看做是本地文件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T10:41:58.000Z"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2018-09-10T20:27:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T10:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"14. Java根据路径获取文件内容\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-09-10T20:27:12.000Z\\",\\"dateModified\\":\\"2024-08-02T10:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 实现","slug":"i-实现","link":"#i-实现","children":[{"level":3,"title":"1. 思路","slug":"_1-思路","link":"#_1-思路","children":[]},{"level":3,"title":"2. 实现","slug":"_2-实现","link":"#_2-实现","children":[]},{"level":3,"title":"3. 说明","slug":"_3-说明","link":"#_3-说明","children":[]}]}],"git":{"createdTime":1722595318000,"updatedTime":1722595318000,"contributors":[{"name":"yihui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":1.69,"words":506},"filePathRelative":"java/basic/14.Java根据路径获取文件内容.md","localizedDate":"2018年9月10日","excerpt":"<p>给出一个资源路径，然后获取资源文件的信息，可以说是非常常见的一种需求场景了，当然划分一下，本文针对最常见的三种状况进行分析</p>\\n<ul>\\n<li>网络地址</li>\\n<li>本地绝对路径</li>\\n<li>本地相对路径</li>\\n</ul>\\n<!--more-->\\n<h2> I. 实现</h2>\\n<h3> 1. 思路</h3>\\n<p><strong>http or no-http</strong></p>\\n<p>给出一个String表示资源文件的标识，如何判断是网络的文件还是本地的文件？</p>\\n<ul>\\n<li>http开头的看成是网络文件</li>\\n<li>否则看做是本地文件</li>\\n</ul>","copyright":{},"autoDesc":true}');export{t as data};
