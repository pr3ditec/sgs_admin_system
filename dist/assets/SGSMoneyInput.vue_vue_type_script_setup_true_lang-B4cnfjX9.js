import{d as f,r as b,G as x,f as t,c as o,a,j as k,t as d,h as s,T as n,k as i,l as y,v as _}from"./index-DcHHFHWs.js";const h={class:"mb-0.5 block text-black dark:text-zinc-200"},v={key:0,class:"text-meta-1"},w=["placeholder"],N={key:0,class:"text-red lowercase text-sm"},B=f({__name:"SGSMoneyInput",props:{label:String,required:Boolean,reference:Object,referenceName:String,controller:Object},setup(l){const m=b({decimal:".",thousands:"",prefix:"R$ ",suffix:"",precision:2}),e=l;return(g,r)=>{var c;const p=x("money");return t(),o("div",null,[a("label",h,[k(d(s(n).to(e.label))+" ",1),e.required?(t(),o("span",v,"*")):i("",!0)]),r[1]||(r[1]=a("hr",{class:"dark:text-zinc-200 text-slate-200 mb-2 w-1/2"},null,-1)),y(a("input",{placeholder:s(n).to("type-here"),"onUpdate:modelValue":r[0]||(r[0]=u=>e.reference[e.referenceName]=u),type:"text",class:"w-full rounded border-[1.5px] text-black border-stroke py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"},null,8,w),[[_,e.reference[e.referenceName]],[p,m.value]]),(c=l.controller)!=null&&c.isEmpty?(t(),o("label",N,d(s(n).to("empty-data")),1)):i("",!0)])}}});export{B as _};
