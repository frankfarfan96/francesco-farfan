const $languages = document.querySelector(".languages"),
  $links = document.querySelectorAll("a.lang"),
  homepage = document.querySelector(".home-page"),
  mySkills = document.querySelector(".my-skills"),
  projects = document.querySelector(".projects"),
  myContact = document.querySelector(".my-contact"),
  hiWorld = document.querySelector(".hola-mundo"),
  myContactbtn1 = document.querySelector(".my-contact-btn-1"),
  mindfullnessLang = document.querySelector(".mindfullness-lang"),
  calisthenicsLang = document.querySelector(".calisthenics-lang"),
  videogamesLang = document.querySelector(".videogames-lang"),
  cvLang = document.querySelector(".cv-lang"),
  reedLang = document.querySelector(".reed-lang"),
  skillsLang = document.querySelector(".skills-lang"),
  myPresentationLang = document.querySelector(".my-presentation-lang"),
  myPresentationLang2 = document.querySelector(".my-presentation-lang-2"),
  myProjectsLang = document.querySelector(".projects-lang"),
  jsIntroLang = document.querySelector(".js-info"),
  reactIntroLang = document.querySelector(".react-info"),
  firtsTitleJsLang = document.querySelector(".first-title-js"),
  date1ModalLang = document.querySelector(".date1-modal"),
  type1ModalLang = document.querySelector(".type1-modal"),
  resType1ModalLang = document.querySelector(".res-type1-modal"),
  desc1ModalLang = document.querySelector(".desc1-modal"),
  resDesc1ModalLang = document.querySelector(".res-desc1-modal"),
  secondTitleJsLang = document.querySelector(".second-title-js"),
  date2ModalLang = document.querySelector(".date2-modal"),
  type2ModalLang = document.querySelector(".type2-modal"),
  resType2ModalLang = document.querySelector(".res-type2-modal"),
  desc2ModalLang = document.querySelector(".desc2-modal"),
  resDesc2ModalLang = document.querySelector(".res-desc2-modal"),
  thirdTitleJsLang = document.querySelector(".third-title-js"),
  date3ModalLang = document.querySelector(".date3-modal"),
  type3ModalLang = document.querySelector(".type3-modal"),
  resType3ModalLang = document.querySelector(".res-type3-modal"),
  desc3ModalLang = document.querySelector(".desc3-modal"),
  resDesc3ModalLang = document.querySelector(".res-desc3-modal"),
  firtsTitleReactLang = document.querySelector(".first-title-react"),
  date1Modal2Lang = document.querySelector(".date1-modal2"),
  type1Modal2Lang = document.querySelector(".type1-modal2"),
  resType1Modal2Lang = document.querySelector(".res-type1-modal2"),
  desc1Modal2Lang = document.querySelector(".desc1-modal2"),
  resDesc1Modal2Lang = document.querySelector(".res-desc1-modal2"),
  secondTitleReactLang = document.querySelector(".second-title-react"),
  date2Modal2Lang = document.querySelector(".date2-modal2"),
  type2Modal2Lang = document.querySelector(".type2-modal2"),
  resType2Modal2Lang = document.querySelector(".res-type2-modal2"),
  desc2Modal2Lang = document.querySelector(".desc2-modal2"),
  resDesc2Modal2Lang = document.querySelector(".res-desc2-modal2"),
  thirdTitleReactLang = document.querySelector(".third-title-react"),
  date3Modal2Lang = document.querySelector(".date3-modal2"),
  type3Modal2Lang = document.querySelector(".type3-modal2"),
  resType3Modal2Lang = document.querySelector(".res-type3-modal2"),
  desc3Modal2Lang = document.querySelector(".desc3-modal2"),
  resDesc3Modal2Lang = document.querySelector(".res-desc3-modal2"),
  socialLang = document.querySelector(".social-lang"),
  contactLang = document.querySelector(".contact-lang"),
  thanksLang = document.querySelector(".thanks-lang"),
  thanks2Lang = document.querySelector(".thanks2-lang"),
  footerLang = document.querySelector(".footer-lang");

