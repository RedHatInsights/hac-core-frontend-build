(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[7373],{94:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>k});var n=r(6565),i=r(87462),o=r(15671),a=r(43144);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=r(89611);function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,s.Z)(e,t)}var l=r(71002);function f(e,t){if(t&&("object"===(0,l.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=r(4942),y=r(93264),m=r.n(y),v=r(3644),h=r(45697),b=r.n(h),g=r(45987),O=r(41448),D=r(68774),w=r(68340),j=r(56715);const E=(0,r(40400).IU)({name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0});var I=function(e){u(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p(t);if(r){var i=p(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return f(this,e)});function s(e){var t;return(0,o.Z)(this,s),t=n.call(this,e),(0,d.Z)(c(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,d.Z)(c(t),"setDismissTimeout",(function(){t.props.autoDismiss&&(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,d.Z)(c(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind(c(t)),t.setDismissTimeout(),t}return(0,a.Z)(s,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,n=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,a=e.requestId,c=(e.autoDismiss,(0,g.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return m().createElement(O.b,(0,i.Z)({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},c,{actionClose:r?m().createElement(j.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},m().createElement(E,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&m().createElement(D.D,null,m().createElement(w.x,{component:w.q.small},"Tracking Id: ",o)),a&&m().createElement(D.D,null,m().createElement(w.x,{component:w.q.small},"Request Id: ",a)))}}]),s}(y.Component);I.propTypes={autoDismiss:b().bool,dismissable:b().bool,onDismiss:b().func.isRequired,id:b().string.isRequired,variant:b().oneOf(["info","success","warning","danger"]).isRequired,title:b().node.isRequired,description:b().node,dismissDelay:b().number,requestId:b().string,sentryId:b().string},I.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const S=I;var C=r(32203),P=r(62394),T=r(47173),N=r(44733),A=r(86487),Z=r(86050),R=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,i=e.count;return m().createElement(C.Z,{className:"notification-item"},m().createElement(P.e,null,m().createElement(A.a,null,m().createElement(Z.Z,null,m().createElement(T.zx,{variant:T.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),m().createElement(Z.Z,null,m().createElement(N.t,{itemCount:i,variant:N.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};R.propTypes={count:b().number,page:b().number,onSetPage:b().func,onClearAll:b().func},R.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const x=R;var _=function(e){u(s,e);var t,r,n=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=p(t);if(r){var i=p(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return f(this,e)});function s(){var e;(0,o.Z)(this,s);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),(0,d.Z)(c(e),"state",{page:1}),(0,d.Z)(c(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return(0,a.Z)(s,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,n=t.removeNotification,o=t.rootId,a=t.onClearAll,c=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,v.createPortal)(m().createElement("div",{className:"notifications-portal"},r&&r.length>5&&m().createElement(x,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:a}),c.map((function(e){return m().createElement(S,(0,i.Z)({onDismiss:n,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),s}(y.Component);_.propTypes={notifications:b().arrayOf(b().shape({id:b().string.isRequired,title:b().string.isRequired,variant:b().string.isRequired,description:b().node,dismissable:b().bool})),removeNotification:b().func.isRequired,onClearAll:b().func,rootId:b().string};const L=_;var q=r(21458);const k=(0,n.connect)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,q.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,q.L1)())}}}))(L)},84885:(e,t,r)=>{"use strict";r.d(t,{uv:()=>d});var n=r(4942),i=r(27361),o=r.n(i),a=r(18721),c=r.n(a),s=r(21458);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return c()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return c()(e,t)}))),{title:o()(e,n)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,r=e.hasCustomNotification,n=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!r&&!n&&i};const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},r=l(l({},t),e),n=function(e){return e.match(new RegExp("^.*".concat(r.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(r.fulfilledSuffix,"$")))},a=function(e){return e.match(new RegExp("^.*".concat(r.rejectedSuffix,"$")))},u={dismissable:!r.autoDismiss,dismissDelay:r.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(d){var y=d.meta,m=d.type;if(y&&y.notifications){var v=y.notifications;n(m)&&v.pending?("function"==typeof v.pending&&(v.pending=v.pending(d.payload)),t((0,s.wN)(l(l({},u),v.pending)))):i(m)&&v.fulfilled?("function"==typeof v.fulfilled&&(v.fulfilled=v.fulfilled(d.payload)),t((0,s.wN)(l(l({},u),v.fulfilled)))):a(m)&&v.rejected&&("function"==typeof v.rejected&&(v.rejected=v.rejected(d.payload)),t((0,s.wN)(l(l(l({},u),v.rejected),{},{sentryId:d.payload&&d.payload.sentryId,requestId:d.payload&&d.payload.requestId}))))}if(p({isRejected:a(m),hasCustomNotification:y&&y.notifications&&y.notifications.rejected,noErrorOverride:y&&y.noError,dispatchDefaultFailure:r.dispatchDefaultFailure}))if(r.useStatusText)t((0,s.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,"statusText"))));else{var h=Array.isArray(r.errorNamespaceKey)&&r.errorNamespaceKey.find((function(e){return c()(d.payload,e)}));h?o()(d.payload,h).map((function(e){t((0,s.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):Array.isArray(d.payload)?d.payload.map((function(e){t((0,s.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):t((0,s.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,r.errorDescriptionKey))))}e(d)}}}}},17558:(e,t,r)=>{"use strict";r.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>a});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(n,"ADD_NOTIFICATION"),o="".concat(n,"REMOVE_NOTIFICATION"),a="".concat(n,"CLEAR_NOTIFICATIONS")},21458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>i,FV:()=>o,L1:()=>a});var n=r(17558),i=function(e){return{type:n.Dv,payload:e}},o=function(e){return{type:n.Kf,payload:e}},a=function(){return{type:n.wt}}},93379:(e,t,r)=>{"use strict";r.d(t,{ee:()=>d});var n=r(17558),i=(r(21458),r(4942)),o=r(30907),a=r(40181);function c(e){return function(e){if(Array.isArray(e))return(0,o.Z)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e,t){var r=t.payload;return[].concat(c(e),[u({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},f=function(e,t){var r=t.payload,n=e.findIndex((function(e){return e.id===r}));return[].concat(c(e.slice(0,n)),c(e.slice(n+1)))},p=[];const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.Dv:return l(e,t);case n.Kf:return f(e,t);case n.wt:return[];default:return e}}},8738:(e,t,r)=>{"use strict";r.d(t,{JH:()=>u});var n=r(97779),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},o=function(){function e(e,t,r){void 0===e&&(e={}),void 0===t&&(t=[]),void 0===r&&(r=n.compose);var i="undefined"!=typeof window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||r;this.store=(0,n.createStore)((function(t){return void 0===t&&(t=e),t}),e,i(n.applyMiddleware.apply(void 0,t))),this.reducers={}}return e.prototype.getStore=function(){return this.store},e.prototype.register=function(e){var t=this;return this.reducers=i(i({},this.reducers),e),this.store.replaceReducer((0,n.combineReducers)(i({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r,n=t[0],o=t[1];return i(i({},e),((r={})[n]=o,r))}),{}),t.store.replaceReducer((0,n.combineReducers)(i({},t.reducers)))}},e}();new o;const a=o;var c,s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function u(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),function(e,t,r){return void 0===e&&(e={}),void 0===t&&(t=[]),c||(c=new a(e,function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}([],t,!0),r)),c.register({routerData:function(e,t){var r=t.type,n=t.payload;return s(s({},e),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),c}(e,t,r)}},35240:(e,t,r)=>{"use strict";r.d(t,{eb:()=>n}),r(82492),r(67523);function n(e,t){void 0===t&&(t=2);var r="/",n=e.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),function(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}([],new Array(t),!0).reduce((function(e,r,i){return"".concat(e).concat(n[i]||"").concat(i<t-1?"/":"")}),r)}},55140:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(54025),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};const o=function(e){var t,r=(0,n.useScalprum)(),o=(null===(t=r.api)||void 0===t?void 0:t.chrome)||{};return o=i(i({},o),{initialized:r.initialized}),"function"==typeof e?e(o):o}},82492:(e,t,r)=>{var n=r(42980),i=r(21463)((function(e,t,r){n(e,t,r)}));e.exports=i},53894:(e,t,r)=>{"use strict";function n(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(r,n,e):t(i)}}}}r.d(t,{Z:()=>o});var i=n();i.withExtraArgument=n;const o=i},30907:(e,t,r)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:()=>n})},15671:(e,t,r)=>{"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,{Z:()=>n})},43144:(e,t,r)=>{"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,{Z:()=>i})},87462:(e,t,r)=>{"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{Z:()=>n})},45987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(35245);function i(e,t){if(null==e)return{};var r,i,o=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},35245:(e,t,r)=>{"use strict";function n(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}r.d(t,{Z:()=>n})},89611:(e,t,r)=>{"use strict";function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}r.d(t,{Z:()=>n})},71002:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:()=>n})},40181:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(30907);function i(e,t){if(e){if("string"==typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=../sourcemaps/7373.29b11149bb559010b6176ea2e84053a1.js.map