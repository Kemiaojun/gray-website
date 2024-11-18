import{t as we,s as Se,f as Ve,E as h,c as xe,u as Ne,v as De,j as Pe,w as Ae,m as Ge,h as Be,x as Me,y as Re}from"./element-plus-D_LIGSL8.js";import{d as Oe,b as Ue,r as i,h as D,c as E,a,L as n,P as s,Z as f,_ as w,M as P,a7 as U,ad as Q,U as c,ah as X,at as We,au as ze,o as u,T as r,Q as k,V as T,S as W,u as z}from"./@vue-BV9Q_yhH.js";import{B as Le}from"./@element-plus-DgtNr1CL.js";import{h as b,j as S,_ as je}from"./index-D2i2L_dS.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";const $e=d=>b.get("/todo/list",{params:d}),qe=d=>b.get("/todo/task/list",{params:d}),Fe=d=>b.post("/todo/task/add",d),Qe=d=>b.post("/todo/task/upd",d),Xe=d=>b.post("/todo/task/waiting",d),Ze=d=>b.post("/todo/task/processing",d),He=d=>b.post("/todo/task/completed",d),Je=d=>b.post("/todo/task/del",d),p=d=>(We("data-v-9d52cfdf"),d=d(),ze(),d),Ke={class:"todo-root"},Ye=p(()=>a("div",null,null,-1)),et={class:"day"},tt={class:"phaseds"},ot={style:{"padding-left":"5px"}},lt=p(()=>a("span",{class:"selection"},null,-1)),at={class:"option"},st=p(()=>a("label",{for:"WAITING"},[a("span",null,"待 办")],-1)),nt={class:"option"},dt=p(()=>a("label",{for:"PROCESSING"},[a("span",null,"进行中")],-1)),ut={class:"option"},it=p(()=>a("label",{for:"COMPLETED"},[a("span",null,"完 成")],-1)),ct=["onClick"],rt={class:"title"},pt={class:"title"},vt={class:"content"},mt=p(()=>a("span",{class:"iconbl bl-a-addline-line"},null,-1)),_t=[mt],ft={class:"detail"},kt=p(()=>a("div",{class:"label"},"截止：",-1)),gt=["onClick"],Ct={class:"process"},ht=p(()=>a("i",{class:"iconbl bl-delete-line"},null,-1)),Tt=p(()=>a("i",{class:"iconbl bl-a-texteditorsave-line"},null,-1)),bt=p(()=>a("span",{class:"iconbl bl-a-boxsubtract-line"},null,-1)),yt=p(()=>a("span",{class:"iconbl bl-a-boxaddition-line"},null,-1)),It=p(()=>a("span",{class:"iconbl bl-a-boxchoice-line"},null,-1)),Et={class:"status"},wt=Oe({__name:"TodoIndex",setup(d){Ue(()=>{H()});const de=()=>{Array.from(document.querySelectorAll(".segmented-control .option input")).forEach((o,t)=>{let m=o;if(m.checked){let R=document.querySelector(".segmented-control .selection");R&&(R.style.transform="translateX("+m.offsetWidth*t+"px)")}})},ue=i(["rgba(68, 173, 56, 0.7)","rgba(186, 196, 44, 0.7)","rgba(235, 205, 72, 0.7)","rgba(232, 144, 144, 0.7)","rgba(112, 145, 188, 0.7)","rgba(157, 129, 216, 0.7)","rgba(0, 0, 0, 0.65)"]),L=i(new Date),j=i(),$=o=>{j.value&&j.value.selectDate(o)},y=i(10),V=i(new Map),Z=i([]),H=()=>{$e().then(o=>{V.value.clear();for(let t in o.data.todoDays){let m=o.data.todoDays[t];V.value.set(t,{todoId:m.todoId,todoName:m.todoName,todoStatus:1,todoType:10,today:!1,taskCount:m.taskCount>0?m.taskCount:0,updTodoName:!1})}Z.value=o.data.taskPhased})},J=o=>!V.value||!V.value.get(o)?0:V.value.get(o).taskCount,K=()=>({id:"",todoId:"",todoName:"",todoType:10,taskName:"",taskContent:"",taskTags:[],deadLine:"",creTime:"",startTime:"",endTime:"",process:0,color:"",taskStatus:"WAITING",updTaskName:!1,updTaskContent:!1}),Y=i(""),l=i(K()),A=i([]),G=i([]),B=i([]),ee=D(()=>A.value.length),te=D(()=>G.value.filter(o=>o.todoType!=99).length),oe=D(()=>B.value.filter(o=>o.todoType!=99).length),g=i("WAITING"),ie=D(()=>{if(g.value==="WAITING")return A.value;if(g.value==="PROCESSING")return G.value.filter(o=>o.todoType!=99);if(g.value==="COMPLETED")return B.value.filter(o=>o.todoType!=99)}),ce=D(()=>{if(l.value.taskStatus==="WAITING")return"未开始";if(l.value.taskStatus==="PROCESSING")return"进行中";if(l.value.taskStatus==="COMPLETED")return"已完成"}),le=o=>{Y.value=o,qe({todoId:o}).then(t=>{A.value=t.data.waiting,G.value=t.data.processing,B.value=t.data.completed})},x=o=>{A.value=o.waiting,G.value=o.processing,B.value=o.completed},re=()=>{Xe({id:l.value.id,todoId:l.value.todoId}).then(o=>{h("已移至待办"),x(o.data),C.value=!1})},pe=()=>{Ze({id:l.value.id,todoId:l.value.todoId}).then(o=>{h("已移至进行中"),x(o.data),C.value=!1})},ve=()=>{He({id:l.value.id,todoId:l.value.todoId}).then(o=>{h("已移至完成"),x(o.data),C.value=!1})},me=()=>{if(S(l.value.todoId)){h("请先选择要添加任务的日期或阶段性事项");return}if(S(l.value.taskName)){h("请填写 Todo 标题");return}Fe(l.value).then(o=>{h("新增成功"),C.value=!1,x(o.data),H()})},_e=()=>{Qe(l.value).then(o=>{h("修改成功"),C.value=!1})},fe=()=>{xe.confirm("是否确定删除该任务","删除任务",{confirmButtonText:"我要删除",cancelButtonText:"取消"}).then(()=>{Je({id:l.value.id,todoId:l.value.todoId}).then(o=>{h("删除成功"),x(o.data),C.value=!1})})},I=i("upd"),C=i(!1),ae=(o,t)=>{C.value=!0,I.value=o,o==="upd"?l.value=t:(l.value=K(),l.value.todoType=y.value,l.value.todoId=Y.value)},M=i(!1),N=i(""),ke=()=>{M.value=!0},ge=o=>{l.value.taskTags.splice(l.value.taskTags.indexOf(o),1)},Ce=()=>{if(S(N.value)){h("请填写标签内容");return}l.value.taskTags.push(N.value),M.value=!1,N.value=""};return(o,t)=>{const m=Ne,R=De,v=Pe,q=Ae,_=X("bl-row"),se=X("bl-tag"),ne=X("bl-col"),he=we,Te=Ge,O=Be,be=Me,ye=Re,Ie=Se,Ee=Ve;return u(),E(P,null,[a("div",Ke,[n(_,{just:"space-between",class:"workbench",height:"45px"},{default:s(()=>[n(R,{modelValue:y.value,"onUpdate:modelValue":t[0]||(t[0]=e=>y.value=e),size:"small"},{default:s(()=>[n(m,{label:10},{default:s(()=>[r("每日")]),_:1}),n(m,{label:20},{default:s(()=>[r("阶段性")]),_:1})]),_:1},8,["modelValue"]),f(a("div",{class:"month"},c(L.value.getMonth()+1)+"月",513),[[w,y.value===10]]),f(n(q,{size:"small"},{default:s(()=>[n(v,{onClick:t[1]||(t[1]=e=>$("prev-month"))},{default:s(()=>[r("上月")]),_:1}),n(v,{onClick:t[2]||(t[2]=e=>$("today"))},{default:s(()=>[r("今日")]),_:1}),n(v,{onClick:t[3]||(t[3]=e=>$("next-month"))},{default:s(()=>[r("下月")]),_:1})]),_:1},512),[[w,y.value===10]])]),_:1}),f(n(he,{modelValue:L.value,"onUpdate:modelValue":t[4]||(t[4]=e=>L.value=e),class:"task-day-calendar",ref_key:"CalendarRef",ref:j},{header:s(({date:e})=>[Ye]),"date-cell":s(({data:e})=>[n(ne,{just:"flex-start",class:"cell-wrapper",onClick:F=>le(e.day)},{default:s(()=>[a("div",et,c(e.day.split("-")[2]),1),J(e.day)>0?(u(),k(_,{key:0,just:"flex-end",class:"count"},{default:s(()=>[n(se,{size:14},{default:s(()=>[r(c(J(e.day)),1)]),_:2},1024)]),_:2},1024)):T("",!0)]),_:2},1032,["onClick"])]),_:1},8,["modelValue"]),[[w,y.value===10]]),f(a("div",tt,[(u(!0),E(P,null,U(Z.value,e=>(u(),k(_,{class:"phased",just:"space-between",width:"90%",onClick:F=>le(e.todoId)},{default:s(()=>[a("span",ot,c(e.todoName),1),e.taskCount>0?(u(),k(se,{key:0},{default:s(()=>[r(c(e.taskCount),1)]),_:2},1024)):T("",!0)]),_:2},1032,["onClick"]))),256))],512),[[w,y.value===20]]),a("div",{class:"segmented-control",onChange:de},[lt,a("div",at,[f(a("input",{type:"radio",id:"WAITING",name:"sample",value:"WAITING","onUpdate:modelValue":t[5]||(t[5]=e=>g.value=e),checked:""},null,512),[[Q,g.value]]),st,f(a("span",{class:"count"},c(ee.value),513),[[w,ee.value>0]])]),a("div",nt,[f(a("input",{type:"radio",id:"PROCESSING",name:"sample",value:"PROCESSING","onUpdate:modelValue":t[6]||(t[6]=e=>g.value=e)},null,512),[[Q,g.value]]),dt,f(a("span",{class:"count"},c(te.value),513),[[w,te.value>0]])]),a("div",ut,[f(a("input",{type:"radio",id:"COMPLETED",name:"sample",value:"COMPLETED","onUpdate:modelValue":t[7]||(t[7]=e=>g.value=e)},null,512),[[Q,g.value]]),it,f(a("span",{class:"count"},c(oe.value),513),[[w,oe.value>0]])])],32),n(ne,{class:"tasks",just:"flex-start",align:"center"},{default:s(()=>[(u(!0),E(P,null,U(ie.value,e=>(u(),E("div",{class:"task",onClick:F=>ae("upd",e)},[n(_,{class:"process",height:"3px",width:Math.max(e.process,0)+"%",style:W({backgroundColor:`${z(S)(e.color)?"#E5E5E5":e.color}`,borderTopRightRadius:e.process>=100?"4px":""})},null,8,["width","style"]),n(_,{style:{padding:"0 10px"},just:"space-between"},{default:s(()=>[a("div",rt,c(e.taskName),1),a("div",pt,c(e.deadLine),1)]),_:2},1024),a("div",vt,c(e.taskContent),1)],8,ct))),256))]),_:1}),a("div",{class:"module-workbench",onClick:t[8]||(t[8]=e=>ae("add"))},_t)]),n(Ie,{modelValue:C.value,"onUpdate:modelValue":t[13]||(t[13]=e=>C.value=e),class:"center-drawer",direction:"btt","with-header":!0,size:"400px"},{default:s(()=>[a("div",ft,[n(O,{class:"task-name",size:"small",style:{width:"calc(100% - 30px)"},modelValue:l.value.taskName,"onUpdate:modelValue":t[9]||(t[9]=e=>l.value.taskName=e),placeholder:"Todo 标题"},{prefix:s(()=>[n(Te,{size:"15"},{default:s(()=>[n(z(Le))]),_:1})]),_:1},8,["modelValue"]),n(O,{size:"small",type:"textarea",placeholder:"Todo 内容",modelValue:l.value.taskContent,"onUpdate:modelValue":t[10]||(t[10]=e=>l.value.taskContent=e),resize:"none",rows:4},null,8,["modelValue"]),n(_,{class:"times"},{default:s(()=>[kt,n(O,{size:"small",style:{width:"calc(100% - 50px)"},modelValue:l.value.deadLine,"onUpdate:modelValue":t[11]||(t[11]=e=>l.value.deadLine=e),placeholder:"..."},null,8,["modelValue"])]),_:1}),n(_,{class:"colors"},{default:s(()=>[a("div",{class:"label",style:W({color:l.value.color})},"颜色：",4),(u(!0),E(P,null,U(ue.value,e=>(u(),E("div",{class:"color",key:e,style:W({backgroundColor:e}),onClick:()=>{l.value.color=e}},null,12,gt))),128))]),_:1}),n(_,{class:"tags"},{default:s(()=>[n(v,{onClick:ke,size:"small"},{default:s(()=>[r(" + 标签 ")]),_:1}),(u(!0),E(P,null,U(l.value.taskTags,e=>(u(),k(be,{key:e,"disable-transitions":!1,color:z(S)(l.value.color)?"#474747":l.value.color,onClose:F=>ge(e),closable:""},{default:s(()=>[r(c(e),1)]),_:2},1032,["color","onClose"]))),128))]),_:1}),n(_,null,{default:s(()=>[n(ye,{modelValue:l.value.process,"onUpdate:modelValue":t[12]||(t[12]=e=>l.value.process=e),"show-tooltip":!1,size:"small",style:W({"--el-slider-main-bg-color":z(S)(l.value.color)?"#474747":l.value.color})},null,8,["modelValue","style"]),a("div",Ct,c(l.value.process)+"%",1)]),_:1}),n(_,{class:"btns",just:"space-between"},{default:s(()=>[n(q,null,{default:s(()=>[I.value==="upd"?(u(),k(v,{key:0,color:"#474747",onClick:fe},{default:s(()=>[ht]),_:1})):T("",!0),I.value==="upd"?(u(),k(v,{key:1,color:"#474747",onClick:_e},{default:s(()=>[Tt]),_:1})):T("",!0)]),_:1}),I.value==="add"?(u(),k(v,{key:0,color:"#474747",style:{width:"100%"},onClick:me},{default:s(()=>[r("保 存")]),_:1})):T("",!0),n(q,null,{default:s(()=>[I.value==="upd"&&l.value.taskStatus!=="WAITING"?(u(),k(v,{key:0,color:"#E2EBD0",onClick:re},{default:s(()=>[bt,r("待 办 ")]),_:1})):T("",!0),I.value==="upd"&&l.value.taskStatus!=="PROCESSING"?(u(),k(v,{key:1,color:"#E2EBD0",onClick:pe},{default:s(()=>[yt,r("开 始 ")]),_:1})):T("",!0),I.value==="upd"&&l.value.taskStatus!=="COMPLETED"?(u(),k(v,{key:2,color:"#E2EBD0",onClick:ve},{default:s(()=>[It,r("完 成 ")]),_:1})):T("",!0)]),_:1})]),_:1}),a("div",Et,c(ce.value),1)])]),_:1},8,["modelValue"]),n(Ee,{modelValue:M.value,"onUpdate:modelValue":t[15]||(t[15]=e=>M.value=e),"append-to-body":!0,"destroy-on-close":!0,"close-on-click-modal":!1,title:"添加标签"},{default:s(()=>[n(O,{modelValue:N.value,"onUpdate:modelValue":t[14]||(t[14]=e=>N.value=e),placeholder:"标签内容..."},null,8,["modelValue"]),n(v,{style:{width:"100%","margin-top":"10px"},color:"#474747",onClick:Ce},{default:s(()=>[r("添加")]),_:1})]),_:1},8,["modelValue"])],64)}}}),Lt=je(wt,[["__scopeId","data-v-9d52cfdf"]]);export{Lt as default};
