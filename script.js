AOS.init();

const testimonials = document.querySelectorAll(".testimonial");
const buttons = document.querySelectorAll(".testimonial-button");
const prevBtn = document.querySelector(".prev-testimonial");
const nextBtn = document.querySelector(".next-testimonial");

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial) => {
    testimonial.classList.remove("active");
  });

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  testimonials[index].classList.add("active");
  buttons[index].classList.add("active");
  currentIndex = index;
}

showTestimonial(currentIndex);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    showTestimonial(index);
  });
});

prevBtn.addEventListener("click", () => {
  if (currentIndex === 0) {
    currentIndex = testimonials.length - 1;
  } else {
    currentIndex--;
  }

  showTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
  if (currentIndex === testimonials.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  showTestimonial(currentIndex);
});
