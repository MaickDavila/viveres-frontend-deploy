import{o as t,d as l,h as a,g as e,u as s,L as n,M as r,m as o,p as i,t as c,i as m,F as u,l as p,j as h,x as d,y as x}from"./vendor.596c221c.js";import{u as v}from"./app.29cc8f05.js";const w={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},k=[a("path",{d:"M21.677 14l-1.245-3.114A2.986 2.986 0 0 0 17.646 9h-4.092a3.002 3.002 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2z",fill:"currentColor"},null,-1),a("path",{d:"M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154l-1.898.632z",fill:"currentColor"},null,-1),a("path",{d:"M16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8zm0-5A1.5 1.5 0 1 0 18 4.5A1.502 1.502 0 0 0 16.5 3z",fill:"currentColor"},null,-1)];var f={name:"carbon-pedestrian",render:function(a,e){return t(),l("svg",w,k)}};const g={class:"text-4xl"},b={class:"text-sm opacity-50"},y={key:0,class:"text-sm mt-4"},A={class:"opacity-75"},L=e({props:{name:{type:String,required:!0}},setup(e){const w=e,k=s(),L=v(),{t:M}=n();return r((()=>{L.setNewName(w.name)})),(e,s)=>{const n=f,r=o("router-link");return t(),l("div",null,[a("p",g,[i(n,{class:"inline-block"})]),a("p",null,c(m(M)("intro.hi",{name:w.name})),1),a("p",b,[a("em",null,c(m(M)("intro.dynamic-route")),1)]),m(L).otherNames.length?(t(),l("p",y,[a("span",A,c(m(M)("intro.aka"))+":",1),a("ul",null,[(t(!0),l(u,null,p(m(L).otherNames,(a=>(t(),l("li",{key:a},[i(r,{to:`/hi/${a}`,replace:""},{default:d((()=>[x(c(a),1)])),_:2},1032,["to"])])))),128))])])):h("",!0),a("div",null,[a("button",{class:"btn m-3 text-sm mt-6",onClick:s[0]||(s[0]=t=>m(k).back())},c(m(M)("button.back")),1)])])}}});export{L as default};
