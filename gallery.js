// Open the Modal
function openModal(f1, f2, f3, f4) {
  var model = document.getElementById('myModal')
  model.style.display = "block";
  document.getElementById("sgimg1").src=f1;
  document.getElementById("sgimg2").src=f2;
  document.getElementById("sgimg3").src=f3;
  document.getElementById("sgimg4").src=f4;
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  
}

function pokaz0(){
    
//    $('html, body').animate({
//        scrollTop: $("#frstlook").offset().top
//    }, 1000);
    moveTo(".main", 1);
}
function pokaz1(){
    
//    $('html, body').animate({
//        scrollTop: $("#konstrukce").offset().top
//    }, 1000);
    moveTo(".main", 3);
}
function pokaz2(){
    
//    $('html, body').animate({
//        scrollTop: $("#d3").offset().top
//    }, 1000);
}
function pokaz3(){
    
//    $('html, body').animate({
//        scrollTop: $("#casting").offset().top
//    }, 1000);
}
function pokaz4(){
    
//    $('html, body').animate({
//        scrollTop: $("#other").offset().top
//    }, 1000);
}
function pokaz5(){
    
//    $('html, body').animate({
//        scrollTop: $("#frstlook").offset().top
//    }, 600);
}

var modal = document.getElementById('myModal');

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}