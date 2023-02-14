(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{376:function(e,t,n){"use strict";n.r(t);var s=n(10),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"再见-整洁代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#再见-整洁代码"}},[e._v("#")]),e._v(" 再见，整洁代码")]),e._v(" "),n("p",[e._v("那是一个深夜。")]),e._v(" "),n("p",[e._v("我的同事们刚刚提交了过去整整一周所写的代码。我们正在开发一个基于 Canvas 的图形编辑器，他们负责实现各种“形状”（比如：矩形、椭圆形）的缩放功能，缩放行为由拖拽“形状”边缘上的操作柄来实现。")]),e._v(" "),n("p",[e._v("代码运行正常。")]),e._v(" "),n("p",[e._v("但是代码有些重复。每个“形状”（如：矩形、椭圆形）各自拥有若干操作柄，从不同方向拖拽操作柄都会对“形状”的位置和尺寸产生相应的影响。如果用户按住“Shift”键，我们还需要保持住“形状”的宽高比不变。这里涉及到一些数学计算。")]),e._v(" "),n("p",[e._v("代码看起来是这样的：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let Rectangle = {\n  resizeTopLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeTopRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeBottomLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeBottomRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n};\n\nlet Oval = {\n  resizeLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeTop(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeBottom(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n};\n\nlet Header = {\n  resizeLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },  \n}\n\nlet TextBlock = {\n  resizeTopLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeTopRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeBottomLeft(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n  resizeBottomRight(position, size, preserveAspect, dx, dy) {\n    // 10 repetitive lines of math\n  },\n};\n")])])]),n("p",[e._v("这种重复的数学计算逻辑，对我来说，真的难受。")]),e._v(" "),n("p",[e._v("这不是“整洁”的代码。")]),e._v(" "),n("p",[e._v("多数的重复都在于“方向”上的相似，举个例子，"),n("code",[e._v('<span style="font-size: 15px;">Oval.resizeLeft()</span>')]),e._v(" 和 "),n("code",[e._v('<span style="font-size: 15px;">Header.resizeLeft()</span>')]),e._v(" 就很类似。这是因为，它们都是在处理拖拽左侧操作柄的问题。")]),e._v(" "),n("p",[e._v("另一个原因在于“形状”所拥有的方法上的相似，例如，"),n("code",[e._v('<span style="font-size: 15px;">Oval.resizeLeft()</span>')]),e._v(" 和 "),n("code",[e._v('<span style="font-size: 15px;">Oval</span>')]),e._v(" 上的其它方法是类似的。这是因为，它们都是在处理“椭圆形”上的问题。更进一步，"),n("code",[e._v('<span style="font-size: 15px;">Rectangle</span>')]),e._v(", "),n("code",[e._v('<span style="font-size: 15px;">Header</span>')]),e._v(" 以及 "),n("code",[e._v('<span style="font-size: 15px;">TextBlock</span>')]),e._v(" 都有相似的地方，因为文本框都是“矩形”。")]),e._v(" "),n("p",[e._v("我有个办法。")]),e._v(" "),n("p",[e._v("我们可以通过对代码逻辑进行分组，来实现“去除全部重复”的目的：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let Directions = {\n  top(...) {\n    // 5 unique lines of math\n  },\n  left(...) {\n    // 5 unique lines of math\n  },\n  bottom(...) {\n    // 5 unique lines of math\n  },\n  right(...) {\n    // 5 unique lines of math\n  },\n};\n\nlet Shapes = {\n  Oval(...) {\n    // 5 unique lines of math\n  },\n  Rectangle(...) {\n    // 5 unique lines of math\n  },\n}\n")])])]),n("p",[e._v("然后，像这样来组合它们：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("let {top, bottom, left, right} = Directions;\n\nfunction createHandle(directions) {\n  // 20 lines of code\n}\n\nlet fourCorners = [\n  createHandle([top, left]),\n  createHandle([top, right]),\n  createHandle([bottom, left]),\n  createHandle([bottom, right]),\n];\nlet fourSides = [\n  createHandle([top]),\n  createHandle([left]),\n  createHandle([right]),\n  createHandle([bottom]),\n];\nlet twoSides = [\n  createHandle([left]),\n  createHandle([right]),\n];\n\nfunction createBox(shape, handles) {\n  // 20 lines of code\n}\n\nlet Rectangle = createBox(Shapes.Rectangle, fourCorners);\nlet Oval = createBox(Shapes.Oval, fourSides);\nlet Header = createBox(Shapes.Rectangle, twoSides);\nlet TextBox = createBox(Shapes.Rectangle, fourCorners);\n")])])]),n("p",[e._v("代码量减少到 1 / 2，并且，重复代码不复存在！这真是“整洁”啊。如果我们希望改变具体某个“方向”上的或“形状”上的行为，只需要修改一处，而非多处。")]),e._v(" "),n("p",[e._v("已经很晚了（我很疲惫了），我提交我重构后的代码，然后就躺下了，并对自己“帮助同事整洁代码”而感到心满意足。")]),e._v(" "),n("h3",{attrs:{id:"第二天上午"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二天上午"}},[e._v("#")]),e._v(" 第二天上午")]),e._v(" "),n("p",[e._v("… 事情并非我想的那样。")]),e._v(" "),n("p",[e._v("我的上级单独找到了我，委婉地要求我撤销昨天的那些修改。我感到很不可思议，旧代码那么差劲，而我的是多么“整洁”啊！")]),e._v(" "),n("p",[e._v("我那时只好谨遵照守；但是后来，历经数年，我才明白他们的要求是对的。")]),e._v(" "),n("h3",{attrs:{id:"那是一个职业阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那是一个职业阶段"}},[e._v("#")]),e._v(" 那是一个职业阶段")]),e._v(" "),n("p",[e._v("对“整洁代码”的沉迷、好于“消除重复代码”，是我们大多数开发者都会经历的阶段。当我们对自己的代码没有信心，自我价值感和专业荣誉感往往会使我们与一些可测量的东西靠拢，一组严格的 lint 规则、一套命名规范、一种文件结构、无重复性指标，等等。")]),e._v(" "),n("p",[e._v("你不可能让“重复代码”自动被消除，但是"),n("em",[e._v("确实")]),e._v("可以借助“实践经验”使它更可行。你往往可以看到，每次修改后的代码量是变得更多或更少。结果就是，消除重复代码看起来提高了代码的某些客观的可测量指标。然而，糟糕的是，这扰乱了人们的自我认知，他们会对自己说："),n("em",[e._v("“我是那种会写出整洁代码的人”")]),e._v("，而这其实跟其它的自我欺骗行为没什么两样。")]),e._v(" "),n("p",[e._v("一旦学会了如何“抽象”，我们似乎就会更进一步，每次看到重复的代码，我们甚至能够从“无”中发现可“抽象”的东西。编码数年以后，我们已经厉害得随处都能看到重复的代码，我们同时获得了一项新的超能力：抽象。进而，如果有人告诉我们“抽象是好的”，我们便对此更加笃信。于是我们开始去批判那些不崇尚”整洁代码”的人。")]),e._v(" "),n("p",[e._v("我现在明白，我的那次“重构行为”确实是一场灾难（译者：夸张了吧～），从两个方面来说：")]),e._v(" "),n("ul",[n("li",[e._v("首先，我没有告诉代码的作者。我在没有他们参入的情况下，重写并提交了代码。即便，那确是一次对代码的“改善”（我现在不以为然了），它也十分可怕。一个健康的工程团队需要不断地“建立彼此的信任”。不经讨论而擅自重写同事的代码，是对高效协作能力的彻底否定。")]),e._v(" "),n("li",[e._v("其次，一切都需要权衡。为了减少重复，我的代码难于应付需求变更，而这并不值得。例如，我们后边需要为不同“形状”上的各个操作柄添加特殊的行为逻辑。为了应付这些，我的“抽象”无疑使修改困难了数倍，反观那原本“肮脏的”代码，它则能够轻松处理。")])]),e._v(" "),n("p",[e._v("我的意思是你应该写“脏”的代码吗？不，我建议你深入思考一下“整洁”与“肮脏”分别意指何物。你有对于批判、正确、美和优雅的直觉吗？你如何能确定地说你的这次工程成果达到了那些质量指标？它们如何确切地影响到代码的产生与维护？")]),e._v(" "),n("p",[e._v("我当时确然对于这些问题没有进行过深入思考；我当时考虑的是代码“看起来”如何，而不是代码该如何随着不断流动的团队而演进。")]),e._v(" "),n("p",[e._v("写代码是一场旅行。回想一下，你编写第一行代码时的情形，到现在你所处的状态。我相信，当突然发现“抽取出一个函数”或“重构一个类的定义”是如何使问题由复杂变得简单的时候，你必定是开心的。一旦对自己的作品产生了自豪感，你就会热切地去追求代码的整洁。对此，你可以保持一段时间。")]),e._v(" "),n("p",[e._v("但是不要止乎此，不要成为一个整洁代码的狂热分子。整洁代码并不是目的，它只是让我们从所面对系统的异常复杂性中解脱出来的方法。在你不是很明确一个改动会如何影响到整个代码库时，这信念可以作为一种安全防护机制。但是在未知的海洋里，你需要一个指南针。")]),e._v(" "),n("p",[e._v("那就让整洁代码指引你吧，"),n("strong",[e._v("然后忘了它")]),e._v("。")]),e._v(" "),n("p",[e._v("--- EOF ---")]),e._v(" "),n("p",[n("strong",[e._v("推荐↓↓↓")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("                           ![前端开发](http://mmbiz.qpic.cn/mmbiz_png/hp6WA88JQ4STF9AEufpicoIjylicfYsBn6vLduLheUm8SicJHNiaYfm9x3v2Ribn41MpV4diabP1t7qlfibdSKbvvED8w/0?wx_fmt=png)              \n\n                   **                                前端开发                           **           专注于Web前端技术文章分享，包含JavaScript、HTML5、CSS3等前端基础知识，以及Vue.js,React,Augular等前端框架\n\n                0篇原创内容                      \n")])])]),n("p",[e._v("公众号")]),e._v(" "),n("p",[e._v("文章来源：https://mp.weixin.qq.com/s/rL8GJqKszMV_hlwq6JEWaA")]),e._v(" "),n("backTop")],1)}),[],!1,null,null,null);t.default=i.exports}}]);