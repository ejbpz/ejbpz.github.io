import { ProjectsList } from "./data/projects-list";

let projects: HTMLDivElement|null = document.querySelector('#projects-divs');

ProjectsList.forEach(project => {
  const stack = document.createElement('div');

  project.stack.forEach(technology => {
    stack.innerHTML += `<div class="w-6 h-6 object-cover">${technology}
    </div>`
  })

  const card = document.createElement('div');
  card.classList = `${project.class} relative`;

  card.innerHTML = `<div class="flex flex-col z-10 border-[1px] min-h-[450px] bg-white dark:bg-black rounded-2xl before:w-full before:h-full before:absolute before:top-1.5 before:right-1.5 before:bg-black dark:before:bg-white before:-z-10 before:rounded-2xl overflow-hidden">
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

let toggleTheme: HTMLButtonElement|null = document.querySelector('#button-theme');

toggleTheme!.addEventListener('click', (event) => {
  event.preventDefault();
  
  document.querySelector('html')?.classList.toggle('dark');
  if (document.querySelector('html')?.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleTheme!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 19a1 1 0 0 1 .993.883L13 20v1a1 1 0 0 1-1.993.117L11 21v-1a1 1 0 0 1 1-1m6.313-2.09l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 1.218-1.567zm-11.306.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM6.213 4.81l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7A1 1 0 0 1 6.11 4.74zm12.894.083a1 1 0 0 1 .083 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m0 5a5 5 0 1 1-4.995 5.217L7 12l.005-.217A5 5 0 0 1 12 7"/></svg>'
  } else {
    localStorage.setItem('theme', 'light');
    toggleTheme!.innerHTML =  '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 3c.575 0 .66.82.178 1.134a7 7 0 0 0 6.432 12.363c.479-.192 1.023.301.724.721A9 9 0 1 1 12 3" clip-rule="evenodd"/></svg>';
  }
});

let theme: string|null = localStorage.getItem('theme');
(theme == 'dark') 
  ? document.querySelector('html')?.classList.remove('dark')
  : document.querySelector('html')?.classList.add('dark');
toggleTheme?.click();
  
let toggleLanguage: HTMLButtonElement|null = document.querySelector('#button-lang');

toggleLanguage!.addEventListener('click', (event) => {
  event.preventDefault();
  
  if(document.querySelector('html')!.lang.includes('en')) {
    document.querySelector('html')!.lang = 'es';
    localStorage.setItem('lang', 'es');
    toggleLanguage!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15h4q.425 0 .713.288T11 16t-.288.713T10 17H5q-.425 0-.712-.288T4 16V8q0-.425.288-.712T5 7h5q.425 0 .713.288T11 8t-.288.713T10 9H6v2h3q.425 0 .713.288T10 12t-.288.713T9 13H6zm9 2q-.825 0-1.412-.587T13 15q0-.425.288-.712T14 14t.713.288T15 15h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9q0 .425-.288.713T19 10t-.712-.288T18 9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"/></svg>'
  } else {
    document.querySelector('html')!.lang = 'en';
    localStorage.setItem('lang', 'en');
    toggleLanguage!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17q-.825 0-1.412-.587T4 15V7h2v8h3V7h2v8q0 .825-.587 1.413T9 17zm9 0q-.825 0-1.412-.587T13 15v-1h2v1h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9v1h-2V9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"/></svg>';
  }
});

let lang: string|null = localStorage.getItem('lang');
(lang == 'en') 
  ? document.querySelector('html')!.lang = 'es'
  : document.querySelector('html')!.lang = 'en';
toggleLanguage?.click();