(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[1779,5467,9477],{68876:e=>{e.exports={}},69866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(93264),o=n(5352),s=n(63366);const a=r.lazy((()=>n.e(5107).then(n.bind(n,49450)))),i=()=>r.createElement(r.Suspense,{fallback:r.createElement(s.Bullseye,null,r.createElement(s.Spinner,null))},r.createElement(o.Routes,null,r.createElement(o.Route,{path:"*",element:r.createElement(a,null)})));var c=n(51344),l=n(83215),u=n(55140),d=n(6565),p=n(28527),h=n(5764),f=n(88092);const g=r.memo((({handler:e})=>{const t=(0,h.usePluginStore)();return e(r.useCallback(((e,n)=>{t.setFeatureFlags({[e]:n})}),[t])),null}));var v=n(27431);const m=r.memo((({flag:e,model:t})=>{const[,n]=(0,h.useFeatureFlag)(e),[o]=(0,v.useK8sModel)(t);return r.useEffect((()=>{n(!!o)}),[o,n]),null})),y=()=>{const e=(0,o.useNavigate)(),{getRegistry:t}=r.useContext(p.g),[n]=(0,h.useResolvedExtensions)(f.isFeatureFlag),s=(0,h.useExtensions)(f.isModelFeatureFlag),a=(0,u.Z)(),v=(0,d.useStore)();return r.useEffect((()=>{t().register({notifications:l.ee});const{on:n}=a,r=n("APP_NAVIGATION",(t=>{t.domEvent&&e(`${t.domEvent.href.replace("/hac","")}`)}));return()=>{r()}}),[a,t,e]),r.createElement(r.Fragment,null,n.map((e=>r.createElement(g,Object.assign({},e.properties,{key:e.uid})))),s.map((e=>r.createElement(m,Object.assign({},e.properties,{key:e.uid})))),r.createElement(c.ZP,{store:v}),r.createElement(i,null))}},89142:(e,t,n)=>{"use strict";n.d(t,{w:()=>r});const r=(e,t)=>{return n=void 0,r=void 0,s=function*(){var n;try{const r=yield fetch(`${e?"/beta":""}/apps/${t}/plugins.json`);if(!(null===(n=r.headers.get("content-type"))||void 0===n?void 0:n.includes("application/json")))throw new Error("plugin data response is not type application/json");return yield r.json()}catch(e){return console.error("Failed to fetch plugin data",e),[]}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{c(s.next(e))}catch(e){t(e)}}function i(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}c((s=s.apply(n,r||[])).next())}));var n,r,o,s}},85769:(e,t,n)=>{"use strict";n.d(t,{W:()=>w});var r=n(93264),o=n(27431),s=n(63366);const a=()=>r.createElement(s.Bullseye,null,r.createElement(s.Spinner,null));class i extends Error{constructor(e){super(e),Object.defineProperty(this,"name",{value:new.target.name,enumerable:!1,configurable:!0}),"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack,Object.setPrototypeOf(this,new.target.prototype)}}class c extends i{constructor(e,t,n,r){super(e),this.code=t,this.response=n,this.json=r}static fromCode(e){return new c(c.messages[e],e)}}c.messages={400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",510:"Not Extended",511:"Network Authentication Required"};var l=function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function i(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}c((r=r.apply(e,t||[])).next())}))};const u="/api/k8s",d=e=>(t,n={})=>l(void 0,void 0,void 0,(function*(){var{pathPrefix:r}=n,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["pathPrefix"]);const s=yield e.getToken();if(!s)return Promise.reject("Could not make k8s call. Unable to find token.");const a=Object.assign(Object.assign({},o),{headers:Object.assign(Object.assign({},o.headers),{Accept:"application/json",Authorization:`Bearer ${s}`})}),i=`${0===(null!=r?r:u).indexOf("/")?"":"/"}${null!=r?r:u}`;try{let e=t;return/^\/\//.test(t)&&(e=t.slice(1)),d=yield fetch(new Request(`${i}${e}`,{credentials:"include"}),a),l(void 0,void 0,void 0,(function*(){if(d.ok)return d;if(401===d.status)throw new c("Invalid token. Are you working with Prod SSO token?",d.status,d);const e=d.headers.get("content-type");if(!e||-1===e.indexOf("json"))throw new c(d.statusText,d.status,d);return 403===d.status?d.json().then((e=>{throw new c(e.message||"Access denied due to cluster policy.",d.status,d,e)})):d.json().then((e=>{var t,n;const r=null===(n=null===(t=e.details)||void 0===t?void 0:t.causes)||void 0===n?void 0:n[0];let o;throw r&&(o=`Error "${r.message}" for field "${r.field}".`),o||(o=e.message),o||(o=e.error),o||(o=d.statusText),new c(o,d.status,d,e)}))}))}catch(e){return Promise.reject(e)}var d})),p=e=>[`base64url.bearer.authorization.k8s.io.${btoa(e).replace(/\+/g,"-").replace(/\//g,"_").split("=",1)[0]}`,"base64.binary.k8s.io"];var h=n(89142),f=n(4147),g=n(5764),v=n(49093),m=n(55140);const y=()=>{const{auth:e}=(0,m.Z)(),[t,n]=r.useState(null),{pluginStore:o}=(0,v.useScalprum)();return r.useEffect((()=>{e&&!t&&((e=>{let t=e;if(!t){const e=new g.PluginLoader({postProcessManifest:e=>{var t,n;return Object.assign(Object.assign({},e),{loadScripts:null!==(t=e.loadScripts)&&void 0!==t?t:["plugin-entry.js"],registrationMethod:null!==(n=e.registrationMethod)&&void 0!==n?n:"callback"})}});e.registerPluginEntryCallback(),t=new g.PluginStore,t.setLoader(e)}(0,h.w)(window.insights.chrome.isBeta(),f.Kn.b).then((e=>{e.forEach((({name:e,pathPrefix:n="/api/plugins"})=>{const r=`/beta${n}/${e}/`;t.loadPlugin(r)}))}))})(o),n({appFetch:d(e),wsAppSettings:t=>{return n=void 0,r=void 0,s=function*(){const n=(null==t?void 0:t.wsPrefix)||(null==t?void 0:t.pathPrefix)||"",r=yield e.getToken();return{host:null!==localStorage.getItem("hac/proxy-ws")?`wss://${location.host}${n||"/wss/k8s"}`:`wss://api-toolchain-host-operator.apps.appstudio-stage.x99m.p1.openshiftapps.com:443${n}`,subProtocols:p(r),urlAugment:e=>{const[t,n]=e.split("?")||[],r=new URLSearchParams(n);return r.get("watch")||r.set("watch","true"),`${t}?${r.toString()}`}}},new((o=void 0)||(o=Promise))((function(e,t){function a(e){try{c(s.next(e))}catch(e){t(e)}}function i(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(a,i)}c((s=s.apply(n,r||[])).next())}));var n,r,o,s},apiPriorityList:["appstudio.redhat.com"],pluginStore:o}))}),[t,e,o]),t},w=({children:e})=>{const t=y();return t?r.createElement(o.AppInitSDK,{configurations:t},e):r.createElement(a,null)}},28527:(e,t,n)=>{"use strict";n.d(t,{g:()=>u,S:()=>p});var r=n(93264),o=n(8738),s=n(68573),a=n.n(s),i=n(84885),c=n(27431),l=n(53894);const u=(0,r.createContext)({});let d;function p(...e){return d=(0,o.JH)({},[l.Z,a(),(0,i.uv)({errorDescriptionKey:["detail","stack"]}),...e.filter(Boolean)],void 0),d.register(c.SDKReducers),d}},45467:()=>{},4147:e=>{"use strict";e.exports=JSON.parse('{"Kn":{"b":"hac-core"}}')}}]);
//# sourceMappingURL=../sourcemaps/1779.7c1353c62b3fbf40df1d5f3c80413171.js.map