import{e,r as t,f as a}from"./vendor.596c221c.js";import{i as d}from"./app.a2d3cf95.js";const o=e("pedidos",(()=>{const e="pedidos",o=t({}),r=t({}),l=t(1),n=a((()=>o.value.results)),i=a((()=>o.value.count)),u=a((()=>l.value)),s=a((()=>{const{Almacen:e,Usuario:t,Proceso:a}=r.value;return e>0&&t>0&&a>0}));return{keyModel:e,storeModel:r,getData:n,getCounts:i,getColumns:[{Key:"Id",Text:"Id",Width:10},{Key:"Proceso_Nombre",Text:"Proceso",Width:10},{Key:"Serie",Text:"Serie",Width:90},{Key:"Fecha",Text:"Fecha",Width:90},{Key:"Almacen_Nombre",Text:"Destino",Width:90},{Key:"Usuario_Nombre",Text:"Usuario",Width:90}],getPageIndex:u,isValidFormModel:s,saveData:async()=>{try{if(!s.value)return null;let e=null;return e=r.value.id?await d.put(`pedidos/${r.value.id}/`,r.value):await d.post("pedidos/",r.value),e.data}catch(e){return console.error(e),null}},filterData:async e=>{try{const{data:t}=await d.get("filter_pedidos",{params:{text:e}});return o.value=t,t}catch(t){return console.error(t),null}},clearModel:()=>{r.value={}}}})),r=e("pedidos_detalles",(()=>{const e="pedidos_detalles",o=t([]),r=t({}),l=a((()=>o.value)),n=a((()=>o.value.length>0)),i=(e,t)=>o.value.findIndex((a=>a.Unidad===t&&a.Producto===e))>-1;return{keyModel:e,storeModel:r,storeData:o,getData:l,getColumns:[{Key:"Producto_Nombre",Text:"Producto",Width:10,Align:"left",FormatMoney:!1},{Key:"UnidadText",Text:"Unidad",Width:10,Align:"left",FormatMoney:!1},{Key:"Cantidad",Text:"Cantidad",Width:10,Align:"right",FormatMoney:!1}],isValidFormModel:n,saveData:async t=>{try{if(!n.value)return null;let a=(e=>o.value.filter((e=>(null==e?void 0:e.Id)>0)).map((t=>({id:t.Id,UnidadText:t.UnidadText,Factor:t.Factor,Cantidad:t.Cantidad,Pedido:e,Lote:t.Lote,Producto:t.Producto,Unidad:t.Unidad}))))(t),r=null;return a.length>0&&(r=await d.put(`${e}/`,a)),a=(e=>o.value.filter((e=>0===(null==e?void 0:e.Id))).map((t=>({id:0,UnidadText:t.UnidadText,Factor:t.Factor,Cantidad:t.Cantidad,Pedido:e,Lote:t.Lote,Producto:t.Producto,Unidad:t.Unidad}))))(t),a.length>0&&(r=await d.post(`${e}/`,a)),null==r?void 0:r.data}catch(a){return console.error(a),null}},ExistProductoUnidad:i,addList:e=>{try{if(i(e.Producto,e.Unidad))return!1;const t=o.value.findIndex((t=>t===e));return-1===t?o.value.push(e):o.value[t]=e,!0}catch(t){return!1}},deleteData:async t=>{try{let a=o.value.findIndex((e=>e===t));return a>-1&&t.Id>0&&await d.delete(`${e}/${t.Id}/`),a=o.value.findIndex((e=>e.Producto===t.Producto&&e.Unidad===t.Unidad)),a>-1&&o.value.splice(a,1),!0}catch(a){return console.error(a),!1}},setPedidosDetallesByPedidoId:async e=>{try{const{data:t}=await d.get("get_pedidos_detalles_by_pedido_id",{params:{pedidoId:e}});return o.value=t,t}catch(t){return console.error(t),null}},clearModel:()=>{r.value={},o.value=[]}}}));export{r as a,o as u};
