import{d as b,l as g,r as k,o as _,c as C,i as o,w as n,m as a,x as s,a0 as y,D as x,E as l}from"./index-DLbVpaQ3.js";const I=b({name:"test001",__name:"test",setup(w){g(.25);const i=()=>{s("design/list",{query:{type:1},extend:{pageSize:20,pageNum:1}}).then(c=>{console.log(c)}).catch(c=>{console.log("get"),console.log(c)})},r=()=>{s("content/save",{name:"1",phone:"",weixin:"",company:"",status:1,intention:1,remark:"",formId:27})},d=()=>{s("datasource/edit",{name:"调试demo",tableName:"demo_test",category:0,remark:"调试demo_test",status:1,id:24,creatDate:"2024-01-02T09:54:40.000+00:00",updateDate:"2024-01-02T09:54:40.000+00:00",creatUserId:1,updateUserId:"null",tableData:'[{"name":"name","type":"VARCHAR","length":"50","label":"标题","filedType":"text"}]'})},u=()=>{s("content/delete",{id:"12",formId:55})},m=()=>{s("system/user/login",{userName:"user",password:"123456",codeId:"8eef4b07c0272a091c39f6b3f3d313ac",code:"3pq6",refreshToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzAxMTYxOTgyfQ.ikJzCNORJFNYeOlLF1_eGiknGYcwTSQjxALFdVy6t-A"})},p=()=>{s("content/get",{formId:"25",id:"1"})},f=()=>{s("test/t",{})};return window.obj={data:[1,2],text:{a:12},title:"标题"},console.log((t=>{const c=y(t).replace(/"{{.*?}}"/g,function(e){return console.log(e),e.slice(3,-3)}).replace(/{{.*?}}/g,function(e){return new Function("return "+e.slice(2,-2))()});return x(c)})({data:"{{obj.data}}",text:"{{obj.text}}",title:"标题{{obj.title}}"})),(t,c)=>{const e=k("el-button");return _(),C("div",null,[o(e,{onClick:i},{default:n(()=>[a("queryByPage")]),_:1}),o(e,{onClick:r},{default:n(()=>[a("insert")]),_:1}),o(e,{onClick:d},{default:n(()=>[a("edit")]),_:1}),o(e,{onClick:u},{default:n(()=>[a("del")]),_:1}),o(e,{onClick:m},{default:n(()=>[a("login")]),_:1}),o(e,{onClick:p},{default:n(()=>[a("ById")]),_:1}),o(e,{onClick:f},{default:n(()=>[a("test")]),_:1})])}}});typeof l=="function"&&l(I);export{I as default};
