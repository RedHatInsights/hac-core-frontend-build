"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[4692],{89142:(t,n,e)=>{e.d(n,{w:()=>i});const i=(t,n)=>{return e=void 0,i=void 0,r=function*(){var e;try{const i=yield fetch(`${t?"/beta":""}/apps/${n}/plugins.json`);if(!(null===(e=i.headers.get("content-type"))||void 0===e?void 0:e.includes("application/json")))throw new Error("plugin data response is not type application/json");return yield i.json()}catch(t){return console.error("Failed to fetch plugin data",t),[]}},new((o=void 0)||(o=Promise))((function(t,n){function a(t){try{s(r.next(t))}catch(t){n(t)}}function c(t){try{s(r.throw(t))}catch(t){n(t)}}function s(n){var e;n.done?t(n.value):(e=n.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,c)}s((r=r.apply(e,i||[])).next())}));var e,i,o,r}},4692:(t,n,e)=>{e.r(n),e.d(n,{createStore:()=>d,pluginStore:()=>v});var i=e(89142),o=e(4147),r=e(20462),a=function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function a(t){try{s(i.next(t))}catch(t){r(t)}}function c(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}s((i=i.apply(t,n||[])).next())}))};const c=t=>"string"==typeof t&&!t.startsWith("/hac")&&t.startsWith("/")?`/hac${t}`:"string"!=typeof t&&t.pathname&&!t.pathname.startsWith("/hac")?Object.assign(Object.assign({},t),{pathname:`/hac${t.pathname}`}):t,s={"@openshift/dynamic-plugin-sdk-utils":()=>a(void 0,void 0,void 0,(function*(){return()=>e(33377)})),"@openshift/dynamic-plugin-sdk":()=>a(void 0,void 0,void 0,(function*(){return()=>e(20462)})),"@patternfly/react-core":()=>a(void 0,void 0,void 0,(function*(){return()=>e(63366)})),"@patternfly/react-table":()=>a(void 0,void 0,void 0,(function*(){return()=>e(33516)})),react:()=>a(void 0,void 0,void 0,(function*(){return()=>e(93264)})),redux:()=>a(void 0,void 0,void 0,(function*(){return()=>e(97779)})),"react-helmet":()=>a(void 0,void 0,void 0,(function*(){return()=>e(64593)})),"react-i18next":()=>a(void 0,void 0,void 0,(function*(){return()=>e(26828)})),"@scalprum/react-core":()=>a(void 0,void 0,void 0,(function*(){return()=>e(54025)})),"react-redux":()=>a(void 0,void 0,void 0,(function*(){return()=>e(6565)})),"react-router":()=>a(void 0,void 0,void 0,(function*(){return()=>e(96974)})),"react-router-dom":()=>a(void 0,void 0,void 0,(function*(){return()=>{const t=e(76969);return Object.assign(Object.assign({},t),{useNavigate:()=>{const n=t.useNavigate();return(t,e)=>{n(c(t),e)}},Link:n=>{const i=e(93264),o=t.Link;return i.createElement(o,Object.assign(Object.assign({},n),{to:c(n.to)}))},Navigate:n=>{const i=e(93264),o=t.Navigate;return i.createElement(o,Object.assign(Object.assign({},n),{to:c(n.to)}))},NavLink:n=>{const i=e(93264),o=t.NavLink;return i.createElement(o,Object.assign(Object.assign({},n),{to:c(n.to)}))}})}}))},u=Object.keys(s).reduce(((t,n)=>Object.assign(Object.assign({},t),{[n]:{"*":{get:s[n],loaded:!0}}})),{}),d=()=>{const t=new r.PluginLoader({fetchImpl:(t,n)=>fetch(t,n),sharedScope:u});t.registerPluginEntryCallback();const n=new r.PluginStore;return n.setLoader(t),(0,i.w)(window.insights.chrome.isBeta(),o.Kn.b).then((t=>{t.forEach((({name:t,pathPrefix:e="/api/plugins"})=>{const i=`/beta${e}/${t}/`;n.loadPlugin(i)}))})),n},v=d()},4147:t=>{t.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/4692.df61177399c96c4b4d75dd53f4f49c66.js.map