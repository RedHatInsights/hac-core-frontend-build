"use strict";(self.webpackChunkhacCore=self.webpackChunkhacCore||[]).push([[7957],{87957:(n,e,t)=>{t.r(e),t.d(e,{GLOBAL_NAMESPACE:()=>a,asyncLoader:()=>w,getAppData:()=>l,getCachedModule:()=>u,getScalprum:()=>c,initialize:()=>f,injectScript:()=>d,processManifest:()=>p,setPendingInjection:()=>s});var r=function(){return r=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},r.apply(this,arguments)},o=function(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{u(r.next(n))}catch(n){i(n)}}function c(n){try{u(r.throw(n))}catch(n){i(n)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}u((r=r.apply(n,e||[])).next())}))},i=function(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(n,a)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},a="__scalprum__",c=function(){return window[a]},u=function(n,e,t){void 0===t&&(t=!1);var r=window[a].factories[n];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window[a].scalprumOptions.cacheTimeout)delete window[a].factories[n];else{var o=r.modules[e];if(e)return o}},s=function(n,e){window[a].pendingInjections[n]=e},f=function(n){var e=n.appsConfig,t=n.api,o=n.options,i=r({cacheTimeout:120},o);window[a]=r({appsConfig:e,pendingInjections:{},factories:{},scalprumOptions:i},t)},l=function(n){return window[a].appsConfig[n]},d=function(n,e,t){void 0===t&&(t=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=e,r.id=n,t?r.onload=function(){o([n,r])}:s(n,(function(){return o([n,r])})),r.onerror=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];console.log(e),t?i([e,r]):s(n,(function(){return i([e,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function p(n,e,t,r){return o(this,void 0,void 0,(function(){var o,a;return i(this,(function(i){switch(i.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(n,{method:"GET",headers:o})];case 1:return[4,i.sent().json()];case 2:return a=i.sent(),[2,Promise.all(Object.entries(a).filter((function(n){var e=n[0];return!t||e===t})).flatMap(r||function(n){return n[1].entry||n}).map((function(n){return d(e,n,!0)})))]}}))}))}function w(n,e){return o(this,void 0,void 0,(function(){var o,c,u,s;return i(this,(function(i){switch(i.label){case 0:if(void 0===n||0===n.length)throw new Error("Scope can't be undefined or empty");if(void 0===e||0===e.length)throw new Error("Module can't be undefined or empty");return e.startsWith("./")||console.warn("Your module "+e+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return i.sent(),[4,(o=window[n]).init(t.S.default)];case 2:return i.sent(),[4,window[n].get(e)];case 3:return c=i.sent(),window[a].factories[n]||(window[a].factories[n]={}),u={init:o.init,modules:r(r({},window[a].factories[n].modules),(s={},s[e]=c(),s)),expiration:new Date},window[a].factories[n]=u,[2,c()]}}))}))}}}]);
//# sourceMappingURL=../sourcemaps/7957.c665aa030f647a11a4e9eff637b86407.js.map