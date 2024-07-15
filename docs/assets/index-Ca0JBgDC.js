import{d as le,l as H,h as W,p as ue,r as F,o as m,b as L,w as c,i as t,m as P,D as ee,c as R,a as Q,F as G,g as C,f as K,q as me,N as we,O as xe,a3 as ne,M as pe,H as Ce,I as Se,t as te,n as Y,s as ie,a4 as Ie,Q as ce,R as $e,v as be,z as oe,a0 as j,a5 as re,S as de,U as ke,V as Te,B as Ve,u as Ae,k as De,C as Re,E as fe,Z as Ue,$ as Ee,a1 as Fe,X as ve,x as ze,G as he}from"./index-DjT9YCnt.js";import{u as ae,_ as Me,r as X,c as Oe,a as Le,g as Be}from"./getData-DjpNH6yR.js";import{_ as Ne}from"./aceDrawer.vue_vue_type_script_setup_true_lang-fBzQ-CHU.js";import{_ as Pe,a as qe,g as We,b as He}from"./aceTooptip-BvE9L8a_.js";import{r as z}from"./utils-Cmr_u3Fd.js";import"./formatScreen-Da2ud_Q5.js";const Je=["bg.jpg","bg2.jpg","bg3.jpg","head_bg.png"],se={bg:Je},Ke={class:"img-list"},Xe=["onClick"],Ye=["src"],Ge={key:0},Qe=le({__name:"upload",emits:["click"],setup(Z,{expose:V,emit:g}){const S=g,k=H(!1),v=H(),l=H("bg"),q=W(()=>{if(!se)return[];const I=[];for(const d in se)I.push(d);return I}),B=W(()=>l.value.name==="upload"?[]:se?se[l.value]:[]),y=W(()=>`./static/screen/${l.value}/`),w=I=>{k.value=!1,S("click",y.value+I,v.value)},_=I=>{l.value="upload",me(()=>{B.value.unshift(I.path)})};return V({open:(I,d)=>{k.value=!0,v.value=d,I?l.value=I:l.value=q.value[0]}}),ue(()=>{}),(I,d)=>{const r=F("el-button"),U=F("el-upload"),E=F("el-tab-pane"),p=F("el-tabs"),s=F("el-dialog");return m(),L(s,{modelValue:k.value,"onUpdate:modelValue":d[1]||(d[1]=e=>k.value=e),width:"800px",title:"选择上传图片"},{default:c(()=>{var e;return[t(U,{action:ee(we),"on-success":_,"show-file-list":!1},{default:c(()=>[t(r,{type:"primary"},{default:c(()=>[P("上传")]),_:1})]),_:1},8,["action"]),t(p,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=o=>l.value=o)},{default:c(()=>[(m(!0),R(G,null,Q(q.value,o=>(m(),L(E,{label:o,name:o,key:o},null,8,["label","name"]))),128)),t(E,{label:"上传",name:"upload"})]),_:1},8,["modelValue"]),C("div",Ke,[C("ul",null,[(m(!0),R(G,null,Q(B.value,o=>(m(),R("li",{key:o,onClick:i=>w(o)},[C("img",{src:y.value+o,alt:""},null,8,Ye)],8,Xe))),128))]),(e=B.value)!=null&&e.length?K("",!0):(m(),R("p",Ge,"暂无相关素材资源"))])]}),_:1},8,["modelValue"])}}}),Ze=xe(Qe,[["__scopeId","data-v-631dd2e4"]]),je={key:0},et=C("h3",null,"数据",-1),tt=C("h3",null,"接口数据处理事件",-1),lt=C("h3",null,"全局数据",-1),ot=C("h3",null,"接口数据处理事件",-1),at=le({__name:"configControl",emits:["openDrawer"],setup(Z,{emit:V}){const g=V,S=ne("screenData"),k=W(()=>S.value.config||{}),v=ae(),l=W(()=>v.controlAttr),q=W(()=>{var s,e,o,i;return((e=(s=l.value)==null?void 0:s.config)==null?void 0:e.lock)||((i=(o=l.value)==null?void 0:o.position)==null?void 0:i.display)}),B=H(),y=W(()=>l.value.type),w=pe({bgColor:"",bgUpload:"",bgSelect:""}),_=Ce(()=>k.value,s=>{if(!Object.keys(l.value).length){const e=s.background||"";if(e.indexOf("url")!==-1){const o=new RegExp("(?<=url\\()(.*?)(?=\\))","g"),i=e.match(o);Object.assign(w,{bgUpload:i,bgSelect:2})}else Object.assign(w,{bgColor:e,bgSelect:1})}},{immediate:!0}),x=()=>{let s="";switch(w.bgSelect){case 1:s=w.bgColor;break;case 2:s=`url(${w.bgUpload})`;break}I("background",s)},I=(s,e)=>{S.value.config=Object.assign({},k.value,{[s]:e})},d=W(()=>{var s,e,o,i;if(Object.keys(l.value).length){const{config:n={},position:f,type:b}=l.value;return[{type:"group",title:"位置信息"},{label:"width",value:f.width,placeholder:"请输入宽度",key:"width",path:"position"},{label:"height",value:f.height,placeholder:"请输入高度",key:"height",path:"position"},{label:"left",value:f.left,placeholder:"图层位置",key:"left",path:"position"},{label:"top",value:f.top,key:"top",path:"position"},{label:"right",value:f.right,placeholder:"设置后left为auto",key:"right",path:"position"},{label:"bottom",value:f.bottom,placeholder:"设置后top为auto",key:"bottom",path:"position"},{type:"number",label:"zIndex",value:f.zIndex,placeholder:"请输入层级",key:"zIndex",path:"position"},{type:"group",title:"属性信息"},{type:"switch",label:"锁定",value:n.lock,key:"lock"},{type:"switch",label:"隐藏",value:f.display,key:"display",path:"position"},{label:"样式类名",placeholder:"方便引用个性化样式",value:n.class,key:"class"},{label:"文本内容",placeholder:"请输入文本内容",value:n.text,key:"text",vShow:["text"]},{type:"select",label:"滚动方向",placeholder:"请选择滚动方向",value:n.direction,key:"direction",vShow:["sText"],options:{left:"从左到右",right:"从右到左",top:"从上到下",bottom:"从下到上"}},{type:"number",label:"滚动速度",placeholder:"滚动速度，数字越大速度越慢",value:n.speed,key:"speed",vShow:["sText"]},{type:"number",label:"滚动步长",placeholder:"每单位时间滚动的距离，默认1",value:n.step,key:"step",vShow:["sText"]},{type:"textarea",label:"文本内容",placeholder:"请输入文本内容，支持html",value:n.text,key:"text",vShow:["sText"]},{label:"字体大小",placeholder:"文本字体大小,如14px",value:(s=n.style)==null?void 0:s.fontSize,key:"fontSize",path:"style",vShow:["text","clock"]},{label:"边框",placeholder:"如1px solid #000",value:(e=n.style)==null?void 0:e.border,key:"border",path:"style",vShow:["border"]},{type:"color",label:"背景颜色",value:(o=n.style)==null?void 0:o.background,key:"background",path:"style",vShow:["border"]},{type:"color",label:"字体颜色",value:(i=n.style)==null?void 0:i.color,key:"color",path:"style",vShow:["text","clock"]},{type:"select",label:"时间格式",value:n.dateTime,key:"dateTime",allowCreate:!0,filterable:!0,placeholder:"选择或创建时间格式",vShow:["clock"],options:{"{y}-{m}-{d}":"{y}-{m}-{d}","{h}:{i}:{s}":"{h}:{i}:{s}","{y}-{m}-{d} {h}:{i}:{s}":"{y}-{m}-{d} {h}:{i}:{s}","{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}":"{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}"}},{label:"组件名称",value:n.component,placeholder:"全局注册的组件名称",key:"component",vShow:["component"]},{type:"switch",label:"是否轮播",value:n.carousel,key:"carousel",vShow:["table"]},{type:"number",label:"滚动速度",placeholder:"开启轮播有效",value:n.speed,key:"speed",vShow:["table"]}].filter(D=>{let h=!0;return D.vShow&&(h=D.vShow.includes(b)),D.vHide&&(h=!D.vHide.includes(b)),h})}return[]}),r=(s,e)=>{var o;s.path==="position"?l.value.position[s.key]=e:s.path==="style"?((o=l.value.config)!=null&&o.style||(l.value.config.style={}),l.value.config.style[s.key]=e):l.value.config[s.key]=e},U=(s,e)=>{B.value.open(s,e)},E=(s,e)=>{switch(e){case"screenBg":w.bgUpload=s,x();break;case"src":l.value.config.src=s;break}},p=(s,e)=>{var h,$,T;let o="",i,n="",f="",b=s;switch(s==="afterFetchScreen"&&(b="afterFetch"),s){case"editCss":o="css";break;case"beforeFetch":case"afterFetch":case"afterFetchScreen":e?(s==="afterFetch"&&(f="这里返回的数据在当前页面可使用getScreenGlobal方法获取"),i=k.value&&k.value[b]):i=l.value.events&&l.value.events[b];break;case"style":o="json",i=((h=l.value.config)==null?void 0:h.style)||{},n="可输入更多的css样式，须为json格式";break;case"echartsEdit":i=l.value.option,n="可参考echarts相关例子编辑";break;case"tablePropsEdit":o="json",i=(($=l.value.config)==null?void 0:$.props)||{},n="支持所有表格props属性，可参考el-table。json格式";break;case"editData":const u=l.value.type;n="图表数据，替换相关数据返回即可",["text","sText"].includes(u)?(i=(T=l.value.config)==null?void 0:T.text,n="编辑文本内容数据"):i=l.value.option,u==="table"&&(n="表格列表数据。根据设定的table-column列数据设置对应的数据");break}g("openDrawer",{content:i,codeType:o,type:s,title:n,tips:f,callback:u=>{switch(s){case"beforeFetch":case"afterFetch":case"afterFetchScreen":e?k.value[b]=u:(l.value.events||(l.value.events={}),l.value.events[b]=u);break;case"style":l.value.config.style=u;break;case"echartsEdit":l.value.option=u;break;case"tablePropsEdit":l.value.config.props=u;break;case"editData":const A=l.value.type;["text","sText"].includes(A)?l.value.config.text=u:l.value.option=u;break}}})};return Se(()=>{_()}),(s,e)=>{const o=F("el-switch"),i=F("el-color-picker"),n=F("el-input"),f=F("el-option"),b=F("el-select"),D=F("el-input-number"),h=F("el-form-item"),$=F("el-button"),T=F("el-form"),u=F("el-radio"),A=F("el-radio-group"),N=F("el-tab-pane"),O=F("el-tabs");return m(),R("div",{class:Y(["main-right",{lock:q.value}])},[t(O,{class:"tabs","model-value":"position"},{default:c(()=>[t(N,{label:"属性配置",name:"position"},{default:c(()=>[t(T,{size:"small"},{default:c(()=>[(m(!0),R(G,null,Q(d.value,(a,J)=>(m(),L(h,{label:a.label,key:J},{default:c(()=>[a.type==="group"?(m(),R("h3",je,te(a.title),1)):a.type==="switch"?(m(),L(o,{key:1,"model-value":a.value,onChange:M=>r(a,M),class:Y([a.key])},null,8,["model-value","onChange","class"])):a.type==="color"?(m(),L(i,{key:2,"show-alpha":"",onChange:M=>r(a,M),"model-value":a.value},null,8,["onChange","model-value"])):a.type==="textarea"?(m(),L(n,{key:3,type:"textarea",placeholder:a.placeholder,onChange:M=>r(a,M),"model-value":a.value},null,8,["placeholder","onChange","model-value"])):a.type==="select"?(m(),L(b,{key:4,allowCreate:a.allowCreate,filterable:a.filterable,placeholder:a.placeholder,onChange:M=>r(a,M),"model-value":a.value},{default:c(()=>[(m(!0),R(G,null,Q(a.options,(M,_e)=>(m(),L(f,{key:M,label:M,value:_e},null,8,["label","value"]))),128))]),_:2},1032,["allowCreate","filterable","placeholder","onChange","model-value"])):a.type==="number"?(m(),L(D,{key:5,"controls-position":"right",placeholder:a.placeholder,"model-value":a.value,onInput:M=>r(a,M)},null,8,["placeholder","model-value","onInput"])):(m(),L(n,{key:6,placeholder:a.placeholder,"model-value":a.value,onInput:M=>r(a,M)},null,8,["placeholder","model-value","onInput"]))]),_:2},1032,["label"]))),128)),["image","background"].includes(y.value)?(m(),L(h,{key:0,class:"upload-image"},{default:c(()=>[t(n,{placeholder:"请输入图片地址",modelValue:l.value.config.src,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value.config.src=a)},null,8,["modelValue"]),t($,{type:"primary",onClick:e[1]||(e[1]=a=>U(y.value==="image"?"img":"bg","src"))},{default:c(()=>[P("选择图片")]),_:1})]),_:1})):K("",!0),["line","bar","pie","echarts"].includes(y.value)?(m(),L(h,{key:1},{default:c(()=>[t($,{type:"primary",onClick:e[2]||(e[2]=a=>p("echartsEdit"))},{default:c(()=>[P("图表编辑")]),_:1})]),_:1})):K("",!0),["text","sText","image","background","border","clock"].includes(y.value)?(m(),L(h,{key:2},{default:c(()=>[t($,{type:"primary",onClick:e[3]||(e[3]=a=>p("style"))},{default:c(()=>[P("编辑更多内联样式")]),_:1})]),_:1})):K("",!0),["table"].includes(y.value)?(m(),L(h,{key:3},{default:c(()=>[t($,{type:"primary",onClick:e[4]||(e[4]=a=>p("tablePropsEdit"))},{default:c(()=>[P("表格属性")]),_:1})]),_:1})):K("",!0)]),_:1}),["line","bar","pie","echarts","text","sText","table"].includes(y.value)?(m(),L(T,{key:0,size:"small"},{default:c(()=>[t(h,null,{default:c(()=>[et]),_:1}),t(h,{label:"数据类型"},{default:c(()=>[t(A,{modelValue:l.value.config.optionsType,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.config.optionsType=a)},{default:c(()=>[t(u,{value:0,style:{"margin-right":"4px"}},{default:c(()=>[P("静态/全局")]),_:1}),t(u,{value:1},{default:c(()=>[P("动态")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l.value.config.optionsType!==1?(m(),L(h,{key:0},{default:c(()=>[t($,{type:"primary",onClick:e[6]||(e[6]=a=>p("editData"))},{default:c(()=>[P("编辑数据")]),_:1})]),_:1})):K("",!0),l.value.config.optionsType===1?(m(),R(G,{key:1},[t(h,null,{default:c(()=>[t(n,{modelValue:l.value.config.requestUrl,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.config.requestUrl=a),placeholder:"接口URL或api中的key"},{prepend:c(()=>[t(b,{modelValue:l.value.config.method,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.config.method=a),style:{width:"60px"}},{default:c(()=>[t(f,{label:"get",value:"get"}),t(f,{label:"post",value:"post"}),t(f,{label:"ws",value:"ws",disabled:""})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),t(h,{label:"刷新时间"},{default:c(()=>[t(D,{modelValue:l.value.config.loopTime,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.config.loopTime=a),disabled:""},null,8,["modelValue"])]),_:1}),t(h,null,{default:c(()=>[tt]),_:1}),t(h,null,{default:c(()=>[t($,{onClick:e[10]||(e[10]=a=>p("beforeFetch"))},{default:c(()=>[P("beforeFetch")]),_:1})]),_:1}),t(h,null,{default:c(()=>[t($,{onClick:e[11]||(e[11]=a=>p("afterFetchScreen"))},{default:c(()=>[P("afterFetch")]),_:1})]),_:1})],64)):K("",!0)]),_:1})):K("",!0)]),_:1}),t(N,{label:"大屏配置",name:"screen"},{default:c(()=>[t(T,{size:"small"},{default:c(()=>[t(h,{label:"大屏宽度"},{default:c(()=>[t(n,{placeholder:"请输入大屏宽度","model-value":k.value.width,onInput:e[12]||(e[12]=a=>I("width",a))},null,8,["model-value"])]),_:1}),t(h,{label:"大屏高度"},{default:c(()=>[t(n,{placeholder:"请输入大屏高度","model-value":k.value.height,onInput:e[13]||(e[13]=a=>I("height",a))},null,8,["model-value"])]),_:1}),t(h,{class:"color-picker",label:"主色"},{default:c(()=>[t(i,{"show-alpha":"",onChange:e[14]||(e[14]=a=>I("primary",a)),"model-value":k.value.primary},null,8,["model-value"])]),_:1}),t(h,{label:"背景"},{default:c(()=>[t(b,{modelValue:w.bgSelect,"onUpdate:modelValue":e[15]||(e[15]=a=>w.bgSelect=a),onChange:x},{default:c(()=>[t(f,{value:1,label:"背景色"}),t(f,{value:2,label:"背景图"})]),_:1},8,["modelValue"])]),_:1}),w.bgSelect===1?(m(),L(h,{key:0,class:"color-picker"},{default:c(()=>[t(i,{"show-alpha":"",modelValue:w.bgColor,"onUpdate:modelValue":e[16]||(e[16]=a=>w.bgColor=a),onChange:x},null,8,["modelValue"])]),_:1})):K("",!0),w.bgSelect===2?(m(),L(h,{key:1,class:"upload-image"},{default:c(()=>[t(n,{placeholder:"请输入图片地址",modelValue:w.bgUpload,"onUpdate:modelValue":e[17]||(e[17]=a=>w.bgUpload=a),onChange:x},null,8,["modelValue"]),t($,{type:"primary",onClick:e[18]||(e[18]=a=>U("bg","screenBg"))},{default:c(()=>[P("上传")]),_:1})]),_:1})):K("",!0),t(h,null,{default:c(()=>[t($,{onClick:e[19]||(e[19]=a=>p("editCss"))},{default:c(()=>[P("编辑样式")]),_:1})]),_:1}),t(h,null,{default:c(()=>[lt]),_:1}),t(h,null,{default:c(()=>[t(n,{"model-value":k.value.requestUrl,placeholder:"接口URL或api中的key",onInput:e[21]||(e[21]=a=>I("requestUrl",a))},{prepend:c(()=>[t(b,{"model-value":k.value.method,style:{width:"60px"},onChange:e[20]||(e[20]=a=>I("method",a))},{default:c(()=>[t(f,{label:"get",value:"get"}),t(f,{label:"post",value:"post"}),t(f,{label:"ws",value:"ws",disabled:""})]),_:1},8,["model-value"])]),_:1},8,["model-value"])]),_:1}),t(h,{label:"刷新时间"},{default:c(()=>[t(D,{disabled:"","model-value":k.value.loopTime,onInput:e[22]||(e[22]=a=>I("loopTime",a))},null,8,["model-value"])]),_:1}),t(h,null,{default:c(()=>[ot]),_:1}),t(h,null,{default:c(()=>[t($,{onClick:e[23]||(e[23]=a=>p("beforeFetch",!0))},{default:c(()=>[P("beforeFetch")]),_:1})]),_:1}),t(h,null,{default:c(()=>[t($,{onClick:e[24]||(e[24]=a=>p("afterFetch",!0))},{default:c(()=>[P("afterFetch")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(Ze,{ref_key:"uploadImageEl",ref:B,onClick:E},null,512)],2)}}}),st={class:"main-left"},nt={class:"components-list scroll"},it={class:"title"},ct=["title"],rt={class:"scroll layer-list"},ut=["onClick"],pt=["onUpdate:modelValue"],dt=["title"],ft={class:"icon-group"},vt=["onClick"],ht=["onClick"],gt=C("i",{class:"icon-del"},null,-1),yt=le({__name:"controlLeft",setup(Z){const V=ae(),g=ne("screenData")||{},S=W(()=>{let y=[];return g.value.list.forEach(w=>{var _;w.id!=="rect"&&(y.push(w),["div","group"].includes(w.type)&&((_=w.list)!=null&&_.length)&&(w.list.forEach(x=>{x.pid=w.id}),y=[...y,...w.list]))}),y}),k={line:"line",bar:"bar",pie:"pie",echarts:"",table:"table",text:"text2",sText:"sText",image:"image",background:"image",border:"border",clock:"time",div:"div",group:"div",component:"component"},v=y=>`icon-${k[y.type]}`,l=(y,w)=>{var _;switch(w){case"display":y.position.display=!y.position.display;break;case"lock":y.config.lock=!y.config.lock,y.type==="div"&&((_=y.list)==null||_.forEach(x=>{x.config.lock=!y.config.lock}));break;case"active":V.setActiveId(y.id),V.setControlAttr(y);break;case"del":g.value.list.forEach((x,I)=>{var d;x.id===y.id?g.value.list.splice(I,1):["div","group"].includes(x.type)&&((d=x.list)!=null&&d.length)&&x.list.forEach((r,U)=>{r.id===y.id&&x.list.splice(U,1)})});break}},q=H([{label:"图表",children:[{type:"line",label:"折线图",position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:0,top:0,right:0,bottom:30},series:[{data:[150,230,224,218,135,147,260],type:"line"}]}},{type:"bar",label:"柱状图",position:{width:400,height:300},option:{xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},grid:{left:0,top:0,right:0,bottom:30},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]}},{type:"pie",label:"饼图",position:{width:300,height:300},option:{grid:{left:0,top:0,right:0,bottom:0},series:[{type:"pie",radius:"50%",data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]}},{type:"echarts",label:"通用图表",position:{width:400,height:300},option:{grid:{left:0,top:0,right:0,bottom:0}}}]},{label:"表格",children:[{type:"table",label:"表格",position:{width:500,height:300},option:{columns:[],list:[]}}]},{label:"辅助",children:[{type:"text",label:"文本",position:{width:100,height:30},config:{text:"文本内容"}},{type:"sText",label:"滚动文本",position:{width:100,height:30},config:{text:"滚动文本内容"}},{type:"image",label:"图片",position:{width:100,height:50},config:{src:""}},{type:"background",label:"背景",position:{width:100,height:50},config:{src:""}},{type:"border",label:"边框",position:{width:100,height:100},config:{style:{border:"1px solid #fff"}}},{type:"clock",label:"当前时间",position:{width:150,height:30}}]},{label:"布局",children:[{type:"div",label:"div布局",position:{height:100},list:[]}]},{label:"自定义组件",children:[{type:"component",label:"自定义",position:{width:200,height:200},config:{}}]}]),B=y=>ce(y);return(y,w)=>{const _=F("el-tab-pane"),x=F("el-popconfirm"),I=F("el-tabs");return m(),R("div",st,[t(I,{"model-value":"component",class:"tabs"},{default:c(()=>[t(_,{label:"组件",name:"component"},{default:c(()=>[C("div",nt,[(m(!0),R(G,null,Q(q.value,(d,r)=>(m(),R("div",{key:r},[C("div",it,te(d.label),1),t(ee($e),{itemKey:"label",tag:"ul",modelValue:d.children,"onUpdate:modelValue":U=>d.children=U,group:{name:"screen",pull:"clone",put:!1},"ghost-class":"ghost",sort:!1,clone:B},{item:c(({element:U})=>[C("li",{class:Y([U.type])},[C("i",{class:Y(`icon-${k[U.type]}`)},null,2),C("span",{title:U.label},te(U.label),9,ct)],2)]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))])]),_:1}),t(_,{label:"图层",name:"layer"},{default:c(()=>[C("div",rt,[C("ul",null,[(m(!0),R(G,null,Q(S.value,(d,r)=>{var U,E,p,s;return m(),R("li",{key:r,class:Y({active:ee(V).activeId===d.id,lock:(U=d.config)==null?void 0:U.lock,display:(E=d.position)==null?void 0:E.display,"text-indent":d.pid})},[C("div",{class:"name",onClick:e=>l(d,"active")},[C("i",{class:Y(v(d))},null,2),ee(V).activeId===d.id?ie((m(),R("input",{key:0,"onUpdate:modelValue":e=>d.layerName=e},null,8,pt)),[[Ie,d.layerName]]):(m(),R("span",{key:1,title:d.layerName||d.id},te(d.layerName||d.id),9,dt))],8,ut),C("div",ft,[C("i",{onClick:e=>l(d,"display"),class:Y(["icon",[(p=d.position)!=null&&p.display?"icon-eye-close":"icon-eye"]])},null,10,vt),C("i",{onClick:e=>l(d,"lock"),class:Y(["icon",[(s=d.config)!=null&&s.lock?"icon-lock":"icon-lock-open"]])},null,10,ht),t(x,{title:"确认删除",onConfirm:e=>l(d,"del")},{reference:c(()=>[gt]),_:2},1032,["onConfirm"])])],2)}),128))])])]),_:1})]),_:1})])}}}),mt={class:"ruler-box"},ge=le({__name:"ruler",props:{direction:{default:"h"},scale:{},showRuler:{type:Boolean},size:{}},setup(Z){const V=Z,g=W(()=>({width:parseInt(V.size)*V.scale/100+"px"})),S=W(()=>{const k=parseInt(V.size)+100,v=[];for(let l=0;l<k;l=l+100)v.push(l);return v});return(k,v)=>ie((m(),R("div",{class:Y(["screen-ruler",`ruler-${k.direction}`]),style:oe(g.value)},[C("div",mt,[(m(!0),R(G,null,Q(S.value,l=>(m(),R("span",{key:l,style:oe({width:`${k.scale}px`})},te(l),5))),128))])],6)),[[be,k.showRuler]])}}),bt=["onClick"],kt=le({__name:"rightMenu",setup(Z,{expose:V}){const g=ne("screenData"),S=ae(),k=H({}),v=H(!1),l=W(()=>{let x=k.value.type;["tempRect","group"].includes(x)||(x="single");const I={tempRect:["merge","left","right","top","bottom","horizontally","verticalCenter","del","lock","display"],group:["copy","split","del","lock","display"],single:["copy","del","lock","display"]};return[{key:"merge",label:"组合"},{key:"split",label:"拆分"},{key:"left",label:"左对齐"},{key:"right",label:"右对齐"},{key:"top",label:"顶部对齐"},{key:"bottom",label:"底部对齐"},{key:"horizontally",label:"水平居中"},{key:"verticalCenter",label:"垂直居中"},{key:"copy",label:"复制"},{key:"del",label:"删除"},{key:"lock",label:"锁定"},{key:"display",label:"隐藏"}].filter(d=>I[x].includes(d.key))}),q=W(()=>({left:`${k.value.x+10}px`,top:`${k.value.y+10}px`})),B=()=>{setTimeout(()=>{w()},1e3)},y=x=>{g.value.list.forEach((r,U)=>{r.id===k.value.id&&d(r,U,g.value.list),r.list&&Array.isArray(r.list)&&r.list.forEach((E,p)=>{E.id===k.value.id&&d(E,p,r.list)}),I(r)});function I(r){if(k.value.type==="tempRect")switch(x){case"display":S.tempActiveId.includes(r.id)&&(r.position.display=!0);break;case"lock":S.tempActiveId.includes(r.id)&&(r.config.lock=!0);break}}function d(r,U,E){const p=k.value.type;switch(x){case"copy":const s=ce(r);s.id=s.type+new Date().getTime(),s.layerName="复制"+s.layerName,E.push(s),j.success("复制成功");break;case"del":p==="tempRect"?(r.position.display=!0,g.value.list=g.value.list.filter(u=>!S.tempActiveId.includes(u.id))):E.splice(U,1),j.success("删除成功");break;case"lock":p==="tempRect"?r.position.display=!0:r.config.lock=!0,["div","group"].includes(p)&&r.list&&Array.isArray(r.list)&&r.list.forEach(u=>{u.config.lock=!0}),j.success("锁定成功");break;case"display":r.position.display=!0,j.success("隐藏成功");break;case"horizontally":case"verticalCenter":const{top:e,height:o,left:i,width:n}=r.position;let f=z(e)+z(o)/2,b="top",D="height";x==="verticalCenter"&&(f=z(i)+z(n)/2,b="left",D="width");let h=0;for(const u in S.tempActiveId){const A=E.filter(N=>N.id===S.tempActiveId[u])[0];A.position[b]=f-z(A.position[D])/2,A.position[D]>h&&(h=z(A.position[D]))}r.position[D]=h+"px",r.position[b]=f-h/2;break;case"left":case"top":const $=x==="left"?"width":"height";if(p==="tempRect"){const u=z(r.position[x]);let A=0;for(const N in S.tempActiveId){const O=E.filter(a=>a.id===S.tempActiveId[N])[0];O.position[x]=u,O.position[$]>A&&(A=z(O.position[$]))}r.position[$]=A+"px"}break;case"bottom":if(p==="tempRect"){const{height:u,top:A}=r.position,N=z(u)+z(A);let O=0;for(const a in S.tempActiveId){const J=E.filter(M=>M.id===S.tempActiveId[a])[0];J.position.top=N-z(J.position.height),J.position.height>O&&(O=z(J.position.height))}r.position.height=O+"px",r.position.top=`${N-O}px`}break;case"right":if(p==="tempRect"){const{width:u,left:A}=r.position,N=z(u)+z(A);let O=0;for(const a in S.tempActiveId){const J=E.filter(M=>M.id===S.tempActiveId[a])[0];J.position.left=N-z(J.position.width),J.position.width>O&&(O=z(J.position.width))}r.position.width=O+"px",r.position.left=`${N-O}px`}break;case"merge":const T=ce(r);T.type="group",T.id=T.type+new Date().getTime(),T.layerName="组合层",T.list=[],T.config={},E.forEach(u=>{if(S.tempActiveId.includes(u.id)){u.position.left=Math.abs(T.position.left-z(u.position.left)),u.position.top=Math.abs(T.position.top-z(u.position.top));const A=u.position.width;typeof A=="number"||A.indexOf("px")!==-1?u.position.width=z(A)/r.position.width*100+"%":A.indexOf("%"),T.list.push(u)}u.id==="rect"&&(u.position.display=!0)}),E.push(T),g.value.list=g.value.list.filter(u=>!S.tempActiveId.includes(u.id)),S.setActiveId(T.id),S.setControlAttr(T);break;case"split":r.list.forEach(u=>{const{left:A,top:N,width:O}=u.position,{left:a,top:J,width:M}=r.position;delete u.pId,u.position.left=z(a)+A,u.position.top=z(J)+N,O.toString().indexOf("%")!==-1&&(typeof M=="number"||M.toString().indexOf("px")!==-1)&&(u.position.width=z(M)*z(O)/100+"px"),E.push(u)}),g.value.list=g.value.list.filter(u=>u.id!==r.id);break}}w()},w=()=>{v.value=!1};return V({open:x=>{k.value=x,v.value=!0},close:w}),(x,I)=>ie((m(),R("div",{class:"screen-right-menu",style:oe(q.value),onMouseleave:B},[C("ul",null,[(m(!0),R(G,null,Q(l.value,d=>(m(),R("li",{key:d.key,onClick:r=>y(d.key)},te(d.label),9,bt))),128))])],36)),[[be,v.value]])}}),_t={key:0,class:"no-date"},wt={class:"design-footer"},xt={class:"control-tip"},Ct={class:"center"},St={class:"item"},It=C("label",{class:"label"},"标尺",-1),$t={class:"item slider"},Tt=C("label",{class:"label"},"缩放比例",-1),Vt={class:"item"},At=le({__name:"design",props:{preview:{type:Boolean}},setup(Z){const V=ne("screenData"),g=ae(),S=H(),k=W(()=>g.controlTip),v=pe({scale:100,autoScale:100,ruler:!0,offset:[0,0],moveFlag:!1,ctrlPress:!1});re("stateData",v);const l=W(()=>{const{width:e,height:o,background:i,primary:n}=V.value.config,f=v.scale/100;return{width:e,height:o,background:i,transform:`scale(${f})`,color:n}}),q=e=>{w(),v.moveFlag=!0;const o=e.offsetX,i=e.offsetY;let n=0,f=0,b=0,D=0;document.onmousemove=h=>{if(!v.moveFlag)return;const $=(h.pageX-v.offset[0])/(v.scale/100),T=(h.pageY-v.offset[1])/(v.scale/100);b=Math.min(o,$),D=Math.min(i,T),n=Math.abs(o-$),f=Math.abs(i-T);let u=!0;n>10&&f>10&&(u=!1),p({left:b+"px",top:D+"px",width:n+"px",height:f+"px",display:u})},document.onmouseup=function(){var h;if(v.moveFlag){if(n>10&&f>10){_({left:b,top:D,width:n,height:f});const $=(h=g.tempActiveId)==null?void 0:h.length;if($>1)g.setControlTip(`当前选区选中 ${$} 个组件目标，可使用键盘方向键调整位置`),s(),g.setActiveId("rect");else if(p({display:!0}),$===1){const T=g.tempActiveId[0];g.setActiveId(T);const u=V.value.list.filter(A=>A.id===T);g.setControlAttr(u[0])}}v.moveFlag=!1,document.onmousemove=null}}},B=H();re("openRightMenu",e=>{B.value.open(e)});const w=()=>{g.setControlAttr({}),g.setActiveId(""),g.setTempActiveId([]),g.setControlTip("可按住Ctrl键选中多个"),p({display:!0}),B.value.close()},_=e=>{g.setTempActiveId([]),V.value.list.forEach(i=>{!Oe(i.position)&&o(i.position,e)&&Le(i)&&g.setTempActiveId(i.id)});function o(i,n){const f=X(i.left),b=X(i.top),D=f+X(i.width),h=b+X(i.height),$=X(n.left),T=X(n.top),u=$+X(n.width),A=T+X(n.height),N=f<u&&$<D,O=b<A&&T<h;return N&&O}},x=H({100:{style:{}}}),I=e=>{const o=g.getScreenConfig(e)||!1;setTimeout(()=>{E()},500),g.setScreenConfig(e,!o)},d=e=>{S.value.scrollTo(0,0),e==="auto"?v.scale=v.autoScale:v.scale=100,g.setScreenConfig("scale",v.scale)},r=e=>{g.setScreenConfig("scale",e)};de(document,"keydown",e=>{e.key==="Control"&&(v.ctrlPress||(g.setTempActiveId([]),g.setActiveId(""),p({display:!0})),v.ctrlPress=!0);const o=["ArrowRight","ArrowLeft","ArrowDown","ArrowUp"];if(g.activeId&&o.includes(e.key)){const i=V.value.list.filter(n=>n.id===g.activeId);i!=null&&i.length&&U(i[0],e.key),g.activeId==="rect"&&V.value.list.forEach(n=>{U(n,e.key)}),e.preventDefault()}});const U=(e,o)=>{const i=e.position,n=X(i.left),f=X(i.top);switch(o){case"ArrowRight":i.left=n+1;break;case"ArrowLeft":i.left=n-1;break;case"ArrowDown":i.top=f+1;break;case"ArrowUp":i.top=f-1;break}};de(document,"keyup",()=>{v.ctrlPress=!1});const E=()=>{me(()=>{var n;const e=S.value.offsetWidth,o=parseInt((n=V.value.config)==null?void 0:n.width);if(e&&o){const f=parseInt(`${e/o*100}`),b=g.getScreenConfig("scale");v.autoScale=f,v.scale=parseInt(b)||f}const i=S.value.getBoundingClientRect();v.offset[0]=i.left+20,v.offset[1]=i.top+20})},p=e=>{const o=V.value.list.filter(i=>i.id==="rect");o[0].position=e},s=()=>{const e={left:0,top:0,ex:0,ey:0,zIndex:1};V.value.list.forEach(i=>{if(g.tempActiveId.includes(i.id)){const{left:n,top:f,width:b,height:D,zIndex:h}=i.position,$=parseInt(n),T=parseInt(f),u=parseInt(b),A=parseInt(D);e.left=o(e.left,$),e.top=o(e.top,T),e.ex=Math.max(e.ex,u+$),e.ey=Math.max(e.ey,A+T),e.zIndex=Math.max(e.zIndex,h||1)}}),p({left:e.left,top:e.top,width:Math.abs(e.ex-e.left),height:Math.abs(e.ey-e.top),display:!1,zIndex:e.zIndex+1});function o(i,n){return i===0?n:Math.min(i,n)}};return ue(()=>{E()}),ke(()=>{}),(e,o)=>{const i=F("el-switch"),n=F("el-slider"),f=F("el-button");return m(),R(G,null,[C("div",{ref_key:"designBoxEl",ref:S,class:"design-box"},[t(ge,{scale:v.scale,"show-ruler":v.ruler,size:l.value.width},null,8,["scale","show-ruler","size"]),t(ge,{scale:v.scale,"show-ruler":v.ruler,direction:"v",size:l.value.height},null,8,["scale","show-ruler","size"]),C("div",{class:Y([{preview:e.preview},"design-canvas"]),style:oe(l.value),onMousedown:Te(q,["left"])},[t(Me,{modelValue:ee(V).list,"onUpdate:modelValue":o[0]||(o[0]=b=>ee(V).list=b),onItemClick:s},null,8,["modelValue"])],38),ee(V).list.length?K("",!0):(m(),R("div",_t," 请从左则组件栏拖动组件到设计区域 "))],512),C("div",wt,[C("i",{class:"icon-menu icon",onClick:o[1]||(o[1]=b=>I("left"))}),C("div",xt,te(k.value),1),C("div",Ct,[C("div",St,[It,t(i,{modelValue:v.ruler,"onUpdate:modelValue":o[2]||(o[2]=b=>v.ruler=b),size:"small"},null,8,["modelValue"])]),C("div",$t,[Tt,t(n,{modelValue:v.scale,"onUpdate:modelValue":o[3]||(o[3]=b=>v.scale=b),marks:x.value,max:200,min:v.autoScale-30,"show-stops":"",size:"small",onChange:r},null,8,["modelValue","marks","min"])]),C("div",Vt,[t(f,{link:"",type:"primary",onClick:o[4]||(o[4]=b=>d("auto"))},{default:c(()=>[P("自适应 ")]),_:1}),t(f,{link:"",type:"primary",onClick:o[5]||(o[5]=b=>d("100"))},{default:c(()=>[P("100% ")]),_:1})])]),C("i",{class:"icon-menu icon",onClick:o[6]||(o[6]=b=>I("right"))})]),t(kt,{ref_key:"rightMenuEl",ref:B},null,512)],64)}}}),Dt=JSON.stringify({list:[{id:"rect",type:"tempRect",position:{width:200,height:200,display:!0}}],config:{width:"1920px",height:"1080px",background:"#000",style:"",primary:"#409eff",method:"get"}}),ye=Dt,Rt={class:"container-screen"},Ut={class:"main-box"},Et=le({__name:"index",setup(Z){const V=Ve(),g=Ae(),S=De(),k=ae();S.changeBreadcrumb([{label:"系统工具"},{label:"可视化大屏设计"}]),S.setCollapseMenu(!0);const v=p=>!k.getScreenConfig(p),l=H(!1),q=H(!1),B=H(),y=H(JSON.parse(ye));re("screenData",y);const w=p=>{switch(k.setControlAttr({}),p){case"del":y.value=JSON.parse(ye);break;case"eye":q.value=!0;break;case"json":d({type:"json",content:y.value,title:"可编辑修改或将已生成的脚本粘贴进来"});break;case"vue":B.value.openScreen(y.value);break;case"save":U();break}},_=pe({visible:!1,title:"",direction:"ltr",content:"",codeType:"",callback:""}),x=()=>{r()},I=p=>{try{let s;switch(_.codeType){case"json":s=Ue(p);break;case"css":s=p;break;default:s=fe(p)}switch(typeof _.callback=="function"&&_.callback(s),_.type){case"editCss":y.value.config.style=p,Ee("screenStyle",p,!0);break;case"json":y.value=fe(p);break}r()}catch(s){j.error(s.message||"未知原因")}},d=p=>{const{type:s="",direction:e,codeType:o,title:i,callback:n,content:f,tips:b}=p;_.direction=e||"ltr",_.type=s,_.codeType=o||"",_.title=i||We[s],_.visible=!0,_.callback=n;let D=o==="json"?Fe(f,!0):ve(f,!0);switch(s){case"editCss":D=y.value.config.style||"";break;case"beforeFetch":case"afterFetch":case"afterFetchScreen":f||(D=He(s,b));break}_.content=D},r=()=>{_.visible=!1,_.type="",_.title="",_.codeType="",_.callback="",_.content=""},U=()=>{const p={data:ve(y.value),name:"未命名可视化大屏",type:4};let s="designSave";const e=V.query.id;e&&(Object.assign(p,{id:e}),delete p.name,s="designEdit"),l.value=!0,ze(s,p).then(o=>{j({message:o.message||"保存成功！",type:"success"}),e||g.push({path:"/design/screen/list"}),l.value=!1}).catch(o=>{j.error(o.message||"保存异常"),l.value=!1})},E=()=>{l.value=!0,Be(V.query.id).then(p=>{l.value=!1,y.value=p.screenData}).catch(p=>{p!=null&&p.screenData&&(y.value=p.screenData),l.value=!1})};return ue(()=>{E()}),ke(()=>{}),(p,s)=>{const e=Re("loading");return ie((m(),R("div",Rt,[q.value?(m(),R("i",{key:0,class:"icon-close close-preview",onClick:s[0]||(s[0]=o=>q.value=!1)})):K("",!0),t(yt,{style:oe({width:v("left")?"":"0px"})},null,8,["style"]),C("div",Ut,[t(Pe,{onClick:w}),t(At,{preview:q.value},null,8,["preview"])]),t(at,{style:oe({width:v("right")?"":"0px"}),onOpenDrawer:d},null,8,["style"]),t(Ne,{modelValue:_.visible,"onUpdate:modelValue":s[1]||(s[1]=o=>_.visible=o),"code-type":_.codeType,content:_.content,direction:_.direction,title:_.title,onConfirm:I,onBeforeClose:x},null,8,["modelValue","code-type","content","direction","title"]),t(qe,{ref_key:"vueFileEl",ref:B},null,512)])),[[e,l.value]])}}});typeof he=="function"&&he(Et);export{Et as default};
