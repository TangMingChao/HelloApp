(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={hotProductRecords:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;c.push([69,"chunk-vendors","chunk-common"]),n()})({69:function(t,e,n){t.exports=n("da6d")},"97d9":function(t,e,n){"use strict";n("c2d9")},c2d9:function(t,e,n){},da6d:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2a0e");var r=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("div",{attrs:{slot:"head"},slot:"head"},[n("top-bar",{attrs:{title:"提交记录",left:t.goBack}})],1),n("div",{ref:"content",staticClass:"main-content-fix"},[n("div",{staticClass:"records"},t._l(t.records,(function(e,r){return n("div",{key:r,staticClass:"record"},[n("div",{staticClass:"record-title"},[n("span",[t._v(t._s(e.content))])]),n("div",{staticClass:"record-info"},[n("span",[t._v(t._s(t._f("datetimeFormat")(e.billDate,"YYYY-MM-DD HH:mm")))])])])})),0)])])},c=[],a=n("6c85"),i=n("f130"),s=n("e224"),u=n("92e7"),d={data:function(){return{records:[],goBack:{icon:"icon-back",handle:function(){Object(a["c"])()}}}},mounted:function(){var t=Object(a["h"])(),e=t.productId;this.getRecordsList(e)},methods:{getRecordsList:function(t){var e=this;Object(u["d"])({productId:t},(function(t){e.records=t}),this.$toast.error)}},components:{Page:i["a"],TopBar:s["a"]}},l=d,f=(n("97d9"),n("2877")),p=Object(f["a"])(l,o,c,!1,null,"09087b7f",null),b=p.exports;Object(a["b"])().then((function(){new r["a"]({el:"#app",render:function(t){return t(b)}})}))}});