"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[3337],{19927:(n,e,t)=>{t.d(e,{Z:()=>M});var o=t(87462),r=t(97685),a=t(4942),i=t(45987),c=t(67294),s=t(94184),l=t.n(s),d=t(28574);const m=(0,c.createContext)({});var u=t(1413),f=t(71002),p=t(80334),y=t(44958);function g(n){var e;return null==n||null===(e=n.getRootNode)||void 0===e?void 0:e.call(n)}function C(n){return function(n){return g(n)!==(null==n?void 0:n.ownerDocument)}(n)?g(n):null}function h(n){return"object"===(0,f.Z)(n)&&"string"==typeof n.name&&"string"==typeof n.theme&&("object"===(0,f.Z)(n.icon)||"function"==typeof n.icon)}function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var o=n[t];if("class"===t)e.className=o,delete e.class;else e[t]=o;return e}),{})}function k(n,e,t){return t?c.createElement(n.tag,(0,u.Z)((0,u.Z)({key:e},v(n.attrs)),t),(n.children||[]).map((function(t,o){return k(t,"".concat(e,"-").concat(n.tag,"-").concat(o))}))):c.createElement(n.tag,(0,u.Z)({key:e},v(n.attrs)),(n.children||[]).map((function(t,o){return k(t,"".concat(e,"-").concat(n.tag,"-").concat(o))})))}function b(n){return(0,d.R_)(n)[0]}function Z(n){return n?Array.isArray(n)?n:[n]:[]}var w=["icon","className","onClick","style","primaryColor","secondaryColor"],x={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var E=function(n){var e,t,o,r,a,s,l,d=n.icon,f=n.className,g=n.onClick,v=n.style,Z=n.primaryColor,E=n.secondaryColor,T=(0,i.Z)(n,w),N=c.useRef(),B=x;if(Z&&(B={primaryColor:Z,secondaryColor:E||b(Z)}),e=N,t=(0,c.useContext)(m),o=t.csp,r=t.prefixCls,a="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",r&&(a=a.replace(/anticon/g,r)),(0,c.useEffect)((function(){var n=C(e.current);(0,y.hq)(a,"@ant-design-icons",{prepend:!0,csp:o,attachTo:n})}),[]),s=h(d),l="icon should be icon definiton, but got ".concat(d),(0,p.ZP)(s,"[@ant-design/icons] ".concat(l)),!h(d))return null;var S=d;return S&&"function"==typeof S.icon&&(S=(0,u.Z)((0,u.Z)({},S),{},{icon:S.icon(B.primaryColor,B.secondaryColor)})),k(S.icon,"svg-".concat(S.name),(0,u.Z)((0,u.Z)({className:f,onClick:g,style:v,"data-icon":S.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},T),{},{ref:N}))};E.displayName="IconReact",E.getTwoToneColors=function(){return(0,u.Z)({},x)},E.setTwoToneColors=function(n){var e=n.primaryColor,t=n.secondaryColor;x.primaryColor=e,x.secondaryColor=t||b(e),x.calculated=!!t};const T=E;function N(n){var e=Z(n),t=(0,r.Z)(e,2),o=t[0],a=t[1];return T.setTwoToneColors({primaryColor:o,secondaryColor:a})}var B=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];N(d.iN.primary);var S=c.forwardRef((function(n,e){var t,s=n.className,d=n.icon,u=n.spin,f=n.rotate,p=n.tabIndex,y=n.onClick,g=n.twoToneColor,C=(0,i.Z)(n,B),h=c.useContext(m),v=h.prefixCls,k=void 0===v?"anticon":v,b=h.rootClassName,w=l()(b,k,(t={},(0,a.Z)(t,"".concat(k,"-").concat(d.name),!!d.name),(0,a.Z)(t,"".concat(k,"-spin"),!!u||"loading"===d.name),t),s),x=p;void 0===x&&y&&(x=-1);var E=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,N=Z(g),S=(0,r.Z)(N,2),M=S[0],R=S[1];return c.createElement("span",(0,o.Z)({role:"img","aria-label":d.name},C,{ref:e,tabIndex:x,onClick:y,className:w}),c.createElement(T,{icon:d,primaryColor:M,secondaryColor:R,style:E}))}));S.displayName="AntdIcon",S.getTwoToneColor=function(){var n=T.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor},S.setTwoToneColor=N;const M=S},45605:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(87462),r=t(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var i=t(19927),c=function(n,e){return r.createElement(i.Z,(0,o.Z)({},n,{ref:e,icon:a}))};const s=r.forwardRef(c)},27052:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var o=t(87462),r=(t(67294),t(3905)),a=t(91360);const i={},c=void 0,s={unversionedId:"myBox/success",id:"myBox/success",title:"success",description:"",source:"@site/docs-hide/myBox/success.mdx",sourceDirName:"myBox",slug:"/myBox/success",permalink:"/docs-hide/myBox/success",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"retro",permalink:"/docs-hide/myBox/retro"},next:{title:"Savoring & Gratitude",permalink:"/docs-hide/savoring-gratitude"}},l={},d=[["20240815","\u770b\u5230\u4e86\u522b\u4eba\u575a\u6301\u5199\u611f\u6069\u65e5\u8bb0\u5f88\u591a\u5e74\uff0c\u6211\u91cd\u65b0\u6574\u7406\u4e86\u81ea\u5df1\u7684\u6587\u6863","\u4f1a\u89c9\u5f97\u4e00\u5207\u90fd\u5728\u6162\u6162\u5730\u5f80\u597d\u7684\u65b9\u5411\u53d1\u5c55"],["20240906","\u516c\u53f8\u664b\u5347\u901a\u8fc7\u5566~\u8fd8\u6da8\u4e862000\u591a\u7684\u5de5\u8d44","\u5f88\u5f00\u5fc3\uff0c\u89c9\u5f97\u81ea\u5df1\u88ab\u8ba4\u53ef"],["","",""]],m=[],u={toc:m},f="wrapper";function p(n){let{components:e,...t}=n;return(0,r.kt)(f,(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{data:d,dimension:["\u65e5\u671f\u548c\u65f6\u95f4","\u4e8b\u4ef6","\u6211\u7684\u611f\u53d7\u5982\u4f55"],isRandom:!1,mdxType:"BasicTable"}))}p.isMDXComponent=!0},91262:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(67294),r=t(72389);function a(n){let{children:e,fallback:t}=n;return(0,r.Z)()?o.createElement(o.Fragment,null,e?.()):t??null}},91360:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(87462),r=t(83062),a=t(10932),i=t(25238),c=t(67294),s=t(79910),l=t(91262),d=t(45605);function m(n){const{data:e=[],showRandom:t=!0,isRandom:m,showNo:u=!0,fixedLeft:f,showSortBy:p=!0,isDesc:y=!0,dimension:g=[],noWrapDimension:C=[],...h}=n,v=e.filter((n=>n.some((n=>n)))),[k,b]=(0,c.useState)(v),[Z,w]=(0,c.useState)([]),[x,E]=(0,c.useState)(y),T=(0,c.useCallback)((()=>{b((n=>(0,s.M)(n)))}),[]),N=(0,c.useCallback)((()=>{b([...v])}),[]),B=(0,c.useCallback)((()=>{b([...v].reverse())}),[]),S=(u?[{title:"No",key:"No",dataIndex:"No"}]:[]).concat(g.map((n=>({title:n,dataIndex:n,key:n,render:e=>{if("string"==typeof e){const[t,o]=e?.split("#");return c.createElement(r.Z,{title:o?c.createElement("span",{style:{whiteSpace:"pre-wrap"}},o):void 0,color:"lime"},c.createElement("span",{style:{whiteSpace:"nowrap"}},C.includes(n)?c.createElement("span",{style:{whiteSpace:"nowrap"}},t):t,!!o&&c.createElement(d.Z,{style:{marginLeft:4}})))}return e}}))).map(((n,e)=>({...n,width:f&&!e?96:void 0,fixed:f&&!e?"left":void 0}))));return(0,c.useEffect)((()=>{x?B():N()}),[x]),(0,c.useEffect)((()=>{m&&T()}),[m]),(0,c.useEffect)((()=>{const n=[];k.forEach(((e,t)=>{const o={};e.forEach(((n,e)=>{o[g[e]]=n,u&&(o.No=t+1)})),n.push(o)})),w(n)}),[k]),c.createElement(l.Z,null,(()=>c.createElement(c.Fragment,null,t&&c.createElement(a.ZP,{type:"primary",style:{marginBottom:10,marginRight:10},onClick:T},"Random"),p&&c.createElement(a.ZP,{style:{marginBottom:10},onClick:()=>E((n=>!n))},"sort by ",x?"asc":"desc"),c.createElement("span",{className:"ml10"},"\u603b\u8ba1\uff1a",k.length),c.createElement(i.Z,(0,o.Z)({},h,{dataSource:Z,columns:S,pagination:{defaultPageSize:100}})))))}},79910:(n,e,t)=>{t.d(e,{M:()=>r,e:()=>o});const o=(n,e)=>{if(e<=1||n.length<=1)return n;{const t=Math.ceil(n.length/e),o=new Array(t);for(let r=0;r<o.length;r++)o[r]=new Array(e).fill("").map(((t,o)=>n[e*r+o]));return o}},r=function(n){void 0===n&&(n=[]);const e=[...n],t=[];for(;e.length;){const n=Math.floor(Math.random()*e.length);t.push(e[n]),e.splice(n,1)}return t}}}]);