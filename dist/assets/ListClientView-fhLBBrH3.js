import{d as h,u as _,r as s,T as a,o as C,i as w,w as f,e as x,f as b,b as c,h as u}from"./index-DcHHFHWs.js";import{R as l}from"./Response-CeNjMucE.js";import{_ as L}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-DbfjE3bo.js";import{_ as v}from"./SGSTable.vue_vue_type_script_setup_true_lang-BS0RKlfA.js";import{_ as y}from"./FormLayout.vue_vue_type_script_setup_true_lang-C1zYCnRE.js";import"./style-jJPW8d7u.js";import"./SGSInput.vue_vue_type_script_setup_true_lang-CmQpmTuy.js";import"./SGSDivider-DtGz0GqX.js";const G=h({__name:"ListClientView",setup(D){const p=x(),r=_().request,o=s({isLoading:!1}),m=s([{field:"nome",title:a.to("name"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"telefone",title:a.to("phone"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"cidade",title:a.to("city"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:a.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),n=s([]),i=async()=>{o.value.isLoading=!0,await r.get("/cliente").then(t=>{t.status&&(n.value=t.list)}).finally(()=>{o.value.isLoading=!1})},g=async t=>{await r.destroy(`/cliente/${t}`).then(e=>{e.status?(i(),l.show("success",e.messageCode)):l.show("error",e.messageCode)})};return C(()=>{Promise.all([i()]).catch(t=>{console.log("Erro em buscar dados da api")})}),(t,e)=>(b(),w(L,null,{default:f(()=>[c(y,{onHelper:e[1]||(e[1]=d=>u(l).helperList()),title:"client",push:{label:"create-client",to:"/client/create"}},{body:f(()=>[c(v,{isLoading:o.value.isLoading,result:n.value,header:m.value,onEditData:e[0]||(e[0]=d=>u(p).push(`/client/${d}`)),onDeleteData:g},null,8,["isLoading","result","header"])]),_:1})]),_:1}))}});export{G as default};
