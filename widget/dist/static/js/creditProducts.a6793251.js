(function(t){function e(e){for(var o,a,c=e[0],s=e[1],l=e[2],d=0,p=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={creditProducts:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([51,"chunk-vendors","chunk-common"]),n()})({"20ee":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2a0e");var o=n("a026"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("div",{attrs:{slot:"head"},slot:"head"},[n("top-bar",{attrs:{title:"有钱赚",left:t.goBack}})],1),n("div",{ref:"content",staticClass:"main-content-fix"},[n("div",{staticClass:"support-banner"}),n("div",{staticClass:"products"},[n("van-search",{attrs:{"show-action":"",shape:"round",placeholder:"请输入搜索关键词"},on:{search:t.onSearch},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[n("div",{staticStyle:{"margin-left":"6px"},attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),n("br"),n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"请求失败，点击重新加载"},on:{"update:error":function(e){t.error=e},load:t.getProductsList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.products,(function(e,o){return n("div",{key:o,staticClass:"product",on:{click:function(n){return t.openDetail(e.id)}}},[n("div",{staticClass:"product-title"},[n("span",[t._v(t._s(e.title))]),n("div",{staticClass:"iconfont icon-go"})]),n("div",{staticClass:"product-content"},[t._v(t._s(e.content))]),n("div",{staticClass:"product-info"},[n("span",[t._v(t._s(t._f("datetimeFormat")(e.publishTime,"YYYY-MM-DD HH:mm")))]),n("span",[t._v(t._s(e.author))])])])})),0)],1)],1),n("div",{staticClass:"publish-button",on:{click:t.openModal}},[n("img",{attrs:{src:t.publishButton,alt:"publish"}})])]),n("vc-popup",{ref:"popup"},[n("div",{staticClass:"popup-title"},[t._v("请填写以下信息")]),n("div",{staticClass:"popup-body"},[n("div",{staticClass:"input-border"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),n("div",{staticClass:"input-border textarea"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{rows:"10",type:"text",placeholder:"请描述可以提供的产品或服务"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),n("div",{staticClass:"popup-footer"},[n("div",{staticClass:"popup-btn cancel",on:{click:t.cancel}},[t._v("取消")]),n("div",{staticClass:"popup-btn",on:{click:t.confirm}},[t._v("发布")])])])],1)},r=[],a=(n("99af"),n("d81d"),n("ac1f"),n("5319"),n("5852"),n("d961")),c=(n("ab71"),n("58e6")),s=(n("2994"),n("2bdd")),l=n("5530"),u=n("6c85"),d=n("f130"),p=n("e224"),f=(n("ca28"),n("36d6")),h=n.n(f),v=n("4c79"),b=n("4748"),g=n("c24f"),m={data:function(){return{title:"",content:"",show:!1,publishButton:h.a,products:[],goBack:{icon:"icon-back",handle:function(){Object(u["c"])()}},isLoading:!1,loading:!1,finished:!1,error:!1,current:0,length:10,total:0,keyword:""}},methods:{openModal:function(){var t=this,e=this.$refs.popup;Object(g["a"])((function(t,n){e.open()}),(function(e){t.$toast.error(e)}),{managerCheck:!0})},confirm:function(){return this.title?this.content?void this.publishProduct():this.$toast.error("请输入内容"):this.$toast.error("请输入标题")},cancel:function(){var t=this.$refs.popup;t.close(),this.title="",this.content=""},openDetail:function(t){Object(u["k"])({name:"creditProductDetail",url:"./creditProductDetail.html",pageParam:{productId:t}})},getResult:function(){Object(u["k"])({name:"creditResult",url:"./creditResult.html"})},publishProduct:function(){var t=this;this.$toast.loading("提交中"),Object(v["c"])({title:this.title,content:this.content},(function(e,n){t.cancel(),t.$toast.close(),t.getResult()}),this.$toast.error)},onSearch:function(){this.getProductsList(this.keyword,0)},getProductsList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;Object(v["b"])({title:e,current:0===n?0:this.current+1,length:this.length},(function(e){var o=e.result.map((function(t){return Object(l["a"])(Object(l["a"])({},t),{},{content:t.content.replace(/<[^>]+>/g,"")})}));t.total=e.total,t.current=e.current,t.products=0===n?o:t.products.concat(o),t.loading=!1,t.current>=t.total&&(t.finished=!0)}),(function(e){t.loading=!1,t.finished=!0,t.$toast.error(e)}))},listInit:function(){this.total=0,this.current=0,this.loading=!1,this.finished=!1,this.products=[]},onRefresh:function(){this.isLoading=!1,this.listInit()}},components:{Page:d["a"],TopBar:p["a"],VcPopup:b["a"],VanList:s["a"],VanPullRefresh:c["a"],VanSearch:a["a"]}},y=m,k=(n("f505"),n("5308"),n("2877")),_=Object(k["a"])(y,i,r,!1,null,"0f85bbb6",null),w=_.exports;Object(u["b"])().then((function(){new o["a"]({el:"#app",render:function(t){return t(w)}})}))},51:function(t,e,n){t.exports=n("20ee")},5308:function(t,e,n){"use strict";n("d911")},"712b":function(t,e,n){},d911:function(t,e,n){},f505:function(t,e,n){"use strict";n("712b")}});