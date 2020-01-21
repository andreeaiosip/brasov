let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

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
 
ctx.font="25px Nunito Sans";
 
ctx.fillStyle = "white";
 
ctx.textAlign = "center";
 
ctx.fillText("Make your stay a wonderful stay at Brasov!", canvas.width/2, canvas.height/2);