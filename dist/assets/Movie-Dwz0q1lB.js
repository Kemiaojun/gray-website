import{k as ae,E as ne,q as se,d as ie,c as re,f as ue,g as ce,h as de,i as me,b as pe}from"./element-plus-COxNbMku.js";import{_ as ve}from"./GWPreviewVideo-Gw8pf1wR.js";import{_ as fe}from"./GWSearchCondition-Doq-3Ty2.js";import{_ as A,b as G,f as _e}from"./index-C_SALV-5.js";import{u as ge}from"./vue-router-DaOdIdNP.js";import{d as $}from"./request_website-B8mz1EX0.js";import{c as p,D as he,o as d,d as q,I as ye,r as s,h as xe,a as r,u as f,S as we,M,a7 as I,Q as U,P as u,U as R,L as a,ab as ke,H as be,w as Ve,b as Ce,V as Ne,T as W,at as ze,au as Fe}from"./@vue-BV9Q_yhH.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Didlxlvp.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-pdf-embed-BcRweBTn.js";const Se=c=>{const i={headers:{"Content-Type":"multipart/form-data"}};return $.post("/movie/cover",c,i)},Me=()=>$.get("/movie/refresh"),Ue=()=>$.get("/movie/categories"),$e=c=>$.post("/movie/page",{...c}),Ee=c=>$.post("/movie/m3u8",{...c}),Ie={},Re={class:"gw-flex-container"};function Be(c,i){return d(),p("div",Re,[he(c.$slots,"flex-items",{},void 0,!0)])}const Te=A(Ie,[["render",Be],["__scopeId","data-v-4688a806"]]),Ae={class:"gw-flex-item"},De={class:"gw-flex-card"},Pe={class:"img-card"},Ge=["src"],We=["fileName"],qe={class:"gw-flex-info"},Le={class:"movie-title"},He=q({__name:"GWFlexMovieCard",props:{movie:{},play:{type:Function},click:{type:Function}},setup(c){const i=c,{movie:n}=ye(i),k=s(n.value.previewUrl),b=s(n.value.title),_=s(!1);let y=xe(()=>{if(n.value.size){if(n.value.series=="是")return" [共"+n.value.size+"集]";{let t=n.value.size/1024;if(t<1024)return" ["+t.toFixed(2)+"KB]";if(t=t/1024,t<1024)return" ["+t.toFixed(2)+"MB]";if(t=t/1024,t<1024)return" ["+t.toFixed(2)+"GB]"}}});function V(){if(i!=null&&i.click){const t=ke(n.value);i.click(t)}}function C(){_.value=!_.value}function N(t){const v=t.target;b.value=n.value.title+"_"+v.innerHTML,k.value=n.value.previewUrl+"/"+v.getAttribute("fileName"),z()}function z(){i!=null&&i.play&&i.play({name:b.value,url:G()+k.value})}return(t,v)=>{const m=ae;return d(),p("div",Ae,[r("div",De,[r("div",Pe,[r("img",{onclick:V,src:f(G)()+f(n).coverUrl,onerror:"this.onerror=null;this.src='/favicon.png';",alt:"Sorry, something went wrong"},null,8,Ge),r("div",{class:"overlay",style:we({display:_.value?"flex":"none"})},[(d(!0),p(M,null,I(f(n).files,(F,x)=>(d(),U(m,{class:"item",effect:"dark",content:F.name,placement:"top",key:x},{default:u(()=>[r("div",{class:"overlay-item",onclick:N,fileName:F.value},R(F.name),9,We)]),_:2},1032,["content"]))),128))],4)]),r("div",qe,[a(m,{class:"item",effect:"dark",content:f(n).title+f(y),placement:"bottom"},{default:u(()=>[r("h3",Le,R(f(n).title)+R(f(y)),1)]),_:1},8,["content"]),f(n).series=="是"?(d(),p("h3",{key:0,class:"movie-play",onclick:C}," 剧集 ")):(d(),p("h3",{key:1,class:"movie-play",onclick:z},"Play"))])])])}}}),Ke=A(He,[["__scopeId","data-v-4303426e"]]),L=c=>(ze("data-v-24b09172"),c=c(),Fe(),c),Oe={class:"movie-gallery"},Qe={class:"flex-item"},je={class:"flex-item"},Je=L(()=>r("span",{style:{"font-size":"small",color:"var(--gw-font-color)"}},"影片数量: ",-1)),Xe={style:{"font-size":"small",color:"var(--gw-font-color)","font-style":"italic","font-weight":"bold","text-decoration":"underline"}},Ye={class:"flex-item",style:{"margin-left":"20px"}},Ze=L(()=>r("span",{width:"30px"},null,-1)),el={style:{width:"100%"}},ll=q({__name:"Movie",setup(c){ge();const i=s(0),n=s(1),k=s(10),b=s(),_=s(!1),y=s(),V=s(),C=s(),N=s(),z=s(),t=s(),v=s(),m=s({name:"",folderName:"",url:""}),F=be({name:[{required:!0,message:"请输入电影名称",trigger:"blur"}],folderName:[{required:!0,message:"请选择电影所属分类",trigger:"blur"}],url:[{required:!0,message:"请输入m3u8 url地址",trigger:"blur"}]}),x=s(!1),B=()=>{x.value=!1},H=()=>{x.value=!0},K=async o=>{o&&await o.validate(async(l,g)=>{l?(Ee(m.value),B()):console.log("error submit!",g)})},O=o=>{y.value=o.title,V.value=o.previewUrl,C.value=o.id,D.value.click()},Q=o=>{y.value=o.name,V.value=o.url,_.value=!0},j=o=>{n.value=o,T()},T=async()=>{await $e({pageNo:n.value,pageSize:k.value,folderName:t.value,name:v.value}).then(o=>{b.value=o.data.result,i.value=o.data.total})},D=s(),J=async o=>{if(C.value){const l=o.target;if(l.files&&l.files[0]){const g=new FileReader;g.onload=h=>{var S;(S=h.target)==null||S.result},g.readAsDataURL(l.files[0]);let w=new FormData;w.append("file",l.files[0]),w.append("id",C.value+""),await Se(w).then(h=>{h.data&&ne({type:"info",message:"电影海报已更新，请刷新页面查看"})}).finally(()=>{})}}},X=()=>{_.value=!1};Ve(()=>[t.value,v.value],()=>{T()},{deep:!0,immediate:!0});const Y=()=>{Me()};return Ce(async()=>{T(),await Ue().then(o=>{N.value=o.data})}),(o,l)=>{const g=pe,w=re,h=ue,S=_e,Z=fe,ee=ve,le=se,E=ce,P=de,te=me,oe=ie;return d(),p(M,null,[r("div",Oe,[a(Z,null,{"left-items":u(()=>[r("div",Qe,[a(w,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),clearable:"",placeholder:"分类",style:{width:"150px"}},{default:u(()=>[(d(!0),p(M,null,I(N.value,e=>(d(),U(g,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),a(h,{style:{"margin-left":"10px"},modelValue:v.value,"onUpdate:modelValue":l[1]||(l[1]=e=>v.value=e),placeholder:"电影名称"},null,8,["modelValue"])])]),"right-items":u(()=>[r("div",je,[Je,r("span",Xe,R(i.value),1),r("div",Ye,[a(S,{size:20,"icon-class":"m3u8",class:"svg-icon",onclick:H}),Ze,a(S,{size:20,"icon-class":"refresh",class:"svg-icon",onclick:Y})])])]),_:1}),a(Te,{style:{"min-height":"calc(100% - 100px)"}},{"flex-items":u(()=>[(d(!0),p(M,null,I(b.value,(e,tl)=>(d(),U(Ke,{click:O,play:Q,movie:e},null,8,["movie"]))),256))]),_:1}),r("input",{ref_key:"fileselectRef",ref:D,style:{display:"none"},type:"file",accept:"image/*",onChange:J},null,544),_.value?(d(),U(ee,{key:0,url:V.value,name:y.value,"on-close":X},null,8,["url","name"])):Ne("",!0),r("div",el,[a(le,{style:{"flex-direction":"row-reverse"},background:"",layout:"prev, pager, next",total:i.value,"pager-count":5,"page-size":k.value,"current-page":n.value,onCurrentChange:j},null,8,["total","page-size","current-page"])])]),a(oe,{style:{padding:"30px","max-height":"500px",overflow:"scroll"},title:"m3u8解析",modelValue:x.value,"onUpdate:modelValue":l[6]||(l[6]=e=>x.value=e),width:"500px",onClose:B},{default:u(()=>[a(te,{ref_key:"m3u8FormRef",ref:z,model:m.value,"label-width":"auto",rules:F},{default:u(()=>[a(E,{label:"电影名称：",prop:"name"},{default:u(()=>[a(h,{modelValue:m.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>m.value.name=e),placeholder:"请输入电影名称"},null,8,["modelValue"])]),_:1}),a(E,{label:"所属分类：",prop:"folderName"},{default:u(()=>[a(w,{modelValue:m.value.folderName,"onUpdate:modelValue":l[3]||(l[3]=e=>m.value.folderName=e),filterable:"",placeholder:"请选择所属分类",style:{width:"200px"}},{default:u(()=>[(d(!0),p(M,null,I(N.value,e=>(d(),U(g,{key:e,label:e,value:e},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(E,{label:"解析地址：",prop:"url"},{default:u(()=>[a(h,{size:"small",type:"textarea",placeholder:"解析地址",modelValue:m.value.url,"onUpdate:modelValue":l[4]||(l[4]=e=>m.value.url=e),resize:"none",rows:4},null,8,["modelValue"])]),_:1}),a(E,{style:{"flex-direction":"column"}},{default:u(()=>[a(P,{onClick:B},{default:u(()=>[W("取消")]),_:1}),a(P,{type:"primary",onClick:l[5]||(l[5]=e=>K(z.value))},{default:u(()=>[W("确定")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])],64)}}}),xl=A(ll,[["__scopeId","data-v-24b09172"]]);export{xl as default};
