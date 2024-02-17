const navbar = document.querySelector(".navbar");
const mobnav = document.querySelector(".home-ul");
const hamburger = document.querySelector(".hamburger");
window.addEventListener("scroll", (e) => {
  navbar.classList.toggle("sticky", window.scrollY > 100);
});

hamburger.addEventListener("click", (e) => {
  mobnav.classList.toggle("open");
});
