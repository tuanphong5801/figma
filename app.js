const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const activeClass = "is-show";

toggle.addEventListener("click", () => {
  menu.classList.add(activeClass);
});

window.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
