document.addEventListener("click", (e) => {
  const $dropdown = document.querySelector(".d2");
  const isDropdownButton = e.target.matches("[data-dropdown] *");
  const isDropdownButton2 = e.target.matches("[data-dropdown-two] *");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  console.log($dropdown);

  let currentDropdown;
  let currentDropdown2;

  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  if (isDropdownButton2) {
    currentDropdown2 = e.target.closest("[data-dropdown-two]");
    currentDropdown2.classList.toggle("active");
    currentDropdown.classList.add("active");
    console.log(currentDropdown2);
  }

  document
    .querySelectorAll("[data-dropdown-two].active")
    .forEach((dropdown) => {
      if (dropdown === currentDropdown2) return;
      if ($dropdown.classList.contains("active")) return;
      dropdown.classList.remove("active");
    });

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.toggle("active");
  });
});
