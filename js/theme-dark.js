const d = document;
const l = function (arg) {
  console.log(arg);
};
const ls = localStorage;

export default function darkTheme(btn, classDark, classWhite, classGray) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  // $selectorsW = d.querySelectorAll("[data-white]"),
  // $selectorsG = d.querySelectorAll("[data-gray]");
  // l($selectors);

  let moon = "🌚",
    sun = "🌞";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    // $selectorsW.forEach((el) => el.classList.toggle(classWhite));
    // $selectorsG.forEach((el) => el.classList.toggle(classGray));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    // $selectors.forEach((el) => el.classList.toggle(classWhite));
    // $selectors.forEach((el) => el.classList.toggle(classGray));
    $themeBtn.textContent = sun;
    // $stage.classList.add("white");
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      l($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  //DOMContentLoaded to know if it start like moon or sun
  d.addEventListener("DOMContentLoaded", (e) => {
    //l(ls.getItem("theme"))
    //First value of local Storage
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    //Then enter in this loop
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
