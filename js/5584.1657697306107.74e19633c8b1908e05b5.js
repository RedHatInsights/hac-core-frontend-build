(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[5584,5697,1581,4692],{92703:(t,e,n)=>{"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,c){if(c!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:(t,e,n)=>{t.exports=n(92703)()},50414:t=>{"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},89142:(t,e,n)=>{"use strict";n.d(e,{w:()=>r});const r=(t,e)=>{return n=void 0,r=void 0,i=function*(){try{return(yield fetch(`${t?"/beta":""}/apps/${e}/plugins.json`)).json()}catch(t){return console.error("Failed to fetch plugin data",t),[]}},new((o=void 0)||(o=Promise))((function(t,e){function c(t){try{a(i.next(t))}catch(t){e(t)}}function u(t){try{a(i.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(c,u)}a((i=i.apply(n,r||[])).next())}));var n,r,o,i}},4692:(t,e,n)=>{"use strict";n.r(e),n.d(e,{createStore:()=>s,pluginStore:()=>f});var r=n(89142),o=n(4147),i=n(94232),c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))};const u={"@openshift/dynamic-plugin-sdk-utils":()=>c(void 0,void 0,void 0,(function*(){return()=>n(78988)})),"@openshift/dynamic-plugin-sdk":()=>c(void 0,void 0,void 0,(function*(){return()=>n(94232)})),"@patternfly/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>n(63366)})),"@patternfly/react-table":()=>c(void 0,void 0,void 0,(function*(){return()=>n(33516)})),react:()=>c(void 0,void 0,void 0,(function*(){return()=>n(93264)})),redux:()=>c(void 0,void 0,void 0,(function*(){return()=>n(97779)})),"react-helmet":()=>c(void 0,void 0,void 0,(function*(){return()=>n(64593)})),"react-i18next":()=>c(void 0,void 0,void 0,(function*(){return()=>n(26828)})),"@scalprum/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>n(54025)})),"react-redux":()=>c(void 0,void 0,void 0,(function*(){return()=>n(6565)})),"react-router":()=>c(void 0,void 0,void 0,(function*(){return()=>n(96974)})),"react-router-dom":()=>c(void 0,void 0,void 0,(function*(){return()=>n(76969)}))},a=Object.keys(u).reduce(((t,e)=>Object.assign(Object.assign({},t),{[e]:{"*":{get:u[e],loaded:!0}}})),{}),s=()=>{const t=new i.PluginLoader({fetchImpl:(t,e)=>fetch(t,e),sharedScope:a});t.registerPluginEntryCallback();const e=new i.PluginStore;return e.setLoader(t),(0,r.w)(!0,o.Kn.b).then((t=>{t.forEach((({name:t,pathPrefix:n="/api/plugins"})=>{const r=`/beta${n}/${t}/`;e.loadPlugin(r)}))})),e},f=s()},30907:(t,e,n)=>{"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:()=>r})},15671:(t,e,n)=>{"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,{Z:()=>r})},43144:(t,e,n)=>{"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(e,{Z:()=>o})},87462:(t,e,n)=>{"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}n.d(e,{Z:()=>r})},45987:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(35245);function o(t,e){if(null==t)return{};var n,o,i=(0,r.Z)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},35245:(t,e,n)=>{"use strict";function r(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:()=>r})},71002:(t,e,n)=>{"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}n.d(e,{Z:()=>r})},40181:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(30907);function o(t,e){if(t){if("string"==typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}},4147:t=>{"use strict";t.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/5584.105cf57fceaf39d547f4b5456a4ec56a.js.map