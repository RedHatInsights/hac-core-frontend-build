"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[4692],{89142:(n,t,e)=>{e.d(t,{w:()=>o});const o=(n,t)=>{return e=void 0,o=void 0,r=function*(){var e;try{const o=yield fetch(`${n?"/beta":""}/apps/${t}/plugins.json`);if(!(null===(e=o.headers.get("content-type"))||void 0===e?void 0:e.includes("application/json")))throw new Error("plugin data response is not type application/json");return yield o.json()}catch(n){return console.error("Failed to fetch plugin data",n),[]}},new((i=void 0)||(i=Promise))((function(n,t){function c(n){try{a(r.next(n))}catch(n){t(n)}}function u(n){try{a(r.throw(n))}catch(n){t(n)}}function a(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(c,u)}a((r=r.apply(e,o||[])).next())}));var e,o,i,r}},4692:(n,t,e)=>{e.r(t),e.d(t,{createStore:()=>d,pluginStore:()=>v});var o=e(89142),i=e(4147),r=e(20462),c=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};const u={"@openshift/dynamic-plugin-sdk-utils":()=>c(void 0,void 0,void 0,(function*(){return()=>e(33377)})),"@openshift/dynamic-plugin-sdk":()=>c(void 0,void 0,void 0,(function*(){return()=>e(20462)})),"@patternfly/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>e(63366)})),"@patternfly/react-table":()=>c(void 0,void 0,void 0,(function*(){return()=>e(33516)})),react:()=>c(void 0,void 0,void 0,(function*(){return()=>e(93264)})),redux:()=>c(void 0,void 0,void 0,(function*(){return()=>e(97779)})),"react-helmet":()=>c(void 0,void 0,void 0,(function*(){return()=>e(64593)})),"react-i18next":()=>c(void 0,void 0,void 0,(function*(){return()=>e(26828)})),"@scalprum/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>e(54025)})),"react-redux":()=>c(void 0,void 0,void 0,(function*(){return()=>e(6565)})),"react-router":()=>c(void 0,void 0,void 0,(function*(){return()=>e(96974)})),"react-router-dom":()=>c(void 0,void 0,void 0,(function*(){return()=>e(76969)}))},a=Object.keys(u).reduce(((n,t)=>Object.assign(Object.assign({},n),{[t]:{"*":{get:u[t],loaded:!0}}})),{}),d=()=>{const n=new r.PluginLoader({fetchImpl:(n,t)=>fetch(n,t),sharedScope:a});n.registerPluginEntryCallback();const t=new r.PluginStore;return t.setLoader(n),(0,o.w)(window.insights.chrome.isBeta(),i.Kn.b).then((n=>{n.forEach((({name:n,pathPrefix:e="/api/plugins"})=>{const o=`/beta${e}/${n}/`;t.loadPlugin(o)}))})),t},v=d()},4147:n=>{n.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/4692.e9ffba986cca3c0d0f07016834378cce.js.map