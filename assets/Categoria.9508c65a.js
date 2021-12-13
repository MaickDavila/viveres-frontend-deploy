import{_ as e}from"./DataTableComponent.a9d13bd4.js";import{g as o,r as t,l,o as s,w as a,x as r,i as n,h as i,y as d,t as u,z as m,A as g,B as p}from"./vendor.a51b8ffa.js";import{t as c}from"./style.7d124276.js";import{u as v}from"./categoria.ef46cf96.js";import{u as h}from"./utils.08d0e0c0.js";import"./app.1c80cf5c.js";const x=i("svg",{id:"Capa_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"170",viewBox:"0 0 464.98 464.98",style:{"enable-background":"new 0 0 464.98 464.98"},"xml:space":"preserve"},[i("g",{id:"XMLID_4_"},[i("g",null,[i("polygon",{style:{fill:"#3A75AA"},points:"415.795,273.63 415.795,334.14 389.855,307.64 389.855,247.13"}),i("polygon",{style:{fill:"#3A75AA"},points:"156.745,9 188.975,41.93 87.355,41.93 87.355,73.37 49.185,73.37 49.185,9"}),i("polygon",{style:{fill:"#4489D3"},points:"415.795,436.01 415.795,455.98 49.185,455.98 49.185,82.37 156.735,82.37 415.795,347"}),i("polygon",{style:{fill:"#FFCC73"},points:"380.855,50.93 380.855,298.44 292.465,208.16 343.435,208.16 343.435,199.16\r\n283.655,199.16 248.005,162.73 343.435,162.73 343.435,153.73 239.185,153.73 203.545,117.32 343.435,117.32 343.435,108.32\r\n194.735,108.32 160.525,73.37 96.355,73.37 96.355,50.93"}),i("path",{d:"M424.795,343.34v121.64H40.185V0h120.34l41.05,41.93h188.28v192.33l34.94,35.7v73.37V343.34z M415.795,455.98v-19.97V347\r\nL156.735,82.37H49.185v373.61H415.795z M415.795,334.14v-60.51l-25.94-26.5v60.51L415.795,334.14z M380.855,298.44V50.93h-284.5\r\nv22.44h64.17l34.21,34.95h148.7v9h-139.89l35.64,36.41h104.25v9h-95.43l35.65,36.43h59.78v9h-50.97L380.855,298.44z\r\n M188.975,41.93L156.745,9H49.185v64.37h38.17V41.93H188.975z"})])]),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g"),i("g")],-1),b={class:"row-span-2"},f={class:"text-2xl font-semibold text-black uppercase"},w={class:"text-gray-500"},y=["onSubmit"],M={class:"form-container mt-3 h-full"},N=i("label",{for:"txtNombre",class:"form-label"},"Nombre:",-1),k=i("input",{type:"submit",class:"hidden"},null,-1),A=o({setup(o){const A=v(),E=t(!1),I=t(!1),C=h();l((()=>{A.setData()}));const D=e=>{A.filterData(e)},F=e=>{A.setPageIndex(e)},V=()=>{A.clearModel(),C.setFocusInput("txtNombre")},j=({id:e,Nombre:o})=>{e?(E.value=!0,A.clearModel(),A.storeModel.id=e,A.storeModel.Nombre=o,C.setFocusInput("txtNombre")):E.value=!1},z=async()=>{let e="",o="",t=!0;if(A.isValidFormModel){I.value=!0;await A.saveData()?(e="Exitoso",o="El registro se ha guardado correctamente",E.value=!1):(e="Error",o="No se pudo guardar el registro")}else e="Error",o="Ingrese los valores del Formulario",t=!1;c({title:e,description:o},{type:t?"success":"danger",timeout:3e3,position:"bottom-right",hideProgressBar:!0}),I.value=!1},L=e=>{E.value=e};return(o,t)=>{const l=e;return s(),a(l,{columns:n(A).getColumns,data:n(A).getData||[],count:n(A).getCounts,titulo:n(A).keyModel,subtitulo:`Listado de ${n(A).keyModel}s`,"page-index":n(A).getPageIndex,"show-modal":E.value,"modal-width":"30rem","modal-height":"20rem","show-loading":I.value,onAddEvent:V,onUpdateEvent:j,onFilterEvent:D,onPageIndex:F,onNext:t[1]||(t[1]=e=>n(A).setNext()),onPrevius:t[2]||(t[2]=e=>n(A).setPrevius()),onModalIsOpen:L},{imagen:r((()=>[x])),cabecera:r((()=>[i("div",b,[i("h1",f,[d(u(n(A).storeModel.id?"Editar":"Nuevo")+" "+u(n(A).keyModel)+" ",1),i("b",w,u(n(A).storeModel.id),1)])])])),cuerpo:r((()=>[i("form",{class:"form-container h-[100%] w-full flex flex-col",onSubmit:p(z,["prevent"])},[i("div",M,[N,m(i("input",{id:"txtNombre","onUpdate:modelValue":t[0]||(t[0]=e=>n(A).storeModel.Nombre=e),autofocus:"",type:"text",class:"form-input sm:w-full lg:w-[100%]",placeholder:"Nombre",required:""},null,512),[[g,n(A).storeModel.Nombre]])]),k],40,y)])),acciones:r((()=>[i("button",{class:"btn-submit text-white font-bold py-2 px-4 rounded-lg",onClick:z}," Guardar ")])),_:1},8,["columns","data","count","titulo","subtitulo","page-index","show-modal","show-loading"])}}});export{A as default};
