const fadeInElements = document.querySelectorAll('.slide');

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
let delay = 1000;

setImmediate(function() {
    window.addEventListener("DOMContentLoaded", function() {
      document.getElementById("preloader").style.display = "none";
    });
}, delay);


