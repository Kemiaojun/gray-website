import{_ as c}from"./index-CizMaJaH.js";import{o as d,c as r,aw as l,d as m,b as v,G as p,a as t,L as g,at as _,au as h}from"./@vue-BV9Q_yhH.js";import{e as i}from"./mitt-CJohXFwE.js";import"./element-plus-D_LIGSL8.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-DgtNr1CL.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";/* empty css                             */import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-router-DaOdIdNP.js";import"./vue-pdf-embed-BcRweBTn.js";import"./mitt-DJ65BbbF.js";const u={},f={class:"header"},w=l('<div data-v-4e4c8542><svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" data-v-4e4c8542><defs data-v-4e4c8542><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" data-v-4e4c8542></path></defs><g class="parallax" data-v-4e4c8542><use xlink:href="#gentle-wave" x="48" y="0" fill="var(--gw-bg-active-07)" data-v-4e4c8542></use><use xlink:href="#gentle-wave" x="48" y="3" fill="var(--gw-bg-active-05)" data-v-4e4c8542></use><use xlink:href="#gentle-wave" x="48" y="5" fill="var(--gw-bg-active-03)" data-v-4e4c8542></use><use xlink:href="#gentle-wave" x="48" y="7" fill="var(--gw-bg-active)" data-v-4e4c8542></use></g></svg></div>',1),x=[w];function b(e,a){return d(),r("div",f,x)}const y=c(u,[["render",b],["__scopeId","data-v-4e4c8542"]]),n=e=>(_("data-v-a177b168"),e=e(),h(),e),I={class:"gray-home-root"},k={class:"banner-div"},N=n(()=>t("div",{class:"round-div-1"},null,-1)),B=n(()=>t("div",{class:"round-div-2"},null,-1)),C=n(()=>t("div",{class:"pic-div"},[t("img",{id:"bannerImg",src:"",style:{"z-index":"888"},alt:"banner image"})],-1)),E="/light.png",S="/dark.png",$=m({__name:"Home",setup(e){const a=async s=>{console.log("主题又变了");let o=document.getElementById("bannerImg");o instanceof HTMLImageElement&&(o.src=s?S:E)};return v(()=>{a(document.documentElement.classList.contains("dark")),i.on("dayNightChanged",s=>{a(s)})}),p(()=>{i.off("dayNightChanged",a)}),(s,o)=>(d(),r("div",I,[t("div",k,[N,B,C,g(y)])]))}}),O=c($,[["__scopeId","data-v-a177b168"]]);export{O as default};