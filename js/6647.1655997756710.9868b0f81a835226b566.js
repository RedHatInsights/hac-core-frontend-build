(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[6647,5467,9477,3929,9682],{68876:e=>{e.exports={}},38957:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(93264),o=n(55399),s=n(61888),a=n(94),i=n(93379),c=n(55140),u=n(6565),l=n(28527);const d=()=>{const e=(0,o.useHistory)(),{getRegistry:t}=r.useContext(l.g),n=(0,c.Z)(),d=(0,u.useStore)();return r.useEffect((()=>{t().register({notifications:i.ee});const{on:r}=null==n?void 0:n.init(),o=r("APP_NAVIGATION",(t=>{t.domEvent&&e.push(`${t.domEvent.href.replace("/hac","")}`)}));return()=>{o()}}),[e,n]),r.createElement(r.Fragment,null,r.createElement(a.ZP,{store:d}),r.createElement(s.Z,null))}},69325:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(93264),o=n(55399),s=n(6565),a=n(28527),i=n(38957),c=n(35240),u=(n(68876),n(20960));const l=()=>{const e=(0,a.S)();return r.createElement(a.g.Provider,{value:{getRegistry:()=>e}},r.createElement(s.Provider,{store:e.getStore()},r.createElement(u.W,null,r.createElement(o.BrowserRouter,{basename:(0,c.eb)(window.location.pathname,1)},r.createElement(i.Z,null)))))}},61888:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(93264),o=n(55399),s=n(63366);const a=r.lazy((()=>Promise.all([n.e(438),n.e(5107)]).then(n.bind(n,21187)))),i=r.lazy((()=>n.e(777).then(n.bind(n,98242)))),c=r.lazy((()=>n.e(6428).then(n.bind(n,43457)))),u=()=>r.createElement(r.Suspense,{fallback:r.createElement(s.Bullseye,null,r.createElement(s.Spinner,null))},r.createElement(o.Switch,null,r.createElement(o.Route,{exact:!0,path:"/testK8s",component:c}),r.createElement(o.Route,{path:"/:dynamicPath",component:a}),r.createElement(o.Route,{exact:!0,path:"/",component:i}),r.createElement(o.Route,null,r.createElement(o.Redirect,{to:"/"}))))},45592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(93264),o=n(63366);const s=()=>r.createElement(o.Bullseye,null,r.createElement(o.Spinner,null))},34111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(93264),o=n(6857),s=n(45592),a=n(62352);const i=({children:e})=>{const t=(0,a.Z)();return t?r.createElement(o.AppInitSDK,{configurations:t},e):r.createElement(s.Z,null)}},16303:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var r=n(78652),o=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const s="/api/k8s",a=e=>(t,n)=>o(void 0,void 0,void 0,(function*(){var{pathPrefix:a}=n,i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["pathPrefix"]);const c=yield e.getToken();if(!c)return Promise.reject("Could not make k8s call. Unable to find token.");const u=Object.assign(Object.assign({},i),{headers:Object.assign(Object.assign({},i.headers),{Accept:"application/json",Authorization:`Bearer ${c}`})}),l=`${0===(null!=a?a:s).indexOf("/")?"":"/"}${null!=a?a:s}`;try{let e=t;return/^\/\//.test(t)&&(e=t.slice(1)),d=yield fetch(new Request(`${l}${e}`,{credentials:"include"}),u),o(void 0,void 0,void 0,(function*(){if(d.ok)return d;if(401===d.status)throw new r.oo("Invalid token. Are you working with Prod SSO token?",d.status,d);const e=d.headers.get("content-type");if(!e||-1===e.indexOf("json"))throw new r.oo(d.statusText,d.status,d);return 403===d.status?d.json().then((e=>{throw new r.oo(e.message||"Access denied due to cluster policy.",d.status,d,e)})):d.json().then((e=>{var t,n;const o=null===(n=null===(t=e.details)||void 0===t?void 0:t.causes)||void 0===n?void 0:n[0];let s;throw o&&(s=`Error "${o.message}" for field "${o.field}".`),s||(s=e.message),s||(s=e.error),s||(s=d.statusText),new r.oo(s,d.status,d,e)}))}))}catch(e){return Promise.reject(e)}var d}))},34289:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});class r extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{value:new.target.name,enumerable:!1,configurable:!0}),"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack,Object.setPrototypeOf(this,new.target.prototype)}}},78652:(e,t,n)=>{"use strict";n.d(t,{oo:()=>o});var r=n(34289);class o extends r.s{constructor(e,t,n,r){super(e),this.code=t,this.response=n,this.json=r}static fromCode(e){return new o(o.messages[e],e)}}o.messages={400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",510:"Not Extended",511:"Network Authentication Required"}},20960:(e,t,n)=>{"use strict";n.d(t,{W:()=>r.Z});var r=n(34111)},62352:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(93264),o=n(16303),s=n(814),a=n(71626),i=n(55140);const c=()=>{const{auth:e}=(0,i.Z)(),[t,n]=r.useState(null);return r.useEffect((()=>{e&&!t&&n({appFetch:(0,o.I)(e),wsAppSettings:()=>{return t=void 0,n=void 0,o=function*(){const t=yield e.getToken();return{host:`wss://${location.host}/wss/k8s`,subProtocols:(0,s.Q)(t),urlAugment:e=>{const[t,n]=e.split("?")||[],r=new URLSearchParams(n);return r.get("watch")||r.set("watch","true"),`${t}?${r.toString()}`}}},new((r=void 0)||(r=Promise))((function(e,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function i(e){try{c(o.throw(e))}catch(e){s(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(a,i)}c((o=o.apply(t,n||[])).next())}));var t,n,r,o},apiPriorityList:["appstudio.redhat.com"],pluginStore:a.pluginStore})}),[t,a.pluginStore,e]),t}},814:(e,t,n)=>{"use strict";n.d(t,{Q:()=>r});const r=e=>[`base64url.bearer.authorization.k8s.io.${btoa(e).replace(/\+/g,"-").replace(/\//g,"_").split("=",1)[0]}`,"base64.binary.k8s.io"]},28527:(e,t,n)=>{"use strict";n.d(t,{g:()=>l,S:()=>p});var r=n(93264),o=n(8738),s=n(68573),a=n.n(s),i=n(84885),c=n(6857),u=n(53894);const l=(0,r.createContext)(void 0);let d;function p(...e){return d=(0,o.JH)({},[u.Z,a(),(0,i.uv)({errorDescriptionKey:["detail","stack"]}),...e.filter(Boolean)],void 0),d.register(c.SDKReducers),d}},45467:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6647.a0d41e65ca1ea390a2a3b94f13b66da1.js.map