import { ProjectsList } from "./data/projects-list";

let projects: HTMLDivElement|null = document.querySelector('#projects-divs');

ProjectsList.forEach(project => {
  const stack = document.createElement('div');

  project.stack.forEach(technology => {
    stack.innerHTML += `<div class="w-6 h-6 object-cover">
      <img class="w-full h-full" src="/public/assets/images/${technology}" alt="${technology.split('.')[0]}">
    </div>`
  })

  const card = document.createElement('div');
  card.classList = `${project.class} relative`;

  card.innerHTML = `<div class="flex flex-col z-10 border-[1px] min-h-[450px] bg-white rounded-2xl before:w-full before:h-full before:absolute before:top-1.5 before:right-1.5 before:bg-black before:-z-10 before:rounded-2xl overflow-hidden">
    <figure class="max-h-40 overflow-hidden object-cover shadow-xl">
      <img class="w-full h-50 object-cover object-center" src="/assets/images/${project.image}" alt="${project.image.split('.')[0]}"/>
    </figure>
    <div class="p-5 min-h-[290px] flex flex-col justify-between">
      <div class="flex h-full flex-col overflow-ellipsis">
        <h4 class="font-rock-n-roll font-semibold text-lg">${project.title}</h4> 
        <p class="my-5">${project.description}</p>
      </div>
      <div class="flex flex-row items-center gap-0.5">
        <div class="w-[80%] flex gap-1 flex-wrap">
          ${stack.getHTML()}
        </div>
        <a href="${project.repository}" target="_blank" rel="noopener noreferrer" class="w-[20%] text-center cursor-pointer">></a>
      </div>
    </div>
  </div>`;

  projects!.appendChild(card);
});