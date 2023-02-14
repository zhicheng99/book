(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{331:function(t,n,e){"use strict";e.r(n);var l=e(10),i=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分块上传视频-对接ali-oss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分块上传视频-对接ali-oss"}},[t._v("#")]),t._v(" 分块上传视频 对接ali-oss")]),t._v(" "),e("p",[t._v("调用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<UploadByChunkAliOss\n:upload-video.sync="addForm.videoUrl"\n:piece-size="1024000" >< /UploadByChunkAliOss>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" <template>\n\t<div>\n\t\t<el-input size=\"small\" v-model=\"uploadVideo\" @input=\"input\" placeholder=\"上传视频或粘贴视频地址\"> \n\n\t\t\t<template slot=\"append\">\n\t\t\t\t<el-upload\n\t\t\taction=\"/admin/file/uploadVideoFile?module=dc_video\"\n\t\t\t:auto-upload=\"false\"\n\t\t\tlimit=\"1\"\n\t\t\t:show-file-list=\"false\"\n\t\t\t:on-success=\"handletopSuccess\"\n\t\t\t:on-change=\"fileChange\" \n\t\t\t:before-upload=\"handleBeforeUpload\"\n\t\t\t:on-error=\"handleUploadError\"\n\t\t\tref=\"upload\"\n\t\t\taccept=\".mov,.mp4,.m4a,.3gp,.3g2\"\n\t\t>\n\t\t\t<el-button size=\"small\" type=\"primary\" :loading=\"dialogLoaidng\"> \n\t\t\t{{percent!=0?percent+'%':''}}选择视频</el-button>\n\t\t</el-upload>\n\t\t\t</template>\n\n\t\t</el-input>\n\t</div>\n</template>\n<script>\n\nlet OSS = require('ali-oss')\n\nlet ossConfig = {\n  // region以杭州为例（oss-cn-hangzhou），其他region按实际情况填写。\n  region: '',\n  // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。\n  accessKeyId: '',\n  accessKeySecret: '',\n  bucket: ''\n}\n\nlet client = new OSS(ossConfig);\nconsole.log(client);\n\nlet tempCheckpoint;\n\n\n\texport default{\n\t\tcomponents:{},\n\t\tprops:['uploadVideo','uploadCover','pieceSize'],\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tdialogLoaidng:false,\n\n\t\t\t\tshowVideo: false,\n\t            blobSlice: null,\n\t            file: null,\n\t            identifier: null,\n\t            chunkSize: 1024000,\n\t            chunks: 0,\n\t            currentChunk: 0,\n\t            spark: null,\n\t            fileReader: null,\n\t            tmpDataList: [],\n\t            formDataList: [],\n\t            uploadedList: [],\n\t            start: 0,\n\t            end: 0,\n\t            headers: {},\n\t            // urlCode: code.urlCode.lectureDemand,\n\t            xhr: null,\n\t            pauseStatus: false,\n\t            showProgress: false,\n\t            percent: 0,\n\n\n\t            uploadingChunk:0,  //正在上传的块\n\n\t\t\t}\n\t\t},\n\t\tmethods:{\n\t\t\tinput:function(){\n\t\t\t\tthis.$emit('update:uploadVideo',this.uploadVideo);\n\n\t\t\t},\n\t\t\tgetExt:function(name){\n\t\t\t\tvar tmp = name.split('.');\n\n\t\t\t\treturn tmp[tmp.length-1];\n\t\t\t}, \n\t\t\tfileChange:function(file){\n\t\t\t\tthis.file = file.raw;\n\t\t\t\tvar t = new Date()\n\t\t\t\tvar fileName = t.getFullYear()+''+(t.getMonth()+1)+''+t.getDate()+''+parseInt(Math.random()*10000)+''+this.file.uid;\n\t\t\t\tvar folderName = t.getFullYear()+''+(t.getMonth()+1)+''+t.getDate()+'/video/';\n\nif(file.size <= this.pieceSize){  //小于分片的\n\t\n\t\t\t\t\tclient.put(folderName+fileName+'.'+this.getExt(this.file.name), this.file).then(res=>{\n\t\t\t\t\t\tthis.$emit('update:uploadVideo',res.url);\n\t\t\t\t\t})\n\n\t\t\t\t}else{\n \n\n\t\t\t\tclient.multipartUpload(folderName+fileName+'.'+this.getExt(this.file.name), this.file, { \n\t\t\t      progress:  (p, checkpoint,res)=> {\n\t\t\t      \tthis.percent = parseInt(p*100);\n\n\n\t\t\t      \tif(this.percent == 100){  //上传完成\n\t\t\t      \t\tvar tmp = res.requestUrls[0].split('?');\n\t\t\t\t\t\tthis.$emit('update:uploadVideo',tmp[0]);\n\n\t\t\t\t\t\t//视频截封面图\n\t\t\t\t\t\tthis.$post('/admin/file/getVideoscreenshots',{videoUrl:tmp[0]});\n\n\t\t\t\t\t\tthis.$refs.upload.clearFiles();\n\n\t\t\t\t\t\tsetTimeout(()=>{\n\n\t\t\t\t\t\t\tthis.percent = 0;\n\n\t\t\t\t\t\t},2000);\n\n\t\t\t      \t}\n\n\t\t\t        // 断点记录点。浏览器重启后无法直接继续上传，您需要手动触发上传操作。\n\t\t\t        // tempCheckpoint = checkpoint;\n\t\t\t      },\n\t\t\t      // meta: { year: 2020, people: 'test' },\n\t\t\t      mime: this.file.type,\n\t\t\t      parallel: 1,\n\t\t\t\t  partSize: this.chunkSize\n\t\t\t\t  // callback:(url)=>{\n\t\t\t\t  // \tconsole.log(url);\n\t\t\t\t  // }\n\t\t\t   })\n}\n\n \n\t\t\t}, \n\n\t\t},\n\t\tmounted(){\n\n\t\t},\n\t\tcreated(){\n\t\t\tthis.blobSlice =\n\t            window.File.prototype.slice ||\n\t            window.File.prototype.mozSlice ||\n\t            window.File.prototype.webkitSlice;\n\t        // this.spark = new SparkMD5.ArrayBuffer();\n\t        this.fileReader = new FileReader();\n\t        this.percent = 0;\n\t\t},\n\t\tcomputed:{\n\n\t\t},\n\t\twatch:{\n\t\t\t'pieceSize':{\n\t\t\t\thandler:function(v){\n\t\t\t\t\tconsole.log(typeof v);\n\t\t\t\t\tif(typeof v !='undefined'){\n\n\t\t\t\t\t\tif(v <=1024000){\n\t\t\t\t\t\t\tthis.chunkSize = 1024000\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tthis.chunkSize = v;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t}\n\t\t}\n\t}\n\n<\/script>\n<style scoped>\n\n</style>\n")])])]),e("backTop")],1)}),[],!1,null,null,null);n.default=i.exports}}]);