(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dc28814"],{"3a29":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addcoupon"},[a("el-container",[a("el-aside",{staticClass:"not-print bg-white erbian",attrs:{width:"160px"}},[a("Nav",{attrs:{ac:"2"}})],1),a("el-main",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("应用")]),a("el-breadcrumb-item",[t._v("优惠券")])],1),a("div",{staticClass:"H10"}),a("div",{staticClass:"add"},[a("div",{staticClass:"add_btn"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.jumpback}},[t._v("返回")])],1),a("el-form",{ref:"form",staticClass:"demo-dynamic",attrs:{model:t.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"优惠券名称"}},[a("el-input",{staticStyle:{width:"500px"},attrs:{"hide-required-asterisk":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"发放总量"}},[a("el-input",{staticStyle:{width:"200px"},model:{value:t.form.stock,callback:function(e){t.$set(t.form,"stock",e)},expression:"form.stock"}}),a("div",{staticClass:"dan"},[t._v("张")])],1),a("div",{staticClass:"ts"},[t._v("修改优惠券总量时只能增加不能减少，请谨慎设置")]),a("el-form-item",{attrs:{label:"使用门槛",prop:"resource"}},[a("el-radio-group",{on:{change:t.is_menkan},model:{value:t.menkan,callback:function(e){t.menkan=e},expression:"menkan"}},[a("el-radio",{attrs:{label:0}},[t._v("无门槛")]),a("el-radio",{attrs:{label:2}},[t._v("订单满 \n\t\t\t\t\t\t\t\t\t"),1==t.show_ininput?a("el-input",{staticStyle:{width:"100px"},model:{value:t.form.full,callback:function(e){t.$set(t.form,"full",e)},expression:"form.full"}}):t._e(),t._v("\n\t\t\t\t\t\t\t\t\t 元\n\t\t\t\t\t\t\t\t")],1)],1)],1),a("el-form-item",{attrs:{label:"优惠价格"}},[a("div",{staticClass:"jian"},[t._v("减免")]),a("el-input",{staticStyle:{width:"100px"},model:{value:t.form.reduce,callback:function(e){t.$set(t.form,"reduce",e)},expression:"form.reduce"}}),a("div",{staticClass:"dan"},[t._v("元")])],1),a("el-form-item",{attrs:{label:"用券时间"}},[a("el-radio-group",{staticStyle:{"text-align":"left"},on:{change:t.time_type_change},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[a("el-radio",{attrs:{label:1}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.start_time,callback:function(e){t.start_time=e},expression:"start_time"}}),t._v("\n\t\t\t\t\t\t\t\t\t - \n\t\t\t\t\t\t\t\t\t"),a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.end_time,callback:function(e){t.end_time=e},expression:"end_time"}})],1),a("br"),a("div",{staticStyle:{height:"23px"}}),a("el-radio",{attrs:{label:2}},[t._v("领券当日起 "),a("el-input",{staticStyle:{width:"100px"},model:{value:t.form.day,callback:function(e){t.$set(t.form,"day",e)},expression:"form.day"}}),t._v(" 天内可用")],1)],1)],1),a("el-form-item",{attrs:{label:"使用次数",prop:"resource"}},[a("el-radio-group",{staticStyle:{"margin-top":"15px"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-radio",{attrs:{label:"1"}},[t._v("有限")]),a("el-radio",{attrs:{label:"2"}},[t._v("无限")])],1)],1)],1),a("span",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:t.jumpback}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1)],1)],1),a("el-dialog",{staticStyle:{width:"60vw",height:"90vh",margin:"10vh 0 0 20vw"},attrs:{title:"","lock-scroll":!0,top:0,"destroy-on-close":!0,visible:t.dialogVisibleadd,width:"100%"},on:{"update:visible":function(e){t.dialogVisibleadd=e}}},[a("span",[a("div",{staticStyle:{"text-align":"left"}},[a("el-button",{staticStyle:{"margin-right":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:t.alls},slot:"reference"},[t._v("全选")])],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"goods_name",label:"商品"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"pro"},[a("div",{staticClass:"pro_02"},[a("img",{attrs:{src:t.$getimg+e.row.imgs}})]),a("div",{staticClass:"pro_03"},[a("div",{staticClass:"pro_03_1"},[t._v(t._s(e.row.goods_name))]),a("div",{staticClass:"pro_03_2"},[t._v("¥"+t._s(e.row.price))])])])]}}])}),a("el-table-column",{attrs:{prop:"sales",label:"近30天销量/累计销量",width:"180"}}),a("el-table-column",{attrs:{prop:"stock",label:"库存",width:"80"}}),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.is_canjia?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.canjia(e.$index)}}},[t._v("选择")]):t._e(),1==e.row.is_canjia?a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){return t.cancel(e.$index)}}},[t._v("取消")]):t._e()]}}])})],1),a("span",{staticClass:"dialog-footer ",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},on:{click:function(e){t.dialogVisibleadd=!1}}},[t._v("关闭")])],1)],1)],1)},s=[],l=(a("b705"),a("a49b"),a("6691")),o={data:function(){return{time_type:"",show_ininput:0,menkan:"",canjia_list:[],is_all:"",top:"0",activeNames:["1"],tableRowClassName:"",tableData:[],dialogVisibleadd:!1,start_time:"",end_time:"",time:"",form:{stock:"",name:"",full:"",reduce:"",day:"",status:"",stock_type:""}}},components:{Nav:l["a"]},methods:{time_type_change:function(t){console.log(t),this.time_type=t},is_menkan:function(t){console.log(t),2==t?this.show_ininput=1:(this.form.full=0,this.show_ininput=0)},handleChange:function(t){console.log(t)},get_value:function(t){console.log(t);var e=[];0==t&&e.push(t),this.form.goods_ids=e},alls:function(){for(var t in this.tableData){var e=this.tableData[t];this.canjia_list.push(t),e.is_canjia=1}},canjia:function(t){this.tableData[t].is_canjia=1,this.canjia_list.push(t),console.log(this.canjia_list)},cancel:function(t){this.tableData[t].is_canjia=0;for(var e=0;e<this.canjia_list.length;e++)t==this.canjia_list[e]&&this.canjia_list.splice(e,1);console.log(this.canjia_list)},del:function(t){for(var e=0;e<this.canjia_list.length;e++)t==this.canjia_list[e]&&(this.canjia_list.splice(e,1),this.tableData[t].is_canjia=0);console.log(this.canjia_list)},get_pro:function(){var t=this;this.http.post("product/admin/get_product").then((function(e){for(var a in e.data){var i=e.data[a];i.is_canjia=0}t.tableData=e.data}))},onSubmit:function(){var t=this;1==this.time_type&&(this.form["start_time"]=this.start_time,this.form["end_time"]=this.end_time),this.form.time&&""==this.form.day?this.$message({type:"warning",message:"未填写天数!"}):this.form.time||""!=this.form.start_time&&""!=this.form.end_time?(this.form.stock?this.form.stock_type="1":this.form.stock_type="0",console.log(this.form),this.http.post_show("coupon/coupon_add",this.form).then((function(){t.$message({type:"success",message:"添加成功!"}),t.form={},t.dialogVisibleadd=!1,t.$router.push({path:"/extend/coupon"})}))):this.$message({type:"warning",message:"未填写起止日期"})},jumpback:function(){this.$router.push({path:"/extend/coupon"})}},mounted:function(){}},n=o,r=(a("b679"),a("9ca4")),c=Object(r["a"])(n,i,s,!1,null,null,null);e["default"]=c.exports},6691:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{staticClass:"top-title"},[t._v("应用管理")]),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.act},on:{open:t.handleOpen,close:t.handleClose}},[a("el-menu-item",{attrs:{index:"1"},on:{click:t.jump_to_y}},[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("营销应用")])])],1)],1)},s=[],l={data:function(){return{act:""}},props:{ac:String},mounted:function(){this.act=this.ac},methods:{jump_to_y:function(){this.$router.push({path:"/extend/application"})},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleselect:function(t,e){this.act=t,localStorage.setItem("act",t)}}},o=l,n=a("9ca4"),r=Object(n["a"])(o,i,s,!1,null,null,null);e["a"]=r.exports},b679:function(t,e,a){"use strict";var i=a("ec50"),s=a.n(i);s.a},ec50:function(t,e,a){}}]);