import{_ as a,V as e,W as i,a0 as r}from"./framework-23f3cf9b.js";const d={},h=r('<p>jvm的垃圾回收算法，除了我们熟悉的引用计数判断对象是否活着之外，其他还有那些有意思的东西呢？</p><p>总是听到的年轻代年老代又是啥？</p><p>传说中的YoungGC(MinorGC) 和 FullGC的时机是什么，又干了些啥？</p><h2 id="i-对象存活判断" tabindex="-1"><a class="header-anchor" href="#i-对象存活判断" aria-hidden="true">#</a> I. 对象存活判断</h2><p>垃圾回收，回收的都是那些不在使用的对象（也就是没有存活的对象），因此怎么判断对象是否存活，就显得比较重要了</p><p>对这个映像最深刻的就是引用计数方式，一个对象被使用了，计数就+1；不用了，技术就-1；当计数为0的时候，就表示对象没人用了，简单粗暴，然而实际的情况中，大都不用这个方式，因为无法解决对象相互循环引用的问题</p><p>目前更多的是采用gc root可达性分析，简单来讲就是从一个根节点往下走，走的轨迹上所有的对象，都表示是存活的；也就是说，所有游离在这个之外的对象，都是需要回收的</p><p>那么什么是GC ROOT呢 ？</p><ul><li>虚拟机栈内引用的对象</li><li>方法区静态属性引用的对象</li><li>方法区常量引用的对象</li><li>本地方法栈中JNI引用的对象</li></ul><h2 id="ii-垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#ii-垃圾回收算法" aria-hidden="true">#</a> II. 垃圾回收算法</h2><p>回收，主要指的是将堆和运行时方法区内没有存活的对象干掉；而通常我们所说的垃圾回收，则主要针对的就是堆内的回收</p><h3 id="_1-标记-清除算法" tabindex="-1"><a class="header-anchor" href="#_1-标记-清除算法" aria-hidden="true">#</a> 1. 标记-清除算法</h3><p>简单理解：根据可达性扫一遍，有用的对象打个标记；剩下来一次大清理，将没有标记的都ko掉</p><p><strong>说明</strong></p><p>看书和博文时，常感觉标记，是将需要回收的对象标记出来，但仔细想了下，从实现成本来讲，根据可达性分析对象是否存活，顺带的直接将存活的打个标记，比将所有没存活的上面打上标记要来的简单，而且这也能算是标记出需要回收的对象</p><p><strong>缺点</strong></p><p>缺点很明显，会出现大量的碎片空间</p><h3 id="_2-复制算法" tabindex="-1"><a class="header-anchor" href="#_2-复制算法" aria-hidden="true">#</a> 2. 复制算法</h3><p>将存储空间一分为二，每次回收就是将这一边的存活对象搬移到另一边</p><p><strong>缺点</strong></p><ul><li>空间少了一半</li><li>对于存活时间比较久的对象，需要频繁的来回搬迁</li></ul><h3 id="_3-标记-压缩算法-或标记-整理算法" tabindex="-1"><a class="header-anchor" href="#_3-标记-压缩算法-或标记-整理算法" aria-hidden="true">#</a> 3. 标记-压缩算法（或标记-整理算法）</h3><p>为了节省空间，这个的策略是将所有存活的对象，往某一边界进行复制，等复制完毕之后，将辩解之外的对象都ko掉</p><h3 id="_4-分代收集算法" tabindex="-1"><a class="header-anchor" href="#_4-分代收集算法" aria-hidden="true">#</a> 4. 分代收集算法</h3><p>分代收集，实际来说就是综合其他算法的优良特性，结合实际应用场景来处理</p><ul><li>将存活时间久，占用空间大的对象，放在老年代</li><li>其他的对象可以放在年轻代</li></ul><p>也就是说：</p><p>老年代中，基本上是老而弥坚的对象，更加适合标记-整理算法，移到一边之后，由于经常活着，也就避免了频繁的复制了</p><p>新生代中，常是一些朝生夕死的对象，可能用了一次就可以ko，因此可以采用复制算法，标记-清除也是ok的</p><p>分代的主要思想就是根据不同的情况，给予不同的策略</p><h2 id="iii-简单说下垃圾收集器" tabindex="-1"><a class="header-anchor" href="#iii-简单说下垃圾收集器" aria-hidden="true">#</a> III. 简单说下垃圾收集器</h2><p>收集算法是内存回收的方法论，垃圾收集器就是内存回收的具体实现</p><h3 id="_1-serial收集" tabindex="-1"><a class="header-anchor" href="#_1-serial收集" aria-hidden="true">#</a> 1. Serial收集</h3><p>串行收集器，也就是程序跑一会，停下，让我们的回收线程（只有一个）来实现垃圾回收</p><p>新生代、老年代使用串行回收；新生代复制算法、老年代标记-压缩</p><h3 id="_2-parnew收集" tabindex="-1"><a class="header-anchor" href="#_2-parnew收集" aria-hidden="true">#</a> 2. ParNew收集</h3><p>上面的多线程版本</p><p>新生代并行，老年代串行；新生代复制算法、老年代标记-压缩</p><h3 id="_3-parallel收集" tabindex="-1"><a class="header-anchor" href="#_3-parallel收集" aria-hidden="true">#</a> 3. Parallel收集</h3><p>类似ParNew收集器，Parallel收集器更关注系统的吞吐量。可以通过参数来打开自适应调节策略，虚拟机会根据当前系统的运行情况收集性能监控信息，动态调整这些参数以提供最合适的停顿时间或最大的吞吐量；也可以通过参数控制GC的时间不大于多少毫秒或者比例；</p><p>新生代复制算法、老年代标记-压缩</p><h3 id="_4-parallel-old-收集器" tabindex="-1"><a class="header-anchor" href="#_4-parallel-old-收集器" aria-hidden="true">#</a> 4. Parallel Old 收集器</h3><p>Parallel Old是Parallel Scavenge收集器的老年代版本，使用多线程和“标记－整理”算法。这个收集器是在JDK 1.6中才开始提供</p><h3 id="_5-cms收集器" tabindex="-1"><a class="header-anchor" href="#_5-cms收集器" aria-hidden="true">#</a> 5. CMS收集器</h3><p>这个是比较常用的，有必要好好了解下</p><p>Concurrent Mark Sweep 收集器，是一种以获取最短回收停顿时间为目标的收集器，核心就是标记-清除算法</p><h4 id="a-步骤" tabindex="-1"><a class="header-anchor" href="#a-步骤" aria-hidden="true">#</a> a 步骤</h4><ul><li>初始标记：标记GC Roots能直接关联到的对象，速度很快，会暂停</li><li>并发标记：进行 GC Roots Tracing的过程</li><li>重新标记：为了修正并发标记期间，因为程序继续运作导致标记变动的那一部分对象的标记记录，一般会长于初始标记时间，远小于并发标记的时间</li><li>并发清除：并发干掉被回收的问题</li></ul><p>初始标记和重新标记的时候，会暂停服务；后面两个则是并发修改</p><h4 id="b-优缺点" tabindex="-1"><a class="header-anchor" href="#b-优缺点" aria-hidden="true">#</a> b. 优缺点</h4><p>优点：并发收集、低停顿</p><p>缺点：产生大量空间碎片、并发阶段会降低吞吐量</p><figure><img src="https://s3.mogucdn.com/mlcdn/c45406/180317_0j3h04f108edcae8jih5cl946fck5_546x259.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="_6-g1收集器" tabindex="-1"><a class="header-anchor" href="#_6-g1收集器" aria-hidden="true">#</a> 6. G1收集器</h3><p>传说中是最先进的收集器。。。。</p><p>用G1收集器时，Java堆的内存布局与其他收集器有很大差别，它将整个Java堆划分为多个大小相等的独立区域（Region），虽然还保留有新生代和老年代的概念，但新生代和老年代不再是物理隔阂了，它们都是一部分（可以不连续）Region的集合</p><h4 id="a-步骤-1" tabindex="-1"><a class="header-anchor" href="#a-步骤-1" aria-hidden="true">#</a> a. 步骤</h4><ul><li>标记阶段：初始标记，会停顿，触发minorgc</li><li>Root Region Scanning: 程序运行过程中会回收survivor区(存活到老年代)，这一过程必须在minorGC之前完成</li><li>并发标记：若发现区域对象中的所有对象都是垃圾，那个这个区域会被立即回收(图中打X)。同时，并发标记过程中，会计算每个区域的对象活性(区域中存活对象的比例)；并发执行，可能被minorgc打断</li><li>再标记：再标记阶段是用来收集 并发标记阶段 产生新的垃圾(并发阶段和应用程序一同运行)，停顿</li><li>复制-整理：并发干掉死亡对象，G1将回收区域的存活对象拷贝到新区域</li></ul><h2 id="iv-gc分析" tabindex="-1"><a class="header-anchor" href="#iv-gc分析" aria-hidden="true">#</a> IV. GC分析</h2><p>这个日志主要针对的是CMS收集器的分析，因为我接触的应用，服务器上就是选择的这个...</p><p>看一张神奇的图</p><figure><img src="https://s3.mogucdn.com/mlcdn/c45406/180315_6jj0f7h330hk3bgd400hfilf1fkdl_1080x324.jpg" alt="gc日志图" tabindex="0" loading="lazy"><figcaption>gc日志图</figcaption></figure><h3 id="内存分配和回收策略" tabindex="-1"><a class="header-anchor" href="#内存分配和回收策略" aria-hidden="true">#</a> 内存分配和回收策略</h3><h4 id="a-对象优先在eden分配" tabindex="-1"><a class="header-anchor" href="#a-对象优先在eden分配" aria-hidden="true">#</a> a. 对象优先在Eden分配</h4><p>大多数场景下，对象在新生代Eden区分配，当Eden去没有足够的空间进行分配时，虚拟机发起一次 Minor GC</p><ul><li><p>新生代MinorGC ： 发生在新生代的垃圾收集动作，因为java对象大多都具备朝生夕灭的特性是，所以一般MinorGC非常频繁，一般回收速度也很快</p></li><li><p>老年代MajorGC(FullGC) : 发生在老年代的GC，通常就伴随至少一次的MinorGC（非绝对），一般较慢，是MinorGC的十倍以上</p></li></ul><h4 id="b-大对象直接进入老年代" tabindex="-1"><a class="header-anchor" href="#b-大对象直接进入老年代" aria-hidden="true">#</a> b. 大对象直接进入老年代</h4><p>需要大量连续内存空间的Java对象，通常是数组，同构 -XX:PretenuresizeThreshold 参数，来设置大对象的阀值，超过这个阀值的直接分配在年老代，避免在Eden区及两个Survivor区之间发生大量的内存复制</p><h4 id="c-长期存活的对象将进入老年代" tabindex="-1"><a class="header-anchor" href="#c-长期存活的对象将进入老年代" aria-hidden="true">#</a> c. 长期存活的对象将进入老年代</h4><p>既然虚拟机采用分代收集的思想来管理内存，在回收时，就必须能识别哪些对象应放在新生代，那些对象应放在老年代中</p><p>每个对象都有个Age的计数器，对象在Eden出生并经过第一次MinorGC后仍存在，且可以被Survivor容纳的话，会被移动到Survivor空间中，并设置Age为1</p><p>对象在Survivor区没多经过一次MinorGC，则age+1</p><p>当age超过阀值（默认15），就会晋升到老年代</p><p>阀值可以通过 -XX:MaxTenuringThreshold来设置</p><h4 id="d-动态对象年龄判定" tabindex="-1"><a class="header-anchor" href="#d-动态对象年龄判定" aria-hidden="true">#</a> d. 动态对象年龄判定</h4><p>如果在Survivor空间中相同年龄所有对象的大小的总和，大于Survivor空间的一半，则年龄大于或等于该年龄的对象就可以进入老年代，无需等Age达到阈值</p><h4 id="e-空间分配担保" tabindex="-1"><a class="header-anchor" href="#e-空间分配担保" aria-hidden="true">#</a> e. 空间分配担保</h4><p>在发生MinorGC之前，虚拟机会先检查老年代最大可用的连续空间是否大于新生代所有对象总空间，如果成立，则Minor GC可以确保总是安全的；</p><p>否则，查看 HandlePromotionFailure参数，是否允许担保失败</p><p>若允许，则继续检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，若大于，则尝试MinorGC</p><p>否则进行FullGC</p><h2 id="v-小结" tabindex="-1"><a class="header-anchor" href="#v-小结" aria-hidden="true">#</a> V. 小结</h2><h3 id="_1-怎么判断对象是否存活" tabindex="-1"><a class="header-anchor" href="#_1-怎么判断对象是否存活" aria-hidden="true">#</a> 1. 怎么判断对象是否存活</h3><p>两种方式，引用计数和可达性分析</p><p>引用计数: 循环依赖问题，没啥用</p><p>可达性：从gc roots出发，可达的都是存活的</p><h3 id="_2-几种回收算法对比" tabindex="-1"><a class="header-anchor" href="#_2-几种回收算法对比" aria-hidden="true">#</a> 2. 几种回收算法对比</h3><table><thead><tr><th>算法</th><th>简述</th><th>缺点</th></tr></thead><tbody><tr><td>标记-清除</td><td>标记对象，统一清楚可回收对象</td><td>大量碎片</td></tr><tr><td>复制算法</td><td>内存一分为二，将存活的移动到另一边</td><td>存活久的对象，频繁复制；空间变小</td></tr><tr><td>标记-整理</td><td>存活对象往一边界拷贝，边界外的都干掉</td><td>对于生命周期特别短的不太合适</td></tr><tr><td>分代</td><td>年轻代 + 年老代，不同代选用不同算法</td><td>-</td></tr></tbody></table><h3 id="_3-cms和g1阶段对比" tabindex="-1"><a class="header-anchor" href="#_3-cms和g1阶段对比" aria-hidden="true">#</a> 3. CMS和G1阶段对比</h3><p>cms主要区分四个步骤：</p><ul><li>标记：停顿</li><li>并发标记</li><li>重新标记：停顿，重新处理并发过程中新标记的对象</li><li>并发清除：并发回收</li></ul><p>g1，从结构上而言，划分为一个个独立区域(region)，采用标记-整理算法，避免碎皮空间</p><h3 id="_4-简述内存分配和回收" tabindex="-1"><a class="header-anchor" href="#_4-简述内存分配和回收" aria-hidden="true">#</a> 4. 简述内存分配和回收</h3><p>基于CMS进行说明</p><ul><li>优先分配edge区（不够则触发gc）</li><li>大对象，分配在old区</li><li>存活时间久的塞入old区</li><li>动态时间判断（某个age对象总和大于Survivor一半，则塞入old区）</li><li>分配担保（进入old区，但是old区空间不够的策略，决定是否触发gc）</li></ul>',95),l=[h];function n(t,p){return e(),i("div",null,l)}const c=a(d,[["render",n],["__file","JVM学习之垃圾回收机制.html.vue"]]);export{c as default};
