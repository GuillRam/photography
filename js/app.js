// BURGER MENU
const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector("header nav ul");

menuBurger.addEventListener("click", () => {
  navLinks.classList.add("mobile-menu");
  navLinks.addEventListener("click", function () {
    navLinks.classList.remove("mobile-menu");
  });
});

// CAROUSEL
const arrows = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slide");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const calcNextSlide = e.target.id === "next" ? 1 : -1;
    const slideActive = document.querySelector(".active");

    newIndex = calcNextSlide + [...slides].indexOf(slideActive);

    if (newIndex < 0) newIndex = [...slides].length - 1;
    if (newIndex >= [...slides].length) newIndex = 0;
    slides[newIndex].classList.add("active");

    slideActive.classList.remove("active");
  });
});

// ACTIVE LINK
const activePage = window.location.pathname;
const allNavLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("activeLink");
    console.log(link);
  }
});
