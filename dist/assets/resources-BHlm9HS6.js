import{d as e}from"./request_website-Bk4SsOMl.js";const o=()=>e.get("/resource/directories"),c=()=>e.get("/resource/types"),i=()=>e.get("/resource/classifications"),a=r=>e.post("/resource/library/add",{...r}),n=r=>e.get("/resource/library/list/"+r),u=r=>e.post("/resource/library/delete/"+r),l=r=>e.post("/resource/library/statistics",r),p=r=>e.post("/resource/library/cover",r),d=r=>e.post("/resource/classify",r),y=r=>e.post("/resource/library/refresh/"+r),A=r=>e.get("/resource/music/"+r),b=r=>e.post("/resource/page",{...r}),f=r=>{const s={headers:{"Content-Type":"multipart/form-data"}};return e.post("/resource/collection/add",r,s)},g=()=>e.get("/resource/collection/list"),m=r=>e.post("/resource/collection/delete/"+r),C=r=>e.post("/resource/delete/"+r);export{n as a,o as b,a as c,u as d,y as e,m as f,f as g,i as h,d as i,C as j,p as k,g as l,c as m,b as p,A as r,l as s};
