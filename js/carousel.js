let slide = 0;
let intervalID = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".carousel-dot");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", () => {
  handleDecrement();
});

nextButton.addEventListener("click", () => {
  handleIncrement();
});

dots.forEach((dot, index) =>
  dot.addEventListener("click", () => {
    showSlide(index);
  }),
);

interval();

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
    slides[1].classList.remove("slide-left");
    slides[1].classList.add("slide-right");
  }
  if (slide === 2) {
    slides[1].classList.remove("slide-right");
    slides[1].classList.add("slide-left");
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("fade-in");
    dots[i].classList.remove("carousel-dot--active");
  }
  slides[slide].classList.add("fade-in");
  dots[slide].classList.add("carousel-dot--active");

  interval();
}
