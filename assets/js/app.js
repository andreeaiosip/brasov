let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});


const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"#2376ae "); 
grd.addColorStop(1,"#c16ecf ");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

