(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{449:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-js-中异常高效可用的。sync-修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-中异常高效可用的。sync-修饰符"}},[t._v("#")]),t._v(" Vue.js 中异常高效可用的。sync 修饰符")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在 Vue.js 中，"),s("code",[t._v("父子组件")]),t._v(" 进行数据通信是一个老生常谈的话题，父级组件通过 "),s("code",[t._v("Prop")]),t._v(" 向子组件传递数据，而子组件如何向父级组件进行数据交流沟通呢？")]),t._v(" "),s("h2",{attrs:{id:"一、父子组件数据交互-第一种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、父子组件数据交互-第一种方式"}},[t._v("#")]),t._v(" 一、父子组件数据交互 - 第一种方式")]),t._v(" "),s("h3",{attrs:{id:"业务需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务需求"}},[t._v("#")]),t._v(" "),s("code",[t._v("业务需求：")])]),t._v(" "),s("p",[t._v("子组件展示父组件传递的数值 num，点击子组件中的 + 号按钮，改变父组件 num 的值")]),t._v(" "),s("p",[s("img",{attrs:{src:"Public/upload/2020-04-09/5e8e8efc7f1a6.png",alt:"",title:"5e8e8efc7f1a6.png"}})]),t._v(" "),s("p",[t._v("页面效果展示")]),t._v(" "),s("h3",{attrs:{id:"定义子组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义子组件"}},[t._v("#")]),t._v(" 定义子组件")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Num.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("子组件")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v('\n    <button @click="plus">+')]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("子组件：")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\nexport default {\n  name: 'Num',\n  props: {\n    num: {\n      type: Number,\n      required: true\n    }\n  },\n  methods: {\n    /**\n     * 子组件是无法直接修改this.num，也无法直接修改父级组件的num\n     * 子组件$emit触发特定事件，父级组件监听对应事件，处理num\n    */\n    plus () {\n      let num = this.$props.num\n      this.$emit('updateNum', ++num)\n    }\n  }\n}\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("h3",{attrs:{id:"定义父组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义父组件"}},[t._v("#")]),t._v(" 定义父组件")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Index.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("父组件：")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v('\n      <num :num="num" @updateNum="updateNum">')]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\nimport Num from './Num'\nexport default {\n  name: 'Index',\n  data () {\n    return {\n      num: 1\n    }\n  },\n  components: {\n    Num\n  },\n  methods: {\n    // 更新num,传递到子组件的数据发生更新\n    updateNum (num) {\n      this.num = num\n    }\n  }\n}\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n\n")])])])]),s("h3",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("使用以上方式进行父子组件通信是 Vue.js 的 "),s("code",[t._v("标配")]),t._v("：父组件通过 "),s("code",[t._v("prop")]),t._v(" 向子组件传递数据，子组件使用 "),s("code",[t._v("$emit")]),t._v(" 触发特定的事件 "),s("code",[t._v("updateNum")]),t._v("，父组件监听特定的事件 "),s("code",[t._v("updateNum")]),t._v("，进而更新父组件数据。功能确实实现了，但是在部分情况下不是那么完美")]),t._v(" "),s("p",[s("strong",[t._v("缺点：")]),t._v(" 考虑到 Num.vue 以后可能被多个组件复用，那么每个 "),s("code",[t._v("父组件")]),t._v(" 中都需要监听处理 "),s("code",[t._v("updateNum")]),t._v(" 事件，这样的话，对于父组件提升了其复杂性，对于子组件降低了其功能的独立性。")]),t._v(" "),s("h2",{attrs:{id:"二、父子组件数据交互-第二种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、父子组件数据交互-第二种方式"}},[t._v("#")]),t._v(" 二、父子组件数据交互 - 第二种方式")]),t._v(" "),s("blockquote",[s("p",[t._v("完美解决方案："),s("code",[t._v(".sync")]),t._v(" 修饰符")])]),t._v(" "),s("p",[t._v("Vue.js 本身就考虑到这种情况，提供了使用 "),s("code",[t._v(".sync")]),t._v(" 修饰符，以实现更加便捷的从子组件更新父组件数据。")]),t._v(" "),s("blockquote",[s("p",[t._v("父子组件都要进行特定的配置")])]),t._v(" "),s("h3",{attrs:{id:"子组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#子组件"}},[t._v("#")]),t._v(" 子组件")]),t._v(" "),s("p",[t._v("在原有的 Num.vue 中，需要修改以下位置代码：")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Num.vue")]),t._v("\nmethods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plus "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        let num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：此处触发的update:xxx事件，是特定的事件名称，xxx对应的是父组件中对应的变量num")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update:num'")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"父组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#父组件"}},[t._v("#")]),t._v(" 父组件")]),t._v(" "),s("p",[t._v("在原有的父组件 Index.vue 中，需要修改以下位置的代码：")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Index.vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    \x3c!-- 其他代码 --\x3e\n    \x3c!--\n        调用Num组件，并传递num，此处一定要添加.sync修饰符\n        同时不用再监听任何其他事件\n        同时methods中添加的updateNum方法删除即可\n    --\x3e\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("num")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":num.sync")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("现在就实现了第一种方式中的相同功能！手动 微笑.gif")]),t._v(" "),s("h3",{attrs:{id:"小结-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结-2"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("其实 "),s("code",[t._v(".sync")]),t._v(" 修饰符是相同于 Vue.js 自动帮你在 Index.vue 中的 "),s("code",[t._v("num")]),t._v(" 组件调用上监听了 "),s("code",[t._v("update:num")]),t._v(" 事件，并将传递的新值赋值到了变量 num 上，实现了子组件更新父组件的变量，进行了数据通信。")]),t._v(" "),s("h2",{attrs:{id:"思维拓展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思维拓展"}},[t._v("#")]),t._v(" 思维拓展")]),t._v(" "),s("p",[t._v("在很多的第三方框架中，如 "),s("code",[t._v("element-ui")]),t._v("，都使用了 "),s("code",[t._v(".sync")]),t._v(" 修饰符的功能。比如 "),s("code",[t._v("Dialog对话框")]),t._v(" 组件，调用时也是使用 "),s("code",[t._v(".sync")]),t._v(" 方式传递变量 "),s("code",[t._v("visible")]),t._v(" 的值，子组件 Dialog 在执行关闭对话框时，就执行了 "),s("code",[t._v("this.$emit('update:visible', false)")]),t._v("（详情可自行查看 elemnt-ui 源码）")]),t._v(" "),s("h2",{attrs:{id:"后记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),s("p",[t._v("以上就是胡哥今天给大家分享的内容，喜欢的小伙伴记得收藏、转发、点击在看呦，欢迎多多留言交流...")]),t._v(" "),s("blockquote",[s("p",[t._v("胡哥有话说，一个有技术，有情怀的胡哥！京东开放平台首席前端攻城狮。与你一起聊聊大前端，分享前端系统架构，框架实现原理，最新最高效的技术实践！")])]),t._v(" "),s("p",[t._v("长按扫码关注，更帅更漂亮呦！关注胡哥有话说公众号，可与胡哥继续深入交流呦！")]),t._v(" "),s("p",[s("img",{attrs:{src:"//upload-images.jianshu.io/upload_images/3091895-f0b4b900390aec73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/258/format/webp",alt:"null"}})]),t._v(" "),s("p",[t._v("胡哥有话说")]),t._v(" "),s("p",[t._v("文章来源：https://www.jianshu.com/p/efde1f54a367")]),t._v(" "),s("backTop")],1)}),[],!1,null,null,null);a.default=e.exports}}]);