(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[2155,5467,9477,3929,9682],{68876:e=>{e.exports={}},807:(e,t,n)=>{"use strict";n.r(t);var r=n(93264),o=n(3644),a=n(76969),s=n(6565),i=n(8738),c=n(68573),l=n.n(c),u=n(84885),d=n(6857),p=n(53894);const h=(0,r.createContext)(void 0);let f;function m(...e){return f=(0,i.JH)({},[p.Z,l(),(0,u.uv)({errorDescriptionKey:["detail","stack"]}),...e.filter(Boolean)],void 0),f.register(d.SDKReducers),f}var v=n(63366);const g=r.lazy((()=>Promise.all([n.e(438),n.e(5107)]).then(n.bind(n,21187)))),y=r.lazy((()=>n.e(6428).then(n.bind(n,43457)))),w=()=>r.createElement(r.Suspense,{fallback:r.createElement(v.Bullseye,null,r.createElement(v.Spinner,null))},r.createElement(a.Routes,null,r.createElement(a.Route,{path:"/*",element:r.createElement(g,null)}),r.createElement(a.Route,{path:"/testK8s",element:r.createElement(y,null)})));var b=n(45054),E=n(93379),P=n(55140);const k=()=>{const e=(0,a.useNavigate)(),{getRegistry:t}=r.useContext(h),n=(0,P.Z)(),o=(0,s.useStore)();return r.useEffect((()=>{t().register({notifications:E.ee});const{on:r}=null==n?void 0:n.init(),o=r("APP_NAVIGATION",(t=>{t.domEvent&&e(`${t.domEvent.href.replace("/hac","")}`)}));return()=>{o()}}),[history,n]),r.createElement(r.Fragment,null,r.createElement(b.ZP,{store:o}),r.createElement(w,null))};var S=n(35240);n(68876);const R=()=>r.createElement(v.Bullseye,null,r.createElement(v.Spinner,null));class x extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{value:new.target.name,enumerable:!1,configurable:!0}),"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack,Object.setPrototypeOf(this,new.target.prototype)}}class O extends x{constructor(e,t,n,r){super(e),this.code=t,this.response=n,this.json=r}static fromCode(e){return new O(O.messages[e],e)}}O.messages={400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",510:"Not Extended",511:"Network Authentication Required"};var j=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))};const A="/api/k8s",T=e=>(t,n)=>j(void 0,void 0,void 0,(function*(){var{pathPrefix:r}=n,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["pathPrefix"]);const a=yield e.getToken();if(!a)return Promise.reject("Could not make k8s call. Unable to find token.");const s=Object.assign(Object.assign({},o),{headers:Object.assign(Object.assign({},o.headers),{Accept:"application/json",Authorization:`Bearer ${a}`})}),i=`${0===(null!=r?r:A).indexOf("/")?"":"/"}${null!=r?r:A}`;try{let e=t;return/^\/\//.test(t)&&(e=t.slice(1)),c=yield fetch(new Request(`${i}${e}`,{credentials:"include"}),s),j(void 0,void 0,void 0,(function*(){if(c.ok)return c;if(401===c.status)throw new O("Invalid token. Are you working with Prod SSO token?",c.status,c);const e=c.headers.get("content-type");if(!e||-1===e.indexOf("json"))throw new O(c.statusText,c.status,c);return 403===c.status?c.json().then((e=>{throw new O(e.message||"Access denied due to cluster policy.",c.status,c,e)})):c.json().then((e=>{var t,n;const r=null===(n=null===(t=e.details)||void 0===t?void 0:t.causes)||void 0===n?void 0:n[0];let o;throw r&&(o=`Error "${r.message}" for field "${r.field}".`),o||(o=e.message),o||(o=e.error),o||(o=c.statusText),new O(o,c.status,c,e)}))}))}catch(e){return Promise.reject(e)}var c})),q=e=>[`base64url.bearer.authorization.k8s.io.${btoa(e).replace(/\+/g,"-").replace(/\//g,"_").split("=",1)[0]}`,"base64.binary.k8s.io"];var N=n(71626);const $=()=>{const{auth:e}=(0,P.Z)(),[t,n]=r.useState(null);return r.useEffect((()=>{e&&!t&&n({appFetch:T(e),wsAppSettings:()=>{return t=void 0,n=void 0,o=function*(){const t=yield e.getToken();return{host:`wss://${location.host}/wss/k8s`,subProtocols:q(t),urlAugment:e=>{const[t,n]=e.split("?")||[],r=new URLSearchParams(n);return r.get("watch")||r.set("watch","true"),`${t}?${r.toString()}`}}},new((r=void 0)||(r=Promise))((function(e,a){function s(e){try{c(o.next(e))}catch(e){a(e)}}function i(e){try{c(o.throw(e))}catch(e){a(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,i)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o},apiPriorityList:["appstudio.redhat.com"],pluginStore:N.pluginStore})}),[t,N.pluginStore,e]),t},I=({children:e})=>{const t=$();return t?r.createElement(d.AppInitSDK,{configurations:t},e):r.createElement(R,null)},B=document.getElementById("root");(0,o.render)(r.createElement((()=>{const e=m();return r.createElement(h.Provider,{value:{getRegistry:()=>e}},r.createElement(s.Provider,{store:e.getStore()},r.createElement(I,null,r.createElement(a.BrowserRouter,{basename:(0,S.eb)(window.location.pathname,1)},r.createElement(k,null)))))}),null),B,(()=>B.setAttribute("data-ouia-safe","true")))},45467:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2155.b39706a46946000407d5d0d950d27869.js.map