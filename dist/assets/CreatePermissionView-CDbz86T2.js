import{d as f,u as p,r as o,o as d,i as _,w as t,f as v,b as r}from"./index-CtdWVGE4.js";import{b,a as l,g as h,v as C}from"./Validator-BLuEWHG9.js";import{R as n}from"./Response-Cdpp2_KF.js";import{_ as w}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-3w5KMU_p.js";import{_ as D}from"./FormLayout.vue_vue_type_script_setup_true_lang-Du2JUmel.js";import{_ as y}from"./SGSButton.vue_vue_type_script_setup_true_lang-DvxYfA5O.js";import{_ as g}from"./SGSInput.vue_vue_type_script_setup_true_lang-BSDmowQH.js";import{S as x}from"./SGSDivider-Cdrz1sw5.js";const R=f({__name:"CreatePermissionView",setup(N){const c=p().request,a=o({isLoading:!1,isDisabled:!1}),i=o({isEmpty:!1,isDisabled:!1}),s=o({nome:""}),u=()=>C(i.value,s.value.nome),m=async()=>{if(l(a.value,!0),!u())return l(a.value,!1);await c.store("/permissao",s.value).then(e=>{e.status?n.show("success",e.messageCode):n.show("error",e.messageCode)}).catch(e=>{n.show("error","unexpected-error")}).finally(()=>{l(a.value,!1),h(s.value)})};return d(()=>{b("Enter",m)}),(e,S)=>(v(),_(w,null,{default:t(()=>[r(D,{title:"create-permission",push:{label:"list-permission",to:"/permission/list"}},{body:t(()=>[r(g,{label:"name",required:"",reference:s.value,referenceName:"nome",controller:i.value},null,8,["reference","controller"]),r(x)]),handler:t(()=>[r(y,{onClick:m,label:"create-permission",controller:a.value},null,8,["controller"])]),_:1})]),_:1}))}});export{R as default};
