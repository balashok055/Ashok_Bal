const year = document.querySelector("#year");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});