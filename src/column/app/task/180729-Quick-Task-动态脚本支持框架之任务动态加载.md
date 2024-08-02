---
order: 4
title: 4. 动态脚本支持框架之任务动态加载
tag:
  - 技术方案
category:
  - Quick系列
  - QuickTask
date: 2018-07-29 17:06:59
keywords: Java,QuickTask,开源项目,Groovy
---

# Quick-Task 动态脚本支持框架之任务动态加载

前面几篇博文分别介绍了整个项目的基本架构，使用说明，以及整体框架的设计与实现初稿，接下来则进入更细节的实现篇，将整个工程中核心实现捞出来，从为什么这么设计到最终的实现给予说明

相关系列博文：

- [180702-QuickTask动态脚本支持框架整体介绍篇](https://liuyueyi.github.io/hexblog/2018/07/02/180702-QuickTask%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D%E7%AF%87/)
- [180719-Quick-Task 动态脚本支持框架之使用介绍篇](https://liuyueyi.github.io/hexblog/2018/07/19/180719-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D%E7%AF%87/)
- [180723-Quick-Task 动态脚本支持框架之结构设计篇](https://liuyueyi.github.io/hexblog/2018/07/23/180723-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1%E7%AF%87/)

<!-- more -->

## I. 任务动态加载

这个动态脚本调度框架，最大的一个功能点就是支持热加载了，何为热加载？

简单来说就是在程序不宕机的情况下，可以往里面添加新的任务，删除旧的任务，更新已有的任务等等，就好比飞机在天上飞的时候给它加油，就这么高端的操作（😊）

为了支持热加载，首先面临的问题就是如何判断有任务的新增/删除/修改？

### 1. 任务监听的从0到1

要实现任务变更的监听，自然而然想到的一个方案就是起一个线程，不断的轮询，基本的逻辑无非是判断是否有任务的变更发生而已，也因此关注点就落在了如何判断任务是否有变更了

最简单粗暴直观的方法，就是记录之前的所有的任务，然后每次轮询时判断当前的所有任务与之前的所有任务是否有区别

再落到具体的实现上，则与任务的具体存储有关系了。很容易想到了几种任务存储方式有

- 文件
- 数据库 （如mysql）
- 缓存 （如redis)

#### a. 数据库存储方式

这种方法比较好想到，同时也好实现，所有的任务都直接存在DB的某张表中；只需要保证表中包含以下几个字段即可

- task: 具体的任务脚本逻辑
- state: 任务的状态（表示运行，暂停等）
- update: 任务的更新时间

基于上面的三个属性，判断的逻辑就清晰了

- 起一个check线程，不断的扫表，获取所有的任务
- 将当前获取的任务与上一次获取的任务进行对比
- 根据比对的结果，封装任务更新事件，抛给下游处理

当然在db的场景下，还有一个更简单的方式，借助mysql的dbevent事件来处理任务的变更

- 首先开启mysql的dbevent事件，即db中记录的新增删除变更都会抛出一个消息
- 监听dbevent，以此封装任务的更新事件，丢给下一层进行处理即可

**说明：**

从个人的角度出发，在实际的应用场景中，基于DB的存储方案是比较合适的，然而我并没有去做这一个，因为相比于文件的方式，有点重量级了； 而我自己的实际项目中，文件方式已经足够解决我的需求了

#### b. 文件存储方式

这个可以说是最先想到，也是最容易实现的一种方式了。我的所有任务都放在指定的目录下，然后监听这个目录下所有文件的变动即可

QuickTask项目中，默认的实现方式，就是基于文件存储的动态任务监听，好处是简单，实现简单，理解简单，用起来也简单

#### c. 缓存存储方式

无非是拿缓存做db存储的思路，也没有啥其他的讲究，当然我并没有想过真的去拿缓存来实现，感觉这种实现方式有点非主流，当然也没有什么明显的优势

### 2. 任务监听的实现

上面是基本上把我如何实现动态任务监听的想法都写出来了，接下来就是具体的实现了，采用本地文件来存储具体的任务脚本，那么任务变化监听，就转换为了目录下文件变动的监听了

到了这一步，具体的实现方案就出来了，要实现文件变动监听，jdk7就提供了`WatchService`，当然还有大名鼎鼎的 `commons-io`，两个都可以实现，下面贴出commons-io的实现方式

```java
@Slf4j
public class TaskChangeWatcher {
    private static final String SCRIPT_TYPE = ".groovy";

    public static boolean registerWatcher(File file) {
        try {
            long period = TimeUnit.SECONDS.toMillis(1);

            // 使用commons-io的文件观察器，实现文件动态变动的监听
            FileAlterationObserver observer =
                    new FileAlterationObserver(file, FileFilterUtils.and(FileFilterUtils.fileFileFilter()));

            observer.addListener(new TaskChangeListener());
            FileAlterationMonitor monitor = new FileAlterationMonitor(period, observer);
            monitor.start();

            return true;
        } catch (Exception e) {
            log.error("register watcher for script task change error! file: {} e:{}", file.getAbsolutePath(), e);
            return false;
        }
    }

    static final class TaskChangeListener extends FileAlterationListenerAdaptor {
        private boolean ignore(File file) {
            return !file.getName().endsWith(SCRIPT_TYPE);
        }

        private void addTask(File file) {
            ITask script = ScriptLoadUtil.loadScript(file);
            if (script == null) {
                return;
            }

            // 更新context中缓存，并启动任务
            ScriptTaskDecorate task = new ScriptTaskDecorate(script);
            TaskContainer.registerTask(file.getAbsolutePath(), task);
        }

        @Override
        public void onFileCreate(File file) {
            if (ignore(file)) {
                return;
            }
            addTask(file);
            // 在线程池中执行task
            log.info("add task : {}", file.getAbsolutePath());
        }

        @Override
        public void onFileChange(File file) {
            if (ignore(file)) {
                return;
            }
            addTask(file);
            // 在线程池中执行task
            log.info("task changed : {}", file.getName());
        }

        @Override
        public void onFileDelete(File file) {
            if (ignore(file)) {
                return;
            }

            // 文件删除，表示需要卸载旧的task
            TaskContainer.removeTask(file.getAbsolutePath());
            log.info("task delete: {}", file.getName());
        }
    }
}
```

上面的实现，核心就是注册目录变动的监听，当出现文件的变化时，判断是否为groovy脚本，然后加载任务，并丢给任务容器进行调度执行

对于文件变动的监听的具体方案和讲解，如有疑问可以参考我之前的一篇博文:

- [Java可以如何实现文件变动的监听](https://liuyueyi.github.io/hexblog/2018/02/08/Java%E5%8F%AF%E4%BB%A5%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%96%87%E4%BB%B6%E5%8F%98%E5%8A%A8%E7%9A%84%E7%9B%91%E5%90%AC/)



## II. 其他

### 0. 相关

**博文：**

- [180628-动态任务执行框架想法篇](https://liuyueyi.github.io/hexblog/2018/06/28/180628-%E5%8A%A8%E6%80%81%E4%BB%BB%E5%8A%A1%E6%89%A7%E8%A1%8C%E6%A1%86%E6%9E%B6%E6%83%B3%E6%B3%95%E7%AF%87/)
- [180702-QuickTask动态脚本支持框架整体介绍篇](https://blog.hhui.top/hexblog/2018/07/02/180702-QuickTask%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E6%95%B4%E4%BD%93%E4%BB%8B%E7%BB%8D%E7%AF%87/)
- [180723-Quick-Task 动态脚本支持框架之结构设计篇](https://liuyueyi.github.io/hexblog/2018/07/23/180723-Quick-Task-%E5%8A%A8%E6%80%81%E8%84%9A%E6%9C%AC%E6%94%AF%E6%8C%81%E6%A1%86%E6%9E%B6%E4%B9%8B%E7%BB%93%E6%9E%84%E8%AE%BE%E8%AE%A1%E7%AF%87/)

**项目：**

- [https://github.com/liuyueyi/quick-task](https://github.com/liuyueyi/quick-task)

### 1. [一灰灰Blog](https://liuyueyi.github.io/hexblog)： https://liuyueyi.github.io/hexblog

一灰灰的个人博客，记录所有学习和工作中的博文，欢迎大家前去逛逛


### 2. 声明

尽信书则不如，已上内容，纯属一家之言，因个人能力有限，难免有疏漏和错误之处，如发现bug或者有更好的建议，欢迎批评指正，不吝感激

- 微博地址: [小灰灰Blog](https://weibo.com/p/1005052169825577/home)
- QQ： 一灰灰/3302797840

### 3. 扫描关注

**一灰灰blog**

![QrCode](https://raw.githubusercontent.com/liuyueyi/Source/master/img/info/blogInfoV2.png)

**知识星球**

![goals](https://raw.githubusercontent.com/liuyueyi/Source/master/img/info/goals.png)

