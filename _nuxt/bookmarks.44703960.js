import{_ as h}from"./Header.86fcda1b.js";import{_ as w}from"./Avatar.4dffec97.js";import{u as _}from"./index.6959f13c.js";import{c as l,g as i,e as s,F as b,E as g,b as n,t as c}from"./entry.4605b59c.js";import"./Icon.cda8336d.js";const f={class:"min-h-screen"},x={class:"space-y-2"},k=["href"],y={class:"truncate text-gray-700 dark:text-gray-200"},B=s("span",{class:"flex-1"},null,-1),A={class:"text-xs font-medium text-gray-400 dark:text-gray-600"},d="Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com",M={__name:"bookmarks",setup(S){_({title:"Bookmarks | Fayaz Ahmed",description:d});const p=[{id:1,label:"Adam Wathan - Tailwind CSS Best Practice Patterns",url:"https://www.youtube.com/watch?v=J_7_mnFSLDg"},{id:2,label:"Dicebear Awesome avatars",url:"https://www.dicebear.com/"},{id:3,label:"Circuit design stock image",url:"https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80"},{id:4,label:"Beautiful Gradient Generator",url:"https://www.joshwcomeau.com/gradient-generator/"},{id:5,label:"3D device mockups",url:"https://deviceframes.com/"},{id:6,label:"Box shadow examples",url:"https://getcssscan.com/css-box-shadow-examples"},{id:7,label:"Octupos Illustration",url:"https://refine.new/"},{id:8,label:"Metalab agency",url:"https://www.metalab.com/"},{id:9,label:"Tines - Beautiful landing page",url:"https://www.tines.com/product"},{id:10,label:"SVG Spinners",url:"https://github.com/n3r4zzurr0/svg-spinners"},{id:11,label:"ASCII Flow - Text based image drawing",url:"https://asciiflow.com/#/"},{id:12,label:"REQRES Mock apis for testing",url:"https://reqres.in/"},{id:13,label:"Haikie - SVG background generator",url:"https://app.haikei.app/"},{id:14,label:"IP API",url:"https://ipapi.is/"},{id:15,label:"Rakko Tools",url:"https://en.rakko.tools/"}];function r(a){let t=new URL(a).host;return t.startsWith("www.")&&(t=t.substring(4)),t}function u(a){return`https://logo.clearbit.com/${r(a)}`}return(a,o)=>{const t=h,m=w;return n(),l("main",f,[i(t,{class:"mb-8",title:"Bookmarks",description:d}),s("ul",x,[(n(),l(b,null,g(p,e=>s("li",{key:e.id},[s("a",{href:e.url,target:"_blank",class:"flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"},[i(m,{src:u(e.url),alt:e.label,ui:{rounded:"rounded-md"}},null,8,["src","alt"]),s("p",y,c(e.label),1),B,s("span",A,c(r(e.url)),1)],8,k)])),64))])])}}};export{M as default};
