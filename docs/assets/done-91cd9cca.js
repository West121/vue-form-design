import{d as r,l as e,r as n,o as s,c,i}from"./index-792ff79a.js";const f=r({__name:"done",setup(p){const a=e(),t=e({list:[{type:"input",control:{modelValue:"",placeholder:"请输入审批标题"},config:{},name:"title",formItem:{label:"审批标题"}}],form:{size:"default"},config:{submitCancel:!0}}),l=e({columns:[{prop:"title",label:"审批标题"},{prop:"creatTime",label:"发起时间",config:{formatter:"{y}-{m}-{d} {h}:{i}:{s}"}},{prop:"a",label:"流程节点"},{prop:"status",label:"流程状态"}],config:{expand:!0}});return(m,u)=>{const o=n("ak-list");return s(),c("div",null,[i(o,{ref_key:"tableListEl",ref:a,"request-url":"","search-data":t.value,data:l.value},null,8,["search-data","data"])])}}});export{f as default};
