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
  //---JS projects
  //---
  firtsTitleJsLang = document.querySelector(".first-title-js"),
  date1ModalLang = document.querySelector(".date1-modal"),
  type1ModalLang = document.querySelector(".type1-modal"),
  resType1ModalLang = document.querySelector(".res-type1-modal"),
  desc1ModalLang = document.querySelector(".desc1-modal"),
  resDesc1ModalLang = document.querySelector(".res-desc1-modal"),
  //---
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
  fourthTitleJsLang = document.querySelector(".fourth-title-js"),
  date4ModalLang = document.querySelector(".date4-modal"),
  type4ModalLang = document.querySelector(".type4-modal"),
  resType4ModalLang = document.querySelector(".res-type4-modal"),
  desc4ModalLang = document.querySelector(".desc4-modal"),
  resDesc4ModalLang = document.querySelector(".res-desc4-modal"),
  //
  fifthTitleJsLang = document.querySelector(".first-title-js"),
  date5ModalLang = document.querySelector(".date5-modal"),
  type5ModalLang = document.querySelector(".type5-modal"),
  resType5ModalLang = document.querySelector(".res-type5-modal"),
  desc5ModalLang = document.querySelector(".desc5-modal"),
  resDesc5ModalLang = document.querySelector(".res-desc5-modal"),
  //
  //--React projects
  //---
  firtsTitleReactLang = document.querySelector(".first-title-react"),
  date1Modal2Lang = document.querySelector(".date1-modal2"),
  type1Modal2Lang = document.querySelector(".type1-modal2"),
  resType1Modal2Lang = document.querySelector(".res-type1-modal2"),
  desc1Modal2Lang = document.querySelector(".desc1-modal2"),
  resDesc1Modal2Lang = document.querySelector(".res-desc1-modal2"),
  //---
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
  fourthTitleReactLang = document.querySelector(".fourth-title-react"),
  date4Modal2Lang = document.querySelector(".date4-modal2"),
  type4Modal2Lang = document.querySelector(".type4-modal2"),
  resType4Modal2Lang = document.querySelector(".res-type4-modal2"),
  desc4Modal2Lang = document.querySelector(".desc4-modal2"),
  resDesc4Modal2Lang = document.querySelector(".res-desc4-modal2"),
  // ***
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
    //---JS projects
    //---
    firtsTitleJsLang.textContent = data[attr].firtsTitleJsLang;
    date1ModalLang.textContent = data[attr].date1ModalLang;
    type1ModalLang.textContent = data[attr].type1ModalLang;
    resType1ModalLang.textContent = data[attr].resType1ModalLang;
    desc1ModalLang.textContent = data[attr].desc1ModalLang;
    resDesc1ModalLang.textContent = data[attr].resDesc1ModalLang;
    //---

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
    fourthTitleJsLang.textContent = data[attr].fourthTitleJsLang;
    date4ModalLang.textContent = data[attr].date4ModalLang;
    type4ModalLang.textContent = data[attr].type4ModalLang;
    resType4ModalLang.textContent = data[attr].resType4ModalLang;
    desc4ModalLang.textContent = data[attr].desc4ModalLang;
    resDesc4ModalLang.textContent = data[attr].resDesc4ModalLang;

    fifthTitleJsLang.textContent = data[attr].fifthTitleJsLang;
    date5ModalLang.textContent = data[attr].date5ModalLang;
    type5ModalLang.textContent = data[attr].type5ModalLang;
    resType5ModalLang.textContent = data[attr].resType5ModalLang;
    desc5ModalLang.textContent = data[attr].desc5ModalLang;
    resDesc5ModalLang.textContent = data[attr].resDesc5ModalLang;

    //--React projects
    //---
    firtsTitleReactLang.textContent = data[attr].firtsTitleReactLang;
    date1Modal2Lang.textContent = data[attr].date1Modal2Lang;
    type1Modal2Lang.textContent = data[attr].type1Modal2Lang;
    resType1Modal2Lang.textContent = data[attr].resType1Modal2Lang;
    desc1Modal2Lang.textContent = data[attr].desc1Modal2Lang;
    resDesc1Modal2Lang.textContent = data[attr].resDesc1Modal2Lang;
    //---
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
    fourthTitleReactLang.textContent = data[attr].fourthTitleReactLang;
    date4Modal2Lang.textContent = data[attr].date4Modal2Lang;
    type4Modal2Lang.textContent = data[attr].type4Modal2Lang;
    resType4Modal2Lang.textContent = data[attr].resType4Modal2Lang;
    desc4Modal2Lang.textContent = data[attr].desc4Modal2Lang;
    resDesc4Modal2Lang.textContent = data[attr].resDesc4Modal2Lang;
    //****

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
    //---JS projects
    //---
    firtsTitleJsLang: "DOM Exercises",
    date1ModalLang: "Date",
    type1ModalLang: "Type",
    resType1ModalLang: "Site for my practices with the DOM",
    desc1ModalLang: "Description",
    resDesc1ModalLang:
      "In this site I exercised in the domain of the DOM thanks to JS and its events, I made 15 sections where I implemented a different exercise for each one (for example, a digital clock, keyboard events, detection of the webcam, digital sweepstakes, search filters, etc). Also implement a menu-hamburger and more DOM management exercises.",
    //---

    secondTitleJsLang: "SPA with WordPress as Backend",
    date2ModalLang: "Date",
    type2ModalLang: "Type",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Description",
    resDesc2ModalLang:
      "This project is a minimalist but responsive page. I used Wordpress as a database, from where it receives the information with Ajax to distribute it in this SPA. The data is consumed from any blog made with wordpress (in my case I used CCS-TRICKS). The main articles are in the home page, which presents the infinite scroll. The second is a search section for old articles and in the last one I implemented a form. I also linked a link to a free online course in Spanish where I learned and improved my knowledge in JS.",
    thirdTitleJsLang: "My Web site",
    date3ModalLang: "Date",
    type3ModalLang: "Type",
    resType3ModalLang: "My Digital Portfolio",
    desc3ModalLang: "Description",
    resDesc3ModalLang:
      "In this project I made a responsive and stylish layout in my own way. In the HTML I implemented meta tags for SEO and Socialmedia. Each section has a particular detail made with Javascript and/or css.",
    fourthTitleJsLang: "Responsive Admin Dashboard (SPA static)",
    date4ModalLang: "Date",
    type4ModalLang: "Type",
    resType4ModalLang: "SPA(static) of an administration site with Dashboard",
    desc4ModalLang: "Description",
    resDesc4ModalLang:
      "In this project I made various interfaces of an Admin DashBoard site, using JavaScript routing to render the various routes. The main components are the menu that is on the left side, where all the paths of the site are linked, and the navbar that consists of the button to open and close the menu, a search bar and a photo of the user that should take you to the user's profile. The interfaces that I managed to make are the homepage (with some bugs with the css, because I used a single css file for the styles, a huge mistake), the Dashboard, the Costumers table and the messages (which was left halfway, for the difficulty I created in the Css). So I couldn't finish all the interfaces of the site, because it was also very difficult for me to do the layout correctly with Html through the routing with JavaScript. I realized that for projects like this it is convenient to use React or a framework that facilitates the routing and rendering of the components, since there are so many complex components.",

    fifthTitleJsLang: "Drawing App",
    date5ModalLang: "Date",
    type5ModalLang: "Type",
    resType5ModalLang: "Powerpoint",
    desc5ModalLang: "Description",
    resDesc5ModalLang:
      "This project has a simple layout, in the center of the page there is a digital 'whiteboard', made with the Html canvas element. On the left side there is a small dashboard to manage the various actions when drawing. In it, implement the following functions: Straight line, rectangle, circle and triangle shape, with the possibility of drawing full figures or just the edges. You can also choose the color you want and clean the canvas or save it to a file and download it. It is not a responsive site because I focused on practicing with JavaScript.",

    //---React
    //---
    firtsTitleReactLang: "Movie and series search engine with React and Redux",
    date1Modal2Lang: "Date",
    type1Modal2Lang: "Type",
    resType1Modal2Lang: "Movie and series search engine",
    desc1Modal2Lang: "Description",
    resDesc1Modal2Lang:
      "In this project apart from Redux I also used Router-React to make it SPA type. It is a site that shows the series and movies consumed from an api. It has a search engine for the movies and series interested, which are then rendered in 2 slides and when selecting a movie or series, its details are rendered in another route. It is simple layout and it is also responsive.",
    //---
    secondTitleReactLang: "Buuking",
    date2Modal2Lang: "Date",
    type2Modal2Lang: "Type",
    resType2Modal2Lang: "Buuking, a replica of Booking",
    desc2Modal2Lang: "Description",
    resDesc2Modal2Lang:
      "In this project I made a replica of the Booking site, copying some parts of its interfaces and implementing some of its functions. The 3 interfaces that I made were the homepage, the Search results after selecting the search button and the page after having selected one of the 'searched' hotels. It is a static site and it is not responsive, is a simple project in order to continue practicing handling React, Redux, React-Router-Dom and Calendar another library. Once you have entered the data (place, date and people) on the homepage and have selected the 'Search' button you go to another interface (the 'results' of the search) with the entered data rendered. In it if you select the 'View Details' button you go to the third and last interface (details of the selected place). In this last interface I have implemented a Slide inside a Modal after selecting one of the photos, all without external libraries. ",
    thirdTitleReactLang: "Administration app with React",
    date3Modal2Lang: "Date",
    type3Modal2Lang: "Type",
    resType3Modal2Lang: "Users Administration Panel",
    desc3Modal2Lang: "Description",
    resDesc3Modal2Lang:
      "In this project I created a Dashboard, I only made 4 interfaces and implemented some features. There are two components that are always present, the SideBar and the Navigation Bar. The first interface is Homepage, where several cards are rendered with the content of the sales revenue data, balances, orders, users, then a cartesian graph that shows the monthly income (implemented with an external library,) and at the end a table where the last transactions are listed (I also implemented it with mui). From the sidebar, there are two links (Users and Products) that will take you to the second interface, where the Users are PivotTabled (using another library). The listed users can be deleted or also by selecting the 'View' button you can go to another interface where the user's purchase history and personal data are displayed. Returning to the user list interface, selecting the 'Add New' button, the last interface I implemented is rendered, where there is a form to fill out, where the function to upload the photo from local memory is active. I finished the project implementing the Dark Mode thanks to the api createContext from React.",
    fourthTitleReactLang: "FFiteness Web",
    date4Modal2Lang: "Date",
    type4Modal2Lang: "Type",
    resType4Modal2Lang: "A site to find fitness exercises (SPA)",
    desc4Modal2Lang: "Description",
    resDesc4Modal2Lang:
      "In this project, I used React and react-rout to create a SPA exercise site. For the UI I used the Mui library (and just a CSS file for the initial setup) and to do the 2 fetch of the data that I implemented, I used RapidAPI. To pass the data between the 2 pages, I didn't use useContext because there were few components, so in this exercise I passed states through the props. The style of the site is simple but elegant, on the homepage there is a search engine that calls an exercise API (ExerciseDB) thanks to the RapidApi platform and under that search engine I implemented a Slide using the 'react-horizontal-' library. scrolling-menu'. On the second page, the selected exercise is displayed with more information about that exercise and also some related video tutorials (with another api also from RapidApi). And finally I reused 2 components (HorizontalScrollbar and ExerciseCard) that render 2 sections with similar exercises. ",

    //---
    socialLang: "My Social",
    contactLang: "Direct Contact",
    thanksLang: "Thank You So Much",
    thanks2Lang: "For your comments",
    footerLang: "2022 - Site developed by ",
  },
  italian: {
    mySkills: "Le mie Skills",
    projects: "Progetti",
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
    myProjectsLang: "I miei Progetti",
    jsIntroLang:
      "Ho sviluppato questi progetti utilizzando JavaScript e per la parte del layout web ho utilizzato HTML e CSS. Tutti i progetti sono responsive.",
    reactIntroLang:
      "In alcuni di questi progetti realizzati con React, ho implementato anche le librerie Redux e/o React-Router. Al momento continuo a sviluppare altri progetti che caricherò in seguito.",
    //---JS projects
    //---
    firtsTitleJsLang: "Esercizi DOM",
    date1ModalLang: "Data",
    type1ModalLang: "Tipo",
    resType1ModalLang: "Sito per le mie pratiche con il DOM",
    desc1ModalLang: "Descrizione",
    resDesc1ModalLang:
      "In questo sito mi sono esercitato nel dominio del DOM grazie a JS e ai suoi eventi, ho realizzato 15 sezioni dove ho implementato un esercizio diverso per ciascuna (ad esempio un orologio digitale, eventi da tastiera, rilevamento della webcam, lotterie digitali, filtri di ricerca, ecc.). Implementare anche un menu-hamburger e più esercizi di manipolazione del DOM.",
    //---

    secondTitleJsLang: "SPA con WordPress come Backend",
    date2ModalLang: "Data",
    type2ModalLang: "Tipo",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Descrizione",
    resDesc2ModalLang:
      "Questo progetto è una pagina minimalista ma reattiva. Ho usato Wordpress come database, da dove riceve le informazioni con Ajax per distribuirle in questa SPA. I dati vengono consumati da qualsiasi blog realizzato con wordpress (nel mio caso ho usato CCS-TRICKS). Gli articoli principali sono nella home page, dove ho implementato lo scroll infinito. La seconda è una sezione di ricerca di vecchi articoli (anche essa con lo infinite scroll) e nell'ultima ho implementato un formulario. Ho anche collegato un link a un corso online gratuito in spagnolo dove ho imparato e migliorato le mie conoscenze in JS.",
    thirdTitleJsLang: "Il mio sito web",
    date3ModalLang: "Data",
    type3ModalLang: "Tipo",
    resType3ModalLang: "Il mio Portfoglio Digitale",
    desc3ModalLang: "Descrizione",
    resDesc3ModalLang:
      "In questo progetto ho realizzato un layout reattivo ed elegante a modo mio. Nell'HTML ho implementato i meta tag per SEO e Socialmedia. Ogni sezione ha un dettaglio particolare realizzato con Javascript e/o css.",

    fourthTitleJsLang: "Dashboard di Amministrazione Responsive (SPA statica)",
    date4ModalLang: "Data",
    type4ModalLang: "Tipo",
    resType4ModalLang:
      "SPA(statica) di un sito di amministrazione con Dashboard",
    desc4ModalLang: "Descrizione",
    resDesc4ModalLang:
      "In questo progetto ho realizzato varie interfacce di un sito Admin DashBoard, utilizzando il routing JavaScript per renderizzare i vari path. I componenti principali sono il menu che si trova sul lato sinistro, dove sono collegati tutti i percorsi del sito, e la navbar dove si trovano un pulsante per aprire e chiudere il menu, una barra di ricerca e una foto dell'utente che dovrebbe portarti al profilo dell'utente. Le interfacce che sono riuscito a realizzare sono la homepage (con qualche bug nel css, perché ho usato un unico file css per tutti gli stili, un grosso errore), la Dashboard, la tabella dei Clienti e i messaggi (che è stato lasciato a metà, per la difficoltà che ho creato nel Css). Quindi non sono riuscito a terminare tutte le interfacce del sito, visto che è stato anche molto difficile per me lavorare con il Html attraverso il routing di JavaScript. Mi sono reso conto che per progetti come questo è conveniente utilizzare React o un framework che faciliti il ​​routing e il rendering delle diverse componenti, dato che molto componenti sono complesse.",

    fifthTitleJsLang: "Drawing App",
    date5ModalLang: "Data",
    type5ModalLang: "Tipo",
    resType5ModalLang: "Powerpoint",
    desc5ModalLang: "Descrizione",
    resDesc5ModalLang:
      "Questo progetto ha un layout semplice, al centro della pagina c'è una 'lavagna' digitale, realizzata con l'elemento canvas di Html. Sul lato sinistro è presente una piccola dashboard per gestire le varie azioni durante l'ora di disegno. Vi ho implementato le seguenti funzioni: linea retta, rettangolo, cerchio e forma triangolare, con la possibilità di disegnare figure riempite o solo i bordi. Puoi anche scegliere il colore che desideri e pulire il Canvas o salvarlo in un file e scaricarlo. Non è un sito reattivo perché mi sono concentrato sulla pratica con JavaScript.",

    //---React
    //---
    firtsTitleReactLang: "Film e serie con React e Redux",
    date1Modal2Lang: "Data",
    type1Modal2Lang: "Tipo",
    resType1Modal2Lang: "Motore di ricerca per film e serie",
    desc1Modal2Lang: "Descrizione",
    resDesc1Modal2Lang:
      "In questo progetto oltre a Redux ho anche usato Router-React per renderlo di tipo SPA. È un sito che mostra le serie e i film consumati da un'API. Ha un motore di ricerca per i film e le serie interessati, che vengono poi renderizzati in 2 slides. Presenta un layout semplice e anche responsive.",
    //---

    secondTitleReactLang: "Buuking",
    date2Modal2Lang: "Data",
    type2Modal2Lang: "Tipo",
    resType2Modal2Lang: "Buuking, una replica di Booking",
    desc2Modal2Lang: "Descrizione",
    resDesc2Modal2Lang:
      "In questo progetto ho realizzato una replica del sito di Booking, copiando alcune parti delle sue interfacce e implementandone alcune funzioni. Le 3 interfacce che ho realizzato sono state la home page, i risultati della ricerca dopo aver selezionato il pulsante 'search' e la pagina dopo aver selezionato uno degli hotel 'cercati'. È un sito statico e non è responsive, è un progetto semplice per continuare a esercitarmi con React, Redux, React-Router-Dom e Calendar un'altra libreria. Una volta inseriti nella homepage i dati (luogo, data e persone) e aver selezionato il pulsante 'Search' si va in un'altra interfaccia (i 'risultati' della ricerca) con i dati inseriti renderizzati. In essa se si seleziona il pulsante 'View Details' si va nella terza e ultima interfaccia (dettagli del luogo selezionato). In questa ultima interfaccia ho implementato una Slide dentro una Modal dopo selezionare una delle foto, il tutto senza librerie esterne.",

    thirdTitleReactLang: "App di amministrazione con React",
    date3Modal2Lang: "Data",
    type3Modal2Lang: "Tipo",
    resType3Modal2Lang: "Pannello di amministrazione degli utenti",
    desc3Modal2Lang: "Descrizione",
    resDesc3Modal2Lang:
      "In questo progetto ho creato una Dashboard, ho realizzato solo 4 interfacce e implementato alcune funzionalità. Ci sono due componenti sempre presenti, la SideBar e la Navigation Bar. La prima interfaccia è Homepage, in cui vengono visualizzate diverse schede con il contenuto dei dati sui ricavi di vendita, saldi, ordini, utenze, poi un grafico cartesiano che mostra il reddito mensile (implementato con una libreria esterna) e alla fine una tabella dove sono elencate le ultime transazioni (l'ho implementato anche con mui). Dalla SideBar , ci sono due collegamenti (Utenti e Prodotti) che ti porteranno alla seconda interfaccia, dove gli Utenti vengono renderizzati in una tabella dinamica (usando un'altra libreria con mui). Gli utenti elencati possono essere cancellati o anche selezionando il pulsante 'View' è possibile passare a un'altra interfaccia in cui vengono visualizzati i suoi dettagli ovvero, la cronologia degli acquisti e i dati personali dell'utente. Alla fine, tornando all'interfaccia della lista utenti, selezionando il pulsante 'Add New', viene visualizzata l'ultima interfaccia che ho implementato, dove c'è un form da compilare, e dove la funzione per caricare una foto dalla memoria locale è attiva. Ho terminato il progetto implementando la Dark Mode grazie all'api createContext di React.",

    fourthTitleReactLang: "FFiteness Web",
    date4Modal2Lang: "Data",
    type4Modal2Lang: "Tipo",
    resType4Modal2Lang: "Un sito per trovare esercizi di fitness (SPA)",
    desc4Modal2Lang: "Descrizione",
    resDesc4Modal2Lang:
      "In questo progetto, ho usato React e react-rout per creare una SPA di un sito di esercizi. Per l'UI ho usato la libreria Mui (e solo un file CSS per il setup iniziale) e per fare le 2 fetch dei dati che ho usato, ho usato RapidAPI. Per il passaggio dei dati tra le 2 pagine, non ho usato useContext perché c'erano poche componenti, quindi in questo esercizio ho passato gli stati attraverso le props. Lo stile del sito è semplice ma elegante, nella pagina dell'Homepage c'è un motore di ricerca che effettua la call fetch ad un'api di esercizi(ExerciseDB) grazie alla piattaforma RapidApi e sotto quel motore di ricerca ho implementato una slide usando la libreria 'react-horizontal-scrolling-menu'. Nella seconda pagina, l'esercizio selezionato viene visualizzato e vengono visualizzate ulteriori informazioni riguardo l'esercizio e anche alcuni video tutorial correlati (con un'altra api sempre di RapidApi). E finalmente ho riutilizzato 2 componenti (HorizontalScrollbar e ExerciseCard) che renderizzano 2 sezioni con esercizi simili. ",

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
    //---JS projects
    //---
    firtsTitleJsLang: "Ejercicios DOM",
    date1ModalLang: "Fecha",
    type1ModalLang: "Tipo",
    resType1ModalLang: "Sitio para mis prácticas con el DOM",
    desc1ModalLang: "Descripción",
    resDesc1ModalLang:
      "En este sitio me ejercité en el dominio del DOM gracias JS y sus eventos, hize 15 secciones donde he implementado un ejercicio diverso por cada una (por ejemplo, un reloj digital, eventos del teclado, detección de la camara web, sorteo digital, filtros de busqueda, etc). Implementé también un menú hamburguesa y más ejercicios del manejo del DOM.",
    //---

    secondTitleJsLang: "SPA con WordPress como Backend",
    date2ModalLang: "Fecha",
    type2ModalLang: "Tipo",
    resType2ModalLang: "SPA (Single Page Application)",
    desc2ModalLang: "Descripción",
    resDesc2ModalLang:
      "Este proyecto es una página minimalista pero responsiva. Usé como database Wordpress, desde donde recibe la información con Ajax para distribuirla en esta SPA. Los datos vienen consumidos desde cualquier blog hecho con wordpress (en mi caso use CCS-TRICKS). Los articulos principales estan en la home, la cual presenta el infinite scroll. La segunda es una sección de busqueda de viejos articulos y en la ultima implementé un formulario. También enlacé un link hacia un curso online gratiuto en español donde aprendí y mejore mis conocimientos en JS.",

    thirdTitleJsLang: "Mi Sitio Web",
    date3ModalLang: "Fecha",
    type3ModalLang: "Tipo",
    resType3ModalLang: "Mi Portfolio Digital",
    desc3ModalLang: "Descripción",
    resDesc3ModalLang:
      "En este proyecto hize una maquetación responsiva y etilizada a mi modo. En el HTML implementé metatags para SEO y Socialmedia. Cada sección tiene un detalle particular hecha con Javascript y/o css.",

    fourthTitleJsLang: "Administrador Dashboard Responsive (SPA estatica)",
    date1ModalLang: "Fecha",
    type1ModalLang: "Tipo",
    resType1ModalLang:
      "SPA(estatica) de un sitio de administración con Dashboard",
    desc1ModalLang: "Descripción",
    resDesc1ModalLang:
      "En este proyecto hize varias interfaces de un sitio Admin DashBoard, atravez del enrutamiento con JavaScript para renderizar las diversas rutas. Las componentes principales son el menú que se encuentra al lado izquierdo, donde están enlazadas todas las rutas del sitio, y la navbar que consta del botón para abrir y cerrar el menú, una barra de búsqueda y una foto del usuario que te tendría que llevar al perfil del usuario. Las interfacez que logré realizar son la homepage(con algunos bugs con el css, debido a que usé un único file css para los estilos, grandisimo error), la Dashboard, la table de los Costumers y los mensajes (que quedó a medias, por la dificultad que creé en el Css). Entonces no logré terminar todas las interfaces del sitio, porque también me resultaba muy complicado hacer correctamente el maquetado con Html atravez del enrutamiento con JavaScript. Me di cuenta que para proyectos como este conviene usar React o un framework que facilite el enrutamiente y el renderizado de las componentes, visto que hay tantas componentes complejas.",

    fifthTitleJsLang: "Drawing App",
    date5ModalLang: "Fecha",
    type5ModalLang: "Tipo",
    resType5ModalLang: "Powerpoint",
    desc5ModalLang: "Descripción",
    resDesc5ModalLang:
      "Este proyecto tiene un layout simple, al centro de la página hay una 'pizarra' digital, hecha con el elemento canvas de Html. En la parte de la izquierda presenta una pequeña dashboard para gestionar las diversas acciones a la hora de dibujar. En ella implemente las siguientes funciones: Linea recta, forma de rectángulo, círculo y triángulo, con la posibilidad de dibujar las figuras llenas o solo los bordes. También se puede escoger el color que se quiera y limpiar el canvas o poder salvarlo en un file y descargarlo. No es un sitio responsive pués me focalizé en practicar con JavaScript. ",

    //---React
    //---
    firtsTitleReactLang: "Películas y series con React y Redux",
    date1Modal2Lang: "Fecha",
    type1Modal2Lang: "Tipo",
    resType1Modal2Lang: "Buscador de películas y series",
    desc1Modal2Lang: "Descripción",
    resDesc1Modal2Lang:
      "En este proyecto a parte de Redux usé también Router-React para hacerla de tipo SPA. Es un sitio que mustra las series y películas consumidas de un api. Tiene un buscador para las películas y series interesadas, que se renderizan después en 2 slides y al seleccionar una película o serie, se renderizán sus detalles en otra ruta. Es de maquetación simple y también es responsive ",
    //---

    secondTitleReactLang: "Buuking",
    date2Modal2Lang: "Fecha",
    type2Modal2Lang: "Tipo",
    resType2Modal2Lang: "Buuking, una réplica de Booking",
    desc2Modal2Lang: "Descripción",
    resDesc2Modal2Lang:
      "En este proyecto realicé una réplica del sitio de Booking, copiando algunas partes de su interfaces e implementando algunas de sus funciones. Las 3 interfaces que hice fueron las página de inicio, los resultados de la búsqueda después de seleccionar el botón de búsqueda y la página después de haber seleccionado uno de los hoteles 'buscados'. Es un sitio estático y no es responsive, es un proyecto simple para seguir practicando el manejo de React, Redux, React-Router-Dom y Calendar, otra libreria que también implementé. Una vez que haya ingresado los datos (lugar, fecha y personas) en la página de inicio y haya seleccionado el botón 'Search', pasará a otra interfaz (los 'resultados' de la búsqueda) con los datos ingresados. En él si seleccionas el botón 'View Details' vas a la tercera y última interfaz (detalles del lugar seleccionado). En esta última interfaz he implementado un Slide dentro de un Modal después de seleccionar una de las fotos, todo ello sin librerias externas.",

    thirdTitleReactLang: "App de administración con React",
    date3Modal2Lang: "Fecha",
    type3Modal2Lang: "Tipo",
    resType3Modal2Lang: "Panel de Administración de usuarios",
    desc3Modal2Lang: "Descripción",
    resDesc3Modal2Lang:
      " En este proyecto creé una Dashboard, solo hice 4 interfaces e implementé algunas funciones. Hay dos componentes que siempre estan presentes, la SideBar y la barra de navegación. La primera interfaz es la Homepage, donde se renderizan varias cards con el contenido de los datos de ingresos por ventas, saldos, pedidos, usuarios, después un gráfico cartesiano que muestra los ingresos mensuales (implementado con una biblioteca externa,) y al final una tabla donde se elencan las últimas transacciones (también lo implementé con mui). Desde la barra lateral, hay dos enlaces (Usuarios y Productos) que lo llevará a la segunda interfaz, donde se representa en una tabla dinámica los Usuarios  (usando otra biblioteca). Los usuarios elencados se pueden eliminar o también seleccionando el botón 'View' se puede ir a otra interfaz donde se muestran el historial de compras y los datos personales del usuario. Volviendo a la interfaz de la lista de usuarios, seleccionando el botón 'Add New', se renderiza la última interfaz que implementé, donde hay un formulario para llenar, donde la función para subir la foto desde la memoria local está activa. Finalizé el proyecto implementando el Dark Mode gracias a la api createContext desde React.",

    fourthTitleReactLang: "FFiteness Web",
    date4Modal2Lang: "Fecha",
    type4Modal2Lang: "Tipo",
    resType4Modal2Lang: "Un sitio para buscar ejercicios fitness (SPA)",
    desc4Modal2Lang: "Descripción",
    resDesc4Modal2Lang:
      "En este proyecto, utilicé React y react-rout para crear un sitio de ejercicios SPA. Para la UI usé la libreria Mui (y solo un archivo CSS para el setup inicial) y para hacer las 2 fetch de los datos que implementé, usé RapidAPI. Para pasar los datos entre las 2 páginas, no usé useContext porque habían pocas componentes, así que en este ejercicio pasé estados a través de las props. El estilo del sitio es simple pero elegante, en la homepage hay un buscador que hace la llamada hacia a una API de ejercicio (ExerciseDB) gracias a la plataforma RapidApi y bajo ese motor de búsqueda implementé una Slide usando la libreria 'react-horizontal-scrolling-menu'. En la segunda página, se muestra el ejercicio seleccionado con más información sobre tal ejercicio y también algunos videos tutoriales relacionados (con otra api también de RapidApi). Y finalmente reutilicé 2 componentes (HorizontalScrollbar y ExerciseCard) que renderizan 2 secciones con ejercicios similares. ",

    socialLang: "Mis Redes Sociales",
    contactLang: "Contacto Directo",
    thanksLang: "Muchas Gracias!",
    thanks2Lang: "Por tus comentarios",
    footerLang: "2022 - Sitio desarrollado por ",
  },
};
