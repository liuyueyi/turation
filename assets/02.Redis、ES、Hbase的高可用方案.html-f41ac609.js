import{_ as e,V as a,W as r,a1 as s,X as t,a0 as i}from"./framework-23f3cf9b.js";const p="/tutorial/imgs/column/distribute/220330/00.png",o="/tutorial/imgs/column/distribute/220330/01.png",n="/tutorial/imgs/column/distribute/220330/02.png",d="/tutorial/imgs/column/distribute/220330/03.png",l="/tutorial/imgs/column/distribute/220330/04.png",g="/tutorial/imgs/column/distribute/220330/05.png",h="/tutorial/imgs/column/distribute/220330/06.png",c="/tutorial/imgs/column/distribute/220330/07.png",m="/tutorial/imgs/column/distribute/220330/08.png",u="/tutorial/imgs/column/distribute/220330/09.png",f="/tutorial/imgs/column/distribute/220330/10.png",_="/tutorial/imgs/column/distribute/220330/11.png",b="/tutorial/imgs/column/distribute/220330/12.png",k="/tutorial/imgs/column/distribute/220330/13.png",y={},x=t("blockquote",null,[t("p",null,"以下内容来自同事的内部分享，经得同意分享给各位小伙伴"),t("p",null,"我们常说的高可用是怎么实现的呢？单机向集群的演进中遵循哪些原则，注意哪些事项呢？集群如何协同工作？集群之间的一致性如何保障？"),t("p",null,"纯干货，推荐看到的小伙伴仔细认证的阅读一下，相信会有不少的收获")],-1),q=i('<h2 id="一-nosql发展历史" tabindex="-1"><a class="header-anchor" href="#一-nosql发展历史" aria-hidden="true">#</a> 一.nosql发展历史</h2><h3 id="_1-关系型数据库" tabindex="-1"><a class="header-anchor" href="#_1-关系型数据库" aria-hidden="true">#</a> 1.关系型数据库</h3><p>上世纪60年代以来至今，传统的关系型数据库一直被互联网应用的作为首选数据存储系统，典型的代表产品包括有oracle、mysql等。</p><p>关系型数据库的核心优势在于：第一，具备事务属性，注重数据一致性，内部实现有复杂的锁机制等还包含有其它一系列机制来保障数据一致性，能够基于AID(原子性、隔离性和持久性)的基础能力而带来事务强一致性来保证我们的数据存、取安全；第二，关系型数据模式其支持的二维表格模式比较契合现实中大部分的业务场景且易于理解，因此得以快速应用和发展。</p><p>关系型数据库最大的缺陷在于扩展性不足，在面对大量用户的并发访问以及海量存储的存取场景下，往往很难平滑的去做到性能升级，而使得DB经常作为整个系统应用的发展瓶颈。通常情况下，关系型数据库的扩展思路分为以下两种：</p><p>（1）纵向扩展。纵向扩展即提升单机硬件基础设施来提升处理能力。这种方式下虽然可以换来一定的性能提升，但是单机终归是存在有性能上限的，且升级过程中往往需要停机处理而无法做到平滑升级。其整体收益成本比比较低。</p><p>（2）横向扩展。横向扩展即通过分片，将数据分散至多台物理节点，降低单点压力，来提升处理能力。这种方式通常是对上层应用抽象出一个逻辑数据库，背后则是将数据分散到不同的物理数据库上。整体上来说，这种方式虽然可以在大部分常规场景下带来较大的性能提升，但与此同时又会引入另一个新的问题分布式事务问题，当然还包括有跨库join、非路由键查询等其它一系列问题。</p><h3 id="_2-nosql的诞生" tabindex="-1"><a class="header-anchor" href="#_2-nosql的诞生" aria-hidden="true">#</a> 2.NoSql的诞生</h3><p>在随着互联网业务与场景不断发展的背景下，由于在应对海量存储数据时传统的关系型数据在扩展能力上的不足，以及出现了越来越多的场景在关系型模式下显得并不适用，典型的如OLAP数据分析类型场景。促使Nosql技术开始诞生，Nosql的核心思想在于放弃传统关系型数据库的事务强一致性与关系模式，以此换取更高的可扩展性以及面对高并发海量数据时具备更强的处理能力。</p><p>对于Nosql而言，其定位并不是取代关系型数据库，而是作为关系型数据库的一种补充，两者分别有各自适合的领域场景。典型的nosql产品包括：基于kv的redis、列存储的hbase、文档型数据库ES等。</p><h3 id="_3-newsql" tabindex="-1"><a class="header-anchor" href="#_3-newsql" aria-hidden="true">#</a> 3.NewSql</h3><p>nosql虽然具备高扩展性的优势但其实在放弃了传统关系型数据库的强事务一致性的代价下换来的。因此，在关系型数据库与nosql均存在明显局限的背景下，NewSql概念开始应运而生。NewSQL可以说是传统的RDBMS与NoSQL技术结合之下的产物。这些系统既拥有NoSQL数据库的高扩展性，又希望能保持传统数据库的事务特性。典型的产品代表如google的spanner和国内的TiDB。</p><h2 id="二-常见的nosql产品简介" tabindex="-1"><a class="header-anchor" href="#二-常见的nosql产品简介" aria-hidden="true">#</a> 二.常见的Nosql产品简介</h2><p>常见的nosql产品如下：</p><table><thead><tr><th><strong>产品名称</strong></th><th><strong>特点</strong></th><th><strong>适用场景</strong></th></tr></thead><tbody><tr><td>redis</td><td>1.k-v结构； 2.内存数据库； 3.高性能，单机2C4G下读可达10WQPS；</td><td>1.缓存； 2.分布式锁、延时队列、限流等；</td></tr><tr><td>ES</td><td>1.文档型数据库； 2.结构化查询。支持多字段查询，以及复杂的过滤和聚合统计功能； 3.近实时查询。默认1s refresh一次将内存中的数据固化生成一个新的segment，此时为该segment创建倒排索引，外部读请求才能访问到这个segment的内容；</td><td>1.大数量背景下的检索类场景。例如日志搜索、大宽表解决mysql跨库join问题以及作为辅助索引解决分表下的非路由键查询问题； 2.数据统计、分析； 3.全文检索；</td></tr><tr><td>Hbase</td><td>1.列存储； 2.采用块存储机制，底层数据结构采用的是LSM合并树，将随机IO写转变为一次性顺序写，相比于B+树在写性能上表现更加优秀。但读性能会更弱；</td><td>1.PB级数据存储规模； 2.适合写多读少的场景，例如下沉的冷数据存储； 3.OLAP数据分析类场景；</td></tr></tbody></table><h2 id="三-集群工作原理" tabindex="-1"><a class="header-anchor" href="#三-集群工作原理" aria-hidden="true">#</a> 三. 集群工作原理</h2><h3 id="_3-1-集群模式" tabindex="-1"><a class="header-anchor" href="#_3-1-集群模式" aria-hidden="true">#</a> 3.1 集群模式</h3><p>对于大规模数据存储系统都会面临一个问题就是如何进行横向扩展，当数据集越来越大时，一主多从的模式无法支持这么大的数据存储与访问量，此时一般情况下就会考虑进行横向扩展，将多个主从模式组合在一起对外提供服务。但是这里有两个首要问题就是如何实现数据的分片逻辑以及分片逻辑放在哪里。于是在这种背景下就会衍生出两种不同的集群模式，一种就是集中式模式，一种则是去中心化的模式。</p><h4 id="_1-集中式" tabindex="-1"><a class="header-anchor" href="#_1-集中式" aria-hidden="true">#</a> <strong>1.集中式</strong></h4><p>集中式集群模式下，通常会引入一个中心节点作为集群的管理者，由管理者来进行集群状态管理、故障处理以及元数据维护等，其它节点只需响应数据请求，而无需知道集群中其它节点的情况。典型的解决方案都会借助于zookeeper分布式协调服务来进行集群管理，比如Hbase、kafka等。</p><p>Zookeeper：维护集群中的服务状态，并提供服务故障通知；</p><p>master：存储和维护集群元数据，以及故障转移等集群事务处理；</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-去中心化" tabindex="-1"><a class="header-anchor" href="#_2-去中心化" aria-hidden="true">#</a> <strong>2.去中心化</strong></h4><p>即P2P交互模式，客户端与集群节点直接进行交互，而非之前业界的Proxy方式。典型的集群代表如redis cluster、es集群。</p><p><strong>redis Cluster介绍</strong></p><p>redis3.0版本开始，官方正式支持集群模式。redis官方集群模式最大的两个特点在于：</p><p>（1）去中心化。即P2P交互模式，客户端与集群节点直接进行交互，而非业界之前的Proxy方式。</p><p>（2）内部自治。redis 集群模式并未像Hbase、Kafka等引入第三方组件比如ZK，来实现对集群的节点状态管理、故障转移以及元数据管理等，而是基于Gssiop协议实现集群内节点监控、状态同步，并内置选举算法实现故障自动转移，在集群内部高度自治。</p><p>如下图是一个三主三从的redis cluster，三个机房部署，其中一主一从构成一个分片，之间通过异步复制同步数据。节点之间基于ping-pong心跳机制相互通信感知对方状态，一旦某个机房掉线，则分片上位于另一个机房的slave会被提升为master继续对外提供服务。</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-2-数据分片" tabindex="-1"><a class="header-anchor" href="#_3-2-数据分片" aria-hidden="true">#</a> 3.2 数据分片</h3><p>分布式集群在进行横向扩展时，首要问题就是如何实现数据的分片逻辑。</p><p><strong>1.分片策略</strong></p><p>常见分片策略如下：</p><p>（1）hash分片。hash分片也是我们最常用的分片策略。例如ES默认采用的就是这种方式。hash分片的好处在于数据会被打的比较分散，其次不用额外存储映射关系，客户端与服务端以约定好的hash公式进行路由。但是它的问题在于如果一旦需要进行扩缩容，那么整个映射关系都会被打破，此时需要进行一次全量的rehash数据迁移，工作量非常大。所以一般情况下，在设计的时候会尽可能的让这个hash模值大一点，避免频繁的进行扩容。</p><p>（2）基于某一key值的范围划分。例如基于时间范围或者id范围分片。这种分片方式的优劣势其实与hash的方式是相反的。它的好处在于，当需要进行扩缩容时，不会像hash一样破坏掉全局的映射关系，只需要对部分分片的映射关系产生影响。但是这种方式的问题在于它会存在一定的热点数据问题，导致整个集群各个节点的负载不均衡。例如Habse采用的就是这种方式，HBase 表根据 RowKey 的开始和结束范围水平拆分为多个 Region，一个region就是分片。每个 Region 都包含了 StartKey 和 EndKey 之间的所有行。每个 Region 都会分配到集群的一个节点上，即 RegionServer，由它们提供读写服务。</p><p>（3）一致性hash。一致性hash是通过构建一个环形的hash空间，对于用户的请求，先经过hash映射到这个环上，这就是第一层的映射关系，只要这个hash的模值不变，这层关系就不会变。其次，顺着环的顺时针方向找到的第一个节点，就是负责该请求对应的节点。</p><p>一致性hash的优势在于当进行扩缩容时，不会破坏全局的映射关系，而导致整个rehash，发起全局的数据迁移，而只会影响局部数据的映射关系。比如缩容减少一个节点，因为第一层映射依然保持不变，原来的请求该分配到哪个节点还是在哪个节点上，只是改变了第二层从环上到节点之间的一个局部映射关系。从环上来看，只会影响这个节点的上一个节点到这个这个节点的这一段弧区间上，整个环上的其它区间由于第一层关系不变，其映射关系不会受到影响。原来去掉的这个节点之间负责的那一段弧上请求，会全部顺移到它的下一个节点，我们只需要把去掉节点负责的数据迁移到下一个节点即可，其它的所有节点不用做任何变更。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>2.基于Hash槽的数据分片</strong></p><p>redis cluster中，数据分片借助与hash槽slot来实现，集群预先划分16384个slot，对于每个请求集群的键值对，根据key 按CRC hash算法散列生成的值唯一匹配一个slot。在redis集群中每个master节点分片负责其中一部分槽位的读写请求，而且当且仅当每个slot都有对应节点负责时，集群才会进入可用状态。当动态扩缩容时，需求将16384个slot做一次再分配，相应数据也要进行迁移。</p><p>redis hash槽的算法与一致性hash算法的本质思想是一样的，通过不直接建立请求到节点的映射关系，而是建立一种间接的映射关系。避免在发生扩缩容时对于传统hash算法而言因为模值的变化而打乱整个映射关系。如下图所示，将映射关系分为两层，hash槽通过槽位路由表作为中间映射，因为槽位数量是16384不会变，这样当发生扩缩容时，对于请求而言该映射到哪个槽位还是映射到哪个槽位，即Part1映射不变，只用针对Part2部分中需要迁移的slot产生影响，而并非会让全部请求受到影响；</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-客户端交互流程" tabindex="-1"><a class="header-anchor" href="#_3-3-客户端交互流程" aria-hidden="true">#</a> 3.3 客户端交互流程</h3><p><strong>Redis集群交互</strong></p><p>redis客户端与集群之间的交互是基于槽位映射表来进行的，该映射表类似于集群的数据分布图，其中维护着槽位与负责该槽位的节点地址信息，客户端根据该映射关系与节点进行直连交互。</p><p>redis客户端首次连接集群时，会从集群中拉取一份完整的槽位映射表，缓存在本地。在进行请求访问时，首先会采用CRC16冗余校验法的值对16384取模，映射到具体一个槽位，随之通过查询槽位映射表定位到具体负责该槽位的节点，进而直接与节点进行通信。对于服务端节点来说在收到请求后首先会判断该槽位是否是自己负责的槽位，如果是，则会响应客户端请求。如果不是，例如集群发生扩缩容，此时槽位发生迁移，则会返回Moved/ask指令，引导客户端重定向至正确的节点进行访问。</p><p>Moved指令：当迁移已经全部完成，此时该slot已经永久转交给另一个节点时，A节点会返回Moved指令。当Client收到Moved指令后，则会重定向至正确的节点再次进行访问，同时更新本地的槽位映射表，下次直接访问到正确的节点。</p><p>ASK指令：ASK指令主要是在迁移过程中，此时该slot的数据可能一部分位于B，而另一部分key可能还在源节点A上。此时对于读请求而言，源节点A在收到请求后，会先在自己的数据库中查找，如果存在则直接返回结果；如果不存在则说明可能已经迁移至B，则会返回ask错误指令，引导client转向目的地节点查询key；</p><p>当Client收到Moved/AKS指令后，会去重定向至新的节点访问，同时还会更新本地的槽位映射表，在下次访问时直接定位至正确的节点上；</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>ES集群交互过程</strong></p><p>es作为搜索引擎而言，其支持的查询条件不局限于路由key，还包括其它关键字作为条件进行查询，因此其在查询流程不太一样。</p><p>es默认的查询模式为query then fetch模式，此模式下整个查询分为query 和 fetch两个步骤，query步骤负责查询符合条件文档id以及汇总排序截取limit等，fetch阶段则是查询完整数据，查询过程中需要进行两次交互。</p><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）client首先会将查询请求发送至任一协调节点；</p><p>（2）协调节点在收到请求后，会并发的将请求发送至所有的数据节点；</p><p>（3）数据节点在收到请求后根据查询条件在自己负责的分片上查询符合条件的文档集合，不过只取文档 id和排名相关的字段信息，并将数据集返回至协调节点；</p><p>（4）协调节点在收到数据节点返回的结果集后，进行汇总排序取limit等，随着得到需要返回的结果集docId集合；</p><p>（5）此时query阶段结束，进入fetch阶段，协调节点会根据hash算法对docId进行路由，得到对应结果分别在哪些分片节点后，再次发送请求至数据节点，fetch数据；</p><p>（6）数据节点根据docId查询完整结果数据，并将数据再次返回至协调节点；</p><p>（7）协调结果进行完数据汇总后，将数据返回至客户端；</p><p>除了query then fetch之外，es还有另外一种比较常见的查询模式：query and fetch**。<strong>此模式下向索引的所有分片 （ shard）都发出查询请求， 各分片执行完query 后再执行fetch，即在分片节点中做完查询、排序和截取后将完整的数据一并返回至协调节点。这种搜索方式是最快的。 因为这种查询方法只需要去 shard查询一次。 但是各个 shard 返回的结果的数量之和可能是用户要求的 size 的 n 倍。</strong></p><p><strong>Hbase集群交互过程</strong></p><p>Hbase集群与redis集群不一样，其基于ZK进行集群状态管理以及元数据维护，集群中数据节点只知道自己负责的数据分片而不知其他节点。因此，在客户端进行集群访问时，通常需要先于ZK进行一次访问，在获取路由表后，再与集群节点直连访问。kafka也是同理。</p><p>如下图所示，HBase集群中的读取流程大致如下所示:</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）client首先会访问一次zk，查询集群中master节点；</p><p>（2）在查询到master地址信息后，Client第二次发起请求访问master，查询路由信息表，路由表中记录着每个region节点负责处理哪个范围的rowkey；</p><p>（3）client在查询到路由信息后，会将其缓存在本地，随之基于路由信息表，查询rowkey对应的节点地址信息；</p><p>（4）直连数据节点服务器，发送查询请求获取数据；</p><p>（5）节点服务器在收到请求后，查询对应的完整数据并将结果返回至客户端；</p><p></p><h3 id="_3-4-集群管理" tabindex="-1"><a class="header-anchor" href="#_3-4-集群管理" aria-hidden="true">#</a> 3.4 集群管理</h3><h4 id="_1-集群元数据管理" tabindex="-1"><a class="header-anchor" href="#_1-集群元数据管理" aria-hidden="true">#</a> <strong>1.集群元数据管理</strong></h4><p>在集中式集群中，通常情况下会直接基于第三方协调服务zk来管理和维护集群元数据，zk在作为分布式协调服务之外，本身也是一个内存数据库。不过通常为减轻zk压力以及降低对zk的依赖，因此一般情况下，集群还会基于zk选举出一个master节点，代理zk进行元数据管理和维护以及非master节点的故障转移等相关事务处理。同时，zk中也会备份一份集群的元数据信息，避免master故障后集群元数据丢失，当选举出来的新master，会从zk中拉取一份集群元数据继续进行维护。</p><p>在去中心化的集群中，例如redis集群下每个节点都存储有整个集群的元数据信息，包括自己以及其它节点的存活状态、负责的slot槽位信息等。各节点间基于 Gossip 协议来相互交换信息，Gossip协议又叫病毒协议，是基于流行病传播的方式在节点或者进程之间信息交换的协议，在P2P去中心化的分布式系统中应用比较广泛。</p><p>Gossip协议的特点在于：</p><p>1.去中心化。Gossip 协议不要求任何中心节点，所有节点都可以是对等的，任何一个节点无需知道整个网络状况，只要网络是连通的，就可以把消息散播到全集群。</p><p>2.最终一致性。数据的传播过程是由一传十十传百逐步流散开来，整个传播过程需要经历多个周期，可能需要一定的时间，不过在一个处于有界网络的集群里，理论上集群各个节点对该份信息的认知最终都将会收敛一致。</p><p>Redis Cluster 中的每个节点都维护一份自己视角下的当前整个集群的状态，主要包括：</p><p>a.集群中各节点所负责的slots信息；</p><p>b.集群中各节点的存活状态信息；</p><p>对于集群中每个节点而言，会按照一定的频率周期，从自己的节点列表中随机挑选部分最长时间没有与它进行过通信的节点，对这些节点发送ping消息，并附加上自己视角下的集群状态信息，节点在收到其他节点发送的ping消息后再回复一个pong，以交换彼此的状态信息，对于差异化数据则版本决定是否更新本地状态数据，最终集群内所有节点达成统一认知。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>优点：</strong></p><p>（1）容错。Gossip 协议具有天然的分布式系统容错特性，集群中任何节点的状态发生变化，例如上下线都不会影响 Gossip 消息的传播，且当节点重新上线后，依然会接收集群内其他节点的状态数据，并最终与其他节点达成一致。</p><p><strong>缺点：</strong></p><p>（1）Gossip是最终一致性，当集群状态发生变更时，变更数据需要经过多伦同步，整个集群的节点才会达成一致，相比于ZK而言其感知会出现明显延迟；</p><p>（2）Gossip协议下，每个节点按自己的节奏频率周期性的发送消息，而由于同步全量状态信息使得Gossip包体积较大，会存在一定的网络压力。其次由于随机的发送消息，而收到消息的节点也会重复该步骤，不可避免的引起同一节点消息多次接收，增加消息处理压力。</p><h4 id="_2-集群状态检测" tabindex="-1"><a class="header-anchor" href="#_2-集群状态检测" aria-hidden="true">#</a> <strong>2.集群状态检测</strong></h4><p>对于集中式集群模式的Hbase、kafka来说，对于集群的状态检测也是基于ZooKeeper 来做的，每台节点机器在启动时，都需要事先在zookeeper中注册一个节点，zk会与该节点维持一个会话关系，基于心跳检测来感知节点的状态变化。</p><p>具体来说，客户端会周期性的向服务端发送PING请求来保持心跳，一旦客户端发生故障，超过限定时间后，Zookeeper服务器会判定会话超时，并基于Watch机制实时通知给Master节点，master进行元数据更新以及后续的故障转移，以此来完成对集群中节点的状态检测。</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>跟大多数分布式系统一样，Redis cluster也是基于heart beat来进行节点状态检测。redis内部节点基于Gossip协议通信交互，具体来说，每个节点会定期会与其它节点发送ping-pong消息进行交互，以此来感知对方是否状态发生变化。对于集群中每个节点而言，每次随机挑选5个最长时间没有与它进行过通信的节点，对这些节点发送ping消息，节点在收到其他节点发送的ping消息后再回复一个pong。每个节点根据自己是否收到pong消息的结果来感知其它节点的存活状态。</p><p><strong>节点上线</strong></p><p>Redis Cluster 加入新节点时，首先需要在客户端需要执行 CLUSTER MEET 命令，命令中需要指定新增节点的地址信息。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>redis集群中任一节点在收到 MEET命令后，会根据据 MEET 命令中的 IP 地址和端口号，向新节点发送一条 MEET 消息。</p><p>接着，新节点在收到Meet消息后，会向节点一返回一条PONG消息。</p><p>节点一接收到新节点返回的PONG消息后，得知新节点已经成功的接收了自己发送的MEET消息。随着将该新节点加入自己的元数据信息库中，从而完成了新节点接入的握手操作。</p><p>Meet成功之后，节点一会在下次周期性信息交互过程中，将新节点加入的消息传递出去。因为节点之间基于Gossip协议进行工作，在随着时间的推移，最终集群的所有节点都感知它的存在。</p><p><strong>节点下线</strong></p><p>redis集群中节点会周期性心跳同步，当某一节点在发其ping请求后，发现某个节点超过一定未给出回复，那么它会把这个节点的状态标记为pfail预下线的状态。</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>节点一会在下一轮交互中，会将节点二疑似下线消息同步出去。对于节点三在同步到这条消息后，并不会直接把自己的节点列表中该故障节点的状态也标记为预下线，因为这时候可能只是该节点一个人的主观认为下线，只是先记录下来节点一在XX时间认为节点二疑似下线；同时在节点三的下一轮ping-pong中，会优先选择节点二进行交互；</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>随着时间的推移，经过多轮同步后，对于节点X也超时未收到节点二的PONG，也认为节点二疑似下线，此时节点X发现集群中大部分超过一半的节点都认为它下线时，节点X会把该节点二标记为fail下线状态，并同时在集群中广播该节点fail。所有收到该消息的节点在发现某节点已经被标记为fail状态时，都会更新自己的节点列表将它标记为下线状态，如果该节点是leader副本的节点，则其对应的slave节点在收到下线消息会开始进行选举，进入故障转移流程。</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-5-高可用性" tabindex="-1"><a class="header-anchor" href="#_3-5-高可用性" aria-hidden="true">#</a> 3.5 高可用性</h3><p>对于分布式存储系统而言，集群高可用保证在于解决两个前提，第一个是要保证数据的可靠性，即当节点机器出现故障时，数据不能因此出现丢失。第二，在故障发生后集群需具备自动故障转移机制。</p><h4 id="_1-数据的可靠性保证" tabindex="-1"><a class="header-anchor" href="#_1-数据的可靠性保证" aria-hidden="true">#</a> <strong>1.数据的<strong><strong>可靠性</strong></strong>保证</strong></h4><p>通常而言，数据的可靠性都是基于多副本机制来解决的，即构建主从模式，为每个主节点部署多个slave从节点，当主节点故障时由从节点顶替。</p><p>对于多副本机制而言，其核心问题在于如何解决多副本之间的一致性。在多副本数据一致性问题上，一般会有两种解决方案。一种是基于ACK应答机制下的主从复制机制；另一种是目前业界更为主流的方案，基于分布式共识算法Paxos或者Raft来解决多副本之间的一致性问题。</p><p><strong>主从复制+<strong><strong>ACK</strong></strong>机制</strong></p><p>基于ACK的应答机制十分常见，首先从同步方式上来说又分为推模式和拉模式，拉模式相对而言十分常见，例如mysql的主从复制就是拉模式。两种模式的比较如下：</p><table><thead><tr><th><strong>模式</strong></th><th><strong>代表产品</strong></th><th><strong>优劣势</strong></th></tr></thead><tbody><tr><td>拉</td><td>mysql、es\\kafka等</td><td><strong>优势：</strong> 从节点可基于自身消费能力处理同步数据； <strong>劣势：</strong> 数据同步及时性相对差一点</td></tr><tr><td>推</td><td>redis</td><td><strong>优势：</strong> 数据同步相对更加及时； <strong>劣势：</strong> 从节点一旦同步过程中出现重启，则重新启动后需要再次完整的同步一次全量数据。因此，在这种模式下一般还需要配备相关的缓冲区机制。例如redis中会配置同步缓冲区，在commit之前同时会先在缓冲区中备份一份。从节点重启后同步位移还在缓冲区中，则从缓冲区增量同步进行对齐。</td></tr></tbody></table><p>从应答机制的角度上来说又分为异步复制、半同步复制与全同步复制。</p><p>（1）异步复制。主节点在收到写请求后，会将数据写入内存以及同步至中继日志后，进行commit提交。随后通知slave节点过来复制，slave是否成功复制主节点并不关心。对于异步复制而言，它是存在有数据丢失风险的，当master宕机时，从节点可能还没来得及复制数据。</p><p>（2）半同步复制。半同步复制每次都会至少有一个从节点ack应答，相对而言它可以有更强的一个数据一致性保证。但还是会存在不一致的问题的场景，比如脑裂问题，导致数据丢失。当发生网络分区时，master节点和一个从节点被划分到一个区域与其它的从节点分离，这时其它从节点发现与master失联后就会选出一个新的master来提供服务，但是原来的master并不知道自己被失联了，而且每次依然会有一个从节点给它ack应答，因此它也可以正常处理客户端请求，这个时候就会存在两个master同时对外提供服务，接收客户端的写请求，而当网络分区结束后旧的master发现有新的master了，就会向新的master看齐，丢弃掉脑裂期间客户端提交的数据了。</p><p>（3）全同步复制。全同步复制则是必须每个从节点都给出ack应答才提交数据，这样可以避免脑裂情况发生，因为当发生脑裂时旧master因为不能得不到所有从节点的ack应答，所以是不会处理客户端的请求写从而旧可以避免脑裂问题。但是它的问题是在于性能较低，因为需要全部副本的响应，如果其中一个节点响应较慢则会拖慢整体的提交时间。</p><p><strong>分布式共识算法</strong></p><p>对于paxos、raft这类共识算法来说，因为它采用的多数决的机制，在出现网络分区时，只会存在有一个大多数而不会同时出现两个大多数。如果master位于网络分区后的少数派中，那这个master在接收到用户请求后，由于与它连通的只有少数节点达不到超过一半节点的支持，因此它是无法提交数据的。只会由多数节点构成的集群选举出来的新master这一个master对外提供服务；如果master处于多数节点构成的集群中，对于分隔出去的少数派节点构成的集群中因为节点数量不超过一半，所以根本就选取不出来一个新master。因此对于共识算法来说天然不会出现脑裂现象，相比于主从复制+ack的做法来说它能够带来更强的一致性保证。</p><p>分布式共识算法核心优势在于：</p><p>（1）容错。因为其多数派的原则，在出现网络分区时，只要不要超过半数以上的节点不可用，整个共识系统仍然是满足大多数原则的，仍然可以正常运转，在可用性方面具备非常强的一个容错能力。</p><p>（2）在强一致性的同时具备一定的性能优势。相比于全同步复制而言，因为多数决的机制，每次commit并不需要全部的节点同意，因此性能上而言相比于全同步复制更具有优势。</p><p>因为共识算法它所带来的强一致性保证和对集群节点的超强的容错能力，所以现在越来越多的分布式存储系统在解决多副本一致性问题上都在使用共识算法，比如new sql的tidb，内部就是基于raft算法以及mysql自身也推出了MGR集群，内部就是使用的mutil-paxos算法取代传统的半同步复制来解决多副本的一致性问题。</p><h4 id="_2-故障转移" tabindex="-1"><a class="header-anchor" href="#_2-故障转移" aria-hidden="true">#</a> <strong>2.故障转移</strong></h4><p>一般来说，对于引入第三方协调服务的存储系统来说，会事先在集群中选举一个Master，此master并非我们所说的主从复制中的leader副本节点。以kafka为例，在Kafka集群中这类节点称之为Controller。当节点发生故障时，会由ZK将故障通知至Controller节点，此时触发controller节点进行故障转移。</p><p>按故障节点类型来说分为以下几类：</p><p>（1）leader副本节点故障。当故障节点为某分片的leader副本节点时，则直接会由Controller负责为该分区重新选举新的Leader副本；Controller在watch关于某leader副本节点故障后，则会直接从该leader副本节点的从节点列表中找到位移提交最大也就是数据最新的节点作为新的master。</p><p>（2）Controller节点故障。当故障节点为Controller自身时，则由借助于ZK从集群中的其他leader节点中选取一个新的controller节点。整个选举过程本质上也是ZK的一次分布式锁的抢占过程。当controller产生时，会从ZK中拉取一份集群元数据备份存储到本地。同时一般来说Controller节点并不是单独的物理节点实例，而是由集群中某leader分片节点担任。当controller节点故障时，同时也是leader副本节点故障，因此当新master产生后，同时还会为旧master节点的slave节点中选举新的leader副本。</p><p>对于redis、ES这些在集群内部实现自治的集群系统而言，则通常会在集群内部实现选举算法，来实现故障转移。</p><p>当集群中某节点在发现半数以上的节点都认为某节点疑似下线后，会将该节点标记为确定下线并在集群中进行广播。当slave收到节点下线通知后，判断如果是自己的master节点，则触发选举流程，开始进行故障转移。</p><p>以redis为例其选举算法流程如下：</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>（1）slave收到master下线通知，开启一个纪元，将currentEpoch+1，开启选举；</p><p>（2）slave计算发起投票的延时时间。对于所有有资格参选的节点来说，并不会一收到选举通知后立马就开始发起选举，而是会先延迟一段时间。其延时时间的计算基于当前slave复制的数据总量，如果总量越高比较数据越接近master，那么它的延时时间会越短，被选中的概率也就越大。</p><p>（3）发起投票。slave在延时时间到期后，会向集群广播投票请求；</p><p>（4）投票。集群中只有master节点具备投票权利，且在每个纪元中只有一次投票机会，master的投票原则是先到先得。当master收到投票请求后，会先基于自身的元数据审查该节点是否为故障节点的slave节点，如果是且当前还未给其他的slave节点投过票，则会将票投给该节点，因此理论上而言，数据越新的从节点获得票数会越高；</p><p>（5）票数统计。每个节点在达到指定时间后会统计自身的票数，因为每个节点只能投一次票，所以得票超过一半以上的只会有一个节点。</p><p>（6）广播通知。当该从节点发现自己得票一半以后，就会像整个集群中广播新master节点的消息，让其它节点都知道它已经是最新的主节点，其它的主节点在收到后会更新自己的节点表，从节点则会将它设为新的主节点，此时选举结束。如果有一些从节点发现自己既没有达到半数以上的投票，又在指定时间内没有收到新master的消息，则会开启新的纪元，再次发起选票，但是此次其它的主节点发现如果直接的节点列表中该主节点的状态不是fail状态或者对该纪元已经进行过投票，不会再进行投票。</p>',143);function z(v,C){return a(),r("div",null,[x,s(" more "),q])}const E=e(y,[["render",z],["__file","02.Redis、ES、Hbase的高可用方案.html.vue"]]);export{E as default};
