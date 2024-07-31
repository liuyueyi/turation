import{_ as r,V as t,W as l,X as e,Y as i,Z as n,a1 as o,a0 as h,F as d}from"./framework-23f3cf9b.js";const c={},s=e("h1",{id:"rabbitmq基础教程之基本概念",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rabbitmq基础教程之基本概念","aria-hidden":"true"},"#"),i(" RabbitMq基础教程之基本概念")],-1),u=e("p",null,"RabbitMQ是一个消息队列，和Kafka以及阿里的ActiveMQ从属性来讲，干的都是一回事。消息队列的主要目的实现消息的生产者和消费者之间的解耦，支持多应用之间的异步协调工作",-1),g=e("p",null,"由于工作原因，接触和使用rabbitmq作为生产环境下的消息队列，因此准备写一些博文，记录下这个过程中的收货；而开篇除了环境搭建之外，就是对于其内部的基本概念进行熟悉和了解了。",-1),p={href:"https://liuyueyi.github.io/hexblog/2018/05/24/RabbitMq%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B%E4%B9%8B%E5%AE%89%E8%A3%85%E4%B8%8E%E6%B5%8B%E8%AF%95/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"本文则主要集中在以下几点：",-1),_=e("ul",null,[e("li",null,"几个基本概念（Message, Publisher, Exchange, Binding, Queue, Channel, Consuer, Virtual host)"),e("li",null,"消息分发的几种策略"),e("li",null,"ACK是什么鬼")],-1),f=h('<h2 id="i-基本概念" tabindex="-1"><a class="header-anchor" href="#i-基本概念" aria-hidden="true">#</a> I. 基本概念</h2><h3 id="_1-消息队列" tabindex="-1"><a class="header-anchor" href="#_1-消息队列" aria-hidden="true">#</a> 1. 消息队列</h3><p>首先来一张消息队列的经典图，可以划分为三个角色: Producer, Queue, Consumer</p><figure><img src="https://s11.mogucdn.com/mlcdn/c45406/180527_6h706e73aa1f93768ie2ac83i3i72_949x221.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><ul><li>Queue：为承载消息的容器，为什么是队列而不是栈呢？主要是因为绝大部分的场景，我们都是希望消息是先进先出，有顺序的</li><li>Producer：生产者，就是产生消息，并不断往队列塞的角色</li><li>Consumer：消费者，也就是不断从队列中获取消息的角色</li></ul><p>看到这个模型，如果对JDK的容器有一定的了解，很容易可以想到借助 <code>ArrayBlockingQueue</code> 或者 <code>ListBlockingQueue</code> 就可以实现简易的消息队列（也就是我们常说的生产者-消费者模型）</p><h3 id="_2-实例理解消息队列" tabindex="-1"><a class="header-anchor" href="#_2-实例理解消息队列" aria-hidden="true">#</a> 2. 实例理解消息队列</h3><p>其实在生活中，这种模型用得非常多，就比如我们都会接触的网购快递，可以说是一个典型的消息队列的case了：</p><p>商家不断的把商品扔给快递公司（注意不是直接将商品给买家），而快递公司则将商品根据地质分发对应的买家</p><p>对上面这个过程进行拆解，可以映射扮演的角色</p><ul><li>商品：Message，传递的消息，由商家投递给快递公司时，需要进行打包（一般Producer生产消息也会将实体数据进行封装）</li><li>商家：Produer 生产者</li><li>快递公司： Queue，消息的载体</li><li>买家：Consumer 消费者</li></ul><p>那么快递公司时怎么知道要把商品给对应的买家呢？根据包裹上的地址+电话</p><ul><li>同样消息队列也需要一个映射规则，实现Message和Consumer之间的路由</li></ul><h3 id="_3-rabbitmq基本概念" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq基本概念" aria-hidden="true">#</a> 3. RabbitMQ基本概念</h3><p>通过上面的实例对比，发现基本的消息队列定义的元素太少，这里则正好可以看一下RabbitMQ是怎么具体来实现消息队列的</p><figure><img src="https://s3.mogucdn.com/mlcdn/c45406/180527_7bdj5djf0ae798la210a9ila83874_927x265.jpg" alt="内部结构图" tabindex="0" loading="lazy"><figcaption>内部结构图</figcaption></figure><ul><li>Message：消息，包含消息头（即附属的配置信息）和消息体（即消息的实体内容）</li><li>Publisher：生产者，向交换机发布消息的主体</li><li>Exchange：交换机，用来接收生产者发送的消息并将这些消息路由给服务器中的队列</li><li>Binding：绑定，用于给Exchange和Queue建立关系，就是我们熟知的配对的红娘</li><li>Queue：消息队列，用来保存消息直到发送给消费者。它是消息的容器，也是消息的终点。一个消息可投入一个或多个队列。消息一直在队列里面，等待消费者连接到这个队列将其取走。</li><li>Connection：连接</li><li>Channel：通道，MQ与外部打交道都是通过Channel来的，发布消息、订阅队列还是接收消息，这些动作都是通过Channel完成；简单来说就是消息通过Channel塞进队列或者流出队列</li><li>Consumer：消费者，从消息队列中获取消息的主体</li><li>Virtual Host: 虚拟主机，表示一批交换器、消息队列和相关对象。虚拟主机是共享相同的身份认证和加密环境的独立服务器域。每个 vhost 本质上就是一个 mini 版的 RabbitMQ 服务器，拥有自己的队列、交换器、绑定和权限机制。vhost 是 AMQP 概念的基础，必须在连接时指定，RabbitMQ 默认的 vhost 是 /</li><li>Broker：消息队列服务器实体</li></ul><p>上面是一些专业的概念，那么可以怎么映射到前面的快递上呢？</p><h2 id="ii-exchange类型" tabindex="-1"><a class="header-anchor" href="#ii-exchange类型" aria-hidden="true">#</a> II. Exchange类型</h2><p>生产者，将消息投递给Exchange，然后由Exchange将消息路由到对应的Queue上，供消费者消费，那么这个路由有哪些方式呢？</p><h3 id="_1-direct策略" tabindex="-1"><a class="header-anchor" href="#_1-direct策略" aria-hidden="true">#</a> 1. Direct策略</h3><figure><img src="https://s3.mogucdn.com/mlcdn/c45406/180527_1fe0g1g39eafjdj4e0k1d8hj65bif_385x298.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><p>消息中的路由键（routing key）如果和 Binding 中的 binding key 一致， 交换器就将消息发到对应的队列中</p><p>简单来讲，就是路由键与队列名完全匹配</p><ul><li>如果一个队列绑定到交换机要求路由键为“dog”</li><li>只转发 routing key 标记为“dog”的消息，</li><li>不会转发“dog.puppy”，也不会转发“dog.guard”等等</li><li>它是完全匹配、单播的模式</li></ul><p>举例说明</p><figure><img src="https://s11.mogucdn.com/mlcdn/c45406/180527_7h1b1g7d1ajle2ablh7gk71dd3lca_707x241.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><p>Exchange和两个队列绑定在一起：</p><ul><li>Q1的bindingkey是orange</li><li>Q2的binding key是black和green.</li><li>当Producer publish key是orange时, exchange会把它放到Q1上, 如果是black或green就会到Q2上, 其余的Message被丢弃</li></ul><h3 id="_2-fanout策略" tabindex="-1"><a class="header-anchor" href="#_2-fanout策略" aria-hidden="true">#</a> 2. Fanout策略</h3><figure><img src="https://s3.mogucdn.com/mlcdn/c45406/180527_0j71hl8a1fhbjlb745hfi2d8acc6g_463x317.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><p>从上图也可以看出，这种策略，将忽略所谓的routing key,将消息分发到所有绑定的Queue上，更加类似我们理解的广播模式</p><h3 id="_3-topic策略" tabindex="-1"><a class="header-anchor" href="#_3-topic策略" aria-hidden="true">#</a> 3. Topic策略</h3><figure><img src="https://s11.mogucdn.com/mlcdn/c45406/180527_1af6hb4k3ja5df983cc98db3i44j6_558x251.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><p>topic 交换器通过模式匹配分配消息的路由键属性，将路由键和某个模式进行匹配，此时队列需要绑定到一个模式上</p><p>可以理解为直接策略的进阶版，直接策略是完全精确匹配，而topic则支持正则匹配，满足某类指定规则的（如以xxx开头的路由键），可以键消息分发过去</p><ul><li><code>#</code> 匹配0个或多个单词</li><li><code>*</code> 匹配不多不少一个单词</li></ul><p><strong>一个更直观的实例如下</strong></p><figure><img src="https://s11.mogucdn.com/mlcdn/c45406/180527_6ff26k8dh11gaeb570i055h07ba3d_731x247.jpg" alt="IMAGE" tabindex="0" loading="lazy"><figcaption>IMAGE</figcaption></figure><p>Producer发送消息时需要设置routing_key,</p><ul><li>Q1 的binding key 是”.orange.“</li><li>Q2 是 “<em>.</em>.rabbit” 和 “lazy.#”：</li><li>产生一个 <code>test.orange.mm</code> 消息，则会路由到Q1；而如果是 <code>test.orange</code>则无法路由到Q1,因为Q1的规则是三个单词，中间一个为orange，不满足这个规则的都无效</li><li>产生一个 <code>test.qq.rabbit</code> 或者 <code>lazy.qq</code> 都可以分发到Q2；即路由key为三个单词，最后一个为rabbit或者不限制单词个数，主要第一个是lazy的消息，都可以分发过来</li><li>如果产生的是一个 <code>test.orange.rabbit</code>消息，则Q1和Q2都可以满足</li></ul><h3 id="_4-headers策略" tabindex="-1"><a class="header-anchor" href="#_4-headers策略" aria-hidden="true">#</a> 4. Headers策略</h3><p>这个实际上用得不多，它是根据Message的一些头部信息来分发过滤Message，忽略routing key的属性，如果Header信息和message消息的头信息相匹配</p><h3 id="_5-小结" tabindex="-1"><a class="header-anchor" href="#_5-小结" aria-hidden="true">#</a> 5. 小结</h3><p>主要使用的消息分发策略有三个，直接，路由和扇形，简单的小结下应用场景和区别</p><h4 id="a-direct-exchange" tabindex="-1"><a class="header-anchor" href="#a-direct-exchange" aria-hidden="true">#</a> a. Direct Exchange</h4><p>直接完全匹配模式，适用于精准的消息分发</p><h4 id="b-topic-exchange" tabindex="-1"><a class="header-anchor" href="#b-topic-exchange" aria-hidden="true">#</a> b. Topic Exchange</h4><p>Routing Key的匹配模式，支持Routing Key的模糊匹配方式，更适用于多类消息的聚合</p><h4 id="c-fanout-exchange" tabindex="-1"><a class="header-anchor" href="#c-fanout-exchange" aria-hidden="true">#</a> c. Fanout Exchange</h4><p>忽略Routing Key, 将消息分配给所有的Queue，广播模式，适用于消息的复用场景</p><h2 id="iii-ack" tabindex="-1"><a class="header-anchor" href="#iii-ack" aria-hidden="true">#</a> III. ACK</h2><p>消息队列的一个重要指标，当有消费者获取了消息之后，对这个消息我应该怎么办？是直接删除还是等某个合适的机会再删除？又或者是干脆不删除，就留着了？</p><p>在实际的应用场景中，消息正常消费之后，我们希望的是这个消息就不要了，但是消费的过程中如果出现了bug，则希望不要删除消息，等我修复这个bug后，可以把这个消息重新的投递给我</p><h3 id="_1-ack机制" tabindex="-1"><a class="header-anchor" href="#_1-ack机制" aria-hidden="true">#</a> 1. ack机制</h3><p>Consumer接收到了消息之后，必须返回一个ack的标志，表示消息是否成功消费，如果返回true，则表示消费成功了，然后这个消息就会从RabbitMQ的队列中删掉；如果返回false，且设置为重新入队，则这个消息可以被重新投递进来</p><p>通常实际编码中，默认是自动ACK的，如果消息的重要性程度较高，我们应该设置为主动ACK，在接收到消息之后，自主的返回对应的ACK信息</p><p>这一块更多地内容可以查看实际使用篇</p><h2 id="iv-其他" tabindex="-1"><a class="header-anchor" href="#iv-其他" aria-hidden="true">#</a> IV. 其他</h2><h3 id="_1-参考" tabindex="-1"><a class="header-anchor" href="#_1-参考" aria-hidden="true">#</a> 1. 参考</h3>',60),m={href:"http://www.rabbitmq.com/confirms.html",target:"_blank",rel:"noopener noreferrer"},x={href:"http://www.rabbitmq.com/getstarted.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://blog.csdn.net/ww130929/article/details/72842234",target:"_blank",rel:"noopener noreferrer"},Q={id:"_2-一灰灰blog-https-liuyueyi-github-io-hexblog",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#_2-一灰灰blog-https-liuyueyi-github-io-hexblog","aria-hidden":"true"},"#",-1),E={href:"https://liuyueyi.github.io/hexblog",target:"_blank",rel:"noopener noreferrer"},M={href:"https://liuyueyi.github.io/hexblog",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"一灰灰的个人博客，记录所有学习和工作中的博文，欢迎大家前去逛逛",-1),C=e("h3",{id:"_3-声明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-声明","aria-hidden":"true"},"#"),i(" 3. 声明")],-1),I=e("p",null,"尽信书则不如，已上内容，纯属一家之言，因个人能力有限，难免有疏漏和错误之处，如发现bug或者有更好的建议，欢迎批评指正，不吝感激",-1),B={href:"https://weibo.com/p/1005052169825577/home",target:"_blank",rel:"noopener noreferrer"},j=e("li",null,"QQ： 一灰灰/3302797840",-1),R=e("h3",{id:"_4-扫描关注",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-扫描关注","aria-hidden":"true"},"#"),i(" 4. 扫描关注")],-1),q=e("figure",null,[e("img",{src:"https://raw.githubusercontent.com/liuyueyi/Source/master/img/info/blogInfoV2.png",alt:"QrCode",tabindex:"0",loading:"lazy"}),e("figcaption",null,"QrCode")],-1);function G(w,z){const a=d("ExternalLinkIcon");return t(),l("div",null,[s,u,g,e("p",null,[i("基础环境搭建可以参考： "),e("a",p,[i("《RabbitMq基础教程之安装与测试》"),n(a)])]),b,_,o(" more "),f,e("ul",null,[e("li",null,[e("a",m,[i("Consumer Acknowledgements and Publisher Confirms"),n(a)])]),e("li",null,[e("a",x,[i("RabbitMQ Tutorials"),n(a)])]),e("li",null,[e("a",y,[i("RabbitMQ】三种Exchange模式——订阅、路由、通配符模式"),n(a)])])]),e("h3",Q,[k,i(" 2. "),e("a",E,[i("一灰灰Blog"),n(a)]),i("： "),e("a",M,[i("https://liuyueyi.github.io/hexblog"),n(a)])]),A,C,I,e("ul",null,[e("li",null,[i("微博地址: "),e("a",B,[i("小灰灰Blog"),n(a)])]),j]),R,q])}const P=r(c,[["render",G],["__file","RabbitMQ基础教程之基本概念.html.vue"]]);export{P as default};
