(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32ee4397"],{4950:function(t,e,i){},"5aef":function(t,e,i){"use strict";i("aa11")},"9f54":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shop_nav"},[i("div",{staticClass:"top-title"},[t._v("设置管理")]),i("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.act},on:{open:t.handleOpen,close:t.handleClose}},[i("el-submenu",{attrs:{index:"1"}},[i("template",{slot:"title"},[i("span",[t._v("基础应用")])]),i("el-menu-item",{attrs:{index:"1-1"},on:{click:t.jump_to_a}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("导航设置")])]),i("el-menu-item",{attrs:{index:"1-2"},on:{click:t.jump_to_b}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v("文章管理")])]),i("el-menu-item",{attrs:{index:"1-3"},on:{click:t.jump_to_c}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 广告管理")])]),i("el-menu-item",{attrs:{index:"1-4"},on:{click:t.jump_to_d}},[i("span",{attrs:{slot:"title"},slot:"title"},[t._v(" 搜索管理")])])],2)],1)],1)},o=[],l={data:function(){return{act:""}},props:{ac:String},mounted:function(){this.act=this.ac},methods:{jump_to_a:function(){this.$router.push({path:"/app_nav"})},jump_to_b:function(){this.$router.push({path:"/app_article"})},jump_to_c:function(){this.$router.push({path:"/app_ad"})},jump_to_d:function(){this.$router.push({path:"/app_search"})},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleselect:function(t,e){this.act=t,localStorage.setItem("act",t)}}},n=l,r=i("c701"),s=Object(r["a"])(n,a,o,!1,null,null,null);e["a"]=s.exports},a21d:function(t,e,i){"use strict";i("4950")},a2cd:function(t,e,i){"use strict";var a=i("238a");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},aa11:function(t,e,i){},c904:function(t,e,i){"use strict";var a=i("e46b"),o=i("5daa"),l=i("008a"),n=i("238a"),r=[].sort,s=[1,2,3];a(a.P+a.F*(n((function(){s.sort(void 0)}))||!n((function(){s.sort(null)}))||!i("a2cd")(r)),"Array",{sort:function(t){return void 0===t?r.call(l(this)):r.call(l(this),o(t))}})},d966:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app_nav"},[i("el-container",{staticClass:"container"},[i("el-aside",{staticClass:"not-print bg-white erbian",attrs:{width:"160px"}},[i("Nav",{attrs:{ac:"1-1"}})],1),i("el-main",{staticClass:"main"},[[i("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),i("el-breadcrumb-item",[t._v("应用")]),i("el-breadcrumb-item",[t._v("导航设置")])],1),i("div",{staticClass:"H10"}),i("div",{staticClass:"zhang t_l"},[i("div",{staticClass:"category"},[i("AddCategory",{attrs:{nav_list:t.list},on:{up_parent:t.up_list}}),i("el-dialog",{attrs:{title:"",visible:t.editbox,width:"35%",center:""},on:{"update:visible":function(e){t.editbox=e},close:t.close}},[i("el-form",{attrs:{model:t.editform}},[i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"导航名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.nav_name,callback:function(e){t.$set(t.editform,"nav_name",e)},expression:"editform.nav_name"}})],1),i("el-form-item",{attrs:{label:"跳转到","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择跳转地址"},on:{change:t.get_jump_url},model:{value:t.editform.url_name,callback:function(e){t.$set(t.editform,"url_name",e)},expression:"editform.url_name"}},t._l(t.list,(function(t){return i("el-option",{attrs:{value:t,label:t.name}})})),1)],1),"分类"==t.editform.url_name?i("el-form-item",{attrs:{label:"选择分类","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择跳转的分类"},on:{change:t.creat_url},model:{value:t.editform.category,callback:function(e){t.$set(t.editform,"category",e)},expression:"editform.category"}},t._l(t.category_nav,(function(e){return i("el-option",{attrs:{value:e.category_id,label:e.category_name}},[0!=e.pid?i("span",[t._v("  |--"+t._s(e.category_name))]):t._e()])})),1)],1):t._e(),"其他小程序"==t.editform.url_name?[i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"appID","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.other,callback:function(e){t.$set(t.editform,"other",e)},expression:"editform.other"}})],1),i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"路径","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.editform.url,callback:function(e){t.$set(t.editform,"url",e)},expression:"editform.url"}})],1)]:t._e(),i("el-form-item",{attrs:{label:"选择图片","label-width":t.formLabelWidth}},[t.editform.img_id?i("div",{staticStyle:{display:"flex",width:"530px","flex-wrap":"wrap"}},[i("i",{staticClass:"el-icon-circle-close",on:{click:t.delimg}}),i("div",{staticClass:"picA",on:{click:t.choose_pic}},[i("img",{staticClass:"img",attrs:{src:t.getimg+t.editform.img_id}})])]):i("div",{staticClass:"picA",staticStyle:{"margin-left":"19px"},on:{click:t.choose_pic}},[i("i",{staticClass:"el-icon-plus",staticStyle:{"margin-top":"45%",height:"28px",width:"28px"}})])])],2),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.editbox=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit(t.editindex)}}},[t._v("确 定")])],1)],1),[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.category,border:""}},[i("el-table-column",{attrs:{prop:"",label:"排序",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{model:{value:e.row.sort,callback:function(i){t.$set(e.row,"sort",i)},expression:"scope.row.sort"}})]}}])}),i("el-table-column",{attrs:{type:"index",label:"序号",width:"80"}}),i("el-table-column",{attrs:{prop:"nav_name",label:"导航名称"}}),i("el-table-column",{attrs:{prop:"img_id",label:"导航图标",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("img",{staticClass:"navimg",attrs:{src:t.getimg+e.row.img_id}})]}}])}),i("el-table-column",{attrs:{prop:"url",label:"跳转路径"}}),i("el-table-column",{attrs:{prop:"level",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"success",size:"small"},on:{click:function(i){return t.onedit(e.$index)}}},[t._v("修改")]),i("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(i){return t.del(e.row.id,e.$index)}}},[t._v("删除")])]}}])})],1)],i("div",{staticClass:"sort_btn"},[i("el-button",{attrs:{type:"success",size:"small"},on:{click:t.sort_sub}},[t._v("提交排序")])],1)],2)])]],2)],1),i("Pic",{attrs:{drawer:t.drawer,father_fun:t.get_img,length:t.length}})],1)},o=[],l=(i("6d57"),i("309f"),i("0b53"),i("06a2"),i("ec25"),i("2b45"),i("c904"),i("cc57"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-cate"},[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.addbox=!0}}},[t._v("添加导航")]),i("el-dialog",{attrs:{title:"",visible:t.addbox,width:"35%",center:""},on:{"update:visible":function(e){t.addbox=e},close:t.close}},[i("el-form",{attrs:{model:t.addform}},[i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"导航名称","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addform.nav_name,callback:function(e){t.$set(t.addform,"nav_name",e)},expression:"addform.nav_name"}})],1),i("el-form-item",{attrs:{label:"跳转到","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择跳转地址"},on:{change:t.get_jump_url},model:{value:t.addform.url_name,callback:function(e){t.$set(t.addform,"url_name",e)},expression:"addform.url_name"}},t._l(t.list,(function(t){return i("el-option",{attrs:{value:t,label:t.name}})})),1)],1),"其他小程序"==t.addform.url_name?[i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"appID","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addform.other,callback:function(e){t.$set(t.addform,"other",e)},expression:"addform.other"}})],1),i("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"路径","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.addform.url,callback:function(e){t.$set(t.addform,"url",e)},expression:"addform.url"}})],1)]:t._e(),"分类"==t.addform.url_name?i("el-form-item",{attrs:{label:"选择分类","label-width":t.formLabelWidth}},[i("el-select",{attrs:{placeholder:"请选择跳转的分类"},on:{change:t.creat_url},model:{value:t.addform.category,callback:function(e){t.$set(t.addform,"category",e)},expression:"addform.category"}},t._l(t.category,(function(e){return i("el-option",{attrs:{value:e.category_id,label:e.category_name}},[0!=e.pid?i("span",[t._v("  |--"+t._s(e.category_name))]):t._e()])})),1)],1):t._e(),i("el-form-item",{attrs:{label:"导航图标","label-width":t.formLabelWidth}},[t.img_list.length>0?[i("div",{staticStyle:{display:"flex",width:"530px","flex-wrap":"wrap"}},[t._l(t.img_list,(function(e,a){return[i("i",{staticClass:"el-icon-circle-close",on:{click:function(e){return t.delimg(a)}}}),t.img_list.length>0?i("div",{staticClass:"picA"},[i("img",{staticClass:"img",attrs:{src:t.getimg+e.url}})]):t._e()]}))],2)]:t._e(),t.img_list.length<1?i("div",{staticClass:"picA",staticStyle:{"margin-left":"19px"},on:{click:t.choose_pic}},[i("i",{staticClass:"el-icon-plus",staticStyle:{"margin-top":"45%",height:"28px",width:"28px"}})]):t._e()],2)],2),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.addbox=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1),i("Pic",{attrs:{drawer:t.drawer,father_fun:t.get_img,length:t.length}})],1)}),n=[],r=i("a49b"),s=i("ab56"),c={name:"Category",props:{nav_list:Array},data:function(){return{category:[],list:[],length:1,drawer:!1,getimg:this.$getimg,img_list:[],addbox:!1,addform:{nav_name:"",img_id:"",url_name:"",url:"",category:""},formLabelWidth:"120px",upfile_url:r["a"]+"/admin/upload/img",upfile_data:{use:"category"},upfile_head:{token:localStorage.getItem("token")},upfile_list:[],show_appid_input:0}},components:{Pic:s["a"]},mounted:function(){this.list=this.nav_list,this.getCategory()},methods:{getCategory:function(){var t=this,e=this;this.http.get("category/admin/all_category").then((function(i){i.data.length>0?e.category=i.data:t.$message({showClose:!0,message:"请先创建商品分类",type:"warning"})}))},creat_url:function(t){console.log(t),this.addform.url="/pages/productList/productList?cid="+t+"&sid=0",console.log(this.addform.url)},close:function(){this.img_list=[],this.addform={nav_name:"",img_id:"",url_name:"",url:""}},get_jump_url:function(t){console.log(t),this.addform.url=t.url,this.addform.url_name=t.name},onSubmit:function(){var t=this;console.log(this.addform),this.http.post_show("nav/admin/add_nav",t.addform).then((function(e){for(var i in t.$message({showClose:!0,message:"新增成功",type:"success"}),t.addbox=!1,t.addform)t.addform[i]="";t.upfile_list=[],t.$emit("up_parent"),t.img_list=[]}))},get_img:function(t){for(var e in this.drawer=!1,t){var i=t[e];this.img_list.push(i),this.addform.img_id=i.url}this.length=6-this.img_list.length,console.log("get_img_end:",t,this.img_list)},choose_pic:function(){this.length=6-this.img_list.length,this.drawer=!0},is_show:function(){this.drawer=!this.drawer},delimg:function(t){this.img_list.splice(t,1)},up_ok:function(t){201==t.code&&(this.addform.img_id=t.id)}}},d=c,u=(i("5aef"),i("c701")),m=Object(u["a"])(d,l,n,!1,null,"16b723b3",null),f=m.exports,h=i("9f54");function p(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=g(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,n=!0,r=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return n=t.done,t},e:function(t){r=!0,l=t},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw l}}}}function g(t,e){if(t){if("string"===typeof t)return _(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_(t,e):void 0}}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var b={components:{Nav:h["a"],Pic:s["a"],AddCategory:f},data:function(){return{show_appid_input:0,list:[{id:15,name:"分类",url:"/pages/productList/productList"},{id:14,name:"其他小程序",url:"",other:""}],length:1,drawer:!1,getimg:this.$getimg,img_list:[],input:"",category:[],category_nav:[],category_top:[],dialogTableVisible:!1,editbox:!1,editform:{nav_name:"",url_name:"",img_id:"",url:""},formLabelWidth:"120px",editindex:0,upfile_url:r["a"]+"/admin/upload/img",upfile_data:{use:"category"},upfile_head:{token:localStorage.getItem("token")}}},methods:{creat_url:function(t){console.log(t),this.editform.url="/pages/productList/productList?cid="+t+"&sid=0"},close:function(){this.editform={nav_name:"",url_name:"",img_id:"",url:""},this.img_list=[]},getCategory:function(){var t=this,e=this;this.http.get("nav/admin/all_nav").then((function(t){e.category=t.data})),this.http.get("category/admin/all_category").then((function(i){i.data.length>0?(e.category_nav=i.data,console.log(e.category_nav)):t.$message({showClose:!0,message:"请先创建商品分类",type:"warning"})}))},to_choose_img:function(){this.drawer=!this.drawer},is_show:function(){this.drawer=!this.drawer},get_img:function(t){for(var e in this.drawer=!1,t){var i=t[e];this.img_list.push(i),this.editform.img_id=i.url}this.length=6-this.img_list.length,console.log("get_img_end:",t,this.img_list)},choose_pic:function(){this.length=6-this.img_list.length,this.drawer=!0},delimg:function(){this.editform.img_id=""},get_jump_url:function(t){console.log(t),this.editform.url=t.url,this.editform.url_name=t.name},del:function(t,e){var i=this,a=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.http.put_show("nav/admin/del_nav",{id:t}).then((function(t){return a.$message({showClose:!0,message:"删除成功",type:"success"}),a.category.splice(e,1),!1}))}))},onedit:function(t){this.editform=this.category[t],this.category[t].other&&(this.editform.other=this.category[t].other),this.editindex=t,this.editbox=!0,console.log(this.editform)},up_list:function(){this.getCategory()},sort_sub:function(){var t,e=this,i={},a=this,o=p(a.category);try{for(o.s();!(t=o.n()).done;){var l=t.value;i[l.id]=l.sort}}catch(n){o.e(n)}finally{o.f()}this.http.post_show("nav/admin/set_sort",i).then((function(t){e.$message({message:"操作成功",type:"success"})}))},onSubmit:function(){var t=this,e=this;e.editform.category_id=e.editform.category,delete e.editform.category,this.http.post_show("nav/admin/edit_nav",e.editform).then((function(i){t.$message({message:"修改成功",type:"success"}),e.editbox=!1,e.getCategory()}))},onswitch:function(t){this.http.put_show("/cms/update",{id:t,db:"category",field:"is_visible"}).then((function(t){console.log(t)}))},up_ok:function(t){201==t.code&&(this.editform.category_pic=t.id)}},mounted:function(){this.getCategory()}},v=b,y=(i("a21d"),Object(u["a"])(v,a,o,!1,null,null,null));e["default"]=y.exports}}]);