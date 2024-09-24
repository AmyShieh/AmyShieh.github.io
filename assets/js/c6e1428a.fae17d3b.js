"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[9727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="Typescript",c={unversionedId:"project/code/typescript",id:"project/code/typescript",title:"Typescript",description:"\u57fa\u7840\u6982\u5ff5",source:"@site/docs/project/code/typescript.md",sourceDirName:"project/code",slug:"/project/code/typescript",permalink:"/docs/project/code/typescript",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u89c4\u8303",permalink:"/docs/project/code/rules"},next:{title:"DDD",permalink:"/docs/project/DDD"}},i={},p=[{value:"\u57fa\u7840\u6982\u5ff5",id:"\u57fa\u7840\u6982\u5ff5",level:2},{value:"implements &amp; extends",id:"implements--extends",level:3},{value:"\u6cdb\u578b",id:"\u6cdb\u578b",level:3},{value:"config",id:"config",level:2},{value:"alias",id:"alias",level:3},{value:"\u7ecf\u9a8c\u603b\u7ed3",id:"\u7ecf\u9a8c\u603b\u7ed3",level:2},{value:"TS \u62a5\u9519\uff1aCannot Find Module",id:"ts-\u62a5\u9519cannot-find-module",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript"},"Typescript"),(0,o.kt)("h2",{id:"\u57fa\u7840\u6982\u5ff5"},"\u57fa\u7840\u6982\u5ff5"),(0,o.kt)("h3",{id:"implements--extends"},"implements & extends"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extends: \u7528\u4e8e\u5b9e\u73b0\u7c7b\u7684\u7ee7\u627f\u5173\u7cfb\uff0c\u5b50\u7c7b\u4ece\u7236\u7c7b\u7ee7\u627f\u5c5e\u6027\u548c\u65b9\u6cd5\u3002"),(0,o.kt)("li",{parentName:"ul"},"implements: \u7528\u4e8e\u7c7b\u5b9e\u73b0\u63a5\u53e3\uff0c\u786e\u4fdd\u7c7b\u7b26\u5408\u7279\u5b9a\u63a5\u53e3\u7684\u89c4\u8303\u5e76\u5b9e\u73b0\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u65b9\u6cd5\u548c\u5c5e\u6027\u3002\u7c7b\u5b9e\u73b0\u63a5\u53e3\u540e\uff0c\u5fc5\u987b\u5b9e\u73b0\u63a5\u53e3\u4e2d\u5b9a\u4e49\u7684\u6240\u6709\u65b9\u6cd5\u548c\u5c5e\u6027\u3002")),(0,o.kt)("h3",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,o.kt)("h2",{id:"config"},"config"),(0,o.kt)("h3",{id:"alias"},"alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "baseUrl": ".",\n        "paths": {\n            "@site/*": "./"\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"\u7ecf\u9a8c\u603b\u7ed3"},"\u7ecf\u9a8c\u603b\u7ed3"),(0,o.kt)("h3",{id:"ts-\u62a5\u9519cannot-find-module"},"TS \u62a5\u9519\uff1aCannot Find Module"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Cannot find module './styles.module.scss' or its corresponding type declarations\nTypeScript says \"Cannot Find Module\"")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// declaration.d.ts\ndeclare module '*.scss';\n\n// or\n\n// declaration.d.ts\ndeclare module '*.scss' {\n    const content: Record<string, string>;\n    export default content;\n}\n")),(0,o.kt)("p",null,"\u5176\u4ed6\u7c7b\u578b\u7f3a\u5931\u62a5\u9519\u2014\u2014\u540c\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare module 'XXX' {\n    export const Component: React.FC<any>;\n}\n")))}u.isMDXComponent=!0}}]);