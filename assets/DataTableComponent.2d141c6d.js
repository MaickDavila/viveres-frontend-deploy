import{o as e,d as t,e as l,h as s,r as a,A as n,t as i,n as r,F as o,l as d,B as u,k as c,j as m,C as p,g,x as f,y as x,D as w,E as v}from"./vendor.9b92c9a3.js";import{u as h}from"./utils.068ea219.js";import{_ as b}from"./app.8a0ecd40.js";const y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},k=[l("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z",fill:"currentColor"},null,-1)];var C={name:"ic-sharp-search",render:function(l,s){return e(),t("svg",y,k)}};const M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},L=[l("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z",fill:"currentColor"},null,-1)];var A={name:"ic-baseline-add-circle-outline",render:function(l,s){return e(),t("svg",M,L)}};const j={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},B=[l("path",{d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8z",fill:"currentColor"},null,-1)];var S={name:"mdi-trash-can",render:function(l,s){return e(),t("svg",j,B)}};const q={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},z=l("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true"},null,-1),R=l("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"​",-1),H={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},E={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},I={class:"sm:flex sm:items-start"},V={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},$={id:"modal-title",class:"text-lg leading-6 font-medium text-gray-900"},T={class:"mt-2"},Y={class:"text-sm text-gray-500"},_={class:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},F=s({props:{title:{type:String,default:"¿Está seguro?"},description:{type:String,default:"Estas seguro que deseas continuar?"},confirmText:{type:String,default:"Aceptar"},cancelText:{type:String,default:"Cancelar"},modalWidth:{type:String,default:"20rem"},modalHeight:{type:String,default:"10rem"},showModal:{type:Boolean,default:!1}},emits:["confirm","cancel"],setup(s,{emit:o}){const d=s,u=a(!1),c=h(),m=e=>{e?o("confirm"):(u.value=!1,o("cancel"))};return n(u,(e=>{e||m(!1),e&&c.setFocusButton("btnConfirm")})),n(d,(()=>{u.value=d.showModal,u.value||o("cancel")})),(s,a)=>(e(),t("div",{class:r([u.value?"block":"hidden","fixed z-10 inset-0 overflow-y-auto"]),"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},[l("div",q,[z,R,l("div",H,[l("div",E,[l("div",I,[l("div",V,[l("h3",$,i(d.title),1),l("div",T,[l("p",Y,i(d.description),1)])])])]),l("div",_,[l("button",{type:"button",class:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:a[0]||(a[0]=e=>m(!1))},i(d.cancelText),1),l("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:a[1]||(a[1]=e=>m(!0))},i(d.confirmText),1)])])])],2))}});const K={class:"w-full"},W={class:"rounded-lg bg-white border-b"},N={class:"divide-y divide-gray-200 bg-white"},D=["onClick"],P={key:0,class:"text-right p-3"},U={class:"flex items-center"},G=["onClick"];var J=b(s({props:{columns:{type:Array,required:!0},data:{type:Array,required:!0},actions:{type:Boolean,default:!1},linkId:{type:Boolean,default:()=>!0}},emits:["clickRow","deleteRow"],setup(s,{emit:n}){const g=s,f=h(),x=a({}),w=a(!1),v=()=>{n("deleteRow",x.value),w.value=!1},b=()=>{x.value={},w.value=!1};return(a,h)=>{const y=S,k=F;return e(),t("table",K,[l("thead",W,[l("tr",null,[(e(!0),t(o,null,d(g.columns||[],((s,a)=>(e(),t("th",{key:a,class:"text-left p-2"},[l("span",{class:r(["w-full",`text-${s.Align}`])},i(s.Text),3)])))),128))])]),l("tbody",N,[(e(!0),t(o,null,d(g.data||[],((v,h)=>(e(),t("tr",{key:h,class:r(["hover:bg-gray-200",{"bg-gray-50 rounded-md":h%2==0}])},[(e(!0),t(o,null,d(g.columns,((s,o)=>(e(),t("td",{key:o,class:r(["text-left p-3 cursor-pointer text-sm",{"font-medium":0===o,"text-right":s.FormatMoney,"text-green-500 underline":g.linkId&&0===o}]),onClick:e=>0==o?(e=>{n("clickRow",e)})(v):null},[u(a.$slots,s.Key,{item:v[s.Key],index:h},(()=>[l("span",null,i(s.FormatMoney?c(f).textToMoney(v[s.Key]):v[s.Key]),1)]),!0)],10,D)))),128)),s.actions?(e(),t("td",P,[l("span",U,[u(a.$slots,"actions",{},(()=>[l("button",{class:"hover:text-red-400 text-gray-400",onClick:e=>(e=>{x.value=e,w.value=!0})(v)},[m(y)],8,G)]),!0)])])):p("",!0)],2)))),128))]),m(k,{"show-modal":w.value,description:"Esta seguro que desea eliminar?",onConfirm:v,onCancel:b},null,8,["show-modal"])])}}}),[["__scopeId","data-v-eb44d642"]]);const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Q=[l("path",{d:"M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12z",fill:"currentColor"},null,-1)];var X={name:"mdi-arrow-left",render:function(l,s){return e(),t("svg",O,Q)}};const Z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ee=[l("path",{d:"M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4z",fill:"currentColor"},null,-1)];var te={name:"mdi-arrow-right",render:function(l,s){return e(),t("svg",Z,ee)}};const le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},se=[l("path",{d:"M19 3H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-3.4 14L12 13.4L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7L17 8.4L13.4 12l3.6 3.6l-1.4 1.4z",fill:"currentColor"},null,-1)];var ae={name:"mdi-close-box",render:function(l,s){return e(),t("svg",le,se)}};const ne=e=>(w("data-v-25f1bdf1"),e=e(),v(),e),ie={key:0,class:"flex items-center w-full h-full bg-gray-100 opacity-50 justify-center z-99 fixed w-full h-full"},re=[ne((()=>l("div",{class:"w-10 h-10 border-l-2 border-green-500 rounded-full animate-spin"},null,-1)))],oe={id:"section",class:"rounded-lg w-full h-full grid grid-rows-12 p-2 lg:p-5"},de={class:"p-2 row-span-1 w-full flex items-center justify-between gap-5"},ue={class:"text-left"},ce={class:"text-right"},me={class:"font-bold text-2xl uppercase text-gray-600"},pe={class:"text-sm text-gray-500"},ge={class:"row-span-2 lg:row-span-1 p-2 flex justify-between items-center justify-center bg-white rounded-lg mb-2 w-full"},fe={class:"text-left lg:w-1/5 flex flex-col rounded-md bg-white"},xe=ne((()=>l("label",{for:"txtbuscar",class:"text-xs text-gray-500"},"Buscar:",-1))),we={class:"relative",for:"txtbuscar"},ve=ne((()=>l("span",null,"Buscar...",-1))),he=ne((()=>l("span",null,"Agregar",-1))),be={class:"row-span-8 lg:row-span-9 rounded-xl overflow-auto bg-white"},ye={class:"flex flex-col justify-between row-span-1"},ke=ne((()=>l("div",null,null,-1))),Ce={class:"md:w-2/5 lg:w-1/5 p-2 text-sm flex"},Me={class:"flex gap-2 text-gray-700"},Le={class:"flex gap-1 rounded-lg"},Ae=["onClick"],je={class:"flex items-center justify-center text-xs"},Be={class:"flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-full h-full overflow-y-auto"},Se=ne((()=>l("span",{class:"hidden sm:inline-block sm:align-middle sm:h-full","aria-hidden":"true"},"​",-1))),qe={class:"bg-white h-full w-full"},ze={class:"grid grid-rows-12 bg-gray-50 h-full w-full"},Re={class:"row-span-2 shadow-md flex justify-between items-center p-3"},He={class:"row-span-8 overflow-y-auto p-2"},Ee={class:"row-span-2 bg-gray-100 p-2 px-3 items-center flex items-center"};var Ie=b(s({props:{columns:{type:Array,required:!0},data:{type:Array,required:!0},count:{type:Number,required:!0,default:()=>0},titulo:{type:String,required:!1,default:()=>"Titulo"},subtitulo:{type:String,required:!1,default:()=>"Subtitulo"},pageIndex:{type:Number,required:!1,default:()=>1},showModal:{type:Boolean,required:!0,default:()=>!1},modalWidth:{type:String,required:!0,default:()=>""},modalHeight:{type:String,required:!0,default:()=>""},showLoading:{type:Boolean,required:!1,default:()=>!1}},emits:["addEvent","updateEvent","filterEvent","pageIndex","previus","next","modal-is-open"],setup(s,{emit:w}){const v=s,b=h(),y=a(""),k=a(!1);n(v,(()=>{k.value=v.showModal})),n(k,(()=>{w("modal-is-open",k.value)}));const M=g((()=>{const e=v.count/b.CountPagination;return Math.abs(Math.ceil(e))})),L=e=>{w("updateEvent",e)},j=e=>{var t;w("filterEvent",(null==(t=e.target)?void 0:t.value)||"")};return(a,n)=>{const g=C,h=A,b=J,B=X,S=te,q=ae;return e(),t(o,null,[s.showLoading?(e(),t("div",ie,re)):p("",!0),l("div",oe,[l("section",de,[l("div",ue,[u(a.$slots,"imagen",{},void 0,!0)]),l("div",ce,[l("h1",me,i(v.titulo),1),l("span",pe,i(v.subtitulo),1)])]),l("section",ge,[l("div",fe,[xe,l("label",we,[l("div",{class:r(["absolute mt-2.5 ml-2 text-gray-400 text-xs flex items-center select-none",{hidden:y.value}])},[m(g,{class:""}),ve],2),f(l("input",{id:"txtbuscar","onUpdate:modelValue":n[0]||(n[0]=e=>y.value=e),type:"text",class:"border w-full rounded-lg p-1 px-2 focus:outline-none",onInput:j},null,544),[[x,y.value]])])]),l("div",null,[l("button",{class:"btn-primary",onClick:n[1]||(n[1]=e=>{w("addEvent",!0),k.value=!k.value})},[m(h),he])])]),l("section",be,[m(b,{columns:v.columns,data:v.data,onClickRow:L},null,8,["columns","data"])]),l("section",ye,[ke,l("div",Ce,[l("div",Me,[l("button",{class:"btn-primary rounded-full w-8 h-8 bg-gray-100 text-gray-700 hover:text-white",onClick:n[2]||(n[2]=e=>w("previus"))},[m(B)]),l("div",Le,[(e(!0),t(o,null,d(c(M),(l=>(e(),t("button",{key:l,class:r(["rounded-full hover:bg-green-200 w-8 h-8 font-semibold bg-white",s.pageIndex==l?"bg-blue-500 text-white":""]),onClick:e=>{w("pageIndex",l)}},i(l),11,Ae)))),128))]),l("button",{class:"btn-primary rounded-full w-8 h-8 bg-gray-100 text-gray-700 hover:text-white",onClick:n[3]||(n[3]=e=>w("next"))},[m(S)]),l("div",je,[l("span",null,i(s.count)+" Resultados",1)])])])])]),l("div",{class:r([""+(k.value?"block":"hidden"),"fixed z-9 inset-0 w-full h-full overflow-y-auto"]),"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},[l("div",Be,[l("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity","aria-hidden":"true",onClick:n[4]||(n[4]=e=>k.value=!1)}),Se,l("div",{class:r(["inline-block align-bottom bg-white rounded-lg text-left overflow-y-auto shadow-xl transform transition-all sm:my-8 sm:align-middle w-full",`w-[${v.modalWidth}] h-[${v.modalHeight}]`])},[l("div",qe,[l("div",ze,[l("div",Re,[u(a.$slots,"cabecera",{},void 0,!0),l("div",null,[m(q,{class:"text-red-500 text-xl cursor-pointer hover:text-red-400",onClick:n[5]||(n[5]=e=>k.value=!1)})])]),l("div",He,[u(a.$slots,"cuerpo",{},void 0,!0)]),l("div",Ee,[u(a.$slots,"acciones",{},void 0,!0)])])])],2)])],2)],64)}}}),[["__scopeId","data-v-25f1bdf1"]]);export{Ie as _,F as a,J as b,te as c,X as d};
