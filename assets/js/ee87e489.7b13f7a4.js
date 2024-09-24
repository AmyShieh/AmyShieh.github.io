"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[4891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},34523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},i="React",l={unversionedId:"fe-framework/React",id:"fe-framework/React",title:"React",description:"\u751f\u6001",source:"@site/docs/fe-framework/React.md",sourceDirName:"fe-framework",slug:"/fe-framework/React",permalink:"/docs/fe-framework/React",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u6846\u67b6",permalink:"/docs/category/\u524d\u7aef\u6846\u67b6"},next:{title:"Vue",permalink:"/docs/fe-framework/Vue"}},c={},s=[{value:"\u751f\u6001",id:"\u751f\u6001",level:2},{value:"\u521d\u59cb\u5316 &amp; \u57fa\u7840",id:"\u521d\u59cb\u5316--\u57fa\u7840",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"sass",id:"sass",level:3},{value:"react router",id:"react-router",level:2},{value:"better code",id:"better-code",level:2},{value:"setState in form =&gt; object",id:"setstate-in-form--object",level:3},{value:"separate responsibilities",id:"separate-responsibilities",level:3},{value:"use object map instead of conditions",id:"use-object-map-instead-of-conditions",level:3},{value:"put independent variables outside of lifecycle",id:"put-independent-variables-outside-of-lifecycle",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react"},"React"),(0,n.kt)("h2",{id:"\u751f\u6001"},"\u751f\u6001"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"react"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://create-react-app.dev"},"create-react-app")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AmyShieh/react-demo.git"},"github \u7ec3\u624b\u9879\u76ee"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://reactrouter.com/"},"react-router")),(0,n.kt)("h2",{id:"\u521d\u59cb\u5316--\u57fa\u7840"},"\u521d\u59cb\u5316 & \u57fa\u7840"),(0,n.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-react-app my-app --template typescript\n\n// or\n\nnpx create-react-app my-app\n")),(0,n.kt)("h3",{id:"sass"},"sass"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"}," yarn add sass\n")),(0,n.kt)("h2",{id:"react-router"},"react router"),(0,n.kt)("h2",{id:"better-code"},"better code"),(0,n.kt)("h3",{id:"setstate-in-form--object"},"setState in form => object"),(0,n.kt)("h3",{id:"separate-responsibilities"},"separate responsibilities"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UI module"),(0,n.kt)("li",{parentName:"ul"},"logic/model module"),(0,n.kt)("li",{parentName:"ul"},"lib module")),(0,n.kt)("h3",{id:"use-object-map-instead-of-conditions"},"use object map instead of conditions"),(0,n.kt)("h3",{id:"put-independent-variables-outside-of-lifecycle"},"put independent variables outside of lifecycle"))}d.isMDXComponent=!0}}]);