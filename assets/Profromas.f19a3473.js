import{_ as e}from"./InputSearch.41f6a111.js";import{_ as o}from"./auto-download.09371c7b.js";import{_ as t,a,b as r}from"./DataTableComponent.a9d13bd4.js";import{g as l,r as s,l as i,o as d,d as n,q as u,x as c,i as p,F as m,h as v,y as g,t as f,j as b,m as h,n as w,B as y,z as x,K as P,A as _}from"./vendor.a51b8ffa.js";import{t as M}from"./style.7d124276.js";import{u as k,a as F}from"./notasDetalles.860ec3f4.js";import{u as C}from"./proceso.a128cdb5.js";import{u as D}from"./producto.449856a0.js";import{u as I}from"./utils.08d0e0c0.js";import{u as B}from"./lote.b3e6f550.js";import"./app.1c80cf5c.js";const L=v("svg",{id:"Capa_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"170",viewBox:"0 0 464.98 464.98",style:{"enable-background":"new 0 0 464.98 464.98"},"xml:space":"preserve"},[v("g",{id:"XMLID_4_"},[v("g",null,[v("polygon",{style:{fill:"#3A75AA"},points:"415.795,273.63 415.795,334.14 389.855,307.64 389.855,247.13"}),v("polygon",{style:{fill:"#3A75AA"},points:"156.745,9 188.975,41.93 87.355,41.93 87.355,73.37 49.185,73.37 49.185,9"}),v("polygon",{style:{fill:"#4489D3"},points:"415.795,436.01 415.795,455.98 49.185,455.98 49.185,82.37 156.735,82.37 415.795,347"}),v("polygon",{style:{fill:"#FFCC73"},points:"380.855,50.93 380.855,298.44 292.465,208.16 343.435,208.16 343.435,199.16\r\n283.655,199.16 248.005,162.73 343.435,162.73 343.435,153.73 239.185,153.73 203.545,117.32 343.435,117.32 343.435,108.32\r\n194.735,108.32 160.525,73.37 96.355,73.37 96.355,50.93"}),v("path",{d:"M424.795,343.34v121.64H40.185V0h120.34l41.05,41.93h188.28v192.33l34.94,35.7v73.37V343.34z M415.795,455.98v-19.97V347\r\nL156.735,82.37H49.185v373.61H415.795z M415.795,334.14v-60.51l-25.94-26.5v60.51L415.795,334.14z M380.855,298.44V50.93h-284.5\r\nv22.44h64.17l34.21,34.95h148.7v9h-139.89l35.64,36.41h104.25v9h-95.43l35.65,36.43h59.78v9h-50.97L380.855,298.44z\r\n M188.975,41.93L156.745,9H49.185v64.37h38.17V41.93H188.975z"})])]),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g"),v("g")],-1),N={class:"row-span-2"},V={class:"text-2xl font-semibold text-black uppercase"},U={class:"text-gray-500"},j={key:0,class:"text-xs text-red-500"},E={class:"h-[100%] w-full flex flex-col overflow-y-auto"},S={class:"row-span-1"},A=["onClick"],O={class:"bg-white row-span-10 overflow-y-auto h-full w-full"},z={class:"form-container"},H=v("label",{for:"proceso",class:"form-label"},"Proceso",-1),q={key:0},G=["value"],K={key:1,class:"w-full flex flex-col"},R={class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white"},T={class:"form-container"},X=v("label",{for:"observaciones",class:"form-label"},"Observaciones",-1),J=["disabled"],Q=v("input",{type:"submit",class:"hidden"},null,-1),W={class:"flex w-full text-left justify-between bg-gray-200 rounded-lg"},Y={class:"form-container w-full"},Z=v("label",{for:"lote",class:"form-label"},"Elegir un Lote para los productos",-1),$={key:0},ee=["value"],oe={key:1,class:"w-full flex flex-col"},te={class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white"},ae={class:"text-left w-full flex items-center"},re={class:"form-container"},le=v("label",{for:"lotenuevo",class:"form-label"},"ó Crear Nuevo Lote",-1),se={class:"relative flex w-full items-center row-span-1"},ie={class:"form-container"},de=v("label",{for:"cantidad",class:"form-label"},"Cantidad",-1),ne=g(" Agregar "),ue={class:"rounded-xl overflow-auto bg-white row-span-4"},ce=["onUpdate:modelValue"],pe={key:1,class:"bg-gray-200 p-2 rounded-lg text-gray-300",disabled:""},me=l({setup(l){const me=k(),ve=F(),ge=C(),fe=D(),be=I(),he=B(),we=s(!1),ye=s({}),xe=s({}),Pe=s(!1),_e=s(0),Me=s(!1),ke=s(""),Fe=s(0),Ce=["Lista de Productos","Proforma"],De=s(!1);i((()=>{me.filterData("")}));const Ie=e=>{me.filterData(e)},Be=async()=>{xe.value={},me.clearModel(),ve.clearModel();const e=await ge.setProcesoActivo();if(!e)return M({title:"No tienes procesos disponibles",description:"Habra un proceso por favor! 👍😊"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(we.value=!1);xe.value=e,he.filterData(""),await fe.get_productos_for_notas_compras(""),me.storeModel.Proceso=e.id,Fe.value=0,be.setFocusInput("inputSearch")},Le=async({Id:e,Proceso_Id:o,Proceso_Nombre:t,Serie:a,Fecha:r,Observaciones:l,Lote_Id:s,Lote_Nombre:i})=>{if(!e)return void(we.value=!1);De.value=!0;const d=await ge.setProcesoActivo();(null==d?void 0:d.id)!==o&&(Pe.value=!0),we.value=!0,xe.value={},me.clearModel(),ve.clearModel(),await he.filterData(""),xe.value.id=o,xe.value.Nombre=t,me.storeModel.id=e,me.storeModel.Proceso=o,me.storeModel.Serie=a,me.storeModel.Fecha=r,me.storeModel.Observaciones=l,me.storeModel.Lote=s;ve.get_nota_detalles_by_nota_id(e)||M({title:"Ocurrio un problema",description:"El pedido no tiene ningun producto!"},{type:"danger",hideProgressBar:!0,position:"bottom-right"}),Fe.value=0,be.setFocusInput("inputSearch"),De.value=!1},Ne=()=>me.isValidFormModel?ve.isValidFormModel?void(Me.value=!0):(M({title:"Formulario incompleto",description:"Por favor ingrese los productos al pedido"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(Me.value=!1)):(M({title:"Formulario incompleto",description:"Por favor completa todos los campos"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(Me.value=!1)),Ve=async()=>{if(De.value=!0,!me.isValidFormModel)return void M({title:"Formulario incompleto",description:"Por favor completa todos los campos"},{type:"info",hideProgressBar:!0,position:"bottom-right"});if(!ve.isValidFormModel)return void M({title:"Formulario incompleto",description:"Por favor ingrese los productos al pedido"},{type:"info",hideProgressBar:!0,position:"bottom-right"});const e=await me.saveData();if(!e)return void M({title:"Error al guardar",description:"Por favor intenta nuevamente"},{type:"danger",hideProgressBar:!0,position:"bottom-right"});await ve.saveData(e.id)?(M({title:"Guardado",description:"Pedido guardado correctamente"},{type:"success",hideProgressBar:!0,position:"bottom-right"}),De.value=we.value=Me.value=!1,me.filterData("")):M({title:"Error al guardar",description:"No se pudieron guardar los productos del pedido"},{type:"danger",hideProgressBar:!0,position:"bottom-right"})},Ue=e=>{we.value=e},je=async e=>{await fe.get_productos_for_notas_compras(e)},Ee=e=>{ye.value=e,setTimeout((()=>{be.setFocusInput("cantidad")}),100)},Se=async()=>{if(!ye.value.Id)return void M({title:"Seleccione un producto",description:"Por favor!"},{type:"info",hideProgressBar:!0,position:"bottom-right"});if(!_e.value)return void M({title:"Ingrese la cantidad",description:"Por favor!"},{type:"info",hideProgressBar:!0,position:"bottom-right"});const e={Id:0,Nota:0,Producto_Id:ye.value.Id,Producto_Nombre:ye.value.Producto_Nombre,Unidad_Id:ye.value.Unidad_Id,Unidad_Nombre:ye.value.Unidad_Nombre,Factor:ye.value.Factor,Cantidad:_e.value};if(ve.ExistProductoUnidad(e.Producto_Id,e.Unidad_Id))return M({title:"El producto ya está en la lista!"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),ye.value={},_e.value=0,void be.setFocusInput("inputSearch");ve.addList(e)?(ye.value={},_e.value=0,be.setFocusButton("inputSearch")):M({title:"No se pudo agregar el producto"},{type:"info",hideProgressBar:!0,position:"bottom-right"})},Ae=e=>{"Enter"===e.key&&Se()},Oe=e=>{ve.deleteData(e)},ze=async()=>{var e;if(he.storeModel.id=0,he.storeModel.Nombre=ke.value,!he.isValidFormModel)return void M({title:"Error",description:"Ingrese el nombre del lote"},{type:"danger",hideProgressBar:!0,position:"bottom-right"});const o=await he.saveData();o?(M({title:"Exitoso",description:"Lote guardado correctamente!"},{type:"success",hideProgressBar:!0,position:"bottom-right"}),await he.setData(),me.storeModel.Lote=(null==(e=he.getData.find((e=>e.id===o.id)))?void 0:e.id)||0):M({title:"No se pudo guardar el lote"},{type:"danger",hideProgressBar:!0,position:"bottom-right"})};return(l,s)=>{const i=e,M=o,k=r,F=t,C=a;return d(),n(m,null,[u(F,{columns:p(me).getColumns,data:p(me).getData||[],count:p(me).getCounts,titulo:"Proformas",subtitulo:"Lista de Proformas","page-index":p(me).getPageIndex,"show-modal":we.value,"modal-width":"50rem","modal-height":"90%","show-loading":De.value,onAddEvent:Be,onUpdateEvent:Le,onFilterEvent:Ie,onModalIsOpen:Ue},{imagen:c((()=>[L])),cabecera:c((()=>[v("div",N,[v("h1",V,[g(f(p(me).storeModel.id?"Editar":"Nueva")+" "+f("Orden de Compra")+" ",1),v("b",U,f(p(me).storeModel.id),1)]),Pe.value?(d(),n("div",j," Registro de solo lectura ")):b("",!0)])])),cuerpo:c((()=>[v("div",E,[v("section",S,[(d(),n(m,null,h(Ce,((e,o)=>v("button",{key:o,class:w(["text-gray-600 focus:outline-none font-medium rounded-lg p-2 text-xs",{"border-green-500 border-b-2 shadow-lg transition  duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100":Fe.value===o," rounded-none rounded-r-lg":0==o}]),onClick:e=>Fe.value=o},f(e),11,A))),64))]),v("section",O,[v("form",{class:w(["form-container w-full h-full p-3",1==Fe.value?"grid":"hidden"]),onSubmit:s[2]||(s[2]=y((()=>{}),["prevent"]))},[v("div",z,[H,Pe.value?(d(),n("div",K,[v("span",R,f(xe.value.Nombre),1)])):(d(),n("div",q,[x(v("select",{id:"proceso","onUpdate:modelValue":s[0]||(s[0]=e=>p(me).storeModel.Proceso=e),class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white",required:""},[(d(!0),n(m,null,h([xe.value],((e,o)=>(d(),n("option",{key:o,value:e.id,class:"text-gray-700","aria-readonly":"true"},f(e.Nombre),9,G)))),128))],512),[[P,p(me).storeModel.Proceso]])]))]),v("div",T,[X,x(v("textarea",{id:"observaciones","onUpdate:modelValue":s[1]||(s[1]=e=>p(me).storeModel.Observaciones=e),class:"form-input w-full focus:text-black bg-white text-gray-500",disabled:Pe.value},null,8,J),[[_,p(me).storeModel.Observaciones]])]),Q],34),v("section",{class:w(["form-container h-full p-3 grid grid-rows-5",0==Fe.value?"flex":"hidden"])},[v("div",W,[v("div",Y,[Z,Pe.value?(d(),n("div",oe,[v("span",te,f(xe.value.Nombre),1)])):(d(),n("div",$,[x(v("select",{id:"lote","onUpdate:modelValue":s[3]||(s[3]=e=>p(me).storeModel.Lote=e),class:"form-input w-full focus:text-black bg-green-500 text-white",required:""},[(d(!0),n(m,null,h(p(he).getData,((e,o)=>(d(),n("option",{key:o,value:e.id,class:"text-gray-700","aria-readonly":"true"},f(e.Nombre),9,ee)))),128))],512),[[P,p(me).storeModel.Lote]])]))]),v("div",ae,[v("div",re,[le,x(v("input",{id:"lotenuevo","onUpdate:modelValue":s[4]||(s[4]=e=>ke.value=e),class:"form-input w-full focus:text-black bg-white text-gray-500"},null,512),[[_,ke.value]])]),v("button",{class:"btn-primary w-24 text-xs",onClick:ze}," Guardar Lote ")])]),v("div",se,[u(i,{field:ye.value,"place-holder":"Buscar el producto",class:"w-[50%]",data:p(fe).getProductosProcesoLote,"column-label":"Producto_Nombre_Unidad",onSelected:Ee,onSearch:je},null,8,["field","data"]),v("div",ie,[de,x(v("input",{id:"cantidad","onUpdate:modelValue":s[5]||(s[5]=e=>_e.value=e),class:"form-input w-full focus:text-black bg-white text-gray-500",type:"number",min:"0",step:"1",onKeydown:Ae},null,544),[[_,_e.value]])]),v("div",null,[v("button",{class:"btn-submit bg-white border border-blue-500 text-blue-500 text-xs flex gap-2",onClick:Se},[u(M),ne])])]),v("section",ue,[u(k,{columns:p(ve).getColumns,data:p(ve).storeData,actions:!0,class:"row-span-4","link-id":!1,onDeleteRow:Oe},{Cantidad:c((({index:e})=>[x(v("input",{"onUpdate:modelValue":o=>p(ve).storeData[e].Cantidad=o,type:"number",class:"form-input text-center w-24"},null,8,ce),[[_,p(ve).storeData[e].Cantidad]])])),_:1},8,["columns","data"])])],2)])])])),acciones:c((()=>[Pe.value?(d(),n("button",pe," Solo Lectura ")):(d(),n("button",{key:0,class:"btn-submit text-white font-bold py-2 px-4 rounded-lg",onClick:Ne}," Guardar "))])),_:1},8,["columns","data","count","page-index","show-modal","show-loading"]),u(C,{"show-modal":Me.value,"modal-width":"20rem","modal-height":"10rem",description:"Seguro que desea guardar los datos?",onConfirm:Ve,onCancel:s[6]||(s[6]=e=>Me.value=!1)},null,8,["show-modal"])],64)}}});export{me as default};
