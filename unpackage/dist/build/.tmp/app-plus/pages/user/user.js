(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user","components/swiperMade/swiperMade"],{"1ba6":function(t,n,e){},"21cd":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},computed:{swiperP:function(){return this.swiperPic}},props:["swiperPic"],methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}};n.default=u},"45b0":function(t,n,e){"use strict";e.r(n);var u=e("dc20"),a=e("e1fb");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("a9ea");var o=e("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},"89c8":function(t,n,e){},a9ea:function(t,n,e){"use strict";var u=e("1ba6"),a=e.n(u);a.a},b870:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=a(e("e04f"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{userApp:[{title:"我的积分"},{title:"我的活动"},{title:"未参加活动"}]}},methods:{gotoLogin:function(){console.log("login page"," at pages\\user\\user.vue:49"),t.navigateTo({url:"/pages/user/login/login"})}},components:{SwiperMade:u.default}};n.default=r}).call(this,e("6e42")["default"])},c378:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},cdf9:function(t,n,e){"use strict";var u=e("89c8"),a=e.n(u);a.a},dc20:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},df45:function(t,n,e){"use strict";e.r(n);var u=e("21cd"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},e04f:function(t,n,e){"use strict";e.r(n);var u=e("c378"),a=e("df45");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("cdf9");var o=e("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=i.exports},e1fb:function(t,n,e){"use strict";e.r(n);var u=e("b870"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a}},[["07f8","common/runtime","common/vendor"]]]);