var slideIndex = 0;

function resetIndex(slidesID) {
  slideIndex = 0;
}

// Next/previous controls
function plusSlides(n, slidesID) {
  showSlides(slideIndex += n, slidesID);
}

function plusSlidesWithNumbers(n, slidesID) {
  showSlidesWithNumbers(slideIndex += n, slidesID);
}

// Show slides with specific ID

function showSlidesWithNumbers(n, slidesID) {
  var i;
  var slideshow = document.getElementById(slidesID);
  slides = slideshow.getElementsByClassName("mySlides");
  slideIndex = n;

  if (n >= slides.length)
  {
    slideIndex = 0;
  }

  if (n < 0)
  {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++)
  {
      slides[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
}

function showSlides(n,slidesID) {
  var i;
  var slideshow = document.getElementById(slidesID);
  slides = slideshow.getElementsByClassName("mySlides");
  dots = slideshow.getElementsByClassName("dot");
  slideIndex = n;

  if (n >= slides.length)
  {
    slideIndex = 0;
  }

  if (n < 0)
  {
    slideIndex = slides.length - 1;
  }

  for (i = 0; i < slides.length; i++)
  {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
  }

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}
