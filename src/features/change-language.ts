enum Languages {
  English = 'en',
  Spanish = 'es',
}

const getLanguages = (textToChange:NodeListOf<HTMLElement>, language: string) => {
  fetch(`/assets/lang/${language}.json`)
    .then(res => res.json())
    .then(data => {
      textToChange.forEach((tag:HTMLElement) => {
        let section: string|undefined = tag.dataset.section;
        let value: string|undefined = tag.dataset.value;

        tag.innerHTML = data[section!][value!]; 
      });
    });
}

const ChangeLanguage = (toggleLanguage: HTMLButtonElement|null, textToChange:NodeListOf<HTMLElement>, html: HTMLHtmlElement|null) => {
  toggleLanguage!.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(html!.lang.includes(Languages.English)) {
      html!.lang = Languages.Spanish;
      localStorage.setItem('lang', Languages.Spanish);
      toggleLanguage!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M6 15h4q.425 0 .713.288T11 16t-.288.713T10 17H5q-.425 0-.712-.288T4 16V8q0-.425.288-.712T5 7h5q.425 0 .713.288T11 8t-.288.713T10 9H6v2h3q.425 0 .713.288T10 12t-.288.713T9 13H6zm9 2q-.825 0-1.412-.587T13 15q0-.425.288-.712T14 14t.713.288T15 15h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9q0 .425-.288.713T19 10t-.712-.288T18 9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"/></svg>'
      getLanguages(textToChange, Languages.Spanish);
    } else {
      html!.lang = Languages.English;
      localStorage.setItem('lang', Languages.English);
      toggleLanguage!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M6 17q-.825 0-1.412-.587T4 15V7h2v8h3V7h2v8q0 .825-.587 1.413T9 17zm9 0q-.825 0-1.412-.587T13 15v-1h2v1h3v-2h-3q-.825 0-1.412-.587T13 11V9q0-.825.588-1.412T15 7h3q.825 0 1.413.588T20 9v1h-2V9h-3v2h3q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z"/></svg>';
      getLanguages(textToChange, Languages.English);
    }
  });
}

export default ChangeLanguage;