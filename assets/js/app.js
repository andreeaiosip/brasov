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
 
ctx.font="18px Arial";
 
ctx.fillStyle = "white";
 
ctx.textAlign = "center";
 
ctx.fillText("Make your stay a wonderful stay at Brasov!", canvas.width/2, canvas.height/2);

var slider = document.getElementById("myRange");
var output = document.getElementById("mySlider");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


// Slider range budget on contact page

var slider = document.getElementById("myRange");
var output = document.getElementById("mySlider");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// Geolocation

// var x = document.getElementById("myLocation");

// var position = null;

// function getLocation() {
//     if (navigator.geolocation && !position) {
//         navigator.geolocation.watchPosition(function(currentPosition) {
//             position = currentPosition;
//         }, function(error) {
//             alert(error)
//         });
//     }
// };

// getLocation();

// Date validation for the contact form
var EnteredDate = document.getElementById("tinputDate").value; 

var EnteredDate = $("#inputDate").val(); 

var date = EnteredDate.substring(0, 2);
var month = EnteredDate.substring(3, 5);
var year = EnteredDate.substring(6, 10);

var myDate = new Date(year, month - 1, date);

var today = new Date();

if (myDate > today) {
 
    alert("Entered date is less than today's date ");
}
