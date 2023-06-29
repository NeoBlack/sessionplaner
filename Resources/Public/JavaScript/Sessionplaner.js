"use strict";function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function _regeneratorRuntime(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),s=new x(o||[]);return n(i,"_invoke",{value:_(t,r,s)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function d(){}function p(){}function h(){}var v={};u(v,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(P([])));g&&g!==e&&r.call(g,a)&&(v=g);var m=h.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,a,i,s){var u=l(t[n],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==_typeof(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,s)}),(function(t){o("throw",t,i,s)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,s)}))}s(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===f)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,n(m,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=u(h,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,s,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(m),u(m,s,"Generator"),u(m,a,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function asyncGeneratorStep(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){asyncGeneratorStep(a,n,o,i,s,"next",t)}function s(t){asyncGeneratorStep(a,n,o,i,s,"throw",t)}i(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}require(["TYPO3/CMS/Backend/Notification"],(function(t){var e=function(){function e(){var t=this;_classCallCheck(this,e),document.querySelectorAll('[data-sessionplaner-draggable="true"]').forEach((function(t){t.addEventListener("dragstart",(function(t){var e={uid:t.target.dataset.sessionUid};t.dataTransfer.setData("application/json",JSON.stringify(e)),t.dataTransfer.effectAllowed="move"}))})),document.querySelectorAll("[data-sessionplaner-dragtarget]").forEach((function(e){e.addEventListener("dragleave",(function(t){t.stopPropagation(),e.classList.remove("dragtarget")}),{capture:!0,passive:!0}),e.addEventListener("dragover",(function(t){t.stopPropagation();var r=e.dataset.sessionplanerDragtarget,n=!1;("slot"===r&&0===e.children.length||"stash"===r)&&(n=!0),n&&(t.preventDefault(),t.dataTransfer.dropEffect="move",e.classList.add("dragtarget"))}),{capture:!0}),e.addEventListener("drop",(function(r){var n;r.stopPropagation(),e.classList.remove("dragtarget");var o,a,i,s=JSON.parse(null!==(n=r.dataTransfer.getData("application/json"))&&void 0!==n?n:"{}"),u=document.querySelector('[data-session-uid="'+s.uid+'"]');u&&t.updateSession(u,{room:null!==(o=r.target.dataset.roomUid)&&void 0!==o?o:null,slot:null!==(a=r.target.dataset.slotUid)&&void 0!==a?a:null,day:null!==(i=r.target.dataset.dayUid)&&void 0!==i?i:null})}))}))}var r;return _createClass(e,[{key:"updateSession",value:function(e,r){var n,o,a,i=this,s={session:{uid:e.dataset.sessionUid,room:null!==(n=r.room)&&void 0!==n?n:null,slot:null!==(o=r.slot)&&void 0!==o?o:null,day:null!==(a=r.day)&&void 0!==a?a:null}};this.postData("evoweb_sessionplaner_update",s).then((function(r){var n,o,a;"success"===r.status?(e.dataset.sessionRoom=null!==(n=r.data.session.room)&&void 0!==n?n:null,e.dataset.sessionSlot=null!==(o=r.data.session.slot)&&void 0!==o?o:null,e.dataset.sessionDay=null!==(a=r.data.session.day)&&void 0!==a?a:null,i.updateSessionPosition(e)):t.error("Error",r.message)}))}},{key:"updateSessionPosition",value:function(t){var e="";e+='[data-sessionplaner-dragtarget="slot"]',e+='[data-room-uid="'+t.dataset.sessionRoom+'"]',e+='[data-slot-uid="'+t.dataset.sessionSlot+'"]',e+='[data-slot-uid="'+t.dataset.sessionSlot+'"]';var r=document.querySelector(e),n=document.querySelector('[data-sessionplaner-dragtarget="stash"]');r?r.append(t):n&&n.append(t)}},{key:"postData",value:(r=_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,r,n,o=arguments;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:{},t.next=4,fetch(TYPO3.settings.ajaxUrls[e],{method:"POST",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 4:return n=t.sent,t.abrupt("return",n.json());case 6:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})}]),e}();new e}));