import{e as t,r as e,f as o}from"./vendor.a51b8ffa.js";import{i as a}from"./app.1c80cf5c.js";const r=t("producto",(()=>{const t="producto",r=e({}),s=e({}),c=e([{}]),u=e([]),d=o((()=>r.value.results)),n=o((()=>c.value)),l=o((()=>r.value.count)),i=o((()=>{const{Categoria:t,Nombre:e}=s.value;return t>0&&e.length>0})),p=async t=>{if(t)try{const{data:e}=await a.get("filter_productos",{params:{text:t}});return r.value=e,e}catch(e){return console.error(e),null}else p(" ")};return{keyModel:t,storeModel:s,productosForNotasComprasData:u,getData:d,getCounts:l,getColumns:[{Key:"Id",Text:"Id",Width:5},{Key:"Categoria_Nombre",Text:"Categoria",Width:10},{Key:"Nombre",Text:"Nombre",Width:40},{Key:"CodigoBarra",Text:"Codigo Barra",Width:15},{Key:"Unidad_Nombre",Text:"Unidad",Width:15},{Key:"Precio",Text:"Precio",Width:10,Align:"right",FormatMoney:!0}],isValidFormModel:i,getProductosProcesoLote:n,filterData:p,setById:async t=>{try{const{data:e}=await a.get(`producto/${t}/`);return e}catch(e){return console.error(e),null}},saveData:async()=>{try{if(!i.value)return null;const{Imagen:t}=s.value,e={id:s.value.id,Nombre:s.value.Nombre,Categoria:s.value.Categoria,CodigoBarra:s.value.CodigoBarra};let o=null;o=s.value.id?await a.put(`producto/${s.value.id}/`,e):await a.post("producto/",e);const r=o.data;if(t){if(0===t.indexOf("data:image")){const e={imagen:t,productoId:r.id};await a.put("save_image/",e)}}return r}catch(t){return console.error(t),null}},clearModel:()=>{s.value={}},get_productos_lotes_by_proceso_id:async(t,e)=>{try{const{data:o}=await a.get("get_productos_lotes_by_proceso_id",{params:{procesoId:t,text:e}});c.value=o}catch(o){return console.error(o),null}},get_productos_for_notas_compras:async t=>{try{const{data:e}=await a.get("get_productos_for_notas_compras",{params:{text:t}});c.value=e}catch(e){return console.error(e),null}}}}));export{r as u};
