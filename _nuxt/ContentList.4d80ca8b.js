import d from"./ContentQuery.0e2a3b36.js";import{d as c,ad as _,P as r}from"./entry.4605b59c.js";import"./asyncData.4c60e1c5.js";import"./query.de93fa7e.js";import"./preview.59c8be32.js";const p=(u,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:u,data:t},null,2)),l=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=_(),{path:n,query:o}=u,f={...o||{},path:n||(o==null?void 0:o.path)||"/"};return r(d,f,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:m})=>t.default({list:e,refresh:a,isPartial:m,...this.$attrs}):e=>p("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):p("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):p("not-found",e==null?void 0:e.data)}})}}),h=l,S=h;export{S as default};
