let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

// Canvas 

// Text canvas
var canvasText = document.getElementById("myCanvas");
var ctx = canvasText.getContext("2d");

ctx.fillText("Welcome to Brasov!", 0, 50);
ctx.font = "50px Arial";

// Gradient responsive
var context = document.querySelector("canvas").getContext("2d");

// Create gradient
var grd = context.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "grey");



var render = function() {

  context.canvas.width = document.documentElement.clientWidth * 0.5;
  context.canvas.height = document.documentElement.clientHeight * 0.5;

  context.fillStyle = grd;
  context.fillRect(2, 5, context.canvas.width, context.canvas.height);

context.font='15px Arial';
context.fillText('How are you today?',100,100);

};

window.addEventListener("resize", render);

render();

// Slideshow on Home page
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}