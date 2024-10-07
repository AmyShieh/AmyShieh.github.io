"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[6883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},57570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const i={},a="\u4ee3\u7801\u89c4\u8303\u6821\u9a8c",s={unversionedId:"project/code/lint-tools",id:"project/code/lint-tools",title:"\u4ee3\u7801\u89c4\u8303\u6821\u9a8c",description:"tsconfig",source:"@site/docs/project/code/lint-tools.md",sourceDirName:"project/code",slug:"/project/code/lint-tools",permalink:"/docs/project/code/lint-tools",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dev design",permalink:"/docs/project/code/dev-design"},next:{title:"\u5f00\u53d1\u89c4\u8303",permalink:"/docs/project/code/rules"}},o={},c=[{value:"tsconfig",id:"tsconfig",level:2},{value:"eslint",id:"eslint",level:2},{value:"prettier",id:"prettier",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"usage demo",id:"usage-demo",level:3},{value:"lint-staged",id:"lint-staged",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:"usage",id:"usage",level:3},{value:"husky",id:"husky",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Q &amp; A",id:"q--a",level:2},{value:"eslint vs prettier",id:"eslint-vs-prettier",level:3},{value:"eslint vs lint-staged",id:"eslint-vs-lint-staged",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4ee3\u7801\u89c4\u8303\u6821\u9a8c"},"\u4ee3\u7801\u89c4\u8303\u6821\u9a8c"),(0,l.kt)("h2",{id:"tsconfig"},"tsconfig"),(0,l.kt)("h2",{id:"eslint"},"eslint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".eslintrc.js"',title:'".eslintrc.js"'},"module.exports = {\n    globals: {\n        window: true\n    }\n};\n")),(0,l.kt)("h2",{id:"prettier"},"prettier"),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add prettier -D\n")),(0,l.kt)("h3",{id:"usage-demo"},"usage demo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".prettierrc"',title:'".prettierrc"'},'{\n    "printWidth": 140,\n    "singleQuote": true,\n    "tabWidth": 4,\n    "trailingComma": "none"\n}\n')),(0,l.kt)("h2",{id:"lint-staged"},"lint-staged"),(0,l.kt)("h3",{id:"\u5b89\u88c5-1"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add lint-staged --D\n")),(0,l.kt)("h3",{id:"usage"},"usage"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"li"},"lint-staged"),"\u914d\u7f6e\n\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"package.json"),"\u4e2d\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"li"},"lint-staged"),"\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"lint-staged": {\n  "*.js": "eslint",\n  "*.css": "stylelint",\n   "**/*.{md,json,js,jsx,tsx,ts,css,less,scss}": [\n            "prettier --write"\n        ]\n}\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," or ")),(0,l.kt)("p",null,"\u521b\u5efa",(0,l.kt)("inlineCode",{parentName:"p"},".lintstagedrc"),"\u6587\u4ef6,\u5e76\u6dfb\u52a0\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".lintstagedrc"',title:'".lintstagedrc"'},'{\n    "*.js": "eslint --fix",\n    "*.css": "stylelint --fix"\n}\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5728 pre-commit \u4e2d\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"lint-staged"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "husky": {\n        "hooks": {\n            "pre-commit": "lint-staged"\n        }\n    }\n}\n')),(0,l.kt)("h2",{id:"husky"},"husky"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"husky \u662f\u4e00\u4e2a git hooks \u6846\u67b6\uff0c\u7528\u6cd5\u5f88\u7b80\u5355\u3002")),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "husky": {\n        "hooks": {\n            "pre-commit": "npm run lint",\n            "pre-push": "npm test"\n        },\n        "skipCI": true,\n        "ignoreNodeModules": true,\n        "gitParams": "--no-verify"\n    }\n}\n')),(0,l.kt)("h2",{id:"q--a"},"Q & A"),(0,l.kt)("h3",{id:"eslint-vs-prettier"},"eslint vs prettier"),(0,l.kt)("p",null,"\u68c0\u67e5\u65b9\u5f0f\uff1aESLint \u80fd\u591f\u68c0\u67e5\u4ee3\u7801\u4e2d\u7684\u6f5c\u5728\u95ee\u9898\uff0c\u800c Prettier \u53ea\u80fd\u683c\u5f0f\u5316\u4ee3\u7801\u3002\n\u68c0\u67e5\u5185\u5bb9\uff1aESLint \u4e3b\u8981\u5173\u6ce8\u4ee3\u7801\u8d28\u91cf\u3001\u98ce\u683c\u548c\u6700\u4f73\u5b9e\u8df5\u7b49\uff0c\u800c Prettier \u53ea\u5173\u6ce8\u4ee3\u7801\u7684\u5916\u89c2\u3002\n\u68c0\u67e5\u89c4\u5219\uff1aESLint \u63d0\u4f9b\u4e86\u5927\u91cf\u7684\u68c0\u67e5\u89c4\u5219\u6765\u68c0\u67e5\u4ee3\u7801\uff0c\u800c Prettier \u5219\u6ca1\u6709\u7c7b\u4f3c\u7684\u89c4\u5219\u96c6\u5408\u3002\n\u64cd\u4f5c\u65b9\u5f0f\uff1aESLint \u9700\u8981\u624b\u52a8\u8fd0\u884c\u6216\u4e0e\u7f16\u8f91\u5668\u96c6\u6210\uff0c\u800c Prettier \u901a\u5e38\u662f\u81ea\u52a8\u5316\u8fd0\u884c\u7684\u3002"),(0,l.kt)("h3",{id:"eslint-vs-lint-staged"},"eslint vs lint-staged"),(0,l.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u4f1a\u5728 lint-staged \u4e2d\u914d\u7f6e eslint \u6765\u68c0\u67e5\u6211\u4eec\u7684\u9879\u76ee\u6587\u4ef6\uff0c\u6bd4\u5982 js, css \u7b49\u6587\u4ef6\u3002\n\u4f46 lint-staged \u662f git \u7684\u4e00\u4e2a\u94a9\u5b50\uff0c\u4f1a\u68c0\u67e5\u53d8\u66f4\uff08\u4e5f\u5c31\u662f staged\uff09\u7684\u4ee3\u7801\u3002"))}d.isMDXComponent=!0}}]);