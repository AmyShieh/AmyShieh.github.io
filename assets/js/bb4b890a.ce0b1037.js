"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[593],{19927:(e,n,t)=>{t.d(n,{Z:()=>R});var o=t(87462),r=t(97685),a=t(4942),i=t(45987),c=t(67294),l=t(94184),s=t.n(l),d=t(28574);const m=(0,c.createContext)({});var u=t(1413),f=t(71002),p=t(80334),y=t(44958);function g(e){var n;return null==e||null===(n=e.getRootNode)||void 0===n?void 0:n.call(e)}function C(e){return function(e){return g(e)!==(null==e?void 0:e.ownerDocument)}(e)?g(e):null}function h(e){return"object"===(0,f.Z)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,f.Z)(e.icon)||"function"==typeof e.icon)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var o=e[t];if("class"===t)n.className=o,delete n.class;else n[t]=o;return n}),{})}function k(e,n,t){return t?c.createElement(e.tag,(0,u.Z)((0,u.Z)({key:n},v(e.attrs)),t),(e.children||[]).map((function(t,o){return k(t,"".concat(n,"-").concat(e.tag,"-").concat(o))}))):c.createElement(e.tag,(0,u.Z)({key:n},v(e.attrs)),(e.children||[]).map((function(t,o){return k(t,"".concat(n,"-").concat(e.tag,"-").concat(o))})))}function b(e){return(0,d.R_)(e)[0]}function Z(e){return e?Array.isArray(e)?e:[e]:[]}var w=["icon","className","onClick","style","primaryColor","secondaryColor"],x={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var E=function(e){var n,t,o,r,a,l,s,d=e.icon,f=e.className,g=e.onClick,v=e.style,Z=e.primaryColor,E=e.secondaryColor,T=(0,i.Z)(e,w),N=c.useRef(),B=x;if(Z&&(B={primaryColor:Z,secondaryColor:E||b(Z)}),n=N,t=(0,c.useContext)(m),o=t.csp,r=t.prefixCls,a="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",r&&(a=a.replace(/anticon/g,r)),(0,c.useEffect)((function(){var e=C(n.current);(0,y.hq)(a,"@ant-design-icons",{prepend:!0,csp:o,attachTo:e})}),[]),l=h(d),s="icon should be icon definiton, but got ".concat(d),(0,p.ZP)(l,"[@ant-design/icons] ".concat(s)),!h(d))return null;var M=d;return M&&"function"==typeof M.icon&&(M=(0,u.Z)((0,u.Z)({},M),{},{icon:M.icon(B.primaryColor,B.secondaryColor)})),k(M.icon,"svg-".concat(M.name),(0,u.Z)((0,u.Z)({className:f,onClick:g,style:v,"data-icon":M.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},T),{},{ref:N}))};E.displayName="IconReact",E.getTwoToneColors=function(){return(0,u.Z)({},x)},E.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;x.primaryColor=n,x.secondaryColor=t||b(n),x.calculated=!!t};const T=E;function N(e){var n=Z(e),t=(0,r.Z)(n,2),o=t[0],a=t[1];return T.setTwoToneColors({primaryColor:o,secondaryColor:a})}var B=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];N(d.iN.primary);var M=c.forwardRef((function(e,n){var t,l=e.className,d=e.icon,u=e.spin,f=e.rotate,p=e.tabIndex,y=e.onClick,g=e.twoToneColor,C=(0,i.Z)(e,B),h=c.useContext(m),v=h.prefixCls,k=void 0===v?"anticon":v,b=h.rootClassName,w=s()(b,k,(t={},(0,a.Z)(t,"".concat(k,"-").concat(d.name),!!d.name),(0,a.Z)(t,"".concat(k,"-spin"),!!u||"loading"===d.name),t),l),x=p;void 0===x&&y&&(x=-1);var E=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,N=Z(g),M=(0,r.Z)(N,2),R=M[0],S=M[1];return c.createElement("span",(0,o.Z)({role:"img","aria-label":d.name},C,{ref:n,tabIndex:x,onClick:y,className:w}),c.createElement(T,{icon:d,primaryColor:R,secondaryColor:S,style:E}))}));M.displayName="AntdIcon",M.getTwoToneColor=function(){var e=T.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},M.setTwoToneColor=N;const R=M},45605:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(87462),r=t(67294);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};var i=t(19927),c=function(e,n){return r.createElement(i.Z,(0,o.Z)({},e,{ref:n,icon:a}))};const l=r.forwardRef(c)},52717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=t(87462),r=(t(67294),t(3905)),a=t(91360);const i={},c=void 0,l={unversionedId:"myBox/gratitude",id:"myBox/gratitude",title:"gratitude",description:"",source:"@site/docs-hide/myBox/gratitude.mdx",sourceDirName:"myBox",slug:"/myBox/gratitude",permalink:"/docs-hide/myBox/gratitude",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u7531\u63a2\u7d22",permalink:"/docs-hide/free"},next:{title:"retro",permalink:"/docs-hide/myBox/retro"}},s={},d=[["20240815","\u770b\u5230\u4e86\u522b\u4eba\u575a\u6301\u5199\u611f\u6069\u65e5\u8bb0\u5f88\u591a\u5e74\uff0c\u6211\u91cd\u65b0\u6574\u7406\u4e86\u81ea\u5df1\u7684\u6587\u6863","\u4f1a\u89c9\u5f97\u4e00\u5207\u90fd\u5728\u6162\u6162\u5730\u5f80\u597d\u7684\u65b9\u5411\u53d1\u5c55"],["","",""],["","",""]],m=[],u={toc:m},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{data:d,dimension:["\u65e5\u671f\u548c\u65f6\u95f4","\u4e8b\u4ef6","\u6211\u7684\u611f\u53d7\u5982\u4f55"],isRandom:!1,mdxType:"BasicTable"}))}p.isMDXComponent=!0},91262:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(67294),r=t(72389);function a(e){let{children:n,fallback:t}=e;return(0,r.Z)()?o.createElement(o.Fragment,null,n?.()):t??null}},91360:(e,n,t)=>{t.d(n,{Z:()=>m});var o=t(87462),r=t(83062),a=t(10932),i=t(25238),c=t(67294),l=t(79910),s=t(91262),d=t(45605);function m(e){const{data:n=[],showRandom:t=!0,isRandom:m,showNo:u=!0,fixedLeft:f,showSortBy:p=!0,isDesc:y=!0,dimension:g=[],noWrapDimension:C=[],...h}=e,v=n.filter((e=>e.some((e=>e)))),[k,b]=(0,c.useState)(v),[Z,w]=(0,c.useState)([]),[x,E]=(0,c.useState)(y),T=(0,c.useCallback)((()=>{b((e=>(0,l.M)(e)))}),[]),N=(0,c.useCallback)((()=>{b([...v])}),[]),B=(0,c.useCallback)((()=>{b([...v].reverse())}),[]),M=(u?[{title:"No",key:"No",dataIndex:"No"}]:[]).concat(g.map((e=>({title:e,dataIndex:e,key:e,render:n=>{if("string"==typeof n){const[t,o]=n?.split("#");return c.createElement(r.Z,{title:o?c.createElement("span",{style:{whiteSpace:"pre-wrap"}},o):void 0,color:"lime"},c.createElement("span",{style:{whiteSpace:"nowrap"}},C.includes(e)?c.createElement("span",{style:{whiteSpace:"nowrap"}},t):t,!!o&&c.createElement(d.Z,{style:{marginLeft:4}})))}return n}}))).map(((e,n)=>({...e,width:f&&!n?96:void 0,fixed:f&&!n?"left":void 0}))));return(0,c.useEffect)((()=>{x?B():N()}),[x]),(0,c.useEffect)((()=>{m&&T()}),[m]),(0,c.useEffect)((()=>{const e=[];k.forEach(((n,t)=>{const o={};n.forEach(((e,n)=>{o[g[n]]=e,u&&(o.No=t+1)})),e.push(o)})),w(e)}),[k]),c.createElement(s.Z,null,(()=>c.createElement(c.Fragment,null,t&&c.createElement(a.ZP,{type:"primary",style:{marginBottom:10,marginRight:10},onClick:T},"Random"),p&&c.createElement(a.ZP,{style:{marginBottom:10},onClick:()=>E((e=>!e))},"sort by ",x?"asc":"desc"),c.createElement("span",{className:"ml10"},"\u603b\u8ba1\uff1a",k.length),c.createElement(i.Z,(0,o.Z)({},h,{dataSource:Z,columns:M,pagination:{defaultPageSize:100}})))))}},79910:(e,n,t)=>{t.d(n,{M:()=>r,e:()=>o});const o=(e,n)=>{if(n<=1||e.length<=1)return e;{const t=Math.ceil(e.length/n),o=new Array(t);for(let r=0;r<o.length;r++)o[r]=new Array(n).fill("").map(((t,o)=>e[n*r+o]));return o}},r=function(e){void 0===e&&(e=[]);const n=[...e],t=[];for(;n.length;){const e=Math.floor(Math.random()*n.length);t.push(n[e]),n.splice(e,1)}return t}}}]);