const fadeInElements = document.querySelectorAll(".slide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `fadein 1s forwards`;
      observer.unobserve(entry.target);
    }
  });
});

fadeInElements.forEach((element) => {
  observer.observe(element);
});

// Preloader Code
const preloader = document.getElementById("preloader");

const observers = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      preloader.style.animation = `fadeout 1s forwards`;

      observer.unobserve(entry.target);
    }
  });
});

observers.observe(preloader);
