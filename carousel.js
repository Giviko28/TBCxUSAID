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

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("carousel-dot--active");
  }
  slides[slide].style.display = "flex";
  dots[slide].classList.add("carousel-dot--active");
  interval();
}
