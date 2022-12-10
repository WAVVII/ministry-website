const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.slide');
hiddenElements.forEach((el) => observer.observe(el));


// Preloader Code

window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("preloader").style.display = "none";
});

