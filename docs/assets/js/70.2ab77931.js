(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{370:function(t,e,n){"use strict";n.r(e);var l=n(10),a=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"element-动态表格字段验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#element-动态表格字段验证"}},[this._v("#")]),this._v(" element 动态表格字段验证")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<el-form :model="addForm" :rules="addFormRules" ref="addForm">\n\t\t\t\t<el-row :gutter="5">\n\t\t\t\t\t<el-col :span="11">\n\t\t\t\t\t\t<el-form-item label="资费套餐名称:" :label-width="formLabelWidth" prop="name">\n\t\t\t\t\t\t\t<el-input v-model="addForm.name" size="small"></el-input>\n\t\t\t\t\t\t</el-form-item>\n\t\t\t\t\t</el-col>\n\t\t\t\t\t<el-col :span="11">\n\t\t\t\t\t\t<el-form-item label="资费套餐编号:" :label-width="formLabelWidth" prop="code">\n\t\t\t\t\t\t\t<el-input v-model="addForm.code" size="small" @input="addForm.code=addForm.code.replace(/[^d]/g,\'\')"></el-input>\n\t\t\t\t\t\t</el-form-item> \n\t\t\t\t\t</el-col>\n\t\t\t\t\t \n\t\t\t\t\t \n\t\t\t\t\t \n\t\t\t\t</el-row>\n\t\t\t\t\x3c!-- 分割线 --\x3e\n\t\t\t\t<div>\n\t\t\t\t\t<el-divider content-position="left">电车型号</el-divider>\n\t\t\t\t\t<div class="p-l-10 p-r-10 p-b-10">\n\t\t\t\t\t\t<el-table\n\t\t\t\t\t    :data="addForm.assetsList"\n\t\t\t\t\t    stripe\n\t\t\t\t\t    style="width: 100%">\n\t\t\t\t\t    <el-table-column\n\t\t\t\t\t      prop="model"\n\t\t\t\t\t      label="型号"\n\t\t\t\t\t      >\n\t\t\t\t\t    </el-table-column>\n\t\t\t\t\t    <el-table-column\n\t\t\t\t\t      prop="name"\n\t\t\t\t\t      label="名称"\n\t\t\t\t\t      >\n\t\t\t\t\t    </el-table-column>\n\t\t\t\t\t    <el-table-column\n\t\t\t\t\t      prop="spec"\n\t\t\t\t\t      label="类型">\n\t\t\t\t\t    </el-table-column>\n\t\t\t\t\t\t<el-table-column\n\t\t\t\t\t\t  label="原价(元)" width="200">\n\t\t\t\t\t\t  <template slot-scope="scope">\n\t\t\t\t\t\t\t  <el-form-item\n\t\t\t\t\t\t\t\t  :prop="\'assetsList.\'+scope.$index+\'.originalPrice\'"\n\t\t\t\t\t\t\t\t   :rules="[\n\t\t\t\t\t\t\t\t  {required: true, message: \'请填写金额!\', trigger: \'blur\'},\n\t\t\t\t\t\t\t\t\t{pattern:/^d{1,}(.d{1,2})?$/, message: \'必须为数值，最多保留两位小数\'}\n\n\t\t\t\t\t\t\t\t  ],\n\t\t\t\t\t\t\t\t  " >\n\t\t\t\t\t\t\t  \t<el-input v-model="scope.row.originalPrice" size="small"  placeholder="请填写数值"></el-input>\n\t\t\t\t\t\t\t  </el-form-item>\n\t\t\t\t\t\t  </template>\n\t\t\t\t\t\t</el-table-column>\n\t\t\t\t\t\t<el-table-column\n\t\t\t\t\t\t  label="实际费用(元)"  width="200">\n\t\t\t\t\t\t  <template slot-scope="scope">\n\t\t\t\t\t\t\t  <el-form-item\n\t\t\t\t\t\t\t\t  :prop="\'assetsList.\'+scope.$index+\'.price\'"\n\t\t\t\t\t\t\t\t   :rules="[\n\t\t\t\t\t\t\t\t  {required: true, message: \'请填写金额!\', trigger: \'blur\'},\n\t\t\t\t\t\t\t\t\t{pattern:/^d{1,}(.d{1,2})?$/, message: \'必须为数值，最多保留两位小数\'}\n\n\t\t\t\t\t\t\t\t  ],\n\t\t\t\t\t\t\t\t  " >\n\t\t\t\t\t\t\t  \t<el-input v-model="scope.row.price" size="small" placeholder="请填写数值"></el-input>\n\t\t\t\t\t\t\t  </el-form-item>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t  </template>\n\t\t\t\t\t\t</el-table-column>\n\t\t\t\t\t  </el-table>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\n\t\t \t\t<el-form-item  :label-width="formLabelWidth">\n\t\t \t\t\t<el-button @click="addVisible = false" size="small">取消</el-button>\n\t\t \t\t\t<el-button type="primary" @click="addSubmit" size="small">保存</el-button>\n\t\t \t\t</el-form-item>\n\t\t \t</el-form>\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("export default{\n\t\tdata(){\n\t\t\treturn{\n\t\t\t\ttoolLabelWidth:config.toolbarLabelWidth,\n\t\t\t\tformLabelWidth:config.dialogLabelWidth,\n\t\t\t\tlistLoading:false,\n\n\t\t\t\tregionId:'',\n\t\t\t\t\n\t\t\t\tsysStatus:[],\n\t\t\t\tMonthFeeType:[],\n\t\t\t\taddVisible:false,\n\t\t\t\taddForm:{\n\t\t\t\t\tregionId:'0',\n\t\t\t\t\toriginalPrice:0.00,\n\t\t\t\t\tname:'',\n\t\t\t\t\tcode:'',\n\t\t\t\t\tprice:0.00,\n\t\t\t\t\tstate:'',\n\t\t\t\t\tcycle:'',\n\t\t\t\t\ttype:'0',\n\t\t\t\t\tfrequency:0,\n\t\t\t\t\tconfigType:'0',\n\t\t\t\t\tmerchantId:0,\n\t\t\t\t\tassetsList:[], //动态表单的数据对象必须是form表单绑定的model的一个字段 否则动态表单验证是不会生效\n\t\t\t\t},\n}\n")])])]),e("backTop")],1)}),[],!1,null,null,null);e.default=a.exports}}]);