const menu = document.querySelector(".menu-bar");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
  if (menu.classList == "menu-bar") {
    menu.classList.add("active");
    nav.classList.add("nav-list");
  } else {
    menu.classList.remove("active");
    nav.classList.remove("nav-list");
  }
});

let root = document.documentElement;
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
light.addEventListener("click", () => {
  root.style.setProperty("--light", "#ECE9E5");
  root.style.setProperty("--dark", "#403E4B");
  light.style.border = "1px solid #403E4B";
});
dark.addEventListener("click", () => {
  root.style.setProperty("--light", "#403E4B");
  root.style.setProperty("--dark", "#ECE9E5");
  dark.style.border = "1px solid #ECE9E5";
});
