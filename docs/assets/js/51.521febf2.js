(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{330:function(t,n,e){"use strict";e.r(n);var i=e(10),a=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分块上传视频-vue组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分块上传视频-vue组件"}},[t._v("#")]),t._v(" 分块上传视频 vue组件")]),t._v(" "),e("p",[t._v("调用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<UploadByChunk\n:upload-video.sync="addForm.videoUrl"\n:piece-size="1024000" >\n</UploadByChunk>\n')])])]),e("p",[t._v("UploadByChunk.vue")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n\t<div>\n\t\t<el-input size="small" v-model="uploadVideo" @input="input" placeholder="上传新视频"> \n\n\t\t\t<template slot="append">\n\t\t\t\t<el-upload\n\t\t\taction="/admin/file/uploadVideoFile?module=dc_video"\n\t\t\t:auto-upload="false"\n\t\t\tlimit="1"\n\t\t\t:show-file-list="false"\n\t\t\t:on-success="handletopSuccess"\n\t\t\t:on-change="fileChange" \n\t\t\t:before-upload="handleBeforeUpload"\n\t\t\t:on-error="handleUploadError"\n\t\t\tref="upload"\n\t\t\taccept=".mov,.mp4,.m4a,.3gp,.3g2" \n\t\t>\n\t\t\t<el-button size="small" type="primary" :loading="dialogLoaidng"> \n\t\t\t{{percent!=0?percent+\'%\':\'\'}}选择视频</el-button>\n\t\t</el-upload>\n\t\t\t</template>\n\n\t\t</el-input>\n\t</div>\n</template>\n<script>\n\texport default{\n\t\tcomponents:{},\n\t\tprops:[\'uploadVideo\',\'uploadCover\',\'pieceSize\'],\n\t\tdata(){\n\t\t\treturn {\n\t\t\t\tdialogLoaidng:false,\n\n\t\t\t\tshowVideo: false,\n\t            blobSlice: null,\n\t            file: null,\n\t            identifier: null,\n\t            chunkSize: 1024000,\n\t            chunks: 0,\n\t            currentChunk: 0,\n\t            spark: null,\n\t            fileReader: null,\n\t            tmpDataList: [],\n\t            formDataList: [],\n\t            uploadedList: [],\n\t            start: 0,\n\t            end: 0,\n\t            headers: {},\n\t            // urlCode: code.urlCode.lectureDemand,\n\t            xhr: null,\n\t            pauseStatus: false,\n\t            showProgress: false,\n\t            percent: 0,\n\n\n\t            uploadingChunk:0,  //正在上传的块\n\t            snapshotFlag:1,\n\t            saveType:\'local\'\n\n\t\t\t}\n\t\t},\n\t\tmethods:{\n\t\t\tgetExt:function(name){\n\t\t\t\tvar tmp = name.split(\'.\');\n\n\t\t\t\treturn tmp[tmp.length-1];\n\t\t\t},\n\t\t\t// taskId 任务 ID 索引\n\t\t\t// chunk 当前 第 N 块\n\t\t\t// size 上传文件块大小\n\t\t\t// totalChunk 总文件 块数 \n\t\t\t// totalSize 文件总大小 \n\t\t\t// chunkFile 文件块对象 \n\t\t\t//  fileType 文件类型 后缀名\n\t\t\t//  snapshotFlag  是否生成快照(视频类型专用)\n\t\t\t// saveType  文件保存路径（oss 、local）\n\t\t\t// module 文件归属模块 (默认 others)\n\t\t\tfileChange:function(file){\n\t\t\t\tconsole.log(file);\n\t\t\t\tthis.file = file.raw;\n\t\t\t\tthis.taskId =(new Date()).getTime()+\'\'+parseInt(Math.random()*10000000);\n\n\n\t\t\t\tthis.chunks = Math.ceil(this.file.size / this.chunkSize);\n\n\t\t\t\tthis.fileReader.onload = e => {\n\t\t\t\t\tconsole.log(e.target.result);\n\t\t\t\t\t// this.spark.append(e.target.result); // Append array buffer\n\t                this.currentChunk++;\n\t                if (this.currentChunk < this.chunks) {\n\t                    this.loadNext();\n\t                } else {\n\n\t                \tconsole.log(\'片分完了\');\n\t                \tconsole.log(this.tmpDataList);\n\t                    // this.identifier = this.spark.end(); //文件的MD5身份标识\n\t                    this.tmpDataList.map((el, i) => {\n\t                        // let formData = new FormData();\n\n\n\t                        // formData.append("fileType", this.getExt(this.file.name));\n\t                        // formData.append("totalSize", this.file.size);\n\t                        // formData.append("taskId", el.taskId);\n\t                        // formData.append("totalChunk", this.chunks);\n\t                        // formData.append("chunkFile", el.file);\n\t                        // formData.append("chunk", el.currentNum + 1);\n\n\n\t                        // this.formDataList.push(formData);\n\n\t                        this.formDataList.push({\n\t                        \t    "fileType": this.getExt(this.file.name),\n\t\t\t                        "totalSize": this.file.size,\n\t\t\t                        "taskId": el.taskId,\n\t\t\t                        "totalChunk": this.chunks,\n\t\t\t                        "file": el.file,\n\t\t\t                        "size": el.currentSize,\n\t\t\t                        // "chunk": (el.currentNum + 1)\n\t\t\t                        "chunk": this.formDataList.length,\n\t\t\t                        \'snapshotFlag\':this.snapshotFlag,\n\t\t\t                        \'saveType\':this.saveType,\n\t\t\t                        \'module\':\'video\'\n\n\t                        });\n\n\n\n\t                    });\n\n\n\t                    console.log(\'生成多个formData表单\');\n\t                    console.log(this.formDataList);\n\n\t                    this.formDataList.length >0 &&\n\t                    // this.upload();\n\t                    this.uploadByStep(0);\n\n\n\n\t                    // this.checkMd5();\n\t                }\n\t\t\t\t}\n\t\t\t\t this.fileReader.onerror = function() {\n\t                this.$Message.error("读取文件出错，请重试");\n\t            };\n\t            this.loadNext();\n\t\t\t\t// this.fileReader.readAsArrayBuffer(file.raw);\n\t\t\t},\n\t\t\tuploadByStep(num){\n\n\t\t\t\tthis.percent = parseInt((num/this.chunks)*100);\n\n\t\t\t\tthis.uploadingChunk = num;\n\n\t\t\t\tthis.$postWithFile(\'/admin/file/cutFileUpload\',this.formDataList[this.uploadingChunk]).then(({code,obj})=>{\n\t\t\t\t\tif(code == \'00\'){\n\n\t\t\t\t\t\tif(this.uploadingChunk < (this.formDataList.length-1)){\n \n\t\t\t\t\t\t\t\tnum++;\n\t\t\t\t\t\t\t\tthis.uploadByStep(num); \n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t}else{\n\n\t\t\t\t\t\t\tthis.percent = 100;\n\n\n\t\t\t\t\t\t\tconsole.log(\'上传完成了\');\n\t\t\t\t\t\t\tthis.$refs.upload.clearFiles();\n\n\n\t\t\t\t\t\t\tif(this.snapshotFlag){  //封面图\n\t\t\t\t\t\t\t\tvar tmp = obj.split(\'#\');\n\t\t\t\t\t\t\t\tthis.$emit(\'update:uploadVideo\',tmp[0]);\n\t\t\t\t\t\t\t\tthis.$emit(\'update:UploadCover\',tmp[1]);\n\n\t\t\t\t\t\t\t}else{\n\n\t\t\t\t\t\t\t\tthis.$emit(\'update:uploadVideo\',obj);\n\n\t\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t\tsetTimeout(()=>{\n\n\t\t\t\t\t\t\t\tthis.percent = 0;\n\n\t\t\t\t\t\t\t},2000)\n\n\n\t\t\t\t\t\t}\n \n\n\n\t\t\t\t\t}\n\t\t\t\t})\n\n\t\t\t},\n\t\t\tupload:function(){\n\t\t\t\tvar tmp = [];\n\t\t\t\tthis.formDataList.forEach(item=>{\n\t\t\t\t\ttmp.push(\n\t\t\t\t\t\t\tnew Promise((resolve, reject)=>{\n\t\t\t\t\t\t\t\tthis.$postWithFile(\'/admin/file/cutFileUpload\',item).then((code)=>{\n\t\t\t\t\t\t\t\t\tif(code == \'00\'){\n\t\t\t\t\t\t\t\t\t\tresolve();\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t)\n\t\t\t\t})\n\n\t\t\t\tPromise.all(tmp).then(()=>{ \n\t\t\t\t    console.log(\'callback\')\n\n\t\t\t\t\tthis.$refs.upload.clearFiles();\n\n\t\t\t\t})\n\n\n\t\t\t},\n\t\t\tloadNext:function(){\n\t\t\t\t(this.start = this.currentChunk * this.chunkSize),\n\t                (this.end =\n\t                    this.start + this.chunkSize >= this.file.size\n\t                        ? this.file.size\n\t                        : this.start + this.chunkSize);\n\t            let pieceFile = this.blobSlice.call(\n\t                this.file,\n\t                this.start,\n\t                this.end\n\t            );\n\n\t            console.log(pieceFile);\n\n\n\t            pieceFile.name = this.file.name;\n\t            let tmpObj = {\n\t                file: pieceFile,\n\t                currentSize: this.end - this.start,\n\t                currentNum: this.currentChunk,\n\t                taskId:this.taskId\n\t            };\n\t            this.tmpDataList.push(tmpObj);\n\t            this.fileReader.readAsArrayBuffer(pieceFile);\n\t\t\t}\n\n\t\t},\n\t\tmounted(){\n\n\t\t},\n\t\tcreated(){\n\t\t\tthis.blobSlice =\n\t            window.File.prototype.slice ||\n\t            window.File.prototype.mozSlice ||\n\t            window.File.prototype.webkitSlice;\n\t        // this.spark = new SparkMD5.ArrayBuffer();\n\t        this.fileReader = new FileReader();\n\t        this.percent = 0;\n\t\t},\n\t\tcomputed:{\n\n\t\t},\n\t\twatch:{\n\t\t\t\'pieceSize\':{\n\t\t\t\thandler:function(v){\n\t\t\t\t\tconsole.log(typeof v);\n\t\t\t\t\tif(typeof v !=\'undefined\'){\n\n\t\t\t\t\t\tif(v <=1024000){\n\t\t\t\t\t\t\tthis.chunkSize = 1024000\n\t\t\t\t\t\t}else{\n\t\t\t\t\t\t\tthis.chunkSize = v;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t},\n\t\t\t\timmediate:true\n\t\t\t}\n\t\t}\n\t}\n\n<\/script>\n<style scoped>\n\n</style>\n')])])]),e("backTop")],1)}),[],!1,null,null,null);n.default=a.exports}}]);