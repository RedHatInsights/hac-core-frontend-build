"use strict";(self.webpackChunkhac_core=self.webpackChunkhac_core||[]).push([[1937],{1937:(t,n,e)=>{e.r(n),e.d(n,{BrowserRouter:()=>q,HashRouter:()=>F,Link:()=>J,MemoryRouter:()=>g,NavLink:()=>tt,Prompt:()=>R,Redirect:()=>M,Route:()=>U,Router:()=>C,StaticRouter:()=>D,Switch:()=>B,generatePath:()=>w,matchPath:()=>A,useHistory:()=>W,useLocation:()=>O,useParams:()=>$,useRouteMatch:()=>j,withRouter:()=>K});var r=e(94578),o=e(93264),i=e.n(o),a=(e(45697),e(90071)),c=e(42554),u=e(2177),s=e(87462),l=e(14779),p=e.n(l),h=(e(59864),e(35245)),f=e(8679),m=e.n(f),v=function(t){var n=(0,c.Z)();return n.displayName=t,n},d=v("Router-History"),y=function(t){var n=(0,c.Z)();return n.displayName=t,n},Z=y("Router"),C=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}(0,r.Z)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return i().createElement(Z.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i().createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i().Component),g=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,a.PP)(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(C,{history:this.history,children:this.props.children})},n}(i().Component),E=function(t){function n(){return t.apply(this,arguments)||this}(0,r.Z)(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(i().Component);function R(t){var n=t.message,e=t.when,r=void 0===e||e;return i().createElement(Z.Consumer,null,(function(t){if(t||(0,u.Z)(!1),!r||t.staticContext)return null;var e=t.history.block;return i().createElement(E,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var x={},k=0;function w(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(x[t])return x[t];var n=p().compile(t);return k<1e4&&(x[t]=n,k++),n}(t)(n,{pretty:!0})}function M(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return i().createElement(Z.Consumer,null,(function(t){t||(0,u.Z)(!1);var r=t.history,c=t.staticContext,l=o?r.push:r.replace,p=(0,a.ob)(n?"string"==typeof e?w(e,n.params):(0,s.Z)({},e,{pathname:w(e.pathname,n.params)}):e);return c?(l(p),null):i().createElement(E,{onMount:function(){l(p)},onUpdate:function(t,n){var e=(0,a.ob)(n.to);(0,a.Hp)(e,(0,s.Z)({},p,{key:e.key}))||l(p)},to:e})}))}var P={},b=0;function A(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=P[e]||(P[e]={});if(r[t])return r[t];var o=[],i={regexp:p()(t,o,n),keys:o};return b<1e4&&(r[t]=i,b++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],h=u.slice(1),f=t===l;return i&&!f?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:f,params:a.reduce((function(t,n,e){return t[n.name]=h[e],t}),{})}}),null)}var U=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(Z.Consumer,null,(function(n){n||(0,u.Z)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?A(e.pathname,t.props):n.match,o=(0,s.Z)({},n,{location:e,match:r}),a=t.props,c=a.children,l=a.component,p=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i().createElement(Z.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:l?i().createElement(l,o):p?p(o):null:"function"==typeof c?c(o):null)}))},n}(i().Component);function _(t){return"/"===t.charAt(0)?t:"/"+t}function L(t,n){if(!t)return n;var e=_(t);return 0!==n.pathname.indexOf(e)?n:(0,s.Z)({},n,{pathname:n.pathname.substr(e.length)})}function N(t){return"string"==typeof t?t:(0,a.Ep)(t)}function H(t){return function(){(0,u.Z)(!1)}}function S(){}var D=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return S},n.handleBlock=function(){return S},n}(0,r.Z)(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,c=void 0===i?{}:i;c.action=n,c.location=function(t,n){return t?(0,s.Z)({},n,{pathname:_(t)+n.pathname}):n}(o,(0,a.ob)(t)),c.url=N(c.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,c=t.location,u=void 0===c?"/":c,l=(0,h.Z)(t,["basename","context","location"]),p={createHref:function(t){return _(e+N(t))},action:"POP",location:L(e,(0,a.ob)(u)),push:this.handlePush,replace:this.handleReplace,go:H(),goBack:H(),goForward:H(),listen:this.handleListen,block:this.handleBlock};return i().createElement(C,(0,s.Z)({},l,{history:p,staticContext:o}))},n}(i().Component),B=function(t){function n(){return t.apply(this,arguments)||this}return(0,r.Z)(n,t),n.prototype.render=function(){var t=this;return i().createElement(Z.Consumer,null,(function(n){n||(0,u.Z)(!1);var e,r,o=t.props.location||n.location;return i().Children.forEach(t.props.children,(function(t){if(null==r&&i().isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?A(o.pathname,(0,s.Z)({},t.props,{path:a})):n.match}})),r?i().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(i().Component);function K(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,h.Z)(n,["wrappedComponentRef"]);return i().createElement(Z.Consumer,null,(function(n){return n||(0,u.Z)(!1),i().createElement(t,(0,s.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,m()(e,t)}var T=i().useContext;function W(){return T(d)}function O(){return T(Z).location}function $(){var t=T(Z).match;return t?t.params:{}}function j(t){var n=O(),e=T(Z).match;return t?A(n.pathname,t):e}var q=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,a.lX)(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(C,{history:this.history,children:this.props.children})},n}(i().Component),F=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=(0,a.q_)(n.props),n}return(0,r.Z)(n,t),n.prototype.render=function(){return i().createElement(C,{history:this.history,children:this.props.children})},n}(i().Component),V=function(t,n){return"function"==typeof t?t(n):t},X=function(t,n){return"string"==typeof t?(0,a.ob)(t,null,null,n):t},z=function(t){return t},G=i().forwardRef;void 0===G&&(G=z);var I=G((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,a=(0,h.Z)(t,["innerRef","navigate","onClick"]),c=a.target,u=(0,s.Z)({},a,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return u.ref=z!==G&&n||e,i().createElement("a",u)})),J=G((function(t,n){var e=t.component,r=void 0===e?I:e,o=t.replace,a=t.to,c=t.innerRef,l=(0,h.Z)(t,["component","replace","to","innerRef"]);return i().createElement(Z.Consumer,null,(function(t){t||(0,u.Z)(!1);var e=t.history,p=X(V(a,t.location),t.location),h=p?e.createHref(p):"",f=(0,s.Z)({},l,{href:h,navigate:function(){var n=V(a,t.location);(o?e.replace:e.push)(n)}});return z!==G?f.ref=n||c:f.innerRef=c,i().createElement(r,f)}))})),Q=function(t){return t},Y=i().forwardRef;void 0===Y&&(Y=Q);var tt=Y((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,a=void 0===o?"active":o,c=t.activeStyle,l=t.className,p=t.exact,f=t.isActive,m=t.location,v=t.sensitive,d=t.strict,y=t.style,C=t.to,g=t.innerRef,E=(0,h.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i().createElement(Z.Consumer,null,(function(t){t||(0,u.Z)(!1);var e=m||t.location,o=X(V(C,e),e),h=o.pathname,Z=h&&h.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),R=Z?A(e.pathname,{path:Z,exact:p,sensitive:v,strict:d}):null,x=!!(f?f(R,e):R),k=x?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(l,a):l,w=x?(0,s.Z)({},y,{},c):y,M=(0,s.Z)({"aria-current":x&&r||null,className:k,style:w,to:o},E);return Q!==Y?M.ref=n||g:M.innerRef=g,i().createElement(J,M)}))}))}}]);
//# sourceMappingURL=../sourcemaps/1937.f3ba481254699012a236d8e380c65677.js.map