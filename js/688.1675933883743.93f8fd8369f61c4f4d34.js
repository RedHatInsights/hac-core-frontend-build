"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[688,313],{40688:(e,n,t)=>{t.r(n),t.d(n,{GLOBAL_NAMESPACE:()=>a,getScalprum:()=>d,initSharedScope:()=>f,getSharedScope:()=>p,handlePrefetchPromise:()=>h,getCachedModule:()=>g,setPendingPrefetch:()=>v,getPendingPrefetch:()=>b,removePrefetch:()=>w,resolvePendingInjection:()=>P,setPendingLoading:()=>y,getPendingLoading:()=>m,preloadModule:()=>S,initialize:()=>M,getAppData:()=>x,processManifest:()=>k});var r,o=t(5764),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,u)}a((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},a="__scalprum__",s="default",l=function(e,n){return e+"#"+n},d=function(){if(!r)throw new Error("Scalprum was not initialized! Call the initialize function first.");return r},f=function(){return c(void 0,void 0,void 0,(function(){return u(this,(function(e){return[2,t.I(s)]}))}))},p=function(){if(!Object.keys(t.S).includes(s))throw new Error("Attempt to access share scope object before its initialization");return t.S.default},h=function(e,n){n&&(v(e,n),n.finally((function(){w(e)})))},g=function(e,n){var t=l(e,n);try{var r=d().exposedModules[t];if(!n)return{};var o=e+"#"+n,i=b(o);return i?{cachedModule:r,prefetchPromise:i}:(null==r?void 0:r.prefetch)?(h(o,r.prefetch(d().api)),{cachedModule:r,prefetchPromise:b(o)}):{cachedModule:r}}catch(t){return console.warn("Unable to retrieve cached module "+e+" "+n+". New module will be loaded.",t),{}}},v=function(e,n){d().pendingPrefetch[e]=n},b=function(e){var n;return null===(n=d().pendingPrefetch)||void 0===n?void 0:n[e]},w=function(e){delete d().pendingPrefetch[e]},P=function(e){delete d().pendingInjections[e]},y=function(e,n,t){return d().pendingLoading[e+"#"+n]=t,t.then((function(t){return delete d().pendingLoading[e+"#"+n],t})).catch((function(){delete d().pendingLoading[e+"#"+n]})),t},m=function(e,n){return d().pendingLoading[e+"#"+n]},S=function(e,n,t){return c(void 0,void 0,void 0,(function(){var r,o,i,c;return u(this,(function(u){return r=x(e).manifestLocation,o=g(e,n).cachedModule,!(i=m(e,n))&&0==Object.keys(o||{}).length&&r&&(i=k(r,e,n,t).then((function(){return d().pluginStore.getExposedModule(e,n)}))),!b(c=e+"#"+n)&&(null==o?void 0:o.prefetch)&&h(c,o.prefetch(d().api)),[2,y(e,n,Promise.resolve(i))]}))}))},M=function(e){var n=e.appsConfig,t=e.api,c=e.options,u=e.pluginStoreFeatureFlags,a=void 0===u?{}:u,s=e.pluginLoaderOptions,l=void 0===s?{}:s,d=e.pluginStoreOptions,f=void 0===d?{}:d;if(r)return r;var h=i({cacheTimeout:120},c),g=new o.PluginLoader(i({sharedScope:p(),getPluginEntryModule:function(e){var n=e.name;return window[n]}},l)),v=new o.PluginStore(f);return g.registerPluginEntryCallback(),v.setLoader(g),v.setFeatureFlags(a),r={appsConfig:n,pendingInjections:{},pendingLoading:{},pendingPrefetch:{},exposedModules:{},scalprumOptions:h,api:t||{},pluginStore:v}},x=function(e){return d().appsConfig[e]},j=function(e,n){d().exposedModules[e]=n},L=function(e){delete d().pendingInjections[e]};function k(e,n,t,r){return c(this,void 0,void 0,(function(){var o,i,a,s=this;return u(this,(function(f){switch(f.label){case 0:return o=function(e){return d().pendingInjections[e]}(n),i=d().pluginStore,o?[4,o]:[3,3];case 1:return f.sent(),[4,i.getExposedModule(n,t)];case 2:return a=f.sent(),j(l(n,t),a),[2];case 3:return o=new Promise((function(o,a){return c(s,void 0,void 0,(function(){var c,s,d,f,p,h,g;return u(this,(function(u){switch(u.label){case 0:return(c=new Headers).append("Pragma","no-cache"),c.append("Cache-Control","no-cache"),c.append("expires","0"),[4,fetch(e,{method:"GET",headers:c})];case 1:if((s=u.sent()).ok)return[3,7];d="Unable to process manifest",u.label=2;case 2:return u.trys.push([2,4,,6]),[4,s.json()];case 3:return d=u.sent(),[3,6];case 4:return u.sent(),[4,s.text()];case 5:return d=u.sent(),[3,6];case 6:return[2,a(d)];case 7:return[4,s.json()];case 8:return f=u.sent(),p=r?r(f):f[n].entry,[4,i.loadPlugin(document.location.origin,{extensions:[],loadScripts:p,name:n,registrationMethod:"custom",version:"1.0.0"})];case 9:u.sent(),u.label=10;case 10:return u.trys.push([10,12,,13]),[4,i.getExposedModule(n,t)];case 11:return h=u.sent(),j(l(n,t),h),[3,13];case 12:return g=u.sent(),L(n),[2,a(g)];case 13:return o(),[2]}}))}))})),function(e,n){d().pendingInjections[e]=n}(n,o),[4,o];case 4:return f.sent(),L(n),[2]}}))}))}}}]);
//# sourceMappingURL=../sourcemaps/688.c62b11060ce26c4da28249eddc54349a.js.map