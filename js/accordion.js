const accordions = document.querySelectorAll(".accordion");
const accordionArrows = document.querySelectorAll(".accordion__arrow");

accordions.forEach((accordion, i) => {
  accordion.addEventListener("click", () => {
    if (accordionArrows[i].classList.contains("accordion__arrow--active")) {
      resetAccordions();
      return;
    }
    resetAccordions();
    accordions[i].classList.add("accordion--open");
    accordionArrows[i].classList.add("accordion__arrow--active");
  });
});

function resetAccordions() {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("accordion--open");
    accordionArrows[i].classList.remove("accordion__arrow--active");
  }
}
