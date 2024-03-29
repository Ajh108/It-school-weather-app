const scrollToTop = document.querySelector('.scrollToTop');

document.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function(){
    if (window.scrollY < 4667/2 ) {
        scrollToTop.style.visibility = "hidden";
    } else {
      scrollToTop.style.visibility = "visible";
    }
});
