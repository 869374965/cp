(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/detail"],{7404:function(t,e,n){"use strict";var a={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"74fe"))}},i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}))},"83cb":function(t,e,n){"use strict";var a=n("e928"),i=n.n(a);i.a},c50a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{list:[],loadingType:"nomore",pageNum:0,pageSize:10,url:"",type:""}},onLoad:function(e){"1"==e.type?(t.setNavigationBarTitle({title:"双色球历史开奖"}),this.type=1):"2"==e.type?(t.setNavigationBarTitle({title:"大乐透历史开奖"}),this.type=2):(t.setNavigationBarTitle({title:"七星彩历史开奖"}),this.type=3),this.list=JSON.parse(decodeURIComponent(e.list)).reverse()},created:function(){},methods:{loadData:function(){}}};e.default=n}).call(this,n("543d")["default"])},ccc6:function(t,e,n){"use strict";(function(t){n("baa3");a(n("66fd"));var e=a(n("e739"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e739:function(t,e,n){"use strict";n.r(e);var a=n("7404"),i=n("eb5a");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("83cb");var u,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"10219fd6",null,!1,a["a"],u);e["default"]=r.exports},e928:function(t,e,n){},eb5a:function(t,e,n){"use strict";n.r(e);var a=n("c50a"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a}},[["ccc6","common/runtime","common/vendor"]]]);