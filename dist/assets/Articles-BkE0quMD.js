import{h as re,e as de,r as ue,m as pe,s as _e}from"./element-plus-COxNbMku.js";import{b as ve}from"./vue-router-DaOdIdNP.js";import{L as D,i as G,_ as Y,u as me,k as fe,n as he,o as ye,p as be,q as we,v as ge}from"./index-DDkzpx4-.js";import{b as ke,ax as Ee,r as d,d as X,ah as L,o as h,c as w,L as p,P as g,T as S,U as v,u as s,G as Te,a as t,S as C,V as N,M,a7 as q,n as Z,at as Se,au as xe,J,Q as Ce}from"./@vue-BV9Q_yhH.js";import{q as Ae,p as Le,z as Be,A as ze}from"./@element-plus-DgtNr1CL.js";/* empty css              */import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-DVUPgnhb.js";import"./dayjs-Didlxlvp.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-CWZPuNdE.js";import"./axios-Cm0UX6qg.js";import"./vue-pdf-embed-BcRweBTn.js";const Ie=(l,o)=>{let n=!1;ke(()=>{n||l()}),Ee(()=>{n&&o(),n=!0})},V="BLOSSOM-ARTICLE-FONT-SZIE",A=d(D.get(V)||.9),Re=()=>{A.value+=.1,D.set(V,A.value)},We=()=>{A.value-=.1,D.set(V,A.value)},Oe=()=>A.value,Q=()=>A.value+"rem",Pe=l=>{let o=l.querySelectorAll("h1, h2, h3, h4, h5, h6"),n=[];for(let m=0;m<o.length;m++){let f=o[m],a=1,i=f.innerText,k=f.id;switch(f.localName){case"h1":a=1;break;case"h2":a=2;break;case"h3":a=3;break;case"h4":a=4;break;case"h5":a=5;break;case"h6":a=6;break}let c={content:i,clazz:"toc-"+a,id:k};n.push(c)}return n},Ne=l=>{let o=document.getElementById(l);o==null||o.scrollIntoView(!0)},Me=l=>G(l.icon)&&(l.icon.startsWith("http")||l.icon.startsWith("https")),De=l=>G(l.icon),Ge=l=>{let o=[];return l.t.forEach(n=>{n.toLocaleLowerCase()==="subject"?o.unshift({content:"专题",bgColor:"#565656",icon:"bl-a-lowerrightpage-line"}):n.toLocaleLowerCase()==="toc"?o.push({content:"目录",bgColor:"#939393"}):o.push({content:n})}),o},Ve=(l,o,n,m,f)=>{if(m==="copyPreCode"){let a=document.getElementById(f);if(a){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(a.innerText);{let i=document.createElement("textarea");return i.value=a.innerText,i.style.position="absolute",i.style.opacity="0",i.style.left="-999999px",i.style.top="-999999px",document.body.appendChild(i),i.focus(),i.select(),new Promise((k,c)=>{document.execCommand("copy")?k():c(),i.remove()})}}}},Ke={class:"detail"},$e=X({__name:"ArticleSetting",setup(l){return(o,n)=>{const m=L("bl-tag"),f=re,a=L("bl-row");return h(),w("div",Ke,[p(a,null,{default:g(()=>[S(" 文章字体大小： "),p(m,{style:{"margin-right":"15px"}},{default:g(()=>[S(v(s(Oe)().toFixed(1)),1)]),_:1}),p(f,{size:"small",icon:s(Ae),onClick:n[0]||(n[0]=i=>s(Re)())},null,8,["icon"]),p(f,{size:"small",icon:s(Le),onClick:n[1]||(n[1]=i=>s(We)())},null,8,["icon"])]),_:1})])}}}),Fe=Y($e,[["__scopeId","data-v-77a7c8a9"]]),y=l=>(Se("data-v-2e8766b9"),l=l(),xe(),l),He={class:"articles-root"},Ue={class:"headmenu"},je=y(()=>t("div",{class:"iconbl bl-model-line"},null,-1)),qe=y(()=>t("div",{style:{"font-size":"0.8rem"}},"文章列表",-1)),Ze=y(()=>t("div",{style:{"font-size":"0.8rem"}},"目录",-1)),Je=y(()=>t("div",{class:"iconbl bl-list-ordered"},null,-1)),Qe={class:"main"},Ye={class:"doc-name"},Xe=["src"],et={key:1,class:"icon menu-icon","aria-hidden":"true"},tt=["xlink:href"],ot={key:0,class:"article-name"},st=["innerHTML"],lt={class:"viewer-toc"},nt={key:0,class:"doc-info"},at={class:"doc-name",style:{"font-size":"15px"}},it={class:"doc-subtitle"},ct=y(()=>t("span",{class:"iconbl bl-pen-line"},null,-1)),rt=y(()=>t("span",{class:"iconbl bl-read-line"},null,-1)),dt=y(()=>t("span",{class:"iconbl bl-like-line"},null,-1)),ut={class:"doc-subtitle"},pt=y(()=>t("span",{class:"iconbl bl-a-clock3-line"},null,-1)),_t={class:"doc-subtitle"},vt=y(()=>t("span",{class:"iconbl bl-a-clock3-line"},null,-1)),mt=y(()=>t("div",{class:"toc-title"},"目录",-1)),ft={class:"toc-content"},ht=["onClick"],yt=X({__name:"Articles",setup(l){const o=me();Ie(()=>{window.onHtmlEventDispatch=Ve,m(),window.addEventListener("resize",W),j()},()=>{m(),window.addEventListener("resize",W),j()}),Te(()=>{window.removeEventListener("resize",W)});const n=d(),m=()=>{let e=f.query.articleId;ee(()=>{Z(()=>{n.value.setCurrentKey(i.value)})}),fe(e)&&(i.value=e,F({ty:3,i:e}))},f=ve(),a=d(!0),i=d(""),k=d([]),c=d({id:0,pid:0,name:"",tags:[],sort:0,starStatus:0,openStatus:0,type:3,html:`<div style="color:#E3E3E3;width:100%;height:300px;display:flex;justify-content: center;
    align-items: center;font-size:25px;">请在左侧菜单选择文章</div>`}),K=d([]),$=d([]),B=d(),ee=e=>{a.value=!0,k.value=[],$.value=[];const u=r=>{k.value=r.data,k.value.forEach(O=>{$.value.push(O.i.toString())}),e&&e()};o.isLogin?he().then(r=>u(r)).finally(()=>a.value=!1):ye().then(r=>u(r)).finally(()=>a.value=!1)},F=async e=>{e.ty==3&&(await te(e.i),window.history.replaceState("","","#/articles?articleId="+e.i),Z(()=>{B.value.scrollTo({top:0}),oe(B.value)}))},te=async e=>{if(e==="-999"){c.value.html=`<div style="color:#C6C6C6;font-weight: 300;width:100%;height:300px;padding:150px 20px;font-size:25px;text-align:center">
      该博客所配置的 USER_ID 为<br/><span style="color:#e3a300; border-bottom: 5px solid #e3a300;border-radius:5px">${window.blconfig.SYS.USER_ID}</span>
      </div>`;return}const u=r=>{ge(r.data)||(c.value=r.data)};o.isLogin?await be({id:e,showToc:!1,showMarkdown:!1,showHtml:!0}).then(r=>u(r)):await we({id:e,showToc:!1,showMarkdown:!1,showHtml:!0}).then(r=>u(r))},oe=async e=>{K.value=Pe(e)},z=d(!1),se=()=>{z.value=!0},x=d({display:"none"}),I=d(!1),E=d({display:"none",opacity:0}),R=d(!1),T=d({display:"none",opacity:0}),H=e=>{I.value=e,e&&(x.value={display:"block"},E.value={display:"block",opacity:0},setTimeout(()=>{E.value={display:"block",opacity:1}},1)),e||(E.value={display:"block",opacity:0},setTimeout(()=>{E.value={display:"none",opacity:0}},300))},U=e=>{R.value=e,e&&(x.value={display:"block"},T.value={display:"block",opacity:0},setTimeout(()=>{T.value={display:"block",opacity:1}},1)),e||(T.value={display:"block",opacity:0},setTimeout(()=>{T.value={display:"none",opacity:0}},300))},j=()=>{let e=document.body.clientWidth;e>1100&&(E.value={display:"block",opacity:1}),e>1100&&(x.value={display:"none"},T.value={display:"block",opacity:1})},le=()=>{H(!1),U(!1),x.value={display:"none"}},W=()=>{let e=document.body.clientWidth;e<1100&&(I.value=!1,E.value={display:"none",opacity:0}),e>1100&&(x.value={display:"none"},E.value={display:"block",opacity:1}),e<1100&&(R.value=!1,T.value={display:"none",opacity:0}),e>1100&&(x.value={display:"none"},T.value={display:"block",opacity:1})};return(e,u)=>{const r=L("bl-row"),O=L("bl-tag"),ne=de,ae=ue,ie=pe,ce=_e;return h(),w(M,null,[t("div",He,[t("div",{class:"mask",style:C(x.value),onClick:le},null,4),t("div",Ue,[p(r,{onClick:u[0]||(u[0]=b=>H(!I.value))},{default:g(()=>[je,qe]),_:1}),p(r,{just:"flex-end",onClick:u[1]||(u[1]=b=>U(!R.value))},{default:g(()=>[Ze,Je]),_:1})]),t("div",Qe,[t("div",{class:"doc-tree-container",style:C(E.value)},[p(ne,{ref_key:"DocTreeRef",ref:n,class:"doc-tree",data:k.value,"highlight-current":!0,indent:14,icon:s(Be),"node-key":"i",onNodeClick:F},{default:g(({_node:b,data:_})=>[t("div",{class:"menu-item-wrapper",style:C({marginTop:_.p==="0"?"5px":"1px",marginBottom:_.p==="0"?"5px":"1px"})},[t("div",{class:J([_.t.includes("subject")&&s(o).userParams.WEB_BLOG_SUBJECT_TITLE==="1"?"subject-title":"doc-title"])},[t("div",Ye,[s(Me)(_)?(h(),w("img",{key:0,class:"menu-icon-img",src:_.icon},null,8,Xe)):s(De)(_)?(h(),w("svg",et,[t("use",{"xlink:href":"#"+_.icon},null,8,tt)])):N("",!0),t("div",{class:"name-wrapper",style:C({maxWidth:s(G)(_.icon)?"calc(100% - 25px)":"100%"})},v(_.n),5),(h(!0),w(M,null,q(s(Ge)(_),P=>(h(),Ce(O,{"bg-color":P.bgColor,icon:P.icon},{default:g(()=>[S(v(P.content),1)]),_:2},1032,["bg-color","icon"]))),256))])],2)],4)]),_:1},8,["data","icon"])],4),t("div",{class:"doc-content-container",ref_key:"PreviewRef",ref:B,style:C({fontSize:s(Q)()})},[s(o).userParams.WEB_BLOG_SHOW_ARTICLE_NAME==="1"?(h(),w("div",ot,v(c.value.name),1)):N("",!0),p(ae,{font:{color:s(o).userParams.WEB_BLOG_WATERMARK_COLOR,fontSize:s(o).userParams.WEB_BLOG_WATERMARK_FONTSIZE,textBaseline:"hanging"},content:c.value.id>0&&s(o).userParams.WEB_BLOG_WATERMARK_ENABLED==="1"?s(o).userParams.WEB_BLOG_WATERMARK_CONTENT:"",gap:[s(o).userParams.WEB_BLOG_WATERMARK_GAP,s(o).userParams.WEB_BLOG_WATERMARK_GAP]},{default:g(()=>[t("div",{class:"bl-preview",style:C({fontSize:s(Q)()}),innerHTML:c.value.html},null,12,st)]),_:1},8,["font","content","gap"])],4),t("div",{class:"toc-container",style:C(T.value)},[t("div",lt,[c.value.id!=0?(h(),w("div",nt,[t("div",at,v(c.value.name),1),t("div",it,[ct,S(" "+v(c.value.words)+" 字 | ",1),rt,S(" "+v(c.value.uv)+" | ",1),dt,S(" "+v(c.value.likes),1)]),t("div",ut,[pt,S(" 公开 "+v(c.value.openTime),1)]),t("div",_t,[vt,S(" 修改 "+v(c.value.syncTime),1)])])):N("",!0),mt,t("div",ft,[(h(!0),w(M,null,q(K.value,b=>(h(),w("div",{key:b.id,class:J(["toc-item","link",b.clazz]),onClick:_=>s(Ne)(b.id)},v(b.content),11,ht))),128))])])],4),t("div",{class:"module-workbench",onClick:se},[p(ie,{color:"#7b7b7ba9"},{default:g(()=>[p(s(ze))]),_:1})])])]),p(ce,{modelValue:z.value,"onUpdate:modelValue":u[2]||(u[2]=b=>z.value=b),class:"center-drawer",direction:"btt","close-on-click-modal":!0,"with-header":!0,"destroy-on-close":!0,size:"70px"},{default:g(()=>[p(Fe,{style:{"background-color":"var(--gw-bg-color)"}})]),_:1},8,["modelValue"])],64)}}}),Wt=Y(yt,[["__scopeId","data-v-2e8766b9"]]);export{Wt as default};
