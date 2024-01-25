const header = document.querySelector("header");
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");
// Individual Lines of the MENU BUTTON (PARENT/TOP/MIDDLE/BOTTOM)
const spanParent = document.querySelector(".menu-button__span-parent");
const menuTop = document.querySelector(".menu__top");
const menuMiddle = document.querySelector(".menu__full");
const menuBottom = document.querySelector(".menu__bottom");
////////////////////////////////
let lastKnownScrollPosition = 0;
let isOpen = false;

window.onbeforeunload = () => window.scrollTo(0, 0);
window.addEventListener("scroll", updateHeaderBackground);
window.addEventListener("scroll", updateHeaderVisibility);
menuButton.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);
menu.addEventListener("click", (event) => event.stopPropagation());

function updateHeaderBackground() {
  window.scrollY > 0
    ? header.classList.add("header--transparent")
    : header.classList.remove("header--transparent");
}

function updateHeaderVisibility() {
  if (window.innerWidth > 1600) return;
  const currentScrollPosition = window.scrollY;

  currentScrollPosition > lastKnownScrollPosition ? hideHeader() : showHeader();

  lastKnownScrollPosition = currentScrollPosition;
}

function hideHeader() {
  header.classList.add("header--hidden");
  menuButton.classList.add("header--hidden");
}

function showHeader() {
  header.classList.remove("header--hidden");
  menuButton.classList.remove("header--hidden");
}

function toggleMenu() {
  spanParent.classList.toggle("menu__span-parent--active");
  menuTop.classList.toggle("menu__top--animated");
  menuMiddle.classList.toggle("menu__middle--animated");
  menuBottom.classList.toggle("menu__bottom--animated");

  menuOverlay.classList.toggle("menu-overlay--open");
  menu.classList.toggle("menu--open");

  isOpen = !isOpen;
  if (isOpen) {
    document.body.style.overflow = "hidden";
    menuOverlay.style.overflow = "hidden";
  }
  if (!isOpen) {
    window.scrollY !== 0 ? hideHeader() : "";
    document.body.style.overflow = "";
    menuOverlay.style.overflow = "";
  }
}
