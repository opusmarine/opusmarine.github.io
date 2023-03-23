var slider = document.querySelector(".slider");
var images = document.querySelectorAll(".slider img");
var current = 0;
var opacity = 0;

for( var i = 1; i < images.length; i++) {
  images[i].style.opacity = 0;  
}

function nextImage() {
  images[current].style.opacity = 0;
  current = (current + 1) % image.length;
  
  images[current].style.opacity = 1;
  setInterval(nextImage, 5000);
  
}
