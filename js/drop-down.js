document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown] *");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  let currentDropdown2;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
    // currentDropdown2 = e.target("[data-dropdown-button]");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown2) return;
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
