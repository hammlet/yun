(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/loginUser/cmd-page-body/cmd-page-body"],{"18a7":function(t,o,n){"use strict";var e=n("4d39"),u=n.n(e);u.a},"4d39":function(t,o,n){},6481:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},u=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return u})},b251:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={name:"cmd-page-body",props:{type:{type:String,default:"top"},backgroundColor:{type:String,default:""}},data:function(){return{bodyHeight:0}},computed:{setBodyClass:function(){var t=["cmd-page-body","cmd-page-body-top-bottom"];return"top"==this.type&&(t.splice(1),t.push("cmd-page-body-top")),"bottom"==this.type&&(t.splice(1),t.push("cmd-page-body-bottom")),t},setBackgroundColor:function(){var t="background: #ffffff;";return this.backgroundColor&&(t="background: ".concat(this.backgroundColor,";")),t}},mounted:function(){var o=t.getSystemInfoSync().windowHeight;o-=t.getSystemInfoSync().statusBarHeight,"top"==this.type&&(o-=t.upx2px(88)),"bottom"==this.type&&(o-=t.upx2px(118)),"top-bottom"==this.type&&(o-=t.upx2px(206)),this.bodyHeight="min-height:".concat(o,"px")}};o.default=n}).call(this,n("6e42")["default"])},b286:function(t,o,n){"use strict";n.r(o);var e=n("6481"),u=n("b799");for(var a in u)"default"!==a&&function(t){n.d(o,t,function(){return u[t]})}(a);n("18a7");var r=n("2877"),c=Object(r["a"])(u["default"],e["a"],e["b"],!1,null,null,null);o["default"]=c.exports},b799:function(t,o,n){"use strict";n.r(o);var e=n("b251"),u=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/loginUser/cmd-page-body/cmd-page-body-create-component',
    {
        'components/loginUser/cmd-page-body/cmd-page-body-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("b286"))
        })
    },
    [['components/loginUser/cmd-page-body/cmd-page-body-create-component']]
]);                
