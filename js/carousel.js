let slide = 0;
let intervalID = 0;
let isDragging = false;
let allowSlideChange = true;
const dragInterval = 1000;
let startX, startY, offsetX, offsetY;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider__dot");
const prevButton = document.querySelector(".slides__prev-button");
const nextButton = document.querySelector(".slides__next-button");

prevButton.addEventListener("click", () => {
  handleDecrement();
});
nextButton.addEventListener("click", () => {
  handleIncrement();
});
slides.forEach((slide) => slide.addEventListener("touchstart", startDrag));
document.body.addEventListener("touchmove", drag);
document.body.addEventListener("touchend", stopDrag);

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    if (!allowSlideChange) return;
    showSlide(index);
  }),
);

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
    handleIncrement();
  }, 2500);
}

function handleIncrement() {
  slide >= slides.length - 1 ? (slide = 0) : slide++;
  showSlide(slide);
}

function handleDecrement() {
  slide <= 0 ? (slide = slides.length - 1) : slide--;
  showSlide(slide);
}

function showSlide(slide) {
  clearInterval(intervalID);

  if (slide === 0) {
    slides[1].classList.remove("slide--left");
    slides[1].classList.add("slide--right");
  }
  if (slide === 2) {
    slides[1].classList.remove("slide--right");
    slides[1].classList.add("slide--left");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slide--fade-in");
    dots[i].classList.remove("slider__dot--active");
  }
  slides[slide].classList.add("slide--fade-in");
  dots[slide].classList.add("slider__dot--active");

  interval();
  resetSlideChangeFlag();
}
