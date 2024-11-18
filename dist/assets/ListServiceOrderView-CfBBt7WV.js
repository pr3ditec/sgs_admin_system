import{d as x,r as f,e as w,f as b,c as C,b as n,w as g,a as u,t as h,h as l,T as a,F as k,u as D,o as y,i as S}from"./index-CtdWVGE4.js";import{g as L}from"./style-CxYqEFSA.js";import{s as $,R as m}from"./Response-Cdpp2_KF.js";import{_ as B}from"./SGSInput.vue_vue_type_script_setup_true_lang-BSDmowQH.js";import{S as N}from"./SGSDivider-Cdrz1sw5.js";import{_ as O}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-3w5KMU_p.js";import{_ as E}from"./FormLayout.vue_vue_type_script_setup_true_lang-Du2JUmel.js";const G={class:"flex flex-row gap-1"},R={class:"cursor-pointer w-20 flex flex-row gap-2"},T=["onClick"],V=["onClick"],q=x({__name:"SGSTableServiceOrder",props:{search:String,isLoading:Boolean,header:Array,result:Array},emits:["deleteData","editData"],setup(_,{emit:p}){const o=_,s=p,i=f({value:""}),d=r=>{$({icon:"warning",text:a.to("delete-data"),buttons:{confirm:{text:a.to("yes")}}}).then(c=>{c&&s("deleteData",r)})};return w(),(r,c)=>(b(),C(k,null,[n(B,{reference:i.value,referenceName:"value"},null,8,["reference"]),n(N),n(l(L),{rowClass:"dark:bg-form-input dark:text-zinc-300 font-bold",skin:"none",sortable:!0,noDataContent:"Nenhum dado disponível",paginationInfo:"Mostrando dados recuperados",columns:o.header,loading:o.isLoading,rows:o.result,search:i.value.value},{actions:g(t=>[u("div",G,[u("span",R,[u("a",{onClick:e=>s("editData",t.value.id),class:"text-sky-800 dark:text-sky-400 underline"},h(l(a).to("edit")),9,T),u("a",{onClick:e=>d(t.value.id),class:"cursor-pointer text-black-600 dark:text-orange-600 underline"},h(l(a).to("delete")),9,V)])])]),_:1},8,["columns","loading","rows","search"])],64))}}),j=x({__name:"ListServiceOrderView",setup(_){const p=w(),o=D().request,s=f({isLoading:!1}),i=f([{field:"numero",title:a.to("number"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"cliente.nome",title:a.to("client"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"cliente.telefone",title:a.to("phone"),headerClass:"flex flex-row gap-1 font-bold uppercase"},{field:"actions",title:a.to("actions"),headerClass:"flex flex-row gap-1 font-bold uppercase"}]),d=f([]),r=async()=>{s.value.isLoading=!0,await o.get("/ordem-servico").then(t=>{t.status&&(d.value=t.list)}).finally(()=>{s.value.isLoading=!1})},c=async t=>{await o.destroy(`/ordem-servico/${t}`).then(e=>{e.status?(r(),m.show("success",e.messageCode)):m.show("error",e.messageCode)})};return y(()=>{Promise.all([r()]).catch(t=>{console.log("Erro ao buscar dados de api")})}),(t,e)=>(b(),S(O,null,{default:g(()=>[n(E,{onHelper:e[1]||(e[1]=v=>l(m).helperList()),title:"service-order",push:{label:"create-service-order",to:"/service-order/create"}},{body:g(()=>[n(q,{isLoading:s.value.isLoading,header:i.value,result:d.value,onEditData:e[0]||(e[0]=v=>l(p).push(`/service-order/${v}`)),onDeleteData:c},null,8,["isLoading","header","result"])]),_:1})]),_:1}))}});export{j as default};
