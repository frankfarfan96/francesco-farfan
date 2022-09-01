/******** Menu & Frank Info & Accordion********/

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
    console.log(content);
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
