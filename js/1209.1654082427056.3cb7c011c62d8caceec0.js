"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[1209],{55140:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(54025),o=function(){return o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};const r=function(e){var t,n=(0,i.useScalprum)(),r=(null===(t=n.api)||void 0===t?void 0:t.chrome)||{};return r=o(o({},r),{initialized:n.initialized}),"function"==typeof e?e(r):r}},41209:(e,t,n)=>{n.r(t),n.d(t,{useNavigation:()=>d,default:()=>v});var i=n(93264),o=n(89142),r=n(26489),a=n(55140),c=n(4147),s=function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function a(e){try{s(i.next(e))}catch(e){r(e)}}function c(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};const u=["console.navigation/href","console.navigation/section"],l=e=>"fulfilled"===e.status&&Boolean(e.value),f=e=>u.includes(e.type),p=({dynamicNav:e,currentNamespace:t,base:n,isBeta:i})=>s(void 0,void 0,void 0,(function*(){const[a,u]=e.split("/");let p,d=[];try{d=yield((e="",t=(()=>!1))=>s(void 0,void 0,void 0,(function*(){const n=yield(0,o.w)(t(),c.Kn.b);return(yield Promise.allSettled(n.flatMap((({name:t,pathPrefix:n="/api/plugins"})=>s(void 0,void 0,void 0,(function*(){const i=`${e}${n}/${t}/plugin-manifest.json`,o=yield fetch(i);if(200!==o.status){const e=`${i} - ${o.status} - ${o.statusText}`;throw console.error(e),new Error(e)}return(yield o.json()).extensions})))))).filter(l).map((({value:e})=>e)).flat().filter(f)})))(n,i),p=(([e,t],n,i)=>i.filter((({type:e,properties:n})=>e.includes("console.navigation/href")&&n.section===t)).map((i=>({appId:e,href:`/${n}${t?`/${t}`:""}${i.properties.href}`,title:i.properties.name}))))([a,u],t,d),0===p.length&&(p=[{isHidden:!0}])}catch(e){p=[{isHidden:!0}],console.error("Problem fetching extensions",e)}const{properties:v}=d.find((e=>(0,r.isNavSection)(e)))||{};return v?{expandable:!0,title:v.name,routes:p}:p})),d=({dynamicNav:e,currentNamespace:t})=>{const[n,o]=i.useState(),r=i.useRef(!1),{isBeta:c}=(0,a.Z)();return i.useEffect((()=>(e&&p({dynamicNav:e,currentNamespace:t,base:c()?"/beta":"",isBeta:c}).then((e=>{r.current||o(e)})),()=>{r.current=!0})),[e,t]),n},v=p},89142:(e,t,n)=>{n.d(t,{w:()=>i});const i=(e,t)=>{return n=void 0,i=void 0,r=function*(){try{return(yield fetch(`${e?"/beta":""}/apps/${t}/plugins.json`)).json()}catch(e){return console.error("Failed to fetch plugin data",e),[]}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{s(r.next(e))}catch(e){t(e)}}function c(e){try{s(r.throw(e))}catch(e){t(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,c)}s((r=r.apply(n,i||[])).next())}));var n,i,o,r}},4147:e=>{e.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/1209.5468780c023508004c3d53ac03820e41.js.map