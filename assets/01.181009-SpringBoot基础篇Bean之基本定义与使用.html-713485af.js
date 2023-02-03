const e=JSON.parse('{"key":"v-0a35ac40","path":"/spring/basic/Bean/01.181009-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87Bean%E4%B9%8B%E5%9F%BA%E6%9C%AC%E5%AE%9A%E4%B9%89%E4%B8%8E%E4%BD%BF%E7%94%A8.html","title":"1.Bean之基本定义与使用","lang":"zh-CN","frontmatter":{"order":1,"title":"1.Bean之基本定义与使用","tag":["Bean"],"category":["SpringBoot","基础系列","Bean"],"date":"2018-10-09T22:42:01.000Z","keywords":"SpringBoot,Bean","description":"我们知道在Spring中，有两个非常有名的特性，依赖注入（DI）与切面（AOP)，其中依赖注入其主要的作用，可以说就是维护Spring容器创建的Bean之间的依赖关系，简单来说就是一个bean（假定名为A）持有另一个Bean（假定名为B）的引用作为成员变量b，则由Spring容器自动将B赋值给A的成员变量b 因此在想理解依赖注入，就有必要了解下创建和使用Bean的几种姿势；本篇博文作为基础篇，将介绍 bean的基本创建方式 bean的常见使用姿势 I. Bean的几种创建方式","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/tutorial/spring/basic/Bean/01.181009-SpringBoot%E5%9F%BA%E7%A1%80%E7%AF%87Bean%E4%B9%8B%E5%9F%BA%E6%9C%AC%E5%AE%9A%E4%B9%89%E4%B8%8E%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"1.Bean之基本定义与使用"}],["meta",{"property":"og:description","content":"我们知道在Spring中，有两个非常有名的特性，依赖注入（DI）与切面（AOP)，其中依赖注入其主要的作用，可以说就是维护Spring容器创建的Bean之间的依赖关系，简单来说就是一个bean（假定名为A）持有另一个Bean（假定名为B）的引用作为成员变量b，则由Spring容器自动将B赋值给A的成员变量b 因此在想理解依赖注入，就有必要了解下创建和使用Bean的几种姿势；本篇博文作为基础篇，将介绍 bean的基本创建方式 bean的常见使用姿势 I. Bean的几种创建方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-03T13:31:05.000Z"}],["meta",{"property":"article:tag","content":"Bean"}],["meta",{"property":"article:published_time","content":"2018-10-09T22:42:01.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-03T13:31:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.Bean之基本定义与使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-09T22:42:01.000Z\\",\\"dateModified\\":\\"2023-02-03T13:31:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. Bean的几种创建方式","slug":"i-bean的几种创建方式","link":"#i-bean的几种创建方式","children":[{"level":3,"title":"1. 注解方式","slug":"_1-注解方式","link":"#_1-注解方式","children":[]},{"level":3,"title":"2. @Bean定义方式","slug":"_2-bean定义方式","link":"#_2-bean定义方式","children":[]},{"level":3,"title":"3. 工厂类方式","slug":"_3-工厂类方式","link":"#_3-工厂类方式","children":[]}]},{"level":2,"title":"II. Bean的使用姿势","slug":"ii-bean的使用姿势","link":"#ii-bean的使用姿势","children":[{"level":3,"title":"1. Autowired注入","slug":"_1-autowired注入","link":"#_1-autowired注入","children":[]},{"level":3,"title":"2. Setter方法","slug":"_2-setter方法","link":"#_2-setter方法","children":[]},{"level":3,"title":"3. 构造方法","slug":"_3-构造方法","link":"#_3-构造方法","children":[]},{"level":3,"title":"4. 小结","slug":"_4-小结","link":"#_4-小结","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"0. 项目","slug":"_0-项目","link":"#_0-项目","children":[]}]}],"git":{"createdTime":1675411610000,"updatedTime":1675431065000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":2}]},"readingTime":{"minutes":3.68,"words":1105},"filePathRelative":"spring/basic/Bean/01.181009-SpringBoot基础篇Bean之基本定义与使用.md","localizedDate":"2018年10月9日","excerpt":"<p>我们知道在Spring中，有两个非常有名的特性，依赖注入（DI）与切面（AOP)，其中依赖注入其主要的作用，可以说就是维护Spring容器创建的Bean之间的依赖关系，简单来说就是一个bean（假定名为A）持有另一个Bean（假定名为B）的引用作为成员变量b，则由Spring容器自动将B赋值给A的成员变量b</p>\\n<p>因此在想理解依赖注入，就有必要了解下创建和使用Bean的几种姿势；本篇博文作为基础篇，将介绍</p>\\n<ul>\\n<li>bean的基本创建方式</li>\\n<li>bean的常见使用姿势</li>\\n</ul>\\n<!--more-->\\n<h2> I. Bean的几种创建方式</h2>","copyright":{},"autoDesc":true}');export{e as data};
