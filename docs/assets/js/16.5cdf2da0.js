(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{295:function(t,n,e){"use strict";e.r(n);var i=e(10),o=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"图片上传组件vue-在线裁图-基于element-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片上传组件vue-在线裁图-基于element-ui"}},[t._v("#")]),t._v(" 图片上传组件vue+在线裁图 基于element-ui")]),t._v(" "),e("p",[e("img",{attrs:{src:"Public/upload/2020-06-30/202006301925454970.png",alt:"5efb21365c81f.png"}})]),t._v(" "),e("p",[t._v("调用示例")]),t._v(" "),e("blockquote"),t._v(" "),e("p",[t._v("UploadImg.vue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<template>\n\t<div class=\"clear\" id=\"uu\">\n\t\t<div class=\"item up\" v-for=\"(item,index) in imgs\"\n\t\tv-bind:style=\"{\n\t\t\t'background': 'url('+item+') center center no-repeat',\n\t\t\t'backgroundSize':'cover',\n\t\t\t'position':'relative',\n\t\t\t'backgroundColor':'#fff'}\" \n\t\t>\n\n\n\t\t\t<i class=\"el-icon-close\" @click.stop=\"close(index)\"></i>\n\n\t\t\t<i v-if=\"showDown\"  class=\"down\" v-bind:class=\"{'el-icon-download':pindex != index,'el-icon-loading':pindex==index}\" @click.stop=\"down(item,index)\"></i>\n\t\t  \n\t\t</div>\n\t\t<div class=\"item up box box-align-center\" v-if=\"imgs.length<limtNum\">\n\t\t\t<i class=\"el-icon-upload\"></i>\n\n\t\t\t<input :key=\"key\" type=\"file\" @change=\"addImg\" ref=\"inputer\" accept=\"image/png,image/jpeg,image/gif,image/jpg\">\n\t\t</div>\n\n\n\t\t<CutImg\n  \t\tv-bind:is-show.sync=\"isShow\"\n  \t\tv-bind:img-url=\"imgUrl\"\n  \t\tv-bind:call-back=\"resetAddImg\"\n  \t\tv-bind:fixed-number=\"fixedNumber\"\n  \t\t></CutImg>\n\n\t</div>\n</template>\n<script>\n\timport FileSaver from 'file-saver';\n\timport CutImg from './CutImg.vue';\n\n\n\n\texport default{\n\t\tcomponents:{\n\t\t\tCutImg\n\t\t},\n\t\tprops:['maxNum','uploadImg','isDown','isCut','fixedNumber'],\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tkey:'0',\n\n\t\t\t\tisShow:false,\n\t\t\t\tisCut:false,\n\t\t\t\timg:'',\n\n\t\t\t\timgs:[\n\t\t\t\t\t// '../../static/img/no.jpg'\n\t\t\t\t],\n\t\t\t\tlimtNum:2,\n\n\t\t\t\tmaxW :500,\n        \t\tmaxH :500,\n\n        \t\tshowDown:false,\n        \t\tdowning:[],\n        \t\tpindex:-1,\n\n        \t\timgUrl:''\n\n\t\t\t}\n\t\t},\n\t\tmethods:{\n\t\t\tresetAddImg:function(v){\n\t\t\t\tconsole.log(v);\n\t\t\t\t\tthis.imgs.push(v);\n\t\t\t\t\tif(typeof this.uploadImg != 'undefined'){\n\n\t\t\t\t\t\tthis.$emit('update:uploadImg',this.imgs.join(','));\n\n\t\t\t\t\t\tthis.key++;\n\n\t\t\t\t\t}\n\t\t\t},\n\t\t\tdataURLtoBlob:function(baseurl) {\n\t\t\t\t    let arr = baseurl.split(','),\n\t\t\t\t        mime = arr[0].match(/:(.*?);/)[1],\n\t\t\t\t        bstr = atob(arr[1]),\n\t\t\t\t        n = bstr.length,\n\t\t\t\t        u8arr = new Uint8Array(n);\n\t\t\t\t    while (n--) {\n\t\t\t\t        u8arr[n] = bstr.charCodeAt(n);\n\t\t\t\t    }\n\t\t\t\t    return new Blob([u8arr], {\n\t\t\t\t        type: mime\n\t\t\t\t    });\n\t\t\t},\n\t\t\tdown:function(url,index){\n\n \n\n\t\t\t\tif(this.pindex != -1){\n\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\t\t\t\tthis.pindex = index;\n\n\t\t\t\tvar img = new Image();\n\t\t\t\timg.onload = ()=>{\n\n\t\t\t\t\tlet w = img.width;\n\t\t\t\t\tlet h = img.height;\n\n\t\t\t\t\tlet canvas = document.createElement('canvas');\n\t\t\t\t\tlet ctx = canvas.getContext('2d');\n\t\t\t\t\tcanvas.width = w;\n\t\t\t\t\tcanvas.height = h;\n\n\t\t\t\t\tctx.drawImage(img,0,0);\n\n\n\t\t\t\t\tlet fileName = new Date().getFullYear()+''+(new Date().getMonth()+1)+''+new Date().getDate()+''+parseInt(Math.random()*10000);\n\n\t\t\t\t\tFileSaver.saveAs(this.dataURLtoBlob(canvas.toDataURL(\"image/png\")), fileName+\".png\");\n\n\t\t\t\t\tsetTimeout(()=>{\n\t\t\t\t\t\tthis.pindex = -1;\n\t\t\t\t\t})\n\n\t\t\t\t}\n\t\t\t\timg.src = url;\n\t\t\t},\n\t\t\thide:function(){\n\t\t\t\tthis.isShow = false;\n\t\t\t},\n\n\t\t\tshowPre:function(img){\n\t\t\t\tthis.img = img;\n\t\t\t\tthis.isShow = true;\n\t\t\t},\n\n\t\t\tclose:function(index){\n\t\t\t\tthis.imgs.splice(index,1);\n\n\n\t\t\t\tif(typeof this.uploadImg != 'undefined'){\n\t\t\t\t\tthis.$emit('update:uploadImg',this.imgs.join(','));\n\n\t\t\t\t}\n\n\n\t\t\t}, \neqScale:function(imgObj){ \n\n\t\t\t\tvar _this = this;\n\t\t\t\treturn new Promise((resolve,reject)=>{\n\n\t\t\t\t\tlet reader = new FileReader();\n\t\t\t\t    reader.onload =  (evt)=> {\n\t\t\t\t        var img = new Image();\n\t\t\t\t\t\timg.onload = function(){\n\t\t\t\t\t\t\tconsole.log(this.width);\n\t\t\t\t\t\t\tconsole.log(this.height);\n\n\t\t\t\t\t\t\tlet n = _this.fixedNumber.split(\":\"); \n\t\t\t\t\t\t\tlet rate1 = n[0]/n[1];\n\t\t\t\t\t\t\tlet rate2 = this.width/this.height;\n\t\t\t\t\t\t\tif(parseInt(rate1*100) == parseInt(rate2*100)){\n\t\t\t\t\t\t\t\tresolve('0')\n\t\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\t\tresolve('1')\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\t\t\t\t\t\timg.src = evt.target.result\n\n\t\t\t\t    };\n\t\t\t\t    reader.readAsDataURL(imgObj);  \n\n\t\t\t\t})\n\n\n\t\t\t},\n\t\t\taddImg:function(){\n\n\t\t\t\tif(this.limtNum == this.imgs.length){\n\n\t\t\t\t\tthis.$message({\n\t\t\t\t\t\tmessage:'最多可上传'+this.limtNum+'张图片！',\n\t\t\t\t\t\ttype:'warning'\n\n\t\t\t\t\t}) \n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\n\t\t\t\tlet inputDOM = this.$refs.inputer;  \n\t\t\t\tif(typeof inputDOM.files[0] == 'undefined'){\n\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\n\n\t\t\t\tif(!this.isCut){\n\n\t\t\t\t\tthis.$postWithFile('/admin/file/uploadFile?module=dc_video',{\n\t\t\t\t\t\tfile:inputDOM.files[0], \n\t\t\t\t\t}).then(({code,obj})=>{\n\n\n\n\t\t\t\t\t\t(code == '00') &&\n\t\t\t\t\t\t(()=>{\n\t\t\t\t\t\t\tthis.imgs.push(obj);\n\n\t\t\t\t\t\t})()\n\n\t\t\t\t\t\tif(typeof this.uploadImg != 'undefined'){\n\t\t\t\t\t\t    this.$emit('update:uploadImg',this.imgs.join(','));\n\n\t\t\t\t\t\t    this.key++;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t})\n\t\t\t\t}else{\n\n\t\t\t\t\tthis.eqScale(inputDOM.files[0]).then(res=>{\n\n\t\t\t\t\t\tif(res == '0'){\n\t\t\t\t\t\t\tconsole.log('直接上传') \nthis.$postWithFile('/admin/file/uploadFile?module=dc_video',{\n\t\t\t\t\t\tfile:inputDOM.files[0], \n\t\t\t\t\t}).then(({code,obj})=>{\n\n\n\n\t\t\t\t\t\t(code == '00') &&\n\t\t\t\t\t\t(()=>{\n\t\t\t\t\t\t\tthis.imgs.push(obj);\n\n\t\t\t\t\t\t})()\n\n\t\t\t\t\t\tif(typeof this.uploadImg != 'undefined'){\n\t\t\t\t\t\t    this.$emit('update:uploadImg',this.imgs.join(','));\n\n\t\t\t\t\t\t    this.key++;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t})\n\n\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tthis.cut(inputDOM.files[0]);\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t})\n\n\t\t\t\t\t//this.cut(inputDOM.files[0])\n\n\n\t\t\t\t}\n\n\t\t\t},\n\t\t\tcut:function(file){\n\n\t\t\t\tlet reader = new FileReader();\n\t\t\t    reader.onload =  (evt)=> {\n\t\t\t      var base64 = evt.target.result\n\t\t\t\t      this.imgUrl = base64;\n\t\t              this.isShow = true;\n\t\t\t    };\n\t\t\t    reader.readAsDataURL(file);  \n\n\t\t\t}\n\n\t\t},\n\t\tmounted(){\n\n\t\t\tif(typeof this.maxNum !='undefined'){\n\t\t\t\tthis.limtNum = this.maxNum;\n\t\t\t} \n\n\n\t\t},\n\t\tcreated(){\n\n\t\t},\n\t\tcomputed:{\n\t\t\t// doing:function(){\n\t\t\t// \treturn this.index!=-1?this.downing[this.index]:false;\n\t\t\t// }\n\t\t},\n\t\twatch:{\n\t\t\t'uploadImg':{\n\t\t\t\thandler:function(v){\n\n\t\t\t\t\tif((typeof v !='undefined') && v!=''){\n\t\t\t\t\t\tif(v.indexOf(',')>-1){  //多个图片\n\t\t\t\t\t\t\tthis.imgs = v.split(',');\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tthis.imgs = [v];\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}else{\n\t\t\t\t\t\tthis.imgs = [];\n\t\t\t\t\t}\n\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t},\n\t\t\t'isDown':{\n\t\t\t\thandler:function(v){\n\t\t\t\t\tif(typeof v !='undefined'){\n\t\t\t\t\t\tthis.showDown = v;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t},\n\t\t\t'isCut':{\n\t\t\t\thandler:function(v){\n\t\t\t\t\tif(typeof v !='undefined'){\n\t\t\t\t\t\tthis.isCut = v;\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t}\n\t\t}\n\t}\n\n<\/script>\n<style scoped>\n\t.clear:after{\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\t\tclear: both;\n\t\tline-height: 0;\n\t\tfont-size: 0;\n\t\theight: 0;\n\t}\n\t.item{\n\t\tposition: relative;\n\t\tfloat: left;\n\t\twidth: 100px;\n\t\t-webkit-transform-origin: left top;\n\t\t-moz-transform-origin: left top;\n\t\t-ms-transform-origin: left top;\n\t\t-o-transform-origin: left top;\n\t\ttransform-origin: left top;\n\t\t-webkit-transform: scale(0.9);\n\t\t-ms-transform: scale(0.9);\n\t\t-o-transform: scale(0.9);\n\t\ttransform: scale(0.9);\n\t}\n\t.item:after{\n\t\tcontent: \"\";\n\t\tdisplay: block;\n\n\t\tmargin-top:100%;\n\n\t}\n\t.up{\n\t\tbox-sizing:border-box;\n\t\tborder:dashed #c3c3c3 1px; \n\t\tbackground: #fff;\n\t\t/*background-size: cover;*/\n\t\tborder-radius: 4px;\n\n\t}\n\t.up input{\n\t\tposition: absolute;\n\t\tleft:0;\n\t\ttop:0;\n\t\tbottom:0;\n\t\twidth: 100%;\n\t\theight:100%;\n\t\topacity: 0;\n\t}\n\t.item .el-icon-close{\n\t\tposition: absolute;\n\t\ttop: 1px;\n\t    right: 1px;\n\t    font-size: 14px;\n\t\tbackground: #FC9153;\n\t\tcolor: #fff;\n\t\tborder-radius: 15px;\n\t\tpadding:5px;\n\t\tcursor: pointer;\n\n\n\t}\n\t.item .down{\n\t\tposition: absolute;\n\t\tbottom:0;\n\t\tright:0;\n\t\tfont-size: 20px;\n\t\t/*background: #FC9153;*/\n\t\tcolor: #FC9153;\n\t\tborder-radius: 15px;\n\t\tpadding:5px;\n\t\tcursor: pointer;\n\t}\n\t.el-icon-upload{\n\t\tfont-size: 50px;\n\t\tcolor: #999\n\t}\n\n</style>\n")])])]),e("p",[t._v("CutImg.vue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n\t<div>\n\t\t<el-dialog  :append-to-body="true"\n\t\t    title="图片裁剪"\n\t\t    :visible.sync="show" \n\t\t    @close="close">\n\n\t\t    <div style="height: 400px;">\n\t\t    \t<VueCropper  \n\t\t\t\t  ref="cropper"\n\t\t\t\t  v-bind:img="option.img" \n\t\t\t\t  :outputSize="option.size"\n                :outputType="option.outputType"\n                :info="true"\n                :full="option.full"\n                :canMove="option.canMove"\n                :canMoveBox="option.canMoveBox"\n                :original="option.original"\n                :autoCrop="option.autoCrop"\n                :fixed="option.fixed"\n                :fixedNumber="option.fixedNumber"\n                :centerBox="option.centerBox"\n                :infoTrue="option.infoTrue"\n                :fixedBox="option.fixedBox" \n\t\t\t\t></VueCropper> \n\n\n\t\t    </div>\n\t\t  \n\t\t    <span slot="footer">\n\t\t        <el-button size="small" @click="close(\'\')">取 消</el-button>\n\t\t        <el-button size="small" type="primary" @click="cut" :loading="doing" :disabled="doing">确 定</el-button>\n\t\t    </span>\n\t\t</el-dialog>\n\t</div>\n</template>\n<script> \n\timport { VueCropper }  from \'vue-cropper\'\n\n\texport default{\n\t\tcomponents:{\n\t\t\tVueCropper\n\t\t},\n\t\tprops:[\'isShow\',\'imgUrl\',\'callBack\',\'fixedNumber\'],\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tshow:false,\n\t\t\t\toption:{\n\t\t\t\t\timg:\'\',  \n\t\t\t\t\tinfo: true, // 裁剪框的大小信息\n                    outputSize: 1, // 裁剪生成图片的质量\n                    outputType: \'png\', // 裁剪生成图片的格式\n                    canScale: true, // 图片是否允许滚轮缩放\n                    autoCrop: true, // 是否默认生成截图框\n                    autoCropWidth: 600, // 默认生成截图框宽度\n                    autoCropHeight: 800, // 默认生成截图框高度\n                    fixedBox: false, // 固定截图框大小 不允许改变\n                    fixed: true, // 是否开启截图框宽高固定比例\n                    fixedNumber: [3, 4], // 截图框的宽高比例\n                    full: true, // 是否输出原图比例的截图\n                    canMoveBox: true, // 截图框能否拖动\n                    original: true, // 上传图片按照原始比例渲染\n                    high: true,\n                    centerBox: false, // 截图框是否被限制在图片里面\n                    infoTrue: true // true 为展示真实输出图片宽高 false 展示看到的截图框宽高\n\n\t\t\t\t},\n\t\t\t\tdoing:false\n\t\t\t}\n\t\t},\n\t\tmethods:{\n\t\t\tclose:function(url=\'\'){\n\t\t\t\t// this.callBack && this.callBack(url);\n\t\t\t\tthis.$emit(\'update:isShow\',false);\n\n\t\t\t},\n\t\t\t// 将base64的图片转换为file文件\n\t        convertBase64UrlToBlob(urlData) {\n\t            let bytes = window.atob(urlData.split(\',\')[1]);//去掉url的头，并转换为byte\n\t            //处理异常,将ascii码小于0的转换为大于0\n\t            let ab = new ArrayBuffer(bytes.length);\n\t            let ia = new Uint8Array(ab);\n\t            for (var i = 0; i < bytes.length; i++) {\n\t                ia[i] = bytes.charCodeAt(i);\n\t            }\n\t            return new Blob([ab], { type: \'image/png\' });\n\t        }, \n//base64转File\ndataURLtoFile(dataurl, filename) {\n\t\t\t    var arr = dataurl.split(","),\n\t\t\t        mime = arr[0].match(/:(.*?);/)[1],\n\t\t\t        bstr = atob(arr[1]),\n\t\t\t        n = bstr.length,\n\t\t\t        u8arr = new Uint8Array(n);\n\t\t\t    while (n--) {\n\t\t\t        u8arr[n] = bstr.charCodeAt(n);\n\t\t\t    }\n\t\t\t    return new File([u8arr], filename, { type: mime });\n\t\t\t},\n\t\t\tcut:function(){\n\t\t\t\tif(this.doing){\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t\tthis.doing = true;\n \n\t\t\t\t\t\tthis.$refs.cropper.getCropData((data) => { \n\n\n\t\t\t\t\t\t\t//this.$postWithFile(\'/system/base64UploadFile\',{file:data.replace(\'data:image/png;base64,\',\'\')}).then(({code,obj})=>{\nthis.$postWithFile(\'/system/uploadFile?module=dc_video\',{file:this.dataURLtoFile(data,(new Date()).getTime()+\'.png\')}).then(({code,obj})=>{\n\n\t\t\t\t\t\t\t\tif(code == \'00\'){\n\n\t\t\t\t\t\t\t\t\tthis.$message({\n\t\t\t\t\t\t\t\t\t\tmessage:\'上传成功！\',\n\t\t\t\t\t\t\t\t\t\ttype:\'success\'\n\t\t\t\t\t\t\t\t\t})\n\n\t\t\t\t\t\t\t\t\t// this.close(obj);\n\n\t\t\t\t\t\t\t\t\tthis.callBack && this.callBack(obj);\n\n\t\t\t\t\t\t\t\t\tthis.$emit(\'update:isShow\',false);\n\n\t\t\t\t\t\t\t\t\tsetTimeout(()=>{\n\n\t\t\t\t\t\t\t\t\t\tthis.doing = false;\n\n\t\t\t\t\t\t\t\t\t},2000);\n\n\n\n\n\t\t\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t\t})\n\n\t\t\t\t\t\t})\n \n\n\t\t\t}\n\t\t\t \n\t\t},\n\t\tmounted(){\n\n\t\t},\n\t\tcreated(){\n\n\t\t},\n\t\tcomputed:{\n\n\t\t},\n\t\twatch:{\n\t\t\tisShow:{\n\t\t\t\thandler:function(v){ \n\t\t\t\t\tthis.option = {\n\t\t\t\t\t\t\t\t...this.option,\n\t\t\t\t\t\t\t\t...{img:this.imgUrl}\n\t\t\t\t\t\t\t}\n\t\t\t\t\tthis.show = v;\n\t\t\t\t},\n\t\t\t\timmediate:true\n\n\t\t\t},\n\t\t\tfixedNumber:{\n\t\t\t\thandler:function(v){\n\t\t\t\t\tif(v){\n\t\t\t\t\t\tthis.option.fixedNumber = v.split(\':\');\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t}\n\n\t\t}\n\t}\n\n<\/script>\n<style scoped>\n\n</style>\n')])])]),e("backTop")],1)}),[],!1,null,null,null);n.default=o.exports}}]);