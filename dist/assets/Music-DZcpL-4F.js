import{E as Q,b as Z,l as be,n as ye,o as ke,p as Ce,h as $e}from"./element-plus-ADHjtvoW.js";import{_ as B,a as D,g as J}from"./index-iWPkJKS9.js";import{b as we}from"./vue-router-Dqk3Pi-3.js";import{m as oe}from"./movie-BQ_4hMBr.js";import{m as re,a as ue,p as ie,b as xe,c as ze}from"./music-TE7wXr8M.js";import{d as G,o as u,c as h,a as e,J as x,I as Me,u as T,U as b,ab as Te,h as j,r as v,b as ee,M as q,a7 as H,Q as I,P as f,L as i,as as te,at as se,w as X,G as Se}from"./@vue-D7aQumW7.js";import{e as E}from"./mitt-CJohXFwE.js";import"./lodash-es-BDpUAi6D.js";import"./async-validator-DKvM95Vc.js";import"./@vueuse-B6XrmGC7.js";import"./dayjs-Dc0JWrkO.js";import"./@element-plus-ZqzyRZ21.js";import"./@ctrl-D_sRHO8g.js";import"./@popperjs-D9SI2xQl.js";import"./pinia-BDK7V1n_.js";import"./axios-Cm0UX6qg.js";import"./vue-pdf-embed-Cq-z5WX6.js";import"./request_website-6kSdq8YO.js";import"./mitt-DJ65BbbF.js";const Ne=["src"],Ie=G({__name:"Avatar",props:{size:{type:String,default:"medium"},src:{type:String,default:"/favicon.png"}},setup(p){return(t,V)=>(u(),h("div",{class:x(["avatar",p.size])},[e("img",{src:p.src,alt:""},null,8,Ne)],2))}}),ce=B(Ie,[["__scopeId","data-v-7956860e"]]),Ve={class:"card_image"},Ae=["src"],Le={class:"card_title title-white"},Pe=G({__name:"GWTitleCard",props:{image:{},title:{},cardData:{},clickT:{type:Function}},setup(p){const t=p,{image:V,title:S}=Me(t);function z(){if(t!=null&&t.clickT){const y=t.cardData?Te(t.cardData):{};t==null||t.clickT(y)}}return(y,r)=>(u(),h("div",{class:"card",onClick:z},[e("div",Ve,[e("img",{src:T(V)},null,8,Ae),e("div",Le,[e("p",null,b(T(S)),1)])])]))}}),Ee=B(Pe,[["__scopeId","data-v-bef4cf5f"]]),K=p=>(te("data-v-53311fc5"),p=p(),se(),p),je={class:"grid"},Be=K(()=>e("th",{class:"pc-show"},"Size",-1)),Ge=K(()=>e("th",{class:"pc-show"},"Time",-1)),Ue=K(()=>e("th",{class:"pc-show"},"Ext",-1)),We=K(()=>e("th",null,"Operation",-1)),Fe={class:"pc-show"},Re=["onClick"],Oe={class:"pc-show"},Je={class:"pc-show"},Qe={class:"pc-show"},qe={class:"ext-div"},He={style:{display:"flex"}},Ke={class:"controls"},Xe=["disabled"],Ye=["disabled"],Ze=G({__name:"GWSortableTable",props:{currentMusic:{},tableData:{},clickT:{type:Function},pageChange:{type:Function}},setup(p){const t=p;let V=j(()=>t.currentMusic?t.currentMusic.id:-1);function S(l){t!=null&&t.clickT&&(t==null||t.clickT([l]))}async function z(l,a){await re(a.id).then(c=>{c.data&&(m.value[l].favorite=m.value[l].favorite=="是"?"否":"是",Q({type:"info",message:"歌曲添加到我喜欢"}))}).finally(()=>{})}async function y(l,a){await ue(a.id).then(c=>{c.data&&(m.value[l].playlist=m.value[l].playlist=="是"?"否":"是",Q({type:"info",message:"歌曲添加到播放列表"}))}).finally(()=>{})}const r=v("trackNumber"),$=v("asc"),_=v(0),M=v(5),N=l=>{l===r.value?$.value=$.value==="asc"?"desc":"asc":$.value="asc",r.value=l},w=function(l){return l===-1&&_.value>0||l===1&&(_.value+1)*M.value<t.tableData.length},L=()=>{w(-1)&&_.value--,t.pageChange&&t.pageChange(m.value)},P=()=>{w(1)&&_.value++,t.pageChange&&t.pageChange(m.value)};let m=j(()=>t.tableData.sort((l,a)=>{let c=$.value==="asc"?1:-1;return l[r.value]<a[r.value]?-1*c:l[r.value]>a[r.value]?1*c:0}).filter((l,a)=>{let c=_.value*M.value,g=(_.value+1)*M.value;return a>=c&&a<g}));return ee(()=>{setTimeout(()=>{t.pageChange&&t.pageChange(m.value)},1e3)}),(l,a)=>{const c=D,g=Z;return u(),h("div",je,[e("table",null,[e("thead",null,[e("tr",null,[e("th",{class:x(["pc-show",{sorted:r.value==="trackNumber"}]),onClick:a[0]||(a[0]=n=>N("trackNumber"))}," # ",2),e("th",{class:x({sorted:r.value==="title"}),onClick:a[1]||(a[1]=n=>N("title"))}," Title ",2),Be,Ge,Ue,We])]),e("tbody",null,[(u(!0),h(q,null,H(T(m),(n,k)=>(u(),h("tr",null,[e("td",Fe,b(n.trackNumber),1),e("td",{onClick:C=>S(n)},[e("div",{class:x(n.id==T(V)?"music-title active":"music-title")},b(n.title),3)],8,Re),e("td",Oe,b(n.prettySize),1),e("td",Je,b(n.duration>0?n.duration:"未知"),1),e("td",Qe,[e("div",qe,b(n.ext),1)]),e("td",He,[n.favorite=="否"?(u(),I(g,{key:0,class:"item",effect:"dark",content:"添加到我喜欢",placement:"right"},{default:f(()=>[i(c,{size:20,"icon-class":"mine_heart",onClick:C=>z(k,n)},null,8,["onClick"])]),_:2},1024)):(u(),I(g,{key:1,class:"item",effect:"dark",content:"从我喜欢移除",placement:"right"},{default:f(()=>[i(c,{size:20,"icon-class":"heart-break",onClick:C=>z(k,n)},null,8,["onClick"])]),_:2},1024)),n.playlist=="否"?(u(),I(g,{key:2,class:"item",effect:"dark",content:"添加到播放列表",placement:"right"},{default:f(()=>[i(c,{style:{"margin-left":"10px"},size:20,"icon-class":"list",onClick:C=>y(k,n)},null,8,["onClick"])]),_:2},1024)):(u(),I(g,{key:3,class:"item",effect:"dark",content:"从播放列表移除",placement:"right"},{default:f(()=>[i(c,{style:{"margin-left":"10px"},size:20,"icon-class":"delete",onClick:C=>y(k,n)},null,8,["onClick"])]),_:2},1024))])]))),256))])]),e("div",Ke,[e("button",{class:"btn btn-sm",disabled:!w(-1),onClick:L}," ← ",8,Xe),e("button",{class:"btn btn-sm",disabled:!w(1),onClick:P}," → ",8,Ye)])])}}}),De=B(Ze,[["__scopeId","data-v-53311fc5"]]),le=p=>(te("data-v-0185e992"),p=p(),se(),p),et={class:"grid"},tt=le(()=>e("th",{class:"pc-show"},"Size",-1)),st=le(()=>e("th",{class:"pc-show"},"Ext",-1)),lt=le(()=>e("th",null,"Operation",-1)),nt={class:"pc-show"},at=["onClick"],ot={class:"pc-show"},it={class:"pc-show"},ct={class:"pc-show"},rt={class:"ext-div"},ut={style:{display:"flex"}},dt={class:"controls"},vt=["disabled"],pt=["disabled"],mt=G({__name:"GWMusicSortableTable",props:{currentMusic:{},tableData:{},clickT:{type:Function},pageChange:{type:Function}},setup(p){const t=p;let V=j(()=>t.currentMusic?t.currentMusic.id:-1);function S(l){t!=null&&t.clickT&&(t==null||t.clickT([l]))}async function z(l,a){await re(a.id).then(c=>{c.data&&(m.value[l].favorite=m.value[l].favorite=="是"?"否":"是",Q({type:"info",message:"歌曲添加到我喜欢"}))}).finally(()=>{})}async function y(l,a){await ue(a.id).then(c=>{c.data&&(m.value[l].playlist=m.value[l].playlist=="是"?"否":"是",Q({type:"info",message:"歌曲添加到播放列表"}))}).finally(()=>{})}const r=v("trackNumber"),$=v("asc"),_=v(0),M=v(5),N=l=>{l===r.value?$.value=$.value==="asc"?"desc":"asc":$.value="asc",r.value=l},w=function(l){return l===-1&&_.value>0||l===1&&(_.value+1)*M.value<t.tableData.length},L=()=>{w(-1)&&_.value--,t.pageChange&&t.pageChange(m.value)},P=()=>{w(1)&&_.value++,t.pageChange&&t.pageChange(m.value)};let m=j(()=>t.tableData.sort((l,a)=>{let c=$.value==="asc"?1:-1;return l[r.value]<a[r.value]?-1*c:l[r.value]>a[r.value]?1*c:0}).filter((l,a)=>{let c=_.value*M.value,g=(_.value+1)*M.value;return a>=c&&a<g}));return ee(()=>{setTimeout(()=>{t.pageChange&&t.pageChange(m.value)},1e3)}),(l,a)=>{const c=D,g=Z;return u(),h("div",et,[e("table",null,[e("thead",null,[e("tr",null,[e("th",{class:x(["pc-show",r.value==="trackNumber"?"sorted":""]),onClick:a[0]||(a[0]=n=>N("trackNumber"))}," # ",2),e("th",{class:x({sorted:r.value==="title"}),onClick:a[1]||(a[1]=n=>N("title"))}," Title ",2),e("th",{class:x([r.value==="artist"?"sorted":""]),onClick:a[2]||(a[2]=n=>N("artist"))}," Artist ",2),e("th",{class:x(["pc-show",r.value==="album"?"sorted":""]),onClick:a[3]||(a[3]=n=>N("album"))}," Album ",2),tt,st,lt])]),e("tbody",null,[(u(!0),h(q,null,H(T(m),(n,k)=>(u(),h("tr",null,[e("td",nt,b(n.trackNumber),1),e("td",{onClick:C=>S(n)},[e("div",{class:x(n.id==T(V)?"music-title active":"music-title")},b(n.title),3)],8,at),e("td",null,b(n.artist),1),e("td",ot,b(n.album),1),e("td",it,b(n.prettySize),1),e("td",ct,[e("div",rt,b(n.ext),1)]),e("td",ut,[n.favorite=="否"?(u(),I(g,{key:0,class:"item",effect:"dark",content:"添加到我喜欢",placement:"right"},{default:f(()=>[i(c,{size:20,"icon-class":"mine_heart",onClick:C=>z(k,n)},null,8,["onClick"])]),_:2},1024)):(u(),I(g,{key:1,class:"item",effect:"dark",content:"从我喜欢移除",placement:"right"},{default:f(()=>[i(c,{size:20,"icon-class":"heart-break",onClick:C=>z(k,n)},null,8,["onClick"])]),_:2},1024)),n.playlist=="否"?(u(),I(g,{key:2,class:"item",effect:"dark",content:"添加到播放列表",placement:"right"},{default:f(()=>[i(c,{style:{"margin-left":"10px"},size:20,"icon-class":"list",onClick:C=>y(k,n)},null,8,["onClick"])]),_:2},1024)):(u(),I(g,{key:3,class:"item",effect:"dark",content:"从播放列表移除",placement:"right"},{default:f(()=>[i(c,{style:{"margin-left":"10px"},size:20,"icon-class":"delete",onClick:C=>y(k,n)},null,8,["onClick"])]),_:2},1024))])]))),256))])]),e("div",dt,[e("button",{class:"btn btn-sm",disabled:!w(-1),onClick:L}," ← ",8,vt),e("button",{class:"btn btn-sm",disabled:!w(1),onClick:P}," → ",8,pt)])])}}}),Y=B(mt,[["__scopeId","data-v-0185e992"]]),ne=p=>(te("data-v-d80d189f"),p=p(),se(),p),ft={class:"music-root-container"},_t=ne(()=>e("div",{style:{"margin-left":"10px"}},null,-1)),gt={key:0,class:"tab-body"},ht={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},bt={class:"row-card",style:{"border-bottom":"1px solid var(--gw-bg-font-01)"}},yt={key:1,class:"tab-body"},kt={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},Ct={class:"row-card",style:{"border-bottom":"1px solid var(--gw-bg-font-01)"}},$t={key:2,class:"tab-body"},wt={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},xt={class:"row-card",style:{"border-bottom":"1px solid var(--gw-bg-font-01)"}},zt={key:3,class:"tab-body"},Mt={key:0},Tt={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},St=["onClick"],Nt={class:"name"},It={key:1,class:"row-card"},Vt={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},At={class:"pc-show",style:{"flex-grow":"1","font-weight":"bold","font-style":"italic"}},Lt=ne(()=>e("span",{style:{"font-size":"2rem"},class:"iconfont icon-back-filled"},null,-1)),Pt=[Lt],Et={class:"row-card"},jt={key:2},Bt={class:"row-card",style:{"justify-content":"space-between","align-items":"center","border-bottom":"1px solid var(--gw-bg-font-01)"}},Gt=["src"],Ut={class:"pc-show",style:{"flex-grow":"1","font-weight":"bold","font-style":"italic"}},Wt=ne(()=>e("span",{style:{"font-size":"2rem"},class:"iconfont icon-back-filled"},null,-1)),Ft=[Wt],Rt={class:"row-card",style:{"border-bottom":"1px solid var(--gw-bg-font-01)"}},Ot=G({__name:"Music",setup(p){we();const t=v("1"),V=function(s,o){t.value=s,s=="1"?r.value=1:s=="2"?S():s=="3"?S({favorite:1}):s=="4"&&S({playlist:1})};async function S(s){await ie({pageNo:1,pageSize:500,name:s==null?void 0:s.musicName,favorite:s==null?void 0:s.favorite,playlist:s==null?void 0:s.playlist}).then(o=>{n.value=o.data.result})}const z=function(s){S({musicName:s})},y=v(),r=v(1),$=v(),_=v(),M=v(""),N=v(""),w=v(),L=v(),P=v(),m=v([]),l=v([]);v([]);const a=v([]),c=v([]),g=v([]),n=v([]);X(()=>w.value,s=>{z(s)}),X(()=>L.value,s=>{z(s)}),X(()=>P.value,s=>{z(s)});const k=()=>{E.emit("previousMusic")},C=()=>{E.emit("nextMusic")},de=s=>{E.emit("setMusic",s)},ve=()=>{E.emit("playMusic")},A=s=>{E.emit("playSelectedMusic",s),de(0),ve()},U=function(s){g.value=s},pe=async s=>{$.value=s,r.value=2,await oe({type:4,folderPath:s.value}).then(o=>{a.value=o.data})},me=async s=>{r.value=3,_.value=s,await xe({folderPath:s.value}).then(o=>{l.value=o.data})},fe=s=>{ze({folderPath:s.value})};let _e=j(()=>m.value.filter(s=>s.name.toLowerCase().includes(M.value.toLowerCase())));return ee(async()=>{await oe({type:3}).then(s=>{m.value=s.data}),await ie({pageNo:1,pageSize:5,musicName:N.value,playlist:1}).then(s=>{c.value=s.data.result}),E.on("musicChanged",s=>{y.value=s})}),Se(()=>{E.off("musicChanged")}),(s,o)=>{const W=D,F=Z,R=ye,ge=ke,he=Ce,O=$e,ae=be;return u(),h("div",ft,[i(ae,{class:"layout-container-demo"},{default:f(()=>[i(he,null,{default:f(()=>[i(ge,{"default-active":t.value,onSelect:V},{default:f(()=>[i(R,{index:"1",class:x(t.value==="1"?"selectTab":"")},{default:f(()=>[i(F,{class:"item",effect:"dark",content:"歌手专辑",placement:"right"},{default:f(()=>[i(W,{size:22,"icon-class":"musician"})]),_:1}),_t]),_:1},8,["class"]),i(R,{index:"2",class:x(t.value==="2"?"selectTab":"")},{default:f(()=>[i(F,{class:"item",effect:"dark",content:"全部歌曲",placement:"right"},{default:f(()=>[i(W,{size:22,"icon-class":"music"})]),_:1})]),_:1},8,["class"]),i(R,{index:"3",class:x(t.value==="3"?"selectTab":"")},{default:f(()=>[i(F,{class:"item",effect:"dark",content:"我喜欢的",placement:"right"},{default:f(()=>[i(W,{size:22,"icon-class":"favorite"})]),_:1})]),_:1},8,["class"]),i(R,{index:"4",class:x(t.value==="4"?"selectTab":"")},{default:f(()=>[i(F,{class:"item",effect:"dark",content:"播放列表",placement:"right"},{default:f(()=>[i(W,{size:22,"icon-class":"music-list"})]),_:1})]),_:1},8,["class"])]),_:1},8,["default-active"])]),_:1}),i(ae,{class:"right-container"},{default:f(()=>[t.value==="4"?(u(),h("div",gt,[e("div",ht,[i(O,{modelValue:P.value,"onUpdate:modelValue":o[0]||(o[0]=d=>P.value=d),placeholder:"歌曲名称"},null,8,["modelValue"])]),e("div",bt,[e("span",{style:{"font-size":"2rem",cursor:"pointer",transform:"rotate(180deg)"},onClick:k,class:"iconfont icon-next"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[1]||(o[1]=d=>A(g.value)),class:"iconfont icon-play"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[2]||(o[2]=d=>C()),class:"iconfont icon-next"})]),i(Y,{"table-data":c.value,"current-music":y.value,"click-t":A,"page-change":U},null,8,["table-data","current-music"])])):t.value==="3"?(u(),h("div",yt,[e("div",kt,[i(O,{modelValue:L.value,"onUpdate:modelValue":o[3]||(o[3]=d=>L.value=d),placeholder:"歌曲名称"},null,8,["modelValue"])]),e("div",Ct,[e("span",{style:{"font-size":"2rem",cursor:"pointer",transform:"rotate(180deg)"},onClick:k,class:"iconfont icon-next"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[4]||(o[4]=d=>A(g.value)),class:"iconfont icon-play"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[5]||(o[5]=d=>C()),class:"iconfont icon-next"})]),i(Y,{"table-data":n.value,"current-music":y.value,"click-t":A,"page-change":U},null,8,["table-data","current-music"])])):t.value==="2"?(u(),h("div",$t,[e("div",wt,[i(O,{modelValue:w.value,"onUpdate:modelValue":o[6]||(o[6]=d=>w.value=d),placeholder:"歌曲名称"},null,8,["modelValue"])]),e("div",xt,[e("span",{style:{"font-size":"2rem",cursor:"pointer",transform:"rotate(180deg)"},onClick:k,class:"iconfont icon-next"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[7]||(o[7]=d=>A(g.value)),class:"iconfont icon-play"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[8]||(o[8]=d=>C()),class:"iconfont icon-next"})]),i(Y,{"table-data":n.value,"current-music":y.value,"click-t":A,"page-change":U},null,8,["table-data","current-music"])])):(u(),h("div",zt,[r.value==1?(u(),h("div",Mt,[e("div",Tt,[i(O,{modelValue:M.value,"onUpdate:modelValue":o[9]||(o[9]=d=>M.value=d),placeholder:"歌手名字"},null,8,["modelValue"])]),(u(!0),h(q,null,H(T(_e),d=>(u(),h("div",{class:"col-card",onClick:Jt=>pe(d)},[i(ce,{size:"xlarge",src:T(J)()+"thumbnail/music/"+d.name+".png"},null,8,["src"]),e("div",Nt,b(d.name),1)],8,St))),256))])):r.value==2?(u(),h("div",It,[e("div",Vt,[i(ce,{size:"xlarge",src:T(J)()+"thumbnail/music/"+$.value.name+".png"},null,8,["src"]),e("div",At,b($.value.name),1),e("div",{style:{"background-color":"var(--gw-bg-active)",padding:"5px","border-radius":"5px"},onClick:o[10]||(o[10]=d=>r.value=1)},Pt)]),e("div",Et,[(u(!0),h(q,null,H(a.value,d=>(u(),I(Ee,{image:T(J)()+"preview/"+d.value+"/"+d.name+".jpg","card-data":d,title:d.name,"click-t":me},null,8,["image","card-data","title"]))),256))])])):(u(),h("div",jt,[e("div",Bt,[e("img",{style:{width:"100px",height:"100px","border-radius":"10px"},src:T(J)()+"preview/"+_.value.value+"/"+_.value.name+".jpg"},null,8,Gt),e("div",Ut,b(_.value.name),1),e("div",{style:{"background-color":"var(--gw-bg-active)",padding:"5px","border-radius":"5px"},onClick:o[11]||(o[11]=d=>r.value=2)},Ft)]),e("div",Rt,[e("span",{style:{"font-size":"2rem",cursor:"pointer",transform:"rotate(180deg)"},onClick:k,class:"iconfont icon-next"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[12]||(o[12]=d=>A(g.value)),class:"iconfont icon-play"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:C,class:"iconfont icon-next"}),e("span",{style:{"font-size":"2rem",cursor:"pointer"},onClick:o[13]||(o[13]=d=>fe(_.value)),class:"iconfont icon-refresh"})]),i(De,{"current-music":y.value,"table-data":l.value,"page-change":U,"click-t":A},null,8,["current-music","table-data"])]))]))]),_:1})]),_:1})])}}}),ds=B(Ot,[["__scopeId","data-v-d80d189f"]]);export{ds as default};
