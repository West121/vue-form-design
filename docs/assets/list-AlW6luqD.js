import{d as m,u as f,l as e,r as s,o as y,c as _,i as n,w as r,m as g,t as b}from"./index-DLbVpaQ3.js";const B=m({__name:"list",setup(k){const t=f(),c=e(),i=e({list:[{type:"input",control:{modelValue:"",placeholder:"请输入流程名称"},config:{},name:"name",formItem:{label:"流程名称"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"sys-flow"},name:"flow",formItem:{label:"流程分类"}}],form:{size:"default"},config:{submitCancel:!0}}),p=e({columns:[{label:"多选",type:"selection"},{label:"流程名称",prop:"name"},{label:"流程表单",prop:"source",config:{dictKey:"formName"}},{label:"分类",prop:"category",config:{dictKey:"sys-flow"}},{label:"状态",prop:"status",config:{dictKey:"sys-status",tagList:{0:"info",1:"success"}}},{label:"操作",prop:"__control"}],config:{},controlBtn:[{label:"新增流程",type:"primary",size:"small",icon:"plus",click:()=>{t.push({path:"/design/flow"})}},{label:"批量删除",key:"del",type:"danger",size:"small",icon:"delete"}],operateBtn:[{label:"编辑",click:o=>{t.push({path:"/design/flow",query:{id:o.id}})}},{label:"删除",key:"del"}]});return(o,h)=>{const u=s("router-link"),d=s("ak-list");return y(),_("div",null,[n(d,{ref_key:"tableListEl",ref:c,"request-url":"designList","delete-url":"designDelete","search-data":i.value,data:p.value,query:{type:3}},{source:r(({row:l,dict:a})=>[n(u,{to:`/design/form?id=${l.source}&redirect=/design/list/list`},{default:r(()=>[g(b(a.formName&&a.formName[l.source]),1)]),_:2},1032,["to"])]),_:1},8,["search-data","data"])])}}});export{B as default};
