import{_}from"./Header.86fcda1b.js";import{_ as p}from"./ArticleCard.bbb55409.js";import{u}from"./index.6959f13c.js";import{u as d}from"./asyncData.4c60e1c5.js";import{q as f}from"./query.de93fa7e.js";import{D as h,c as t,g as s,e as A,F as g,E as y,G as x,b as o}from"./entry.4605b59c.js";import"./preview.59c8be32.js";const k={class:"min-h-screen"},B={class:"space-y-16"},a="All of my long-form thoughts on programming, user interfaces, product design, and more, collected in chronological order.",G={__name:"index",async setup(C){let e,r;u({title:"Articles | Fayaz Ahmed",description:a});const{data:n}=([e,r]=h(()=>d("all-articles",()=>f("/articles").find())),e=await e,r(),e);return(F,b)=>{const c=_,i=p;return o(),t("main",k,[s(c,{class:"mb-16",title:"Articles",description:a}),A("ul",B,[(o(!0),t(g,null,y(x(n),(l,m)=>(o(),t("li",{key:m},[s(i,{article:l},null,8,["article"])]))),128))])])}}};export{G as default};
