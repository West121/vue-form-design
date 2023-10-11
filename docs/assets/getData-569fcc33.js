import{d as K,l as F,G as me,p as Z,o as u,c as g,t as Q,ag as ae,h as D,L as he,g as C,z as S,ae as ne,n as A,$ as ee,a6 as we,H as ke,Q as _e,r as se,s as re,v as le,R as ie,F as ue,a as ce,f as _,i as pe,w as de,m as Te,b as U,S as J,a1 as De,e as Se,x as te,q as $e,D as xe,X as Me}from"./index-792ff79a.js";import{_ as Ie}from"./echartsInt.vue_vue_type_script_setup_true_lang-089a3049.js";const Ne=K({__name:"nowTime",props:{config:{}},setup(o){const n=o,a=F(),e=F(),s=()=>{const r=n.config.dateTime;!r||r&&r.indexOf("{i}")!==-1?a.value=setInterval(()=>{e.value=ae(new Date,r)},1e3):e.value=ae(new Date,r)};return me(()=>n.config.dateTime,()=>{clearInterval(a.value),s()},{immediate:!0}),Z(()=>{}),(r,d)=>(u(),g("div",null,Q(e.value),1))}}),ze=K({__name:"marquee",props:{width:{},height:{},speed:{default:30},direction:{default:"top"},step:{default:1}},setup(o){const n=o,a=D(()=>({width:n.width,height:n.height,overflow:"hidden"})),e=he({left:0,top:0,duration:0}),s=D(()=>["left","right"].includes(n.direction)),r=D(()=>{const c=n.step>1?`transform ${e.duration}s`:"";return s.value?{display:"flex",width:parseInt(n.width)*2+"px",transform:`translateX(${e.left}px)`,transition:c}:{transform:`translateY(${e.top}px)`,transition:c}}),d=F(),m=F(),b=()=>{const c=d.value,q=m.value,O=()=>{const R=q.offsetWidth,X=q.offsetHeight;switch(n.direction){case"left":e.left+R<=0?(e.left=0,e.duration=0):(e.left=e.left-n.step,e.duration=.3);break;case"right":e.left>=0?(e.left=-R,e.duration=0):(e.left=e.left+n.step,e.duration=.3);break;case"bottom":e.top>=0?(e.top=-X,e.duration=0):(e.top=e.top+n.step,e.duration=.3);break;default:e.top+X<=0?(e.top=0,e.duration=0):(e.top=e.top-n.step,e.duration=.3)}};let I=setInterval(O,n.speed);c.onmouseenter=function(){clearInterval(I)},c.onmouseleave=function(){I=setInterval(O,n.speed)}};return Z(()=>{b()}),(c,q)=>(u(),g("div",{ref_key:"container",ref:d,class:A([`marquess-${c.direction}`,"marquee-container"]),style:S(a.value)},[C("div",{style:S(r.value),class:"inner-container"},[C("div",{ref_key:"container1",ref:m,style:S({display:s.value?"flex":""})},[ne(c.$slots,"default")],4),C("div",{style:S({display:s.value?"flex":""})},[ne(c.$slots,"default")],4)],4)],6))}}),Be=(o,n,a,e)=>(console.log(o,n,a,e),a),ge=Be,ve=o=>{try{return/^-?\d+(\.\d+)?$/.test(o.toString())}catch{return!1}},T=o=>{if(Number.isFinite(o))return Math.round(o);if(!o)return o;const n=o.match(/^(-?\d+(\.\d+)?)(px|em|rem|%|vh|vw)?$/);return n?Math.round(n[1]):0},B=o=>o===0||o==="0"?0:ve(o)?Math.round(o)+"px":o,G=o=>ve(o)?!0:o&&typeof o=="string"?o.indexOf("px")!==-1:!1,fe=(o,n)=>{const a=o.bottom||o.bottom===0,e=o.right||o.right===0,s=!G(o.left),r=!G(o.top),d=!G(o.width),m=!G(o.height),b=a||e||r||d||m||s||r;return n&&b&&ee.error("仅支持使用了left和top的px单位允许操作!"),b},Ye=o=>{const{type:n,groupId:a,config:e={},position:s={}}=o;return!(n==="group"||n==="tempRect"||a||e.lock||s.display)},Fe=["onMousedown"],qe=["onMousedown"],Ce={class:"position"},Oe=["innerHTML"],Re=["src"],Xe={key:0},Le=K({__name:"screen",props:{data:{},type:{default:1},current:{type:Boolean},scale:{default:100}},emits:["contextmenu","changeEvent"],setup(o,{emit:n}){const a=o,e=he({left:0,top:0,width:0,height:0,moveFlag:!1}),s=D(()=>a.data.config||{}),r=D(()=>Object.assign({},{width:"100%",height:"100%"},s.value.style||{})),d=D(()=>{let t={};return s.value.src&&(t={backgroundImage:`url(${s.value.src})`}),Object.assign(s.value.style||{},t)}),m=D(()=>{if(!a.data.position)return{};const{left:t,top:l,height:i,width:v,zIndex:y,display:f,right:w,bottom:p}=a.data.position,$=B(w),h=B(p);return{left:B(e.left)||(w?"":B(t)),right:$,bottom:h,top:B(e.top)||(p?"":B(l)),width:B(e.width||v),height:B(e.height||i),zIndex:y||1,display:f?"none":""}}),b=t=>{s.value.lock||(t.preventDefault(),t.stopPropagation())},c=(t,l)=>{if(a.data.type==="group")return;let i=!0;const v=t.pageX,y=t.pageY,{width:f,height:w,left:p,top:$}=a.data.position;if(fe(a.data.position,!0))return;const h=T(f),k=T(w),P=T(p),Y=T($);document.onmousemove=oe=>{if(!i)return;const x=oe.pageX-v,M=oe.pageY-y;let N=h,z=k,L=P,V=Y;switch(l){case 1:N=h-x,z=k-M,V=Y+M,L=P+x;break;case 4:N=h-x,L=P+x;break;case 6:N=h-x,L=P+x,z=k+M;break;case 2:z=k-M,V=Y+M;break;case 7:z=k+M;break;case 3:N=h+x,z=k-M,V=Y+M;break;case 5:N=h+x;break;case 8:N=h+x,z=k+M;break}N<50||z<30||n("changeEvent",{type:"resize",width:N,height:z,left:L,top:V})},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null,i=!1},t.stopPropagation()},q=t=>{if(a.data.type==="group")return;const{left:l,top:i}=a.data.position;e.moveFlag=!0;const v=t.pageX,y=t.pageY,f=T(l),w=T(i);let p=0,$=0;fe(a.data.position,!0)?(console.log("不能拖动"),e.moveFlag=!1):(e.left=f,e.top=w),document.onmousemove=h=>{if(!e.moveFlag)return;const k=a.scale/100;p=T((h.pageX-v)/k),$=T((h.pageY-y)/k),e.left=T(p+f),e.top=T($+w),n("changeEvent",{type:"moveTip",left:e.left,top:e.top})},document.onmouseup=function(){e.moveFlag&&(n("changeEvent",{type:"move",moveX:p,moveY:$,left:e.left,top:e.top}),e.left=0,e.top=0,e.moveFlag=!1,document.onmousemove=null)}},O=D(()=>{const t=H.value||a.data.option;return s.value.carousel?[...t,...t]:t}),I=F(),R=()=>{if(!s.value.carousel||!I.value||a.data.type!=="table")return;const t=I.value.querySelector(".el-scrollbar__wrap");function l(){t.scrollTop+=1,t.clientHeight+t.scrollTop===t.scrollHeight&&(t.scrollTop=t.scrollTop-t.scrollHeight/2)}let i=setInterval(l,s.value.speed||30);I.value.onmouseenter=function(){clearInterval(i)},I.value.onmouseleave=function(){i=setInterval(l,s.value.speed||30)}},X=me(()=>a.data.option,()=>{$e(()=>{R()})},{immediate:!0}),W=D(()=>{switch(a.data.type){case"text":case"sText":return s.value.text;case"line":case"bar":case"pie":case"echarts":case"table":return a.data.option}return""}),j=we("globalScreen",{}),E=F(),H=D(()=>{const{getGlobal:t,afterResponse:l}=a.data.events||{},i=s.value.optionsType;return typeof t=="function"&&i===2?t(W.value,j.value):i===1&&E.value&&l?typeof l=="function"?l(E.value,W.value,j.value||{}):ge(l,E.value,W.value,j.value||{}):!1}),ye=()=>{if(["image","background","border","clock"].includes(a.data.type))return;const{optionsType:t,requestUrl:l,method:i="post"}=s.value,{beforeRequest:v=""}=a.data.events||{};if(t===1&&l){let y={};v&&typeof v=="function"&&(y=v({})),te(l,y,{method:i}).then(f=>{E.value=f.data}).catch(f=>{console.log(f)})}},be=t=>{n("contextmenu",{x:t.pageX,y:t.pageY,type:a.data.type}),t.preventDefault()};return ke(()=>{X()}),Z(()=>{ye()}),_e(()=>{}),(t,l)=>{var y,f,w;const i=se("el-table-column"),v=se("el-table");return u(),g("div",{class:A([{["group-"+t.data.type]:!0,[(y=t.data.config)==null?void 0:y.class]:(f=t.data.config)==null?void 0:f.class},"group"]),style:S(m.value),onMousedown:b},[t.type===0&&!((w=t.data.config)!=null&&w.lock)?re((u(),g("div",{key:0,class:"resize-box",onContextmenu:be,onMousedown:ie(q,["left","stop"])},[(u(),g(ue,null,ce(8,p=>re(C("span",{key:p,class:A(`rs${p}`),onMousedown:ie($=>c($,p),["stop"])},null,42,qe),[[le,t.data.type!=="tempRect"]])),64)),C("div",Ce,Q(JSON.stringify(a.data.position)),1)],40,Fe)),[[le,t.current]]):_("",!0),["text","border"].includes(t.data.type)?(u(),g("div",{key:1,style:S(r.value),innerHTML:H.value||s.value.text},null,12,Oe)):_("",!0),t.data.type==="sText"?(u(),g("div",{key:2,style:S(r.value)},[pe(ze,{direction:s.value.direction,height:`${t.data.position.height}px`,speed:s.value.speed,step:s.value.step,width:`${t.data.position.width}px`},{default:de(()=>[Te(Q(H.value||s.value.text),1)]),_:1},8,["direction","height","speed","step","width"])],4)):_("",!0),t.data.type==="image"?(u(),g("img",{key:3,src:s.value.src,style:S(r.value),alt:"请选择或上传图片",class:"default-img"},null,12,Re)):_("",!0),t.data.type==="background"?(u(),g("div",{key:4,style:S(d.value),class:"default-bg"},[s.value.src?_("",!0):(u(),g("span",Xe,"请选择或上传图片"))],4)):_("",!0),t.data.type==="table"?(u(),g("div",{key:5,ref_key:"tableEl",ref:I},[pe(v,J(s.value.props,{data:O.value,height:`${a.data.position.height}`,style:{width:"100%"}}),{default:de(()=>[(u(!0),g(ue,null,ce(t.data.columns,p=>(u(),U(i,J(p,{key:p.prop}),null,16))),128))]),_:1},16,["data","height"])],512)):_("",!0),t.data.type==="clock"?(u(),U(Ne,{key:6,config:s.value,style:S(r.value)},null,8,["config","style"])):_("",!0),["component"].includes(t.data.type)?(u(),U(Se(s.value.component),De(J({key:7},s.value)),null,16)):_("",!0),["line","bar","pie","echarts"].includes(t.data.type)?(u(),U(Ie,{key:8,height:t.data.position.height,option:H.value||t.data.option,width:t.data.position.width||"100%"},null,8,["height","option","width"])):_("",!0)],38)}}}),Ve=o=>new Promise((n,a)=>{if(!o)return a();te("designById",{id:o}).then(e=>{var d;const s=e.data,r=xe(s.data);(d=r.config)!=null&&d.style&&Me("screenStyle",r.config.style,!0),Ee(r.config).then(m=>{n({screenData:r,globalData:m})}).catch(()=>{a()})}).catch(e=>{ee.error(e.message||"加载异常"),a()})}),Ee=({requestUrl:o,afterResponse:n,beforeRequest:a,method:e})=>new Promise((s,r)=>{o||s({});let d={};typeof a=="function"&&(d=a({})),te(o,d,{method:e}).then(m=>{const b=m.data;let c;n&&(typeof n=="function"?c=n(b):c=ge(n,b)),s(c||b)}).catch(m=>{ee.error(m.message||"加载异常"),r()})});export{Le as _,B as a,Ye as b,fe as c,Ve as g,T as r};
