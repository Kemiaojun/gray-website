import{b as y,f as U,_ as k}from"./index-CWm0XY_p.js";import{d as b,r as i,G as F,b as w,o as n,c as m,a as d,S as c,Q as z}from"./@vue-BV9Q_yhH.js";const B=["src"],I=b({__name:"ImageUpload",props:{imageUrl:{},size:{}},emits:["selectFile"],setup(g,{emit:v}){const l=g,s=i(null),a=i(null),e=i(),r=i(),_=v,f=p=>{const t=p.target;if(t.files&&t.files[0]){s.value=t.files[0];const o=new FileReader;o.onload=x=>{var u;a.value=(u=x.target)==null?void 0:u.result},o.readAsDataURL(s.value),_("selectFile",s.value)}},h=()=>{r.value.click()};return F(()=>{s.value=null}),w(()=>{l.imageUrl&&(a.value=l.imageUrl.startsWith("http")?l.imageUrl:y()+l.imageUrl),e.value=l.size,console.log(e)}),(p,t)=>{const o=U;return n(),m("div",{class:"image-upload",style:c({height:e.value?e.value+"px":"200px"}),onClick:h},[d("input",{ref_key:"fileselectRef",ref:r,style:{display:"none"},type:"file",accept:"image/*",onChange:f},null,544),d("div",{class:"image-preview",style:c({border:a.value?"none":"1px solid var(--gw-bg-active-color)",width:e.value?e.value+"px":"200px"})},[a.value?(n(),m("img",{key:0,class:"img",style:c({height:e.value?e.value+"px":"200px"}),src:a.value,alt:"预览图片"},null,12,B)):(n(),z(o,{key:1,size:50,"icon-class":"add"}))],4)],4)}}}),S=k(I,[["__scopeId","data-v-e8d2b196"]]);export{S as I};
