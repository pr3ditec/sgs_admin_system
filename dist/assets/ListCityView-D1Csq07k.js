import{d as _,u as g,r as s,T as o,o as h,i as y,w as n,e as C,f as w,b as d,h as x}from"./index-DlXReHYW.js";import{R as c}from"./Response-Degt4AJ1.js";import{_ as b}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-CMILcdRT.js";import{_ as L}from"./SGSTable.vue_vue_type_script_setup_true_lang-Btn_6s8H.js";import{_ as v}from"./FormLayout.vue_vue_type_script_setup_true_lang-2C9QneGZ.js";import"./style-Gbs5m0IT.js";import"./SGSInput.vue_vue_type_script_setup_true_lang-B8Bwi16F.js";import"./SGSDivider-Bofd5NDC.js";const G=_({__name:"ListCityView",setup(D){const f=C(),l=g().request,t=s({isLoading:!1}),u=s([{field:"id",title:"#",headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"nome",title:o.to("name"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"uf",title:o.to("uf"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:o.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),r=s([]),i=async()=>{t.value.isLoading=!0,await l.get("/cidade").then(e=>{e.status&&(r.value=e.list)}).finally(()=>{t.value.isLoading=!1})},p=async e=>{await l.destroy(`/cidade/${e}`).then(a=>{a.status?(i(),c.show("success",a.messageCode)):c.show("error",a.messageCode)})};return h(()=>{Promise.all([i()]).catch(e=>{console.log("Erro em buscar dados da api")})}),(e,a)=>(w(),y(b,null,{default:n(()=>[d(v,{title:"city",push:{label:"create-city",to:"/city/create"}},{body:n(()=>[d(L,{isLoading:t.value.isLoading,result:r.value,header:u.value,onEditData:a[0]||(a[0]=m=>x(f).push(`/city/${m}`)),onDeleteData:p},null,8,["isLoading","result","header"])]),_:1})]),_:1}))}});export{G as default};
