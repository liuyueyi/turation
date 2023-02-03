import{_ as p,V as o,W as l,a1 as c,Y as n,a0 as s,Z as t,X as e,F as i}from"./framework-ad59245f.js";const u="/tutorial/imgs/210707/00.jpg",r="/tutorial/imgs/210707/01.jpg",d="/tutorial/imgs/210707/02.jpg",k={},m=n("p",null,"通常我们在使用Mybatis进行开发时，会选择xml文件来写对应的sql，然后将Mapper接口与sql的xml文件建立绑定关系，然后在项目中调用mapper接口就可以执行对应的sql",-1),g=n("p",null,"那么如何将Mapper接口与sql进行绑定呢？本文将介绍四种常见的姿势",-1),v=n("ul",null,[n("li",null,"默认策略"),n("li",null,[s("SpringBoot配置参数"),n("code",null,"mybatis.mapper-locations")]),n("li",null,[n("code",null,"<mapper>"),s("指定")]),n("li",null,"SqlSessionFactory指定")],-1),b=e(`<h2 id="i-环境准备" tabindex="-1"><a class="header-anchor" href="#i-环境准备" aria-hidden="true">#</a> I. 环境准备</h2><h3 id="_1-数据库准备" tabindex="-1"><a class="header-anchor" href="#_1-数据库准备" aria-hidden="true">#</a> 1. 数据库准备</h3><p>使用mysql作为本文的实例数据库，新增一张表</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>money<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>money<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;钱&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>is_deleted<span class="token punctuation">\`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>create_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>update_at<span class="token punctuation">\`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;更新时间&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-项目环境" tabindex="-1"><a class="header-anchor" href="#_2-项目环境" aria-hidden="true">#</a> 2. 项目环境</h3><p>本文借助 <code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><p>pom依赖如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>db配置信息 <code>application.yml</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/story<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-实例演示" tabindex="-1"><a class="header-anchor" href="#ii-实例演示" aria-hidden="true">#</a> II. 实例演示</h2><p>环境搭建完毕，准备对应的实体类，Mapper接口</p><h3 id="_1-实体类-mapper接口" tabindex="-1"><a class="header-anchor" href="#_1-实体类-mapper接口" aria-hidden="true">#</a> 1. 实体类，Mapper接口</h3><p>数据库实体类: <code>MoneyPo</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyPo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> money<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isDeleted<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Timestamp</span> createAt<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Timestamp</span> updateAt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个基础的Mapper接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MoneyMapper</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> <span class="token function">savePo</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;po&quot;</span><span class="token punctuation">)</span> <span class="token class-name">MoneyPo</span> po<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个demo service</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyRepository</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MoneyPo</span> po <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MoneyPo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        po<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;mybatis user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        po<span class="token punctuation">.</span><span class="token function">setMoney</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">12343</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        po<span class="token punctuation">.</span><span class="token function">setIsDeleted</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        moneyMapper<span class="token punctuation">.</span><span class="token function">savePo</span><span class="token punctuation">(</span>po<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add record: &quot;</span> <span class="token operator">+</span> po<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-sql文件" tabindex="-1"><a class="header-anchor" href="#_2-sql文件" aria-hidden="true">#</a> 2. sql文件</h3><p>写sql的xml文件内容如下</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.git.hui.boot.mybatis.mapper.MoneyMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>savePo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.git.hui.boot.mybatis.entity.MoneyPo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>po.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      INSERT INTO \`money\` (\`name\`, \`money\`, \`is_deleted\`)
      VALUES
	  (#{po.name}, #{po.money}, #{po.isDeleted});
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-mapper与sql绑定" tabindex="-1"><a class="header-anchor" href="#_3-mapper与sql绑定" aria-hidden="true">#</a> 3. Mapper与Sql绑定</h3><p>以上为代码层面实现CURD的基础知识，基本上就是mybatis操作的那些套路，没有什么需要特殊注意的；接下来我们进入本文主题</p><p>如何告诉mybatis，将上面的<code>MoenyMapper</code>接口与xml文件关联起来</p><h4 id="_3-1-默认方式" tabindex="-1"><a class="header-anchor" href="#_3-1-默认方式" aria-hidden="true">#</a> 3.1 默认方式</h4><p>采用默认的绑定方式，不需要我们做额外的操作，重点是需要遵循规则</p><ul><li>xml的目录结构，与Mapper接口的包路径完全一致</li><li>xml文件名与Mapper接口名完全一致（注意大小写都要完全一致）</li></ul><p><strong>请注意上面的另个完全一致</strong></p><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用默认的方式进行绑定时，一个示例如上图；特别需要注意的是文件名的大小写，xml文件的目录层级都需要完全一致</p><p>如果使用上面这种方式，在执行时，依然提示有问题，排查的思路就是查看 target目录下生成的class文件与xml文件是否在一起，如下图就是正常的case</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>再次说明</strong></p><ul><li>基于上面的case，我们可以直接将xml文件，与mapper接口写在一起，不放在资源路径<code>resources</code>下面</li></ul><h4 id="_3-2-springboot配置" tabindex="-1"><a class="header-anchor" href="#_3-2-springboot配置" aria-hidden="true">#</a> 3.2 SpringBoot配置</h4><p>SpringBoot提供了一个简单的配置，来指定Mapper接口与sql的绑定，一行配置即可</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>sqlmapper/<span class="token important">*.xml</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这种方式就比较简单了，不要求xml文件与Mapper接口文件名一致；也没有指定路径层级一致</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_3-3-mapper标签" tabindex="-1"><a class="header-anchor" href="#_3-3-mapper标签" aria-hidden="true">#</a> 3.3 Mapper标签</h4><p>mapper标签，需要放在mybatis的配置文件中，因此我们首先通过SpringBoot的配置参数指定文件路径</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token key atrule">config-location</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mybatis<span class="token punctuation">-</span>config.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在资源文件下，新建文件 <code>mybatis-config.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//ibatis.apache.org//DTD Config 3.1//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-config.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sqlmapper/money-mapper.xml<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的mapper标签来指定注册关系，也是可行的，详情可参考官方文档 ！</p>`,46),y={href:"https://mybatis.org/mybatis-3/configuration.html#mappers",target:"_blank",rel:"noopener noreferrer"},h=e(`<h4 id="_3-4-sqlsessionfactory" tabindex="-1"><a class="header-anchor" href="#_3-4-sqlsessionfactory" aria-hidden="true">#</a> 3.4 SqlSessionFactory</h4><p>在前面一篇介绍Mapper接口注册的博文中，就介绍了通过<code>qlSessionFactory</code>+ <code>MapperScannerConfigurer</code>来注册</p><p>这里也是可以通过<code>SqlSessionFactory</code>来指定xml文件的</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;sqlSessionFactory&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">sqlSessionFactory</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSessionFactoryBean</span> bean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span>
            <span class="token comment">// 设置mybatis的xml所在位置，这里使用mybatis注解方式，没有配置xml文件</span>
            <span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token string">&quot;classpath*:mapping/*.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 注册typehandler，供全局使用</span>
    bean<span class="token punctuation">.</span><span class="token function">setTypeHandlers</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Timestamp2LongHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    bean<span class="token punctuation">.</span><span class="token function">setPlugins</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SqlStatInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> bean<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h3><p>本文主要介绍了四种Mapper接口与sql文件关系绑定的姿势，了解几种不同的姿势的特点，在实际的项目开发中，选择一个即可</p><ul><li>默认：在resource资源目录下，xml文件的目录层级与Mapper接口的包层级完全一致，且xml文件名与mapper接口文件名也完全一致 <ul><li>如mapper接口： <code>com.git.hui.boot.mybatis.mapper.MoneyMapper</code></li><li>对应的xml文件: <code>com/git/hui/boot/mybatis/mapper/MoneyMapper.xml</code></li></ul></li><li>springboot配置参数: <ul><li>application.yml配置文件中，指定 <code>mybatis.mapper-locations=classpath:sqlmapper/*.xml</code></li></ul></li><li>mybatis-config配置文件 <ul><li>这种姿势常见于非SpringBoot项目集成mybatis，通常将mybatis的相关配置放在 <code>mybatis-config.xml</code> 文件中</li><li>首先在配置文件中，指定加载参数 <code>mybatis.config-location=classpath:mybatis-config.xml</code></li><li>然后指定映射器 <code> &lt;mappers&gt;&lt;mapper resource=&quot;sqlmapper/money-mapper.xml&quot;/&gt;&lt;/mappers&gt;</code></li></ul></li><li>SqlSessionFactory指定 <ul><li>直接在SqlSessionFactory中指定即可Mapper文件</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 设置mybatis的xml所在位置，这里使用mybatis注解方式，没有配置xml文件</span>
bean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span><span class="token string">&quot;classpath*:mapping/*.xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),E={href:"https://spring.hhui.top/spring-blog/2019/12/30/191230-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatis-%E6%B3%A8%E8%A7%A3%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"iii-不能错过的源码和相关知识点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#iii-不能错过的源码和相关知识点","aria-hidden":"true"},"#"),s(" III. 不能错过的源码和相关知识点")],-1),f=n("h3",{id:"_0-项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_0-项目","aria-hidden":"true"},"#"),s(" 0. 项目")],-1),B={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/104-mybatis-ano",target:"_blank",rel:"noopener noreferrer"},M={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/103-mybatis-xml",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"mybatis系列博文",-1),A={href:"https://spring.hhui.top/spring-blog/2021/07/06/210706-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E4%B9%8BMapper%E6%B3%A8%E5%86%8C%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://spring.hhui.top/spring-blog/2021/01/10/210110-SpringBoot%E7%B3%BB%E5%88%97Mybatis-Plus%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://spring.hhui.top/spring-blog/2021/01/10/210110-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%9F%BA%E4%BA%8EAbstractRoutingDataSource%E4%B8%8EAOP%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E5%88%87%E6%8D%A2/",target:"_blank",rel:"noopener noreferrer"},T={href:"https://spring.hhui.top/spring-blog/2021/01/09/210109-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE%E4%B8%8E%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},D={href:"https://spring.hhui.top/spring-blog/2020/12/27/201227-SpringBoot%E7%B3%BB%E5%88%97JdbcTemplate%E4%B9%8B%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE%E4%B8%8E%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://spring.hhui.top/spring-blog/2020/04/06/200406-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BMybatis-Plus%E4%BB%A3%E7%A0%81%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://spring.hhui.top/spring-blog/2019/12/31/191231-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatisPlus%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://spring.hhui.top/spring-blog/2019/12/30/191230-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatis-%E6%B3%A8%E8%A7%A3%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://spring.hhui.top/spring-blog/2019/12/27/191227-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatis-xml%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"};function L(R,U){const a=i("ExternalLinkIcon");return o(),l("div",null,[m,g,v,c(" more "),b,n("blockquote",null,[n("p",null,[n("a",y,[s("https://mybatis.org/mybatis-3/configuration.html#mappers"),t(a)])])]),h,n("p",null,[s("除了上面几种方式之外，mybatis还支持无xml的方式，完全依靠注解来实现sql的拼装，因此也就不存在映射关系绑定了，关于注解的case，可以参考博文 "),n("a",E,[s("【DB系列】Mybatis+注解整合篇"),t(a)])]),_,f,n("ul",null,[n("li",null,[s("工程："),n("a",B,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])]),n("li",null,[s("源码："),n("a",q,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/104-mybatis-ano"),t(a)])]),n("li",null,[s("源码："),n("a",M,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/103-mybatis-xml"),t(a)])])]),x,n("ul",null,[n("li",null,[n("a",A,[s("【DB系列】SpringBoot系列Mybatis之Mapper注册的几种方式"),t(a)])]),n("li",null,[n("a",w,[s("【DB系列】Mybatis-Plus多数据源配置"),t(a)])]),n("li",null,[n("a",S,[s("【DB系列】Mybatis基于AbstractRoutingDataSource与AOP实现多数据源切换"),t(a)])]),n("li",null,[n("a",T,[s("【DB系列】Mybatis多数据源配置与使用"),t(a)])]),n("li",null,[n("a",D,[s("【DB系列】JdbcTemplate之多数据源配置与使用"),t(a)])]),n("li",null,[n("a",N,[s("【DB系列】Mybatis-Plus代码自动生成"),t(a)])]),n("li",null,[n("a",I,[s("【DB系列】MybatisPlus整合篇"),t(a)])]),n("li",null,[n("a",P,[s("【DB系列】Mybatis+注解整合篇"),t(a)])]),n("li",null,[n("a",F,[s("【DB系列】Mybatis+xml整合篇"),t(a)])])])])}const j=p(k,[["render",L],["__file","09.210707-SpringBoot系列Mybatis之Mapper接口与Sql绑定几种姿势.html.vue"]]);export{j as default};
