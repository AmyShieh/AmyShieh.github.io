/*! For license information please see eef062d6.38fd6a1f.js.LICENSE.txt */
(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[323],{98787:(e,t,r)=>{"use strict";r.d(t,{o2:()=>a,yT:()=>i});var n=r(96641),o=r(8796);const c=o.i.map((e=>`${e}-inverse`)),l=["success","processing","error","default","warning"];function a(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?[].concat((0,n.Z)(c),(0,n.Z)(o.i)).includes(e):o.i.includes(e)}function i(e){return l.includes(e)}},35792:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(25976);const o=e=>{const[,,,,t]=(0,n.ZP)();return t?`${e}-css-var`:""}},8796:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});const n=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},98719:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(8796);function o(e,t){return n.i.reduce(((r,n)=>{const o=e[`${n}1`],c=e[`${n}3`],l=e[`${n}6`],a=e[`${n}7`];return Object.assign(Object.assign({},r),t(n,{lightColor:o,lightBorderColor:c,darkColor:l,textColor:a}))}),{})}},85846:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(83963),o=r(67294);const c={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var l=r(83076),a=function(e,t){return o.createElement(l.Z,(0,n.Z)({},e,{ref:t,icon:c}))};const i=o.forwardRef(a)},15008:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MyInput:()=>V,assets:()=>X,contentTitle:()=>F,default:()=>U,frontMatter:()=>D,metadata:()=>q,toc:()=>W});var n=r(87462),o=r(67294),c=r(3905),l=r(21176),a=r(10932),i=r(13144),s=r.n(i),u=r(10366),d=r(98787),f=r(85846),p=r(1337);function g(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function v(e){const{closable:t,closeIcon:r}=e||{};return o.useMemo((()=>{if(!t&&(!1===t||!1===r||null===r))return!1;if(void 0===t&&void 0===r)return null;let e={closeIcon:"boolean"!=typeof r&&null!==r?r:void 0};return t&&"object"==typeof t&&(e=Object.assign(Object.assign({},e),t)),e}),[t,r])}function b(){const e={};for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return r.forEach((t=>{t&&Object.keys(t).forEach((r=>{void 0!==t[r]&&(e[r]=t[r])}))})),e}const m={};var y=r(96159),h=r(75076),C=r(53124),k=r(57477),O=r(10274),w=r(14747),x=r(61129),Z=r(83559);const S=e=>{const{lineWidth:t,fontSizeIcon:r,calc:n}=e,o=e.fontSizeSM;return(0,x.IX)(e,{tagFontSize:o,tagLineHeight:(0,k.bf)(n(e.lineHeightSM).mul(o).equal()),tagIconSize:n(r).sub(n(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},$=e=>({defaultBg:new O.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),j=(0,Z.I$)("Tag",(e=>(e=>{const{paddingXXS:t,lineWidth:r,tagPaddingHorizontal:n,componentCls:o,calc:c}=e,l=c(n).sub(r).equal(),a=c(t).sub(r).equal();return{[o]:Object.assign(Object.assign({},(0,w.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,k.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:a,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}})(S(e))),$);var E=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const N=o.forwardRef(((e,t)=>{const{prefixCls:r,style:n,className:c,checked:l,onChange:a,onClick:i}=e,u=E(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:d,tag:f}=o.useContext(C.E_),p=d("tag",r),[g,v,b]=j(p),m=s()(p,`${p}-checkable`,{[`${p}-checkable-checked`]:l},null==f?void 0:f.className,c,v,b);return g(o.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},n),null==f?void 0:f.style),className:m,onClick:e=>{null==a||a(!l),null==i||i(e)}})))})),T=N;var I=r(98719);const P=(0,Z.bk)(["Tag","preset"],(e=>(e=>(0,I.Z)(e,((t,r)=>{let{textColor:n,lightBorderColor:o,lightColor:c,darkColor:l}=r;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:n,background:c,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})))(S(e))),$);const M=(e,t,r)=>{const n="string"!=typeof(o=r)?o:o.charAt(0).toUpperCase()+o.slice(1);var o;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${r}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},B=(0,Z.bk)(["Tag","status"],(e=>{const t=S(e);return[M(t,"success","Success"),M(t,"processing","Info"),M(t,"error","Error"),M(t,"warning","Warning")]}),$);var R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};const L=o.forwardRef(((e,t)=>{const{prefixCls:r,className:n,rootClassName:c,style:l,children:a,icon:i,color:k,onClose:O,bordered:w=!0,visible:x}=e,Z=R(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:S,direction:$,tag:E}=o.useContext(C.E_),[N,T]=o.useState(!0),I=(0,u.Z)(Z,["closeIcon","closable"]);o.useEffect((()=>{void 0!==x&&T(x)}),[x]);const M=(0,d.o2)(k),L=(0,d.yT)(k),A=M||L,z=Object.assign(Object.assign({backgroundColor:k&&!A?k:void 0},null==E?void 0:E.style),l),H=S("tag",r),[_,D,F]=j(H),q=s()(H,null==E?void 0:E.className,{[`${H}-${k}`]:A,[`${H}-has-color`]:k&&!A,[`${H}-hidden`]:!N,[`${H}-rtl`]:"rtl"===$,[`${H}-borderless`]:!w},n,c,D,F),X=e=>{e.stopPropagation(),null==O||O(e),e.defaultPrevented||T(!1)},[,W]=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:m;const n=v(e),c=v(t),l=o.useMemo((()=>Object.assign({closeIcon:o.createElement(f.Z,null)},r)),[r]),a=o.useMemo((()=>!1!==n&&(n?b(l,c,n):!1!==c&&(c?b(l,c):!!l.closable&&l))),[n,c,l]);return o.useMemo((()=>{if(!1===a)return[!1,null];const{closeIconRender:e}=l,{closeIcon:t}=a;let r=t;if(null!=r){e&&(r=e(t));const n=(0,p.Z)(a,!0);Object.keys(n).length&&(r=o.isValidElement(r)?o.cloneElement(r,n):o.createElement("span",Object.assign({},n),r))}return[!0,r]}),[a,l])}(g(e),g(E),{closable:!1,closeIconRender:e=>{const t=o.createElement("span",{className:`${H}-close-icon`,onClick:X},e);return(0,y.wm)(e,t,(e=>({onClick:t=>{var r;null===(r=null==e?void 0:e.onClick)||void 0===r||r.call(e,t),X(t)},className:s()(null==e?void 0:e.className,`${H}-close-icon`)})))}}),V="function"==typeof Z.onClick||a&&"a"===a.type,Q=i||null,G=Q?o.createElement(o.Fragment,null,Q,a&&o.createElement("span",null,a)):a,U=o.createElement("span",Object.assign({},I,{ref:t,className:q,style:z}),G,W,M&&o.createElement(P,{key:"preset",prefixCls:H}),L&&o.createElement(B,{key:"status",prefixCls:H}));return _(V?o.createElement(h.Z,{component:"Tag"},U):U)})),A=L;A.CheckableTag=T;const z=A,H="margin_kDbj";var _=r(86010);const D={},F="Calculator",q={unversionedId:"calculator/index",id:"calculator/index",title:"Calculator",description:"\u589e\u957f\u7387 & \u4e0b\u964d\u7387",source:"@site/docs-others/calculator/index.mdx",sourceDirName:"calculator",slug:"/calculator/",permalink:"/docs-others/calculator/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bf4\u660e",permalink:"/docs-others/intro"}},X={},W=[{value:"\u589e\u957f\u7387 &amp; \u4e0b\u964d\u7387",id:"\u589e\u957f\u7387--\u4e0b\u964d\u7387",level:2}],V=()=>{const[e,t]=(0,o.useState)(0),[r,n]=(0,o.useState)(0),[i,s]=(0,o.useState)(),[u,d]=(0,o.useState)();return(0,o.useEffect)((()=>{t((i-u)/u),n((i-u)/i)}),[i,u]),(0,c.kt)(o.Fragment,null,(0,c.kt)("div",{className:"row"},"\u65b9\u4fbf\u8ba1\u7b97\u589e\u957f\u7387,\u4e0b\u964d\u7387:"),(0,c.kt)("div",{className:"row"},(0,c.kt)("div",{className:(0,_.Z)("col-4",H)},(0,c.kt)(l.Z,{type:"number",value:i,onChange:e=>s(Number(e.target.value)),maxLength:16,placeholder:"\u8fd9\u91cc\u8f93\u5165\u5927\u7684\u503c",mdxType:"Input"})),(0,c.kt)("div",{className:(0,_.Z)("col-4",H)},(0,c.kt)(l.Z,{type:"number",value:u,onChange:e=>d(Number(e.target.value)),maxLength:16,placeholder:"\u8fd9\u91cc\u8f93\u5165\u5c0f\u7684\u503c",mdxType:"Input"})),(0,c.kt)("div",{className:(0,_.Z)("col-4",H)},(0,c.kt)(a.ZP,{type:"primary",onClick:()=>{s(),d()},mdxType:"Button"},"\u91cd\u7f6e"))),(0,c.kt)("div",{className:"row"},(0,c.kt)("p",{className:(0,_.Z)("col-4",H)},"\u5dee\u503c: ",i||0-u||0),(0,c.kt)("p",{className:(0,_.Z)("col-4",H)},"\u589e\u957f\u7387:",(0,c.kt)(z,{color:"red",mdxType:"Tag"},isNaN(e)?"-":100*e,"%")),(0,c.kt)("p",{className:(0,_.Z)("col-4",H)},"\u4e0b\u964d\u7387:",(0,c.kt)(z,{color:"green",mdxType:"Tag"},isNaN(r)?"-":100*r,"%"))))},Q={toc:W,MyInput:V},G="wrapper";function U(e){let{components:t,...r}=e;return(0,c.kt)(G,(0,n.Z)({},Q,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"calculator"},"Calculator"),(0,c.kt)("h2",{id:"\u589e\u957f\u7387--\u4e0b\u964d\u7387"},"\u589e\u957f\u7387 & \u4e0b\u964d\u7387"),(0,c.kt)(V,{mdxType:"MyInput"}))}U.isMDXComponent=!0},94184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var l=o.apply(null,r);l&&e.push(l)}}else if("object"===c){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},34203:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),o=r(73935);function c(e){return function(e){return e instanceof HTMLElement||e instanceof SVGElement}(e)?e:e instanceof n.Component?o.findDOMNode(e):null}},66680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(67294);function o(e){var t=n.useRef();t.current=e;var r=n.useCallback((function(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(n))}),[]);return r}},21770:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(97685),o=r(66680),c=r(8410),l=r(30470);function a(e){return void 0!==e}function i(e,t){var r=t||{},i=r.defaultValue,s=r.value,u=r.onChange,d=r.postState,f=(0,l.Z)((function(){return a(s)?s:a(i)?"function"==typeof i?i():i:"function"==typeof e?e():e})),p=(0,n.Z)(f,2),g=p[0],v=p[1],b=void 0!==s?s:g,m=d?d(b):b,y=(0,o.Z)(u),h=(0,l.Z)([b]),C=(0,n.Z)(h,2),k=C[0],O=C[1];return(0,c.o)((function(){var e=k[0];g!==e&&y(g,e)}),[k]),(0,c.o)((function(){a(s)||v(s)}),[s]),[m,(0,o.Z)((function(e,t){v(e,t),O([b],t)}))]}},30470:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(97685),o=r(67294);function c(e){var t=o.useRef(!1),r=o.useState(e),c=(0,n.Z)(r,2),l=c[0],a=c[1];return o.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[l,function(e,r){r&&t.current||a(e)}]}},75164:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=function(e){return+setTimeout(e,16)},o=function(e){return clearTimeout(e)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(n=function(e){return window.requestAnimationFrame(e)},o=function(e){return window.cancelAnimationFrame(e)});var c=0,l=new Map;function a(e){l.delete(e)}var i=function(e){var t=c+=1;return function r(o){if(0===o)a(t),e();else{var c=n((function(){r(o-1)}));l.set(t,c)}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),t};i.cancel=function(e){var t=l.get(e);return a(t),o(t)};const s=i},42550:(e,t,r)=>{"use strict";r.d(t,{Yr:()=>s,mH:()=>l,sQ:()=>a,x1:()=>i});var n=r(71002),o=r(59864),c=r(56982);function l(e,t){"function"==typeof e?e(t):"object"===(0,n.Z)(e)&&e&&"current"in e&&(e.current=t)}function a(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t.filter((function(e){return e}));return n.length<=1?n[0]:function(e){t.forEach((function(t){l(t,e)}))}}function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,c.Z)((function(){return a.apply(void 0,t)}),t,(function(e,t){return e.length===t.length&&e.every((function(e,r){return e===t[r]}))}))}function s(e){var t,r,n=(0,o.isMemo)(e)?e.type.type:e.type;return!!("function"!=typeof n||null!==(t=n.prototype)&&void 0!==t&&t.render)&&!!("function"!=typeof e||null!==(r=e.prototype)&&void 0!==r&&r.render)}},97326:(e,t,r)=>{"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:()=>n})},73568:(e,t,r)=>{"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:()=>l});var o=r(71002),c=r(97326);function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,l=n(e);if(t){var a=n(this).constructor;r=Reflect.construct(l,arguments,a)}else r=l.apply(this,arguments);return function(e,t){if(t&&("object"===(0,o.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(e)}(this,r)}}},60136:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(89611);function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,n.Z)(e,t)}},45987:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(63366);function o(e,t){if(null==e)return{};var r,o,c=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}}}]);