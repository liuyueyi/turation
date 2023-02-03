const e=JSON.parse('{"key":"v-f069b488","path":"/spring/basic/Bean/11.191023-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BBean%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F%E4%B9%8B%E9%94%99%E8%AF%AF%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E8%BE%9F%E8%B0%A3.html","title":"11.Bean加载顺序之错误使用姿势辟谣","lang":"zh-CN","frontmatter":{"order":11,"title":"11.Bean加载顺序之错误使用姿势辟谣","tag":["Bean","Order","AutoConfigureOrder"],"category":["SpringBoot","基础系列","Bean"],"date":"2019-10-23T14:55:34.000Z","keywords":"Spring SpringBoot Bean 优先级 加载顺序 @Order @AutoConfigureOrder","description":"在网上查询Bean的加载顺序时，看到了大量的文章中使用@Order注解的方式来控制bean的加载顺序，不知道写这些的博文的同学自己有没有实际的验证过，本文希望通过指出这些错误的使用姿势，让观文的小伙伴可以知道@Order的具体的应用场景","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/basic/Bean/11.191023-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BBean%E5%8A%A0%E8%BD%BD%E9%A1%BA%E5%BA%8F%E4%B9%8B%E9%94%99%E8%AF%AF%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E8%BE%9F%E8%B0%A3.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"11.Bean加载顺序之错误使用姿势辟谣"}],["meta",{"property":"og:description","content":"在网上查询Bean的加载顺序时，看到了大量的文章中使用@Order注解的方式来控制bean的加载顺序，不知道写这些的博文的同学自己有没有实际的验证过，本文希望通过指出这些错误的使用姿势，让观文的小伙伴可以知道@Order的具体的应用场景"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:tag","content":"Order"}],["meta",{"property":"article:tag","content":"AutoConfigureOrder"}],["meta",{"property":"article:published_time","content":"2019-10-23T14:55:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"11.Bean加载顺序之错误使用姿势辟谣\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-10-23T14:55:34.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 环境搭建","slug":"i-环境搭建","link":"#i-环境搭建","children":[]},{"level":2,"title":"II. 错误姿势","slug":"ii-错误姿势","link":"#ii-错误姿势","children":[{"level":3,"title":"I. @Order","slug":"i-order","link":"#i-order","children":[]},{"level":3,"title":"2. @AutoConfigureOrder","slug":"_2-autoconfigureorder","link":"#_2-autoconfigureorder","children":[]}]},{"level":2,"title":"III. 使用说明","slug":"iii-使用说明","link":"#iii-使用说明","children":[{"level":3,"title":"1. @Order","slug":"_1-order","link":"#_1-order","children":[]},{"level":3,"title":"2. @AutoConfigureOrder","slug":"_2-autoconfigureorder-1","link":"#_2-autoconfigureorder-1","children":[]}]},{"level":2,"title":"IV. 小结","slug":"iv-小结","link":"#iv-小结","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":8.43,"words":2529},"filePathRelative":"spring/basic/Bean/11.191023-SpringBoot系列教程之Bean加载顺序之错误使用姿势辟谣.md","localizedDate":"2019年10月23日","excerpt":"<p>在网上查询Bean的加载顺序时，看到了大量的文章中使用<code>@Order</code>注解的方式来控制bean的加载顺序，不知道写这些的博文的同学自己有没有实际的验证过，本文希望通过指出这些错误的使用姿势，让观文的小伙伴可以知道<code>@Order</code>的具体的应用场景</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
