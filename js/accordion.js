const accordions = document.querySelectorAll(".accordion-item");
const accordionArrows = document.querySelectorAll(
  ".accordion-item--header__image",
);

accordions.forEach((accordion, i) => {
  accordion.addEventListener("click", () => {
    if (accordionArrows[i].classList.contains("accordion-item--active")) {
      resetAccordions();
      return;
    }
    resetAccordions();
    accordions[i].classList.add("accordion-open");
    accordionArrows[i].classList.add("accordion-item--active");
  });
});

function resetAccordions() {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("accordion-open");
    accordionArrows[i].classList.remove("accordion-item--active");
  }
}
