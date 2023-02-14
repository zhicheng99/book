
module.exports = { title: '日常收集', description: 'Just playing around', base: '/book/', 
plugins: [
        ['vuepress-plugin-side-anchor']
    ], themeConfig: { 
algolia:{

        appId: "VHK35PIBP8",
apiKey: "72e05530eb3e8b95d9a65cef01f2b00c",
indexName: "book",

},

        sidebarDepth: 0, sidebar:[ { "title": "dom的事件", "children": [
                    ["/291.md", "Javascript事件捕获与事件冒泡"],
                    ["/194.md", "DOM 事件流（event flow ）存在三个阶段：**事件捕获阶段、处于目标阶段、事件冒泡阶段。**"]
                ] }, { "title": "Javascript", "children": [
                    ["/338.md", " JS异步编程——WebWorker多线程机制"],
                    ["/337.md", "js"],
                    ["/336.md", " [核心概念] 一文说透JS中的原型和继承(上)"],
                    ["/335.md", " [关联概念] 一文说透 JS 中的变量提升"],
                    ["/334.md", " [核心概念] 一文说透浏览器环境下的JS运行机制"],
                    ["/333.md", " [核心概念] 一文说透JS中的函数柯里化(Currying)"],
                    ["/332.md", " [核心概念] 一文说透 JS 中 this 的基本概念"],
                    ["/331.md", " [核心概念] 一文说透 JS 的作用域（scope）"],
                    ["/330.md", " [核心概念] 一文说透 JS 中的闭包（closure）"],
                    ["/329.md", " [核心概念] 一文说透 JS 中的执行上下文"],
                    ["/268.md", " 「硬核JS」你真的了解垃圾回收机制吗"],
                    ["/262.md", " 「硬核JS」你的程序中可能存在内存泄漏"],
                    ["/229.md", " 聊聊JS的二进制家族：Blob、ArrayBuffer和Buffer"],
                    ["/226.md", " `Object.defineProperty()详解`"],
                    ["/180.md", "yield是什么"],
                    ["/175.md", "HTTP请求中，几种常见的Content-Type类型"],
                    ["/172.md", " js 给元素添加、删除父标签"],
                    ["/171.md", " 多个promise实现"],
                    ["/131.md", " Object.defineProperty和Object.defineProperties()"],
                    ["/126.md", " scrollHeight,scrollLeft,offsetHeight,offsetLeft"],
                    ["/118.md", " 怎样让 forEach 停下来呢；**try catch**"],
                    ["/105.md", "div拖动的实现"],
                    ["/93.md", "JavaScript对象之深拷贝和浅拷贝"],
                    ["/92.md", "base64。js"],
                    ["/85.md", "你也许不知道的JavaScript高级函数"],
                    ["/78.md", "ESmodules:Acartoondeep-dive"],
                    ["/73.md", "setTimeout和setImmediate到底谁先执行，本文让你彻底理解EventLoop"],
                    ["/71.md", "一种对开发更友好的前端骨架屏自动生成方案"],
                    ["/68.md", "深入理解ESModules(手绘示例)"],
                    ["/48.md", "系统学习前端之FormData详解"],
                    ["/47.md", "使用FormData上传文件"],
                    ["/46.md", "数组排序方法"],
                    ["/43.md", "利于FileReader实现二进制数据流转JSON"],
                    ["/28.md", "reduce过滤数组中重复对象"],
                    ["/27.md", "常用文件类型对应"]
                ] }, { "title": "element-ui", "children": [
                    ["/174.md", " element ui 表格动态生成多级表头，可无限嵌套"],
                    ["/356.md", " 【vue】使用element的select选择器结合Tree树形控件实现下拉树效果"],
                    ["/355.md", " el-dialog增加拖动功能"],
                    ["/293.md", " 大图预览（点击放大弹出，关闭缩回原位置）"],
                    ["/270.md", " 允许批量上传图片组件（分块上传）（带在线裁图）"],
                    ["/219.md", " element样式"],
                    ["/214.md", " 保留两位小数"],
                    ["/181.md", " 在线裁图+分块上传图片 vue组件"],
                    ["/177.md", " 分块上传视频 对接ali-oss"],
                    ["/176.md", " 分块上传视频 vue组件"],
                    ["/152.md", "fdsfs"],
                    ["/151.md", " el-form表单携带上传的excel文件做提交"], { "title": "子文件夹", "children": [] },
                    ["/149.md", " 文件夹里"],
                    ["/144.md", " element-ui Tooltip组件样式修改"],
                    ["/122.md", " quillEditor 图片/视频上传功能及大小链接设置"],
                    ["/121.md", " 上传视频文件组件UploadVideo.vue 基于element-ui"],
                    ["/109.md", " 图片上传组件vue+在线裁图 基于element-ui"],
                    ["/106.md", " 用于el-table列中显示的多图组件/图片自动铺满显示区域 依赖于el-carousel"],
                    ["/36.md", "element-form表单验证数值类型字段注意事项"],
                    ["/35.md", "element-upload上传图片前判断图片尺寸"],
                    ["/25.md", "element自定义验证"],
                    ["/24.md", "element动态表格字段验证"]
                ] },
            ["/31.md", " 知识库管理系统开发 log记录"],  { "title": "Qcanvas", "children": [
                    ["/138.md", "Qcanvas架构图"]
                ] },     { "title": "vue", "children": [
                    ["/81.md", "如何使用VUE动态的对异步组件进行加载？"],
                    ["/354.md", " 滚动组件"],
                    ["/298.md", " input失去焦点自动格式为两位浮点数Vue指令"],
                    ["/254.md", " 自己实现的【在线裁图】组件"],
                    ["/142.md", " vue按需引入ui库、同时引入两种组件库"],
                    ["/112.md", " vue项目报错webpackJsonp is not defined"],
                    ["/110.md", "Vue项目History模式nginx报404问题解决"],
                    ["/102.md", "图片裁剪组件vue"],
                    ["/89.md", "移动端图片上传vue组件（包括图片自动转正方向大小压缩）待理一步优化"],
                    ["/82.md", "Vue.js中异常高效可用的。sync修饰符"],
                    ["/29.md", "vue事件"],
                    ["/26.md", " 使用 scp2 自动布署 vue 编译包到服务器"]
                ] },  { "title": "大屏", "children": [] },  
            ["/328.md", " 从哲学层面浅谈计算机学习方法论"],
            ["/324.md", " 微信游览器，解决安卓和ios自动播放音乐"],
            ["/323.md", " CSS3 animation属性中的steps功能符深入介绍"],
            ["/322.md", " 前端搞工程化：从零打造性能检测库「源码 + 视频」"],
            ["/321.md", " 还在看那些老掉牙的性能优化文章么？这些最新性能指标了解下"],
            ["/320.md", " Nginx根据User Agent动态配置root目录适配移动端"], { "title": "可视化大屏", "children": [
                    ["/314.md", "组件开发平台项目整体架构图"],
                    ["/312.md", "大屏组件配置关系图"]
                ] }, 
            ["/307.md", " cat文档内容中搜索字符串输出到文件"], { "title": "node", "children": [
                    ["/353.md", " nvm use 命令切换版本无效"],
                    ["/325.md", " 解决 node.js 后台服务器无操作自动断开连接"],
                    ["/315.md", " 使nodejs程序一直在后台运行"],
                    ["/305.md", " Mac下通过n管理多个版本的node.js"],
                    ["/304.md", "MacOS下npmdoesnotsupportNode.jsvx.x.x但是npm版本太低导致npmi-gnpm命令无效无法升级npm的解决办法"]
                ] },
            ["/301.md", "从App store下载App的不同版本ipa文件----很多东西也不是越新越好，比如APP——在 iPhone 上尤其如此"], { "title": "工作总结", "children": [] }, 
            ["/294.md", "迟子建老师的《一坛猪油》"],
            ["/289.md", "ata-rawheight=&quot;143&quot;class=&quot;content_image&quot;width=&quot;322&quot;/&gt;![](/Public/upload/20211027/16353179551.jpg)温馨提示：内容较长，需耐心观看"],
            ["/288.md", "文本文档的协同编辑实现"],
            ["/287.md", "再见，整洁代码"],
            ["/286.md", " 可以在 Nginx 中运行 JavaScript，厉害了！"],
            ["/284.md", " word中批量调整图片大小"], { "title": "成考学习", "children": [
                    ["/352.md", " 微分方程"],
                    ["/351.md", " 定积分"],
                    ["/350.md", " 不定积分"],
                    ["/349.md", " 函数单调性和曲线的凹凸性"],
                    ["/348.md", " 微分"],
                    ["/347.md", " 导数"],
                    ["/346.md", " 函数的连续性与间断点"],
                    ["/345.md", " 求极限"],
                    ["/344.md", " 集合"],
                    ["/310.md", "燕山大学《学籍卡》信息填报说明"],
                    ["/290.md", " 文档标题"],
                    ["/283.md", "导数与微分"]
                ] }, { "title": "electron打包的一些问题", "children": [
                    ["/281.md", " Electron打包问题：electron-packager运行卡住终极解决方案"],
                    ["/279.md", " electron程序，如何利用appdmg打包生成dmg安装包？"],
                    ["/278.md", " electron安装+运行+打包成桌面应用+打包成安装文件+开机自启动"]
                ] },
            ["/274.md", " 文件分片代码"],
            ["/273.md", " 重学 JS：为啥 await 不能用在 forEach 中详解"], 
            ["/269.md", " Excel函数之王，Vlookup到底怎么用？"], { "title": "mysql", "children": [
                    ["/311.md", " win7下安装MySQL5.7教程"], { "title": "解决保存表情符号失败的问题", "children": [
                            ["/265.md", " Mac下mysql配置文件没有my-default.cnf，无法配置my.cnf"],
                            ["/264.md", " [emoji等表情符号存mysql的方法]"]
                        ] }
                ] },
            ["/263.md", " 文档标题"], { "title": "批处理", "children": [
                    ["/253.md", " 批处理解决实际问题1——将目录下所有文件（*.cpp）分别创建同名文件夹并移入其中"],
                    ["/251.md", " 求助 几百个文件  想为每个文件新建一个文件夹  文件夹的名字为这个文件的名字（不包含扩展名）  求教如何快速完成"]
                ] },
            ["/248.md", " 《提问的智慧》精读注解版"],
            ["/247.md", " 1368个单词"],
            ["/199.md", " js监听div的resize事件"],
            ["/198.md", " 引入第三方字体体积太大的问题"],
            ["/195.md", " 多行溢出省略号显示（css/js）实现！"],
            ["/190.md", "今天带大家一起来看看下，如何实现“划词高亮”功能。"], { "title": "极简中国史趣味笔记", "children": [
                    ["/188.md", "就请锁定**极简中国史趣味笔记**，条理简洁，好玩好用好记，相信一定会帮助到热爱历史的您！另外，在每段历史时期的结尾有对应的世界史时期的笔记，您可以横向比较同期世界历史的发展，更好地宏观把握全球历史发展的相互影响和关联。"],
                    ["/187.md", " 标题"]
                ] }, { "title": "拓扑图", "children": [
                    ["/130.md", " 拓扑图测试问题 9-2"],
                    ["/125.md", " 拓扑图问题"],
                    ["/124.md", " 根据关系线生成布局（计算行 列）算法"],
                    ["/123.md", " 拓扑图需求"]
                ] }, { "title": "Css", "children": [
                    ["/184.md", " 前端实现一个小说分页的功能"],
                    ["/42.md", "CSS实现显示两行文字，超出使用..."]
                ] }, { "title": "算法", "children": [
                    ["/50.md", " 仿有道云笔记网页剪报效果 抽取网页主内容区的算法原理"]
                ] }, { "title": "Canvas", "children": [
                    ["/241.md", "canvas最佳实践（性能篇）"],
                    ["/228.md", " Canvas性能优化"],
                    ["/145.md", " html5 canvas速查表"],
                    ["/143.md", " 聊聊canvas的元素选中"]
                ] }, { "title": "工作中解决的疑难问题", "children": [
                    ["/191.md", " 那些IOS系统中使用Input遇到的坑"],
                    ["/141.md", " video标签 自动播放问题"],
                    ["/133.md", " canvas图片、文字在移动端显示模糊问题 解决方案"],
                    ["/129.md", " webpack 4.x 解决 webpack-dev-server工具在webpack构建的项目中使用问题"],
                    ["/111.md", " 页面滚动后导致 html2canvas截图不全、图片模糊的问题"]
                ] }, { "title": "Git", "children": [
                    ["/297.md", " git密码修改问题解决方案(Window &amp;Mac)"],
                    ["/275.md", " Git 远程推送被拒绝的一种解决方案"],
                    ["/185.md", " 学会了这一招，距离Git大神不远了！"],
                    ["/45.md", "如何clone一个Git项目到一个非空目录"],
                    ["/44.md", " Git 常见操作"]
                ] }, { "title": "nginx", "children": [
                    ["/300.md", " 解决nginx open() “/usr/local/var/run/nginx/client_body_temp/0000000009“ failed (13: Permission denied)  这个问题折腾两天 特意记录一下"],
                    ["/108.md", "NGINX代理导致请求头header中的信息丢失问题"],
                    ["/79.md", "五分钟看懂Nginx负载均衡"],
                    ["/77.md", "解决子目录布署vue应用nginx访问报404的问题"]
                ] }, { "title": "小程序", "children": [
                    ["/83.md", "小程序图片显示自定义组件imgShow"]
                ] },  
            ["/146.md", " 文档标题"],
            ["/140.md", "gdfdgf"],
            ["/137.md", "测试"],
            ["/135.md", " 深夜，我偷听到程序员要对session下手"],
            ["/132.md", " 读 《深入浅出webpack》"],
            ["/117.md", "双兔傍地走，安能辨我forEach还是for"],
            ["/115.md", " 文档标题"],
            ["/103.md", " 一道被人轻视的前端面试题"],
            ["/101.md", "部分前端面试题参考答案"],
            ["/80.md", "SVGDeveloper制作矢量地图教程详解"],
            ["/76.md", "VisualStudio2010创建的WCF（.dll）服务第一个应用"],
            ["/70.md", " 测试"],
            ["/41.md", "为了开发做测试用"],
            ["/40.md", " 文档标题"],
            ["/38.md", "文档标题"],
            ["/33.md", "文档标题"],
            ["/32.md", "测试锚点问题"]
        ] } }