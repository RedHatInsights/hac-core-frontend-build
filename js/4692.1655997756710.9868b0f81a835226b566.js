"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[4692],{89142:(n,t,e)=>{e.d(t,{w:()=>o});const o=(n,t)=>{return e=void 0,o=void 0,r=function*(){try{return(yield fetch(`${n?"/beta":""}/apps/${t}/plugins.json`)).json()}catch(n){return console.error("Failed to fetch plugin data",n),[]}},new((i=void 0)||(i=Promise))((function(n,t){function c(n){try{d(r.next(n))}catch(n){t(n)}}function u(n){try{d(r.throw(n))}catch(n){t(n)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(c,u)}d((r=r.apply(e,o||[])).next())}));var e,o,i,r}},4692:(n,t,e)=>{e.r(t),e.d(t,{createStore:()=>a,pluginStore:()=>v});var o=e(89142),i=e(4147),r=e(438),c=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{d(o.next(n))}catch(n){r(n)}}function u(n){try{d(o.throw(n))}catch(n){r(n)}}function d(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}d((o=o.apply(n,t||[])).next())}))};const u={"@openshift/dynamic-plugin-sdk-utils":()=>c(void 0,void 0,void 0,(function*(){return()=>e(6857)})),"@openshift/dynamic-plugin-sdk":()=>c(void 0,void 0,void 0,(function*(){return()=>e(438)})),"@patternfly/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>e(63366)})),"@patternfly/react-table":()=>c(void 0,void 0,void 0,(function*(){return()=>e(33516)})),react:()=>c(void 0,void 0,void 0,(function*(){return()=>e(93264)})),redux:()=>c(void 0,void 0,void 0,(function*(){return()=>e(97779)})),"react-helmet":()=>c(void 0,void 0,void 0,(function*(){return()=>e(64593)})),"react-i18next":()=>c(void 0,void 0,void 0,(function*(){return()=>e(26828)})),"@scalprum/react-core":()=>c(void 0,void 0,void 0,(function*(){return()=>e(54025)})),"react-redux":()=>c(void 0,void 0,void 0,(function*(){return()=>e(6565)})),"react-router":()=>c(void 0,void 0,void 0,(function*(){return()=>e(16550)})),"react-router-dom":()=>c(void 0,void 0,void 0,(function*(){return()=>e(55399)}))},d=Object.keys(u).reduce(((n,t)=>Object.assign(Object.assign({},n),{[t]:{"*":{get:u[t],loaded:!0}}})),{}),a=()=>{const n=new r.PluginLoader({fetchImpl:(n,t)=>fetch(n,t),sharedScope:d});n.registerPluginEntryCallback();const t=new r.PluginStore;return t.setLoader(n),(0,o.w)(!0,i.Kn.b).then((n=>{n.forEach((({name:n,pathPrefix:e="/api/plugins"})=>{const o=`/beta${e}/${n}/`;t.loadPlugin(o)}))})),t},v=a()},4147:n=>{n.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/4692.c6b1397d7b28f4c7affc5e08e2121462.js.map