import{_ as l}from"./InputSearch.aae0da45.js";import{_ as e}from"./auto-download.5de3c9b2.js";import{a as t,_ as a,b as o}from"./DataTableComponent.93a79042.js";import{e as i,r as s,f as r,g as d,k as c,o as n,d as u,p,x as h,h as f,y,t as v,i as g,F as M,l as m,n as C,B as b,z as x,H as F,A as w,s as z}from"./vendor.7fd77a40.js";/* empty css              */import{i as B}from"./app.b54d3ad2.js";import{u as P}from"./utils.4066f773.js";import{u as _}from"./proceso.7a162a9d.js";import{u as A}from"./producto.9107f45e.js";const D=i("salidas",(()=>{const l="salidas",e=s({}),t=s({}),a=s(1),o=s([]),i=r((()=>o.value)),d=r((()=>e.value.count)),c=r((()=>a.value)),n=r((()=>{const{Proceso:l}=t.value;return l>0})),u=async l=>{try{const{data:e}=await B.get("filter_salidas",{params:{text:l}});return o.value=e,e}catch(e){return console.error(e),null}};return{keyModel:l,storeModel:t,getData:i,getCounts:d,getColumns:[{Key:"Serie",Text:"Serie",Width:10},{Key:"Proceso_Nombre",Text:"Proceso",Width:60},{Key:"Observaciones",Text:"Observaciones",Width:30}],getPageIndex:c,isValidFormModel:n,saveData:async()=>{try{if(!n.value)return null;let l=null;return l=t.value.id?await B.put(`salidas/${t.value.id}/`,t.value):await B.post("salidas/",t.value),u(""),l.data}catch(l){return console.error(l),null}},filterData:u,clearModel:()=>{t.value={}}}})),E=i("salidas_detalles",(()=>{const l="salidas_detalles",e=s([{}]),t=s({}),a=r((()=>e.value)),o=r((()=>e.value.length>0)),i=(l,t)=>e.value.findIndex((e=>e.Unidad_Id===l&&e.Producto_Id===t))>-1;return{keyModel:l,storeModel:t,storeData:e,getData:a,getColumns:[{Key:"Producto_Nombre",Text:"Producto",Width:10,Align:"left",FormatMoney:!1},{Key:"UnidadText",Text:"Unidad",Width:10,Align:"left",FormatMoney:!1},{Key:"Cantidad",Text:"Cantidad",Width:10,Align:"left",FormatMoney:!0},{Key:"Precio",Text:"Precio",Width:10,Align:"left",FormatMoney:!1}],isValidFormModel:o,saveData:async t=>{try{if(!o.value)return null;let i=(a=t,e.value.filter((l=>l.Id>0)).map((l=>({id:l.Id,UnidadText:l.UnidadText,Factor:l.Factor,Cantidad:l.Cantidad,Precio:l.Precio,Salida:a,Producto:l.Producto_Id,Unidad:l.Unidad_Id})))),s=null;return i.length>0&&(s=await B.put(`${l}/`,i)),i=(l=>e.value.filter((l=>0===l.Id)).map((e=>({id:0,UnidadText:e.UnidadText,Factor:e.Factor,Cantidad:e.Cantidad,Precio:e.Precio,Salida:l,Producto:e.Producto_Id,Unidad:e.Unidad_Id}))))(t),i.length>0&&(s=await B.post(`${l}/`,i)),null==s?void 0:s.data}catch(i){return console.error(i),null}var a},ExistUnidad:i,addList:l=>{try{if(i(l.Unidad_Id,l.Producto_Id))return!1;const t=e.value.findIndex((e=>e===l));return-1===t?e.value.push(l):e.value[t]=l,!0}catch(t){return!1}},deleteData:async t=>{try{let a=e.value.findIndex((l=>l===t));return a>-1&&t.Id>0&&await B.delete(`${l}/${t.Id}/`),a=e.value.findIndex((l=>l.Unidad_Id===t.Unidad_Id)),a>-1&&e.value.splice(a,1),!0}catch(a){return console.error(a),!1}},get_salidas_detalles_by_salidas_id:async l=>{try{const{data:t}=await B.get("get_salidas_detalles_by_salidas_id",{params:{salidasId:l}});return e.value=t,t}catch(t){return console.error(t),null}},clearModel:()=>{t.value={},e.value=[]}}})),L=f("svg",{id:"Layer_1",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"170",viewBox:"0 0 496 496",style:{"enable-background":"new 0 0 496 496"},"xml:space":"preserve"},[f("g",null,[f("path",{style:{fill:"#03263A"},d:"M39.2,318.2c0,0.8-0.8,2.4-2.4,2.4h-8c-0.8,0-2.4-0.8-2.4-2.4V315c0-0.8,0.8-2.4,2.4-2.4h8\r\nc0.8,0,2.4,0.8,2.4,2.4V318.2z"}),f("path",{style:{fill:"#03263A"},d:"M115.2,318.2c0,0.8-0.8,2.4-2.4,2.4h-8c-0.8,0-2.4-0.8-2.4-2.4V315c0-0.8,0.8-2.4,2.4-2.4h8\r\nc0.8,0,2.4,0.8,2.4,2.4V318.2z"})]),f("path",{style:{fill:"#FF5B00"},d:"M127.2,301.4c0,14.4-12,12.8-26.4,12.8h-60c-14.4,0-26.4,1.6-26.4-12.8v-168\r\nc0-14.4,12-26.4,26.4-26.4h60.8c14.4,0,26.4,12,26.4,26.4v168H127.2z"}),f("g",null,[f("path",{style:{fill:"#FF3C00"},d:"M101.6,107.8h-36V315h36c14.4,0,26.4,1.6,26.4-12.8v-168C127.2,119,116,107.8,101.6,107.8z"}),f("polygon",{style:{fill:"#FF3C00"},points:"74.4,184.6 26.4,136.6 26.4,167.8 43.2,184.6 "}),f("path",{style:{fill:"#FF3C00"},d:"M127.2,301.4v-3.2L26.4,197.4v31.2L112,315C121.6,314.2,127.2,312.6,127.2,301.4z"})]),f("path",{style:{fill:"#FF781D"},d:"M24,301.4v-168C24,119,36,107,50.4,107h-9.6c-14.4,0-26.4,12-26.4,26.4v168c0,14.4,12,12.8,26.4,12.8\r\nl0,0C31.2,315,24,312.6,24,301.4z"}),f("path",{style:{fill:"#FF8B00"},d:"M101.6,315c3.2,0,6.4,0,8.8,0H101.6z"}),f("rect",{x:"15.2",y:"179.8",style:{fill:"#03263A"},width:"112.8",height:"8"}),f("g",null,[f("rect",{x:"15.2",y:"184.6",style:{fill:"#053C54"},width:"112.8",height:"4"}),f("path",{style:{fill:"#053C54"},d:"M32,164.6c0,2.4-1.6,4-4,4l0,0c-2.4,0-4-1.6-4-4v-23.2c0-2.4,1.6-4,4-4l0,0c2.4,0,4,1.6,4,4V164.6z"})]),f("path",{style:{fill:"#055875"},d:"M25.6,137.4c-1.6,0.8-2.4,2.4-2.4,4v23.2c0,1.6,0.8,3.2,2.4,4c1.6-0.8,2.4-2.4,2.4-4v-23.2\r\nC28.8,139.8,27.2,138.2,25.6,137.4z"}),f("path",{style:{fill:"#053C54"},d:"M32,224.6c0,2.4-1.6,4-4,4l0,0c-2.4,0-4-1.6-4-4v-23.2c0-2.4,1.6-4,4-4l0,0c2.4,0,4,1.6,4,4V224.6z"}),f("path",{style:{fill:"#055875"},d:"M25.6,197.4c-1.6,0.8-2.4,2.4-2.4,4v23.2c0,1.6,0.8,3.2,2.4,4c1.6-0.8,2.4-2.4,2.4-4v-23.2\r\nC28.8,199.8,27.2,198.2,25.6,197.4z"}),f("g",null,[f("path",{style:{fill:"#FF781D"},d:"M113.6,166.2C112.8,166.2,112.8,165.4,113.6,166.2L113.6,166.2c-0.8-0.8,0-0.8,0-0.8h5.6\r\nc0,0,0.8,0,0.8,0.8l0,0c0,0,0,0.8-0.8,0.8h-5.6V166.2z"}),f("path",{style:{fill:"#FF781D"},d:"M113.6,170.2C112.8,170.2,112.8,170.2,113.6,170.2L113.6,170.2c-0.8-0.8,0-0.8,0-0.8h5.6\r\nc0,0,0.8,0,0.8,0.8l0,0c0,0,0,0.8-0.8,0.8h-5.6V170.2z"}),f("path",{style:{fill:"#FF781D"},d:"M113.6,175C112.8,175,112.8,174.2,113.6,175L113.6,175c-0.8-0.8,0-0.8,0-0.8h5.6c0,0,0.8,0,0.8,0.8\r\nl0,0c0,0,0,0.8-0.8,0.8h-5.6V175z"}),f("path",{style:{fill:"#FF781D"},d:"M113.6,298.2C112.8,298.2,112.8,298.2,113.6,298.2L113.6,298.2c-0.8-0.8,0-0.8,0-0.8h5.6\r\nc0,0,0.8,0,0.8,0.8l0,0c0,0,0,0.8-0.8,0.8h-5.6V298.2z"}),f("path",{style:{fill:"#FF781D"},d:"M113.6,303C112.8,303,112.8,303,113.6,303L113.6,303c-0.8-0.8,0-0.8,0-0.8h5.6c0,0,0.8,0,0.8,0.8\r\nl0,0c0,0,0,0.8-0.8,0.8h-5.6V303z"}),f("path",{style:{fill:"#FF781D"},d:"M113.6,307C112.8,307,112.8,307,113.6,307L113.6,307c-0.8-0.8,0-0.8,0-0.8h5.6c0,0,0.8,0,0.8,0.8\r\nl0,0c0,0,0,0.8-0.8,0.8h-5.6V307z"})]),f("path",{style:{fill:"#996430"},d:"M287.2,293.4c0,4-3.2,7.2-7.2,7.2H134.4c-4,0-7.2-3.2-7.2-7.2V82.2c0-4,3.2-7.2,7.2-7.2H280\r\nc4,0,7.2,3.2,7.2,7.2V293.4z"}),f("path",{style:{fill:"#A86F3B"},d:"M127.2,293.4V82.2c0-4,3.2-7.2,7.2-7.2H280"}),f("g",null,[f("path",{style:{opacity:"0.3",fill:"#C6A883","enable-background":"new"},d:"M204.8,287c0,4-3.2,7.2-7.2,7.2h-54.4c-4,0-7.2-3.2-7.2-7.2\r\nV96.6c0-4,3.2-7.2,7.2-7.2h54.4c4,0,7.2,3.2,7.2,7.2V287z"}),f("path",{style:{fill:"#C6A883"},d:"M204.8,283c0,4-3.2,7.2-7.2,7.2h-54.4c-4,0-7.2-3.2-7.2-7.2V92.6c0-4,3.2-7.2,7.2-7.2h54.4\r\nc4,0,7.2,3.2,7.2,7.2V283z"})]),f("path",{style:{fill:"#D1B99F"},d:"M136.8,283V92.6c0-4,3.2-7.2,7.2-7.2h54.4"}),f("polygon",{style:{fill:"#B29370"},points:"193.6,195.8 204.8,207 204.8,191 201.6,188.6 "}),f("circle",{style:{fill:"#3F2715"},cx:"196.8",cy:"191",r:"6.4"}),f("path",{style:{fill:"#1E1209"},d:"M200.8,186.2c2.4,2.4,2.4,6.4,0,8.8c-2.4,2.4-6.4,2.4-8.8,0"}),f("g",null,[f("path",{style:{opacity:"0.3",fill:"#C6A883","enable-background":"new"},d:"M209.6,287c0,4,3.2,7.2,7.2,7.2h54.4c4,0,7.2-3.2,7.2-7.2\r\nV96.6c0-4-3.2-7.2-7.2-7.2h-54.4c-4,0-7.2,3.2-7.2,7.2L209.6,287L209.6,287z"}),f("path",{style:{fill:"#C6A883"},d:"M209.6,283c0,4,3.2,7.2,7.2,7.2h54.4c4,0,7.2-3.2,7.2-7.2V92.6c0-4-3.2-7.2-7.2-7.2h-54.4\r\nc-4,0-7.2,3.2-7.2,7.2L209.6,283L209.6,283z"})]),f("path",{style:{fill:"#D1B99F"},d:"M277.6,283V92.6c0-4-3.2-7.2-7.2-7.2H216"}),f("polygon",{style:{fill:"#B29370"},points:"220,195.8 209.6,207 209.6,191 212.8,188.6 "}),f("circle",{style:{fill:"#3F2715"},cx:"217.6",cy:"191",r:"6.4"}),f("path",{style:{fill:"#1E1209"},d:"M213.6,186.2c-2.4,2.4-2.4,6.4,0,8.8c2.4,2.4,6.4,2.4,8.8,0"}),f("g",null,[f("path",{style:{fill:"#A86F3B"},d:"M188,273.4L188,273.4l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0c0,0,0-0.8,0.8-0.8L188,273.4\r\nC188,272.6,188,272.6,188,273.4L188,273.4z"}),f("path",{style:{fill:"#A86F3B"},d:"M188,276.6C188,276.6,188,277.4,188,276.6l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0c0,0,0-0.8,0.8-0.8\r\nL188,276.6C188,275.8,188,276.6,188,276.6L188,276.6z"}),f("path",{style:{fill:"#A86F3B"},d:"M188,279.8C188,280.6,188,280.6,188,279.8l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0c0,0,0-0.8,0.8-0.8\r\nL188,279.8L188,279.8L188,279.8z"}),f("path",{style:{fill:"#A86F3B"},d:"M261.6,273.4C261.6,273.4,260.8,273.4,261.6,273.4l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0\r\nc0,0,0-0.8,0.8-0.8L261.6,273.4C260.8,272.6,261.6,272.6,261.6,273.4L261.6,273.4z"}),f("path",{style:{fill:"#A86F3B"},d:"M261.6,276.6C261.6,276.6,260.8,277.4,261.6,276.6l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0\r\nc0,0,0-0.8,0.8-0.8L261.6,276.6C260.8,275.8,261.6,276.6,261.6,276.6L261.6,276.6z"}),f("path",{style:{fill:"#A86F3B"},d:"M261.6,279.8C261.6,280.6,260.8,280.6,261.6,279.8l-34.4,0.8c0,0-0.8,0-0.8-0.8l0,0\r\nc0,0,0-0.8,0.8-0.8L261.6,279.8C260.8,279.8,261.6,279.8,261.6,279.8L261.6,279.8z"})]),f("path",{style:{fill:"#ADC4C3"},d:"M295.2,272.6c0,3.2-3.2,6.4-6.4,6.4H12c-3.2,0-6.4-3.2-6.4-6.4l0,0c0-3.2,3.2-6.4,6.4-6.4h276.8\r\nC292,265.4,295.2,268.6,295.2,272.6L295.2,272.6z"}),f("path",{style:{fill:"#BC043D"},d:"M484,286.2c0-6.4-5.6-12-12-12h-35.2l-42.4-96c0-8.8-7.2-16-16-16h-1.6c0-8.8-7.2-16.8-16.8-16.8\r\nh-72.8v131.2h-276c-3.2,2.4-4.8,5.6-4.8,9.6v78.4c0,6.4,5.6,12,12,12H480c6.4,0,12-5.6,12-12L484,286.2z"}),f("path",{style:{fill:"#A5053F"},d:"M6.4,364.6c0,6.4,5.6,12,12,12H480c6.4,0,12-5.6,12-12l-4-40.8H6.4V364.6z"}),f("path",{style:{fill:"#DB0940"},d:"M19.2,347.8c0,4.8-4,4-8,4l0,0c-4.8,0-8-3.2-8-8v-36c0-4.8,3.2-8,8-8l0,0c4.8,0,8,4,8,8V347.8z"}),f("path",{style:{fill:"#BC043D"},d:"M11.2,299.8L11.2,299.8c4.8,0,8,4,8,8v40c0,4.8-4,4-8,4l0,0"}),f("path",{style:{fill:"#ADC4C3"},d:"M496,380.6c0,4.8-4,8-8,8H8c-4.8,0-8-3.2-8-8v-4.8c0-4.8,4-8,8-8h480c4.8,0,8,4,8,8V380.6z"}),f("path",{d:"M49.6,374.2c0-27.2,22.4-49.6,49.6-49.6s49.6,22.4,49.6,49.6"}),f("path",{style:{fill:"#ADC4C3"},d:"M151.2,374.2h-4c0-26.4-21.6-48-48-48s-48,21.6-48,48h-4c0-28.8,23.2-52,52-52\r\nS151.2,345.4,151.2,374.2z"}),f("circle",{style:{fill:"#203547"},cx:"99.2",cy:"375.8",r:"44.8"}),f("path",{style:{fill:"#122130"},d:"M131.2,344.6c17.6,17.6,17.6,45.6,0,63.2s-45.6,17.6-63.2,0"}),f("circle",{style:{fill:"#6E7577"},cx:"99.2",cy:"375.8",r:"28"}),f("path",{style:{fill:"#4C5456"},d:"M119.2,355.8c11.2,11.2,11.2,28.8,0,40s-28.8,11.2-40,0"}),f("circle",{style:{fill:"#CED8DD"},cx:"99.2",cy:"375.8",r:"24.8"}),f("path",{style:{fill:"#B2BBC1"},d:"M116.8,358.2c9.6,9.6,9.6,25.6,0,35.2s-25.6,9.6-35.2,0"}),f("path",{style:{opacity:"0.2",fill:"#888F91","enable-background":"new"},d:"M110.4,375.8c0,6.4-4.8,13.6-11.2,13.6\r\nc-6.4,0-11.2-7.2-11.2-13.6s4.8-11.2,11.2-11.2S110.4,369.4,110.4,375.8z"}),f("path",{style:{fill:"#E7EFF2"},d:"M110.4,375.8c0,6.4-4.8,11.2-11.2,11.2c-6.4,0-11.2-4.8-11.2-11.2c0-6.4,4.8-11.2,11.2-11.2\r\nS110.4,369.4,110.4,375.8z"}),f("path",{style:{fill:"#DAE6EA"},d:"M99.2,364.6c6.4,0,11.2,4.8,11.2,11.2c0,6.4-4.8,11.2-11.2,11.2"}),f("path",{style:{fill:"#666E70"},d:"M99.2,351c-0.8,0-2.4,0-3.2,0c0.8,3.2,1.6,6.4,3.2,6.4s3.2-2.4,3.2-6.4C101.6,351,100,351,99.2,351z"}),f("path",{style:{fill:"#535A5B"},d:"M99.2,357.4c1.6,0,3.2-2.4,3.2-6.4c-0.8,0-2.4,0-3.2,0"}),f("path",{style:{fill:"#666E70"},d:"M96,400.6c2.4,0,4.8,0,6.4,0c-0.8-3.2-1.6-6.4-3.2-6.4C97.6,394.2,96.8,396.6,96,400.6z"}),f("path",{style:{fill:"#535A5B"},d:"M102.4,400.6c-0.8-3.2-1.6-6.4-3.2-6.4"}),f("path",{style:{fill:"#666E70"},d:"M80,361.4c3.2,2.4,5.6,3.2,6.4,1.6c0.8-0.8,0-4-1.6-6.4C82.4,357.4,80.8,359,80,361.4z"}),f("path",{style:{fill:"#535A5B"},d:"M86.4,363c0.8-0.8,0-4-1.6-6.4"}),f("path",{style:{fill:"#666E70"},d:"M119.2,391c-3.2-2.4-5.6-3.2-6.4-1.6c-0.8,0.8,0,4,1.6,6.4c0.8-0.8,1.6-1.6,2.4-2.4\r\nC117.6,392.6,118.4,391.8,119.2,391z"}),f("path",{style:{fill:"#535A5B"},d:"M116.8,393.4c0.8-0.8,1.6-1.6,2.4-2.4c-3.2-2.4-5.6-3.2-6.4-1.6"}),f("path",{style:{fill:"#666E70"},d:"M75.2,379c3.2-0.8,6.4-1.6,6.4-3.2s-2.4-3.2-6.4-3.2c0,0.8,0,2.4,0,3.2\r\nC74.4,377.4,74.4,378.2,75.2,379z"}),f("path",{style:{fill:"#535A5B"},d:"M80.8,375.8c0-1.6-2.4-3.2-6.4-3.2c0,0.8,0,2.4,0,3.2"}),f("path",{style:{fill:"#666E70"},d:"M117.6,375.8c0,1.6,2.4,3.2,6.4,3.2c0-2.4,0-4.8,0-6.4C120,373.4,117.6,374.2,117.6,375.8z"}),f("path",{style:{fill:"#535A5B"},d:"M124,372.6c-3.2,0.8-6.4,1.6-6.4,3.2"}),f("path",{style:{fill:"#666E70"},d:"M80,391c1.6,1.6,3.2,3.2,4.8,4.8c2.4-3.2,3.2-5.6,1.6-6.4C85.6,387.8,82.4,388.6,80,391z"}),f("path",{style:{fill:"#535A5B"},d:"M84,395.8c2.4-3.2,3.2-5.6,1.6-6.4"}),f("path",{style:{fill:"#666E70"},d:"M114.4,356.6c-2.4,3.2-3.2,5.6-1.6,6.4c0.8,0.8,4,0,6.4-1.6C117.6,359,116,357.4,114.4,356.6z"}),f("path",{style:{fill:"#535A5B"},d:"M114.4,356.6c-2.4,3.2-3.2,5.6-1.6,6.4"}),f("path",{d:"M344,374.2c0-27.2,22.4-49.6,49.6-49.6s49.6,22.4,49.6,49.6"}),f("path",{style:{fill:"#ADC4C3"},d:"M445.6,374.2h-4c0-26.4-21.6-48-48-48s-48,21.6-48,48h-4c0-28.8,23.2-52,52-52\r\nS445.6,345.4,445.6,374.2z"}),f("circle",{style:{fill:"#203547"},cx:"394.4",cy:"375.8",r:"44.8"}),f("path",{style:{fill:"#122130"},d:"M425.6,344.6c17.6,17.6,17.6,45.6,0,63.2s-45.6,17.6-63.2,0"}),f("circle",{style:{fill:"#6E7577"},cx:"394.4",cy:"375.8",r:"28"}),f("path",{style:{fill:"#4C5456"},d:"M413.6,355.8c11.2,11.2,11.2,28.8,0,40s-28.8,11.2-40,0"}),f("circle",{style:{fill:"#CED8DD"},cx:"394.4",cy:"375.8",r:"24.8"}),f("path",{style:{fill:"#B2BBC1"},d:"M411.2,358.2c9.6,9.6,9.6,25.6,0,35.2s-25.6,9.6-35.2,0"}),f("path",{style:{opacity:"0.2",fill:"#888F91","enable-background":"new"},d:"M405.6,375.8c0,6.4-4.8,13.6-11.2,13.6\r\nc-6.4,0-11.2-7.2-11.2-13.6s4.8-11.2,11.2-11.2C400,364.6,405.6,369.4,405.6,375.8z"}),f("path",{style:{fill:"#E7EFF2"},d:"M405.6,375.8c0,6.4-4.8,11.2-11.2,11.2c-6.4,0-11.2-4.8-11.2-11.2c0-6.4,4.8-11.2,11.2-11.2\r\nC400,364.6,405.6,369.4,405.6,375.8z"}),f("path",{style:{fill:"#DAE6EA"},d:"M394.4,364.6c6.4,0,11.2,4.8,11.2,11.2c0,6.4-4.8,11.2-11.2,11.2"}),f("path",{style:{fill:"#666E70"},d:"M394.4,351c-0.8,0-2.4,0-3.2,0c0.8,3.2,1.6,6.4,3.2,6.4s3.2-2.4,3.2-6.4C396,351,395.2,351,394.4,351\r\nz"}),f("path",{style:{fill:"#535A5B"},d:"M394.4,357.4c1.6,0,3.2-2.4,3.2-6.4c-0.8,0-2.4,0-3.2,0"}),f("path",{style:{fill:"#666E70"},d:"M390.4,400.6c2.4,0,4.8,0,6.4,0c-0.8-3.2-1.6-6.4-3.2-6.4C392.8,394.2,391.2,396.6,390.4,400.6z"}),f("path",{style:{fill:"#535A5B"},d:"M397.6,400.6c-0.8-3.2-1.6-6.4-3.2-6.4"}),f("path",{style:{fill:"#666E70"},d:"M374.4,361.4c3.2,2.4,5.6,3.2,6.4,1.6c0.8-0.8,0-4-1.6-6.4C377.6,357.4,376,359,374.4,361.4z"}),f("path",{style:{fill:"#535A5B"},d:"M380.8,363c0.8-0.8,0-4-1.6-6.4"}),f("path",{style:{fill:"#666E70"},d:"M413.6,391c-3.2-2.4-5.6-3.2-6.4-1.6c-0.8,0.8,0,4,1.6,6.4c0.8-0.8,1.6-1.6,2.4-2.4\r\nC412,392.6,412.8,391.8,413.6,391z"}),f("path",{style:{fill:"#535A5B"},d:"M411.2,393.4c0.8-0.8,1.6-1.6,2.4-2.4c-3.2-2.4-5.6-3.2-6.4-1.6"}),f("path",{style:{fill:"#666E70"},d:"M369.6,379c3.2-0.8,6.4-1.6,6.4-3.2s-2.4-3.2-6.4-3.2c0,0.8,0,2.4,0,3.2\r\nC369.6,377.4,369.6,378.2,369.6,379z"}),f("path",{style:{fill:"#535A5B"},d:"M376,375.8c0-1.6-2.4-3.2-6.4-3.2c0,0.8,0,2.4,0,3.2"}),f("path",{style:{fill:"#666E70"},d:"M412,375.8c0,1.6,2.4,3.2,6.4,3.2c0-2.4,0-4.8,0-6.4C415.2,373.4,412,374.2,412,375.8z"}),f("path",{style:{fill:"#535A5B"},d:"M418.4,372.6c-3.2,0.8-6.4,1.6-6.4,3.2"}),f("path",{style:{fill:"#666E70"},d:"M374.4,391c1.6,1.6,3.2,3.2,4.8,4.8c2.4-3.2,3.2-5.6,1.6-6.4C380,387.8,377.6,388.6,374.4,391z"}),f("path",{style:{fill:"#535A5B"},d:"M379.2,395.8c2.4-3.2,3.2-5.6,1.6-6.4"}),f("path",{style:{fill:"#666E70"},d:"M408.8,356.6c-2.4,3.2-3.2,5.6-1.6,6.4c0.8,0.8,4,0,6.4-1.6C412,359,410.4,357.4,408.8,356.6z"}),f("path",{style:{fill:"#535A5B"},d:"M408.8,356.6c-2.4,3.2-3.2,5.6-1.6,6.4"}),f("path",{style:{fill:"#51859B"},d:"M433.6,266.2l-36.8-84H312c-4.8,0-8.8,4-8.8,8.8v67.2c0,4.8,4,8.8,8.8,8.8h119.2\r\nC432,266.2,432.8,266.2,433.6,266.2z"}),f("g",null,[f("polygon",{style:{fill:"#81B6C9"},points:"341.6,182.2 318.4,182.2 302.4,197.4 302.4,220.6 "}),f("path",{style:{fill:"#81B6C9"},d:"M396,266.2h35.2c0.8,0,1.6,0,2.4-0.8l-11.2-25.6L396,266.2z"})]),f("path",{style:{fill:"#BC043D"},d:"M400,271.8c0.8,2.4-0.8,4.8-3.2,5.6l0,0c-2.4,0.8-4.8-0.8-5.6-3.2L364,168.6\r\nc-0.8-2.4,0.8-4.8,3.2-5.6l0,0c2.4-0.8,4.8,0.8,5.6,3.2L400,271.8z"}),f("path",{style:{fill:"#8E8E8E"},d:"M325.6,286.2c0,3.2-2.4,5.6-5.6,5.6h-12.8c-3.2,0-5.6-2.4-5.6-5.6l0,0c0-3.2,2.4-5.6,5.6-5.6H320\r\nC323.2,281.4,325.6,283.8,325.6,286.2L325.6,286.2z"}),f("g",null,[f("path",{style:{fill:"#BC043D"},d:"M176.8,335.8c0,0.8-0.8,1.6-1.6,1.6h-10.4c-0.8,0-1.6-0.8-1.6-1.6l0,0c0-0.8,0.8-1.6,1.6-1.6h10.4\r\nC176,334.2,176.8,335,176.8,335.8L176.8,335.8z"}),f("path",{style:{fill:"#BC043D"},d:"M176.8,344.6c0,0.8-0.8,1.6-1.6,1.6h-10.4c-0.8,0-1.6-0.8-1.6-1.6l0,0c0-0.8,0.8-1.6,1.6-1.6h10.4\r\nC176,343,176.8,343.8,176.8,344.6L176.8,344.6z"}),f("path",{style:{fill:"#BC043D"},d:"M176.8,353.4c0,0.8-0.8,1.6-1.6,1.6h-10.4c-0.8,0-1.6-0.8-1.6-1.6l0,0c0-0.8,0.8-1.6,1.6-1.6h10.4\r\nC176,351.8,176.8,352.6,176.8,353.4L176.8,353.4z"})]),f("path",{style:{fill:"#FFA300"},d:"M488.8,339.8c0,4-3.2,6.4-6.4,6.4l0,0c-4,0-6.4-3.2-6.4-6.4V307c0-4,3.2-6.4,6.4-6.4l0,0\r\nc4,0,6.4,3.2,6.4,6.4V339.8z"}),f("path",{style:{fill:"#FF7300"},d:"M481.6,346.2L481.6,346.2c-4,0-6.4-3.2-6.4-6.4V307c0-4,3.2-6.4,6.4-6.4l0,0"}),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g"),f("g")],-1),V={class:"text-2xl font-semibold text-green-400"},I={class:"text-gray-500"},k={class:"h-[100%] w-full flex flex-col"},U={class:"row-span-1"},S=["onClick"],H={class:"bg-white h-full row-span-10 overflow-y-auto"},N={class:"form-container"},T=f("label",{for:"proceso",class:"form-label"},"Proceso",-1),j={key:0},O=["value"],K={key:1,class:"w-full flex flex-col"},W={class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white"},$={class:"form-container"},q=f("label",{for:"observaciones",class:"form-label"},"Observaciones",-1),G=["disabled"],R=f("input",{type:"submit",class:"hidden"},null,-1),J={class:"relative flex w-full items-center row-span-1"},Q={class:"form-container"},X=f("label",{for:"cantidad",class:"form-label"},"Cantidad",-1),Y=y(" Agregar "),Z={class:"rounded-xl overflow-auto bg-white row-span-4"},ll=["onUpdate:modelValue"],el=d({setup(i){const r=D(),d=E(),B=A(),el=s(!1),tl=s(!1),al=P(),ol=_(),il=s(0),sl=["Productos de la Salida","Salida"],rl=s({}),dl=s(0),cl=s({}),nl=s(!1),ul=s(!1);c((()=>{r.filterData("")}));const pl=l=>{r.filterData(l)},hl=async()=>{},fl=async()=>{r.clearModel(),d.clearModel(),hl();const l=await ol.setProcesoActivo();if(!l)return z({title:"No tienes procesos disponibles",description:"Habra un proceso por favor! 👍😊"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(el.value=!1);cl.value=l,r.storeModel.Proceso=l.id,il.value=0,al.setFocusInput("txtNombre")},yl=async({Id:l,Proceso_Id:e,Proceso_Nombre:t,Observaciones:a})=>{if(!l)return void(el.value=!1);tl.value=!0,hl();const o=await ol.setProcesoActivo();(null==o?void 0:o.id)!==e&&(nl.value=!0),el.value=!0,r.clearModel(),d.clearModel(),cl.value.id=e,cl.value.Nombre=t,r.storeModel.id=l,r.storeModel.Proceso=e,r.storeModel.Observaciones=a;await d.get_salidas_detalles_by_salidas_id(l)||z({title:"Ocurrio un problema",description:"El pedido no tiene ningun producto!"},{type:"danger",hideProgressBar:!0,position:"bottom-right"}),il.value=0,al.setFocusInput("inputSearch"),tl.value=!1},vl=()=>r.isValidFormModel?d.isValidFormModel?void(ul.value=!0):(z({title:"Formulario incompleto",description:"Por favor ingrese los productos a la salida"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(ul.value=!1)):(z({title:"Formulario incompleto",description:"Por favor completa todos los campos"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),void(ul.value=!1)),gl=async()=>{if(tl.value=!0,!r.isValidFormModel)return void z({title:"Formulario incompleto",description:"Por favor completa todos los campos"},{type:"info",hideProgressBar:!0,position:"bottom-right"});if(!d.isValidFormModel)return void z({title:"Formulario incompleto",description:"Por favor ingrese los productos al pedido"},{type:"info",hideProgressBar:!0,position:"bottom-right"});const l=await r.saveData();if(!l)return void z({title:"Error al guardar",description:"Por favor intenta nuevamente"},{type:"danger",hideProgressBar:!0,position:"bottom-right"});await d.saveData(l.id)?(z({title:"Guardado",description:"salida guardado correctamente"},{type:"success",hideProgressBar:!0,position:"bottom-right"}),tl.value=el.value=ul.value=!1,r.filterData("")):z({title:"Error al guardar",description:"No se pudieron guardar los productos de la salida"},{type:"danger",hideProgressBar:!0,position:"bottom-right"})},Ml=l=>{el.value=l},ml=async()=>{if(!rl.value.Id)return void z({title:"Seleccione un producto",description:"Por favor!"},{type:"info",hideProgressBar:!0,position:"bottom-right"});if(!dl.value)return void z({title:"Ingrese la cantidad",description:"Por favor!"},{type:"info",hideProgressBar:!0,position:"bottom-right"});const l={Id:0,Salida:0,Producto_Id:rl.value.Id,Producto_Nombre:rl.value.Producto_Nombre,Unidad_Id:rl.value.Unidad,UnidadText:rl.value.Unidad_Nombre,Factor:rl.value.Factor,Cantidad:dl.value,Precio:rl.value.Precio};if(d.ExistUnidad(l.Producto_Id,l.Unidad_Id))return z({title:"El producto ya está en la lista!"},{type:"info",hideProgressBar:!0,position:"bottom-right"}),rl.value={},dl.value=0,void al.setFocusInput("inputSearch");d.addList(l)?(rl.value={},dl.value=0,al.setFocusButton("inputSearch")):z({title:"No se pudo agregar el producto"},{type:"info",hideProgressBar:!0,position:"bottom-right"})},Cl=l=>{d.deleteData(l)},bl=l=>{rl.value=l,setTimeout((()=>{al.setFocusInput("cantidad")}),100)},xl=async l=>{await B.get_productos_lotes_by_proceso_id(cl.value.id,l)},Fl=l=>{"Enter"===l.key&&ml()};return(i,s)=>{const c=l,z=e,P=t,_=a,A=o;return n(),u(M,null,[p(_,{columns:g(r).getColumns,data:g(r).getData||[],count:g(r).getCounts,titulo:`${g(r).keyModel}`,subtitulo:`Listado de ${g(r).keyModel}`,"page-index":g(r).getPageIndex,"show-modal":el.value,"modal-width":"50rem","modal-height":"90%","show-loading":tl.value,onAddEvent:fl,onUpdateEvent:yl,onFilterEvent:pl,onModalIsOpen:Ml},{imagen:h((()=>[L])),cabecera:h((()=>[f("h1",V,[y(v(g(r).storeModel.id?"Editar":"Nuevo")+" "+v(g(r).keyModel)+" ",1),f("b",I,v(g(r).storeModel.id),1)])])),cuerpo:h((()=>[f("div",k,[f("section",U,[(n(),u(M,null,m(sl,((l,e)=>f("button",{key:e,class:C(["text-gray-600 focus:outline-none font-medium rounded-lg p-2 text-xs",{"border-green-500 border-b-2 shadow-lg transition  duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-100":il.value===e," rounded-none rounded-r-lg":0==e}]),onClick:l=>il.value=e},v(l),11,S))),64))]),f("section",H,[f("form",{class:C(["form-container h-full p-3",1==il.value?"grid":"hidden"]),onSubmit:s[2]||(s[2]=b((()=>{}),["prevent"]))},[f("div",N,[T,nl.value?(n(),u("div",K,[f("span",W,v(cl.value.Nombre),1)])):(n(),u("div",j,[x(f("select",{id:"proceso","onUpdate:modelValue":s[0]||(s[0]=l=>g(r).storeModel.Proceso=l),class:"form-input w-full focus:text-black lg:w-[50%] bg-green-500 text-white",required:""},[(n(!0),u(M,null,m([cl.value],((l,e)=>(n(),u("option",{key:e,value:l.id,class:"text-gray-700","aria-readonly":"true"},v(l.Nombre),9,O)))),128))],512),[[F,g(r).storeModel.Proceso]])]))]),f("div",$,[q,x(f("textarea",{id:"observaciones","onUpdate:modelValue":s[1]||(s[1]=l=>g(r).storeModel.Observaciones=l),class:"form-input w-full focus:text-black bg-white text-gray-500",disabled:nl.value},null,8,G),[[w,g(r).storeModel.Observaciones]])]),R],34),f("section",{class:C(["form-container h-full p-3 grid grid-rows-5",0==il.value?"flex":"hidden"])},[f("div",J,[p(c,{field:rl.value,"place-holder":"Buscar el producto",class:"w-[50%]",data:g(B).getProductosProcesoLote,"column-label":"Producto_Nombre",onSelected:bl,onSearch:xl},null,8,["field","data"]),f("div",Q,[X,x(f("input",{id:"cantidad","onUpdate:modelValue":s[3]||(s[3]=l=>dl.value=l),class:"form-input w-full focus:text-black bg-white text-gray-500",type:"number",min:"0",step:"1",onKeydown:Fl},null,544),[[w,dl.value]])]),f("div",null,[f("button",{class:"btn-submit bg-white border border-blue-500 text-blue-500 text-xs flex gap-2",onClick:ml},[p(z),Y])])]),f("section",Z,[p(P,{columns:g(d).getColumns,data:g(d).storeData,actions:!0,class:"row-span-4","link-id":!1,onDeleteRow:Cl},{Cantidad:h((({index:l})=>[x(f("input",{"onUpdate:modelValue":e=>g(d).storeData[l].Cantidad=e,type:"number",class:"form-input text-center w-24"},null,8,ll),[[w,g(d).storeData[l].Cantidad]])])),_:1},8,["columns","data"])])],2)])])])),acciones:h((()=>[f("button",{type:"submit",class:"btn btn-submit",onClick:vl}," Guardar ")])),_:1},8,["columns","data","count","titulo","subtitulo","page-index","show-modal","show-loading"]),p(A,{"show-modal":ul.value,"modal-width":"20rem","modal-height":"10rem",description:"Seguro que desea guardar los datos?",onConfirm:gl,onCancel:s[4]||(s[4]=l=>ul.value=!1)},null,8,["show-modal"])],64)}}});export{el as default};
