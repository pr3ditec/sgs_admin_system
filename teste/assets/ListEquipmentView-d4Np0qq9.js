import{d as _,u as g,r as s,T as t,o as w,i as x,w as u,e as b,f as C,b as d,h as f}from"./index-CtdWVGE4.js";import{R as l}from"./Response-Cdpp2_KF.js";import{_ as L}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-3w5KMU_p.js";import{_ as q}from"./SGSTable.vue_vue_type_script_setup_true_lang-Bma2mQYQ.js";import{_ as v}from"./FormLayout.vue_vue_type_script_setup_true_lang-Du2JUmel.js";import"./style-CxYqEFSA.js";import"./SGSInput.vue_vue_type_script_setup_true_lang-BSDmowQH.js";import"./SGSDivider-Cdrz1sw5.js";const A=_({__name:"ListEquipmentView",setup(y){const m=b(),r=g().request,o=s({isLoading:!1}),c=s([{field:"nome",title:t.to("name"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"tipo",title:t.to("type"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"cliente_nome",title:t.to("client"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:t.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),n=s([]),i=async()=>{o.value.isLoading=!0,await r.get("/aparelho").then(a=>{a.status&&(n.value=a.list)}).finally(()=>{o.value.isLoading=!1})},h=async a=>{await r.destroy(`/aparelho/${a}`).then(e=>{e.status?(i(),l.show("success",e.messageCode)):l.show("error",e.messageCode)})};return w(()=>{Promise.all([i()]).catch(a=>{console.log("Erro em buscar dados da api")})}),(a,e)=>(C(),x(L,null,{default:u(()=>[d(v,{onHelper:e[1]||(e[1]=p=>f(l).helperList()),title:"equipment",push:{label:"create-equipment",to:"/equipment/create"}},{body:u(()=>[d(q,{isLoading:o.value.isLoading,result:n.value,header:c.value,onEditData:e[0]||(e[0]=p=>f(m).push(`/equipment/${p}`)),onDeleteData:h},null,8,["isLoading","result","header"])]),_:1})]),_:1}))}});export{A as default};