(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5297bf1a"],{c0e3:function(t,a,e){t.exports=e.p+"img/luck_rule02.cf5c23ea.png"},eff9:function(t,a,e){t.exports=e.p+"img/luck_rule01.02e91dd7.png"},f531:function(t,a,e){t.exports=e.p+"img/luck_rule03.5eabd8cb.png"},fa47:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-action-sheet",{attrs:{title:"详情"},model:{value:t.showLuckDetail,callback:function(a){t.showLuckDetail=a},expression:"showLuckDetail"}},[e("luck-detail",{attrs:{id:t.luck_id}})],1),e("van-action-sheet",{attrs:{title:"发起红包"},model:{value:t.showLuckCreate,callback:function(a){t.showLuckCreate=a},expression:"showLuckCreate"}},[e("luck-create")],1),e("van-action-sheet",{attrs:{title:"玩法规则"},model:{value:t.showLuckRule,callback:function(a){t.showLuckRule=a},expression:"showLuckRule"}},[e("luck-rule")],1),e("van-tabs",{model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tabs,function(a){return e("van-tab",{key:a,attrs:{title:a}},[e("grace-animation",{attrs:{effect:"bounceIn"}},[e("van-row",{staticClass:"j-ta-c j-bc-white j-p-tb-S",attrs:{type:"flex",justify:"center"}},[e("van-col",{attrs:{span:"7"}},[e("van-tag",{attrs:{plain:"",round:"",size:"large",type:"success"},on:{click:function(a){t.showLuckCreate=!0}}},[t._v("\n                            发起红包\n                        ")])],1),e("van-col",{attrs:{span:"7"}},[e("van-tag",{attrs:{plain:"",round:"",size:"large",type:"danger"}},[t._v("我的红包")])],1),e("van-col",{attrs:{span:"7"}},[e("van-tag",{attrs:{plain:"",round:"",size:"large",type:"primary"},on:{click:function(a){t.showLuckRule=!0}}},[t._v("玩法规则")])],1)],1)],1),e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{load:t.onLoad,"update:error":function(a){t.error=a}},model:{value:t.loading,callback:function(a){t.loading=a},expression:"loading"}},t._l(t.list,function(a){return e("van-cell",{key:a.id,on:{click:function(e){return t.onShowLuckDetail(a.id)}}},[t._v("\n\n                        parseInt(item.progress)"+t._s(typeof parseInt(a.progress))+" "),e("br"),t._v("\n                        currentRate2"+t._s(t.currentRate2)+" "),e("br"),t._v("\n                        rate"+t._s(t.rate)+" "),e("br"),e("van-row",{attrs:{type:"flex",justify:"center",align:"center"}},[e("van-col",{staticClass:"j-p-r-S j-ta-r",attrs:{span:"6"}},[e("van-circle",{attrs:{color:"#ff1744",fill:"#1de9b6",rate:t.rate,size:"70px","layer-color":"#ebedf0",speed:10,"stroke-width":60,text:parseInt(t.currentRate2.toFixed(0)/(100/a.total_count))+"/"+a.total_count+"人"},model:{value:t.currentRate2,callback:function(a){t.currentRate2=a},expression:"currentRate2"}})],1),e("van-col",{attrs:{span:"18"}},[e("div",[t._v("ID"+t._s(a.id)+" "+t._s(a.title))]),e("span",{staticStyle:{"font-size":"24px"}},[t._v(t._s(a.amount)+".00")]),t._v("元参与, 一起瓜分\n                                "),e("span",{staticStyle:{"font-size":"24px"}},[t._v(t._s(a.total_amount)+".00")]),t._v("元\n\n                            ")])],1)],1)}),1)],1)],1)}),1),e("tabbar")],1)},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(a){t.isLoading=a},expression:"isLoading"}},[e("div",{staticStyle:{"padding-bottom":"200px","background-color":"#F8F8F8"}},[e("div",{staticClass:"j-p-tb-S j-ta-c",staticStyle:{"background-color":"#ff6f00"}},[e("div",[e("img",{staticClass:"j-avatar j-avatar-M j-avatar-rs",attrs:{src:"https://fuyun01.oss-cn-zhangjiakou.aliyuncs.com/fileUpload/user/userPortrait.jpg"}})]),e("div",{staticClass:"j-m-b-S",staticStyle:{color:"#ffe0b2"}},[t._v("落花流水的红包")]),e("div",{staticClass:"j-m-tb-S"},[e("mu-button",{attrs:{round:"",color:"secondary",large:""}},[t._v("支付5元, 一起瓜分35元")]),e("mu-button",{attrs:{round:"",color:"warning",large:""}},[t._v("已参与, 立即拆开")]),e("mu-button",{attrs:{round:"",disabled:""}},[t._v("该红包已过期")]),e("mu-button",{attrs:{round:"",disabled:""}},[t._v("人数已满")])],1),e("van-row",{staticClass:"j-m-t-M j-m-b-S",staticStyle:{color:"#ffe0b2"}},[e("van-col",{attrs:{span:"8"}},[e("i",{staticClass:"iconfont icon-money"}),t._v(" 充值提现\n                    ")]),e("van-col",{attrs:{span:"8"}},[e("i",{staticClass:"iconfont icon-yuan_circle"}),t._v(" 我也发一个\n                    ")]),e("van-col",{attrs:{span:"8"}},[e("i",{staticClass:"iconfont icon-fenxiang2"}),t._v(" 转发红包\n                    ")])],1)],1),e("div",{staticClass:"j-m-tb-S j-p-lr-S j-c-gray-L"},[t._v("\n                已参与5/7人, 5元参与,\n                一起瓜分35元\n            ")]),e("van-cell",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"j-box j-box-row"},[e("img",{staticClass:"j-avatar j-avatar-S j-avatar-rc",attrs:{src:"https://fuyun01.oss-cn-zhangjiakou.aliyuncs.com/fileUpload/user/userPortrait.jpg"}}),e("div",{staticClass:"j-p-l-S"},[e("div",{},[t._v("落花流水")]),e("div",{staticClass:"j-c-gray-M j-fs-0_8x"},[t._v("10秒前")])])])]),e("div",{staticClass:"j-c-orange-M"},[t._v("\n                    56 元\n                    未拆开\n                    "),e("div",{staticClass:"j-fs-S"},[e("i",{staticClass:"iconfont icon-huangguan"}),t._v(" 手气最佳\n                    ")])])])],1)])],1)},o=[],l=(e("c5f6"),{props:{id:Number},data:function(){return{isLoading:!1,detailShow:!1,list:[],loading:!1,finished:!1,error:!1,total:5,currentRate2:0,rate:100,active:2,tabs:["最新","收益高","投入小","可上车"]}},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},500)},detail:function(){this.detailShow=!this.detailShow},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}}}),r=l,c=e("2877"),u=Object(c["a"])(r,i,o,!1,null,null,null),d=u.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"j-ta-c j-p-b-XXL",staticStyle:{"background-color":"#fbe9e7"}},[e("mu-container",{staticStyle:{width:"80%","max-width":"384px"}},[e("mu-text-field",{attrs:{color:"secondary",label:"主题","label-float":"","max-length":"10","full-width":""},model:{value:t.form.title,callback:function(a){t.$set(t.form,"title",a)},expression:"form.title"}}),e("mu-select",{attrs:{color:"secondary",label:"总需人数","label-float":"","full-width":""},model:{value:t.form.total_count,callback:function(a){t.$set(t.form,"total_count",a)},expression:"form.total_count"}},t._l(t.options,function(t){return e("mu-option",{key:t,attrs:{label:t+"人",value:t}})}),1),e("mu-text-field",{attrs:{color:"secondary","input-position":"right",label:"每人支付",suffix:"元",onkeyup:"clearNoNum(this)","label-float":"","full-width":""},model:{value:t.form.amount,callback:function(a){t.$set(t.form,"amount",a)},expression:"form.amount"}}),e("mu-flex",{attrs:{"align-items":"center"}},[e("mu-flex",{attrs:{"justify-content":"start"}},[e("div",{staticClass:"j-c-gray-M"},[t._v("在大厅展示")])]),e("mu-flex",{attrs:{"justify-content":"end",fill:""}},[e("van-switch",{attrs:{size:"20px"},model:{value:t.form.is_public,callback:function(a){t.$set(t.form,"is_public",a)},expression:"form.is_public"}})],1)],1)],1),e("div",{staticClass:"j-m-tb-M"},[e("mu-button",{attrs:{color:"secondary"}},[t._v("发起并参与红包")])],1),e("mu-checkbox",{attrs:{label:"同意用户协议"},model:{value:t.agree,callback:function(a){t.agree=a},expression:"agree"}})],1)},v=[],h={props:{},data:function(){return{options:["2","3","4","5","6","7","8","9"],form:{title:null,total_count:null,amount:null,is_public:!0},agree:!0,checked:!1,temp:null,isLoading:!1,detailShow:!1,list:[],loading:!1,finished:!1,error:!1,total:5,currentRate2:0,rate:100,active:2,tabs:["最新","收益高","投入小","可上车"]}},created:function(){},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.$toast("刷新成功"),t.isLoading=!1},500)},detail:function(){this.detailShow=!this.detailShow},onLoad:function(){var t=this;setTimeout(function(){for(var a=0;a<10;a++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=40&&(t.finished=!0)},500)}}},p=h,m=Object(c["a"])(p,f,v,!1,null,null,null),g=m.exports,b=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"j-p-b-100"},[n("div",{staticClass:"j-list"},[n("div",{staticClass:"j-list-item j-ta-c j-bc-yellow-S"},[n("img",{staticClass:"j-width100",attrs:{src:e("eff9")}}),n("img",{staticClass:"j-width100",attrs:{src:e("c0e3")}}),n("img",{staticClass:"j-width100",attrs:{src:e("f531")}})]),n("div",{staticClass:"j-list"},[n("div",{staticClass:"j-list-item"},[n("h3",{staticClass:"j-p-t-L j-p-b-S j-ta-c j-c-orange-M"},[t._v("发起和参与")]),n("div",[n("div",{staticClass:"j-c-orange-M"},[t._v("1.发起红包")]),t._v("\n                    发起人发起红包，可设置参与人数、每人支付金额，支付成功后即表示发起红包成功。可将红包分享给小伙伴，邀请小伙伴参与红包。\n                ")]),n("div",[n("div",{staticClass:"j-c-orange-M"},[t._v("2.参与红包")]),t._v("\n                    用户可通过小伙伴分享的链接或者在红包大厅参与红包，按照红包发起者设置的每人支付的金额支付成功后则红包参与成功。若支付成功时，红包已完成，则参与失败，系统会将用户所付资金退回至账户余额。\n                ")]),n("div",[n("div",{staticClass:"j-c-orange-M"},[t._v("3.拆开红包")]),t._v("\n                    红包参与人数达到红包发起者所设置的人数时，即完成红包，参与该红包的用户即可拆红包。\n                ")]),n("h3",{staticClass:"j-p-t-L j-p-b-S j-ta-c j-c-orange-M"},[t._v("红包退回说明")]),n("div",[t._v("\n                    红包的有效期为24小时，如果超过有效期红包未完成，红包对应的资金将退回至各参与人的账户余额。\n                ")])])])])])}],j={data:function(){return{}},created:function(){},methods:{}},k=j,w=Object(c["a"])(k,b,_,!1,null,null,null),x=w.exports,L={components:{LuckDetail:d,LuckCreate:g,LuckRule:x},data:function(){return{showLuckDetail:!1,showLuckCreate:!1,showLuckRule:!1,luck_id:null,item:"",isLoading:!1,list:[],loading:!1,finished:!1,error:!1,total:5,currentRate2:0,rate:50,active:2,tabs:["最新","收益高","投入小","可上车"]}},created:function(){console.log("luck 实例(created)已载入")},methods:{onRefresh:function(){var t=this;setTimeout(function(){t.onLoad(!0),t.isLoading=!1},500)},onShowLuckDetail:function(t){this.luck_id=t,this.showLuckDetail=!this.showLuckDetail,this.$router.push("?luck_id="+t)},onLoad:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0];setTimeout(function(){a&&(t.list=[]);for(var e=0;e<10;e++){var n=Math.floor(10*Math.random())+2,s=Math.floor(10*Math.random()),i=2,o=[{id:t.list.length+1,title:"用户"+Math.floor(1e6*Math.random())+"的红包",total_count:n,amount:s,total_amount:s*n,current_count:i,progress:(i/n*100).toFixed(0)}];t.list.push.apply(t.list,o)}t.loading=!1,t.list.length>=40&&(t.finished=!0)},300)}}},y=L,C=Object(c["a"])(y,n,s,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-5297bf1a.103e6393.js.map