$links.forEach((el) => {
  el.addEventListener("click", () => {
    $languages.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");
    mySkills.textContent = data[attr].mySkills;
    projects.textContent = data[attr].projects;
    myContact.textContent = data[attr].myContact;
    hiWorld.textContent = data[attr].hiWorld;
    myContactbtn1.textContent = data[attr].myContactbtn1;
    mindfullnessLang.textContent = data[attr].mindfullnessLang;
    reedLang.textContent = data[attr].reedLang;
    calisthenicsLang.textContent = data[attr].calisthenicsLang;
    videogamesLang.textContent = data[attr].videogamesLang;
    cvLang.textContent = data[attr].cvLang;
    skillsLang.textContent = data[attr].skillsLang;
    myPresentationLang.textContent = data[attr].myPresentationLang;
    myProjectsLang.textContent = data[attr].myProjectsLang;
    jsIntroLang.textContent = data[attr].jsIntroLang;
    reactIntroLang.textContent = data[attr].reactIntroLang;
    firtsTitleJsLang.textContent = data[attr].firtsTitleJsLang;
    date1ModalLang.textContent = data[attr].date1ModalLang;
    type1ModalLang.textContent = data[attr].type1ModalLang;
    resType1ModalLang.textContent = data[attr].resType1ModalLang;
    desc1ModalLang.textContent = data[attr].desc1ModalLang;
    resDesc1ModalLang.textContent = data[attr].resDesc1ModalLang;
    secondTitleJsLang.textContent = data[attr].secondTitleJsLang;
    date2ModalLang.textContent = data[attr].date2ModalLang;
    type2ModalLang.textContent = data[attr].type2ModalLang;
    resType2ModalLang.textContent = data[attr].resType2ModalLang;
    desc2ModalLang.textContent = data[attr].desc2ModalLang;
    resDesc2ModalLang.textContent = data[attr].resDesc2ModalLang;
    thirdTitleJsLang.textContent = data[attr].thirdTitleJsLang;
    date3ModalLang.textContent = data[attr].date3ModalLang;
    type3ModalLang.textContent = data[attr].type3ModalLang;
    resType3ModalLang.textContent = data[attr].resType3ModalLang;
    desc3ModalLang.textContent = data[attr].desc3ModalLang;
    resDesc3ModalLang.textContent = data[attr].resDesc3ModalLang;
    firtsTitleReactLang.textContent = data[attr].firtsTitleReactLang;
    date1Modal2Lang.textContent = data[attr].date1Modal2Lang;
    type1Modal2Lang.textContent = data[attr].type1Modal2Lang;
    resType1Modal2Lang.textContent = data[attr].resType1Modal2Lang;
    desc1Modal2Lang.textContent = data[attr].desc1Modal2Lang;
    resDesc1Modal2Lang.textContent = data[attr].resDesc1Modal2Lang;
    secondTitleReactLang.textContent = data[attr].secondTitleReactLang;
    date2Modal2Lang.textContent = data[attr].date2Modal2Lang;
    type2Modal2Lang.textContent = data[attr].type2Modal2Lang;
    resType2Modal2Lang.textContent = data[attr].resType2Modal2Lang;
    desc2Modal2Lang.textContent = data[attr].desc2Modal2Lang;
    resDesc2Modal2Lang.textContent = data[attr].resDesc2Modal2Lang;
    thirdTitleReactLang.textContent = data[attr].thirdTitleReactLang;
    date3Modal2Lang.textContent = data[attr].date3Modal2Lang;
    type3Modal2Lang.textContent = data[attr].type3Modal2Lang;
    resType3Modal2Lang.textContent = data[attr].resType3Modal2Lang;
    desc3Modal2Lang.textContent = data[attr].desc3Modal2Lang;
    resDesc3Modal2Lang.textContent = data[attr].resDesc3Modal2Lang;
    socialLang.textContent = data[attr].socialLang;
    contactLang.textContent = data[attr].contactLang;
    thanksLang.textContent = data[attr].thanksLang;
    thanks2Lang.textContent = data[attr].thanks2Lang;
    footerLang.textContent = data[attr].footerLang;
  });
});

