import{f as e,r as t,g as a}from"./vendor.f30c4ba5.js";import{i as o}from"./app.51d37901.js";const r=e("producto",(()=>{const e="producto",r=t({}),i=t({}),u=t([{}]),d=a((()=>r.value.results)),l=a((()=>u.value)),n=a((()=>r.value.count)),c=a((()=>{const{Categoria:e,Nombre:t}=i.value;return e>0&&t.length>0})),s=async e=>{if(e)try{const{data:t}=await o.get("filter_productos",{params:{text:e}});return r.value=t,t}catch(t){return console.error(t),null}else s(" ")};return{keyModel:e,storeModel:i,getData:d,getCounts:n,getColumns:[{Key:"Id",Text:"Id",Width:5},{Key:"Categoria_Nombre",Text:"Categoria",Width:10},{Key:"Nombre",Text:"Nombre",Width:40},{Key:"CodigoBarra",Text:"Codigo Barra",Width:15},{Key:"Unidad_Nombre",Text:"Unidad",Width:15},{Key:"Precio",Text:"Precio",Width:10,Align:"right",FormatMoney:!0}],isValidFormModel:c,getProductosProcesoLote:l,filterData:s,setById:async e=>{try{const{data:t}=await o.get(`producto/${e}/`);return t}catch(t){return console.error(t),null}},saveData:async()=>{try{if(!c.value)return null;const{Imagen:e}=i.value,t={id:i.value.id,Nombre:i.value.Nombre,Categoria:i.value.Categoria,CodigoBarra:i.value.CodigoBarra};let a=null;a=i.value.id?await o.put(`producto/${i.value.id}/`,t):await o.post("producto/",t);const r=a.data;if(0===e.indexOf("data:image")){const t={imagen:e,productoId:r.id};await o.put("save_image/",t)}return r}catch(e){return console.error(e),null}},clearModel:()=>{i.value={}},filterProductoProcesoLote:async(e,t)=>{try{const{data:a}=await o.get("get_producto_by_proceso_abierto",{params:{procesoId:e,text:t}});u.value=a}catch(a){return console.error(a),null}}}}));export{r as u};
