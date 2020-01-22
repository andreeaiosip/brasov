let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});



/* Geolocation

var x = document.getElementById("trackUser");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

document.body.onload = function(){
  getLocation ();
};
*/



// Canvas 
var c = document.getElementById("myCanvas2");
 
var ctx = c.getContext("2d");
 
 
 
// Create gradient
 
var grd = ctx.createLinearGradient(0,100,200,0);
 
grd.addColorStop(0,"rgba(97,172,152,1)");
 
grd.addColorStop(1,"rgba(12,194,109,1)");
 
 
 
// Fill with gradient
 
ctx.fillStyle = grd;
 
ctx.fillRect(0,10,500,100);
 
 
 
/* Text in canvas */
 
var canvas = document.getElementById("myCanvas2");
 
var ctx=canvas.getContext("2d");
 
ctx.font="18px Arial";
 
ctx.fillStyle = "white";
 
ctx.textAlign = "center";
 
ctx.fillText("Make your stay a wonderful stay at Brasov!", canvas.width/2, canvas.height/2);


// slider
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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
