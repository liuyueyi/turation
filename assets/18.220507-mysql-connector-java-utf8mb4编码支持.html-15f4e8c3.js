import{_ as a,V as s,W as t,a1 as e,X as n,a0 as o}from"./framework-23f3cf9b.js";const p="/tutorial/hexblog/imgs/220507/00.png",c="/tutorial/hexblog/imgs/220507/01.png",i="/tutorial/hexblog/imgs/220507/02.png",l="/tutorial/hexblog/imgs/220507/04.png",u="/tutorial/hexblog/imgs/220507/05.png",r="/tutorial/hexblog/imgs/220507/06.png",d="/tutorial/hexblog/imgs/220507/07.png",k={},m=n("p",null,"对于mysql而言，我摩恩知道utf8与utf8mb4两种编码之间是不同的，通常来说我们推荐使用后者，可以用来存储emoj表情；通常而言，上面的编码对于我们的实际使用并没有什么影响，然而现实总有特殊场景",-1),g=n("p",null,"下面记录一下定位mysql-connector-java客户端建立连接，设置编码的全过程",-1),v=o(`<h3 id="_1-编码设置解决unicode读写问题" tabindex="-1"><a class="header-anchor" href="#_1-编码设置解决unicode读写问题" aria-hidden="true">#</a> 1. 编码设置解决unicode读写问题</h3><p>当我们直接使用终端连接mysql时，可能会出现emoj无法正确查看的场景，如下</p><p>比如直接再终端连接mysql，查看连接编码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;char%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>而我们实际上希望的是utf8mb4，当连接编码使用utf8时，在我们查看emoj表情会有问题</p><figure><img src="'+c+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当我们修改了编码之后，则正常显示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SET NAMES utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那么问题来了，通过java代码连接之后，为什么我们一般都不会去主动设置 <code>set names utfmb4</code>，在实际使用的时候也没有问题，why?</p><h3 id="_2-源码分析" tabindex="-1"><a class="header-anchor" href="#_2-源码分析" aria-hidden="true">#</a> 2. 源码分析</h3><h4 id="mysql-connector-java-5-x版本" tabindex="-1"><a class="header-anchor" href="#mysql-connector-java-5-x版本" aria-hidden="true">#</a> mysql-connector-java 5.x版本</h4><p>java侧，通常是使用上面这个包来建立连接，首先是在连接url中指定编码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdbc:mysql://127.0.0.1:3306/story?useUnicode=true&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>注意：<code>useUnicode=true&amp;characterEncoding=UTF-8</code> 这两个配置很重要</li></ul><p>对于5.x系列，关键代码在</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span>ConnectionImpl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的实现中有一个版本判断，当mysql服务器的版本 &gt;= 5.5.2时，<code>utf8mb4Supported= true</code> 再看一下设置连接编码的条件配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">getUseOldUTF8Behavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dontCheckServerMatch <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">characterSetNamesMatches</span><span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>utf8mb4Supported <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">characterSetNamesMatches</span><span class="token punctuation">(</span><span class="token string">&quot;utf8mb4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token operator">||</span> <span class="token punctuation">(</span>connectionCollationSuffix<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
            <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">getConnectionCollation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>serverVariables<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;collation_server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">execSQL</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;SET NAMES &quot;</span> <span class="token operator">+</span> utf8CharsetName <span class="token operator">+</span> connectionCollationSuffix<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token constant">DEFAULT_RESULT_SET_TYPE</span><span class="token punctuation">,</span>
                <span class="token constant">DEFAULT_RESULT_SET_CONCURRENCY</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>database<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>serverVariables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;character_set_client&quot;</span><span class="token punctuation">,</span> utf8CharsetName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>serverVariables<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;character_set_connection&quot;</span><span class="token punctuation">,</span> utf8CharsetName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>dontCheckServerMatch = false</code></li><li><code>characterSetNamesMatches</code> 这个方法，主要是判断mysql服务器的配置 <code>character_set_client</code> + <code>character_set_connection</code> 是否与客户端设置的编码一致，若不一致表示需要修改 <ul><li>比如当服务端设置的是<code>utf8</code>时， <code>(utf8mb4Supported &amp;&amp; !characterSetNamesMatches(&quot;utf8mb4&quot;))</code> 这个条件满足</li><li>若服务端设置的是<code>utf8mb4</code>时，<code>!characterSetNamesMatches(&quot;utf8&quot;)</code> 这个条件满足</li></ul></li><li>其次就是<code>collation_server</code> 这个配置不匹配时，也会执行下面的编码设置</li></ul><p>基于上面的分析，我们走到了<code>set names utf8mb4</code>的编码设置，即不需要我们再手动去设置这个编码了，就可以愉快的使用<code>utf8mb4</code>进行玩耍了</p><p>再捞一下源码提交历史，最早的这个版本限制来自于10年6月，后续又有一般通过<code>server charaset</code>来判断是否可以指定<code>utf8mb4</code>编码， 最后又在18年7月的时候，支持通过在url中设置参数<code>connectionCollation</code> 来指定具体编码(具体的源码在下面8.x版本有分析)</p><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>从提交历史来看，要使用<code>connectionCollation</code> 来指定链接编码时，请确保依赖版本大与等于 5.1.47</strong></p><h4 id="mysql-connector-java-8-x版本" tabindex="-1"><a class="header-anchor" href="#mysql-connector-java-8-x版本" aria-hidden="true">#</a> mysql-connector-java 8.x版本</h4><p>8.x版本的连接之后，设置编码的逻辑与上面不太一样，核心代码在下面 （以8.0.20版本为例）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>NativeSession<span class="token comment">#configureClientCharacterSet</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>注意：最新版本上面设置字符编码的逻辑，迁移到 <code>com.mysql.cj.NativeCharsetSettings#configurePostHandshake</code> 中了</p></blockquote><p>在8.x版本中，获取字符集在更前面一点，下面框出来的逻辑，主要是解析url中的<code>connectionCollation</code>配置，当不存在这个配置时，若<code>realJavaEncoding = utf8</code>则默认使用<code>utf8mb4</code> (5.x也有下面这个逻辑，具体代码在 <code>com.mysql.jdbc.ConnectionImpl#configureClientCharacterSet</code>)</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>因此基于上面的实现，可以通过下面的方式指定具体的编码</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>jdbc:mysql:<span class="token comment">//127.0.0.1:3306/story?connectionCollation=utf8mb4_general_ci&amp;useUnicode=true&amp;characterEncoding=UTF8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后同样看一下设置 utf8mb4 连接编码的条件限定，其实和5.x的是一致的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>dontCheckServerMatch <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">characterSetNamesMatches</span><span class="token punctuation">(</span><span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
    <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">characterSetNamesMatches</span><span class="token punctuation">(</span><span class="token string">&quot;utf8mb4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>connectionCollationSuffix<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
                                                                                   <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>connectionCollation<span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServerVariable</span><span class="token punctuation">(</span><span class="token string">&quot;collation_server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">sendCommand</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>commandBuilder<span class="token punctuation">.</span><span class="token function">buildComQuery</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&quot;SET NAMES &quot;</span> <span class="token operator">+</span> utf8CharsetName <span class="token operator">+</span> connectionCollationSuffix<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServerVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;character_set_client&quot;</span><span class="token punctuation">,</span> utf8CharsetName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>protocol<span class="token punctuation">.</span><span class="token function">getServerSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getServerVariables</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;character_set_connection&quot;</span><span class="token punctuation">,</span> utf8CharsetName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-解决办法" tabindex="-1"><a class="header-anchor" href="#_3-解决办法" aria-hidden="true">#</a> 3. 解决办法</h3><p>上面两个主要分析了为什么我们平时使用的时候，不需要设置连接编码，但是请注意，默认场景下并不是一定没问题，比如5.x客户端，若mysql的服务器版本小于5.5.2，那也不成，因此为了以防万一，最好的方式就是在连接url中，指定<code>connectionCollation</code>，即使用下面的方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jdbc:mysql://127.0.0.1:3306/story?connectionCollation=utf8mb4_general_ci&amp;useUnicode=true&amp;characterEncoding=UTF8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>connectionCollation</code>: 连接字符集</li><li><code>characterEncoding</code>: 字符编码</li><li><code>useUnicode</code></li></ul><p>使用<code>connectionCollation</code>配置时，请确保版本</p><ul><li>5.x: &gt;= 5.1.47</li><li>8.x: &gt;= 8.0.13</li></ul><p>其次就是服务器端设置默认编码为 utf8mb4</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>default-character-set=utf8mb4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,45);function f(h,b){return s(),t("div",null,[m,g,e(" more "),v])}const x=a(k,[["render",f],["__file","18.220507-mysql-connector-java-utf8mb4编码支持.html.vue"]]);export{x as default};
