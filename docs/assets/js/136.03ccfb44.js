(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{416:function(t,a,s){"use strict";s.r(a);var r=s(10),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"js异步编程-webworker多线程机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js异步编程-webworker多线程机制"}},[t._v("#")]),t._v(" JS异步编程——WebWorker多线程机制")]),t._v(" "),s("h3",{attrs:{id:"文章目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章目录"}},[t._v("#")]),t._v(" 文章目录")]),t._v(" "),s("ul",[s("li",[t._v("前言")]),t._v(" "),s("li",[t._v("一、WebWorker多线程机制")]),t._v(" "),s("li",[s("ul",[s("li",[s("ol",[s("li",[t._v("worker发展历史")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("主线程和多线程")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("什么时候使用worker")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("worker API")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("JS主线程和Worker线程的相同点和不同点")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("浏览器的16ms渲染帧")])])])])]),t._v(" "),s("li",[t._v("总结")])]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("JS采用的是单线程机制，所有的任务只能在一个线程上完成，前面的任务没有完成就只能等待。随着计算机计算能力的增强，多核处理器的出现，单线程已不能充分的发挥计算机的算力，WebWorker就是给主线程创建多线程的环境，实现主线程运行时，WebWorker线程在后台运行，两者互不干扰，待WebWorker线程任务完成后，将结果返回给主线程。")]),t._v(" "),s("hr"),t._v(" "),s("h1",{attrs:{id:"一、webworker多线程机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、webworker多线程机制"}},[t._v("#")]),t._v(" 一、WebWorker多线程机制")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/e96346d2de794fdb9c82ec8fd79865c1.png#pic_center",alt:"worker概念"}})]),t._v(" "),s("h2",{attrs:{id:"_1-worker发展历史"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-worker发展历史"}},[t._v("#")]),t._v(" 1. worker发展历史")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/4a31b762949b4813803599011878d902.png#pic_center",alt:"worker发展历史"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("worker在2009年就提出了草案，到2012年的时候，主流浏览器就已经全面的支持worker了。\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/f07baa4609314ca0bfefa8de21d3c319.png#pic_center",alt:"worker规范"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("worker的规范有两个，分别是DedicatedWorker和SharedWorker。SharedWorker浏览器的兼容性问题较大，基本不使用，现在大家普遍所讲的worker都是遵从DedicatedWorker规范。\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/3ebf232591154c1882f9ed154d991a64.png#pic_center",alt:"SharedWorker兼容性"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("从图中可以看到，SharedWorker的兼容性一路标红。\n1\n")])])]),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建DedicatedWorker")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建SharedWorker")]),t._v("\nvar myWorker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SharedWorker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"worker.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-主线程和多线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-主线程和多线程"}},[t._v("#")]),t._v(" 2. 主线程和多线程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("主线程\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/499a62b4aef9469cb8e21afeeeb484c2.png#pic_center",alt:"主线程"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("单线程中，JS阻塞用户交互和页面渲染\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/0023bf902be34440a3f9886175d9335f.png#pic_center",alt:"JS阻塞用户交互和页面渲染"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("多线程\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/910eebc32a144239b6a09562d33473d0.png#pic_center",alt:"多线程"}})]),t._v(" "),s("h2",{attrs:{id:"_3-什么时候使用worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么时候使用worker"}},[t._v("#")]),t._v(" 3. 什么时候使用worker")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1.减少卡顿可使用\n\t根据Chrome团队提出的用户感知性能模型RAIL，同步JS执行时间不能过长。量化来说，播放动画时建议小于16ms，用户操作响应建议小于100ms，页面打开到开始呈现内容建议小于1000ms。\n2.worker只有在多核处理器上，才有可能性能提升\n\t进程是操作系统资源分配的基本单位，线程是操作系统调度CPU的基本单位。操作系统对线程能占用的CPU计算资源有复杂的分配策略。\n\t单核多线程通过时间切片交替执行。这是使用worker，可能会由于线程间的通信导致执行所花费时间的总时长更久。\n\t多核多进程可在不同核中真正并行。此时使用worker才能提高性能。\n123456\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/64828ce23ca7484297fdc08765684640.png#pic_center",alt:"性能提升"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("通信消耗（所提升的性能 = 并行执行所节省的时间 - 通信消耗的时间）\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/d33574cb2ef8436289ad42924372aedc.png#pic_center",alt:"通信开销"}})]),t._v(" "),s("h2",{attrs:{id:"_4-worker-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-worker-api"}},[t._v("#")]),t._v(" 4. worker API")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/f14403fef87542e290e9ebbf5cb75e94.png#pic_center",alt:"Worker API"}})]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" worker "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Worker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("worker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'hello'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nworker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onmessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//world")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// worker.js")]),t._v("\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onmessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//hello")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("poatMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456789101112")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-js主线程和worker线程的相同点和不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-js主线程和worker线程的相同点和不同点"}},[t._v("#")]),t._v(" 5. JS主线程和Worker线程的相同点和不同点")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1.运行环境\n1\n")])])]),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/65c0fc6f2b544b52ac1a65e49f9d8ff5.png#pic_center",alt:"运行环境"}})]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("2.相同点\n\t1.包含完整的JS运行时（JS运行时有两个阶段：编译阶段和执行阶段），支持ECMAScript规范定义的语言语法和内置对象。\n12\n")])])]),s("blockquote",[s("p",[t._v("JS运行时的详细介绍：https://www.jianshu.com/p/672d512fdbae")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t2.支持XmlHttpRequest，能独立发送网络请求与后台交互。\n\t3.包含只读的Location，指向Worker线程执行的script url，可通过url传递参数给Worker环境。\n\t4.包含只读的Navigator，用于获取浏览器信息，如通过Navigator.userAgent识别浏览器。\n\t5.支持setTimeout/setinterval计时器，可用于实现异步逻辑。\n\t6.支持WebSocket进行网络I/O；支持IndexedDB进行文件I/O。\n\n3.不同点\n\t1.Worker线程没有DOM API，无法新建和操作DOM；也无法访问到主线程的DOM Element。\n\t2.Worker线程和主线程间内存独立，Worker线程无法访问页面上的全局变量（window，document等）和JavaScript函数。\n\t3.Worker线程不能调用alert()或confirm()等UI相关的BOM API。\n\t4.Worker线程被主线程控制，主线程可以新建和销毁Worker。\n\t5.Worker线程可以通过self.close自行销毁。\n123456789101112\n")])])]),s("h2",{attrs:{id:"_6-浏览器的16ms渲染帧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-浏览器的16ms渲染帧"}},[t._v("#")]),t._v(" 6. 浏览器的16ms渲染帧")]),t._v(" "),s("p",[t._v("日常使用屏幕的刷新频率是60HZ（也就是1秒钟更新60幅图像，1000/60 ~= 16ms）。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("根据谷歌引擎为例分析结论：\n\t1. 一个渲染帧内commit的多次DOM改动会被合并渲染。\n\t2. 好事JS会造成丢帧。\n\t3. 渲染帧间隔为16ms左右。\n\t4. 避免耗时脚本、交错读写样式以保证流畅的渲染。\n\n渲染帧流程：\n\t1. 脚本执行（JavaScript）：脚本造成了需要重绘的改动，比如增删DOM、请求动画等。\n\t2. DOM树构建/样式计算（CSS Object Model）：级联地生成每个节点的生效样式。\n\t3. 布局（Layout）：计算布局，执行渲染算法。\n\t4. 重绘（Paint）：各层分别进行绘制（比如3D动画）。\n\t5. 合成（Composite）：合成各层的渲染结果。\n123456789101112\n")])])]),s("p",[t._v("执行队列\n"),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/64ab867b67c446dc83ba2d73a91b7bd6.png#pic_center",alt:"执行队列"}})]),t._v(" "),s("p",[t._v("优化")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("耗时超过16ms的JavaScipt可能会丢帧让页面变卡。如果有太多事情要做可以把这些工作重新设计，分割到各个阶段中执行。并充分利用缓存和懒初始化等策略。\n不同执行时机的JavaScript有不同的优化方式。\n\t1. 服务器端渲染或者应用懒初始化策略。\n\t2. 耗时脚本可以优化算法或者迁移到Worker中。\n1234\n")])])]),s("hr"),t._v(" "),s("h1",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("革命尚未成功，同志仍需努力。")]),t._v(" "),s("p",[t._v("文章来源：https://blog.csdn.net/zhengjingID/article/details/125231069")]),t._v(" "),s("backTop")],1)}),[],!1,null,null,null);a.default=e.exports}}]);