(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{403:function(s,t,a){"use strict";a.r(t);var v=a(10),e=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"css3-animation属性中的steps功能符深入介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css3-animation属性中的steps功能符深入介绍"}},[s._v("#")]),s._v(" CSS3 animation属性中的steps功能符深入介绍")]),s._v(" "),a("p",[s._v("by zhangxinxu from http://www.zhangxinxu.com/wordpress/?p=7618")]),s._v(" "),a("p",[s._v("本文可全文转载，但需要保留原作者和出处，摘要引流则随意。")]),s._v(" "),a("h3",{attrs:{id:"一、不只是连续的变化才叫动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、不只是连续的变化才叫动画"}},[s._v("#")]),s._v(" 一、不只是连续的变化才叫动画")]),s._v(" "),a("p",[s._v("@keyframes wpSpin {0% {transform: rotate(0);}100% {transform: rotate(360deg);}}.ani-rot1{animation: wpSpin 1s linear infinite; }.ani-rot2{animation: wpSpin 1s steps(4) infinite; }.ani-rot3{animation: wpSpin 1s steps(8, end) infinite; }\n我很早的时候有个错误认知，认为只有连续的变化才叫动画；含笑半步癫那样的效果不是动画。")]),s._v(" "),a("p",[s._v("后来才明白，只要有轨迹可循，即使肉眼看上去是断断续续的，实际上也是动画。")]),s._v(" "),a("p",[s._v("举个例子，现有素材图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825288.png",alt:""}})]),s._v(" "),a("p",[s._v("请问下面两个图形变化，哪个属于动画效果？")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825288.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825288.png",alt:""}})]),s._v(" "),a("p",[s._v("答案是：两个都是。")]),s._v(" "),a("p",[s._v("我们如果换一种素材，大家就能知道非连续图形变化也是动画了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825287.png",alt:""}})]),s._v(" "),a("p",[s._v("效果分别为连续旋转和断续旋转。")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825287.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825287.png",alt:""}})]),s._v(" "),a("p",[s._v("后面一张图就是非连续变化下的效果，反而是我们实际项目中正确的菊花loading效果。")]),s._v(" "),a("p",[s._v("而实现的关键就是本文要深入介绍的 "),a("code",[s._v("steps()")]),s._v("功能符。")]),s._v(" "),a("h3",{attrs:{id:"二、一句话介绍steps-功能符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、一句话介绍steps-功能符"}},[s._v("#")]),s._v(" 二、一句话介绍steps()功能符")]),s._v(" "),a("p",[a("code",[s._v("steps()")]),s._v("功能符可以让动画不连续。")]),s._v(" "),a("h3",{attrs:{id:"三、steps-在css3-animation中地位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、steps-在css3-animation中地位"}},[s._v("#")]),s._v(" 三、steps()在CSS3 animation中地位")]),s._v(" "),a("p",[a("code",[s._v("steps()")]),s._v("功能符和CSS3 animation中的 "),a("code",[s._v("cubic-bezier()")]),s._v("功能符的地位和作用是一样的，都可以作为 "),a("code",[s._v("animation-timing-function")]),s._v("的属性值。")]),s._v(" "),a("p",[s._v("只不过 "),a("code",[s._v("steps()")]),s._v("更像是楼梯坡道，"),a("code",[s._v("cubic-bezier()")]),s._v("更像是无障碍坡道。如下图示意：")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825285.png",alt:"无障碍坡道与动画关系示意"}})]),s._v(" "),a("p",[s._v("然后 "),a("code",[s._v("steps()")]),s._v("简化出了 "),a("code",[s._v("step-start")]),s._v("和 "),a("code",[s._v("step-end")]),s._v("这两个关键字；"),a("code",[s._v("cubic-bezier()")]),s._v("则有 "),a("code",[s._v("linear")]),s._v("，"),a("code",[s._v("ease")]),s._v("，"),a("code",[s._v("ease-in")]),s._v("，"),a("code",[s._v("ease-out")]),s._v("以及 "),a("code",[s._v("ease-in-out")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("cubic-bezier")]),s._v("指三次贝塞尔曲线，具体可参见我之前文章“深度掌握SVG路径path的贝塞尔曲线指令”。")]),s._v(" "),a("p",[a("code",[s._v("steps()")]),s._v("指逐步运动，下面进一步深入介绍。")]),s._v(" "),a("h3",{attrs:{id:"四、搞清楚steps-中的-start和-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、搞清楚steps-中的-start和-end"}},[s._v("#")]),s._v(" 四、搞清楚steps()中的 "),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")])]),s._v(" "),a("p",[a("code",[s._v("steps()")]),s._v("有一定的学习难度，总是搞不清楚，最主要就是 "),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("傻傻分不清楚。我这里自我挑战下，看看能不能说清楚。")]),s._v(" "),a("p",[s._v("常见 "),a("code",[s._v("steps()")]),s._v("用法举例：")]),s._v(" "),a("pre",{staticClass:"hljs language-scss",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),s._v("steps("),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(", end);\nsteps("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", start);")]),s._v(" "),a("p",[s._v("用 "),a("code",[s._v("steps()")]),s._v("语法表示就是：")]),s._v(" "),a("pre",{staticClass:"hljs language-css",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),s._v("steps(number, "),a("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(")")]),s._v(" "),a("p",[s._v("其中：")]),s._v(" "),a("p",[a("strong",[s._v("number")]),s._v("\n数值。这个很好理解，表示把我们的动画分成了多少段。")]),s._v(" "),a("p",[s._v("假设有如下CSS3动画 "),a("code",[s._v("keyframes")]),s._v("，定义了一段从 "),a("code",[s._v("0~100px")]),s._v("的位移：")]),s._v(" "),a("pre",{staticClass:"hljs language-scss",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-keyword"},[s._v("@keyframes")]),s._v(" move {\n    0% { "),a("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; }\n    100% { "),a("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("100px")]),s._v("; }\n}")]),s._v(" "),a("p",[s._v("假设我们的 "),a("code",[s._v("number")]),s._v("值是5，则相当于把这段移动距离分成了5段，如下示意图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825287.png",alt:"steps分段示意图"}})]),s._v(" "),a("p",[a("strong",[s._v("position")]),s._v("\n关键字。表示动画是从时间段的开头连续还是末尾连续。支持 "),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("两个关键字，含义分别如下：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("start")]),s._v("：表示直接开始。")]),s._v(" "),a("li",[a("code",[s._v("end")]),s._v("：表示戛然而止。是默认值。")])]),s._v(" "),a("h4",{attrs:{id:"为什么position非常难理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么position非常难理解"}},[s._v("#")]),s._v(" 为什么position非常难理解？")]),s._v(" "),a("p",[s._v("我认为两个原因：")]),s._v(" "),a("ol",[a("li",[a("p",[a("code",[s._v("steps()")]),s._v("属于timing function，也就是时间函数，时间这个东西是虚的，看不见，摸不着，联想乏力，所以认知成本高。这也是为什么那么多人都不珍惜时间的原因——无法感知。")])]),s._v(" "),a("li",[a("p",[s._v("CSS规范中对于 "),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("的定义是基于数学函数来的，函数这东西，多少人的噩梦，因为过于抽象，与现实难以关联，所以，如果我们盯着定义去理解 "),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("，那就是死胡同，不归路，就算现在弄懂了，过段时间再遇到，得了，全忘光光了，函数图哪个是哪个，鬼才记得。下面这张图就出自规范文档："),a("img",{attrs:{src:"Public/upload/20220804/165958252910.svg",alt:"steps()规范函数示意"}})]),s._v(" "),a("p",[s._v("按照规范图再细化解释就是：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("start")]),s._v("：表示直接开始。也就是时间才开始，就已经执行了一个距离段。于是，动画执行的5个分段点是下面这5个，起始点被忽略，因为时间一开始直接就到了第二个点："),a("img",{attrs:{src:"Public/upload/20220804/16595825290.png",alt:"start执行的关键点"}})]),s._v(" "),a("li",[a("code",[s._v("end")]),s._v("：表示戛然而止。也就是时间一结束，当前距离位移就停止。于是，动画执行的5个分段点是下面这5个，结束点被忽略，因为等要执行结束点的时候已经没时间了："),a("img",{attrs:{src:"Public/upload/20220804/16595825296.png",alt:"end执行的关键点"}})])])])]),s._v(" "),a("h4",{attrs:{id:"基于现实感知重新理解position"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于现实感知重新理解position"}},[s._v("#")]),s._v(" 基于现实感知重新理解position！")]),s._v(" "),a("p",[s._v("万物具有相对性。例如，苍蝇眼中的人类动作都是慢动作，但是人类眼中的苍蝇却非常敏捷。")]),s._v(" "),a("p",[s._v("同样的，"),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("这里的开始和结束是相对于时间而言的，但是，如果站在人类可感知的具体事物而言，"),a("code",[s._v("start")]),s._v("和 "),a("code",[s._v("end")]),s._v("却是相反的含义。")]),s._v(" "),a("p",[s._v("所以，我们可以这么理解：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("start")]),s._v("：表示结束。分段结束的时候，时间才开始走。于是，动画执行的5个分段点是后5个点："),a("img",{attrs:{src:"Public/upload/20220804/16595825290.png",alt:"start执行的关键点"}})]),s._v(" "),a("li",[a("code",[s._v("end")]),s._v("：表示开始。分段开始的时候，时间跟着一起走。于是，动画执行的5个分段点是前5个点："),a("img",{attrs:{src:"Public/upload/20220804/16595825296.png",alt:"end执行的关键点"}})])]),s._v(" "),a("h4",{attrs:{id:"记住position参数的含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#记住position参数的含义"}},[s._v("#")]),s._v(" 记住position参数的含义")]),s._v(" "),a("p",[s._v("牢记这么一句话："),a("strong",[s._v("一切都是反的！start不是开始，而是结束；end不是结束，而是开始。")])]),s._v(" "),a("h3",{attrs:{id:"五、step-start和step-end"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、step-start和step-end"}},[s._v("#")]),s._v(" 五、step-start和step-end")]),s._v(" "),a("p",[a("code",[s._v("step-start")]),s._v("和 "),a("code",[s._v("step-end")]),s._v("是 "),a("code",[s._v("steps()")]),s._v("功能符简化关键字，注意，是 "),a("code",[s._v("step-*")]),s._v("，"),a("code",[s._v("step")]),s._v("，后面没有 "),a("code",[s._v("s")]),s._v("。")]),s._v(" "),a("p",[s._v("其中，"),a("code",[s._v("step-start")]),s._v("等同于 "),a("code",[s._v("steps(1, start)")]),s._v("，"),a("code",[s._v("step-end")]),s._v("等同于 "),a("code",[s._v("steps(1, end)")]),s._v("或者 "),a("code",[s._v("steps(1)")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("step-start")]),s._v("和 "),a("code",[s._v("step-end")]),s._v("用中文短句解读就是：一步到位和延迟到位，在实际项目中有什么作用呢？")]),s._v(" "),a("p",[s._v("对于只有 "),a("code",[s._v("0%,100%")]),s._v("或 "),a("code",[s._v("from, to")]),s._v("两个关键时间帧的动画，"),a("code",[s._v("step-start")]),s._v("和 "),a("code",[s._v("step-end")]),s._v("是没有任何需要使用的理由的。")]),s._v(" "),a("p",[s._v("如果是非等分，无法过渡的阶梯动画，则有使用价值，例如下面这个基于 "),a("code",[s._v("box-shadow")]),s._v("实现的打点动画效果：")]),s._v(" "),a("p",[s._v(".dotting { display: inline-block; min-width: 2px; min-height: 2px; margin-right: 8px; box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; animation: dot 4s infinite step-start both;}@keyframes dot { 25% { box-shadow: none; } 50% { box-shadow: 2px 0 currentColor; } 75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor;}\n}\n订单提交中")]),s._v(" "),a("p",[s._v("实现核心代码如下（此打点方法最多排纯CSS打点动画第3位，更多见此文介绍和指引）：")]),s._v(" "),a("pre",{staticClass:"hljs language-xml",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),s._v("订单提交中"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"dotting"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")])]),s._v(" "),a("pre",{staticClass:"hljs language-scss",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-selector-class"},[s._v(".dotting")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(": inline-block; "),a("span",{staticClass:"hljs-attribute"},[s._v("min-width")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v("; "),a("span",{staticClass:"hljs-attribute"},[s._v("min-height")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("margin-right")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("8px")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("6px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n    "),a("span",{staticClass:"hljs-attribute"},[s._v("animation")]),s._v(": dot "),a("span",{staticClass:"hljs-number"},[s._v("4s")]),s._v(" infinite step-start both;\n}\n"),a("span",{staticClass:"hljs-keyword"},[s._v("@keyframes")]),s._v(" dot {\n    25% { "),a("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": none; }          "),a("span",{staticClass:"hljs-comment"},[s._v("/* 0个点 */")]),s._v("\n    50% { "),a("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; }         "),a("span",{staticClass:"hljs-comment"},[s._v("/* 1个点 */")]),s._v("\n    75% { "),a("span",{staticClass:"hljs-attribute"},[s._v("box-shadow")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("6px")]),s._v(" "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; }  "),a("span",{staticClass:"hljs-comment"},[s._v("/* 2个点 */")]),s._v(" \n}")]),s._v(" "),a("h3",{attrs:{id:"六、steps-与填充模式animation-fill-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、steps-与填充模式animation-fill-mode"}},[s._v("#")]),s._v(" 六、steps()与填充模式animation-fill-mode")]),s._v(" "),a("p",[a("code",[s._v("animation-fill-mode")]),s._v("有时候也会影响 "),a("code",[s._v("steps()")]),s._v("的断点表现，例如下面这个语句：")]),s._v(" "),a("pre",{staticClass:"hljs language-css",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-attribute"},[s._v("animation")]),s._v(": move "),a("span",{staticClass:"hljs-number"},[s._v("5s")]),s._v(" forwards "),a("span",{staticClass:"hljs-built_in"},[s._v("steps")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(", end);")]),s._v(" "),a("p",[s._v("动画只执行一次，因为没有设置 "),a("code",[s._v("infinite")]),s._v("无限循环，而 "),a("code",[s._v("forwards")]),s._v("虽然表示“前”，但同样和现实表现是反的，也就是动画结束时候元素保持动画关键帧最后的状态。于是，下面6个分段点都会执行，整个动画停止在第6个分段点上。")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825299.png",alt:"forwards执行最后一个分段点"}})]),s._v(" "),a("p",[s._v("这显然不是我们想要的，怎么处理呢？")]),s._v(" "),a("p",[s._v("可以消减分段个数和动画运动的跨度，调整如下：")]),s._v(" "),a("pre",{staticClass:"hljs language-scss",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-keyword"},[s._v("@keyframes")]),s._v(" move {\n    0% { "),a("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; }\n    100% { "),a("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("80px")]),s._v("; }\n}")]),s._v(" "),a("p",[s._v("也就是原来终点 "),a("code",[s._v("100px")]),s._v("改成 "),a("code",[s._v("80px")]),s._v("，同时CSS调用改成：")]),s._v(" "),a("pre",{staticClass:"hljs language-css",attrs:{tabindex:"0"}},[a("svg",{staticClass:"icon-copy"},[a("use",{attrs:{"xlink:href":"#icon-copy"}})]),a("svg",{staticClass:"icon-palette"},[a("use",{attrs:{"xlink:href":"#icon-palette"}})]),a("span",{staticClass:"hljs-attribute"},[s._v("animation")]),s._v(": move "),a("span",{staticClass:"hljs-number"},[s._v("5s")]),s._v(" forwards "),a("span",{staticClass:"hljs-built_in"},[s._v("steps")]),s._v("("),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(", end);")]),s._v(" "),a("p",[s._v("也就是原来 "),a("code",[s._v("steps(5, end)")]),s._v("改成 "),a("code",[s._v("steps(4, end)")]),s._v("，最后 "),a("code",[s._v("100%")]),s._v("这一帧交给 "),a("code",[s._v("forwards")]),s._v("即可！")]),s._v(" "),a("h3",{attrs:{id:"七、结束语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、结束语"}},[s._v("#")]),s._v(" 七、结束语")]),s._v(" "),a("p",[a("code",[s._v("steps()")]),s._v("是一个用得比较多的功能符，除了本文展示的loading效果，在逐帧动画中用得非常多。")]),s._v(" "),a("p",[s._v("例如，一些不太复杂的闪屏效果，写小而美的动画效果等（有名的如：点赞礼花效果）。")]),s._v(" "),a("p",[s._v("深入理解 "),a("code",[s._v("steps()")]),s._v("的好处在于，当我们在实现这些动画效果时候，省去了很多查阅文档套用语法的时间，还省掉了很多一个一个 "),a("code",[s._v("number")]),s._v("值调试的时间。可以让你干活效率加倍，有更多时间学习其他东西，形成正向循环，久而久之，必当学有所成。")]),s._v(" "),a("p",[s._v("就这些，感谢您花宝贵时间一直阅读到这里！")]),s._v(" "),a("p",[s._v("欢迎交流！")]),s._v(" "),a("p",[a("img",{attrs:{src:"Public/upload/20220804/16595825307.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("            «上一篇 微信网页悬浮窗交互效果的web实现\n\n\n            是时候好好安利下LuLu UI框架了！ 下一篇»\n")])])]),a("p",[s._v("（本篇完）"),a("img",{attrs:{src:"Public/upload/20220804/16595825312.svg",alt:""}}),s._v(" 是不是学到了很多？可以分享到微信！\n"),a("img",{attrs:{src:"Public/upload/20220804/16595825315.svg",alt:""}}),s._v(" 有话要说？点击这里。")]),s._v(" "),a("p",[s._v("文章来源：https://www.zhangxinxu.com/wordpress/2018/06/css3-animation-steps-step-start-end/")]),s._v(" "),a("backTop")],1)}),[],!1,null,null,null);t.default=e.exports}}]);