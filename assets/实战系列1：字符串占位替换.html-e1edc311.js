import{_ as a,V as s,W as t,a1 as e,Y as n,a0 as p,X as o}from"./framework-ad59245f.js";const c={},l=n("h1",{id:"实战系列1-字符串占位替换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#实战系列1-字符串占位替换","aria-hidden":"true"},"#"),p(" 实战系列1：字符串占位替换")],-1),u=n("p",null,"字符串占位替换，相信没有小伙伴是陌生的，这东西可以说是伴随着我们所有的项目工程，编码过程；别不相信，如",-1),i=n("ul",null,[n("li",null,"String.format"),n("li",null,"sql参数拼接的占位"),n("li",null,"log日志输出")],-1),d=n("p",null,"接下来我们看一下在我们的日常工作生涯中，经常涉及到的几种占位替换方式",-1),r=o(`<h2 id="_1-string-format" tabindex="-1"><a class="header-anchor" href="#_1-string-format" aria-hidden="true">#</a> 1. String.format</h2><p>这种可以说是最原始最基础的方式了，基本上在最开始学习java这门语言的时候就会涉及到，语法也比较简单</p><p>举例如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> &quot;一灰灰blog”<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>%</code>来表示占位，后面跟上不同的标识符，用于限定这个占位处的参数类型</p><p>这种使用姿势，由jdk原生提供支持，下表为不同的转换符对应的说明</p><table><thead><tr><th>转换符</th><th>说明</th><th>参数实例</th></tr></thead><tbody><tr><td><code>%s</code></td><td>字符串替换</td><td>&quot;一灰灰&quot;</td></tr><tr><td><code>%c</code></td><td>字符类型</td><td>&#39;a&#39;</td></tr><tr><td><code>%b</code></td><td>布尔类型</td><td>true/false</td></tr><tr><td><code>%d</code></td><td>整数，十进制</td><td>10</td></tr><tr><td><code>%x</code></td><td>整数，十六进制</td><td>0x12</td></tr><tr><td><code>%o</code></td><td>整数，八进制</td><td>012</td></tr><tr><td><code>%f</code></td><td>浮点</td><td>0.12f</td></tr><tr><td><code>%e</code></td><td>指数</td><td>2e2</td></tr><tr><td><code>%g</code></td><td>通用浮点型</td><td></td></tr><tr><td><code>%h</code></td><td>散列</td><td></td></tr><tr><td><code>%%</code></td><td>百分比</td><td></td></tr><tr><td><code>%n</code></td><td>换行</td><td></td></tr><tr><td><code>%tx</code></td><td>日期与时间类型（x代表不同的日期与时间转换符</td><td></td></tr></tbody></table><p>虽然上面表中列出了很多，但实际使用时，<code>%s</code>, <code>%d</code>, <code>%f</code> 这三个就足以应付绝大部分的场景了；使用姿势和上面的实例参不多，第一个参数为字符串模板，后面的可变参数为待替换的值</p><p>下面是在实际使用过程中的注意事项</p><h3 id="_1-1-类型不匹配" tabindex="-1"><a class="header-anchor" href="#_1-1-类型不匹配" aria-hidden="true">#</a> 1.1 类型不匹配</h3><p>上面的表中介绍了不同的转换符，要求的参数类型，如果没有对应上，会怎样</p><p><strong><code>%s</code>，传入非字符串类型</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token number">0x12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello 120
hello true
hello [I@3d82c5f3
hello [1, 2, 3]
hello 18
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，<code>%s</code>的占位标记，传参如果不是String类型，那么实际替换的是 <code>arg.toString()</code> (所以数组输出的是地址，而list输出了内容)</p><p><strong><code>%d</code>，传入非整数</strong></p><p>与字符串的不一样的是，如果我们定义要求替换的参数类型为整数，那么传参不是整数，就会抛异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %d&quot;</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两个，一个传入的参数为浮点，一个传入的是字符串，在实际替换的时候，可不会调用<code>Integer.valufOf(String.valueOf(xxx))</code>来强转，而是采用更直接的方式，抛异常</p><p>关键的提示信息如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.util.IllegalFormatConversionException: d != java.lang.Float
java.util.IllegalFormatConversionException: d != java.lang.String
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此在实际使用这种方式进行替换时，推荐选择 <code>%s</code>，毕竟兼容性更好</p><h3 id="_1-2-参数个数不匹配" tabindex="-1"><a class="header-anchor" href="#_1-2-参数个数不匹配" aria-hidden="true">#</a> 1.2 参数个数不匹配</h3><p>我们会注意到,<code>String.format</code>接收的参数是不定长的，那么就可能存在字符串模板中预留的占位与实际传入的参数个数不匹配的场景，那么出现这种场景时，会怎样</p><p><strong>参数缺少</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yihui&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的例子中，模板要求两个，实际只传入一个参数，会直接抛异常<code>MissingFormatArgumentException</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.util.MissingFormatArgumentException: Format specifier &#39;%s&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>参数过多</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello %s&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yihuihui&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行正常，多余的参数不会被替换</p><p>因此，我们在使用<code>String.format</code>进行字符串替换时，请确保传参不要少于实际定义的参数个数；多了还好，少了就会抛异常</p><h2 id="_2-messageformat" tabindex="-1"><a class="header-anchor" href="#_2-messageformat" aria-hidden="true">#</a> 2. MessageFormat</h2><p>上面介绍的String.format虽说简单好用，但我们用多之后，自然会遇到，一个参数，需要替换模板中多个占位的场景，针对这种场景，更友好的方式是<code>MessageFormat</code>，这个也是jdk原生提供的</p><p>我们来简单看一下它的使用姿势</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> ans <span class="token operator">=</span> <span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello {0}, wechart site {0}{1}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一灰灰&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>{数字}</code>来表示占位，其中数字对应的是传参的下标，因此当一个参数需要复用时，使用MessageFormat就可以比较简单的实现了，上面就是一个实例，替换之后的字符串为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello 一灰灰, wechart site 一灰灰blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来说一下它使用时的注意事项</p><h3 id="_2-1-成对出现" tabindex="-1"><a class="header-anchor" href="#_2-1-成对出现" aria-hidden="true">#</a> 2.1 {}成对出现</h3><p>如果字符串中，只出现一个<code>{</code>，而没有配套的<code>}</code>，会抛异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello }&quot;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello { world&quot;</span><span class="token punctuation">,</span>  <span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意上面两种case，上面一个是有<code>}</code>而缺少<code>{</code>，这样是没有问题的；而下面那个则会抛异常</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>IllegalArgumentException</span><span class="token operator">:</span> <span class="token class-name">Unmatched</span> braces in the pattern<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果字符串中却是希望输出<code>{</code>，可以使用单引号来处理</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello &#39;{&#39; world&quot;</span><span class="token punctuation">,</span>  <span class="token number">456</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-单引号" tabindex="-1"><a class="header-anchor" href="#_2-2-单引号" aria-hidden="true">#</a> 2.2 单引号</h3><p>上面提到需要转移时，可以用单引号进行处理，在字符串模板的定义中，如果有单引号，需要各位注意</p><p><strong>只有一个单引号，会导致后面所有占位都不生效</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello {0}, I&#39;m {1}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一灰灰&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个输出结果可能和我们实际希望的不一致</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello 一灰灰, Im {1}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要解决上面这个，就是使用两个单引号</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">MessageFormat</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello {0}, I&#39;&#39;m {1}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;一灰灰&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;blog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样输出的就是我们预期的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello 一灰灰, I&#39;m blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-序号省略" tabindex="-1"><a class="header-anchor" href="#_2-3-序号省略" aria-hidden="true">#</a> 2.3 序号省略</h3><p>上面的定义中，已经明确要求我们在<code>{}</code>中指定参数的序号，如果模板中没有指定会怎样?</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>messageFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;hello {}, world&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;yihuihui&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>直接抛异常</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.lang.IllegalArgumentException: can&#39;t parse argument number: 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-小结" tabindex="-1"><a class="header-anchor" href="#_3-小结" aria-hidden="true">#</a> 3. 小结</h2><p>本文介绍的实战小技巧属于是jdk原生提供的两种实现字符串占位替换的方式，除了这两个之外，我们日常开发中还会遇到其他的占位替换方式</p><p>比如sql的<code>?</code>替换，mybatis中sql参数组装使用<code>\${paramName}</code>，或者logback日志输出中的<code>{}</code>来表示占位，spring的@Value注解声明的配置注入方式<code>\${name:defaultValue}</code>，这些也都属于占位替换的范畴，那么它们又是怎么实现的呢？</p>`,65);function k(m,v){return s(),t("div",null,[l,u,i,d,e(" more "),r])}const h=a(c,[["render",k],["__file","实战系列1：字符串占位替换.html.vue"]]);export{h as default};
