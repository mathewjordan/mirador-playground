(self.webpackChunkmirador_playground=self.webpackChunkmirador_playground||[]).push([[390],{77206:(e,t,n)=>{"use strict";var r=n(91521),o=n(52898);t.Z=void 0;var a=o(n(63804)),i=(0,r(n(2108)).default)(a.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutlineSharp");t.Z=i},99049:(e,t,n)=>{"use strict";var r=n(91521),o=n(52898);t.Z=void 0;var a=o(n(63804)),i=(0,r(n(2108)).default)(a.createElement("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"PlayCircleOutlineSharp");t.Z=i},59169:(e,t,n)=>{"use strict";var r=n(91521),o=n(52898);t.Z=void 0;var a=o(n(63804)),i=(0,r(n(2108)).default)(a.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutlineSharp");t.Z=i},5390:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var r=n(14890),o=n(11196),a=n(63804),i=n.n(a),c=n(37703),u=n(8935),l=n(49353),s=n(59114),f=n(81610),p=n(94184),d=n.n(p),v=n(79895),h=n(22318),w=n(87217),y=n(36691),m=n(1172),b=n(77206),C=n(59169),O=n(62087);function g(e){return i().createElement(O.Z,e,i().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},i().createElement("path",{d:"M6,15H9v3h2V13H6Zm9-6V6H13v5h5V9Z"}),i().createElement("path",{d:"M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8,8,8,0,0,1-8,8Z"})))}var E=n(79058);function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).handleZoomInClick=t.handleZoomInClick.bind(P(t)),t.handleZoomOutClick=t.handleZoomOutClick.bind(P(t)),t}return t=c,(n=[{key:"handleZoomInClick",value:function(){var e=this.props,t=e.windowId;(0,e.updateViewport)(t,{zoom:2*e.viewer.zoom})}},{key:"handleZoomOutClick",value:function(){var e=this.props,t=e.windowId;(0,e.updateViewport)(t,{zoom:e.viewer.zoom/2})}},{key:"render",value:function(){var e=this.props,t=e.displayDivider,n=e.showZoomControls,r=e.classes,o=e.t,a=e.zoomToWorld;return n?i().createElement("div",{className:r.zoom_controls},i().createElement(E.Z,{"aria-label":o("zoomIn"),onClick:this.handleZoomInClick},i().createElement(b.Z,null)),i().createElement(E.Z,{"aria-label":o("zoomOut"),onClick:this.handleZoomOutClick},i().createElement(C.Z,null)),i().createElement(E.Z,{"aria-label":o("zoomReset"),onClick:function(){return a(!1)}},i().createElement(g,null)),t&&i().createElement("span",{className:r.divider})):i().createElement(i().Fragment,null)}}])&&Z(t.prototype,n),c}(a.Component);I.defaultProps={displayDivider:!0,showZoomControls:!1,t:function(e){return e},updateViewport:function(){},viewer:{},windowId:""};var x={updateViewport:y.WH};const R=(0,r.qC)((0,w.Z)(),(0,l.Z)((function(e){return{divider:{borderRight:"1px solid #808080",display:"inline-block",height:"24px",margin:"12px 6px"},ListItem:{paddingBottom:0,paddingTop:0},zoom_controls:{display:"flex",flexDirection:"row",justifyContent:"center"}}})),(0,c.$j)((function(e,t){var n=t.windowId;return{showZoomControls:(0,m._M)(e),viewer:(0,f.gA)(e,{windowId:n})}}),x),(0,o.A)("ZoomControls"))(I);var N=n(81720);function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function c(){return z(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.canvasCount,n=e.canvasIndex,r=e.canvasLabel,o=e.classes,a=e.t;return i().createElement("div",{className:d()((0,N.Z)("osd-info"),o.osdInfo)},i().createElement(h.Z,{display:"inline",variant:"caption",className:(0,N.Z)("canvas-count")},a("pagination",{current:n+1,total:t})),i().createElement(h.Z,{display:"inline",variant:"caption",className:(0,N.Z)("canvas-label")},r&&" • ".concat(r)))}}])&&S(t.prototype,n),c}(a.Component);D.defaultProps={canvasLabel:void 0,t:function(){}};var V=n(49455),M=n(95981);const W=(0,r.qC)((0,l.Z)({osdInfo:{order:2,overflow:"hidden",paddingBottom:3,textOverflow:"ellipsis",unicodeBidi:"plaintext",whiteSpace:"nowrap",width:"100%"}}),(0,w.Z)(),(0,c.$j)((function(e,t){var n=t.windowId,r=(0,V.LU)(e,{windowId:n}),o=(0,M.Dr)(e,{windowId:n}),a=((0,V.Pm)(e,{windowId:n})||{}).id;return{canvasCount:r.length,canvasIndex:o,canvasLabel:(0,V.vt)(e,{canvasId:a,windowId:n})}}),null),(0,o.A)("ViewerInfo"))(D);var q=n(99049);function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return F(this,e)});function c(){return H(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.hasNextCanvas,n=e.hasPreviousCanvas,r=e.setNextCanvas,o=e.setPreviousCanvas,a=e.t,c=e.classes,u="ltr",l={},s={};switch(e.viewingDirection){case"top-to-bottom":l={transform:"rotate(270deg)"},s={transform:"rotate(90deg)"};break;case"bottom-to-top":l={transform:"rotate(90deg)"},s={transform:"rotate(270deg)"};break;case"right-to-left":u="rtl",l={},s={transform:"rotate(180deg)"};break;default:l={transform:"rotate(180deg)"},s={}}return i().createElement("div",{className:d()((0,N.Z)("osd-navigation"),c.osdNavigation),dir:u},i().createElement(E.Z,{"aria-label":a("previousCanvas"),className:(0,N.Z)("previous-canvas-button"),disabled:!n,onClick:function(){n&&o()}},i().createElement(q.Z,{style:l})),i().createElement(E.Z,{"aria-label":a("nextCanvas"),className:(0,N.Z)("next-canvas-button"),disabled:!t,onClick:function(){t&&r()}},i().createElement(q.Z,{style:s})))}}])&&L(t.prototype,n),c}(a.Component);Q.defaultProps={hasNextCanvas:!1,hasPreviousCanvas:!1,setNextCanvas:function(){},setPreviousCanvas:function(){},viewingDirection:""};const X=(0,r.qC)((0,l.Z)({osdNavigation:{order:1}}),(0,w.Z)(),(0,c.$j)((function(e,t){var n=t.windowId;return{hasNextCanvas:!!(0,V.m7)(e,{windowId:n}),hasPreviousCanvas:!!(0,V.iQ)(e,{windowId:n}),viewingDirection:(0,M.Xf)(e,{windowId:n})}}),(function(e,t){var n=t.windowId;return{setNextCanvas:function(){return e(y.NU(n))},setPreviousCanvas:function(){return e(y.Ch(n))}}})),(0,o.A)("ViewerNavigation"))(Q);var G=n(95450);function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ee(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ne=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(c,e);var t,n,r,o,a=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=te(r);if(o){var n=te(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ee(this,e)});function c(){return J(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"canvasNavControlsAreStacked",value:function(){var e=this.props.size;return e&&e.width&&e.width<=253}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.visible,r=e.windowId,o=e.zoomToWorld;return n?i().createElement(v.Z,{square:!0,className:d()(t.controls,(0,N.Z)("canvas-nav"),t.canvasNav,this.canvasNavControlsAreStacked()?(0,N.Z)("canvas-nav-stacked"):null,this.canvasNavControlsAreStacked()?t.canvasNavStacked:null),elevation:0},i().createElement(R,{displayDivider:!this.canvasNavControlsAreStacked(),windowId:r,zoomToWorld:o}),i().createElement(X,{windowId:r}),i().createElement(W,{windowId:r}),i().createElement(G.M,this.props)):i().createElement(h.Z,{variant:"srOnly",component:"div"},i().createElement(W,{windowId:r}))}}])&&K(t.prototype,n),c}(a.Component);ne.defaultProps={classes:{},visible:!0};const re=(0,r.qC)((0,c.$j)((function(e,t){var n=t.windowId;return{visible:(0,f.oq)(e).focusedWindowId===n}})),(0,l.Z)((function(e){return{canvasNav:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",textAlign:"center"},canvasNavStacked:{flexDirection:"column"},controls:{backgroundColor:(0,s.U1)(e.palette.background.paper,.5),bottom:0,position:"absolute",width:"100%",zIndex:50}}})),(0,u.withSize)(),(0,o.A)("WindowCanvasNavigationControls"))(ne);function oe(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ue=(0,a.lazy)((function(){return n.e(501).then(n.bind(n,26501))})),le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(l,e);var t,n,r,o,c,u=(o=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ce(o);if(c){var n=ce(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ie(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).state={},t}return t=l,r=[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}],(n=[{key:"render",value:function(){var e=this.props.windowId;return this.state.hasError?i().createElement(i().Fragment,null):i().createElement(a.Suspense,{fallback:i().createElement("div",null)},i().createElement(ue,{windowId:e},i().createElement(re,{windowId:e})))}}])&&oe(t.prototype,n),r&&oe(t,r),l}(a.Component);const se=(0,r.qC)((0,o.A)("WindowViewer"))(le)}}]);
//# sourceMappingURL=390.bundle.js.map