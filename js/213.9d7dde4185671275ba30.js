(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[213,692],{92703:(t,e,r)=>{"use strict";var n=r(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,r,o,i,c){if(c!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},45697:(t,e,r)=>{t.exports=r(92703)()},50414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},89142:(t,e,r)=>{"use strict";r.d(e,{w:()=>n});const n=(t,e)=>{return r=void 0,n=void 0,i=function*(){try{return(yield fetch(`${t?"/beta":""}/apps/${e}/plugins.json`)).json()}catch(t){return console.error("Failed to fetch plugin data",t),[]}},new((o=void 0)||(o=Promise))((function(t,e){function c(t){try{a(i.next(t))}catch(t){e(t)}}function u(t){try{a(i.throw(t))}catch(t){e(t)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof o?r:new o((function(t){t(r)}))).then(c,u)}a((i=i.apply(r,n||[])).next())}));var r,n,o,i}},4692:(t,e,r)=>{"use strict";r.r(e),r.d(e,{createStore:()=>s,pluginStore:()=>f});var n=r(89142),o=r(4147),i=r(88950),c=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function c(t){try{a(n.next(t))}catch(t){i(t)}}function u(t){try{a(n.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(c,u)}a((n=n.apply(t,e||[])).next())}))};const u={"@openshift/dynamic-plugin-sdk-utils":()=>c(void 0,void 0,void 0,(function*(){return()=>r(35861)})),"@openshift/dynamic-plugin-sdk":()=>c(void 0,void 0,void 0,(function*(){return()=>r(88950)})),"@patternfly/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>r(97066)})),"@patternfly/react-table":()=>c(void 0,void 0,void 0,(function*(){return()=>r(41436)})),react:()=>c(void 0,void 0,void 0,(function*(){return()=>r(93264)})),redux:()=>c(void 0,void 0,void 0,(function*(){return()=>r(97779)})),"react-helmet":()=>c(void 0,void 0,void 0,(function*(){return()=>r(64593)})),"react-i18next":()=>c(void 0,void 0,void 0,(function*(){return()=>r(86162)})),"@scalprum/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>r(54025)})),"react-redux":()=>c(void 0,void 0,void 0,(function*(){return()=>r(6565)})),"react-router":()=>c(void 0,void 0,void 0,(function*(){return()=>r(16550)})),"react-router-dom":()=>c(void 0,void 0,void 0,(function*(){return()=>r(55399)}))},a=Object.keys(u).reduce(((t,e)=>Object.assign(Object.assign({},t),{[e]:{"*":{get:u[e],loaded:!0}}})),{}),s=()=>{const t=new i.PluginLoader({fetchImpl:(t,e)=>fetch(t,e),getSharedScope:()=>a});t.registerPluginEntryCallback();const e=new i.PluginStore;return e.setLoader(t),(0,n.w)(!0,o.Kn.b).then((t=>{t.forEach((({name:t,pathPrefix:r="/api/plugins"})=>{const n=`/beta${r}/${t}/`;e.loadPlugin(n)}))})),e},f=s()},30907:(t,e,r)=>{"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:()=>n})},15671:(t,e,r)=>{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,{Z:()=>n})},43144:(t,e,r)=>{"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,{Z:()=>o})},87462:(t,e,r)=>{"use strict";function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},n.apply(this,arguments)}r.d(e,{Z:()=>n})},45987:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(63366);function o(t,e){if(null==t)return{};var r,o,i=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)r=c[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},63366:(t,e,r)=>{"use strict";function n(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:()=>n})},89611:(t,e,r)=>{"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}r.d(e,{Z:()=>n})},70885:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(40181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],c=!0,u=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},71002:(t,e,r)=>{"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:()=>n})},40181:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var n=r(30907);function o(t,e){if(t){if("string"==typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}},4147:t=>{"use strict";t.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/213.d7da5ec6fd0a7b5d5d46acf166f9da89.js.map