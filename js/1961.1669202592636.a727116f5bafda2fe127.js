(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[1961],{35160:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>L});var n=r(6565),i=r(87462),o=r(15671),s=r(43144),a=r(97326),c=r(79340),u=r(82963),l=r(61120),f=r(4942),p=r(93264),d=r.n(p),y=r(3644),m=r(45697),v=r.n(m),h=r(45987),g=r(41448),b=r(68774),O=r(68340),D=r(56715);const w=(0,r(40400).IU)({name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0});var E=function(e){(0,c.Z)(p,e);var t,r,n=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var i=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),t=n.call(this,e),(0,f.Z)((0,a.Z)(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,f.Z)((0,a.Z)(t),"setDismissTimeout",(function(){t.props.autoDismiss&&(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,f.Z)((0,a.Z)(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind((0,a.Z)(t)),t.setDismissTimeout(),t}return(0,s.Z)(p,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,n=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,s=e.requestId,a=(e.autoDismiss,(0,h.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return d().createElement(g.b,(0,i.Z)({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},a,{actionClose:r?d().createElement(D.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},d().createElement(w,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&d().createElement(b.D,null,d().createElement(O.x,{component:O.q.small},"Tracking Id: ",o)),s&&d().createElement(b.D,null,d().createElement(O.x,{component:O.q.small},"Request Id: ",s)))}}]),p}(p.Component);E.propTypes={autoDismiss:v().bool,dismissable:v().bool,onDismiss:v().func.isRequired,id:v().string.isRequired,variant:v().oneOf(["info","success","warning","danger"]).isRequired,title:v().node.isRequired,description:v().node,dismissDelay:v().number,requestId:v().string,sentryId:v().string},E.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const j=E;var Z=r(32203),I=r(62394),C=r(47173),P=r(44733),T=r(86487),N=r(86050),S=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,i=e.count;return d().createElement(Z.Z,{className:"notification-item"},d().createElement(I.e,null,d().createElement(T.a,null,d().createElement(N.Z,null,d().createElement(C.zx,{variant:C.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),d().createElement(N.Z,null,d().createElement(P.t,{itemCount:i,variant:P.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};S.propTypes={count:v().number,page:v().number,onSetPage:v().func,onClearAll:v().func},S.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const A=S;var R=function(e){(0,c.Z)(p,e);var t,r,n=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var i=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function p(){var e;(0,o.Z)(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),(0,f.Z)((0,a.Z)(e),"state",{page:1}),(0,f.Z)((0,a.Z)(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return(0,s.Z)(p,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,n=t.removeNotification,o=t.rootId,s=t.onClearAll,a=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,y.createPortal)(d().createElement("div",{className:"notifications-portal"},r&&r.length>5&&d().createElement(A,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:s}),a.map((function(e){return d().createElement(j,(0,i.Z)({onDismiss:n,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),p}(p.Component);R.propTypes={notifications:v().arrayOf(v().shape({id:v().string.isRequired,title:v().string.isRequired,variant:v().string.isRequired,description:v().node,dismissable:v().bool})),removeNotification:v().func.isRequired,onClearAll:v().func,rootId:v().string};const x=R;var _=r(21458);const L=(0,n.connect)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,_.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,_.L1)())}}}))(x)},84885:(e,t,r)=>{"use strict";r.d(t,{uv:()=>d});var n=r(4942),i=r(27361),o=r.n(i),s=r(18721),a=r.n(s),c=r(21458);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return a()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return a()(e,t)}))),{title:o()(e,n)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,r=e.hasCustomNotification,n=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!r&&!n&&i};const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},r=l(l({},t),e),n=function(e){return e.match(new RegExp("^.*".concat(r.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(r.fulfilledSuffix,"$")))},s=function(e){return e.match(new RegExp("^.*".concat(r.rejectedSuffix,"$")))},u={dismissable:!r.autoDismiss,dismissDelay:r.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(d){var y=d.meta,m=d.type;if(y&&y.notifications){var v=y.notifications;n(m)&&v.pending?("function"==typeof v.pending&&(v.pending=v.pending(d.payload)),t((0,c.wN)(l(l({},u),v.pending)))):i(m)&&v.fulfilled?("function"==typeof v.fulfilled&&(v.fulfilled=v.fulfilled(d.payload)),t((0,c.wN)(l(l({},u),v.fulfilled)))):s(m)&&v.rejected&&("function"==typeof v.rejected&&(v.rejected=v.rejected(d.payload)),t((0,c.wN)(l(l(l({},u),v.rejected),{},{sentryId:d.payload&&d.payload.sentryId,requestId:d.payload&&d.payload.requestId}))))}if(p({isRejected:s(m),hasCustomNotification:y&&y.notifications&&y.notifications.rejected,noErrorOverride:y&&y.noError,dispatchDefaultFailure:r.dispatchDefaultFailure}))if(r.useStatusText)t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,"statusText"))));else{var h=Array.isArray(r.errorNamespaceKey)&&r.errorNamespaceKey.find((function(e){return a()(d.payload,e)}));h?o()(d.payload,h).map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):Array.isArray(d.payload)?d.payload.map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,r.errorDescriptionKey))))}e(d)}}}}},17558:(e,t,r)=>{"use strict";r.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>s});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(n,"ADD_NOTIFICATION"),o="".concat(n,"REMOVE_NOTIFICATION"),s="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>i,FV:()=>o,L1:()=>s});var n=r(17558),i=function(e){return{type:n.Dv,payload:e}},o=function(e){return{type:n.Kf,payload:e}},s=function(){return{type:n.wt}}},83215:(e,t,r)=>{"use strict";r.d(t,{ee:()=>f});var n=r(17558),i=(r(21458),r(4942)),o=r(42982);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=function(e,t){var r=t.payload;return[].concat((0,o.Z)(e),[a({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},u=function(e,t){var r=t.payload,n=e.findIndex((function(e){return e.id===r}));return[].concat((0,o.Z)(e.slice(0,n)),(0,o.Z)(e.slice(n+1)))},l=[];const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.Dv:return c(e,t);case n.Kf:return u(e,t);case n.wt:return[];default:return e}}},8738:(e,t,r)=>{"use strict";r.d(t,{JH:()=>u});var n=r(97779),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},o=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t=[]),void 0===r&&(r=n.compose);var i="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||r;this.store=(0,n.createStore)((function(t){return void 0===t&&(t=e),t}),e,i(n.applyMiddleware.apply(void 0,t))),this.reducers={}}return e.prototype.getStore=function(){return this.store},e.prototype.register=function(e){var t=this;return this.reducers=i(i({},this.reducers),e),this.store.replaceReducer((0,n.combineReducers)(i({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r,n=t[0],o=t[1];return i(i({},e),((r={})[n]=o,r))}),{}),t.store.replaceReducer((0,n.combineReducers)(i({},t.reducers)))}},e}();new o;const s=o;var a,c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)};function u(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),function(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),a||(a=new s(e,function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}([],t,!0),r)),a.register({routerData:function(e,t){var r=t.type,n=t.payload;return c(c({},e),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),a}(e,t,r)}},35240:(e,t,r)=>{"use strict";r.d(t,{eb:()=>n}),r(82492),r(67523);function n(e,t){void 0===t&&(t=2);var r="/",n=e.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}([],new Array(t),!0).reduce((function(e,r,i){return"".concat(e).concat(n[i]||"").concat(i<t-1?"/":"")}),r)}},55140:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(54025),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};const o=function(e){var t,r=(0,n.useScalprum)(),o=(null===(t=r.api)||void 0===t?void 0:t.chrome)||{};return o=i(i({},o),{initialized:r.initialized}),"function"==typeof e?e(o):o}},82492:(e,t,r)=>{var n=r(42980),i=r(21463)((function(e,t,r){n(e,t,r)}));e.exports=i},53894:(e,t,r)=>{"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}r.d(t,{Z:()=>o});var i=n();i.withExtraArgument=n;const o=i},97326:(e,t,r)=>{"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},61120:(e,t,r)=>{"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:()=>n})},79340:(e,t,r)=>{"use strict";function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},n(e,t)}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)}r.d(t,{Z:()=>i})},82963:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(71002),i=r(97326);function o(e,t){if(t&&("object"===(0,n.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(e)}},42982:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(30907),i=r(40181);function o(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,i.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=../sourcemaps/1961.ee26bb83dd22140070213056338ebdb4.js.map