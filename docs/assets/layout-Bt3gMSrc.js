import{d as N,l as c,q as V,p as q,c as i,g as T,F as r,a as v,n as A,i as h,w as n,u as D,r as d,o as t,z as F,t as u,b as m,m as k,T as $,e as M}from"./index-DjT9YCnt.js";const R={class:"layout-docs"},j=["onClick"],J=N({__name:"layout",setup(G){const C=D(),_=c(),a=c([]);C.afterEach(()=>{y()});const y=()=>{V(()=>{setTimeout(()=>{if(_.value){const s=_.value.querySelectorAll("h2,h3,h4"),o=Array.from(s).filter(l=>!!l.innerText.trim());o.length||(a.value=[]),a.value=o.map(l=>({title:l.id,indent:parseInt(l.tagName.replace(/h/gi,""))}))}},500)})},b=s=>{const o=document.getElementById(s.title);o&&o.scrollIntoView({behavior:"smooth",block:"start"})},w=c([{title:"开发指南",to:"/docs"},{title:"组件",children:[{title:"ak-form",to:"/docs/form"},{title:"ak-list",to:"/docs/list"}]},{title:"接口文档",to:"/docs/api",children:[{title:"数据源设计",to:"/docs/api"},{title:"表单设计",to:"/docs/api"},{title:"列表页设计",to:"/docs/api"},{title:"数据统计",to:"/docs/api"},{title:"数据大屏",to:"/docs/api"},{title:"流程设计",to:"/docs/api"}]},{title:"使用手册",to:"/docs/use",children:[{title:"快速开始",to:"/docs/start"},{title:"ak-form配置项手册",to:"/docs/form-option"},{title:"ak-list配置项手册",to:"/docs/list-option"},{title:"可视化数据大屏",to:"/docs/screen"}]}]),B=c("/docs"),E=(s,o)=>{console.log(s,o)};return q(()=>{y()}),(s,o)=>{var x;const l=d("el-menu-item"),S=d("el-sub-menu"),z=d("el-menu"),I=d("router-view");return t(),i("div",R,[T("div",{class:A(["sidebar",{show:(x=a.value)==null?void 0:x.length}])},[(t(!0),i(r,null,v(a.value,(e,f)=>(t(),i("a",{style:F([{cursor:"pointer"},{paddingLeft:`${(e.indent-2)*15}px`}]),onClick:p=>b(e),key:f},u(e.title),13,j))),128))],2),h(z,{"default-active":B.value,class:"nav",mode:"horizontal",router:"","active-color":"#409eff",ellipsis:!1,onSelect:E},{default:n(()=>[(t(!0),i(r,null,v(w.value,(e,f)=>{var p;return t(),i(r,{key:f},[(p=e.children)!=null&&p.length?(t(),m(S,{key:0,index:e.to||e.title},{title:n(()=>[k(u(e.title),1)]),default:n(()=>[(t(!0),i(r,null,v(e.children,(g,L)=>(t(),m(l,{index:g.to,key:L},{default:n(()=>[k(u(g.title),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"])):(t(),m(l,{key:1,index:e.to},{default:n(()=>[k(u(e.title),1)]),_:2},1032,["index"]))],64)}),128))]),_:1},8,["default-active"]),T("div",{class:"main-content",ref_key:"articleEl",ref:_},[h(I,null,{default:n(({Component:e})=>[h($,{name:"left-fade",mode:"out-in"},{default:n(()=>[(t(),m(M(e)))]),_:2},1024)]),_:1})],512)])}}});export{J as default};
