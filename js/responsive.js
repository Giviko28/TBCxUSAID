const header = document.querySelector("header");
const menu = document.querySelector(".menu-button");
const menuContainer = document.querySelector(".menu-container");
const menuContainerContent = document.querySelector(".menu-container-content");
const spanParent = document.querySelector(".menu-button__span-parent");
const menuTop = document.querySelector(".menu__top");
const menuMiddle = document.querySelector(".menu__full");
const menuBottom = document.querySelector(".menu__bottom");
let lastKnownScrollPosition = 0;
let isClicked = false;

menu.addEventListener("click", () => {
  toggleMenu();
});
window.addEventListener("scroll", updateHeaderClass);
window.addEventListener("scroll", updateHeaderVisibility);
menuContainer.addEventListener("click", toggleMenu);
menuContainerContent.addEventListener("click", (event) =>
  event.stopPropagation(),
);

function updateHeaderClass() {
  const header = document.querySelector("header");
  const scrollDistance = window.scrollY;

  const threshold = 1;

  if (scrollDistance > threshold) {
    header.classList.add("header--transparent");
  } else {
    header.classList.remove("header--transparent");
  }
}

function updateHeaderVisibility() {
  if (window.innerWidth > 1600) return;
  const currentScrollPosition = window.scrollY;

  currentScrollPosition > lastKnownScrollPosition ? hideHeader() : showHeader();

  lastKnownScrollPosition = currentScrollPosition;
}

function hideHeader() {
  header.classList.add("header--hidden");
  menu.classList.add("header--hidden");
}

function showHeader() {
  header.classList.remove("header--hidden");
  menu.classList.remove("header--hidden");
}

function toggleMenu() {
  spanParent.classList.toggle("menu__span-parent--active");
  menuTop.classList.toggle("menu__top--animated");
  menuMiddle.classList.toggle("menu__middle--animated");
  menuBottom.classList.toggle("menu__bottom--animated");
  menuContainer.classList.toggle("menu-container-open");
  menuContainerContent.classList.toggle("menu-container-content-open");

  isClicked = !isClicked;
  isClicked
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
  !isClicked && window.scrollY !== 0 ? hideHeader() : "";
}
// Determines if the loaded user is a mobile or desktop
// let viewportMeta = document.createElement("meta");
// viewportMeta.name = "viewport";
// window.innerWidth > 980
//   ? (viewportMeta.content = "width=device-width, initial-scale=1")
//   : (viewportMeta.content = "width=320, user-scalable=yes");
//
// console.log(viewportMeta);
// document.head.appendChild(viewportMeta);
/////////////
