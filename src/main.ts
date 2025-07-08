import { ProjectsList } from "./data/projects-list";

let projects: HTMLDivElement|null = document.querySelector('#projects-divs');

ProjectsList.forEach(project => {
  const card = `<div class="relative">
    <div class="flex flex-col z-10 border-[1px] min-h-[450px] bg-white rounded-2xl before:w-full before:h-full before:absolute before:top-1.5 before:right-1.5 before:bg-black before:-z-10 before:rounded-2xl overflow-hidden">
      <figure class="max-h-40 overflow-hidden object-cover bg-center">
        <img src="/public/assets/images/projects/placeholder.jfif"/>
      </figure>
      <div class="p-5 min-h-[290px] flex flex-col justify-between">
        <div class="flex h-full flex-col overflow-ellipsis">
          <h4 class="font-rock-n-roll font-semibold text-lg">${project.title}</h4> 
          <p class="my-5">${project.description}</p>
        </div>
        <div class="flex flex-row items-center gap-0.5">
          <div class="w-[80%] flex gap-1 flex-wrap">
            <div class="w-6 h-6">
              <img src="/public/assets/images/stack/1.csharp.svg" alt="">
            </div>
            <div class="w-6 h-6">
              <img src="/public/assets/images/stack/4.dotnet.svg" alt="">
            </div>
            <div class="w-6 h-6">
              <img src="/public/assets/images/stack/12.sqlserver.svg" alt="">
            </div>
            <div class="w-6 h-6">
              <img src="/public/assets/images/stack/9.html.svg" alt="">
            </div>
            <div class="w-6 h-6">
              <img src="/public/assets/images/stack/10.css.svg" alt="">
            </div>
          </div>
          <a href="${project.repository}" class="w-[20%] text-center cursor-pointer">></a>
        </div>
      </div>
    </div>
  </div>`;

  projects!.innerHTML = card;
});