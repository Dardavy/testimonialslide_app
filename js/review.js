const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
let currentSlide = 0;

//creates a sliding function
const sliding = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
};

// makes a function to be called repeatedly at an interval of "Three seconds"(3sec)!.
setInterval(() => {
  sliding();
}, 3000);

right.addEventaListener("click", function () {
  sliding();
});

left.addEventListener("click", function () {
  sliding();
});
