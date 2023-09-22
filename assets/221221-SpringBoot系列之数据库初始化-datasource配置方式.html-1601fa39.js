import{_ as t,V as p,W as o,a1 as c,Y as n,Z as s,$ as e,X as i,F as l}from"./framework-eef79181.js";const u="/tutorial/imgs/221221/00.jpg",d={},r=n("p",null,"在我们的日常业务开发过程中，如果有db的相关操作，通常我们是直接建立好对应的库表结构，并初始化对应的数据，即更常见的情况下是我们在已有表结构基础之下，进行开发； 但是当我们是以项目形式工作时，更常见的做法是所有的库表结构变更、数据的初始、更新等都需要持有对应的sql变更，并保存在项目工程中，这也是使用liqubase的一个重要场景； 将上面的问题进行简单的翻译一下，就是如何实现在项目启动之后执行相应的sql，实现数据库表的初始化？",-1),k=n("p",null,"本文将作为初始化方式的第一篇：基于SpringBoot的配置方式实现的数据初始化",-1),m=i(`<h2 id="i-项目搭建" tabindex="-1"><a class="header-anchor" href="#i-项目搭建" aria-hidden="true">#</a> I. 项目搭建</h2><h3 id="_1-依赖" tabindex="-1"><a class="header-anchor" href="#_1-依赖" aria-hidden="true">#</a> 1. 依赖</h3><p>首先搭建一个标准的SpringBoot项目工程，相关版本以及依赖如下</p><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本文使用MySql数据库, 版本8.0.31</p><h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置" aria-hidden="true">#</a> 2. 配置</h3><p>注意实现初始化数据库表操作的核心配置就在下面，重点关注</p><p>配置文件： <code>resources/application.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 默认的数据库名</span>
<span class="token key atrule">database</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> story

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/$<span class="token punctuation">{</span>database.name<span class="token punctuation">}</span><span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
    <span class="token key atrule">initialization-mode</span><span class="token punctuation">:</span> always
    <span class="token key atrule">platform</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">separator</span><span class="token punctuation">:</span> ;
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>config<span class="token punctuation">-</span>data.sql
    <span class="token comment">#data-username: root</span>
    <span class="token comment">#data-password:</span>
    <span class="token key atrule">schema</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>config<span class="token punctuation">-</span>schema.sql <span class="token comment"># schema必须也存在，若只存在data，data中的sql也不会被执行</span>

<span class="token comment"># springboot 2.7+ 版本使用下面这个</span>
<span class="token comment">#  sql:</span>
<span class="token comment">#    init:</span>
<span class="token comment">#      mode: always</span>
<span class="token comment">#      data-location: classpath:config-data.sql</span>
<span class="token comment">#      schema-location: classpath:init-schema.sql</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">root</span><span class="token punctuation">:</span> info
    <span class="token key atrule">org</span><span class="token punctuation">:</span>
      <span class="token key atrule">springframework</span><span class="token punctuation">:</span>
        <span class="token key atrule">jdbc</span><span class="token punctuation">:</span>
          <span class="token key atrule">core</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置中，相比较于普通的数据库链接配置，多了几个配置项</p><ul><li>spring.datasource.initialization-mode: 取值为 always，改成其他的会导致sql不会被执行</li><li>spring.datasource.platform: mysql</li><li>spring.datasource.seprator: ; 这个表示sql之间的分隔符</li><li>spring.datasource.data: classpath:config-data.sql 取值可以是数组，这里存的是初始化数据的sql文件地址</li><li>spring.datasource.data-username: 上面data对应的sql文件执行用户名</li><li>spring.datasource.data-password: 上面data对应的sql文件执行用户密码</li><li>spring.datasource.schema: classpath:config-schema.sql 取值也可以是数组，这里存的是初始化表结构的sql文件地址</li></ul><h3 id="_3-初始化sql" tabindex="-1"><a class="header-anchor" href="#_3-初始化sql" aria-hidden="true">#</a> 3. 初始化sql</h3><p>上面指定了两个sql，一个是用于建表的ddl，一个是用于初始化数据的dml</p><p><code>resources/config-schema.sql</code> 文件对应的内容如下</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>user2<span class="token punctuation">\`</span></span>
<span class="token punctuation">(</span>
    <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span>               <span class="token keyword">int</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;主键ID&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>third_account_id<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;第三方用户ID&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>user_name<span class="token punctuation">\`</span></span>        <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span>  <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span>         <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">128</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;密码&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>login_type<span class="token punctuation">\`</span></span>       <span class="token keyword">tinyint</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;登录方式: 0-微信登录，1-账号密码登录&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>deleted<span class="token punctuation">\`</span></span>          <span class="token keyword">tinyint</span>      <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;是否删除&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>create_time<span class="token punctuation">\`</span></span>      <span class="token keyword">timestamp</span>    <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">\`</span>update_time<span class="token punctuation">\`</span></span>      <span class="token keyword">timestamp</span>    <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;最后更新时间&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span>                <span class="token identifier"><span class="token punctuation">\`</span>key_third_account_id<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>third_account_id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">KEY</span>                <span class="token identifier"><span class="token punctuation">\`</span>user_name<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>user_name<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4  <span class="token keyword">COMMENT</span><span class="token operator">=</span><span class="token string">&#39;用户登录表&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>resources/config-data.sql</code> 文件对应的内容如下</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>user2<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> third_account_id<span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>user_name<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>password<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> login_type<span class="token punctuation">,</span> deleted<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;222222-0f85-4dd5-845c-7c5df3746e92&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;admin2&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-示例" tabindex="-1"><a class="header-anchor" href="#ii-示例" aria-hidden="true">#</a> II. 示例</h2><h3 id="_1-验证demo" tabindex="-1"><a class="header-anchor" href="#_1-验证demo" aria-hidden="true">#</a> 1. 验证demo</h3><p>接下来上面的工作准备完毕之后，在我们启动项目之后，正常就会执行上面的两个sql，我们写一个简单的验证demo</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationRunner</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">JdbcTemplate</span> jdbcTemplate<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ApplicationArguments</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> jdbcTemplate<span class="token punctuation">.</span><span class="token function">queryForList</span><span class="token punctuation">(</span><span class="token string">&quot;select * from user2 limit 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;启动成功，初始化数据: {}\\n{}&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-问题记录" tabindex="-1"><a class="header-anchor" href="#_2-问题记录" aria-hidden="true">#</a> 2. 问题记录</h3><p>从上面的过程走下来，看起来很简单，但是在实际的使用过程中，很容易遇到不生效的问题，下面记录一下</p><h4 id="_2-1-只有初始化数据data-sql-没有schema-sql时-不生效" tabindex="-1"><a class="header-anchor" href="#_2-1-只有初始化数据data-sql-没有schema-sql时-不生效" aria-hidden="true">#</a> 2.1 只有初始化数据data.sql，没有schema.sql时，不生效</h4><p>当库表已经存在时，此时我们可能并没有上文中的<code>config-schema.sql</code>文件，此时对应的配置可能是</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/$<span class="token punctuation">{</span>database.name<span class="token punctuation">}</span><span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
    <span class="token key atrule">initialization-mode</span><span class="token punctuation">:</span> always
    <span class="token key atrule">platform</span><span class="token punctuation">:</span> mysql
    <span class="token key atrule">separator</span><span class="token punctuation">:</span> ; <span class="token comment"># 默认为 ;</span>
    <span class="token key atrule">data</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>config<span class="token punctuation">-</span>data.sql
    <span class="token comment">#data-username: root</span>
    <span class="token comment">#data-password:</span>
    <span class="token comment">#schema: classpath:config-schema.sql # schema必须也存在，若只存在data，data中的sql也不会被执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上面所示，当我们只指定了data时，会发现data对应的sql文件也不会被执行；即要求schema对应的sql文件也必须同时存在</p><p>针对上面这种情况，可以考虑将data.sql中的语句，卸载schema.sql中</p><h4 id="_2-2-版本问题导致配置不生效" tabindex="-1"><a class="header-anchor" href="#_2-2-版本问题导致配置不生效" aria-hidden="true">#</a> 2.2 版本问题导致配置不生效</h4><p>在SpringBoot2.5+版本，使用 <code>spring.sql.init</code> 代替上面的配置项</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># springboot 2.5+ 版本使用下面这个</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">sql</span><span class="token punctuation">:</span>
    <span class="token key atrule">init</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span> always
      <span class="token key atrule">data-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>config<span class="token punctuation">-</span>data.sql
      <span class="token key atrule">schema-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>init<span class="token punctuation">-</span>schema.sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相关的配置参数说明如下</p><ul><li><code>spring.sql.init.enabled</code>：是否启动初始化的开关，默认是true。如果不想执行初始化脚本，设置为false即可。通过-D的命令行参数会更容易控制。</li><li><code>spring.sql.init.username</code>和<code>spring.sql.init.password</code>：配置执行初始化脚本的用户名与密码。这个非常有必要，因为安全管理要求，通常给业务应用分配的用户对一些建表删表等命令没有权限。这样就可以与datasource中的用户分开管理。</li><li><code>spring.sql.init.schema-locations</code>：配置与schema变更相关的sql脚本，可配置多个（默认用;分割）</li><li><code>spring.sql.init.data-locations</code>：用来配置与数据相关的sql脚本，可配置多个（默认用;分割）</li><li><code>spring.sql.init.encoding</code>：配置脚本文件的编码</li><li><code>spring.sql.init.separator</code>：配置多个sql文件的分隔符，默认是;</li><li><code>spring.sql.init.continue-on-error</code>：如果执行脚本过程中碰到错误是否继续，默认是false\`</li></ul><h4 id="_2-3-mode配置不对导致不生效" tabindex="-1"><a class="header-anchor" href="#_2-3-mode配置不对导致不生效" aria-hidden="true">#</a> 2.3 mode配置不对导致不生效</h4><p>当配置完之后发，发现sql没有按照预期的执行，可以检查一下<code>spring.datasource.initialization-mode</code>配置是否存在，且值为<code>always</code></p><h4 id="_2-4-重复启动之后-报错" tabindex="-1"><a class="header-anchor" href="#_2-4-重复启动之后-报错" aria-hidden="true">#</a> 2.4 重复启动之后，报错</h4><p>同样上面的项目，在第一次启动时，会执行schema对应的sql文件，创建表结构；执行data对应的sql文件，初始化数据；但是再次执行之后就会报错了，会提示表已经存在</p><p>即初始化是一次性的，第一次执行完毕之后，请将<code>spring.datasource.initialization-mode</code>设置为<code>none</code></p><h3 id="_3-小结" tabindex="-1"><a class="header-anchor" href="#_3-小结" aria-hidden="true">#</a> 3. 小结</h3><p>本文主要介绍了项目启动时，数据库的初始化方式，当然除了本文中介绍的<code>spring.datasource</code>配置之外，还有<code>spring.jpa</code>的配置方式</p><p>对于配置方式不太友好的地方则在于不好自适应控制，若表存在则不执行；若不存在则执行；后面将介绍如何使用<code>DataSourceInitializer</code>来实现自主可控的数据初始化，以及更现代化一些的基于liquibase的数据库版本管理记录</p><h2 id="iii-不能错过的源码和相关知识点" tabindex="-1"><a class="header-anchor" href="#iii-不能错过的源码和相关知识点" aria-hidden="true">#</a> III. 不能错过的源码和相关知识点</h2><h3 id="_0-项目" tabindex="-1"><a class="header-anchor" href="#_0-项目" aria-hidden="true">#</a> 0. 项目</h3>`,45),v={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/161-schema-init",target:"_blank",rel:"noopener noreferrer"};function b(h,y){const a=l("ExternalLinkIcon");return p(),o("div",null,[r,k,c(" more "),m,n("ul",null,[n("li",null,[s("工程："),n("a",v,[s("https://github.com/liuyueyi/spring-boot-demo"),e(a)])]),n("li",null,[s("源码："),n("a",g,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/161-schema-init"),e(a)])])])])}const f=t(d,[["render",b],["__file","221221-SpringBoot系列之数据库初始化-datasource配置方式.html.vue"]]);export{f as default};
