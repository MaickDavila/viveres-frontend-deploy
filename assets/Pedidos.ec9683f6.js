import{_ as e}from"./DataTableComponent.3622d4af.js";import{f as a,r as t,g as o,h as l,i as s,o as r,s as n,w as i,k as d,e as c,v as u,t as g,x as m,Y as p,d as v,l as h,F as f,z as x}from"./vendor.431aaa16.js";import{t as y,u as b}from"./style.c4efdb2e.js";import{i as w,u as M}from"./app.50cddf9d.js";import{u as D}from"./almacen.f9bd9af4.js";import{u as A}from"./proceso.b44daf4e.js";const k=a("pedidos",(()=>{const e="pedidos",a=t({}),l=t({}),s=t(1),r=o((()=>a.value.results)),n=o((()=>a.value.count)),i=o((()=>s.value)),d=o((()=>{const{Almacen:e,Usuario:a,Proceso:t}=l.value;return e>0&&a>0&&t>0}));return{keyModel:e,storeModel:l,getData:r,getCounts:n,getColumns:[{Key:"Id",Text:"Id",Width:10},{Key:"Proceso_Nombre",Text:"Proceso",Width:10},{Key:"Serie",Text:"Serie",Width:90},{Key:"Fecha",Text:"Fecha",Width:90},{Key:"Almacen_Nombre",Text:"Almacen",Width:90},{Key:"Usuario_Nombre",Text:"Usuario",Width:90}],getPageIndex:i,isValidFormModel:d,saveData:async()=>{try{if(!d.value)return null;let e=null;return e=l.value.id?await w.put(`pedidos/${l.value.id}/`,l.value):await w.post("pedidos/",l.value),e.data}catch(e){return console.error(e),null}},filterData:async e=>{try{const{data:t}=await w.get("filter_pedidos",{params:{text:e}});return a.value=t,t}catch(t){return console.error(t),null}},clearModel:()=>{l.value={}}}})),P=c("svg",{id:"Capa_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"170",viewBox:"0 0 464.98 464.98",style:{"enable-background":"new 0 0 464.98 464.98"},"xml:space":"preserve"},[c("g",{id:"XMLID_4_"},[c("g",null,[c("polygon",{style:{fill:"#3A75AA"},points:"415.795,273.63 415.795,334.14 389.855,307.64 389.855,247.13"}),c("polygon",{style:{fill:"#3A75AA"},points:"156.745,9 188.975,41.93 87.355,41.93 87.355,73.37 49.185,73.37 49.185,9"}),c("polygon",{style:{fill:"#4489D3"},points:"415.795,436.01 415.795,455.98 49.185,455.98 49.185,82.37 156.735,82.37 415.795,347"}),c("polygon",{style:{fill:"#FFCC73"},points:"380.855,50.93 380.855,298.44 292.465,208.16 343.435,208.16 343.435,199.16\r\n283.655,199.16 248.005,162.73 343.435,162.73 343.435,153.73 239.185,153.73 203.545,117.32 343.435,117.32 343.435,108.32\r\n194.735,108.32 160.525,73.37 96.355,73.37 96.355,50.93"}),c("path",{d:"M424.795,343.34v121.64H40.185V0h120.34l41.05,41.93h188.28v192.33l34.94,35.7v73.37V343.34z M415.795,455.98v-19.97V347\r\nL156.735,82.37H49.185v373.61H415.795z M415.795,334.14v-60.51l-25.94-26.5v60.51L415.795,334.14z M380.855,298.44V50.93h-284.5\r\nv22.44h64.17l34.21,34.95h148.7v9h-139.89l35.64,36.41h104.25v9h-95.43l35.65,36.43h59.78v9h-50.97L380.855,298.44z\r\n M188.975,41.93L156.745,9H49.185v64.37h38.17V41.93H188.975z"})])]),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g"),c("g")],-1),_={class:"row-span-2"},F={class:"text-2xl font-semibold text-black uppercase"},I={class:"text-gray-500"},C=["onSubmit"],U={class:"form-container"},V=c("label",{for:"proceso",class:"form-label"},"Proceso",-1),E=["value"],T={class:"form-container"},N=c("label",{for:"almacen",class:"form-label"},"Almacen",-1),j=["value"],z=c("input",{type:"submit",class:"hidden"},null,-1),K=l({setup(a){const o=k(),l=D(),w=M(),K=A(),L=t(!1);s((()=>{o.filterData("")}));const S=e=>{o.filterData(e)},W=async()=>{var e;o.clearModel(),l.setData(),await K.setData(),o.storeModel.Proceso=null!=(e=K.getData[0].id)?e:0,o.storeModel.Usuario=w.getToken().user_id},H=async({Id:e,Serie:a,Almacen_Id:t,Usuario_Id:s,Fecha:r,Proceso_Id:n})=>{e?(await l.setData(),await K.setData(),L.value=!0,o.clearModel(),o.storeModel.id=e,o.storeModel.Proceso=n,o.storeModel.Serie=a,o.storeModel.Almacen=t,o.storeModel.Usuario=s,o.storeModel.Fecha=r):L.value=!1},q=async()=>{const e=b();e.show({color:"#34D399",width:40,height:40,container:null,canCancel:!1});let a="",t="",l=!0;if(o.isValidFormModel){await o.saveData()?(a="Exitoso",t="El registro se ha guardado correctamente",L.value=!1):(a="Error",t="No se pudo guardar el registro")}else a="Error",t="Ingrese los valores del Formulario",l=!1;y({title:a,description:t},{type:l?"success":"danger",timeout:3e3,position:"bottom-right",hideProgressBar:!0}),o.filterData(""),e.hide()},B=e=>{L.value=e};return(a,t)=>{const s=e;return r(),n(s,{columns:d(o).getColumns,data:d(o).getData||[],count:d(o).getCounts,titulo:d(o).keyModel,subtitulo:`Listado de ${d(o).keyModel}`,"page-index":d(o).getPageIndex,"show-modal":L.value,"modal-width":"50rem","modal-height":"50rem",onAddEvent:W,onUpdateEvent:H,onFilterEvent:S,onModalIsOpen:B},{imagen:i((()=>[P])),cabecera:i((()=>[c("div",_,[c("h1",F,[u(g(d(o).storeModel.id?"Editar":"Nuevo")+" "+g("Pedido")+" ",1),c("b",I,g(d(o).storeModel.id),1)])])])),cuerpo:i((()=>[c("form",{class:"flex flex-col",onSubmit:x(q,["prevent"])},[c("div",U,[V,m(c("select",{id:"proceso","onUpdate:modelValue":t[0]||(t[0]=e=>d(o).storeModel.Proceso=e),class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white",required:""},[(r(!0),v(f,null,h(d(K).getData,((e,a)=>(r(),v("option",{key:a,value:e.id,class:"text-gray-700"},g(e.Nombre),9,E)))),128))],512),[[p,d(o).storeModel.Proceso]])]),c("div",T,[N,m(c("select",{id:"almacen","onUpdate:modelValue":t[1]||(t[1]=e=>d(o).storeModel.Almacen=e),class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white",required:""},[(r(!0),v(f,null,h(d(l).getData,((e,a)=>(r(),v("option",{key:a,value:e.id,class:"text-gray-700"},g(e.Nombre),9,j)))),128))],512),[[p,d(o).storeModel.Almacen]])]),z],40,C)])),acciones:i((()=>[c("button",{class:"btn-submit text-white font-bold py-2 px-4 rounded-lg",onClick:q}," Guardar ")])),_:1},8,["columns","data","count","titulo","subtitulo","page-index","show-modal"])}}});export{K as default};
