const mobileMenu = document.querySelector(".mobile--menu");
const navMenu = document.querySelector(".nav--menu");
const nav = document.querySelector("#nav");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav--link").forEach((e) =>
  e.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 50);
});
