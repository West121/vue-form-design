import{d as M,l as h,G as H,o as k,b as P,w as u,g as r,i as s,c as D,R as x,f as $,t as U,n as R,S as W,C as q,P as N,k as G,A as Z,L as j,p as Q,aa as X,r as _,B as Y,s as ee,F as te,m as ae,Z as w,q as se,ab as oe,D as le,$ as b,x as A,a3 as ne,a4 as ie,E as O}from"./index-792ff79a.js";import{_ as re}from"./echartsInt.vue_vue_type_script_setup_true_lang-089a3049.js";import{_ as ce,a as de}from"./headTools.vue_vue_type_script_setup_true_lang-1ac01704.js";const ue=["onClick"],pe={key:0,class:"drag-control"},me={class:"item-control"},fe=["onClick"],ge=["onClick"],_e=r("div",{class:"drag-move icon-move"},null,-1),ve={class:"tooltip"},he=M({__name:"echarts",props:{data:{},type:{default:2}},emits:["controlBtnClick"],setup(S,{expose:T,emit:C}){const v=S,c=h(),m=h({list:[],config:{}});H(()=>v.data,o=>{o&&(m.value=o)},{immediate:!0});const f=o=>{if(v.type!==1)return;const g=o.newIndex,l=new Date().getTime().toString(),p=m.value.list[g];p&&(delete p.label,delete p.icon,Object.assign(p,{name:p.type+l}),V(p))},V=o=>{console.log("groupClick",o),c.value=o.name,C("controlBtnClick",o)},e=(o,g,l)=>{if(v.type!==2){if(o==="clone"){const p=l.type+new Date().getTime().toString(),a=JSON.parse(JSON.stringify(l));m.value.list.splice(g,0,Object.assign(a,{name:p}))}else o==="del"&&m.value.list.splice(g,1);C("controlBtnClick","")}};return T({getData:()=>m.value,setDataList:o=>{m.value=o},setData:o=>{console.log(o)}}),(o,g)=>(k(),P(q(N),W({itemKey:"id",list:m.value.list,name:"fade",class:"drag"},{group:"form",ghostClass:"ghost",animation:200,handle:".drag-move"},{onAdd:f}),{item:u(({element:l,index:p})=>[r("div",{class:R(["group",{["group-"+l.type]:!0,[l.class]:l.class,active:c.value===l.name}]),onClick:x(a=>V(l),["stop"])},[s(re,{option:l.option,width:l.width,height:l.height},null,8,["option","width","height"]),o.type===1?(k(),D("div",pe,[r("div",me,[r("i",{class:"icon-clone",onClick:x(a=>e("clone",p,l),["stop"]),title:"克隆"},null,8,fe),r("i",{class:"icon-del",onClick:x(a=>e("del",p,l),["stop"])},null,8,ge)]),_e])):$("",!0),r("div",ve,U(l.name),1)],10,ue)]),_:1},16,["list"]))}}),ye={class:"design-container design-chart"},be={class:"components-list"},ke=r("div",{class:"title"},"图表类型",-1),Ce=["title"],Ve={class:"main-body"},we={class:"main-form design-form"},De={class:"sidebar-tools"},Te=["innerHTML"],xe={key:0,id:"editJson"},$e={class:"dialog-footer"},Re=M({__name:"index",setup(S){const T=G(),C=Z(),v=h(),c=h({}),m=h([{icon:"line",label:"折线图",type:"line",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{icon:"bar",label:"柱状图",type:"bar",option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{icon:"pie",label:"饼图",type:"pie",option:{series:[{name:"Access From",type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}}]),f=h(),V=a=>JSON.parse(JSON.stringify(a)),e=j({editor:{},loading:!1,id:C.query.id,direction:"rtl",dialogTitle:"",visible:!1,dialogType:"",name:""}),B=a=>{c.value=a},E=a=>{const t=f.value.getData();switch(a){case"del":f.value.setDataList([]),c.value="";break;case"json":L(t,{type:"export"});break;case"vue":v.value.openEcharts(t);break;case"save":g(t);break}},L=(a,t={})=>{var d,y;e.direction=t.direction||"rtl",e.visible=!0,e.dialogTitle=t.title,e.dialogType=t.type,a||(a=f.value.getData());let i=w(a,!0);switch(t.type){case"beforeRequest":(d=a.config)!=null&&d.beforeRequest?i=w(a.config.beforeRequest,!0):i=ie;break;case"afterResponse":(y=a.config)!=null&&y.afterResponse?i=w(a.config.afterResponse,!0):i=ne;break}se(()=>{e.editor=oe(i)})},o=()=>{try{const a=le(e.editor.getValue());switch(e.dialogType){case"export":f.value.setDataList(a);break;case"beforeRequest":case"afterResponse":const t=f.value.getData();t.config[e.dialogType]=a;break}e.visible=!1}catch(a){b.error(a.message)}},g=a=>{if(!e.name){b.error("请输入图表保存的名称");return}e.loading=!0;const t={data:w(a),id:e.id,name:e.name};A("saveEcharts",t).then(i=>{var d;console.log(i),b({message:((d=i.data)==null?void 0:d.message)||"保存成功！",type:"success"}),T.push({path:"/echarts/list"}),e.loading=!1}).catch(i=>{var d;b.error(((d=i.data)==null?void 0:d.message)||"保存异常"),e.loading=!1})},l=a=>{a()},p=()=>{e.id&&(e.loading=!0,A("echartsList",{id:e.id}).then(a=>{e.loading=!1;const t=a.data;e.name=t.name,f.value.setDataList(t.list)}).catch(a=>{var t;b.error(((t=a.data)==null?void 0:t.message)||"操作异常"),e.loading=!1}))};return Q(()=>{p()}),X(()=>{Object.keys(e.editor).length!==0&&(e.editor.destroy(),e.editor.container.remove())}),(a,t)=>{const i=_("el-input"),d=_("el-form-item"),y=_("el-tab-pane"),F=_("el-tabs"),J=_("el-form"),z=_("el-button"),I=_("el-drawer"),K=Y("loading");return ee((k(),D("div",ye,[r("div",be,[ke,s(q(N),{itemKey:"key",tag:"ul",modelValue:m.value,"onUpdate:modelValue":t[0]||(t[0]=n=>m.value=n),group:{name:"form",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:V},{item:u(({element:n})=>[r("li",{class:R([n.type])},[r("i",{class:R(`icon-${n.icon}`)},null,2),r("span",{title:n.label},U(n.label),9,Ce)],2)]),_:1},8,["modelValue"])]),r("div",Ve,[s(ce,{onClick:E,type:"2"}),r("div",we,[s(he,{type:1,onControlBtnClick:B,ref_key:"echartsEl",ref:f},null,512)])]),r("div",De,[s(J,{size:"small"},{default:u(()=>[s(F,{modelValue:"first"},{default:u(()=>[s(y,{label:"图表属性",name:"first"},{default:u(()=>[Object.keys(c.value).length?(k(),D(te,{key:0},[s(d,{label:"自定义Class"},{default:u(()=>[s(i,{placeholder:"自定义Class",modelValue:c.value.class,"onUpdate:modelValue":t[1]||(t[1]=n=>c.value.class=n)},null,8,["modelValue"])]),_:1}),s(d,{label:"字段标识"},{default:u(()=>[s(i,{placeholder:"字段标识",modelValue:c.value.name,"onUpdate:modelValue":t[2]||(t[2]=n=>c.value.name=n)},null,8,["modelValue"])]),_:1}),s(d,{label:"图表宽度"},{default:u(()=>[s(i,{placeholder:"图表宽度，数字类型",modelValue:c.value.width,"onUpdate:modelValue":t[3]||(t[3]=n=>c.value.width=n),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1}),s(d,{label:"图表高度"},{default:u(()=>[s(i,{placeholder:"图表高度，数字类型",modelValue:c.value.height,"onUpdate:modelValue":t[4]||(t[4]=n=>c.value.height=n),modelModifiers:{number:!0}},null,8,["modelValue"])]),_:1})],64)):$("",!0)]),_:1}),s(y,{label:"图表配置",name:"two"},{default:u(()=>[s(d,{label:"保存名称"},{default:u(()=>[s(i,{placeholder:"保存名称",modelValue:e.name,"onUpdate:modelValue":t[5]||(t[5]=n=>e.name=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),s(I,{modelValue:e.visible,"onUpdate:modelValue":t[6]||(t[6]=n=>e.visible=n),size:"60%",direction:e.direction,class:"ace-dialog","append-to-body":!0,"before-close":l},{header:u(()=>[r("div",{innerHTML:e.dialogTitle},null,8,Te)]),default:u(()=>[e.visible?(k(),D("div",xe)):$("",!0),r("div",$e,[s(z,{type:"primary",size:"small",onClick:o},{default:u(()=>[ae(" 确定 ")]),_:1})])]),_:1},8,["modelValue","direction"]),s(de,{ref_key:"vueFileEl",ref:v},null,512)])),[[K,e.loading]])}}});typeof O=="function"&&O(Re);export{Re as default};
