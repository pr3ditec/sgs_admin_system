import{d as b,u as h,r as t,o as C,i as D,w as i,f as w,b as a,h as y}from"./index-DlXReHYW.js";import{R as l}from"./Response-Degt4AJ1.js";import{b as S,a as n,k as $,v as m}from"./Validator-BLuEWHG9.js";import{_ as g}from"./DefaultLayout.vue_vue_type_script_setup_true_lang-CMILcdRT.js";import{_ as x}from"./FormLayout.vue_vue_type_script_setup_true_lang-2C9QneGZ.js";import{_ as k}from"./SGSButton.vue_vue_type_script_setup_true_lang-BR4KmKdI.js";import{_ as q}from"./SGSInput.vue_vue_type_script_setup_true_lang-B8Bwi16F.js";import{S as p}from"./SGSDivider-Bofd5NDC.js";import{_ as V}from"./SGSMoneyInput.vue_vue_type_script_setup_true_lang-D6IMlezP.js";const K=b({__name:"CreateServiceView",setup(E){const d=h().request,s=t({isLoading:!1,isDisabled:!1}),c=t({isEmpty:!1,isDisabled:!1}),u=t({isEmpty:!1,isDisabled:!1}),e=t({descricao:"",preco:""}),v=()=>{e.value.preco=e.value.preco.substring(3)},_=()=>{v();const r=m(c.value,e.value.descricao),o=m(u.value,e.value.preco);return r&&o},f=async()=>{if(n(s.value,!0),!_())return n(s.value,!1);await d.store("/servico",e.value).then(r=>{r.status?l.show("success",r.messageCode):l.show("error",r.messageCode)}).catch(r=>{l.show("error","unexpected-error")}).finally(()=>{n(s.value,!1),$(e.value)})};return C(()=>{S("Enter",f)}),(r,o)=>(w(),D(g,null,{default:i(()=>[a(x,{onHelper:o[0]||(o[0]=N=>y(l).helperCreateFormOrder("register-service-helper-text")),title:"create-service",push:{label:"list-service",to:"/service/list"}},{body:i(()=>[a(q,{label:"description",required:"",reference:e.value,referenceName:"descricao",controller:c.value},null,8,["reference","controller"]),a(p),a(V,{label:"price",required:"",reference:e.value,referenceName:"preco",controller:u.value},null,8,["reference","controller"]),a(p)]),handler:i(()=>[a(k,{onClick:f,label:"create-service",controller:s.value},null,8,["controller"])]),_:1})]),_:1}))}});export{K as default};