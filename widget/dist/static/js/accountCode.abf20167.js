(function(t){function e(e){for(var o,a,c=e[0],s=e[1],u=e[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={accountCode:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([13,"chunk-vendors","chunk-common"]),n()})({13:function(t,e,n){t.exports=n("f95b")},"52c1":function(t,e,n){t.exports=n.p+"static/img/account-reg.08b94891.png"},"7dbf":function(t,e,n){},d499:function(t,e,n){"use strict";n("7dbf")},f95b:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2a0e");var o=n("a026"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("page",[o("div",{attrs:{slot:"head"},slot:"head"},[o("top-bar",{attrs:{title:"生成分享海报",left:t.goBack}})],1),this.image?t._e():o("div",{ref:"content",staticClass:"main-content-fix initial",attrs:{id:"capture"}},[o("div",{staticClass:"account-code"},[o("div",{staticClass:"img-reg"},[o("img",{attrs:{src:n("52c1"),alt:""}})]),""!=t.url?o("div",{staticClass:"code"},[o("qrcode",{attrs:{value:t.url,options:{width:180,margin:0}}})],1):t._e()])]),this.image?o("div",{staticClass:"main-content-fix"},[o("img",{staticClass:"result",attrs:{src:this.image,alt:"result"}})]):t._e(),o("div",{staticClass:"download-guide"},[o("div",{staticClass:"download",on:{click:t.downloadShareImg}},[t._v("保存海报")]),o("a",{staticClass:"guideline",on:{click:t.openGuideline}},[t._v("常融注册流程")])])])},r=[],a=(n("99af"),n("ac1f"),n("5319"),n("1276"),n("6c85")),c=n("f130"),s=n("e224"),u=n("b2e5"),l=n.n(u),d=n("c0e9"),f=n.n(d),p=n("8c7f"),g=n("310c"),h=n("495f"),m=n("c24f"),b=n("da71"),v={data:function(){return{REGISTER_TO_FINANCE_GUIDELINE:b["m"],goBack:{icon:"icon-back",handle:function(){Object(a["c"])()}},url:"",image:null}},mounted:function(){var t=this;Object(g["e"])((function(e){t.url="".concat(window.location.protocol,"//").concat(window.location.host,"/inviteRegister.html?inviteString=").concat(e),setTimeout(t.initResource,200)}),(function(e){t.url="".concat(window.location.protocol,"//").concat(window.location.host,"/inviteRegister.html"),setTimeout(t.initResource,200)})),Object(m["a"])((function(){}),(function(){}),{expiredCheck:!0})},methods:{initResource:function(){var t=this,e=document.querySelector("#capture");f()(e).then((function(e){t.image=e.toDataURL("image/png").replace("image/png","image/octet-stream")}))},downloadShareImg:function(){if(!this.image)return this.$toast.error("资源初始化中");p["a"]?this.nativeDownload():this.webDownload()},webDownload:function(){var t=Object(h["a"])();if(t)return this.$toast.error("请长按上图保存至相册");var e=document.createElement("a");e.href=this.image,e.setAttribute("download","share.jpg"),document.body.appendChild(e),e.click()},nativeDownload:function(){var t=this,e=window.api.require("trans"),n="share.jpg";return e.saveImage({base64Str:this.image.split("base64,")[1],album:!0,imgPath:"fs://img/",imgName:n},(function(e,n){if(!e.status)return t.$toast.error("格式转换失败");t.$toast.error("图片已保存至您的相册")}))},openGuideline:function(){Object(a["k"])({name:"registerGuide",url:"./registerGuide.html"})}},components:{Page:c["a"],TopBar:s["a"],Qrcode:l.a}},w=v,y=(n("d499"),n("2877")),O=Object(y["a"])(w,i,r,!1,null,"f676fffc",null),j=O.exports;Object(a["b"])().then((function(){new o["a"]({el:"#app",render:function(t){return t(j)}})}))}});