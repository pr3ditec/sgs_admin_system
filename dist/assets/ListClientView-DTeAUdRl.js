import{d as h,u as _,r as s,T as a,o as x,i as C,w as f,e as w,f as b,b as c,h as p}from"./index-sOqKN4X3.js";import{R as l}from"./Response-TKM2zK-M.js";import{_ as L}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-Dd1Sk2hy.js";import{_ as v}from"./SGSTable.vue_vue_type_script_setup_true_lang-Hz7aCNkk.js";import{_ as y}from"./FormLayout.vue_vue_type_script_setup_true_lang-rKUDI00G.js";import"./style-Dmbm4Uq-.js";import"./SGSInput.vue_vue_type_script_setup_true_lang-BoS-uIOy.js";import"./SGSDivider-DyRYqtnG.js";const G=h({__name:"ListClientView",setup(D){const u=w(),r=_().request,o=s({isLoading:!1}),m=s([{field:"id",title:"#",headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"nome",title:a.to("name"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"telefone",title:a.to("phone"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"cidade",title:a.to("city"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:a.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),i=s([]),n=async()=>{o.value.isLoading=!0,await r.get("/cliente").then(t=>{t.status&&(i.value=t.list)}).finally(()=>{o.value.isLoading=!1})},g=async t=>{await r.destroy(`/cliente/${t}`).then(e=>{e.status?(n(),l.show("success",e.messageCode)):l.show("error",e.messageCode)})};return x(()=>{Promise.all([n()]).catch(t=>{console.log("Erro em buscar dados da api")})}),(t,e)=>(b(),C(L,null,{default:f(()=>[c(y,{onHelper:e[1]||(e[1]=d=>p(l).helperList()),title:"client",push:{label:"create-client",to:"/client/create"}},{body:f(()=>[c(v,{isLoading:o.value.isLoading,result:i.value,header:m.value,onEditData:e[0]||(e[0]=d=>p(u).push(`/client/${d}`)),onDeleteData:g},null,8,["isLoading","result","header"])]),_:1})]),_:1}))}});export{G as default};
