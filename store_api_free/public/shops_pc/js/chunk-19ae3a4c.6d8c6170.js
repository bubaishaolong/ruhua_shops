(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19ae3a4c"],{"0182":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root"},[s("div",{staticClass:"top-title"},[t._v("订单管理")]),s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.act},on:{open:t.handleOpen,close:t.handleClose}},[s("el-menu-item",{attrs:{index:"1"},on:{click:t.jump_to_a}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("订单列表")])]),s("el-menu-item",{attrs:{index:"2"},on:{click:t.jump_to_b}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("评价")])]),s("el-menu-item",{attrs:{index:"3"},on:{click:t.jump_to_c}},[s("span",{attrs:{slot:"title"},slot:"title"},[t._v("提现")])])],1)],1)},i=[],r={data:function(){return{act:""}},props:{ac:String},mounted:function(){this.act=this.ac},methods:{jump_to_a:function(){this.$router.push({path:"/order/order_list"})},jump_to_b:function(){this.$router.push({path:"/order/evaluate"})},jump_to_c:function(){this.$router.push({path:"/order/tixian"})},jump_to_t:function(){this.$router.push({path:"/order/pro_ranking"})},handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},handleselect:function(t,e){this.act=t,localStorage.setItem("act",t)}}},l=r,o=s("9ca4"),n=Object(o["a"])(l,a,i,!1,null,null,null);e["a"]=n.exports},"0aed":function(t,e,s){"use strict";s("aaba");var a=s("bf16"),i=s("86d4"),r=s("238a"),l=s("f6b4"),o=s("cb3d"),n=s("8714"),c=o("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2===s.length&&"a"===s[0]&&"b"===s[1]}();t.exports=function(t,e,s){var _=o(t),f=!r((function(){var e={};return e[_]=function(){return 7},7!=""[t](e)})),m=f?!r((function(){var e=!1,s=/a/;return s.exec=function(){return e=!0,null},"split"===t&&(s.constructor={},s.constructor[c]=function(){return s}),s[_](""),!e})):void 0;if(!f||!m||"replace"===t&&!u||"split"===t&&!d){var h=/./[_],p=s(l,_,""[t],(function(t,e,s,a,i){return e.exec===n?f&&!i?{done:!0,value:h.call(e,s,a)}:{done:!0,value:t.call(s,e,a)}:{done:!1}})),v=p[0],g=p[1];a(String.prototype,t,v),i(RegExp.prototype,_,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"16d0":function(t,e,s){},"41d8":function(t,e,s){"use strict";var a=s("16d0"),i=s.n(a);i.a},7108:function(t,e,s){"use strict";var a=s("7e23"),i=RegExp.prototype.exec;t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var r=s.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},8714:function(t,e,s){"use strict";var a=s("f1fe"),i=RegExp.prototype.exec,r=String.prototype.replace,l=i,o="lastIndex",n=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),c=void 0!==/()??/.exec("")[1],u=n||c;u&&(l=function(t){var e,s,l,u,d=this;return c&&(s=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),n&&(e=d[o]),l=i.call(d,t),n&&l&&(d[o]=d.global?l.index+l[0].length:e),c&&l&&l.length>1&&r.call(l[0],s,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(l[u]=void 0)})),l}),t.exports=l},"8d37":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order_list"},[s("el-container",{staticClass:"container"},[s("el-aside",{staticClass:"not-print bg-white erbian",attrs:{width:"160px"}},[s("Nav",{attrs:{ac:"1"}})],1),s("el-main",{staticClass:"main"},[[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("订单")]),s("el-breadcrumb-item",[t._v("订单列表")])],1),s("div",{staticClass:"H10"}),s("div",{staticClass:"zhang"},[s("el-row",[s("el-col",{staticStyle:{display:"flex","justify-content":"flex-start","margin-bottom":"10px"}},[s("el-button",{attrs:{plain:"",autofocus:t.show_default},on:{click:t.reset}},[t._v("1000条数据")]),s("el-button",{attrs:{plain:""}},[t._v("所有数据")]),s("el-button",{attrs:{plain:""},on:{click:t.get_excel}},[t._v("导出")]),s("el-button",{attrs:{plain:""},on:{click:t.reset}},[t._v("刷新")])],1)],1),t.detail_show?t._e():s("el-collapse",{staticStyle:{padding:"25px","background-color":"#fff","margin-bottom":"15px"},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[s("el-collapse-item",{attrs:{title:"订单搜索",name:"1"}},[s("div",{staticClass:"search"},[s("div",{staticClass:"sea_02"},[s("div",{staticClass:"sea_02_01"},[s("div",{staticClass:"sea_02_01_l"},[t._v("订单号：")]),s("div",{staticClass:"sea_02_01_r"},[s("el-input",{attrs:{placeholder:"请输入订单号"},model:{value:t.search_form.num,callback:function(e){t.$set(t.search_form,"num",e)},expression:"search_form.num"}})],1),s("div",{staticClass:"sea_02_01_l"},[t._v("用户名：")]),s("div",{staticClass:"sea_02_01_r"},[s("el-input",{attrs:{placeholder:"请输入用户名全称"},model:{value:t.search_form.user_name,callback:function(e){t.$set(t.search_form,"user_name",e)},expression:"search_form.user_name"}})],1),s("div",{staticClass:"sea_02_01_l"},[t._v("商品名：")]),s("div",{staticClass:"sea_02_01_r"},[s("el-input",{attrs:{placeholder:"请输入商品名"},model:{value:t.search_form.pro_name,callback:function(e){t.$set(t.search_form,"pro_name",e)},expression:"search_form.pro_name"}}),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:function(e){return t.search("goods_name")}}},[t._v("搜索")])],1)]),s("div",{staticClass:"sea_02_01"},[s("div",{staticClass:"sea_02_01_l"},[t._v("创建时间：")]),s("div",{staticClass:"sea_02_01_r"},[s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.reset}},[t._v("全部")]),t._l(t.time,(function(e){return[s("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(s){return t.choose_time(e.value)}}},[t._v(t._s(e.ti))])]}))],2)])])]),s("el-row",{attrs:{gutter:20}},[t._l(t.message,(function(e,a){return[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"tishi",staticStyle:{border:"1px solid #DADADA","border-radius":"5px"}},[s("div",{staticClass:"ts_01"},[s("div",{staticClass:"ts_01_l"},[t._v(t._s(e.types))]),s("div",{staticClass:"ts_01_m"},[t._v(t._s(e.wen))])]),s("div",{staticClass:"ts_02"},[s("div",{staticClass:"ts_02_l"},[s("span",[t._v(t._s(e.num))])])])])])]}))],2)],1)],1),t.detail_show?t._e():s("div",{staticStyle:{padding:"15px","background-color":"#fff"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:""},on:{"filter-change":t.xxx}},[s("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),s("el-table-column",{attrs:{prop:"order_num",label:"订单号",width:"180"}}),s("el-table-column",{attrs:{label:"商品名称",prop:"goods_id",width:"280",filters:t.goods_list,"filter-method":t.filterHandler},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.ordergoods,(function(e,a){return s("div",[t._v(t._s(t._f("ellipsis")(e.goods_name)))])}))}}],null,!1,1292229512)}),s("el-table-column",{attrs:{label:"订单价格",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.payment_state?[t._v(t._s(e.row.order_money))]:s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.open(e.row.order_money,e.row.order_id)}}},[t._v(t._s(e.row.order_money))])]}}],null,!1,2601152019)}),s("el-table-column",{attrs:{prop:"message",label:"客户备注",width:"160"}}),s("el-table-column",{attrs:{prop:"users.nickname",label:"用户",width:"160"}}),s("el-table-column",{attrs:{prop:"create_time",label:"创建日期",width:"100"}}),s("el-table-column",{attrs:{label:"支付状态",width:"90",filters:[{text:"已支付",value:1},{text:"未支付",value:0}],"filter-method":t.filter_pay,"filter-placement":"bottom-end","column-key":"zf"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.payment_state?s("p",[t._v("已支付")]):s("p",{staticStyle:{color:"Red"}},[t._v("未支付")])]}}],null,!1,29383434)}),s("el-table-column",{attrs:{label:"订单状态",width:"90",filters:[{text:"已退款",value:-2},{text:"退款中",value:-1},{text:"未完成",value:0},{text:"已完成",value:1},{text:"已评价",value:2}],"filter-placement":"bottom-end","column-key":"dd"},scopedSlots:t._u([{key:"default",fn:function(e){return[-2==e.row.state?s("p",[t._v("已退款")]):t._e(),-1==e.row.state?s("p",[t._v("退款中")]):t._e(),0==e.row.state?s("p",[t._v("未完成")]):t._e(),1==e.row.state?s("p",[t._v("已完成")]):t._e(),2==e.row.state?s("p",[t._v("已评价")]):t._e()]}}],null,!1,2226419465)}),s("el-table-column",{attrs:{label:"运输状态",width:"90",filters:[{text:"待发货",value:0},{text:"已发货",value:1},{text:"已收货",value:2}],"filter-method":t.filter_send,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.shipment_state?s("p",{staticStyle:{color:"#E6A23C"}},[t._v("待发货")]):t._e(),1==e.row.shipment_state?s("p",{staticStyle:{color:"#909399"}},[t._v("已发货")]):t._e(),2==e.row.shipment_state?s("p",{staticStyle:{color:"#909399"}},[t._v("已收货")]):t._e()]}}],null,!1,4241527802)}),s("el-table-column",{attrs:{prop:"operation",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.show_order(e.row.order_id)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t查看\n\t\t\t\t\t\t\t\t\t")]),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{slot:"reference",type:"danger",size:"small"},on:{click:function(s){return t.del(e.row.order_id,e.$index)}},slot:"reference"},[t._v("删除")]),s("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small"},on:{click:function(s){return t.print_order(e.row.order_id)}}},[t._v("打印")])]}}],null,!1,3369877482)})],1),1==t.fy_show?s("el-pagination",{staticStyle:{"margin-top":"50px"},attrs:{background:"",layout:"prev, pager, next",total:t.total,"page-size":t.size},on:{"current-change":t.jump_page}}):t._e()],1),t.detail_show?s("div",{staticStyle:{padding:"15px","background-color":"#fff"}},[s("div",{staticClass:"order-back",staticStyle:{"text-align":"left"}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.back}},[t._v("返回")])],1),s("order-details",{attrs:{order_id:t.order_id}})],1):t._e()],1)]],2)],1),s("el-dialog",{attrs:{title:"修改",visible:t.ed,width:"35%","before-close":t.handleClose},on:{"update:visible":function(e){t.ed=e}}},[s("span",{staticStyle:{display:"flex","justify-content":"flex-start"}},[t._v("原价"+t._s(t.yj)+",增减金额：")]),s("el-input",{attrs:{placeholder:"例:+100或者-100"},model:{value:t.ed_money,callback:function(e){t.ed_money=e},expression:"ed_money"}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.cancel}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.sub_ed_order}},[t._v("确 定")])],1)],1)],1)},i=[],r=(s("f548"),s("2b45"),s("a49b")),l=s("0182"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail_page"}},[s("div",[s("div",{staticClass:"details"},[s("div",{staticClass:"details-l fl"},[t._m(0),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("订单编号 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.order_num))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("付款方式 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s("wx"==t.details.payment_type?"微信":"其他"))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("买家 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.user_info.nickname))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("买家IP ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.user_ip))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("购买时间 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.create_time))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("使用时间 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.create_time))])]),s("hr",{staticStyle:{height:"1px",border:"none","border-top":"1px dashed #f0f0f0"}}),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("收货信息 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.receiver_name)+","+t._s(t.details.receiver_mobile)+","+t._s(t.details.receiver_province)+t._s(t.details.receiver_city)+t._s(t.details.receiver_district)+t._s(t.details.receiver_address))])]),s("div",{staticClass:"details-l-02"},[s("div",{staticClass:"details-l-02-l"},[t._v("买家留言 ：")]),s("div",{staticClass:"details-l-02-r"},[t._v(t._s(t.details.message))])])]),s("div",{staticClass:"details-r fl"},[s("div",{staticClass:"details-r-01"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6}},[s("i",{staticClass:"el-icon-warning"}),t._v("\n\t\t\t\t\t\t\t订单状态：\n\t\t\t\t\t\t\t"),1==t.details.payment_state?s("span",[t._v("\n\t\t\t\t\t\t\t\t已支付\n\t\t\t\t\t\t\t\t"),0==t.details.shipment_state?s("span",[t._v("- 待发货")]):s("span",[t._v("已发货")])]):s("span",[t._v("未支付")])]),s("el-col",{attrs:{span:8}},[s("el-button",{attrs:{size:"small"},on:{click:function(e){t.form_shipping=!0}}},[t._v("快递单号")])],1)],1),s("el-row",[s("p",[t._v(t._s(t.details.remark))])]),s("el-table",{ref:"singleTable",staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.details.ordergoods,"highlight-current-row":""}},[s("el-table-column",{attrs:{type:"index",width:"50"}}),s("el-table-column",{attrs:{label:"商品名称",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticStyle:{width:"80%"}},[t._v(t._s(t._f("ellipsis")(e.row.goods_name)))])]}}])}),s("el-table-column",{attrs:{label:"规格",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.row.sku_name)+"\n\t\t\t\t\t\t\t")]}}])}),s("el-table-column",{attrs:{property:"num",label:"数量",width:"120"}}),s("el-table-column",{attrs:{property:"price",label:"单价",width:"120"}}),s("el-table-column",{attrs:{property:"price",label:"合计"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.price*e.row.num))]}}])})],1)],1),s("hr",{staticStyle:{height:"2px",border:"none","border-top":"2px dotted #f0f0f0"}}),s("el-row",{staticStyle:{"font-size":"14px"},attrs:{gutter:20}},[s("el-col",{attrs:{span:6,offset:1}},[t._v("快递: "+t._s(t.kd_cmp[t.details.courier])+" "+t._s(t.details.courier_num))]),s("el-col",{attrs:{span:6,offset:8}},[t._v("运费："+t._s(t.details.shipping_money)+" 订单总金额：¥"+t._s(t.details.order_money))])],1)],1),s("div",{staticClass:"clear"})]),s("div",{staticClass:"log"},[s("div",{staticClass:"log-01"},[t._v("订单日志")]),s("div",{staticClass:"log-02"},[s("ul",t._l(t.log,(function(e,a){return s("li",[t._v("\n\t\t\t\t\t\t["+t._s(e.create_time)+"]\n\t\t\t\t\t\t"),s("b",[t._v(t._s(e.type_name)+"：")]),t._v("\n\t\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t\t")])})),0)])]),s("div",{staticClass:"clear"})]),s("el-dialog",{attrs:{width:"400px",visible:t.form_shipping},on:{"update:visible":function(e){t.form_shipping=e}}},[s("el-form",{staticStyle:{display:"flex","flex-wrap":"wrap"},attrs:{model:t.form}},[s("el-form-item",{attrs:{label:"快递公司","label-width":"80px"}},[s("el-select",{attrs:{placeholder:""},model:{value:t.form.courier,callback:function(e){t.$set(t.form,"courier",e)},expression:"form.courier"}},t._l(t.kd_cmp,(function(t,e){return s("el-option",{key:t,attrs:{value:e,label:t}})})),1)],1),s("el-form-item",{attrs:{label:"运单号","label-width":"80px"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.courier_num,callback:function(e){t.$set(t.form,"courier_num",e)},expression:"form.courier_num"}})],1)],1),s("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.form_shipping=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.courier_sub}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"",width:"500px",visible:t.remark},on:{"update:visible":function(e){t.remark=e}}},[s("el-form",{attrs:{model:t.form}},[s("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"备注","label-width":"80px"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)],1),s("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.remark=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.remark_sub}},[t._v("确 定")])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"details-l-01"},[s("div",{staticClass:"fl"},[t._v("订单信息")]),s("div",{staticClass:"clear"})])}],c={name:"Details",filters:{ellipsis:function(t){return t?t.length>30?t.slice(0,30)+"...":t:""}},props:["order_id"],data:function(){return{log:[],details:[],list:[],mid:this.order_id,remark:!1,form:{remark:"",price:"",courier:"",courier_num:""},form_price:!1,form_shipping:!1,formLabelWidth:"120px",kd_cmp:{SF:"顺丰速运",HTKY:"百世快递",ZTO:"中通快递",STO:"申通快递",YTO:"圆通速递",YD:"韵达速递",YZPY:"邮政快递包裹",EMS:"EMS",HHTT:"天天快递",JD:"京东快递",UC:"优速快递",DBL:"德邦快递",ZJS:"宅急送",UPS:"UPS",0:"其他"}}},mounted:function(){this.post_details()},methods:{post_details:function(){var t=this,e=this;this.http.post("order/order_detail",{id:this.mid}).then((function(s){e.details=s.data,t.log=s.data.log}))},del:function(t,e){},courier_sub:function(){var t=this,e={courier:this.form.courier,courier_num:this.form.courier_num,order_id:this.order_id};this.http.post_show("/order/fahuo",e).then((function(e){var s=e.status.toString();2==s.charAt(0)?(t.$message({showClose:!0,message:"修改成功",type:"success"}),t.form_shipping=!1,t.form.courier="",t.form.courier_num=""):t.$message({showClose:!0,message:e.msg,type:"error"})}))}}},u=c,d=(s("41d8"),s("9ca4")),_=Object(d["a"])(u,o,n,!1,null,null,null),f=_.exports,m={components:{Nav:l["a"],OrderDetails:f},filters:{ellipsis:function(t){return t?t.length>16?t.slice(0,16)+"...":t:""}},data:function(){return{detail_show:!1,state1:"",search_form:{user_name:"",pro_name:"",num:""},goods_list:[],user_list:[],show_default:!0,fy_show:1,eid:"",ed_money:"",yj:"",ed:!1,activeNames:"1",input:"",type:[{names:"普通订单",num:879,state:0},{names:"拼团订单",num:879,state:0},{names:"秒杀订单",num:879,state:0},{names:"砍价订单",num:879,state:0}],time:[{ti:"昨天",value:"0"},{ti:"今天",value:"1"},{ti:"本周",value:"2"},{ti:"本月",value:"3"},{ti:"本季度",value:"4"},{ti:"今年",value:"5"}],state:[],message:[{types:"订单",num:0,mess:"待发货",state:1,wen:"急",duibi:0,fudu:0},{types:"订单",num:0,mess:"退换货",state:0,wen:"待",duibi:0,fudu:0},{types:"商品",num:0,mess:"库存预警",state:1,wen:"急",duibi:0,fudu:1},{types:"待提现",num:0,mess:"待提现",state:1,wen:"待",duibi:0,fudu:0},{types:"订单",num:2,mess:"昨日订单数",state:0,wen:"昨",duibi:1,fudu:1},{types:"交易",num:2,mess:"昨日订单数",state:0,wen:"昨",duibi:1,fudu:0},{types:"粉丝",num:20,mess:"今日新增粉丝",state:0,wen:"今",duibi:1,fudu:1},{types:"粉丝",num:27,mess:"本月新增粉丝",state:0,wen:"月",duibi:1,fudu:0}],dialogImageUrl:"",dialogVisiblea:!1,tab_nav:!1,dialogVisible:!1,dialogVisibleadd:!1,dialogFormVisible:!1,oid:0,form:{id:"",goods_name:"",content:"",img_id:[],stock:"",points:""},form_pro:{goods_name:"",content:"",img_id:[],stock:"",points:""},formLabelWidth:"120px",list:[],all:"",size:10,total:0,options:[],value:"",typeList:[],upfile_banner_list:[],upfile_url:r["a"]+"com/up_img?back=id",upfile_head:{token:localStorage.getItem("token")},upfile_list:[],search_key:"",reset_key:"",week_start:"",week_end:"",month_start:"",month_end:"",now_year_firstDay:"",now_year_lastDay:"",Quarter_start:"",Quarter_end:"",yestoday_start:"",yestoday_end:"",range_start:"",range_end:"",quanbu:""}},mounted:function(){this.get_week(),this.get_month(),this.get_year(),this.get_Quarter(),this.getDate(),this.get_today(),this.get_all_order(),this.show_default=!0},methods:{print_order:function(t){var e=t;console.log(e),this.$router.push({path:"/order/print",query:{id:e}})},filterHandler:function(t,e,s){var a=s["property"];return e.ordergoods[0][a]===1*t},xxx:function(t){},open:function(t,e){this.ed=!0,this.yj=t,this.eid=e},handleSelect:function(t){console.log(t)},handleClose:function(){this.ed=!1},sub_ed_order:function(){var t=this,e=this;this.http.post_show("order/admin/edit_price",{price:this.ed_money,order_id:this.eid}).then((function(s){e.$message({showClose:!0,message:"修改成功",type:"success"}),t.ed=!1,t.ed_money="",t.get_all_order()}))},cancel:function(){this.ed=!1,this.ed_money=""},get_excel:function(){var t=document.createElement("a"),e=localStorage.getItem("token");t.href=r["a"]+"index/export_excl?token="+e,t.target="_blank",t.download="ly_2019.csv",t.click(),t.remove()},back:function(){this.order_id=0,this.detail_show=!1},show_order:function(t){this.order_id=t,this.detail_show=!0},get_all_order:function(){var t=this,e=this;this.http.post("order/order_list").then((function(s){for(var a in e.all=s.data,e.list=s.data,e.list=s.data.slice(0,e.size),e.total=s.data.length,e.all){var i=1e3*e.all[a].pay_time;t.all[a].pay_time=t.Conversiontime(i)}var r=[],l=[];for(var o in t.all){var n=t.all[o];for(var c in n.users&&(r[n.user_id]=n.users.nickname),n.ordergoods){var u=n.ordergoods[c];l[u.goods_id]=u.goods_name}}var d=[];for(var _ in l)d.push({text:l[_],value:_});t.user_list=r,t.goods_list=d}))},Conversiontime:function(t){var e=new Date(t),s=e.getFullYear()+"-",a=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",i=(e.getDate()<10?"0"+e.getDate():e.getDate())+" ",r=(e.getHours()<10?"0"+e.getHours():e.getHours())+":",l=(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":",o=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return s+a+i+r+l+o},filter_pay:function(t,e){return console.log(t),e.payment_state===t},filter_tui:function(t,e){return e.tui_status===t},filter_send:function(t,e){return e.shipment_state===t},filterTag:function(t,e){return e.state===t},jump_to_range:function(){},choose_time:function(t){var e=this;this.reset_key=0;var s=[];if(0==t){for(var a in this.all){var i=this.all[a],r=new Date(i.pay_time).getTime();console.log(r),console.log(this.yestoday_start),console.log(this.yestoday_end),this.yestoday_start<r&&r<this.yestoday_end&&s.push(i)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}if(1==t){for(var l in this.all){var o=this.all[l],n=new Date(o.create_time).getTime();this.day_start<n&&n<this.day_end&&s.push(o)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}if(2==t){for(var c in this.all){var u=this.all[c],d=new Date(u.create_time).getTime();this.week_start<d&&d<this.week_end&&s.push(u)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}if(3==t){for(var _ in this.all){var f=this.all[_],m=new Date(f.create_time).getTime();this.month_start<m&&m<this.month_end&&s.push(f)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}if(4==t){for(var h in this.all){var p=this.all[h],v=new Date(p.create_time).getTime();this.Quarter_start<v&&v<this.Quarter_end&&s.push(p)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}if(5==t){for(var g in this.all){var b=this.all[g],y=new Date(b.create_time).getTime();this.now_year_firstDay<y&&y<this.now_year_lastDay&&s.push(b)}return this.list=s.slice(0,e.size),this.total=s.length,void console.log(s)}},reset:function(){this.get_all_order(),this.fy_show=1,this.list=this.all.slice(0,this.size)},search:function(){var t=this,e=this;this.list=[],this.http.post("order/admin/get_order",this.search_form).then((function(s){console.log("搜索结果（订单号）：",s),t.search_form={pro_name:"",user_name:"",num:""},e.all=s.data,e.list=s.data,e.list=s.data.slice(0,e.size),e.total=s.data.length}))},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onSubmit:function(){},res_banner_imgs:function(t){console.log("res:",t),this.form_pro.img_id.push(t),console.log("xx:",this.form_pro.img_id)},add_user:function(){this.dialogVisibleadd=!0},edit:function(t,e,s,a,i,r){this.form.id=t,this.form.goods_name=e,this.dialogVisible=!0,this.form.content=s,this.form.img_id=a,this.form.stock=i,this.form.points=r,console.log(this.form)},sub_edit:function(){},jump_page:function(t){var e=this,s=(t-1)*e.size,a=t*e.size;console.log(s,a),this.list=this.all.slice(s,a)},sub:function(){},del:function(t){var e=this,s=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.http.put_show("del_order",{id:t}).then((function(){s.$message({showClose:!0,message:"删除成功",type:"success"}),e.get_all_order()}))}))},close_fun:function(t){this.clear_data(),t()},clear_data:function(){this.dialogFormVisible=!1},get_week:function(){var t=new Date,e=t.getDay(),s=1-e;0==e&&(s=-7);var a=7-e,i=t.getTime();console.log("当前时间",i);var r=new Date(i+24*s*3600*1e3),l=new Date(i+24*a*3600*1e3),o=r.getTime(),n=l.getTime();this.week_start=o,this.week_end=n,console.log(this.week_start),console.log(this.week_end)},get_month:function(){var t=new Date;t.setDate(1);var e=new Date,s=e.getMonth();console.log(s);var a=++s,i=new Date(e.getFullYear(),a,1),r=864e5,l=new Date(i-r),o=t.getTime(),n=l.getTime();this.month_start=o,this.month_end=n,console.log(o+" - "+n)},get_year:function(){var t=new Date,e=t.getFullYear(),s=new Date(e,0,1).getTime(),a=new Date(e,11,31).getTime();this.now_year_firstDay=s,this.now_year_lastDay=a},get_Quarter_date:function(){var t=new Date,e=t.getMonth(),s=0;return e<3&&(s=0),2<e&&e<6&&(s=3),5<e&&e<9&&(s=6),e>8&&(s=9),console.log("季度开始月：",s),s},get_Quarter:function(){var t=new Date,e=t.getYear();e+=e<2e3?1900:0;var s=new Date(e,this.get_Quarter_date(),1).getTime(),a=this.get_Quarter_date()+2;console.log("季度结束月：",a);var i=new Date(e,a,this.get_month_days(a)).getTime();this.Quarter_start=s,this.Quarter_end=i},get_month_days:function(t){var e=new Date,s=e.getYear(),a=new Date(s,t,1),i=new Date(s,t+1,1),r=(i-a)/864e5;return r},getDate:function(){var t=new Date,e=-1;t.setDate(t.getDate()+e);var s=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();a=a<10?"0"+a:a,i=i<10?"0"+i:i;var r=s+"-"+a+"-"+i;this.yestoday_start=new Date(r).getTime()-28800,this.yestoday_end=new Date(r).getTime()+57600},get_today:function(){var t=new Date,e=0;t.setDate(t.getDate()+e);var s=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();a=a<10?"0"+a:a,i=i<10?"0"+i:i;var r=s+"-"+a+"-"+i;this.day_start=new Date(r).getTime()-28800,this.day_end=new Date(r).getTime()+57600},formatNumber:function(t){return t=t.toString(),t[1]?t:"0"+t},formatTime:function(t,e){var s=new Date(t),a=[],i=["Y","M","D","h","m","s"];for(var r in a.push(s.getFullYear()),a.push(this.formatNumber(s.getMonth()+1)),a.push(this.formatNumber(s.getDate())),a.push(this.formatNumber(s.getHours())),a.push(this.formatNumber(s.getMinutes())),a.push(this.formatNumber(s.getSeconds())),a)e=e.replace(i[r],a[r]);return e}}},h=m,p=(s("e106"),Object(d["a"])(h,a,i,!1,null,null,null));e["default"]=p.exports},a53e:function(t,e,s){},aaba:function(t,e,s){"use strict";var a=s("8714");s("e46b")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},e106:function(t,e,s){"use strict";var a=s("a53e"),i=s.n(a);i.a},e754:function(t,e,s){"use strict";var a=s("fc81")(!0);t.exports=function(t,e,s){return e+(s?a(t,e).length:1)}},f548:function(t,e,s){"use strict";var a=s("69b3"),i=s("008a"),r=s("eafa"),l=s("ee21"),o=s("e754"),n=s("7108"),c=Math.max,u=Math.min,d=Math.floor,_=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,m=function(t){return void 0===t?t:String(t)};s("0aed")("replace",2,(function(t,e,s,h){return[function(a,i){var r=t(this),l=void 0==a?void 0:a[e];return void 0!==l?l.call(a,r,i):s.call(String(r),a,i)},function(t,e){var i=h(s,t,this,e);if(i.done)return i.value;var d=a(t),_=String(this),f="function"===typeof e;f||(e=String(e));var v=d.global;if(v){var g=d.unicode;d.lastIndex=0}var b=[];while(1){var y=n(d,_);if(null===y)break;if(b.push(y),!v)break;var w=String(y[0]);""===w&&(d.lastIndex=o(_,r(d.lastIndex),g))}for(var x="",k=0,C=0;C<b.length;C++){y=b[C];for(var S=String(y[0]),D=c(u(l(y.index),_.length),0),T=[],$=1;$<y.length;$++)T.push(m(y[$]));var z=y.groups;if(f){var j=[S].concat(T,D,_);void 0!==z&&j.push(z);var E=String(e.apply(void 0,j))}else E=p(S,_,D,T,z,e);D>=k&&(x+=_.slice(k,D)+E,k=D+S.length)}return x+_.slice(k)}];function p(t,e,a,r,l,o){var n=a+t.length,c=r.length,u=f;return void 0!==l&&(l=i(l),u=_),s.call(o,u,(function(s,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(n);case"<":o=l[i.slice(1,-1)];break;default:var u=+i;if(0===u)return s;if(u>c){var _=d(u/10);return 0===_?s:_<=c?void 0===r[_-1]?i.charAt(1):r[_-1]+i.charAt(1):s}o=r[u-1]}return void 0===o?"":o}))}}))},fc81:function(t,e,s){var a=s("ee21"),i=s("f6b4");t.exports=function(t){return function(e,s){var r,l,o=String(i(e)),n=a(s),c=o.length;return n<0||n>=c?t?"":void 0:(r=o.charCodeAt(n),r<55296||r>56319||n+1===c||(l=o.charCodeAt(n+1))<56320||l>57343?t?o.charAt(n):r:t?o.slice(n,n+2):l-56320+(r-55296<<10)+65536)}}}}]);