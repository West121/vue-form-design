import{f as U,m as j,r as B,z as N,A as G,a as i,x as K,o as b,b as C,j as f,e as l,w as u,d as r,t as v,F as k,g as O,h as x,B as Q,n as R,l as h,E as _}from"./index.fbb3896e.js";const T={class:"form-list-page"},M=r("\u5220\u9664"),W=r("\u65B0\u589E\u8868\u5355 "),H=r("\u65B0\u589E\u6570\u636E\u5217\u8868"),J={style:{"text-align":"right","margin-bottom":"5px"}},P=r("\u65E0\u6570\u636E\u6E90\u521B\u5EFA"),X=r("\u521B\u5EFA\u8868\u5355 "),ue=U({__name:"formList",setup(Y){j().changeBreadcrumb([{label:"\u7CFB\u7EDF\u5DE5\u5177"},{label:"\u8868\u5355\u7BA1\u7406"}]);const g=B(),c=N(),p=G({pageIndex:1,total:0,pageSize:20,tableData:{columns:[{label:"\u5E8F\u53F7",prop:"__index",type:"index",width:"60px"},{prop:"name",label:"\u8868\u5355\u540D\u79F0"},{prop:"formId",label:"\u6570\u636E\u6E90id"},{label:"\u72B6\u6001",prop:"status",config:{tagList:{1:"success",0:"info"},dictKey:"status"}},{label:"\u7C7B\u578B",prop:"type",config:{tagList:{1:"success",2:"info"},dictKey:"type"}},{label:"\u6DFB\u52A0\u65F6\u95F4",prop:"creatDate",width:"170px",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateDate",width:"170px",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{label:"\u64CD\u4F5C",prop:"control",width:"320px"}],dict:{type:{1:"\u8868\u5355",2:"\u8868\u683C"}}},requestUrl:"getFormList",btnGroup:[{label:"\u4FEE\u6539",type:1},{label:"\u641C\u7D22",type:2,title:"\u641C\u7D22\u8BBE\u7F6E"},{label:"\u5217\u8868",type:3,title:"\u5217\u8868\u8BBE\u7F6E"},{label:"\u65B0\u589E",type:4,title:"\u6DFB\u52A0\u6570\u636E"},{label:"\u67E5\u770B",type:5}],searchData:{list:[{name:"name",type:"input",control:{modelValue:"",placeholder:"\u8868\u5355\u540D\u79F0"},config:{},item:{label:"\u8868\u5355\u540D\u79F0",showLabel:!1}},{name:"status",type:"select",control:{modelValue:"",appendToBody:!0,placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001"},options:[],config:{addAll:!0,type:"async",source:2,request:"get",sourceFun:""},item:{label:"\u72B6\u6001",showLabel:!1}},{name:"type",type:"select",control:{modelValue:"",placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B"},options:[{label:"form",value:1},{label:"table",value:2}],config:{addAll:!0},item:{label:"\u7C7B\u578B",showLabel:!1}}],form:{labelWidth:"",class:"",size:"small",name:"form1660211919743"}}}),F=(a,e)=>{const t={formId:e.formId,id:e.id};switch(a){case 1:c.push({path:"/designform",query:t});break;case 2:c.push({path:"/designform",query:Object.assign({},t,{type:"search"})});break;case 3:const y=e.type===2?"table":"";c.push({path:"/designform/table",query:Object.assign({},t,{type:y})});break;case 4:c.push({path:"/designform/form",query:{tid:e.id,formId:e.formId}});break;case 5:c.push({path:"/designform/list",query:{tid:e.id,formId:e.formId}});break;case 6:h("delForm",{id:e.id}).then(d=>{var m;d.data.code===200&&(_.success(d.data.message||"\u5220\u9664\u6210\u529F"),(m=g.value)==null||m.getListData())}).catch(d=>{_.error(d.data.message||"\u5220\u9664\u5931\u8D25")});break}},q=(a,e)=>{let t=!1;return(!e.formId||!e.status)&&(t=[4,5].includes(a.type)),e.type===2&&(t=[1,4].includes(a.type)),t},A=a=>{console.log(a);const e=a.status===1?0:1;h("changeStatus",{id:a.id,status:e}).then(t=>{t.data.code===200&&(_.success(t.data.message||"\u64CD\u4F5C\u6210\u529F"),g.value.getListData())}).catch(t=>{_.error(t.data.message||"\u64CD\u4F5C\u5931\u8D25")})},s=B({visible:!1,loading:!0,tableData:[]}),L=()=>{s.value.visible=!0,s.value.loading=!0,I()},E=a=>{c.push({path:"/designform",query:{formId:a}})},I=()=>{h("datasource").then(a=>{s.value.loading=!1,s.value.tableData=a.data.data})},w=()=>{s.value.visible=!1};return(a,e)=>{const t=i("el-button"),y=i("el-popconfirm"),d=i("QuestionFilled"),m=i("el-icon"),V=i("el-tooltip"),D=i("el-table-column"),S=i("el-table"),$=i("el-dialog"),z=K("loading");return b(),C(k,null,[f("div",T,[l(Q,{searchData:p.searchData,tableData:p.tableData,requestUrl:p.requestUrl,dict:p.dict,ref_key:"tableListEl",ref:g},{control:u(o=>[l(t,{size:"small",link:"",onClick:n=>A(o.row)},{default:u(()=>[r(v(o.row.status?"\u7981\u7528":"\u542F\u7528"),1)]),_:2},1032,["onClick"]),(b(!0),C(k,null,O(p.btnGroup,n=>(b(),x(t,{size:"small",link:"",key:n.type,title:n.title,onClick:ee=>F(n.type,o.row),disabled:q(n,o.row)},{default:u(()=>[r(v(n.label),1)]),_:2},1032,["title","onClick","disabled"]))),128)),l(y,{title:"\u786E\u5B9A\u5220\u9664\u8BE5\u8BB0\u5F55?","confirm-button-text":"\u786E\u8BA4","cancel-button-text":"\u53D6\u6D88",onConfirm:n=>F(6,o.row)},{reference:u(()=>[l(t,{size:"small",link:""},{default:u(()=>[M]),_:1})]),_:2},1032,["onConfirm"])]),default:u(()=>[f("div",null,[l(t,{type:"primary",onClick:L},{default:u(()=>[W]),_:1}),l(t,{type:"success",onClick:e[0]||(e[0]=o=>a.$router.push({path:"/designform/table",query:{type:"table"}}))},{default:u(()=>[H,l(V,{content:"\u76F4\u63A5\u521B\u5EFA\u6570\u636E\u5217\u8868\uFF0C\u9002\u7528\u4E8E\u90E8\u5206\u6570\u636E\u662F\u4E0D\u9700\u8981\u901A\u8FC7\u8868\u5355\u7684\u5F62\u5F0F\u5F55\u5165",placement:"top"},{default:u(()=>[f("span",null,[l(m,null,{default:u(()=>[l(d)]),_:1})])]),_:1})]),_:1})])]),_:1},8,["searchData","tableData","requestUrl","dict"])]),l($,{modelValue:s.value.visible,"onUpdate:modelValue":e[2]||(e[2]=o=>s.value.visible=o),title:"\u9009\u62E9\u6570\u636E\u6E90",width:"600px","custom-class":"source-dialog","append-to-body":!0,"before-close":w},{default:u(()=>[f("div",J,[l(t,{type:"primary",onClick:e[1]||(e[1]=o=>E())},{default:u(()=>[P]),_:1})]),R((b(),x(S,{data:s.value.tableData,border:"",style:{width:"100%"}},{default:u(()=>[l(D,{prop:"name",label:"\u8868\u5355\u540D\u79F0"}),l(D,{label:"\u64CD\u4F5C"},{default:u(o=>[l(t,{size:"small",onClick:n=>E(o.row.id),type:"primary"},{default:u(()=>[X]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[z,s.value.loading]])]),_:1},8,["modelValue"])],64)}}});export{ue as default};
