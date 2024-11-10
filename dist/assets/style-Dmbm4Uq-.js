import{d as re,M as Ve,r as x,o as ke,N as W,p as P,f as d,c as v,a as u,D as h,b as V,F as M,z as G,h as A,y as X,l as E,O as Pe,k as y,x as Ee,j as Ce,t as g,C as we,K as _e,v as ue,q as Ie,P as je,Q as Je}from"./index-sOqKN4X3.js";const Ge={class:"bh-filter-menu bh-absolute bh-z-[1] bh-bg-white bh-shadow-md bh-rounded-md bh-top-full bh-right-0 bh-w-32 bh-mt-1"},Ke=["onClick"],$e=re({__name:"column-filter",props:["column","columnFilterLang"],emits:["close","filterChange"],setup(C,{emit:k}){const l=C;je(()=>{document.removeEventListener("click",q)}),ke(()=>{document.addEventListener("click",q)});const q=()=>{k("close")},m=e=>{l.column.condition=e,e===""&&(l.column.value=""),k("filterChange",l.column)};return(e,o)=>{var _,r,F,Z,B,Q,z,Y,S,L,I,N,D,ee,H,K,T,le,te;return d(),v("div",Ge,[u("div",{class:"bh-text-[13px] bh-font-normal bh-rounded bh-overflow-hidden",onClick:X(q,["stop"])},[u("button",{type:"button",class:h({active:l.column.condition===""}),onClick:o[0]||(o[0]=p=>m(""))},g((_=l.columnFilterLang&&l.columnFilterLang.no_filter)!=null?_:"No filter"),3),l.column.type==="string"?(d(),v(M,{key:0},[u("button",{type:"button",class:h({active:l.column.condition==="contain"}),onClick:o[1]||(o[1]=p=>m("contain"))},g((r=l.columnFilterLang&&l.columnFilterLang.contain)!=null?r:"Contain"),3),u("button",{type:"button",class:h({active:l.column.condition==="not_contain"}),onClick:o[2]||(o[2]=p=>m("not_contain"))},g((F=l.columnFilterLang&&l.columnFilterLang.not_contain)!=null?F:"Not contain"),3),u("button",{type:"button",class:h({active:l.column.condition==="equal"}),onClick:o[3]||(o[3]=p=>m("equal"))},g((Z=l.columnFilterLang&&l.columnFilterLang.equal)!=null?Z:"Equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="not_equal"}),onClick:o[4]||(o[4]=p=>m("not_equal"))},g((B=l.columnFilterLang&&l.columnFilterLang.not_equal)!=null?B:"Not equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="start_with"}),onClick:o[5]||(o[5]=p=>m("start_with"))},g((Q=l.columnFilterLang&&l.columnFilterLang.start_with)!=null?Q:"Starts with"),3),u("button",{type:"button",class:h({active:l.column.condition==="end_with"}),onClick:o[6]||(o[6]=p=>m("end_with"))},g((z=l.columnFilterLang&&l.columnFilterLang.end_with)!=null?z:"Ends with"),3)],64)):l.column.type==="number"?(d(),v(M,{key:1},[u("button",{type:"button",class:h({active:l.column.condition==="equal"}),onClick:o[7]||(o[7]=p=>m("equal"))},g((Y=l.columnFilterLang&&l.columnFilterLang.equal)!=null?Y:"Equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="not_equal"}),onClick:o[8]||(o[8]=p=>m("not_equal"))},g((S=l.columnFilterLang&&l.columnFilterLang.not_equal)!=null?S:"Not equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="greater_than"}),onClick:o[9]||(o[9]=p=>m("greater_than"))},g((L=l.columnFilterLang&&l.columnFilterLang.greater_than)!=null?L:"Greater than"),3),u("button",{type:"button",class:h({active:l.column.condition==="greater_than_equal"}),onClick:o[10]||(o[10]=p=>m("greater_than_equal"))},g((I=l.columnFilterLang&&l.columnFilterLang.greater_than_equal)!=null?I:"Greater than or equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="less_than"}),onClick:o[11]||(o[11]=p=>m("less_than"))},g((N=l.columnFilterLang&&l.columnFilterLang.less_than)!=null?N:"Less than"),3),u("button",{type:"button",class:h({active:l.column.condition==="less_than_equal"}),onClick:o[12]||(o[12]=p=>m("less_than_equal"))},g((D=l.columnFilterLang&&l.columnFilterLang.less_than_equal)!=null?D:"Less than or equal"),3)],64)):l.column.type==="date"?(d(),v(M,{key:2},[u("button",{type:"button",class:h({active:l.column.condition==="equal"}),onClick:o[13]||(o[13]=p=>m("equal"))},g((ee=l.columnFilterLang&&l.columnFilterLang.equal)!=null?ee:"Equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="not_equal"}),onClick:o[14]||(o[14]=p=>m("not_equal"))},g((H=l.columnFilterLang&&l.columnFilterLang.not_equal)!=null?H:"Not equal"),3),u("button",{type:"button",class:h({active:l.column.condition==="greater_than"}),onClick:o[15]||(o[15]=p=>m("greater_than"))},g((K=l.columnFilterLang&&l.columnFilterLang.greater_than)!=null?K:"Greater than"),3),u("button",{type:"button",class:h({active:l.column.condition==="less_than"}),onClick:o[16]||(o[16]=p=>m("less_than"))},g((T=l.columnFilterLang&&l.columnFilterLang.less_than)!=null?T:"Less than"),3)],64)):y("",!0),u("button",{type:"button",class:h({active:l.column.condition==="is_null"}),onClick:o[17]||(o[17]=p=>m("is_null"))},g((le=l.columnFilterLang&&l.columnFilterLang.is_null)!=null?le:"Is null"),3),u("button",{type:"button",class:h({active:l.column.condition==="is_not_null"}),onClick:o[18]||(o[18]=p=>m("is_not_null"))},g((te=l.columnFilterLang&&l.columnFilterLang.is_not_null)!=null?te:"Not null"),3)],8,Ke)])}}}),oe=(C,k)=>{const l=C.__vccOpts||C;for(const[q,m]of k)l[q]=m;return l},We={},Xe={version:"1.1",viewBox:"0 0 17 12",xmlns:"http://www.w3.org/2000/svg"},Ze=u("g",{fill:"none","fill-rule":"evenodd"},[u("g",{transform:"translate(-9 -11)",fill:"currentColor","fill-rule":"nonzero"},[u("path",{d:"m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"})])],-1),Qe=[Ze];function Ye(C,k){return d(),v("svg",Xe,Qe)}const Fe=oe(We,[["render",Ye]]),el={},ll={viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"3",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"css-i6dzq1"},tl=u("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),nl=[tl];function al(C,k){return d(),v("svg",ll,nl)}const ol=oe(el,[["render",al]]),il={},ul={viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor","stroke-width":"1.5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round",class:"css-i6dzq1"},rl=u("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},null,-1),sl=[rl];function cl(C,k){return d(),v("svg",ul,sl)}const dl=oe(il,[["render",cl]]),vl={key:"hdrrow"},hl={class:"bh-checkbox"},pl=["onClick"],fl={width:"16",height:"16",viewBox:"0 0 14 14",fill:"none"},ml={key:0,class:"bh-filter bh-relative"},bl=["onUpdate:modelValue"],gl=["onUpdate:modelValue"],yl=["onUpdate:modelValue"],kl=["onUpdate:modelValue"],Cl=u("option",{value:void 0},"All",-1),wl=u("option",{value:!0},"True",-1),_l=u("option",{value:!1},"False",-1),Fl=[Cl,wl,_l],Ll=["onClick"],ye=re({__name:"column-header",props:["all","currentSortColumn","currentSortDirection","isOpenFilter","isFooter","checkAll","columnFilterLang"],emits:["selectAll","sortChange","filterChange","toggleFilterMenu"],setup(C,{emit:k}){const l=C,q=x(null);return P(()=>l.checkAll,()=>{q.value&&(q.value.indeterminate=l.checkAll!==0?!l.checkAll:!1,q.value.checked=l.checkAll)}),(m,e)=>(d(),v("tr",vl,[l.all.hasCheckbox?(d(),v("th",{key:"chkall",class:h(["bh-w-px",{"bh-sticky bh-bg-blue-light bh-z-[1]":l.all.stickyHeader||l.all.stickyFirstColumn,"bh-top-0":l.all.stickyHeader,"bh-left-0":l.all.stickyFirstColumn}])},[u("div",hl,[u("input",{ref_key:"selectedAll",ref:q,type:"checkbox",onClick:e[0]||(e[0]=X(o=>k("selectAll",o.target.checked),["stop"]))},null,512),u("div",null,[V(Fe,{class:"check"}),V(ol,{class:"intermediate"})])])],2)):y("",!0),(d(!0),v(M,null,G(l.all.columns,(o,_)=>(d(),v(M,null,[o.hide?y("",!0):(d(),v("th",{key:o.field,class:h(["bh-select-none bh-z-[1]",[l.all.sortable&&o.sort?"bh-cursor-pointer":"",_===0&&l.all.stickyFirstColumn?"bh-sticky bh-left-0 bh-bg-blue-light":"",l.all.hasCheckbox&&_===0&&l.all.stickyFirstColumn?"bh-left-[52px]":""]]),style:we({width:o.width,"min-width":o.minWidth,"max-width":o.maxWidth})},[u("div",{class:h(["bh-flex bh-items-center",[o.headerClass?o.headerClass:""]]),onClick:r=>l.all.sortable&&o.sort&&k("sortChange",o.field)},[Ce(g(o.title)+" ",1),l.all.sortable&&o.sort?(d(),v("span",{key:0,class:h(["bh-ml-3 bh-sort bh-flex bh-items-center",[l.currentSortColumn,l.currentSortDirection]])},[(d(),v("svg",fl,[u("polygon",{points:"3.11,6.25 10.89,6.25 7,1.75 ",fill:"currentColor",class:h(["bh-text-black/20",[C.currentSortColumn===o.field&&C.currentSortDirection==="asc"?"!bh-text-primary":""]])},null,2),u("polygon",{points:"7,12.25 10.89,7.75 3.11,7.75 ",fill:"currentColor",class:h(["bh-text-black/20",[C.currentSortColumn===o.field&&C.currentSortDirection==="desc"?"!bh-text-primary":""]])},null,2)]))],2)):y("",!0)],10,pl),l.all.columnFilter&&!l.isFooter?(d(),v(M,{key:0},[o.filter?(d(),v("div",ml,[o.type==="string"?E((d(),v("input",{key:0,"onUpdate:modelValue":r=>o.value=r,type:"text",class:"bh-form-control",onKeyup:e[1]||(e[1]=r=>k("filterChange"))},null,40,bl)),[[ue,o.value,void 0,{trim:!0}]]):y("",!0),o.type==="number"?E((d(),v("input",{key:1,"onUpdate:modelValue":r=>o.value=r,type:"number",class:"bh-form-control",onKeyup:e[2]||(e[2]=r=>k("filterChange"))},null,40,gl)),[[ue,o.value,void 0,{number:!0,trim:!0}]]):o.type==="date"?E((d(),v("input",{key:2,"onUpdate:modelValue":r=>o.value=r,type:"date",class:"bh-form-control",onChange:e[3]||(e[3]=r=>k("filterChange"))},null,40,yl)),[[ue,o.value]]):o.type==="bool"?E((d(),v("select",{key:3,"onUpdate:modelValue":r=>o.value=r,class:"bh-form-control",onChange:e[4]||(e[4]=r=>k("filterChange")),onClick:e[5]||(e[5]=r=>l.isOpenFilter=null)},Fl,40,kl)),[[_e,o.value]]):y("",!0),o.type!=="bool"?(d(),v("button",{key:4,type:"button",onClick:X(r=>k("toggleFilterMenu",o),["stop"])},[V(dl,{class:"bh-w-4"})],8,Ll)):y("",!0),E(V($e,{column:o,type:o.type,columnFilterLang:l.columnFilterLang,onClose:e[6]||(e[6]=r=>k("toggleFilterMenu",null)),onFilterChange:e[7]||(e[7]=r=>k("filterChange"))},null,8,["column","type","columnFilterLang"]),[[Ie,l.isOpenFilter===o.field]])])):y("",!0)],64)):y("",!0)],6))],64))),256))]))}}),Sl={},xl={width:"84",height:"84",viewBox:"0 0 24 24",class:"bh-loader bh-text-primary"},ql=Je('<circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate></circle>',3),Ml=[ql];function Bl(C,k){return d(),v("svg",xl,Ml)}const Al=oe(Sl,[["render",Bl]]),zl={class:"bh-datatable bh-antialiased bh-relative bh-text-black bh-text-sm bh-font-normal"},Nl=["onClick"],Dl={class:"bh-checkbox"},Hl=["value"],Ol=["innerHTML"],Tl={key:1},Rl=["colspan"],Ul=["colspan"],Vl=u("div",{class:"bh-skeleton-box bh-h-8"},null,-1),Pl=[Vl],El={key:0,class:"bh-absolute bh-inset-0 bh-bg-blue-light/50 bh-grid bh-place-content-center"},Il={class:"bh-flex bh-items-center bh-flex-wrap bh-flex-col sm:bh-flex-row bh-gap-4"},jl={class:"bh-pagination-info bh-flex bh-items-center"},Jl={class:"bh-mr-2"},Gl=["value"],Kl={class:"bh-pagination-number sm:bh-ml-auto bh-inline-flex bh-items-center bh-space-x-1"},$l=["innerHTML"],Wl={key:1,"aria-hidden":"true",width:"14",height:"14",viewBox:"0 0 16 16"},Xl=u("g",{fill:"currentColor","fill-rule":"evenodd"},[u("path",{d:"M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}),u("path",{d:"M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"})],-1),Zl=[Xl],Ql=["innerHTML"],Yl={key:1,"aria-hidden":"true",width:"14",height:"14",viewBox:"0 0 16 16"},et=u("path",{fill:"currentColor","fill-rule":"evenodd",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"},null,-1),lt=[et],tt=["onClick"],nt=["innerHTML"],at={key:1,"aria-hidden":"true",width:"14",height:"14",viewBox:"0 0 16 16"},ot=u("path",{fill:"currentColor","fill-rule":"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"},null,-1),it=[ot],ut=["innerHTML"],rt={key:1,"aria-hidden":"true",width:"14",height:"14",viewBox:"0 0 16 16"},st=u("g",{fill:"currentColor","fill-rule":"evenodd"},[u("path",{d:"M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8L3.646 2.354a.5.5 0 0 1 0-.708z"}),u("path",{d:"M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8L7.646 2.354a.5.5 0 0 1 0-.708z"})],-1),ct=[st],vt=re({__name:"custom-table",props:{loading:{type:Boolean,default:!1},isServerMode:{type:Boolean,default:!1},skin:{default:"bh-table-striped bh-table-hover"},totalRows:{default:0},rows:{default:()=>[]},columns:{default:()=>[]},hasCheckbox:{type:Boolean,default:!1},search:{default:""},columnChooser:{type:Boolean,default:!1},page:{default:1},pageSize:{default:10},pageSizeOptions:{default:()=>[10,20,30,50,100]},showPageSize:{type:Boolean,default:!0},rowClass:{default:[]},cellClass:{default:[]},sortable:{type:Boolean,default:!1},sortColumn:{default:"id"},sortDirection:{default:"asc"},columnFilter:{type:Boolean,default:!1},columnFilterLang:{default:null},pagination:{type:Boolean,default:!0},showNumbers:{type:Boolean,default:!0},showNumbersCount:{default:5},showFirstPage:{type:Boolean,default:!0},showLastPage:{type:Boolean,default:!0},firstArrow:{default:""},lastArrow:{default:""},nextArrow:{default:""},previousArrow:{default:""},paginationInfo:{default:"Showing {0} to {1} of {2} entries"},noDataContent:{default:"No data available"},stickyHeader:{type:Boolean,default:!1},height:{default:"500px"},stickyFirstColumn:{type:Boolean,default:!1},cloneHeaderInFooter:{type:Boolean,default:!1},selectRowOnClick:{type:Boolean,default:!1}},emits:["change","sortChange","searchChange","pageChange","pageSizeChange","rowSelect","filterChange","rowClick","rowDBClick"],setup(C,{expose:k,emit:l}){var q,m;const e=C,o=Ve();for(const t of e.columns||[]){const a=((q=t.type)==null?void 0:q.toLowerCase())||"string";t.type=a,t.isUnique=t.isUnique!==void 0?t.isUnique:!1,t.hide=t.hide!==void 0?t.hide:!1,t.filter=t.filter!==void 0?t.filter:!0,t.search=t.search!==void 0?t.search:!0,t.sort=t.sort!==void 0?t.sort:!0,t.html=t.html!==void 0?t.html:!1,t.condition=!a||a==="string"?"contain":"equal"}const _=x([]),r=x(e.page),F=x(e.pagination?e.pageSize:(m=e.rows)==null?void 0:m.length),Z=e.pageSize,B=x(e.sortColumn),Q=e.sortColumn,z=x(e.sortDirection),Y=e.sortDirection,S=x(e.totalRows),L=x([]),I=x(null),N=x(e.loading),D=x(e.search),ee=JSON.parse(JSON.stringify(e.columns)),H=x(null),K=x(null);let T=x(0);const le=x(230);ke(()=>{U()}),k({reset(){ze()},getSelectedRows(){return Ne()},getColumnFilters(){return De()},clearSelectedRows(){return He()},selectRow(t){me(t)},unselectRow(t){be(t)},isRowSelected(t){return ae(t)},getFilteredRows(){return de()}});const te=(t,...a)=>t.replace(/{(\d+)}/g,(s,i)=>typeof a[i]<"u"?a[i]:s),p=W(()=>{const t=e.columns.find(a=>a.isUnique);return(t==null?void 0:t.field)||null}),R=W(()=>{const t=F.value<1?1:Math.ceil(S.value/F.value);return Math.max(t||0,1)}),se=W(()=>(r.value-1)*F.value+1),ce=W(()=>{const t=r.value*F.value;return S.value>=t?t:S.value}),Le=W(()=>{let t,a;return typeof e.showNumbersCount<"u"&&e.showNumbersCount<R.value?(t=Math.max(r.value-Math.floor(e.showNumbersCount/2),1),a=t+e.showNumbersCount-1,a>R.value&&(a=R.value,t=a-e.showNumbersCount+1)):(t=1,a=R.value),Array.from(Array(a+1-t).keys()).map(s=>t+s)}),de=()=>{var t,a,s;let i=e.rows||[];if(!e.isServerMode){if((t=e.columns)==null||t.forEach(n=>{n.filter&&(n.value!==void 0&&n.value!==null&&n.value!==""||n.condition==="is_null"||n.condition=="is_not_null")&&(n.type==="string"?(n.value&&!n.condition&&(n.condition="contain"),n.condition==="contain"?i=i.filter(c=>{var b;return(b=f(c,n.field))==null?void 0:b.toString().toLowerCase().includes(n.value.toLowerCase())}):n.condition==="not_contain"?i=i.filter(c=>{var b;return!((b=f(c,n.field))!=null&&b.toString().toLowerCase().includes(n.value.toLowerCase()))}):n.condition==="equal"?i=i.filter(c=>{var b;return((b=f(c,n.field))==null?void 0:b.toString().toLowerCase())===n.value.toLowerCase()}):n.condition==="not_equal"?i=i.filter(c=>{var b;return((b=f(c,n.field))==null?void 0:b.toString().toLowerCase())!==n.value.toLowerCase()}):n.condition=="start_with"?i=i.filter(c=>{var b;return((b=f(c,n.field))==null?void 0:b.toString().toLowerCase().indexOf(n.value.toLowerCase()))===0}):n.condition=="end_with"&&(i=i.filter(c=>{var b;return((b=f(c,n.field))==null?void 0:b.toString().toLowerCase().substr(n.value.length*-1))===n.value.toLowerCase()}))):n.type==="number"?(n.value&&!n.condition&&(n.condition="equal"),n.condition==="equal"?i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))===parseFloat(n.value)):n.condition==="not_equal"?i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))!==parseFloat(n.value)):n.condition==="greater_than"?i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))>parseFloat(n.value)):n.condition==="greater_than_equal"?i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))>=parseFloat(n.value)):n.condition==="less_than"?i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))<parseFloat(n.value)):n.condition==="less_than_equal"&&(i=i.filter(c=>f(c,n.field)&&parseFloat(f(c,n.field))<=parseFloat(n.value)))):n.type==="date"?(n.value&&!n.condition&&(n.condition="equal"),n.condition==="equal"?i=i.filter(c=>f(c,n.field)&&ne(f(c,n.field))===n.value):n.condition==="not_equal"?i=i.filter(c=>f(c,n.field)&&ne(f(c,n.field))!==n.value):n.condition==="greater_than"?i=i.filter(c=>f(c,n.field)&&ne(f(c,n.field))>n.value):n.condition==="less_than"&&(i=i.filter(c=>f(c,n.field)&&ne(f(c,n.field))<n.value))):n.type==="bool"&&(i=i.filter(c=>f(c,n.field)===n.value)),n.condition==="is_null"?(i=i.filter(c=>f(c,n.field)==null||f(c,n.field)==""),n.value=""):n.condition==="is_not_null"&&(n.value="",i=i.filter(c=>f(c,n.field))))}),D.value&&(i==null?void 0:i.length)){let n=[];const c=(e.columns||[]).filter(b=>b.search&&!b.hide).map(b=>b.field);for(var w=0;w<(i==null?void 0:i.length);w++)for(var J=0;J<c.length;J++)if((a=f(i[w],c[J]))!=null&&a.toString().toLowerCase().includes(D.value.toLowerCase())){n.push(i[w]);break}i=n}var Oe=new Intl.Collator(void 0,{numeric:((s=e.columns.find(n=>n.field==B.value))==null?void 0:s.type)==="number",sensitivity:"base"});const Te=z.value==="desc"?-1:1;i.sort((n,c)=>{var b,ge;const Re=(b=B.value)==null?void 0:b.split(".").reduce(($,ie)=>$==null?void 0:$[ie],n),Ue=(ge=B.value)==null?void 0:ge.split(".").reduce(($,ie)=>$==null?void 0:$[ie],c);return Oe.compare(Re,Ue)*Te})}return i},U=()=>{let t=[],a=de();e.isServerMode?(S.value=e.totalRows||0,t=a):(S.value=(a==null?void 0:a.length)||0,t=a.slice(se.value-1,ce.value)),_.value=t||[]};P(()=>e.loading,()=>{N.value=e.loading});const ve=t=>{t?H.value===t.field?H.value=null:H.value=t.field:H.value=null},Se=()=>{if(r.value==1)return!1;r.value--},xe=t=>{r.value=t},qe=()=>{if(r.value>=R.value)return!1;r.value++};P(()=>r.value,()=>{O(!1),e.isServerMode?j("page"):(U(),l("pageChange",r.value))}),P(()=>e.rows,()=>{e.isServerMode||(r.value=1),O(!1),U()}),P(()=>F.value,()=>{O(!1),e.isServerMode?r.value===1?j("pagesize",!0):r.value=1:(r.value=1,U(),l("pageSizeChange",F.value))});const he=t=>{let a="asc";t==B.value&&z.value==="asc"&&(a="desc");let s=(r.value-1)*F.value,i=F.value;B.value=t,z.value=a,O(!1),U(),e.isServerMode?j("sort"):l("sortChange",{offset:s,limit:i,field:t,direction:a})},pe=t=>{I.value=t.length&&_.value.length&&t.length===_.value.length;const a=_.value.filter((s,i)=>L.value.includes(p.value?s[p.value]:i));l("rowSelect",a)};P(()=>L.value,pe);const O=t=>{t?L.value=_.value.map((a,s)=>p.value?a[p.value]:s):L.value=[]},fe=()=>{O(!1),e.isServerMode?r.value===1?j("filter",!0):r.value=1:(r.value=1,U(),l("filterChange",e.columns))},Me=()=>{O(!1),e.isServerMode?r.value===1?j("search",!0):r.value=1:(r.value=1,U(),l("searchChange",D.value))};P(()=>e.search,()=>{D.value=e.search,Me()});const f=(t,a)=>a==null?void 0:a.split(".").reduce((s,i)=>s==null?void 0:s[i],t),ne=t=>{try{if(!t)return"";const a=new Date(t),s=a.getDate(),i=a.getMonth()+1;return a.getFullYear()+"-"+(i>9?i:"0"+i)+"-"+(s>9?s:"0"+s)}catch{}return""},Be=(t,a)=>{T.value++,T.value===1?K.value=setTimeout(()=>{T.value=0,e.selectRowOnClick&&(ae(a)?be(a):me(a),pe(L.value)),l("rowClick",t)},le.value):T.value===2&&(clearTimeout(K.value),T.value=0,l("rowDBClick",t))},j=(t,a=!1)=>{if(e.isServerMode){Ae();const s={current_page:a?1:r.value,pagesize:F.value,offset:(r.value-1)*F.value,sort_column:B.value,sort_direction:z.value,search:D.value,column_filters:e.columns,change_type:t};l("change",s)}},Ae=()=>{for(let t=0;t<e.columns.length;t++){let a=e.columns[t];a.filter&&(a.value!==void 0&&a.value!==null&&a.value!==""||a.condition==="is_null"||a.condition==="is_not_null")&&(a.type==="string"&&a.value&&!a.condition&&(a.condition="contain"),a.type==="number"&&a.value&&!a.condition&&(a.condition="equal"),a.type==="date"&&a.value&&!a.condition&&(a.condition="equal"))}},ze=()=>{O(!1);for(let t=0;t<e.columns.length;t++)e.columns[t]=ee[t];D.value="",F.value=Z,B.value=Q,z.value=Y,e.isServerMode?r.value===1?j("reset",!0):r.value=1:(r.value=1,U())},Ne=()=>_.value.filter((t,a)=>L.value.includes(p.value?t[p.value]:a)),De=()=>e.columns,He=()=>{L.value=[]},me=t=>{if(!ae(t)){const a=_.value.find((s,i)=>i===t);L.value.push(p.value?a[p.value]:t)}},be=t=>{if(ae(t)){const a=_.value.find((s,i)=>i===t);L.value=L.value.filter(s=>s!==(p.value?a[p.value]:t))}},ae=t=>{const a=_.value.find((s,i)=>i===t);return a?L.value.includes(p.value?a[p.value]:t):!1};return(t,a)=>(d(),v("div",zl,[u("div",{class:h(["bh-table-responsive",{"bh-min-h-[300px]":N.value}]),style:we({height:e.stickyHeader&&e.height})},[u("table",{class:h([e.skin])},[u("thead",{class:h({"bh-sticky bh-top-0 bh-z-10":e.stickyHeader})},[V(ye,{all:e,currentSortColumn:B.value,currentSortDirection:z.value,isOpenFilter:H.value,checkAll:I.value,columnFilterLang:e.columnFilterLang,onSelectAll:O,onSortChange:he,onFilterChange:fe,onToggleFilterMenu:ve},null,8,["currentSortColumn","currentSortDirection","isOpenFilter","checkAll","columnFilterLang"])],2),u("tbody",null,[S.value?(d(!0),v(M,{key:0},G(_.value,(s,i)=>(d(),v("tr",{key:s[A(p)]?s[A(p)]:i,class:h([typeof e.rowClass=="function"?C.rowClass(s):e.rowClass,e.selectRowOnClick?"bh-cursor-pointer":""]),onClick:X(w=>Be(s,i),["prevent"])},[e.hasCheckbox?(d(),v("td",{key:0,class:h({"bh-sticky bh-left-0 bh-bg-blue-light":e.stickyFirstColumn})},[u("div",Dl,[E(u("input",{"onUpdate:modelValue":a[0]||(a[0]=w=>L.value=w),type:"checkbox",value:s[A(p)]?s[A(p)]:i,onClick:a[1]||(a[1]=X(()=>{},["stop"]))},null,8,Hl),[[Pe,L.value]]),u("div",null,[V(Fe,{class:"check"})])])],2)):y("",!0),(d(!0),v(M,null,G(e.columns,(w,J)=>(d(),v(M,null,[w.hide?y("",!0):(d(),v("td",{key:w.field,class:h([typeof e.cellClass=="function"?C.cellClass(s):e.cellClass,J===0&&e.stickyFirstColumn?"bh-sticky bh-left-0 bh-bg-blue-light":"",e.hasCheckbox&&J===0&&e.stickyFirstColumn?"bh-left-[52px]":"",w.cellClass?w.cellClass:""])},[A(o)[w.field]?Ee(t.$slots,w.field,{key:0,value:s}):w.cellRenderer?(d(),v("div",{key:1,innerHTML:w.cellRenderer(s)},null,8,Ol)):(d(),v(M,{key:2},[Ce(g(f(s,w.field)),1)],64))],2))],64))),256))],10,Nl))),128)):y("",!0),!S.value&&!N.value?(d(),v("tr",Tl,[u("td",{colspan:e.columns.length+1},g(e.noDataContent),9,Rl)])):y("",!0),!S.value&&N.value?(d(!0),v(M,{key:2},G(e.pageSize,s=>(d(),v("tr",{key:s,class:"!bh-bg-white bh-h-11 !bh-border-transparent"},[u("td",{colspan:e.columns.length+1,class:"!bh-p-0 !bh-border-transparent"},Pl,8,Ul)]))),128)):y("",!0)]),e.cloneHeaderInFooter?(d(),v("tfoot",{key:0,class:h({"bh-sticky bh-bottom-0":e.stickyHeader})},[V(ye,{all:e,currentSortColumn:B.value,currentSortDirection:z.value,isOpenFilter:H.value,isFooter:!0,checkAll:I.value,onSelectAll:O,onSortChange:he,onFilterChange:fe,onToggleFilterMenu:ve},null,8,["currentSortColumn","currentSortDirection","isOpenFilter","checkAll"])],2)):y("",!0)],2),S.value&&N.value?(d(),v("div",El,[V(Al)])):y("",!0)],6),e.pagination&&S.value?(d(),v("div",{key:0,class:h(["bh-pagination bh-py-5",{"bh-pointer-events-none":N.value}])},[u("div",Il,[u("div",jl,[u("span",Jl,g(te(e.paginationInfo,S.value?A(se):0,A(ce),S.value)),1),e.showPageSize?E((d(),v("select",{key:0,"onUpdate:modelValue":a[2]||(a[2]=s=>F.value=s),class:"bh-pagesize"},[(d(!0),v(M,null,G(e.pageSizeOptions,s=>(d(),v("option",{value:s,key:s},g(s),9,Gl))),128))],512)),[[_e,F.value]]):y("",!0)]),u("div",Kl,[e.showFirstPage?(d(),v("button",{key:0,type:"button",class:h(["bh-page-item first-page",{disabled:r.value<=1}]),onClick:a[3]||(a[3]=s=>r.value=1)},[e.firstArrow?(d(),v("span",{key:0,innerHTML:e.firstArrow},null,8,$l)):(d(),v("svg",Wl,Zl))],2)):y("",!0),u("button",{type:"button",class:h(["bh-page-item previous-page",{disabled:r.value<=1}]),onClick:Se},[e.previousArrow?(d(),v("span",{key:0,innerHTML:e.previousArrow},null,8,Ql)):(d(),v("svg",Yl,lt))],2),e.showNumbers?(d(!0),v(M,{key:1},G(A(Le),s=>(d(),v("button",{key:s,type:"button",class:h(["bh-page-item",{disabled:r.value===s,"bh-active":s===r.value}]),onClick:i=>xe(s)},g(s),11,tt))),128)):y("",!0),u("button",{type:"button",class:h(["bh-page-item next-page",{disabled:r.value>=A(R)}]),onClick:qe},[e.nextArrow?(d(),v("span",{key:0,innerHTML:e.nextArrow},null,8,nt)):(d(),v("svg",at,it))],2),e.showLastPage?(d(),v("button",{key:2,type:"button",class:h(["bh-page-item last-page",{disabled:r.value>=A(R)}]),onClick:a[4]||(a[4]=s=>r.value=A(R))},[e.lastArrow?(d(),v("span",{key:0,innerHTML:e.lastArrow},null,8,ut)):(d(),v("svg",rt,ct))],2)):y("",!0)])])],2)):y("",!0)]))}});export{vt as g};
