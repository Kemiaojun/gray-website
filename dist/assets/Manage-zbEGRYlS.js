import{u as v,l as k,t as i,m as w,i as L,_ as y}from"./index-D4-riLCF.js";import{a as B}from"./auth-GL6vZVgK.js";import{D as O}from"./DayNight-l7VPnQjX.js";import{e as C}from"./@vueuse-DVUPgnhb.js";import{d,ah as g,o as r,c as m,L as n,P as p,a as l,S as E,u as t,U as N,z as S,Q as b,R}from"./@vue-BV9Q_yhH.js";import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./element-plus-COxNbMku.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-Didlxlvp.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./vue-pdf-embed-BcRweBTn.js";const x={class:"gw-header-root"},D=["src"],G={class:"iconbl-circle"},P=d({__name:"GWResourceHeader",setup(f){let s=C();const e=v(),c=()=>e.userParams.WEB_LOGO_NAME?e.userParams.WEB_LOGO_NAME:w(),u=()=>e.userParams.WEB_LOGO_URL&&L(e.userParams.WEB_LOGO_URL)?e.userParams.WEB_LOGO_URL:"favicon.png",h=()=>{B(),i("/home")};return(V,o)=>{const _=g("bl-row");return r(),m("div",x,[n(_,{class:"head-row",width:"auto",height:"100%"},{default:p(()=>[l("div",{class:"gw-logo",onClick:o[0]||(o[0]=a=>t(i)("/home"))},[l("img",{src:u(),style:E(t(k)())},null,12,D)]),l("div",{class:"project-name",onClick:o[1]||(o[1]=a=>t(i)("/home"))},N(c()),1)]),_:1}),n(_,{class:"head-row",width:"auto",height:"100%"},{default:p(()=>[n(O,{size:60,modelValue:t(s),"onUpdate:modelValue":o[2]||(o[2]=a=>S(s)?s.value=a:s=a)},null,8,["modelValue"]),l("div",G,[t(e).auth&&t(e).auth.status==="已登录"?(r(),m("span",{key:0,onClick:h,class:"iconbl bl-logout-circle-line popper-target"})):(r(),m("span",{key:1,onClick:o[3]||(o[3]=a=>t(i)("/login")),class:"iconbl bl-login-circle-line popper-target"}))])]),_:1})])}}}),U={class:"flex-container"},W=d({__name:"Manage",setup(f){return(s,e)=>{const c=g("router-view");return r(),m("div",U,[n(P),n(c,null,{default:p(({Component:u})=>[(r(),b(R(u)))]),_:1})])}}}),ee=y(W,[["__scopeId","data-v-1f338a72"]]);export{ee as default};