(function(t){function e(e){for(var n,s,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={publishNeeds:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;i.push([83,"chunk-vendors","chunk-common"]),a()})({83:function(t,e,a){t.exports=a("9974")},9974:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2a0e");var n=a("a026"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",[a("div",{attrs:{slot:"head"},slot:"head"},[a("top-bar",{attrs:{title:"免费发布需求",left:t.goBack}})],1),a("div",{ref:"content",staticClass:"main-content-fix"},[a("div",{staticClass:"publish-form"},[a("ul",{staticClass:"publish-list"},[a("li",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v("标题")]),a("div",{staticClass:"right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"请输入标题"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v("预算")]),a("div",{staticClass:"right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.budget,expression:"budget"}],attrs:{type:"text",placeholder:"请输入预算"},domProps:{value:t.budget},on:{input:function(e){e.target.composing||(t.budget=e.target.value)}}})])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v("托管赏金")]),a("div",{staticClass:"right"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.bounty,expression:"bounty"}],attrs:{type:"text",placeholder:"请输入托管赏金"},domProps:{value:t.bounty},on:{input:function(e){e.target.composing||(t.bounty=e.target.value)}}})])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v("地域要求")]),a("div",{staticClass:"right choice",on:{click:function(e){t.show=!0}}},[a("input",{attrs:{type:"text",placeholder:"请选择",readonly:""},domProps:{value:t.city}}),a("i",{staticClass:"iconfont icon-go"})])]),a("li",{staticClass:"list-item multiple"},[a("div",{staticClass:"name"},[t._v("描述")]),a("div",{staticClass:"textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{placeholder:"请输入"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])]),a("li",{staticClass:"list-item"},[a("div",{staticClass:"name"},[t._v("截止时间")]),a("div",{staticClass:"right choice",on:{click:function(e){t.dateShow=!0}}},[a("input",{attrs:{type:"text",readonly:""},domProps:{value:t._f("datetimeFormat")(t.currentDate,"YYYY-MM-DD")}}),a("i",{staticClass:"iconfont icon-go"})])])]),a("div",{staticClass:"btn-spc",on:{click:t.submit}},[a("vc-button",[t._v("立即发布")])],1)]),a("div",{staticClass:"publish-extra"},[a("h1",[t._v("戳我了解")]),a("div",{staticClass:"btn-oper"},[a("div",{staticClass:"btn-small",on:{click:t.openService}},[a("i",{staticClass:"iconfont icon-process"}),a("span",[t._v("服务流程")])]),a("div",{staticClass:"btn-small",on:{click:t.openService}},[a("i",{staticClass:"iconfont icon-guarantee"}),a("span",[t._v("服务保障")])])])])]),a("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-area",{attrs:{"area-list":t.areaList,value:t.areaCode,"columns-num":t.areaColumn},on:{cancel:function(e){t.show=!1},confirm:t.citySelect}})],1),a("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.dateShow,callback:function(e){t.dateShow=e},expression:"dateShow"}},[a("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:function(e){t.dateShow=!1},confirm:t.dateSelect},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),a("vc-popup",{ref:"popup"},[a("Tos")],1)],1)},i=[],s=(a("b0c0"),a("d1cf"),a("ee83")),c=(a("db2c"),a("1125")),r=(a("8a58"),a("e41f")),l=a("ade3"),u=a("6c85"),d=a("f130"),p=a("e224"),h=a("8452"),m=a("4748"),v=a("1b7a"),f=a("2b26"),b=a("0c9b"),g={data:function(){var t;return t={show:!1,goBack:{icon:"icon-back",handle:function(){Object(u["c"])()}}},Object(l["a"])(t,"show",!1),Object(l["a"])(t,"areaList",v["a"]),Object(l["a"])(t,"areaCode",""),Object(l["a"])(t,"areaName",""),Object(l["a"])(t,"areaColumn",2),Object(l["a"])(t,"dateShow",!1),Object(l["a"])(t,"minDate",new Date),Object(l["a"])(t,"maxDate",new Date((new Date).getFullYear()+1,(new Date).getMonth(),(new Date).getDate())),Object(l["a"])(t,"currentDate",new Date),Object(l["a"])(t,"title",""),Object(l["a"])(t,"budget",""),Object(l["a"])(t,"bounty",""),Object(l["a"])(t,"city",""),Object(l["a"])(t,"content",""),Object(l["a"])(t,"endDate",""),t},mounted:function(){var t=localStorage.getItem("needsContent"),e=localStorage.getItem("needsTitle");t&&(this.content=t),e&&(this.title=e)},watch:{content:function(t){localStorage.setItem("needsContent",t)},title:function(t){localStorage.setItem("needsTitle",t)}},methods:{openService:function(){var t=this.$refs.popup;t.open()},citySelect:function(t){this.show=!1,this.areaCode=t[this.areaColumn-1].code,this.city=t[this.areaColumn-1].name},dateSelect:function(t){this.dateShow=!1},getResult:function(){Object(u["k"])({name:"creditResult",url:"./creditResult.html"})},submit:function(){var t=this;null==this.title||""==this.title?this.$toast.error("标题不能为空"):null==this.budget||""==this.budget||0==this.budget?this.$toast.error("预算不能为空"):null==this.city||""==this.city?this.$toast.error("地域不能为空"):null==this.content||""==this.content?this.$toast.error("描述不能为空"):null==this.currentDate||""==this.currentDate?this.$toast.error("截止时间不能为空"):(this.endDate=this.currentDate,this.$toast.loading("提交中"),Object(f["d"])({title:this.title,budget:this.budget,bounty:this.bounty,city:this.city,content:this.content,endDate:this.endDate},(function(e,a){localStorage.removeItem("needsContent"),localStorage.removeItem("needsTitle"),t.$toast.close(),t.getResult()}),(function(e){t.$toast.error(e)})))}},components:{Page:d["a"],TopBar:p["a"],VcButton:h["a"],VcPopup:m["a"],Tos:b["a"],VanPopup:r["a"],VanArea:c["a"],VanDatetimePicker:s["a"]}},y=g,C=(a("d34f"),a("2877")),w=Object(C["a"])(y,o,i,!1,null,"25787dbd",null),O=w.exports;Object(u["b"])().then((function(){new n["a"]({el:"#app",render:function(t){return t(O)}})}))},a564:function(t,e,a){},d34f:function(t,e,a){"use strict";a("a564")}});