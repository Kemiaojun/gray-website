import{u as x,i as v,g as H,a as C,_ as g,b,r as p,t as E}from"./index-BYviu5sG.js";import{d as w,r as i,b as B,o as t,c as _,a as h,u as A,V as d,U as T,w as P,Q as u,L as G,P as W,ah as L,R as M,av as O}from"./@vue-BV9Q_yhH.js";import{_ as S}from"./GWHeader.vue_vue_type_style_index_0_lang-CobySeRF.js";import{r as U}from"./music-DLG9DIKj.js";import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./element-plus-COxNbMku.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Didlxlvp.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./vue-pdf-embed-BcRweBTn.js";import"./auth-DjzoOP1t.js";import"./DayNight-D4xFeuAM.js";import"./request_website-BSVpIL4y.js";const F={class:"graython-footer-root"},V={class:"foot-row"},$={class:"custom-info"},D=["innerHTML"],K=w({__name:"IndexFooter",setup(I){const r=x();i(),B(()=>{});const s=m=>{window.open(m)},n=()=>r.userParams.WEB_GONG_WANG_AN_BEI?r.userParams.WEB_GONG_WANG_AN_BEI:H(),c=()=>r.userParams.WEB_IPC_BEI_AN_HAO?r.userParams.WEB_IPC_BEI_AN_HAO:C();return(m,l)=>(t(),_("div",F,[h("div",V,[h("div",$,[A(v)(n())?(t(),_("div",{key:0,innerHTML:n()},null,8,D)):d("",!0),A(v)(c())?(t(),_("div",{key:1,style:{cursor:"pointer"},onClick:l[0]||(l[0]=f=>s("https://beian.miit.gov.cn/"))},T(c()),1)):d("",!0)])])]))}}),Q=g(K,[["__scopeId","data-v-bb3ef862"]]),R={class:"flex-container"},j=w({__name:"Index",setup(I){const r=i([{icon:"home",name:"Home",title:"首页"},{icon:"blog",name:"Articles",title:"博文"},{icon:"web",name:"Links",title:"导航"},{icon:"image",name:"Resource",title:"资源"},{icon:"studio",name:"Movie",title:"影院"},{icon:"music3",name:"Music",title:"音乐"}]),s=i("Home"),n=i(["Home"]),c=i("Home");B(async()=>{const e=window._PlayerCore;await U(5).then(o=>{o.data&&e.AppendSongList(o.data.map(a=>({id:a.id,name:a.title,src:b()+a.previewUrl,img:a.artistThumbnail?b()+a.artistThumbnail:""})))})}),P(()=>p.currentRoute.value,e=>{e.name&&(c.value=e.name,s.value=e.name.toString()),e.meta.keepAlive&&n.value.indexOf(e.name)===-1&&n.value.push(e.name)},{immediate:!0});const m=["Login"],l=()=>{const e=p.currentRoute.value;return!(e!=null&&e.name&&m.find(o=>o===e.name))},f=["Home"],N=()=>{const e=p.currentRoute.value;return(e==null?void 0:e.name)&&f.find(o=>o===e.name)},y=e=>{s.value=e,E(e)};return(e,o)=>{const a=L("router-view");return t(),_("div",R,[l()?(t(),u(S,{key:0,tabs:r.value,selectedTab:s.value,"onUpdate:selectedTab":y},null,8,["tabs","selectedTab"])):d("",!0),G(a,null,{default:W(({Component:k})=>[(t(),u(O,{include:[n.value]},[(t(),u(M(k)))],1032,["include"]))]),_:1}),N()?(t(),u(Q,{key:1})):d("",!0)])}}}),de=g(j,[["__scopeId","data-v-f65c41ef"]]);export{de as default};