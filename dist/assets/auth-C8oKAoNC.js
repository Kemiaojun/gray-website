import{s as l}from"./pinia-CWZPuNdE.js";import{w as i,u as g,A as e,L as a,j as u,r as p,t as d}from"./index-DDkzpx4-.js";const k=s=>i.post("/login",s),r=g(),{auth:t}=l(r),h=async(s,n)=>{t.value={token:"",status:e.Loging},await k({username:s,password:n,clientId:"blossom",grantType:"password"}).then(o=>{t.value={token:o.data.token,status:e.Succ},a.set(u,t.value);const c=p.currentRoute.value.query.redirect||"/home";d(c)}).catch(o=>{r.reset(),t.value={token:"",status:e.Fail}})},f=()=>{t.value={token:"",status:e.Wait},a.set(u,{token:"",status:e.Wait})};export{f as a,h as l};
