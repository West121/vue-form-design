import{d as B,k as E,l as i,A as S,u as C,h as y,p as N,r as s,o as D,c as F,g as L,i as l,w as c,m as R,a0 as j,D as M,q as z,S as A,E as g}from"./index-DLbVpaQ3.js";const O={class:"design-flow-container"},P={class:"tools"},Q=B({__name:"index",setup(U){E().changeBreadcrumb([{label:"系统工具"},{label:"流程设计"}]);const f=i(),r=i(),m=S(),d=C(),n=i(m.query.tabs||"info"),_=i({list:[{type:"input",control:{modelValue:"",placeholder:"请输入流程名称"},config:{},name:"name",formItem:{label:"流程名称"},customRules:[{type:"required",message:"请输入流程名称",trigger:"blur"}]},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"designList",method:"post",debug:!0,label:"name",value:"id",beforeFetch:e=>(e.query={},e.query.type=1,e)},name:"source",formItem:{label:"流程表单",rules:[{required:!0,message:"请选择流程表单",trigger:"blur"}]}},{type:"switch",control:{modelValue:1,activeValue:1,inactiveValue:0},options:[],config:{optionsType:2},name:"status",formItem:{label:"状态"}},{type:"component",control:{modelValue:"",colorPicker:!0},config:{componentName:"DiyIconfont"},name:"icon",formItem:{label:"流程图标"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:2,optionsFun:"sys-flow"},name:"category",formItem:{label:"所在分组"}},{type:"select",control:{modelValue:"",appendToBody:!0},options:[],config:{optionsType:1,optionsFun:"roleList",label:"name",value:"id"},name:"roleId",formItem:{label:"角色权限",hideLabel:!1}},{type:"textarea",control:{modelValue:""},config:{span:24},name:"remark",formItem:{label:"备注说明",hideLabel:!1}}],form:{class:"form-row-2",labelWidth:"110px",size:"default"}}),a=y(()=>m.query.id),v=y(()=>a.value?2:1),k=e=>{e.paneName},h=()=>{f.value.submit()},V=e=>{var o,t;return a.value&&(e.id=a.value),e.type=3,(o=r.value)!=null&&o.getValue&&(e.data=j((t=r.value)==null?void 0:t.getValue())),e},w=(e,o)=>(r.value.setValue(M(o.data)),o),T=(e,o)=>{if(e==="success"&&(n.value==="info"?(n.value="flow",a.value||(d.push({path:"/design/flow",query:{id:o,tabs:"flow"}}),z(()=>{p()}))):d.push({path:"/design/flow/list"})),e==="validate"&&n.value==="flow"){let t;try{for(const u in o)if(!t){t=o[u][0].message;break}A.error(t)}catch{}}},p=()=>{a.value&&f.value.getData({id:a.value})};return N(()=>{p()}),(e,o)=>{const t=s("el-button"),u=s("ak-form"),b=s("el-tab-pane"),I=s("ak-flow"),q=s("el-tabs");return D(),F("div",O,[L("div",P,[l(t,{type:"primary",onClick:h},{default:c(()=>[R("保存")]),_:1})]),l(q,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=x=>n.value=x),class:"flow-tabs",onTabClick:k},{default:c(()=>[l(b,{label:"基础信息",name:"info",class:"tabs-info"},{default:c(()=>[l(u,{ref_key:"formEl",ref:f,data:_.value,type:v.value,"submit-url":"designSave","edit-url":"designEdit","request-url":"designById","before-submit":V,"after-submit":T,"after-fetch":w},null,8,["data","type"])]),_:1}),l(b,{label:"审批流程",name:"flow"},{default:c(()=>[l(I,{ref_key:"flowEl",ref:r},null,512)]),_:1})]),_:1},8,["modelValue"])])}}});typeof g=="function"&&g(Q);export{Q as default};