let data = {
  english: {
    mySkills: "My Skills",
    projects: "Projects",
    myContact: "Contact",
    hiWorld: "Hi World! Welcome to my site",
    myContactbtn1: "Contact",
    mindfullnessLang: "Mindfullness 🧘‍♀️",
    reedLang: "Reed 📚",
    calisthenicsLang: "Calisthenics 💪",
    videogamesLang: "Videogames 🎮",
    cvLang: "My C.V",
    skillsLang: "My Skills",
    myPresentationLang:
      "In 2020 I started a biennial course as FullStack development, where I got to know the world of web development and various frontend and backend technologies. After a year and a half I decided to start my self-taught path and focus on the Frontend side and perfecting its technologies. I believe in hard and continuous work and my goal is to become a Software Engineer. 🤓 ",
    myProjectsLang: "My Projects",
    jsIntroLang:
      "I developed these projects using JavaScript and for the web layout part I used HTML and CSS. All projects are responsive.",
    reactIntroLang:
      "In some of these projects made with React, I also implemented the Redux and/or React-Router libraries. At the moment I continue developing more projects that I will upload later.",
    firtsTitleJsLang: "DOM Exercises",
    date1ModalLang: "Date",
    type1ModalLang: "Type",
    resType1ModalLang: "Site for my practices with the DOM",
    desc1ModalLang: "Description",
    resDesc1ModalLang:
      "In this site I exercised in the domain of the DOM thanks to JS and its events, I made 15 sections where I implemented a different exercise for each one (for example, a digital clock, keyboard events, detection of the webcam, digital sweepstakes, search filters, etc). Also implement a menu-hamburger and more DOM management exercises.",
    date2ModalLang: "Date",
    secondTitleJsLang: "SPA with WordPress as Backend",
    date2ModalLang: "Date",
    type2ModalLang: "Type",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Description",
    resDesc2ModalLang:
      "In this project I did not focus so much on the layout and styles part, it is a minimalist but responsive page. My main focus was on consuming the information with Ajax (with wordpress like backend) to distribute it in this SPA. The data is consumed from any blog made with wordpress (in my case I used CCS-TRICKS). The main articles are in the home page, which presents the infinite scroll. The second is a search section for old articles and in the last one I implemented a form. I also linked a link to a free online course in Spanish where I learned and improved my knowledge in JS.",
    thirdTitleJsLang: "My Web site",
    date3ModalLang: "Date",
    type3ModalLang: "Type",
    resType3ModalLang: "My Digital Portfolio",
    desc3ModalLang: "Description",
    resDesc3ModalLang:
      "This has been my last project done with JS, where I focused on making a responsive and stylish layout in my own way. In the HTML I have implemented meta tags for SEO and Socialmedia. Try not to use JS in cases where you could do it with CSS, like in the Slides part. I also made it multilingual and with dark and light themes.",
    firtsTitleReactLang: "Movie and series search engine with React and Redux",
    date1Modal2Lang: "Date",
    type1Modal2Lang: "Type",
    resType1Modal2Lang: "Movie and series search engine",
    desc1Modal2Lang: "Description",
    resDesc1Modal2Lang:
      "In this project apart from Redux I also used Router-React to make it SPA type. It is a site that shows the series and movies consumed from an api. It has a search engine for the movies and series interested, which are then rendered in 2 slides and when selecting a movie or series, its details are rendered in another route. It is simple layout and it is also responsive.",
    secondTitleReactLang: "Cooming Soon",
    date2Modal2Lang: "Date",
    type2Modal2Lang: "Type",
    resType2Modal2Lang: "-",
    desc2Modal2Lang: "Description",
    resDesc2Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta quod in voluptates libero, ea obcaecati labore cum ducimus! Sint facilis asperiores quibusdam ipsa molestias distinctio iusto doloribus aliquam rerum.",
    thirdTitleReactLang: "Cooming Soon",
    date3Modal2Lang: "Date",
    type3Modal2Lang: "Type",
    resType3Modal2Lang: "-",
    desc3Modal2Lang: "Description",
    resDesc3Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta quod in voluptates libero, ea obcaecati labore cum ducimus! Sint facilis asperiores quibusdam ipsa molestias distinctio iusto doloribus aliquam rerum.",
    socialLang: "My Social",
    contactLang: "Direct Contact",
    thanksLang: "Thank You So Much",
    thanks2Lang: "For your comments",
    footerLang: "2022 - Site developed by ",
  },
  italian: {
    mySkills: "Le mie Skills",
    projects: "Proietti",
    myContact: "Contatto",
    hiWorld: "Ciao Mondo! Benvenuti al mio sito",
    myContactbtn1: "Contatto",
    mindfullnessLang: "Mindfullness 🧘‍♀️",
    reedLang: "Reed 📚",
    calisthenicsLang: "Calisthenics 💪",
    videogamesLang: "Videogiochi 🎮",
    cvLang: "Il mio C.V",
    skillsLang: "Le mie Skills",
    myPresentationLang:
      "Nel 2020 ho iniziato un corso biennale come sviluppatore FullStack, dove ho conosciuto il mondo dello sviluppo web e varie tecnologie frontend e backend. Dopo un anno e mezzo ho deciso di iniziare il mio percorso da autodidatta e di concentrarmi sul lato Frontend, perfezionando quelle tecnologie web. Credo nel lavoro duro e continuo e il mio obiettivo è di diventare un Software Engineer. 🤓 ",
    myProjectsLang: "I miei Proietti",
    jsIntroLang:
      "Ho sviluppato questi progetti utilizzando JavaScript e per la parte del layout web ho utilizzato HTML e CSS. Tutti i progetti sono responsive.",
    reactIntroLang:
      "In alcuni di questi progetti realizzati con React, ho implementato anche le librerie Redux e/o React-Router. Al momento continuo a sviluppare altri progetti che caricherò in seguito.",
    firtsTitleJsLang: "Esercizi DOM",
    date1ModalLang: "Data",
    type1ModalLang: "Tipo",
    resType1ModalLang: "Sito per le mie pratiche con il DOM",
    desc1ModalLang: "Descrizione",
    resDesc1ModalLang:
      "In questo sito mi sono esercitato nel dominio del DOM grazie a JS e ai suoi eventi, ho realizzato 15 sezioni dove ho implementato un esercizio diverso per ciascuna (ad esempio un orologio digitale, eventi da tastiera, rilevamento della webcam, lotterie digitali, filtri di ricerca, ecc.). Implementare anche un menu-hamburger e più esercizi di manipolazione del DOM.",
    secondTitleJsLang: "SPA con WordPress come Backend",
    date2ModalLang: "Data",
    type2ModalLang: "Tipo",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Descrizione",
    resDesc2ModalLang:
      "In questo progetto non mi sono concentrato tanto sulla parte del layout e degli stili, è una pagina minimalista ma responsive. Il mio obiettivo principale era quello di consumare le informazioni da un data base (wordpress come backend) con Ajax per distribuirle in questa SPA. I dati vengono consumati da qualsiasi blog realizzato con wordpress (nel mio caso ho usato CCS-TRICKS). Gli articoli principali sono nella home page, dove ho implementato lo scroll infinito. La seconda è una sezione di ricerca di vecchi articoli (anche essa con lo infinite scroll) e nell'ultima ho implementato un formulario. Ho anche collegato un link a un corso online gratuito in spagnolo dove ho imparato e migliorato le mie conoscenze in JS.",
    thirdTitleJsLang: "Il mio sito web",
    date3ModalLang: "Data",
    type3ModalLang: "Tipo",
    resType3ModalLang: "Il mio Portfoglio Digitale",
    desc3ModalLang: "Descrizione",
    resDesc3ModalLang:
      "Questo è stato il mio ultimo progetto realizzato con JS, in cui mi sono concentrato sulla creazione di un layout responsive ed elegante a modo mio. Nell'HTML ho implementato i meta tag per SEO e Socialmedia. Ho cercato di non usare JS nei casi in cui potevo farli con CSS, come nella parte delle Slides dentro la sezione Proietti e quando si seleziona un film o una serie,  vengono visualizzati i suoi dettagli in un altra route. L'ho anche reso multilingue e con temi chiari e scuri.",
    firtsTitleReactLang: "Film e serie con React e Redux",
    date1Modal2Lang: "Data",
    type1Modal2Lang: "Tipo",
    resType1Modal2Lang: "Motore di ricerca per film e serie",
    desc1Modal2Lang: "Descrizione",
    resDesc1Modal2Lang:
      "In questo progetto oltre a Redux ho anche usato Router-React per renderlo di tipo SPA. È un sito che mostra le serie e i film consumati da un'API. Ha un motore di ricerca per i film e le serie interessati, che vengono poi renderizzati in 2 slides. Presenta un layout semplice e anche responsive.",
    secondTitleReactLang: "Cooming Soon",
    date2Modal2Lang: "Data",
    type2Modal2Lang: "Tipo",
    resType2Modal2Lang: "-",
    desc2Modal2Lang: "Descrizione",
    resDesc2Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, amet accusantium! Debitis, adipisci asperiores mollitia beatae eum consequatur praesentium corrupti neque tempora assumenda atque distinctio autem quos dicta sed. Libero?",
    thirdTitleReactLang: "Cooming Soon",
    date3Modal2Lang: "Data",
    type3Modal2Lang: "Tipo",
    resType3Modal2Lang: "-",
    desc3Modal2Lang: "Descrizione",
    resDesc3Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, amet accusantium! Debitis, adipisci asperiores mollitia beatae eum consequatur praesentium corrupti neque tempora assumenda atque distinctio autem quos dicta sed. Libero?",
    socialLang: "I miei Social",
    contactLang: "Contatto Diretto",
    thanksLang: "Grazie !",
    thanks2Lang: "Per il tuo commentario",
    footerLang: "2022 - Sito sviluppato da ",
  },
  spanish: {
    mySkills: "Mis Habilidades",
    projects: "Proyectos",
    myContact: "Contacto",
    hiWorld: "Hola Mundo! Bienvenid@ a mi sitio",
    myContactbtn1: "Contáctame",
    mindfullnessLang: "Meditación 🧘‍♀️",
    reedLang: "Leer 📚",
    calisthenicsLang: "Calistenia 💪",
    videogamesLang: "Videojuegos 🎮",
    cvLang: "Mi C.V",
    skillsLang: "Mis Habilidades",
    myPresentationLang:
      "En el 2020 empezé un curso bienal como FullStack development, donde conocí el mundo del desarrollo web y diversas tecnologías del lado frontend y backend. Después de un año y medio decidí empezar mi camino como autodidacta y focalizarme en el lado Frontend y en perfeccionar sus tecnologías. Creo en la formación continua y mi meta es volverme Software Engeniere. 🤓 ",
    myProjectsLang: "Mis Proyectos",
    jsIntroLang:
      "Estos proyectos los desarrollé usando JavaScript y para la parte de maquetación web usé HTML y CSS. Todos los proyectos son responsive.",
    reactIntroLang:
      "En algunos de estos proyectos realizados con React implemente también las librerias Redux y/o React-Router. Al momento sigo desarrollando mas proyectos que cargaré más adelante.",
    firtsTitleJsLang: "Ejercicios DOM",
    date1ModalLang: "Fecha",
    type1ModalLang: "Tipo",
    resType1ModalLang: "Sitio para mis prácticas con el DOM",
    desc1ModalLang: "Descripción",
    resDesc1ModalLang:
      "En este sitio me ejercité en el dominio del DOM gracias JS y sus eventos, hize 15 secciones donde he implementado un ejercicio diverso por cada una (por ejemplo, un reloj digital, eventos del teclado, detección de la camara web, sorteo digital, filtros de busqueda, etc). Implementé también un menú hamburguesa y más ejercicios del manejo del DOM.",
    secondTitleJsLang: "SPA con WordPress como Backend",
    date2ModalLang: "Fecha",
    type2ModalLang: "Tipo",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Descripción",
    resDesc2ModalLang:
      "En este proyecto no me enfoqué tanto en la parte de la maquetación y estilos, es una pagina minimalista pero responsiva. Mi enfoque principal fue en el consumo de la información con Ajax para distribuirla en esta SPA. Los datos vienen consumidos desde cualquier blog hecho con wordpress (en mi caso use CCS-TRICKS). Los articulos principales estan en la home, la cual presenta el infinite scroll. La segunda es una sección de busqueda de viejos articulos y en la ultima implementé un formulario. También enlacé un link hacia un curso online gratiuto en español donde aprendí y mejore mis conocimientos en JS.",
    thirdTitleJsLang: "Mi Sitio Web",
    date3ModalLang: "Fecha",
    type3ModalLang: "Tipo",
    resType3ModalLang: "Mi Portfolio Digital",
    desc3ModalLang: "Descripción",
    resDesc3ModalLang:
      "Este ha sido mi ultimo proyecto realizado con JS, donde me focalize en hacer una maquetacion responsiva y etilizada a mi modo. En el HTML implementé metatags para SEO y Socialmedia. Trate de no usar JS en los casos donde podia hacerlos con CSS, como en la parte de las Slides. Lo hize tambien multilingue y con los temas oscuro y claro.",
    firtsTitleReactLang: "Películas y series con React y Redux",
    date1Modal2Lang: "Fecha",
    type1Modal2Lang: "Tipo",
    resType1Modal2Lang: "Buscador de películas y series",
    desc1Modal2Lang: "Descripción",
    resDesc1Modal2Lang:
      "En este proyecto a parte de Redux usé también Router-React para hacerla de tipo SPA. Es un sitio que mustra las series y películas consumidas de un api. Tiene un buscador para las películas y series interesadas, que se renderizan después en 2 slides y al seleccionar una película o serie, se renderizán sus detalles en otra ruta. Es de maquetación simple y también es responsive ",
    secondTitleReactLang: "Cooming Soon",
    date2Modal2Lang: "Fecha",
    type2Modal2Lang: "Tipo",
    resType2Modal2Lang: "-",
    desc2Modal2Lang: "Descripción",
    resDesc2Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta quod in voluptates libero, ea obcaecati labore cum ducimus! Sint facilis asperiores quibusdam ipsa molestias distinctio iusto doloribus aliquam rerum.",
    thirdTitleReactLang: "Cooming Soon",
    date3Modal2Lang: "Fecha",
    type3Modal2Lang: "Tipo",
    resType3Modal2Lang: "-",
    desc3Modal2Lang: "Descripción",
    resDesc3Modal2Lang:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta quod in voluptates libero, ea obcaecati labore cum ducimus! Sint facilis asperiores quibusdam ipsa molestias distinctio iusto doloribus aliquam rerum.",
    socialLang: "Mis Redes Sociales",
    contactLang: "Contacto Directo",

    thanksLang: "Muchas Gracias!",
    thanks2Lang: "Por tus comentarios",
    footerLang: "2022 - Sitio desarrollado por ",
  },
};
