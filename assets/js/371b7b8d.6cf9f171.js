"use strict";(self.webpackChunkmy_docusaurus_blog=self.webpackChunkmy_docusaurus_blog||[]).push([[562],{71547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>g,toc:()=>p});var n=r(87462),i=r(67294),l=r(3905),a=r(92421),o=r(24969),s=r(10932);const c=e=>{let{file:t,id:r}=e;const n=(0,i.useRef)(),[l,a]=(0,i.useState)(""),o=(0,i.useCallback)((async()=>{const e=await(e=>new Promise(((t,r)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>r(e)})))(t.originFileObj);a(e)}),[]);(0,i.useEffect)((()=>{o()}),[t]),(0,i.useEffect)((()=>{if(n.current&&l){const e=n.current.getContext("2d"),t=new Image;t.src=l,t.onload=()=>{const{width:r,height:i}=t;console.log({img:t,width:r,height:i}),n.current.width=r,n.current.height=i,e.fillStyle="pink",e.fillRect(0,0,r,i),e.shadowColor="rgba(0, 0, 0, 0.5)",e.shadowBlur=20,e.shadowOffsetX=10,e.shadowOffsetY=10,e.drawImage(t,20,20,r-40,i-40)}}}),[l]);const c=(0,i.useCallback)((()=>{if(n.current){const e=document.createElement("a");e.download="styled-image.png",e.href=n.current.toDataURL("image/png"),e.click()}}),[]);return i.createElement("div",null,i.createElement("canvas",{id:`canvas_${r}`,ref:n}),i.createElement(s.ZP,{onClick:c},"\u4fdd\u5b58"))},u=e=>{const[t,r]=(0,i.useState)(!1),[n,l]=(0,i.useState)(""),[s,u]=(0,i.useState)([]),d=i.createElement("button",{style:{border:0,background:"none"},type:"button"},i.createElement(o.Z,null),i.createElement("div",{style:{marginTop:8}},"Upload"));return console.log({previewImage:n,fileList:s}),(0,i.useEffect)((()=>{}),[s]),i.createElement("div",null,i.createElement(a.Z,{listType:"picture-card",fileList:s,onPreview:async e=>{e.url||e.preview||(e.preview=await(e=>new Promise(((t,r)=>{const n=new FileReader;n.readAsDataURL(e),n.onload=()=>t(n.result),n.onerror=e=>r(e)})))(e.originFileObj)),l(e.url||e.preview),r(!0)},onChange:e=>{let{fileList:t}=e;return u(t)}},s.length>=8?null:d),s.map(((e,t)=>i.createElement(c,{id:t,file:e,key:t}))))},d={},m="ImgFilter",g={unversionedId:"imgFilter/index",id:"imgFilter/index",title:"ImgFilter",description:";",source:"@site/docs-others/imgFilter/index.mdx",sourceDirName:"imgFilter",slug:"/imgFilter/",permalink:"/docs-others/imgFilter/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calculator",permalink:"/docs-others/calculator/"}},f={},p=[],w={toc:p},h="wrapper";function k(e){let{components:t,...r}=e;return(0,l.kt)(h,(0,n.Z)({},w,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"imgfilter"},"ImgFilter"),(0,l.kt)(u,{mdxType:"ImgFilter"}),";")}k.isMDXComponent=!0}}]);