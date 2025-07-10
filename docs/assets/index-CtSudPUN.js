(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=[{image:"projects/inventory-system-project.png",title:"Sales & Inventory System",description:"Real-world Sales & Inventory System built with ASP.NET Core 7, featuring role-based access, inventory control, payment integration, and report generation.",stack:["stack/1.csharp.svg","stack/4.dotnet.svg","stack/12.sqlserver.svg","stack/9.html.svg","stack/10.css.svg"],repository:"https://github.com/ejbpz/inventory-app",class:"order-1"},{image:"projects/cinemapedia-project.png",title:"Cinemapedia",description:"Flutter movie app built with Dart and Riverpod. Features swipers, global state management, modular components, and TMDB integration.",stack:["stack/6.dart.svg","stack/7.flutter.svg"],repository:"https://github.com/ejbpz/cinemapedia-app",class:"order-2"},{image:"projects/teslo-flutter-project.png",title:"Teslo Shop Mobile",description:"Flutter mobile administrative e-commerce consuming a NestJS API with role-based authentication.",stack:["stack/6.dart.svg","stack/7.flutter.svg"],repository:"https://github.com/ejbpz/teslo-shop-flutter-app",class:"order-3 not-sm:order-4"},{image:"projects/teslo-angular-project.png",title:"Teslo Shop Web",description:"Angular e-commerce clothing store consuming a NestJS API with role-based auth and token guards.",stack:["stack/2.typescript.svg","stack/3.angular.svg","stack/15.rxjs.svg","stack/11.tailwind.svg"],repository:"https://github.com/ejbpz/teslo-shop-angular-app",class:"order-4 not-sm:order-3"}];let c=document.querySelector("#projects-divs");l.forEach(s=>{const r=document.createElement("div");s.stack.forEach(i=>{r.innerHTML+=`<div class="w-6 h-6 object-cover">
      <img class="w-full h-full" src="/assets/images/${i}" alt="${i.split(".")[0]}">
    </div>`});const o=document.createElement("div");o.classList=`${s.class} relative`,o.innerHTML=`<div class="flex flex-col z-10 border-[1px] min-h-[450px] bg-white rounded-2xl before:w-full before:h-full before:absolute before:top-1.5 before:right-1.5 before:bg-black before:-z-10 before:rounded-2xl overflow-hidden">
    <figure class="max-h-40 overflow-hidden object-cover shadow-xl">
      <img class="w-full h-50 object-cover object-center" src="/assets/images/${s.image}" alt="${s.image.split(".")[0]}"/>
    </figure>
    <div class="p-5 min-h-[290px] flex flex-col justify-between">
      <div class="flex h-full flex-col overflow-ellipsis">
        <h4 class="font-rock-n-roll font-semibold text-lg">${s.title}</h4> 
        <p class="my-5">${s.description}</p>
      </div>
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-[80%] flex gap-1 flex-wrap">
          ${r.getHTML()}
        </div>
        <a href="${s.repository}" target="_blank" rel="noopener noreferrer" class="w-[20%] text-center cursor-pointer">></a>
      </div>
    </div>
  </div>`,c.appendChild(o)});
