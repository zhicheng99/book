(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{316:function(t,n,e){"use strict";e.r(n);var a=e(10),i=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"video标签-自动播放问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video标签-自动播放问题"}},[t._v("#")]),t._v(" video标签 自动播放问题")]),t._v(" "),e("h4",{attrs:{id:"需求一-点击项目实现全屏自动播放"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求一-点击项目实现全屏自动播放"}},[t._v("#")]),t._v(" 需求一 点击项目实现全屏自动播放")]),t._v(" "),e("h4",{attrs:{id:"需求二-播放过程中-播放器界面右侧设置关闭按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求二-播放过程中-播放器界面右侧设置关闭按钮"}},[t._v("#")]),t._v(" 需求二 播放过程中 播放器界面右侧设置关闭按钮")]),t._v(" "),e("p",[t._v("最初使用的是vue-video-player组件  在android平台使用都没有问题 但是ios端微信即不能自动播放 关闭按钮也会被播放器覆盖（经过测试是因为ios端微信直接劫持的video标签 渲染层级是最高的）")]),t._v(" "),e("p",[t._v('经过进一步测试发现vue-video-player渲染生成video标签中x5-playsinline="false"标签会导致微信流览器视频一直是最高层级 无法向其覆盖元素 去掉该属性 即可实现需求二')]),t._v(" "),e("p",[t._v("在ios平台微信 自动播放autoplay是被忽略的 必须得有实际的交互操作才可触发播放\njssdk方式可以实现  不过也不算完全解决  首次可以自动播放 当再次点同一个视频时 就不起作用了\n最终发现在可以用WeixinJSBridgeReady方式实现")]),t._v(" "),e("p",[t._v("android版飞书 低版本不能自动播放  升级高版本即可\nios飞书和ios微信类似 区别是需要引入飞书js-sdk 才可以实现 地址：https://s0.pstatp.com/ee/lark/js_sdk/h5-js-sdk-1.4.5.js")]),t._v(" "),e("p",[t._v("至于safari下不能自动播放的情况  暂时没有解决方案")]),t._v(" "),e("p",[t._v("附代码")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n\t<div class=\"player box box-align-center\" id=\"player\" >\n\t  \n\t\t \n\t\t \n\n\t\t<video v-if=\"url\" @click=\"fsPlay\"\n\t\t\t ref=\"videoPlayer\"\n\t\t:id=\"id\"\n\t\tx5-video-player-fullscreen=\"true\" \n\t\tx5-video-player-type=\"h5\" \n\t\tpreload=\"auto\"\n\t\tautoplay=\"autoplay\"  \n\t\t:poster=\"cover\"\n\t\tstyle=\"position: absolute;left: 0;top:0; width: 100%;height:100%;object-fit: cover;\"\n\t\twebkit-playsinline playsinline :src=\"url\">\n\t\t</video>\n\n\t</div>\n\n</template>\n\n<script> \n\n\texport default{\n\t\tcomponents:{\n\t\t\t// VideoPlayer\n\t\t},\n\t\tprops:['videoUrl','videoId','videoCover','callBack'],\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\turl:'',\n\t\t\t\tcover:'',\n\t\t\t\tid:'', \n\n\t\t\t}\n\t\t},\n\t\tmethods:{\n\t\t\tfsPlay:function(){\n\t\t\t\tdocument.getElementById(this.id).load();\n\t\t\t\tdocument.getElementById(this.id).play();\n\t\t\t},\n\t\t\tstop:function(){\n\t\t\t\tconsole.log('stop');\n\t\t\t\tthis.$refs.videoPlayer.player && this.$refs.videoPlayer.player.pause();\n\t\t\t},\n\t\t\tisWeixin:function(){\n\n\t\t\t\tlet ua = navigator.userAgent.toLocaleLowerCase();\n\t\t\t     console.log(ua);\n\t\t\t      // x5内核\n\t\t\t      if (ua.match(/iphone/) != null && \n\t\t\t      \t(ua.match(/micromessenger/) != null)) {\n\n\t\t\t      \t\treturn true\n\n\t\t\t      \t}else{\n\n\t\t\t      \t\treturn false;\n\t\t\t      \t}\n\n\t\t\t},\n\t\t\tweixinPlay:function(fn) {\n\t\t\t    if (!this.isWeixin()) {    // 非微信中直接执行，支不支持就交给浏览器本身了\n\t\t\t        fn();\n\t\t\t    } else {\n\t\t\t        if (window.WeixinJSBridge) {\n\t\t\t            WeixinJSBridge.invoke(\"getNetworkType\", {}, fn);   // 这句话是在微信中可以自动播放的核心\n\t\t\t        } else {\n\t\t\t            document.addEventListener(\"WeixinJSBridgeReady\",function () {\n\t\t\t                WeixinJSBridge.invoke(\"getNetworkType\", {}, fn);\n\t\t\t            });\n\t\t\t        }\n\t\t\t    }\n\t\t\t},\n\t\t\t \n\t\t    loadJS:function( url, callback ){\n\n\t\t\t    var script = document.createElement('script'),\n\n\t\t\t        fn = callback || function(){};\n\n\t\t\t    script.type = 'text/javascript';\n\n\t\t\t  \n\n\t\t\t    //IE\n\n\t\t\t    if(script.readyState){\n\n\t\t\t        script.onreadystatechange = function(){\n\n\t\t\t            if( script.readyState == 'loaded' || script.readyState == 'complete' ){\n\n\t\t\t                script.onreadystatechange = null;\n\n\t\t\t                fn();\n\n\t\t\t            }\n\n\t\t\t        };\n\n\t\t\t    }else{\n\n\t\t\t        //其他浏览器\n\n\t\t\t        script.onload = function(){\n\n\t\t\t            fn();\n\n\t\t\t        };\n\n\t\t\t    }\n\n\t\t\t    script.src = url;\n\n\t\t\t    document.getElementsByTagName('head')[0].appendChild(script);\n\n\t\t\t}, \n\n\t\t},\n\t\tcreated() { \n\n\t\t},\n\t\tcomputed: {\n\t\t    player () {\n\t\t      return this.$refs.videoPlayer.player\n\t\t    },\n\t\t    playsinline () {\n\t\t      let ua = navigator.userAgent.toLocaleLowerCase()\n\t\t      // x5内核\n\t\t      if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {\n\t\t        return false\n\t\t      } else {\n\t\t        // ios端\n\t\t        return true\n\t\t      }\n\t\t  }\n\t\t},\n\t\twatch:{\n\t\t\tvideoUrl:{\n\n\t\t\t\thandler:function(v){\n\t\t\t\t\tif(v!=''){\n\t\t\t\t\t\tthis.url = v;\n\n\t\t\t\t\t\tthis.id = 'player_'+parseInt(Math.random()*100000);\n\n\n\t\t\t\t\t\tsetTimeout(()=>{\n\n\t\t\t\t\t\t\tlet ua = navigator.userAgent.toLocaleLowerCase();\n\n\t\t\t\t\t\t\t//ios端飞书打开后自动播放\n\t\t\t\t\t\t\tif(ua.match(/iphone/) != null){\n\n\t\t\t\t\t\t\t\twindow.h5sdk && \n\t\t\t\t\t\t\t\twindow.h5sdk.device &&\n\t\t\t\t\t\t\t\twindow.h5sdk.device.connection &&\n\t\t\t\t\t\t\t\twindow.h5sdk.device.connection.getNetworkType({\n\t\t\t\t\t\t\t          onSuccess: (responseData) => { \n\t \n\n\t\t\t\t\t\t\t\t\t\t\t\tdocument.getElementById(this.id).load();\n\t\t\t\t\t\t\t\t\t\t\t\tdocument.getElementById(this.id).play();\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t          }\n\t\t\t\t\t\t\t    })\n\t\t\t\t\t\t\t}\n \n\n\t\t\t\t\t\t\t//微信打开播放\n\t\t\t\t\t\t\tthis.weixinPlay(()=>{\n\n\t\t\t\t\t\t\t\tdocument.getElementById(this.id).load();\n\t\t\t\t\t\t\t\tdocument.getElementById(this.id).play();\n\t\t\t\t\t\t\t})\n \n \n\t\t\t\t\t\t\t  //    let ua = navigator.userAgent.toLocaleLowerCase();\n\t\t\t\t\t\t\t  //    console.log(ua);\n\t\t\t\t\t\t\t  //     // x5内核\n\t\t\t\t\t\t\t  //     if (ua.match(/iphone/) != null && \n\t\t\t\t\t\t\t  //     \t(ua.match(/micromessenger/) != null) \n\t\t\t\t\t\t\t  //     \t// (ua.match(/safari/) != null)\n\n\t\t\t\t\t\t\t  //     \t ) {\n\t\t\t\t\t\t\t\t //      \tconsole.log('safari或微信');\n\n\t\t\t\t\t\t\t\t //      \tthis.loadJS('http://res.wx.qq.com/open/js/jweixin-1.0.0.js',()=>{\n\n\t\t\t\t\t\t\t\t\t// \t\t wx.config({\n\t\t\t\t\t\t\t\t\t// \t\t        debug: false,\n\t\t\t\t\t\t\t\t\t// \t\t        appId: parseInt(Math.random()*10000),\n\t\t\t\t\t\t\t\t\t// \t\t        timestamp: parseInt(Math.random()*10000),\n\t\t\t\t\t\t\t\t\t// \t\t        nonceStr: parseInt(Math.random()*10000),\n\t\t\t\t\t\t\t\t\t// \t\t        signature: parseInt(Math.random()*10000),\n\t\t\t\t\t\t\t\t\t// \t\t        jsApiList: []\n\t\t\t\t\t\t\t\t\t// \t\t})\n\t\t\t\t\t\t\t\t\t// \t\twx.ready(()=> {\n\t\t\t\t\t\t\t\t\t// \t\t\tconsole.log('ready');\n\t\t\t\t\t\t\t\t\t// \t\t\tvar video = document.getElementById(this.id);\n\t\t\t\t\t\t\t\t\t// \t\t       video.play();\n\t\t\t\t\t\t\t\t\t// \t\t});\n\n\t\t\t\t\t\t\t\t //      \t}) \n\n\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t  //     }else{\n\t\t\t\t\t\t\t\t\t// document.getElementById(this.id).load();\n\t\t\t\t\t\t\t\t //    document.getElementById(this.id).play(); \n\n\t\t\t\t\t\t\t  //     }\n\n\n\n\t\t\t\t\t\t},1000) \n\t\n\t\t\t\t\t}\n\t\n\t\t\t\t\t \n\t\t\t\t},\n\t\t\t\timmediate:true\n\n\t\t\t},\n\t\t\tvideoId:function(v){\n\t\t\t \n\t\t\t},\n\t\t\tvideoCover:{\n\t\t\t\thandler:function(v){\n\t\t\t\t\t \n\t\t\t\t\t\tthis.cover = v; \n\t\t\t\t},\n\t\t\t\timmediate:true\n\n\t\t\t}\n\t\t},\n\t\tmounted() { \n\n\t\t}\n\n\t}\n<\/script>\n\n<style scoped>\n\t.player{\n\t    position: absolute;\n\t    left:0;\n\t    top:0;\n\t    height: 100%;\n\t    width: 100%;\n\t    background: #000; \n\t}\n\t.play_ico{\n\t\tposition: absolute;\n\t\tleft:0;\n\t\ttop:0;\n\t\tcolor: #fff;\n\t}\n\n\t.video-player {\n\t\t /*height: 100%;\n\t\twidth: auto;*/\n\t\tbackground: #000;\n\t}\n\t \n\n</style>\n")])])]),e("backTop")],1)}),[],!1,null,null,null);n.default=i.exports}}]);