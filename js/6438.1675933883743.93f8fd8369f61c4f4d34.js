(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[6438],{56438:(e,t,n)=>{"use strict";n.r(t),n.d(t,{ScalprumComponent:()=>b,ScalprumContext:()=>m,ScalprumProvider:()=>g,default:()=>g,useLoadModule:()=>j,useModule:()=>C,useScalprum:()=>E});var r=n(93264),o=n.n(r),c=n(73116),a=n(18446),i=n.n(a),u=function(){return o().createElement("span",null,"Error while loading component!")};function l(e,t,n){var r=this;return void 0===n&&(n=u),function(){return o=r,a=void 0,u=function(){var r,o;return function(e,t){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,c.asyncLoader)(e,t)];case 1:return r=a.sent(),[3,3];case 2:return o=a.sent(),console.error(o),r={default:n},[3,3];case 3:return[2,r]}}))},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(u.next(e))}catch(e){t(e)}}function r(e){try{c(u.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,r)}c((u=u.apply(o,a||[])).next())}));var o,a,i,u}}var s,f=(s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)},h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},y=function(){return o().createElement("span",null,"Error while loading component!")},d=function(e){var t=e.fallback,n=void 0===t?"loading":t,a=e.appName,i=e.scope,u=e.module,s=e.ErrorComponent,f=e.processor,y=e.innerRef,d=e.skipCache,v=void 0!==d&&d,b=h(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),m=(0,c.getAppData)(a),w=m.scriptLocation,g=m.manifestLocation,E=(0,r.useState)(void 0),k=E[0],C=E[1],O=(0,c.getCachedModule)(i,u,v),S=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(O)try{S.current&&C((function(){return O.default}))}catch(e){S.current&&C((function(){return s}))}else w?(0,c.injectScript)(a,w).then((function(){S.current&&C((function(){return o().lazy(l(i,u,s))}))})).catch((function(){S.current&&C((function(){return s}))})):g&&(0,c.processManifest)(g,a,i,f).then((function(){S.current&&C((function(){return o().lazy(l(i,u,s))}))})).catch((function(){S.current&&C((function(){return s}))}));return function(){S.current=!1}}),[a,i,O,v]),o().createElement(r.Suspense,{fallback:n},k?o().createElement(k,p({ref:y},b)):n)},v=function(e){function t(t){var n=e.call(this,t)||this;return n.state={hasError:!1},n.selfRepairAttempt=!1,n}return f(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.shouldComponentUpdate=function(e,t){return this.state.hasError!==t.hasError||!i()(e,this.props)||!i()(t,this.state)},t.prototype.componentDidCatch=function(e,t){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:t})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},t.prototype.render=function(){var e=this.props,t=e.ErrorComponent,n=void 0===t?o().createElement(y,null):t,c=h(e,["ErrorComponent"]);return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(d,p({},c,{skipCache:!0,ErrorComponent:function(){return o().createElement(r.Fragment,null,n)}}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(n,p({},this.state)):o().createElement(d,p({},c,{ErrorComponent:function(){return o().createElement(r.Fragment,null,n)}}))},t.defaultProps={ErrorComponent:o().createElement(y,null)},t}(o().Component),b=o().forwardRef((function(e,t){return o().createElement(v,p({},e,{innerRef:t}))})),m=(0,r.createContext)({initialized:!1,config:{},api:void 0}),w=function(){return w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)};function g(e){var t=e.config,n=e.children,a=e.api,i=(0,r.useRef)(!1),u=(0,r.useState)({initialized:!1,config:{},api:a}),l=u[0],s=u[1];return(0,r.useEffect)((function(){"object"==typeof t&&((0,c.initialize)({appsConfig:t,api:a}),s((function(e){return w(w({},e),{initialized:!0,config:t})})),i.current=!0),"function"==typeof t&&Promise.resolve(t()).then((function(e){s((function(t){return w(w({},t),{initialized:!0,config:e})})),(0,c.initialize)({appsConfig:e,api:a}),i.current=!0}))}),[t]),(0,r.useEffect)((function(){i.current&&s((function(e){return w(w({},e),{api:a})}))}),[a]),o().createElement(m.Provider,{value:l},n)}function E(e){var t=(0,r.useContext)(m);return"function"==typeof e?e(t):t}var k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};function C(e,t,n,o){var a=this;void 0===o&&(o={});var i=k({skipCache:!1},o),u=(0,r.useState)(n),l=u[0],s=u[1],f=(0,r.useCallback)((function(){return n=a,r=void 0,u=function(){var n,r;return function(e,t){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(o){switch(o.label){case 0:if(n=(0,c.getCachedModule)(e,t,i.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,(0,c.asyncLoader)(e,t)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+t+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=n,o.label=6;case 6:return s((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function c(e){try{i(u.next(e))}catch(e){t(e)}}function a(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,a)}i((u=u.apply(n,r||[])).next())}));var n,r,o,u}),[e,t]);return(0,r.useEffect)((function(){f()}),[e,t]),l}var O=function(){return O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},O.apply(this,arguments)},S=function(e,t,n,r){return new(n||(n=Promise))((function(o,c){function a(e){try{u(r.next(e))}catch(e){c(e)}}function i(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}u((r=r.apply(e,t||[])).next())}))},x=function(e,t){var n,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};function j(e,t,n){var o=this,a=e.appName,i=e.scope,u=e.module,l=e.processor;void 0===n&&(n={});var s=O({skipCache:!1},n),f=(0,c.getAppData)(a||i),p=f.scriptLocation,h=f.manifestLocation,y=(0,r.useState)(t),d=y[0],v=y[1],b=(0,r.useState)(),m=b[0],w=b[1],g=(0,c.getCachedModule)(i,u,s.skipCache),E=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(E.current)if(g)try{(0,c.asyncLoader)(i,u).then((function(e){v((function(){return e}))}))}catch(e){w((function(){return e}))}else p?(0,c.injectScript)(a||i,p).then((function(){return S(o,void 0,void 0,(function(){var e;return x(this,(function(t){switch(t.label){case 0:return[4,(0,c.asyncLoader)(i,u)];case 1:return e=t.sent(),v((function(){return e})),[2]}}))}))})).catch((function(e){w((function(){return e}))})):h&&(0,c.processManifest)(h,a||i,i,l).then((function(){return S(o,void 0,void 0,(function(){var e;return x(this,(function(t){switch(t.label){case 0:return[4,(0,c.asyncLoader)(i,u)];case 1:return e=t.sent(),v((function(){return e})),[2]}}))}))})).catch((function(e){w((function(){return e}))}));return function(){E.current=!1}}),[a,i,g,s.skipCache]),[d,m]}},18446:(e,t,n)=>{var r=n(90939);e.exports=function(e,t){return r(e,t)}}}]);
//# sourceMappingURL=../sourcemaps/6438.06b5d119c4e2fa598d85e09b098b83b0.js.map