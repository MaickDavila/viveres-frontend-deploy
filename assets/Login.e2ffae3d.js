import{g as e,r as t,u as s,k as a,o as r,d as l,h as o,B as n,z as i,A as d,J as u,s as c}from"./vendor.596c221c.js";/* empty css              */import{u as p}from"./app.649779bd.js";var m={};const v={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},f={class:"max-w-xs w-full space-y-8"},g=u('<div><svg class="mx-auto" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="#EDEDED" d="M50 0c-27.614 0-50 22.387-50 50 0 27.615 22.386 50 50 50 27.613 0 50-22.385 50-50 0-27.613-22.387-50-50-50z"></path><path fill="#D07C40" d="M19.004 29.985h62.021v49.976h-61.959l-.062-49.976z"></path><g fill="#EFC75E"><path d="M84.003 42.015c0 .025-67.944-.02-68.008 0v37.919c.001.004-.007 2.999-.018 6.693 8.925 8.293 20.878 13.373 34.023 13.373 13.122 0 25.057-5.061 33.977-13.328-.031-3.709-.057-6.723-.055-6.724 0-15.728.081-37.933.081-37.933zM75.021 34.009v6.521l6.004-1.17v-9.375zM25.01 40.023v-6.014l-6.006-4.024v9.984z"></path></g><path fill="#DBA250" d="M25.01 42.015v-8.006l-9.015 8.006h9.015zm50.011-8.006v8.006h8.981l-8.981-8.006z"></path><path fill="#CBA950" d="M71.064 57.558c0-.838-.724-1.586-1.562-1.586s-1.649.748-1.649 1.586c-.004 10.158-7.641 18.393-17.8 18.393-10.16 0-17.996-8.233-18.001-18.393 0-.838-.71-1.586-1.549-1.586s-1.657.748-1.657 1.586c0 11.936 9.275 21.608 21.209 21.608 11.933 0 21.009-9.674 21.009-21.608z"></path><path fill="#D07C40" d="M30.472 52.988c-1.37 0-2.48 1.11-2.48 2.48 0 1.369 1.11 2.479 2.48 2.479 1.37 0 2.512-1.11 2.512-2.479-.001-1.368-1.143-2.48-2.512-2.48zm39.001 0c-1.371 0-2.48 1.11-2.48 2.48 0 1.369 1.109 2.479 2.48 2.479 1.369 0 2.512-1.11 2.512-2.479-.003-1.368-1.144-2.48-2.512-2.48z"></path><path fill="#fff" d="M71.064 56.558c0-.838-.724-1.586-1.562-1.586s-1.649.748-1.649 1.586c-.004 10.158-7.641 18.393-17.8 18.393-10.16 0-17.996-8.233-18.001-18.393 0-.838-.71-1.586-1.549-1.586s-1.657.748-1.657 1.586c0 11.936 9.275 21.608 21.209 21.608 11.933 0 21.009-9.674 21.009-21.608z"></path></svg><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Gestión de Víveres Frescos y Secos </h2><p class="mt-2 text-center text-sm text-gray-600"> DIRECCIÓN DE BIENESTAR UNIVERSITARIO <br>COMEDOR UNIVERSITARIO </p></div>',1),h=o("input",{type:"hidden",name:"remember",value:"true"},null,-1),x={class:"rounded-md shadow-sm -space-y-px"},b=o("label",{for:"username",class:"sr-only"},"Usuario",-1),y=o("label",{for:"password",class:"sr-only"},"Contraseña",-1),w=u('<div class="flex items-center justify-between"><div class="flex items-center"><input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"><label for="remember-me" class="ml-2 block text-sm text-gray-900">Recuerdame</label></div><div class="text-sm"><a href="#" class="font-medium text-green-600 hover:text-green-500">¿Olvido su contraseña?</a></div></div><div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"><span class="absolute left-0 inset-y-0 flex items-center pl-3"><svg class="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg></span> Iniciar sesión </button></div>',2),z=e({setup(e){const u=t(""),m=t(""),z=s(),E=p(),M=t(!1);return a((()=>{E.Logout()})),(e,t)=>(r(),l("div",v,[o("div",f,[g,o("form",{class:"mt-8 space-y-6",onSubmit:t[2]||(t[2]=n((e=>(async()=>{M.value=!0,await E.Login(u.value,m.value)?(c({title:"Bienvenido",description:"Viveres App le da la bienvenida al sistema."},{type:"success",timeout:3e3,position:"bottom-right",hideProgressBar:!0}),setTimeout((()=>{z.push("/")}),500)):c({title:"Login Fallido",description:"Las credenciales no son válidas!"},{type:"danger",timeout:3e3,position:"bottom-right",hideProgressBar:!0}),M.value=!1})()),["prevent"]))},[h,o("div",x,[o("div",null,[b,i(o("input",{id:"username","onUpdate:modelValue":t[0]||(t[0]=e=>u.value=e),name:"username",type:"text",autocomplete:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm",placeholder:"Usuario"},null,512),[[d,u.value]])]),o("div",null,[y,i(o("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=e=>m.value=e),name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm",placeholder:"Contraseña"},null,512),[[d,m.value]])])]),w],32)])]))}});"function"==typeof m&&m(z);export{z as default};
