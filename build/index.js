!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"));else if("function"===typeof define&&define.amd)define(["react"],e);else{var n="object"===typeof exports?e(require("react")):e(t.react);for(var r in n)("object"===typeof exports?exports:t)[r]=n[r]}}(this,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/react-simple-scrollpicker/",n(n.s=2)}([function(e,n){e.exports=t},function(t,e,n){window,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";(function(t){n.d(e,"e",(function(){return X})),n.d(e,"c",(function(){return Y})),n.d(e,"b",(function(){return I})),n.d(e,"a",(function(){return L})),n.d(e,"d",(function(){return V}));var r=n(1),i=n.n(r),o=n(2);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h,l,f,d,p,v,m,y,g,_,b,w,T,S,O,M="undefined"!=typeof window?window:t,j=M.requestAnimationFrame||M.webkitRequestAnimationFrame||M.oRequestAnimationFrame||M.msRequestAnimationFrame||M.mozCancelRequestAnimationFrame&&M.mozRequestAnimationFrame||setTimeout,E=function(){},P=null,k=null,x=i()({},o),X=function(t,e,n,r,i,o,u){for(l in h=t<o?0:(t-o)/i,e)f=u[l],d=f.call?f:x[f],p=n[l],e[l]=p+(r[l]-p)*d(h);return e},A=function(t,e){v=t._duration,m=t._timestamp,b=t._currentState,w=t._targetState,T=t._delay,_=v-((y=m+T+v)-(g=e>y?y:e)),g>=y?(t._render(w,t._data,_),t.stop(!0)):(t._applyFilter("beforeTween"),g<m+T?m=v=g=1:m+=T,X(g,b,t._originalState,w,v,m,t._easing),t._applyFilter("afterTween"),t._render(b,t._data,_))},Y=function(t,e,n){return function(){for(t=L.now(),e=P;e;)n=e._next,A(e,t),e=n}()},F=function t(){P&&(j.call(M,t,1e3/60),Y())},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=c(e);if("string"===r||"function"===r)for(var i in t)n[i]=e;else for(var o in t)n[o]=e[o]||"linear";return n},C=function(t){t===P?(P=t._next)?P._previous=null:k=null:t===k?(k=t._previous)?k._next=null:P=null:(S=t._previous,O=t._next,S._next=O,O._previous=S),t._previous=t._next=null},L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;u(this,t),a(this,"_config",{}),a(this,"_data",{}),a(this,"_filters",[]),a(this,"_next",null),a(this,"_previous",null),a(this,"_timestamp",null),a(this,"_resolve",null),a(this,"_reject",null),a(this,"_currentState",{}),a(this,"_originalState",{}),a(this,"_targetState",{}),a(this,"_start",E),a(this,"_render",E),this._currentState=e||this._currentState,n&&this.setConfig(n)}var e,n;return e=t,(n=[{key:"_applyFilter",value:function(t){for(var e=this._filters.length;e>0;e--){var n=this._filters[e-e][t];n&&n(this)}}},{key:"tween",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return this._isPlaying&&this.stop(),!e&&this._config||this.setConfig(e),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),this._data),this._resume(this._timestamp)}},{key:"setConfig",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i()(this._config,n);var r=this._config,o=r.promise,u=void 0===o?Promise:o,s=r.start,a=void 0===s?E:s,c=r.render,h=void 0===c?this._config.step||E:c,l=r.step,f=void 0===l?E:l;for(var d in this._data=this._config.data||this._config.attachment||this._data,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=n.delay||0,this._start=a,this._render=h||f,this._duration=this._config.duration||500,i()(this._currentState,n.from),i()(this._originalState,this._currentState),i()(this._targetState,this._currentState,n.to),this._easing=I(this._currentState,this._config.easing,this._easing),this._filters.length=0,t.filters)t.filters[d].doesApply(this)&&this._filters.push(t.filters[d]);return this._applyFilter("tweenCreated"),this._promise=new u((function(t,n){e._resolve=t,e._reject=n})),this}},{key:"get",value:function(){return i()({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,C(this),this}},{key:"resume",value:function(){return this._resume()}},{key:"_resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.now();return null===this._timestamp?this.tween():(this._isPlaying||(this._pausedAtTime&&(this._timestamp+=e-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===P?(P=this,k=this,F()):(this._previous=k,k._next=this,k=this)),this._promise)}},{key:"seek",value:function(e){e=Math.max(e,0);var n=t.now();return this._timestamp+e===0||(this._timestamp=n-e,this._isPlaying||A(this,n)),this}},{key:"stop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this._isPlaying?(this._isPlaying=!1,C(this),t&&(this._applyFilter("beforeTween"),X(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd")),this._resolve&&this._resolve({data:this._data,state:this._currentState,tweenable:this}),this._resolve=null,this._reject=null,i()(this._targetState,this._currentState),i()(this._originalState,this._targetState),this):this}},{key:"cancel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this._currentState,n=this._data,r=this._isPlaying;return r?(this._reject({data:n,state:e,tweenable:this}),this._resolve=null,this._reject=null,this.stop(t)):this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(e){t.setScheduleFunction(e)}},{key:"data",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this._data=i()({},t)),this._data}},{key:"dispose",value:function(){for(var t in this)delete this[t]}}])&&s(e.prototype,n),t}();function V(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=new L,n=e.tween(t);return n.tweenable=e,n}L.setScheduleFunction=function(t){return j=t},L.formulas=x,L.filters={},L.now=Date.now||function(){return+new Date}}).call(this,n(3))},function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function u(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,s,a=u(t),c=1;c<arguments.length;c++){for(var h in n=Object(arguments[c]))i.call(n,h)&&(a[h]=n[h]);if(r){s=r(n);for(var l=0;l<s.length;l++)o.call(n,s[l])&&(a[s[l]]=n[s[l]])}}return a}},function(t,e,n){"use strict";n.r(e),n.d(e,"linear",(function(){return r})),n.d(e,"easeInQuad",(function(){return i})),n.d(e,"easeOutQuad",(function(){return o})),n.d(e,"easeInOutQuad",(function(){return u})),n.d(e,"easeInCubic",(function(){return s})),n.d(e,"easeOutCubic",(function(){return a})),n.d(e,"easeInOutCubic",(function(){return c})),n.d(e,"easeInQuart",(function(){return h})),n.d(e,"easeOutQuart",(function(){return l})),n.d(e,"easeInOutQuart",(function(){return f})),n.d(e,"easeInQuint",(function(){return d})),n.d(e,"easeOutQuint",(function(){return p})),n.d(e,"easeInOutQuint",(function(){return v})),n.d(e,"easeInSine",(function(){return m})),n.d(e,"easeOutSine",(function(){return y})),n.d(e,"easeInOutSine",(function(){return g})),n.d(e,"easeInExpo",(function(){return _})),n.d(e,"easeOutExpo",(function(){return b})),n.d(e,"easeInOutExpo",(function(){return w})),n.d(e,"easeInCirc",(function(){return T})),n.d(e,"easeOutCirc",(function(){return S})),n.d(e,"easeInOutCirc",(function(){return O})),n.d(e,"easeOutBounce",(function(){return M})),n.d(e,"easeInBack",(function(){return j})),n.d(e,"easeOutBack",(function(){return E})),n.d(e,"easeInOutBack",(function(){return P})),n.d(e,"elastic",(function(){return k})),n.d(e,"swingFromTo",(function(){return x})),n.d(e,"swingFrom",(function(){return X})),n.d(e,"swingTo",(function(){return A})),n.d(e,"bounce",(function(){return Y})),n.d(e,"bouncePast",(function(){return F})),n.d(e,"easeFromTo",(function(){return I})),n.d(e,"easeFrom",(function(){return C})),n.d(e,"easeTo",(function(){return L}));var r=function(t){return t},i=function(t){return Math.pow(t,2)},o=function(t){return-(Math.pow(t-1,2)-1)},u=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},s=function(t){return Math.pow(t,3)},a=function(t){return Math.pow(t-1,3)+1},c=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},h=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},f=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},d=function(t){return Math.pow(t,5)},p=function(t){return Math.pow(t-1,5)+1},v=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},m=function(t){return 1-Math.cos(t*(Math.PI/2))},y=function(t){return Math.sin(t*(Math.PI/2))},g=function(t){return-.5*(Math.cos(Math.PI*t)-1)},_=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},T=function(t){return-(Math.sqrt(1-t*t)-1)},S=function(t){return Math.sqrt(1-Math.pow(t-1,2))},O=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},M=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},j=function(t){var e=1.70158;return t*t*((e+1)*t-e)},E=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},P=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},k=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},x=function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},X=function(t){var e=1.70158;return t*t*((e+1)*t-e)},A=function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},Y=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},F=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},I=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},C=function(t){return Math.pow(t,4)},L=function(t){return Math.pow(t,.25)}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),n.d(e,"processTweens",(function(){return u.c})),n.d(e,"Tweenable",(function(){return u.a})),n.d(e,"tween",(function(){return u.d})),n.d(e,"interpolate",(function(){return A})),n.d(e,"Scene",(function(){return V})),n.d(e,"setBezierFunction",(function(){return N})),n.d(e,"unsetBezierFunction",(function(){return q}));var r={};n.r(r),n.d(r,"doesApply",(function(){return S})),n.d(r,"tweenCreated",(function(){return O})),n.d(r,"beforeTween",(function(){return M})),n.d(r,"afterTween",(function(){return j}));var i,o,u=n(0),s=/(\d|-|\.)/,a=/([^\-0-9.]+)/g,c=/[0-9.-]+/g,h=(i=c.source,o=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(o).concat(i).concat(o).concat(i,"\\)"),"g")),l=/^.*\(/,f=/#([0-9]|[a-f]){3,6}/gi,d=function(t,e){return t.map((function(t,n){return"_".concat(e,"_").concat(n)}))};function p(t){return parseInt(t,16)}var v=function(t){return"rgb(".concat((e=t,3===(e=e.replace(/#/,"")).length&&(e=(e=e.split(""))[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[p(e.substr(0,2)),p(e.substr(2,2)),p(e.substr(4,2))]).join(","),")");var e},m=function(t,e,n){var r=e.match(t),i=e.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",n(t))})),i},y=function(t){for(var e in t){var n=t[e];"string"==typeof n&&n.match(f)&&(t[e]=m(f,n,v))}},g=function(t){var e=t.match(c).map(Math.floor),n=t.match(l)[0];return"".concat(n).concat(e.join(","),")")},_=function(t){return t.match(c)},b=function(t,e){var n={};return e.forEach((function(e){n[e]=t[e],delete t[e]})),n},w=function(t,e){return e.map((function(e){return t[e]}))},T=function(t,e){return e.forEach((function(e){return t=t.replace("VAL",+e.toFixed(4))})),t},S=function(t){for(var e in t._currentState)if("string"==typeof t._currentState[e])return!0;return!1};function O(t){var e=t._currentState;[e,t._originalState,t._targetState].forEach(y),t._tokenData=function(t){var e,n,r={};for(var i in t){var o=t[i];"string"==typeof o&&(r[i]={formatString:(e=o,n=void 0,n=e.match(a),n?(1===n.length||e.charAt(0).match(s))&&n.unshift(""):n=["",""],n.join("VAL")),chunkNames:d(_(o),i)})}return r}(e)}function M(t){var e=t._currentState,n=t._originalState,r=t._targetState,i=t._easing,o=t._tokenData;!function(t,e){var n=function(n){var r=e[n].chunkNames,i=t[n];if("string"==typeof i){var o=i.split(" "),u=o[o.length-1];r.forEach((function(e,n){return t[e]=o[n]||u}))}else r.forEach((function(e){return t[e]=i}));delete t[n]};for(var r in e)n(r)}(i,o),[e,n,r].forEach((function(t){return function(t,e){var n=function(n){_(t[n]).forEach((function(r,i){return t[e[n].chunkNames[i]]=+r})),delete t[n]};for(var r in e)n(r)}(t,o)}))}function j(t){var e=t._currentState,n=t._originalState,r=t._targetState,i=t._easing,o=t._tokenData;[e,n,r].forEach((function(t){return function(t,e){for(var n in e){var r=e[n],i=r.chunkNames,o=r.formatString,u=T(o,w(b(t,i),i));t[n]=m(h,u,g)}}(t,o)})),function(t,e){for(var n in e){var r=e[n].chunkNames,i=t[r[0]];t[n]="string"==typeof i?r.map((function(e){var n=t[e];return delete t[e],n})).join(" "):i}}(i,o)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){k(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function k(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=new u.a,X=u.a.filters,A=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=P({},t),s=Object(u.b)(t,r);for(var a in x._filters.length=0,x.set({}),x._currentState=o,x._originalState=t,x._targetState=e,x._easing=s,X)X[a].doesApply(x)&&x._filters.push(X[a]);x._applyFilter("tweenCreated"),x._applyFilter("beforeTween");var c=Object(u.e)(n,o,t,e,1,i,s);return x._applyFilter("afterTween"),c};function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){var n=e.get(t);if(!n)throw new TypeError("attempted to get private field on non-instance");return n.get?n.get.call(t):n.value}var L=new WeakMap,V=function(){function t(){F(this,t),L.set(this,{writable:!0,value:[]});for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];n.forEach(this.add.bind(this))}var e,n;return e=t,(n=[{key:"add",value:function(t){return C(this,L).push(t),t}},{key:"remove",value:function(t){var e=C(this,L).indexOf(t);return~e&&C(this,L).splice(e,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return C(this,L).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return C(this,L).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return C(this,L).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return C(this,L).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return C(this,L).forEach((function(e){return e.stop(t)})),this}},{key:"tweenables",get:function(){return function(t){return function(t){if(Array.isArray(t))return Y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(C(this,L))}},{key:"promises",get:function(){return C(this,L).map((function(t){return t._promise}))}}])&&I(e.prototype,n),t}(),N=function(t,e,n,r,i){var o=function(t,e,n,r){return function(i){return function(t,e,n,r,i,o){var u,s,a,c=0,h=0,l=0,f=function(t){return((c*t+h)*t+l)*t},d=function(t){return(3*c*t+2*h)*t+l},p=function(t){return t>=0?t:0-t};return c=1-(l=3*e)-(h=3*(r-e)-l),u=1-(a=3*n)-(s=3*(i-n)-a),function(t){return((u*t+s)*t+a)*t}(function(t,e){var n,r,i,o,u,s;for(i=t,s=0;s<8;s++){if(o=f(i)-t,p(o)<e)return i;if(u=d(i),p(u)<1e-6)break;i-=o/u}if((i=t)<(n=0))return n;if(i>(r=1))return r;for(;n<r;){if(o=f(i),p(o-t)<e)return i;t>o?n=i:r=i,i=.5*(r-n)+n}return i}(t,function(t){return 1/(200*t)}(o)))}(i,t,e,n,r,1)}}(e,n,r,i);return o.displayName=t,o.x1=e,o.y1=n,o.x2=r,o.y2=i,u.a.formulas[t]=o},q=function(t){return delete u.a.formulas[t]};u.a.filters.token=r}])},function(t,e,n){t.exports=n(4)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),o=n(1),u=["January","February","March","April","May","June","July","August","September","October","November","December"],s=function(t,e,n){return Math.max(e,Math.min(t,n))};n(3);function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=Object.assign({},t.defaults,n),this.element=e,this.opts=n,this.touchStartX=null,this.touchStartY=null,this.touchEndX=null,this.touchEndY=null,this.velocityX=null,this.velocityY=null,this.longPressTimer=null,this.doubleTapWaiting=!1,this.handlers={panstart:[],panmove:[],panend:[],swipeleft:[],swiperight:[],swipeup:[],swipedown:[],tap:[],doubletap:[],longpress:[]},this._onTouchStart=this.onTouchStart.bind(this),this._onTouchMove=this.onTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.element.addEventListener("touchstart",this._onTouchStart,h),this.element.addEventListener("touchmove",this._onTouchMove,h),this.element.addEventListener("touchend",this._onTouchEnd,h),this.opts.mouseSupport&&!("ontouchstart"in window)&&(this.element.addEventListener("mousedown",this._onTouchStart,h),document.addEventListener("mousemove",this._onTouchMove,h),document.addEventListener("mouseup",this._onTouchEnd,h))}var e,n,r;return e=t,(n=[{key:"destroy",value:function(){this.element.removeEventListener("touchstart",this._onTouchStart),this.element.removeEventListener("touchmove",this._onTouchMove),this.element.removeEventListener("touchend",this._onTouchEnd),this.element.removeEventListener("mousedown",this._onTouchStart),document.removeEventListener("mousemove",this._onTouchMove),document.removeEventListener("mouseup",this._onTouchEnd),clearTimeout(this.longPressTimer),clearTimeout(this.doubleTapTimer)}},{key:"on",value:function(t,e){var n=this;if(this.handlers[t])return this.handlers[t].push(e),{type:t,fn:e,cancel:function(){return n.off(t,e)}}}},{key:"off",value:function(t,e){if(this.handlers[t]){var n=this.handlers[t].indexOf(e);-1!==n&&this.handlers[t].splice(n,1)}}},{key:"fire",value:function(t,e){for(var n=0;n<this.handlers[t].length;n++)this.handlers[t][n](e)}},{key:"onTouchStart",value:function(t){var e=this;this.thresholdX=this.opts.threshold("x",this),this.thresholdY=this.opts.threshold("y",this),this.disregardVelocityThresholdX=this.opts.disregardVelocityThreshold("x",this),this.disregardVelocityThresholdY=this.opts.disregardVelocityThreshold("y",this),this.touchStartX="mousedown"===t.type?t.screenX:t.changedTouches[0].screenX,this.touchStartY="mousedown"===t.type?t.screenY:t.changedTouches[0].screenY,this.touchMoveX=null,this.touchMoveY=null,this.touchEndX=null,this.touchEndY=null,this.longPressTimer=setTimeout((function(){return e.fire("longpress",t)}),this.opts.longPressTime),this.fire("panstart",t)}},{key:"onTouchMove",value:function(t){if("mousemove"!==t.type||this.touchStartX&&null===this.touchEndX){var e=("mousemove"===t.type?t.screenX:t.changedTouches[0].screenX)-this.touchStartX;this.velocityX=e-this.touchMoveX,this.touchMoveX=e;var n=("mousemove"===t.type?t.screenY:t.changedTouches[0].screenY)-this.touchStartY;this.velocityY=n-this.touchMoveY,this.touchMoveY=n;var r=Math.abs(this.touchMoveX),i=Math.abs(this.touchMoveY);this.swipingHorizontal=r>this.thresholdX,this.swipingVertical=i>this.thresholdY,this.swipingDirection=r>i?this.swipingHorizontal?"horizontal":"pre-horizontal":this.swipingVertical?"vertical":"pre-vertical",Math.max(r,i)>this.opts.pressThreshold&&clearTimeout(this.longPressTimer),this.fire("panmove",t)}}},{key:"onTouchEnd",value:function(t){var e=this;if("mouseup"!==t.type||this.touchStartX&&null===this.touchEndX){this.touchEndX="mouseup"===t.type?t.screenX:t.changedTouches[0].screenX,this.touchEndY="mouseup"===t.type?t.screenY:t.changedTouches[0].screenY,this.fire("panend",t),clearTimeout(this.longPressTimer);var n=this.touchEndX-this.touchStartX,r=Math.abs(n),i=this.touchEndY-this.touchStartY,o=Math.abs(i);r>this.thresholdX||o>this.thresholdY?(this.swipedHorizontal=this.opts.diagonalSwipes?Math.abs(n/i)<=this.opts.diagonalLimit:r>=o&&r>this.thresholdX,this.swipedVertical=this.opts.diagonalSwipes?Math.abs(i/n)<=this.opts.diagonalLimit:o>r&&o>this.thresholdY,this.swipedHorizontal&&(n<0?(this.velocityX<-this.opts.velocityThreshold||n<-this.disregardVelocityThresholdX)&&this.fire("swipeleft",t):(this.velocityX>this.opts.velocityThreshold||n>this.disregardVelocityThresholdX)&&this.fire("swiperight",t)),this.swipedVertical&&(i<0?(this.velocityY<-this.opts.velocityThreshold||i<-this.disregardVelocityThresholdY)&&this.fire("swipeup",t):(this.velocityY>this.opts.velocityThreshold||i>this.disregardVelocityThresholdY)&&this.fire("swipedown",t))):r<this.opts.pressThreshold&&o<this.opts.pressThreshold&&(this.doubleTapWaiting?(this.doubleTapWaiting=!1,clearTimeout(this.doubleTapTimer),this.fire("doubletap",t)):(this.doubleTapWaiting=!0,this.doubleTapTimer=setTimeout((function(){return e.doubleTapWaiting=!1}),this.opts.doubleTapTime),this.fire("tap",t)))}}}])&&a(e.prototype,n),r&&a(e,r),t}();c.defaults={threshold:function(t,e){return Math.max(25,Math.floor(.15*("x"===t?window.innerWidth||document.body.clientWidth:window.innerHeight||document.body.clientHeight)))},velocityThreshold:10,disregardVelocityThreshold:function(t,e){return Math.floor(.5*("x"===t?e.element.clientWidth:e.element.clientHeight))},pressThreshold:8,diagonalSwipes:!1,diagonalLimit:Math.tan(.375*Math.PI),longPressTime:500,doubleTapTime:300,mouseSupport:!0};var h=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){h={passive:!0}}}))}catch(v){}var l=function(t){var e=t.children,n=t.className,o=t.id,u=t.onPan,s=t.onPanEnd,a=t.style,h=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new c(h.current);return t.on("panmove",(function(e){u(t,e)})),t.on("panend",(function(e){s(t,e)})),function(){t.destroy()}}),[]),i.a.createElement("div",{id:o,className:n,ref:h,style:a},e)};l.defaultProps={className:"",id:"",onPan:function(){},onPanEnd:function(){},style:{}};var f=l,d=function(t){var e=t.height,n=Object(r.useRef)(new o.Tweenable).current,a=Object(r.useRef)(null),c=Object(r.useRef)(!1),h=Object(r.useRef)(1),l=Object(r.useRef)(h.current*e*-1),d=u.length,p=Object(r.useCallback)((function(t,r){t!==r&&(n.isPlaying()&&(n.pause(),n.stop()),n.setConfig({from:{x:t},to:{x:r},duration:150,easing:"easeOutQuad",step:function(t){var n=t.x*e*-1;a.current.style.top="".concat(n,"px"),l.current=n}}),n.tween().then((function(){h.current=r,c.current=!1,console.log("onChange",u[r])})))}),[e,n]);return Object(r.useEffect)((function(){p(0,h.current)}),[p]),i.a.createElement("div",{className:"scrollpicker",style:{height:5*e}},i.a.createElement(f,{className:"scrollpicker__container",style:{height:e},onPan:function(t){var r=t.touchMoveY;if(!n.isPlaying()){c.current=!0;var i=h.current*e*-1;l.current=i+r,a.current.style.top="".concat(l.current,"px")}},onPanEnd:function(t,n){var r=t.touchMoveY,i=l.current/e*-1,o=n.target.getAttribute("data-index");if(r&&Math.abs(r)>10){var u=Math.round(i);p(i,s(u,0,d-1))}else void 0!==o&&p(i,o)}},i.a.createElement("div",{className:"scrollpicker__body",style:{height:e*u.length},ref:a},u.map((function(t,n){return i.a.createElement("div",{key:t,className:"scrollpicker__pick",style:{height:e},"data-index":n},t)})))))};d.defaultProps={height:60};var p=d;n.d(e,"ScrollPicker",(function(){return p}));e.default=p}])}));
//# sourceMappingURL=index.js.map