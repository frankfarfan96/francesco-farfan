/******** Menu & Frank-Info & Accordion********/

((d) => {
  const $btnMenu = d.querySelector(".hamburger"),
    $menu = d.querySelector(".menu"),
    $frank = d.querySelector(".avatar"),
    $frankInfo = d.querySelector(".frank-info");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.classList.toggle("is-active");
    $menu.classList.toggle("is-active");
  });

  $frank.addEventListener("click", (e) => {
    $frankInfo.classList.toggle("is-active");
  });

  document.querySelectorAll(".content-summary").forEach((content) => {
    content.addEventListener("click", (e) => {
      content.classList.toggle("active");
    });
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.classList.remove("is-active");
    $menu.classList.remove("is-active");
  });
})(document);

/******** Formulario ********/

((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/frankfarfan96@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        //Location controla todas las partes de la URL del navegador
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

/*********** Scroll Fade Effect *********/
window.addEventListener("scroll", (e) => {
  const $image = document.querySelector(".img-hand");
  const height = window.innerHeight / 1.3;
  console.log(height);
  const long = $image.getBoundingClientRect().top;
  console.log(long);
  if (long <= height) {
    $image.classList.add("apere");
  } else {
    $image.classList.remove("apere");
  }
});
