const e=JSON.parse('{"key":"v-302fbd65","path":"/spring/mq/RabbitMq/200318-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BRabbitListener%E6%B6%88%E8%B4%B9%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E4%BB%8B%E7%BB%8D.html","title":"5.RabbitListener消费基本使用姿势","lang":"zh-CN","frontmatter":{"order":5,"title":"5.RabbitListener消费基本使用姿势","tag":["RabbitMq"],"category":["SpringBoot","MQ系列","RabbitMq"],"date":"2020-03-18T19:58:38.000Z","keywords":"RabbitMq SpringBoot RabbitListener Consumer Publisher","description":"之前介绍了rabbitmq的消息发送姿势，既然有发送，当然就得有消费者，在SpringBoot环境下，消费可以说比较简单了，借助@RabbitListener注解，基本上可以满足你90%以上的业务开发需求 下面我们来看一下@RabbitListener的最最常用使用姿势","head":[["meta",{"property":"og:url","content":"https://liuyueyi.github.io/tutorial/spring/mq/RabbitMq/200318-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BRabbitListener%E6%B6%88%E8%B4%B9%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E5%A7%BF%E5%8A%BF%E4%BB%8B%E7%BB%8D.html"}],["meta",{"property":"og:site_name","content":"一灰灰的站点"}],["meta",{"property":"og:title","content":"5.RabbitListener消费基本使用姿势"}],["meta",{"property":"og:description","content":"之前介绍了rabbitmq的消息发送姿势，既然有发送，当然就得有消费者，在SpringBoot环境下，消费可以说比较简单了，借助@RabbitListener注解，基本上可以满足你90%以上的业务开发需求 下面我们来看一下@RabbitListener的最最常用使用姿势"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-10T04:50:05.000Z"}],["meta",{"property":"article:tag","content":"RabbitMq"}],["meta",{"property":"article:published_time","content":"2020-03-18T19:58:38.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-10T04:50:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.RabbitListener消费基本使用姿势\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-03-18T19:58:38.000Z\\",\\"dateModified\\":\\"2023-02-10T04:50:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"I. 配置","slug":"i-配置","link":"#i-配置","children":[]},{"level":2,"title":"II. 消费姿势","slug":"ii-消费姿势","link":"#ii-消费姿势","children":[{"level":3,"title":"0. mock数据","slug":"_0-mock数据","link":"#_0-mock数据","children":[]},{"level":3,"title":"1. case1: exchange, queue已存在","slug":"_1-case1-exchange-queue已存在","link":"#_1-case1-exchange-queue已存在","children":[]},{"level":3,"title":"2. case2: queue不存在","slug":"_2-case2-queue不存在","link":"#_2-case2-queue不存在","children":[]},{"level":3,"title":"3. case3: ack","slug":"_3-case3-ack","link":"#_3-case3-ack","children":[]},{"level":3,"title":"4. case4: manual ack","slug":"_4-case4-manual-ack","link":"#_4-case4-manual-ack","children":[]},{"level":3,"title":"5. case5: 并发消费","slug":"_5-case5-并发消费","link":"#_5-case5-并发消费","children":[]},{"level":3,"title":"6. 测试","slug":"_6-测试","link":"#_6-测试","children":[]}]},{"level":2,"title":"II. 其他","slug":"ii-其他","link":"#ii-其他","children":[{"level":3,"title":"1. 一灰灰Blog： https://liuyueyi.github.io/hexblog","slug":"_1-一灰灰blog-https-liuyueyi-github-io-hexblog","link":"#_1-一灰灰blog-https-liuyueyi-github-io-hexblog","children":[]},{"level":3,"title":"2. 声明","slug":"_2-声明","link":"#_2-声明","children":[]},{"level":3,"title":"3. 扫描关注","slug":"_3-扫描关注","link":"#_3-扫描关注","children":[]}]}],"git":{"createdTime":1676004605000,"updatedTime":1676004605000,"contributors":[{"name":"YiHui","email":"bangzewu@126.com","commits":1}]},"readingTime":{"minutes":8.34,"words":2503},"filePathRelative":"spring/mq/RabbitMq/200318-SpringBoot系列教程之RabbitListener消费基本使用姿势介绍.md","localizedDate":"2020年3月18日","excerpt":"<p>之前介绍了rabbitmq的消息发送姿势，既然有发送，当然就得有消费者，在SpringBoot环境下，消费可以说比较简单了，借助<code>@RabbitListener</code>注解，基本上可以满足你90%以上的业务开发需求</p>\\n<p>下面我们来看一下<code>@RabbitListener</code>的最最常用使用姿势</p>\\n","copyright":{},"autoDesc":true}');export{e as data};
