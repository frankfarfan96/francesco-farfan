/******** Menu & Frank Info ********/

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

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.classList.remove("is-active");
    $menu.classList.remove("is-active");
  });
})(document);

/******** Dropdown Menu ********/

// ((d) => {
//   d.addEventListener("click", (e) => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]");
//     if (!isDropdownButton && e.target.closes("[data-dropdown]") != null) return;

//     let currentDropdown;
//     if (isDropdownButton) {
//       currentDropdown = e.target.closest("[data-dropdown]");
//       currentDropdown.classList.toggle("[data-dropdown]");
//     }

//     d.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
//       if (dropdown === currentDropdown)
//         return dropdown.classList.remove("active");
//     });
//   });
// })(document);
