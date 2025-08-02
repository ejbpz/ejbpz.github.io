import ChangeLanguage from "./features/change-language";
import ChangeTheme from "./features/change-theme";
import CreateProjects from "./features/create-projects";

let html: HTMLHtmlElement|null = document.querySelector('html');
let projects: HTMLDivElement|null = document.querySelector('#projects-divs');
let toggleTheme: HTMLButtonElement|null = document.querySelector('#button-theme');

CreateProjects(projects);
ChangeTheme(toggleTheme, html);

let theme: string|null = localStorage.getItem('theme');
(theme == 'dark') 
  ? html?.classList.remove('dark')
  : html?.classList.add('dark');
toggleTheme?.click();

let toggleLanguage: HTMLButtonElement|null = document.querySelector('#button-lang');
let textToChange:NodeListOf<HTMLElement> = document.querySelectorAll('[data-section]');

ChangeLanguage(toggleLanguage, textToChange, html)

let lang: string|null = localStorage.getItem('lang');
(lang == 'en') 
  ? document.querySelector('html')!.lang = 'es'
  : document.querySelector('html')!.lang = 'en';
toggleLanguage?.click();