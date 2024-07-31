import{_ as t,V as i,W as o,a0 as r}from"./framework-23f3cf9b.js";const a="/tutorial/imgs/column/distribute/220708/3pc00.jpg",c="/tutorial/imgs/column/distribute/220708/3pc01.jpg",d="/tutorial/imgs/column/distribute/220708/3pc02.jpg",l={},m=r('<p>在两阶段的基础上进行扩展，将第一阶段划分两部，cancommit + precommit，第三阶段则为 docommit</p><p><strong>第一阶段 cancommit</strong></p><p>该阶段协调者会去询问各个参与者是否能够正常执行事务，参与者根据自身情况回复一个预估值，相对于真正的执行事务，这个过程是轻量的</p><p><strong>第二阶段 precommit</strong></p><p>本阶段协调者会根据第一阶段的询盘结果采取相应操作，询盘结果主要有 3 种：</p><table><thead><tr><th>第一阶段响应</th><th>步骤</th></tr></thead><tbody><tr><td>所有的参与者都返回确定</td><td>1.协调者向所有的事务参与者发送事务执行通知 <br> 2.参与者收到通知后执行事务但不提交 <br> 3.参与者将事务执行情况返回给客户端</td></tr><tr><td>一个或多个参与者返回否定信息</td><td>无法执行，向各个参与者发出 abort 通知，请求退出预备状态</td></tr><tr><td>协调者等待超时</td><td>同上</td></tr></tbody></table><figure><img src="'+a+'" alt="3PC回滚" tabindex="0" loading="lazy"><figcaption>3PC回滚</figcaption></figure><p><strong>第三阶段 docommit</strong></p><p>如果第二阶段事务未中断，那么本阶段协调者将会依据事务执行返回的结果来决定提交或回滚事务，分为 3 种情况：</p><table><thead><tr><th>第二阶段响应</th><th>步骤</th></tr></thead><tbody><tr><td>所有的参与者都能正常执行事务</td><td>1.向所有参与者提交commit <br> 2.所有参与者在收到通知之后执行 commit 操作释放资源 <br> 3.参与者向协调者反馈事务提交结果</td></tr><tr><td>一个或多个参与者执行事务失败</td><td>协调者认为事务无法成功执行 <br> 1.向所有参与者提交rollback <br> 2.所有参与者执行rollback回滚 <br> 3.参与者向协调者反馈事务回滚结果</td></tr><tr><td>协调者等待超时</td><td>同上</td></tr></tbody></table><p>事务提交流程图：</p><figure><img src="'+c+'" alt="3PC提交" tabindex="0" loading="lazy"><figcaption>3PC提交</figcaption></figure><p>事务回滚流程图：</p><figure><img src="'+d+'" alt="3PC回滚" tabindex="0" loading="lazy"><figcaption>3PC回滚</figcaption></figure><p>在本阶段如果因为协调者或网络问题，导致参与者迟迟不能收到来自协调者的 commit 或 rollback 请求，那么参与者将不会如两阶段提交中那样陷入阻塞，而是等待超时后继续 commit，相对于两阶段提交虽然降低了同步阻塞，但仍然无法完全避免数据的不一致</p><p><strong>特点</strong></p><ul><li>降低了阻塞与单点故障： <ul><li>参与者返回 CanCommit 请求的响应后，等待第二阶段指令，若等待超时/协调者宕机，则自动 abort，降低了阻塞；</li><li>参与者返回 PreCommit 请求的响应后，等待第三阶段指令，若等待超时/协调者宕机，则自动 commit 事务，也降低了阻塞；</li></ul></li><li>数据不一致问题依然存在 <ul><li>比如第三阶段协调者发出了 abort 请求，然后有些参与者没有收到 abort，那么就会自动 commit，造成数据不一致</li></ul></li></ul>',17),e=[m];function p(n,s){return i(),o("div",null,e)}const _=t(l,[["render",p],["__file","三阶段提交协议.html.vue"]]);export{_ as default};
