"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[6428],{43457:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var n=a(93264),r=a(63366),o=a(78988),l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};const c=({object:e})=>{const[t,a]=n.useState(!1);return e?n.createElement("pre",{style:{overflow:"hidden",maxHeight:t?void 0:150,position:"relative",paddingTop:25}},JSON.stringify((e=>{const t=e.metadata,{managedFields:a}=t,n=l(t,["managedFields"]),r=l(e,["metadata"]);return Object.assign({metadata:n},r)})(e),null,2),t?n.createElement("div",{onClick:()=>a(!1),style:{cursor:"pointer",top:0,width:"100%",position:"absolute",textAlign:"center"}},"(Click to collapse)"):n.createElement("div",{onClick:()=>a(!0),style:{cursor:"pointer",background:"linear-gradient(transparent, gray)",bottom:0,width:"100%",height:"100%",position:"absolute",textAlign:"center"}},"(Click to expand)")):n.createElement("div",null,"No Object to Report")},s=({socketBeingCreated:e,socketOpen:t,resourceLoaded:a})=>e?t?a?null:n.createElement("p",null,"Socket Open."):n.createElement(r.Spinner,null):null,i={apiVersion:"v1",apiGroup:"project.openshift.io",kind:"Project",plural:"projects"},u={apiVersion:"v1alpha1",kind:"Application",apiGroup:"appstudio.redhat.com",plural:"applications"},p=({namespace:e})=>{const[t,a]=n.useState(null),[l,i]=n.useState(null),[p,m]=n.useState(!1),[d,E]=n.useState();return n.useEffect((()=>{if(d){let e=d;/^\/\//.test(d)&&(e=d.slice(1));const t=new o.WebSocketFactory("sample websocket",{path:e});return t.onOpen((()=>{m(!0)})),t.onError((e=>{console.debug("error",e)})),t.onMessage((e=>{try{let t;t="string"==typeof e?JSON.parse(e):e;const{type:n,object:r}=t||{};a("DELETED"===n?null:r),console.debug("message",n,r)}catch(e){return console.error(">>> Web Socket Data Bad",e),void i("Web Socket data unknown structure")}})),t.onClose((e=>{m(!1),a(null),E(void 0),console.debug("close",e,"code:",e.code)})),()=>{t.destroy()}}}),[d]),n.createElement(n.Fragment,null,n.createElement(r.Title,{headingLevel:"h2",size:"xl"},"Websockets"),n.createElement("p",null,"Needs a created Application to successfully return details."),!d&&(e?n.createElement(n.Fragment,null,n.createElement("p",null,"Create Web Socket Connection to:"),n.createElement(r.Button,{onClick:()=>{E((0,o.getK8sResourceURL)(u,void 0,{ns:e}))},variant:"primary"},"Applications")):n.createElement("p",null,"Need a namespace")),n.createElement(s,{socketBeingCreated:!!d,socketOpen:p,resourceLoaded:!!t}),p&&!t&&n.createElement("p",null,"No response -- did you create the Application?"),l&&n.createElement(r.Alert,{variant:"danger",title:"Websocket Error"},l),t&&n.createElement(c,{object:t}))};var m;!function(e){e.CREATE="create",e.GET="get",e.PATCH="patch",e.PUT="put",e.DELETE="delete"}(m||(m={}));const d=({namespace:e})=>{const[t,a]=n.useState(),[l,s]=n.useState("test"),[i,p]=n.useState(""),[d,E]=n.useState(),[h,g]=n.useState();return n.useEffect((()=>{const t={name:l,ns:e},n={apiVersion:`${u.apiGroup}/${u.apiVersion}`,kind:u.kind,metadata:{name:l,namespace:e}};let r=null;switch(d){case m.CREATE:r=(0,o.k8sCreateResource)({model:u,queryOptions:t,resource:n});break;case m.GET:r=(0,o.k8sGetResource)({model:u,queryOptions:t}).then((e=>{var t;return g(null===(t=null==e?void 0:e.metadata)||void 0===t?void 0:t.resourceVersion),e}));break;case m.PATCH:r=(0,o.k8sPatchResource)({model:u,queryOptions:t,patches:[{op:"replace",path:"/test",value:"false"}]});break;case m.PUT:r=(0,o.k8sUpdateResource)({model:u,queryOptions:t,resource:Object.assign(Object.assign({},n),{metadata:Object.assign(Object.assign({},n.metadata),{resourceVersion:h})})}).then((e=>{var t;return g(null===(t=null==e?void 0:e.metadata)||void 0===t?void 0:t.resourceVersion),e}));break;case m.DELETE:r=(0,o.k8sDeleteResource)({model:u,queryOptions:t});break;case null:break;default:throw new Error("uh oh!")}null==r||r.then((e=>{p(`${d} response:`),a(e),console.debug(`++++${d}!`,e)})).catch((e=>{console.error(`++++failed ${d}`,e),p(`failed call: ${e.message}`),a(void 0)})).finally((()=>{E(void 0)}))}),[d,l,e,h]),n.createElement(n.Fragment,null,n.createElement(r.Title,{headingLevel:"h2",size:"xl"},"Fetch Calls"),n.createElement(r.TextInput,{placeholder:"Application name",onChange:e=>s(e),value:l}),n.createElement("div",null,n.createElement("p",null,"Test calls -- predefined data; use the above input to make/update/get multiple Applications"),Object.values(m).map((e=>n.createElement(n.Fragment,{key:e},n.createElement(r.Button,{isDisabled:e===m.PUT&&null===h,onClick:()=>E(e)},e)," ")))),n.createElement("div",null,i),t&&n.createElement(c,{object:t}))},E=({namespace:e,setNamespace:t})=>{const[a,l]=n.useState(),c=(0,o.isUtilsConfigSet)();return n.useEffect((()=>{c&&(0,o.k8sListResourceItems)({model:i}).then((e=>{var a,n;const r=null===(n=null===(a=e[0])||void 0===a?void 0:a.metadata)||void 0===n?void 0:n.name;r?t(r):l('Could not find namespace; you are likely not able to do much as we are targeting "default"')})).catch((e=>{l(`Unknown issue loading namespace ${null==e?void 0:e.message}`)}))}),[c,t]),a?n.createElement(r.Alert,{variant:"danger",isInline:!0,title:"Determining Namespace Error"},a):e?n.createElement("p",null,"Current namespace: ",e):n.createElement(n.Fragment,null,n.createElement(r.Spinner,null)," Loading Namespace")},h=({namespace:e})=>{const[t,a]=n.useState("test"),l={isList:!1,groupVersionKind:{group:"appstudio.redhat.com",version:"v1alpha1",kind:"Application"},name:t,namespace:e},c={application:{isList:!1,groupVersionKind:{group:"appstudio.redhat.com",version:"v1alpha1",kind:"Application"},name:t,namespace:e}},[s,i,u]=(0,o.useK8sWatchResource)(l),p=i||!!u;p&&console.log("data from useK8sWatchResource: ",s);const{application:m}=(0,o.useK8sWatchResources)(c),d=m.loaded||!!m.loadError,{data:E}=m;return d&&console.log("data from useK8sWatchResources: ",E),n.createElement(n.Fragment,null,n.createElement(r.Title,{headingLevel:"h2",size:"xl"},"Test hooks to watch Application"),n.createElement(r.TextInput,{placeholder:"Application name",onChange:e=>a(e),value:t}),n.createElement(r.TextContent,null,n.createElement(r.Text,{component:r.TextVariants.h4},"useK8sWatchResource (watch Application: ",t,")"),!p&&n.createElement(r.Text,{component:r.TextVariants.p},"Loading resource..."),p&&s&&n.createElement(r.Text,{component:r.TextVariants.p},"Resource loaded"),p&&!s&&n.createElement(r.Text,{component:r.TextVariants.p},"No data -- did you create the Application?")),n.createElement("br",null),n.createElement(r.TextContent,null,n.createElement(r.Text,{component:r.TextVariants.h4},"useK8sWatchResources (watch Application: ",t,")"),!d&&n.createElement(r.Text,{component:r.TextVariants.p},"Loading resource..."),d&&E&&n.createElement(r.Text,{component:r.TextVariants.p},"Resource loaded"),d&&!E&&n.createElement(r.Text,{component:r.TextVariants.p},"No data -- did you create the Application?")))},g=()=>{const[e,t]=n.useState();return n.createElement(r.PageSection,null,n.createElement(E,{namespace:e,setNamespace:t}),e&&n.createElement(n.Fragment,null,n.createElement("hr",{style:{margin:20}}),n.createElement(d,{namespace:e}),n.createElement("hr",{style:{margin:20}}),n.createElement(h,{namespace:e}),n.createElement("hr",{style:{margin:20}}),n.createElement(p,{namespace:e})))}}}]);
//# sourceMappingURL=../sourcemaps/TestK8s.f7f25a94e71e395e754921c7c3bd56fd.js.map