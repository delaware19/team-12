var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function createSlides(json_obj) {
  for (i = 0; i < json_obj.list.length; i++) {
    var divFade = document.createElement('div');
    document.getElementsByClassName('slideshow-container')[0].appendChild(divFade);
    divFade.className = "mySlides fade";

    var divNum = document.createElement('div');
    divNum.className = "numbertext";
    divNum.innerHTML = (i+1) + "/" + json_obj.list.length;
    divFade.appendChild(divNum);

    var backPic = document.createElement('img');
    backPic.src = json_obj.list[i].picture;
    backPic.style = "width:100%";
    divFade.appendChild(backPic);

    var divText = document.createElement('div');
    divText.className = "text";
    divText.innerHTML = json_obj.list[i].caption;
    divFade.appendChild(divText);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
