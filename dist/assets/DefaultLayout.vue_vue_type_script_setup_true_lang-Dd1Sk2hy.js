import{W as me,X as ge,h as l,o as he,Y as ee,r as C,Z as be,p as te,$ as we,a0 as _e,a1 as ne,f as u,c as p,a as o,d as k,b as x,D as y,L as H,u as se,e as ve,R as V,w as q,t as M,y as oe,T,F as E,z as P,j as re,E as xe,i as B,k as W,l as ye,q as Ce,x as ke}from"./index-sOqKN4X3.js";import{a as le,R as Se,_ as $e}from"./Response-TKM2zK-M.js";function Le(e){return me()?(ge(e),!0):!1}function J(e){return typeof e=="function"?e():l(e)}const ae=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Me=Object.prototype.toString,Ae=e=>Me.call(e)==="[object Object]",Z=()=>{},Oe=Ee();function Ee(){var e,t;return ae&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function De(e,t){function n(...s){return new Promise((r,d)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(d)})}return n}const ie=e=>e();function Ne(e=ie){const t=C(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...d)=>{t.value&&e(...d)};return{isActive:be(t),pause:n,resume:s,eventFilter:r}}function Te(e){return we()}function Ie(e,t,n={}){const{eventFilter:s=ie,...r}=n;return te(e,De(s,t),r)}function Fe(e,t,n={}){const{eventFilter:s,...r}=n,{eventFilter:d,pause:h,resume:c,isActive:m}=Ne(s);return{stop:Ie(e,t,{...r,eventFilter:d}),pause:h,resume:c,isActive:m}}function je(e,t=!0,n){Te()?he(e,n):t?e():ee(e)}function D(e){var t;const n=J(e);return(t=n==null?void 0:n.$el)!=null?t:n}const z=ae?window:void 0;function N(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=z):[t,n,s,r]=e,!t)return Z;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const d=[],h=()=>{d.forEach(_=>_()),d.length=0},c=(_,v,i,f)=>(_.addEventListener(v,i,f),()=>_.removeEventListener(v,i,f)),m=te(()=>[D(t),J(r)],([_,v])=>{if(h(),!_)return;const i=Ae(v)?{...v}:v;d.push(...n.flatMap(f=>s.map(w=>c(_,f,w,i))))},{immediate:!0,flush:"post"}),g=()=>{m(),h()};return Le(g),g}let Y=!1;function ce(e,t,n={}){const{window:s=z,ignore:r=[],capture:d=!0,detectIframe:h=!1}=n;if(!s)return Z;Oe&&!Y&&(Y=!0,Array.from(s.document.body.children).forEach(i=>i.addEventListener("click",Z)),s.document.documentElement.addEventListener("click",Z));let c=!0;const m=i=>r.some(f=>{if(typeof f=="string")return Array.from(s.document.querySelectorAll(f)).some(w=>w===i.target||i.composedPath().includes(w));{const w=D(f);return w&&(i.target===w||i.composedPath().includes(w))}}),_=[N(s,"click",i=>{const f=D(e);if(!(!f||f===i.target||i.composedPath().includes(f))){if(i.detail===0&&(c=!m(i)),!c){c=!0;return}t(i)}},{passive:!0,capture:d}),N(s,"pointerdown",i=>{const f=D(e);c=!m(i)&&!!(f&&!i.composedPath().includes(f))},{passive:!0}),h&&N(s,"blur",i=>{setTimeout(()=>{var f;const w=D(e);((f=s.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(w!=null&&w.contains(s.document.activeElement))&&t(i)},0)})].filter(Boolean);return()=>_.forEach(i=>i())}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},j="__vueuse_ssr_handlers__",He=Pe();function Pe(){return j in F||(F[j]=F[j]||{}),F[j]}function Ze(e,t){return He[e]||t}function Be(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ze={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},G="vueuse-storage";function R(e,t,n,s={}){var r;const{flush:d="pre",deep:h=!0,listenToStorageChanges:c=!0,writeDefaults:m=!0,mergeDefaults:g=!1,shallow:_,window:v=z,eventFilter:i,onError:f=a=>{console.error(a)},initOnMounted:w}=s,$=(_?_e:C)(typeof t=="function"?t():t);if(!n)try{n=Ze("getDefaultStorage",()=>{var a;return(a=z)==null?void 0:a.localStorage})()}catch(a){f(a)}if(!n)return $;const L=J(t),U=Be(L),O=(r=s.serializer)!=null?r:ze[U],{pause:ue,resume:K}=Fe($,()=>de($.value),{flush:d,deep:h,eventFilter:i});v&&c&&je(()=>{N(v,"storage",I),N(v,G,pe),w&&I()}),w||I();function X(a,b){v&&v.dispatchEvent(new CustomEvent(G,{detail:{key:e,oldValue:a,newValue:b,storageArea:n}}))}function de(a){try{const b=n.getItem(e);if(a==null)X(b,null),n.removeItem(e);else{const S=O.write(a);b!==S&&(n.setItem(e,S),X(b,S))}}catch(b){f(b)}}function fe(a){const b=a?a.newValue:n.getItem(e);if(b==null)return m&&L!=null&&n.setItem(e,O.write(L)),L;if(!a&&g){const S=O.read(b);return typeof g=="function"?g(S,L):U==="object"&&!Array.isArray(S)?{...L,...S}:S}else return typeof b!="string"?b:O.read(b)}function I(a){if(!(a&&a.storageArea!==n)){if(a&&a.key==null){$.value=L;return}if(!(a&&a.key!==e)){ue();try{(a==null?void 0:a.newValue)!==O.write($.value)&&($.value=fe(a))}catch(b){f(b)}finally{a?ee(K):K()}}}}function pe(a){I(a.detail)}return $}const Ve=ne("darkMode",()=>{const e=R("darkMode",C(!1));document.documentElement.classList.toggle("dark",e.value);function t(){e.value=!e.value,document.documentElement.classList.toggle("dark",e.value)}return{darkMode:e,toggleDarkMode:t}}),We={},Re={class:"dark:hidden"};function qe(e,t){return u(),p("span",Re,t[0]||(t[0]=[o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M7.99992 12.6666C10.5772 12.6666 12.6666 10.5772 12.6666 7.99992C12.6666 5.42259 10.5772 3.33325 7.99992 3.33325C5.42259 3.33325 3.33325 5.42259 3.33325 7.99992C3.33325 10.5772 5.42259 12.6666 7.99992 12.6666Z",fill:"#969AA1"}),o("path",{d:"M8.00008 15.3067C7.63341 15.3067 7.33342 15.0334 7.33342 14.6667V14.6134C7.33342 14.2467 7.63341 13.9467 8.00008 13.9467C8.36675 13.9467 8.66675 14.2467 8.66675 14.6134C8.66675 14.9801 8.36675 15.3067 8.00008 15.3067ZM12.7601 13.4267C12.5867 13.4267 12.4201 13.3601 12.2867 13.2334L12.2001 13.1467C11.9401 12.8867 11.9401 12.4667 12.2001 12.2067C12.4601 11.9467 12.8801 11.9467 13.1401 12.2067L13.2267 12.2934C13.4867 12.5534 13.4867 12.9734 13.2267 13.2334C13.1001 13.3601 12.9334 13.4267 12.7601 13.4267ZM3.24008 13.4267C3.06675 13.4267 2.90008 13.3601 2.76675 13.2334C2.50675 12.9734 2.50675 12.5534 2.76675 12.2934L2.85342 12.2067C3.11342 11.9467 3.53341 11.9467 3.79341 12.2067C4.05341 12.4667 4.05341 12.8867 3.79341 13.1467L3.70675 13.2334C3.58008 13.3601 3.40675 13.4267 3.24008 13.4267ZM14.6667 8.66675H14.6134C14.2467 8.66675 13.9467 8.36675 13.9467 8.00008C13.9467 7.63341 14.2467 7.33342 14.6134 7.33342C14.9801 7.33342 15.3067 7.63341 15.3067 8.00008C15.3067 8.36675 15.0334 8.66675 14.6667 8.66675ZM1.38675 8.66675H1.33341C0.966748 8.66675 0.666748 8.36675 0.666748 8.00008C0.666748 7.63341 0.966748 7.33342 1.33341 7.33342C1.70008 7.33342 2.02675 7.63341 2.02675 8.00008C2.02675 8.36675 1.75341 8.66675 1.38675 8.66675ZM12.6734 3.99341C12.5001 3.99341 12.3334 3.92675 12.2001 3.80008C11.9401 3.54008 11.9401 3.12008 12.2001 2.86008L12.2867 2.77341C12.5467 2.51341 12.9667 2.51341 13.2267 2.77341C13.4867 3.03341 13.4867 3.45341 13.2267 3.71341L13.1401 3.80008C13.0134 3.92675 12.8467 3.99341 12.6734 3.99341ZM3.32675 3.99341C3.15341 3.99341 2.98675 3.92675 2.85342 3.80008L2.76675 3.70675C2.50675 3.44675 2.50675 3.02675 2.76675 2.76675C3.02675 2.50675 3.44675 2.50675 3.70675 2.76675L3.79341 2.85342C4.05341 3.11342 4.05341 3.53341 3.79341 3.79341C3.66675 3.92675 3.49341 3.99341 3.32675 3.99341ZM8.00008 2.02675C7.63341 2.02675 7.33342 1.75341 7.33342 1.38675V1.33341C7.33342 0.966748 7.63341 0.666748 8.00008 0.666748C8.36675 0.666748 8.66675 0.966748 8.66675 1.33341C8.66675 1.70008 8.36675 2.02675 8.00008 2.02675Z",fill:"#969AA1"})],-1)]))}const Je=le(We,[["render",qe]]),Ue={},Ke={class:"hidden dark:inline-block"};function Xe(e,t){return u(),p("span",Ke,t[0]||(t[0]=[o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M14.3533 10.62C14.2466 10.44 13.9466 10.16 13.1999 10.2933C12.7866 10.3667 12.3666 10.4 11.9466 10.38C10.3933 10.3133 8.98659 9.6 8.00659 8.5C7.13993 7.53333 6.60659 6.27333 6.59993 4.91333C6.59993 4.15333 6.74659 3.42 7.04659 2.72666C7.33993 2.05333 7.13326 1.7 6.98659 1.55333C6.83326 1.4 6.47326 1.18666 5.76659 1.48C3.03993 2.62666 1.35326 5.36 1.55326 8.28666C1.75326 11.04 3.68659 13.3933 6.24659 14.28C6.85993 14.4933 7.50659 14.62 8.17326 14.6467C8.27993 14.6533 8.38659 14.66 8.49326 14.66C10.7266 14.66 12.8199 13.6067 14.1399 11.8133C14.5866 11.1933 14.4666 10.8 14.3533 10.62Z",fill:"#969AA1"})],-1)]))}const Ye=le(Ue,[["render",Xe]]),Ge=k({__name:"DarkModeSwitcher",setup(e){const t=Ve();return(n,s)=>(u(),p("label",{class:y([{"bg-purple-800":l(t).darkMode,"bg-stroke":!l(t).darkMode},"relative m-0 block h-7.5 w-14 rounded-full"]),onClick:s[0]||(s[0]=(...r)=>l(t).toggleDarkMode&&l(t).toggleDarkMode(...r))},[s[1]||(s[1]=o("input",{type:"checkbox",class:"absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"},null,-1)),o("span",{class:y([{"right-1 translate-x-full":l(t).darkMode},"absolute top-1/2 left-1 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear"])},[x(Je),x(Ye)],2)],2))}}),Qe={class:"hidden text-right lg:block"},et={class:"block text-sm font-medium text-black dark:text-white"},tt={class:"block text-xs font-medium"},nt=k({__name:"DropdownUser",setup(e){const t=C(null),n=C(!1),s=H.getUser(),r=se().request,d=ve();ce(t,()=>{n.value=!1});const h=async()=>{await r.store("/logout").then(c=>{c.status?(H.destroyToken(),H.destroyUser(),d.push("/")):Se.show("error","logout-failed")})};return(c,m)=>{const g=V("router-link");return u(),p("div",{class:"relative",ref_key:"target",ref:t},[x(g,{class:"flex items-center gap-4",to:"#",onClick:m[0]||(m[0]=oe(_=>n.value=!n.value,["prevent"]))},{default:q(()=>[o("span",Qe,[o("span",et,M(l(s).nome),1),o("span",tt,M(l(s).email),1)]),o("button",{onClick:h,class:"ml-10 underline pointer dark:text-red"},"Sair")]),_:1})],512)}}}),A=ne("sidebar",()=>{const e=C(!1),t=R("selected",C("eCommerce")),n=R("page",C("Dashboard"));function s(){e.value=!e.value}return{isSidebarOpen:e,toggleSidebar:s,selected:t,page:n}}),st={class:"relative block h-5.5 w-5.5 cursor-pointer"},ot={class:"du-block absolute right-0 h-full w-full"},rt={class:"du-block absolute right-0 h-full w-full rotate-45"},lt=k({__name:"HeaderHamburgerButton",setup(e){const{isSidebarOpen:t,toggleSidebar:n}=A();return(s,r)=>(u(),p("button",{class:"z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden",onClick:r[0]||(r[0]=()=>l(n)())},[o("span",st,[o("span",ot,[o("span",{class:y(["relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white",{"!w-full delay-300":!l(t)}])},null,2),o("span",{class:y(["relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white",{"!w-full delay-400":!l(t)}])},null,2),o("span",{class:y(["relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white",{"!w-full delay-500":!l(t)}])},null,2)]),o("span",rt,[o("span",{class:y(["absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white",{"!h-0 delay-[0]":!l(t)}])},null,2),o("span",{class:y(["delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white",{"!h-0 dealy-200":!l(t)}])},null,2)])])]))}}),at={class:"sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"},it={class:"flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11"},ct={class:"flex items-center gap-2 sm:gap-4 lg:hidden"},ut={class:"flex flex-row w-full"},dt={class:"uppercase text-lg text-slate-900 font-bolder dark:text-white"},ft={class:"flex flex-row w-full justify-end gap-3 2xsm:gap-7"},pt={class:"flex items-center gap-2 2xsm:gap-4"},mt=k({__name:"HeaderArea",setup(e){const t=se().getTitle;return(n,s)=>{const r=V("HeaderLogoSmartphone");return u(),p("header",at,[o("div",it,[o("div",ct,[x(lt),x(r)]),o("div",ut,[o("p",dt,M(l(T).to(l(t))),1)]),o("div",ft,[o("ul",pt,[s[0]||(s[0]=o("li",null,null,-1)),o("li",null,[x(Ge)])]),x(nt)])])])}}}),gt=[{name:"admin",permission:"administrador",menuItems:[{icon:"",label:"users",route:"/user/list"},{icon:"",label:"user-type",route:"/user/type/list"},{icon:"",label:"permission",route:"/permission/list"}]},{name:"dashboard",permission:"assinante",menuItems:[{icon:"",label:"services-calendar",route:"/services/calendar"},{icon:"",label:"service-order",route:"/service-order/list"},{icon:"",label:"services",route:"/service/list"},{icon:"",label:"client",route:"/client/list"},{icon:"",label:"equipment",route:"/equipment/list"},{icon:"",label:"report",route:"/report"}]}],ht={class:"mt-4 mb-5.5 flex flex-col gap-2.5 pl-6"},bt=k({__name:"SidebarDropdown",props:["items","page"],setup(e){const t=A(),n=e,s=C(n.items),r=d=>{const h=t.selected===n.items[d].label?"":n.items[d].label;t.selected=h};return(d,h)=>{const c=V("router-link");return u(),p("ul",ht,[(u(!0),p(E,null,P(s.value,(m,g)=>(u(),p("li",{key:g},[x(c,{to:m.route,onClick:_=>r(g),class:y(["group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-slate-300 duration-300 ease-in-out hover:text-white",{"!text-white":m.label===l(t).selected}])},{default:q(()=>[re(M(l(T).to(m.label)),1)]),_:2},1032,["to","onClick","class"])]))),128))])}}}),wt=k({__name:"IconBottomArrow",props:{label:String},setup(e){const t=A();return(n,s)=>(u(),p("svg",{class:y(["absolute right-4 top-1/2 -translate-y-1/2 fill-current",{"rotate-180":l(t).page===e.label}]),width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s[0]||(s[0]=[o("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z",fill:""},null,-1)]),2))}}),_t=["innerHTML"],vt={class:"translate transform overflow-hidden"},Q=k({__name:"SidebarItem",props:["item","index"],setup(e){const t=A(),n=e,s=xe().name,r=()=>{const d=t.page===n.item.label?"":n.item.label;if(t.page=d,n.item.children)return n.item.children.some(h=>t.selected===h.label)};return(d,h)=>{const c=V("router-link");return u(),p("li",null,[x(c,{to:e.item.route,class:y(["group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out",{"bg-slate-700":l(t).page===e.item.label}]),onClick:oe(r,["prevent"])},{default:q(()=>[o("span",{innerHTML:e.item.icon},null,8,_t),re(" "+M(l(T).to(e.item.label))+" ",1),e.item.children?(u(),B(wt,{key:0,label:e.item.label},null,8,["label"])):W("",!0)]),_:1},8,["to","class"]),ye(o("div",vt,[e.item.children?(u(),B(bt,{key:0,items:e.item.children,currentPage:l(s),page:e.item.label},null,8,["items","currentPage","page"])):W("",!0)],512),[[Ce,l(t).page===e.item.label]])])}}}),xt=k({__name:"SidebarReturnButton",setup(e){const t=A();return(n,s)=>(u(),p("button",{class:"block lg:hidden",onClick:s[0]||(s[0]=r=>l(t).isSidebarOpen=!1)},s[1]||(s[1]=[o("svg",{class:"fill-current",width:"20",height:"18",viewBox:"0 0 20 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[o("path",{d:"M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z",fill:""})],-1)])))}}),yt={class:"flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5"},Ct={class:"overflow-scroll flex flex-col overflow-y-auto duration-300 ease-linear"},kt={class:"mt-5 py-4 px-4 lg:mt-9 lg:px-6"},St={key:0},$t={class:"mb-4 ml-4 text-md font-medium text-slate-300 uppercase"},Lt={class:"mb-6 flex flex-col gap-1.5 text-sm"},Mt={key:1},At={class:"mb-4 ml-4 text-md font-medium text-slate-300 uppercase"},Ot={class:"mb-6 flex flex-col gap-1.5 text-sm"},Et=k({__name:"SidebarArea",setup(e){const t=C(null),n=A(),s=H.getUser();ce(t,()=>{n.isSidebarOpen=!1});const r=C(gt);return(d,h)=>(u(),p("aside",{class:y(["absolute left-0 top-0 z-9999 flex h-screen w-75.5 flex-col overflow-y-hidden bg-slate-800 duration-300 ease-linear lg:static lg:translate-x-0",{"translate-x-0":l(n).isSidebarOpen,"-translate-x-full":!l(n).isSidebarOpen}]),ref_key:"target",ref:t},[o("div",yt,[x($e,{w:"150",h:"100"}),x(xt)]),o("div",Ct,[o("nav",kt,[(u(!0),p(E,null,P(r.value,c=>(u(),p(E,{key:c.name},[l(s).tipo.toLowerCase()=="administrador"?(u(),p("div",St,[o("h3",$t,M(l(T).to(c.name)),1),o("ul",Lt,[(u(!0),p(E,null,P(c.menuItems,(m,g)=>(u(),B(Q,{item:m,key:g,index:g},null,8,["item","index"]))),128))])])):c.permission.toLowerCase()==l(s).tipo.toLowerCase()?(u(),p("div",Mt,[o("h3",At,M(l(T).to(c.name)),1),o("ul",Ot,[(u(!0),p(E,null,P(c.menuItems,(m,g)=>(u(),B(Q,{item:m,key:g,index:g},null,8,["item","index"]))),128))])])):W("",!0)],64))),128))])])],2))}}),Dt={class:"flex h-screen overflow-hidden"},Nt={class:"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"},Tt={class:"mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"},jt=k({__name:"DefaultLayout",setup(e){return(t,n)=>(u(),p("div",Dt,[x(Et),o("div",Nt,[x(mt),o("main",null,[o("div",Tt,[ke(t.$slots,"default")])])])]))}});export{jt as _};
