import{d as h,f as d,c,a as t,j as w,t as r,h as n,T as l,l as s,q as i,K as y,F as x,z as S}from"./index-sOqKN4X3.js";const v={class:"mb-0 dark:text-zinc-200 text-black"},B={class:"text-danger"},N=["disabled"],j={disabled:"",value:"0"},D=["value"],z=h({__name:"SGSSelect",props:{items:Array,label:String,required:Boolean,track:Object,controller:Object,clearData:Boolean,reference:Object,referenceName:String},setup(e){const g=e;return(p,a)=>{var u,b,m;return d(),c(x,null,[t("p",v,[w(r(n(l).to(e.label))+" ",1),s(t("i",B,"*",512),[[i,e.required]])]),a[1]||(a[1]=t("hr",{class:"dark:text-zinc-200 text-slate-200 mb-2 w-1/2"},null,-1)),s(t("select",{class:"w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark bg-white dark:bg-form-input dark:focus:border-primary",disabled:(u=e.controller)==null?void 0:u.isDisabled,"onUpdate:modelValue":a[0]||(a[0]=o=>e.reference[e.referenceName]=o)},[t("option",j,r(n(l).to("select-item")),1),(d(!0),c(x,null,S(g.items,o=>{var f,k;return d(),c("option",{value:o[(f=e.track)==null?void 0:f.field]},r(o[(k=e.track)==null?void 0:k.name]),9,D)}),256))],8,N),[[y,e.reference[e.referenceName]]]),s(t("p",{class:"text-danger lowercase"},r(n(l).to("not-found")),513),[[i,(b=e.controller)==null?void 0:b.notFound]]),s(t("p",{class:"text-danger lowercase"},r(n(l).to("empty-data")),513),[[i,(m=e.controller)==null?void 0:m.isEmpty]])],64)}}});export{z as _};
