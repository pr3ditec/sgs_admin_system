import{d as _,u as g,r as t,T as o,o as h,i as w,w as d,e as b,f as x,b as u,h as f}from"./index-CtdWVGE4.js";import{R as r}from"./Response-Cdpp2_KF.js";import{_ as C}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-3w5KMU_p.js";import{_ as L}from"./SGSTable.vue_vue_type_script_setup_true_lang-Bma2mQYQ.js";import{_ as $}from"./FormLayout.vue_vue_type_script_setup_true_lang-Du2JUmel.js";import"./style-CxYqEFSA.js";import"./SGSInput.vue_vue_type_script_setup_true_lang-BSDmowQH.js";import"./SGSDivider-Cdrz1sw5.js";const V=_({__name:"ListServiceView",setup(D){const p=b(),i=g().request,a=t({isLoading:!1}),m=t([{field:"descricao",title:o.to("description"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"preco",title:o.to("price")+" (R$)",headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:o.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),l=t([]),n=async()=>{a.value.isLoading=!0,await i.get("/servico").then(s=>{s.status&&(l.value=s.list)}).finally(()=>{a.value.isLoading=!1})},v=async s=>{await i.destroy(`/servico/${s}`).then(e=>{e.status?(n(),r.show("success",e.messageCode)):r.show("error",e.messageCode)})};return h(()=>{Promise.all([n()]).catch(s=>{console.log("Erro em buscar dados da api")})}),(s,e)=>(x(),w(C,null,{default:d(()=>[u($,{onHelper:e[1]||(e[1]=c=>f(r).helperList()),title:"services",push:{label:"create-service",to:"/service/create"}},{body:d(()=>[u(L,{isLoading:a.value.isLoading,result:l.value,header:m.value,onEditData:e[0]||(e[0]=c=>f(p).push(`/service/${c}`)),onDeleteData:v},null,8,["isLoading","result","header"])]),_:1})]),_:1}))}});export{V as default};