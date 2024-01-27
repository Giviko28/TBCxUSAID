let slide = 0;
let previousSlide = 0;
let allowSlideChange = true;
let intervalID, isDragging, freezeOnHover, startX, startY, offsetX, offsetY;
let dragInterval = 2200;
const slides = document.querySelectorAll(".slide");
const slidesOverlay = document.querySelector(".slides-overlay");
const dotsContainer = document.querySelector(".slider__dots");
const dots = document.querySelectorAll(".slider__dot");
const prevButton = document.querySelector(".slides__prev-button");
const nextButton = document.querySelector(".slides__next-button");

prevButton.addEventListener("click", handleDecrement);
nextButton.addEventListener("click", handleIncrement);
// The time it takes before your allowed to change slides differs from mobile to desktop
window.addEventListener("load", adjustDragInterval);
window.addEventListener("resize", adjustDragInterval);

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    if (!allowSlideChange || slide === index) return;
    previousSlide = slide;
    slide = index;

    previousSlide > slide
      ? animateRight(previousSlide, slide)
      : animateLeft(previousSlide, slide);
    showSlide(slide);
  }),
);

// Drag to slide functions for mobile
slides.forEach((slide) => slide.addEventListener("touchstart", startDrag));
document.body.addEventListener("touchmove", drag);
document.body.addEventListener("touchend", stopDrag);
//////////////////////////////// END

// Freeze slider on hover
slidesOverlay.addEventListener("mouseenter", () => (freezeOnHover = true));
slidesOverlay.addEventListener("mouseleave", () => (freezeOnHover = false));
dotsContainer.addEventListener("mouseenter", () => (freezeOnHover = true));
dotsContainer.addEventListener("mouseleave", () => (freezeOnHover = false));
/////////////////////////////// END

interval();

function startDrag(e) {
  isDragging = true;
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
}
function drag(e) {
  if (!isDragging || !allowSlideChange) return;

  offsetX = e.touches[0].clientX - startX;
  offsetY = e.touches[0].clientY - startY;

  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;

  if (offsetX > 10) {
    handleDecrement();
  }

  if (offsetX < -10) {
    handleIncrement();
  }
}
function stopDrag() {
  isDragging = false;
}

function resetSlideChangeFlag() {
  allowSlideChange = false;
  setTimeout(() => {
    allowSlideChange = true;
  }, dragInterval);
}

function interval() {
  intervalID = setInterval(() => {
    if (freezeOnHover) return;
    handleIncrement();
  }, 4000);
}

function handleIncrement() {
  if (!allowSlideChange) return;

  previousSlide = slide;

  slide >= slides.length - 1 ? (slide = 0) : slide++;

  animateLeft(previousSlide, slide);

  showSlide(slide);
}

function handleDecrement() {
  if (!allowSlideChange) return;

  previousSlide = slide;

  slide <= 0 ? (slide = slides.length - 1) : slide--;

  animateRight(previousSlide, slide);

  showSlide(slide);
}

function showSlide(slide) {
  if (!allowSlideChange) return;

  clearInterval(intervalID);

  setTimeout(
    () => slides[slide].classList.add("slide--fade-in"),
    window.innerWidth > 1600 ? 100 : 600,
  );
  dots[slide].classList.add("slider__dot--active");

  interval();
  resetSlideChangeFlag();
}

function animateLeft(previous, current) {
  clearAnimations();

  slides[previous].classList.add("slide--left");
  slides[current].classList.add("slide--right");
}

function animateRight(previous, current) {
  clearAnimations();

  slides[previous].classList.add("slide--right");
  slides[current].classList.add("slide--left");
}

function clearAnimations() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide--left");
    slides[i].classList.remove("slide--right");
    slides[i].classList.remove("slide--fade-in");
    dots[i].classList.remove("slider__dot--active");
  }
}

function adjustDragInterval() {
  dragInterval = window.innerWidth > 1024 ? 1200 : 2200;
}
