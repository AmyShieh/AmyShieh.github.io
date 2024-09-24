"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[2499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},39969:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(47868);const l=e=>{const{img:t,originImg:n=!1,style:l={},className:i,alt:o,title:p}=e;return n?r.createElement("img",{referrerPolicy:"no-referrer",src:t,style:l,alt:o??"\u54ce\u5440\uff0c\u56fe\u7834\u4e86\u2026",title:p,className:i}):r.createElement(a.Z,{referrerPolicy:"no-referrer",src:t,alt:"\u54ce\u5440\uff0c\u56fe\u7834\u4e86\u2026"})}},69851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),l=n(39969);const i={},o=void 0,p={unversionedId:"browser/performance",id:"browser/performance",title:"performance",description:"\u6027\u80fd\u6307\u6807",source:"@site/docs/browser/performance.mdx",sourceDirName:"browser",slug:"/browser/performance",permalink:"/docs/browser/performance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u901a\u4fe1",permalink:"/docs/browser/communication"},next:{title:"Node",permalink:"/docs/category/node"}},c={},m=[{value:"\u6027\u80fd\u6307\u6807",id:"\u6027\u80fd\u6307\u6807",level:2},{value:"FPS(frame per second)",id:"fpsframe-per-second",level:3},{value:"\u8ba1\u7b97\u65b9\u6cd5",id:"\u8ba1\u7b97\u65b9\u6cd5",level:4},{value:"JS heap size",id:"js-heap-size",level:3},{value:"Memory",id:"memory",level:3},{value:"\u56fe\u7247\u4f18\u5316",id:"\u56fe\u7247\u4f18\u5316",level:2},{value:"\u52a0\u8f7d\u673a\u5236",id:"\u52a0\u8f7d\u673a\u5236",level:3},{value:"\u61d2\u52a0\u8f7d",id:"\u61d2\u52a0\u8f7d",level:3},{value:"\u9884\u52a0\u8f7d",id:"\u9884\u52a0\u8f7d",level:3},{value:"\u6e32\u67d3\u673a\u5236",id:"\u6e32\u67d3\u673a\u5236",level:3},{value:"gif \u8f6c mp4 \u7684\u65b9\u6cd5",id:"gif-\u8f6c-mp4-\u7684\u65b9\u6cd5",level:4},{value:"\u6e32\u67d3\u4f18\u5316",id:"\u6e32\u67d3\u4f18\u5316",level:2},{value:"\u8bf7\u6c42\u4f18\u5316",id:"\u8bf7\u6c42\u4f18\u5316",level:2},{value:"cancel",id:"cancel",level:3},{value:"\u7ade\u6001\u8bf7\u6c42\u7684\u5904\u7406",id:"\u7ade\u6001\u8bf7\u6c42\u7684\u5904\u7406",level:3},{value:"React \u4e2d\u7684\u4f18\u5316",id:"react-\u4e2d\u7684\u4f18\u5316",level:2},{value:"\u4ee3\u7801\u4f18\u5316",id:"\u4ee3\u7801\u4f18\u5316",level:2},{value:"\u53cd\u4f8b",id:"\u53cd\u4f8b",level:2},{value:"\u907f\u514d\u8fc7\u5ea6\u4f18\u5316",id:"\u907f\u514d\u8fc7\u5ea6\u4f18\u5316",level:3},{value:"\u540d\u8bcd&amp;\u6982\u5ff5\u89e3\u91ca",id:"\u540d\u8bcd\u6982\u5ff5\u89e3\u91ca",level:2},{value:"SCU",id:"scu",level:3}],u={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6027\u80fd\u6307\u6807"},"\u6027\u80fd\u6307\u6807"),(0,a.kt)("h3",{id:"fpsframe-per-second"},"FPS(frame per second)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6982\u5ff5\uff1a \u6bcf\u79d2\u949f\u753b\u9762\u66f4\u65b0\u7684\u6b21\u6570\u3002\u4e00\u822c\u6765\u8bf4\uff0cFPS \u8d8a\u9ad8\uff0c\u52a8\u753b\u4f1a\u8d8a\u6d41\u7545\u3002\n\u76ee\u524d\u5927\u591a\u6570\u8bbe\u5907(\u6d4f\u89c8\u5668)\u652f\u6301\u7684 fps \u4e3a 60(1s 60 \u5e27, \u4e5f\u5c31\u662f 1000ms / 60 = 16.67ms \u4e00\u5e27)\n\u4e00\u822c\u6765\u8bf4\uff0c\u5e27\u7387\u5728 30 \u4ee5\u4e0b\uff0c\u4eba\u773c\u4f1a\u5206\u8fa8\u7684\u51fa\u6765\u5361\u987f\uff0c30-50 \u7684\u8bdd\uff0c\u770b\u4eba~ 50 \u4ee5\u4e0a\u7684\u8bdd\uff0c\u4eba\u773c\u57fa\u672c\u611f\u77e5\u4e0d\u51fa\u5361\u987f\u3002")),(0,a.kt)("h4",{id:"\u8ba1\u7b97\u65b9\u6cd5"},"\u8ba1\u7b97\u65b9\u6cd5"),(0,a.kt)("p",null,"\u65b9\u6848 1\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"requestAnimationFrame"),":"),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0crequestAnimationFrame \u8fd9\u4e2a\u65b9\u6cd5\u5728 1s \u5185\u4f1a\u6267\u884c 60 \u6b21(\u4e0d\u5361\u5e27\u7684\u60c5\u51b5)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"")),(0,a.kt)("p",null,"\u2728\u2728\u2728 \u65b9\u6848 2\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"rendering")," tools\n\u5b9e\u65f6\u67e5\u770b\u9875\u9762\u5e27\u7387 & GPU \u4f7f\u7528\u7387\n\u76f4\u63a5\u5feb\u6377\u952e\u8c03\u51fa\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u8f93\u5165 fps \u5c31\u884c\uff0c\u8d85\u65b9\u4fbf\u3002"),(0,a.kt)("h3",{id:"js-heap-size"},"JS heap size"),(0,a.kt)("p",null,"run show performance"),(0,a.kt)("h3",{id:"memory"},"Memory"),(0,a.kt)("p",null,"\u5f3a\u5236\u56de\u6536\u5185\u5b58\n\u6309\u65f6\u95f4\u7ebf\u6765\u8bb0\u5f55 allocation"),(0,a.kt)("h2",{id:"\u56fe\u7247\u4f18\u5316"},"\u56fe\u7247\u4f18\u5316"),(0,a.kt)("h3",{id:"\u52a0\u8f7d\u673a\u5236"},"\u52a0\u8f7d\u673a\u5236"),(0,a.kt)("p",null,"\u56fe\u7247\u7684\u52a0\u8f7d\u53ef\u4ee5\u5206\u4e3a\u61d2\u52a0\u8f7d\u548c\u9884\u52a0\u8f7d\u3002\n\u8fd9\u4e24\u79cd\u52a0\u8f7d\u65b9\u5f0f\u4f18\u5316\u7684\u573a\u666f\u4e5f\u4e0d\u592a\u4e00\u6837\u3002\n\u5982\u679c\u4e0d\u505a\u8fd9\u4e9b\u5904\u7406\uff0c\u56fe\u7247\u9ed8\u8ba4\u7684\u52a0\u8f7d\u673a\u5236\u4e3a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"img"),"\u6807\u7b7e\u8bbe\u7f6e\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"display: none"),"\uff0c\u5b83\u867d\u7136\u4e0d\u4f1a\u5c55\u793a\uff0c\u4f46\u8fd8\u662f\u4f1a\u52a0\u8f7d\u56fe\u7247\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u7236\u7ea7",(0,a.kt)("inlineCode",{parentName:"li"},"div"),"\u6807\u7b7e\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"display: none"),"\uff0c \u90a3\u5b83\u91cc\u9762\u7684\u5b50\u5143\u7d20\uff0c\u80cc\u666f\u56fe\u4e0d\u4f1a\u88ab\u52a0\u8f7d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"img"),"\u8fd8\u662f\u4f1a\u52a0\u8f7d\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u540c\u4e00\u5f20\u56fe\u7247\u53ea\u4f1a\u88ab\u52a0\u8f7d\u4e00\u6b21\n\u4f2a\u7c7b\u7684\u80cc\u666f\u56fe\uff0c\u5728\u4f2a\u7c7b\u72b6\u6001\u88ab\u89e6\u53d1\u7684\u65f6\u5019\u624d\u4f1a\u52a0\u8f7d\u3002")),(0,a.kt)("div",{class:"row"},(0,a.kt)(l.Z,{img:"https://gd-hbimg.huaban.com/89f4399178a7afffd73e6ae043825aadb567cb37108d5-mqjoHP",alt:"img",mdxType:"MyImage"}))," ",(0,a.kt)("h3",{id:"\u61d2\u52a0\u8f7d"},"\u61d2\u52a0\u8f7d"),(0,a.kt)("p",null,"\u61d2\u52a0\u8f7d\u7684\u65b9\u5f0f\uff0c\u5e38\u89c1\u7684\u6709 3 \u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u89c6\u533a\u57df\u7684\u52a0\u8f7d\u3002\u5229\u7528 scroll \u6216\u8005\u8bf4 Observer \u6765\u5224\u5b9a\u53ef\u89c6\u533a\u57df\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5b9a\u65f6\u5668\uff0c\u5ef6\u8fdf\u53bb\u52a0\u8f7d\u975e\u5f53\u524d\u53ef\u89c6\u533a\u5fc5\u987b\u7684\u56fe\u7247\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u5b9a\u4e00\u4e9b\u6837\u5f0f\u3002\u6bd4\u5982\u662f display: none \u4e0b\u7684 background\u3002")),(0,a.kt)("h3",{id:"\u9884\u52a0\u8f7d"},"\u9884\u52a0\u8f7d"),(0,a.kt)("p",null,"\u6839\u636e\u6211\u4eec\u521a\u624d\u8bf4\u8fc7\u7684\u56fe\u7247\u52a0\u8f7d\u673a\u5236\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8fd9\u4e9b\u65b9\u6cd5\u6765\u5b9e\u73b0\u56fe\u7247\u7684\u9884\u52a0\u8f7d\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"css \u8bbe\u7f6e display: none \u7684 img \u6807\u7b7e\u3002"),(0,a.kt)("li",{parentName:"ol"},"link \u6807\u7b7e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="preload" href="https://gd-hbimg.huaban.com/2d5b0a2d8d67cf77c97f4de5c1be447f5f7d890c7664-32DO5U" />\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u8981\u6ce8\u610f\u4e00\u4e0b preload \u548c prefetch \u7684\u533a\u522b\u548c\u8868\u73b0")),(0,a.kt)("h3",{id:"\u6e32\u67d3\u673a\u5236"},"\u6e32\u67d3\u673a\u5236"),(0,a.kt)("p",null,"\u56fe\u7247\u8f6c\u4e3a webp \u540e\uff0c\u6240\u5360\u7528\u7684\u8d44\u6e90\u66f4\u5c11\u3002\n\u4e00\u822c\u4e00\u4e2a png \u6216 jpeg \u56fe\u7247\u8f6c\u4e3a webp \u540e\uff0c\u5927\u5c0f\u538b\u7f29\u6709\u7684\u751a\u81f3\u80fd\u9ad8\u8fbe 97%\u5de6\u53f3~"),(0,a.kt)("p",null,"\u5047\u5982\u6709 gif \u56fe\u7684\u8bdd\uff0c\u53ef\u4ee5\u8f6c\u6210 webp\uff0c\u4f46\u8fd8\u6709\u4e2a\u66f4\u597d\u7684\u65b9\u5f0f\u662f\uff0c\u8f6c\u6210 mp4\u3002\n\u8f6c\u6210 mp4 \u5728\u6709\u4e9b\u5b9e\u9645\u573a\u666f\u4e0b\uff0c\u5927\u5c0f\u66f4\u4f4e\uff0c\u800c\u4e14\u6e05\u6670\u5ea6\uff0c\u517c\u5bb9\u6027\u4e5f\u6709\u66f4\u597d\u7684\u4fdd\u969c\u3002"),(0,a.kt)("h4",{id:"gif-\u8f6c-mp4-\u7684\u65b9\u6cd5"},"gif \u8f6c mp4 \u7684\u65b9\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<video src="source" autoplay muted loop playsinline></video>\n')),(0,a.kt)("h2",{id:"\u6e32\u67d3\u4f18\u5316"},"\u6e32\u67d3\u4f18\u5316"),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u4f18\u5316"},"\u8bf7\u6c42\u4f18\u5316"),(0,a.kt)("h3",{id:"cancel"},"cancel"),(0,a.kt)("h3",{id:"\u7ade\u6001\u8bf7\u6c42\u7684\u5904\u7406"},"\u7ade\u6001\u8bf7\u6c42\u7684\u5904\u7406"),(0,a.kt)("h2",{id:"react-\u4e2d\u7684\u4f18\u5316"},"React \u4e2d\u7684\u4f18\u5316"),(0,a.kt)("h2",{id:"\u4ee3\u7801\u4f18\u5316"},"\u4ee3\u7801\u4f18\u5316"),(0,a.kt)("p",null,"Diff \u7b56\u7565\uff1a \u5c3d\u91cf\u51cf\u5c11\u5bf9\u5b50\u7ec4\u4ef6\u4fe1\u606f\u91cf\u7684\u4f20\u9012\uff0cSCU \u4f18\u5316\nObservable: \u5c3d\u91cf\u51cf\u5c11\u6570\u636e\u8bbf\u95ee, \u4f7f\u6570\u636e\u66f4\u65b0\u901a\u77e5\u66f4\u7cbe\u51c6\u3002"),(0,a.kt)("h2",{id:"\u53cd\u4f8b"},"\u53cd\u4f8b"),(0,a.kt)("h3",{id:"\u907f\u514d\u8fc7\u5ea6\u4f18\u5316"},"\u907f\u514d\u8fc7\u5ea6\u4f18\u5316"),(0,a.kt)("admonition",{title:"\u5728 React \u4e2d\uff0c\u5c06\u4e00\u4e2a\u6570\u7ec4\u7684\u957f\u5ea6\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u4e0e\u5c06\u6574\u4e2a\u6570\u7ec4\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u6027\u80fd\u5dee\u5f02\u5e76\u4e0d\u5927",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a js \u4e2d\uff0c\u6570\u7ec4\u7684\u957f\u5ea6\u7684\u8bfb\u53d6\u662f\u4e00\u4e2a\u975e\u5e38\u5feb\u901f\u548c\u4f4e\u6210\u672c\u7684\u8ba1\u7b97\u3002\n\u53ea\u6709\u5bf9\u8be5\u6570\u7ec4\u8fdb\u884c\u6df1\u514b\u9686\u6216\u904d\u5386\u65f6\u624d\u4f1a\u5bf9\u6027\u80fd\u9020\u6210\u663e\u8457\u5f71\u54cd\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5c31\u5047\u5982\u4e3a\u4e86\u907f\u514d\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6574\u4e2a\u6570\u7ec4\uff0c\u800c\u53bb\u5355\u72ec\u7ef4\u62a4\u4e00\u4e2a\u6570\u7ec4\u957f\u5ea6\u7684\u72b6\u6001\uff0c\u5f88\u6709\u53ef\u80fd\u5728\u6570\u7ec4\u53d8\u66f4\u65f6\u9057\u6f0f\u5bf9\u8be5\u957f\u5ea6\u7684\u72b6\u6001\u7ef4\u62a4\uff08\u867d\u7136\u4e0d\u8be5\uff0c\u4f46\u4e8b\u5b9e\u5c31\u662f\u6709\u53ef\u80fd\u5b58\u5728\u8fd9\u79cd\u73b0\u8c61\uff0c\u4e0d\u80fd\u5047\u5b9a\u6240\u6709\u4eba\u7684\u4ee3\u7801\u90fd\u5b8c\u5168\u8003\u8651\u4e86\u6240\u6709\u8fb9\u754c\u3002\u8981\u5c3d\u91cf\u51cf\u5c11\u72af\u9519\u8bef\u7684\u53ef\u80fd\uff09"),(0,a.kt)("p",{parentName:"admonition"},"\u603b\u4e4b\uff0c\u5728\u6027\u80fd\u4e0a\uff0c\u5c06\u6570\u7ec4\u957f\u5ea6\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u4e0e\u5c06\u6574\u4e2a\u6570\u7ec4\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u4e4b\u95f4\u6ca1\u6709\u660e\u663e\u7684\u533a\u522b\u3002\n\u4f46\u5728\u4ee3\u7801\u8bbe\u8ba1\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u7ec4\u4ef6\u7684\u7279\u5b9a\u9700\u6c42\u6765\u505a\u4e0d\u540c\u7684\u9009\u62e9\u3002")),(0,a.kt)("h2",{id:"\u540d\u8bcd\u6982\u5ff5\u89e3\u91ca"},"\u540d\u8bcd&\u6982\u5ff5\u89e3\u91ca"),(0,a.kt)("h3",{id:"scu"},"SCU"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Synchronize JavaScript Execution and Update the DOM, Cluster DOM operations and Use requestAnimationFrame")),(0,a.kt)("p",null,"SCU \u4f18\u5316\u662f\u4e00\u79cd\u524d\u7aef\u6027\u80fd\u4f18\u5316\u6280\u672f\uff0c\u5b83\u901a\u8fc7\u51cf\u5c11\u6d4f\u89c8\u5668\u7684\u89e3\u6790\u548c\u6e32\u67d3\u65f6\u95f4\u6765\u63d0\u9ad8\u7f51\u9875\u52a0\u8f7d\u901f\u5ea6\uff0c\u63d0\u9ad8\u7f51\u9875\u52a0\u8f7d\u901f\u5ea6\u548c\u7528\u6237\u4f53\u9a8c\u3002"),(0,a.kt)("p",null,"\u4f18\u5316\u65b9\u5411\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u540c\u6b65 JavaScript \u6267\u884c\u548c\u66f4\u65b0 DOM\uff1aJavaScript \u4f1a\u963b\u6b62\u6d4f\u89c8\u5668\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u56e0\u6b64\u5f53 JavaScript \u8fd0\u884c\u65f6\uff0c\u6d4f\u89c8\u5668\u5c31\u4e0d\u80fd\u540c\u65f6\u66f4\u65b0\u9875\u9762\u4e0a\u7684\u5143\u7d20\u3002\u4e3a\u4e86\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11 JavaScript \u5bf9\u9875\u9762\u6e32\u67d3\u7684\u5f71\u54cd\uff0c\u5e94\u8be5\u5c3d\u53ef\u80fd\u4f7f\u7528\u5f02\u6b65 JavaScript \u548c Web Worker \u7b49\u6280\u672f\u6765\u907f\u514d\u963b\u585e\u9875\u9762\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ol"},"cluster DOM \u64cd\u4f5c\uff1a\u66f4\u65b0 DOM \u7684\u64cd\u4f5c\u4f1a\u5bfc\u81f4\u9875\u9762\u91cd\u65b0\u6e32\u67d3\uff0c\u56e0\u6b64\u5728\u4fee\u6539\u591a\u4e2a\u5143\u7d20\u7684\u5c5e\u6027\u65f6\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u64cd\u4f5c\u6279\u91cf\u5904\u7406\uff0c\u5e76\u5c06\u5b83\u4eec\u653e\u5728\u5355\u4e2a DOM \u66f4\u65b0\u4e2d\u5b8c\u6210\u3002\u8fd9\u6837\u53ef\u4ee5\u51cf\u5c11\u6d4f\u89c8\u5668\u8fdb\u884c\u591a\u6b21\u9875\u9762\u6e32\u67d3\u7684\u5f00\u9500\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 requestAnimationFrame\uff1arequestAnimationFrame \u662f\u4e00\u79cd\u7528\u4e8e\u52a8\u753b\u6548\u679c\u7684 API\uff0c\u5b83\u53ef\u4ee5\u786e\u4fdd\u52a8\u753b\u5728\u4e0b\u4e00\u5e27\u7ed8\u5236\u4e4b\u524d\u8fd0\u884c\uff0c\u4ece\u800c\u4f7f\u6d4f\u89c8\u5668\u80fd\u591f\u66f4\u6709\u6548\u5730\u4f7f\u7528 CPU \u8d44\u6e90\u3002requestAnimationFrame \u53ef\u4ee5\u5e73\u6ed1\u5730\u5904\u7406\u52a8\u753b\u6548\u679c\uff0c\u5e76\u4e14\u53ef\u4ee5\u51cf\u5c11\u6d4f\u89c8\u5668\u7684\u5361\u987f\u548c\u6296\u52a8\u73b0\u8c61\u3002")))}s.isMDXComponent=!0}}]);