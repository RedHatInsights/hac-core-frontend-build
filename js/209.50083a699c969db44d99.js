"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[209],{55140:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(4942),i=n(54025);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const a=function(e){var t,n=(0,i.useScalprum)(),r=(null===(t=n.api)||void 0===t?void 0:t.chrome)||{};return r=c(c({},r),{},{initialized:n.initialized}),"function"==typeof e?e(r):r}},41209:(e,t,n)=>{n.r(t),n.d(t,{useNavigation:()=>p,default:()=>f});var r=n(93264),i=n(88817),o=n(55140),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function a(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,a)}s((r=r.apply(e,t||[])).next())}))};const a=["console.navigation/href","console.navigation/section"],s=e=>"fulfilled"===e.status&&Boolean(e.value),u=e=>a.includes(e.type),l=({dynamicNav:e,currentNamespace:t,base:n})=>c(void 0,void 0,void 0,(function*(){const[r,o]=e.split("/");let a,l=[];try{l=yield((e="")=>c(void 0,void 0,void 0,(function*(){return(yield Promise.allSettled(i.g.flatMap((({name:t,pathPrefix:n="/api/plugins"})=>c(void 0,void 0,void 0,(function*(){const r=`${e}${n}/${t}/plugin-manifest.json`,i=yield fetch(r);if(200!==i.status){const e=`${r} - ${i.status} - ${i.statusText}`;throw console.error(e),new Error(e)}return(yield i.json()).extensions})))))).filter(s).map((({value:e})=>e)).flat().filter(u)})))(n),a=(([e,t],n,r)=>r.filter((({type:e,properties:n})=>e.includes("console.navigation/href")&&n.section===t)).map((r=>({appId:e,href:`/${n}${t?`/${t}`:""}${r.properties.href}`,title:r.properties.name}))))([r,o],t,l),0===a.length&&(a=[{isHidden:!0}])}catch(e){a=[{isHidden:!0}],console.error("Problem fetching extensions",e)}const{properties:p}=l.find((({type:e,properties:t})=>"console.navigation/section"===e&&t.id===o))||{};return p?{expandable:!0,title:p.name,routes:a}:a})),p=({dynamicNav:e,currentNamespace:t})=>{const[n,i]=r.useState(),c=r.useRef(!1),{isBeta:a}=(0,o.Z)();return r.useEffect((()=>(e&&l({dynamicNav:e,currentNamespace:t,base:a()?"/beta":""}).then((e=>{c.current||i(e)})),()=>{c.current=!0})),[e,t]),n},f=l},88817:(e,t,n)=>{n.d(t,{g:()=>r});const r=[{name:"console-demo-plugin"},{name:"sources",pathPrefix:"/apps"}]},4942:(e,t,n)=>{function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=../sourcemaps/209.077c679a24cc820228aeacefe015c2b0.js.map