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

// Nav Bar scroll color change

$(window).scroll(function(){
  if($(window).scrollTop()){
    $("header").addClass("white");
  }
  else{
    $("header").removeClass("white")
  }
});

