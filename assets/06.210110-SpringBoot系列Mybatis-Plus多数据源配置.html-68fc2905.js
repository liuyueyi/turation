import{_ as p}from"./00-55bce994.js";import{_ as o,V as c,W as l,a1 as i,Y as n,a0 as s,Z as t,X as e,F as u}from"./framework-ad59245f.js";const r="/tutorial/imgs/210110/03.jpg",k={},d=n("p",null,"前面介绍了两种Mybatis的数据源配置，当然也少不了mybatis-plus",-1),m=n("p",null,"MyBatis-Plus (opens new window)（简称 MP）是一个 MyBatis (opens new window)的增强工具，在 MyBatis 的基础上只做增强不做改变，既然做增强，那多数据源这种硬性场景，肯定是有非常简单的解决方案的",-1),v=n("p",null,"本文将实例演示Mybatis-Plus多数据源的配置",-1),g=e('<h2 id="i-环境准备" tabindex="-1"><a class="header-anchor" href="#i-环境准备" aria-hidden="true">#</a> I. 环境准备</h2><h3 id="_1-数据库相关" tabindex="-1"><a class="header-anchor" href="#_1-数据库相关" aria-hidden="true">#</a> 1. 数据库相关</h3><p>以mysql为例进行演示说明，因为需要多数据源，一个最简单的case就是一个物理库上多个逻辑库，本文是基于本机的mysql进行操作</p><p>创建数据库<code>test</code> 与 <code>story</code>，两个库下都存在一个表<code>money</code> (同名同结构表，但是数据不同哦)</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>money<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>\n  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;用户名&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>money<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;钱&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>is_deleted<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>create_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;创建时间&#39;</span><span class="token punctuation">,</span>\n  <span class="token identifier"><span class="token punctuation">`</span>update_at<span class="token punctuation">`</span></span> <span class="token keyword">timestamp</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CURRENT_TIMESTAMP</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;更新时间&#39;</span><span class="token punctuation">,</span>\n  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-项目环境" tabindex="-1"><a class="header-anchor" href="#_2-项目环境" aria-hidden="true">#</a> 2. 项目环境</h3><p>本项目借助<code>SpringBoot 2.2.1.RELEASE</code> + <code>maven 3.5.3</code> + <code>IDEA</code>进行开发</p><p>下面是核心的<code>pom.xml</code>（源码可以再文末获取）</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>dynamic-datasource-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件信息<code>application.yml</code>，请注意下面的写法格式，如有疑问可以参考官方教程</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
      <span class="token key atrule">primary</span><span class="token punctuation">:</span> story <span class="token comment">#设置默认的数据源或者数据源组,默认值即为master</span>
      <span class="token key atrule">strict</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment">#设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候会抛出异常,不启动则使用默认数据源.</span>
      <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
        <span class="token key atrule">story</span><span class="token punctuation">:</span>
          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/story<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> root
          <span class="token key atrule">password</span><span class="token punctuation">:</span>
        <span class="token key atrule">test</span><span class="token punctuation">:</span>
          <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
          <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//127.0.0.1<span class="token punctuation">:</span>3306/test<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=UTF-8&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai</span>
          <span class="token key atrule">username</span><span class="token punctuation">:</span> root
          <span class="token key atrule">password</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-项目演示" tabindex="-1"><a class="header-anchor" href="#ii-项目演示" aria-hidden="true">#</a> II. 项目演示</h2>`,13),b={href:"https://mp.baomidou.com/guide/dynamic-datasource.html#%E6%96%87%E6%A1%A3-documentation",target:"_blank",rel:"noopener noreferrer"},y=e(`<h3 id="_1-实体类" tabindex="-1"><a class="header-anchor" href="#_1-实体类" aria-hidden="true">#</a> 1. 实体类</h3><p>mybatis-plus可以借助插件实现自动生成相应的代码，我们这里简单自主实现测试demo，因为两个数据库中表结构完全一致，所以只需要一个Entity</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@TableName</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyPo</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 指定自增策略
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> money<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;is_deleted&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> isDeleted<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;create_at&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Timestamp</span> createAt<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;update_at&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Timestamp</span> updateAt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-mapper接口" tabindex="-1"><a class="header-anchor" href="#_2-mapper接口" aria-hidden="true">#</a> 2. Mapper接口</h3><p>数据库操作定义接口<code>MoneyMapper</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MoneyMapper</span> <span class="token keyword">extends</span> <span class="token class-name">BaseMapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的xml文件<code>resources/mapper/money-mapper.xml</code></p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.git.hui.boot.multi.datasource.mapper.MoneyMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-service接口与实现" tabindex="-1"><a class="header-anchor" href="#_3-service接口与实现" aria-hidden="true">#</a> 3. Service接口与实现</h3><p>因为两张表，所以我们可以定义一个接口，两个不同的实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MoneyService</span> <span class="token keyword">extends</span> <span class="token class-name">IService</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;story&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StoryMoneyServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyMapper</span><span class="token punctuation">,</span> <span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">MoneyService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestMoneyServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyMapper</span><span class="token punctuation">,</span> <span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">MoneyService</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意上面Service的注解<code>@DS</code>，value为前面数据源配置文件中的key(<code>spring.datasource.dynamic.datasource</code>下面的<code>story</code> + <code>test</code>)</p><p>这个注解可以放在类上也可以放在方法上，方法上的优先级 &gt; 类，所以上面的两个Service实现可以改成一个</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MoneyServiceImpl</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyMapper</span><span class="token punctuation">,</span> <span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">MoneyService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;story&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByStoryIds</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> baseMapper<span class="token punctuation">.</span><span class="token function">selectBatchIds</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@DS</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByTestIds</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> baseMapper<span class="token punctuation">.</span><span class="token function">selectBatchIds</span><span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-测试" tabindex="-1"><a class="header-anchor" href="#_4-测试" aria-hidden="true">#</a> 4. 测试</h3><p>为简单起见，直接在启动类中添加写上测试代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.git.hui.boot.multi.datasource.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Application</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token class-name">TestMoneyServiceImpl</span> testMoneyService<span class="token punctuation">,</span> <span class="token class-name">StoryMoneyServiceImpl</span> storyMoneyService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MoneyPo</span><span class="token punctuation">&gt;</span></span> moneyPoList <span class="token operator">=</span> testMoneyService<span class="token punctuation">.</span><span class="token function">listByIds</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>moneyPoList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        moneyPoList <span class="token operator">=</span> storyMoneyService<span class="token punctuation">.</span><span class="token function">listByIds</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>moneyPoList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Application</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="ii-其他" tabindex="-1"><a class="header-anchor" href="#ii-其他" aria-hidden="true">#</a> II. 其他</h2><h3 id="_0-项目" tabindex="-1"><a class="header-anchor" href="#_0-项目" aria-hidden="true">#</a> 0. 项目</h3><p><strong>相关博文</strong></p>',21),h={href:"https://spring.hhui.top/spring-blog/2021/01/10/210110-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%9F%BA%E4%BA%8EAbstractRoutingDataSource%E4%B8%8EAOP%E5%AE%9E%E7%8E%B0%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E5%88%87%E6%8D%A2/",target:"_blank",rel:"noopener noreferrer"},E={href:"https://spring.hhui.top/spring-blog/2021/01/09/210109-SpringBoot%E7%B3%BB%E5%88%97Mybatis%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE%E4%B8%8E%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://spring.hhui.top/spring-blog/2020/12/27/201227-SpringBoot%E7%B3%BB%E5%88%97JdbcTemplate%E4%B9%8B%E5%A4%9A%E6%95%B0%E6%8D%AE%E6%BA%90%E9%85%8D%E7%BD%AE%E4%B8%8E%E4%BD%BF%E7%94%A8/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://spring.hhui.top/spring-blog/2020/04/06/200406-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8B%E4%B9%8BMybatis-Plus%E4%BB%A3%E7%A0%81%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://spring.hhui.top/spring-blog/2019/12/31/191231-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatisPlus%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://spring.hhui.top/spring-blog/2019/12/30/191230-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatis-%E6%B3%A8%E8%A7%A3%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://spring.hhui.top/spring-blog/2019/12/27/191227-SpringBoot%E7%B3%BB%E5%88%97%E6%95%99%E7%A8%8BMybatis-xml%E6%95%B4%E5%90%88%E7%AF%87/",target:"_blank",rel:"noopener noreferrer"},A=n("p",null,[n("strong",null,"源码")],-1),S={href:"https://github.com/liuyueyi/spring-boot-demo",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/109-multi-datasource-mybatis-plus",target:"_blank",rel:"noopener noreferrer"};function I(q,x){const a=u("ExternalLinkIcon");return c(),l("div",null,[d,m,v,i(" more "),g,n("blockquote",null,[n("p",null,[s("本文主要参考自Mybatis-Plus官方教程，如后续版本有啥变动，请以官方说明为准 "),n("a",b,[s("https://mp.baomidou.com/guide/dynamic-datasource.html#%E6%96%87%E6%A1%A3-documentation"),t(a)])])]),y,n("ul",null,[n("li",null,[n("a",h,[s("Mybatis基于AbstractRoutingDataSource与AOP实现多数据源切换"),t(a)])]),n("li",null,[n("a",E,[s("Mybatis多数据源配置与使用"),t(a)])]),n("li",null,[n("a",_,[s("JdbcTemplate之多数据源配置与使用"),t(a)])]),n("li",null,[n("a",f,[s("Mybatis-Plus代码自动生成"),t(a)])]),n("li",null,[n("a",B,[s("MybatisPlus整合篇"),t(a)])]),n("li",null,[n("a",M,[s("Mybatis+注解整合篇"),t(a)])]),n("li",null,[n("a",w,[s("Mybatis+xml整合篇"),t(a)])])]),A,n("ul",null,[n("li",null,[s("工程："),n("a",S,[s("https://github.com/liuyueyi/spring-boot-demo"),t(a)])]),n("li",null,[s("源码: "),n("a",T,[s("https://github.com/liuyueyi/spring-boot-demo/tree/master/spring-boot/109-multi-datasource-mybatis-plus"),t(a)])])])])}const N=o(k,[["render",I],["__file","06.210110-SpringBoot系列Mybatis-Plus多数据源配置.html.vue"]]);export{N as default};
