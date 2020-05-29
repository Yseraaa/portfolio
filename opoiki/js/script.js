
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

$(document).ready(function () {
   $('.header__nav_mobile').click(function (event) {
      $('.header__nav_mobile,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


$(document).ready(function () {
   $('.slider1__slick').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
   });
});

$(document).ready(function () {
   $('.slider8__slick').slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
   });
});