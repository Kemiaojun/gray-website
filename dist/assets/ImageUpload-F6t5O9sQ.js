import{b as U,f as b,_ as F}from"./index-DPUKSHa3.js";import{d as I,I as w,r as n,G as B,b as R,o as i,c as g,a as f,S as c,u as t,Q as z}from"./@vue-BV9Q_yhH.js";const C=["src"],S=I({__name:"ImageUpload",props:{imageUrl:{},size:{}},emits:["selectFile"],setup(v,{emit:_}){const r=v,{size:s}=w(r),e=n(r.imageUrl),a=n(null),p=()=>e.value?e.value.startsWith("http")||e.value.startsWith("data")?e.value:U()+e.value:"",u=n(),h=_,x=d=>{const l=d.target;if(l.files&&l.files[0]){a.value=l.files[0];const o=new FileReader;o.onload=k=>{var m;e.value=(m=k.target)==null?void 0:m.result},o.readAsDataURL(a.value),h("selectFile",a.value)}},y=()=>{u.value.click()};return B(()=>{a.value=null}),R(()=>{}),(d,l)=>{const o=b;return i(),g("div",{class:"image-upload",style:c({height:t(s)?t(s)+"px":"200px"}),onClick:y},[f("input",{ref_key:"fileselectRef",ref:u,style:{display:"none"},type:"file",accept:"image/*",onChange:x},null,544),f("div",{class:"image-preview",style:c({border:e.value?"none":"1px solid var(--gw-bg-active-color)",width:t(s)?t(s)+"px":"200px"})},[p()?(i(),g("img",{key:0,class:"img",style:c({height:t(s)?t(s)+"px":"200px"}),src:p(),alt:"预览图片"},null,12,C)):(i(),z(o,{key:1,size:50,"icon-class":"add"}))],4)],4)}}}),D=F(S,[["__scopeId","data-v-81daed6b"]]);export{D as I};
