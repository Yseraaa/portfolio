
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

function testWebP(callback) {

   var webP = new Image();
   webP.onload = webP.onerror = function () {
   callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   
   testWebP(function (support) {
   
   if (support == true) {
   document.querySelector('body').classList.add('webp');
   }
   });

$(document).ready(function(){
   $('.slider1__mobile').click(function(event){
      $('.slider1__mobile,.slider1__menu,.slider1,.slider1__content').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
