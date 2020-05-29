
window.onload = function () {
   document.body.classList.add('loaded_hiding');
   window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
   }, 500);
}

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
   $('.header__body').click(function (event) {
      $('.header__menu,.menu__active').toggleClass('active');
   });
});

//$(document).ready(function () {
//   $('.menu-link').click(function (e) {
//      e.preventDefault();
//      $(".menu-link").removeClass('link__active');
//      $(this).toggleClass('link__active');
//   });
//});
wow = new WOW({
   boxClass: 'wow',
   animateClass: 'animated',
   offset: 20,
   mobile: true,
   live: true
})
wow.init();


$(document).ready(function () {
   $('.slider2__slick').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
               arrows: false,
            }
         },
         {
            breakpoint: 1000,
            settings: {
               dots: true,
               arrows: false,
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               dots: true,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
      ]
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.slider3__more').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_retro').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_retro').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.binary__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_binary').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_binary').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.flasty__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_flasty').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_flasty').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.golden__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_golden').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_golden').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.hgame__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_hgame').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_hgame').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.interior__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_interior').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_interior').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.mfest__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_mfest').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_mfest').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.opoiki__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_opoiki').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_opoiki').fadeOut();
      $('.backpopup').fadeOut();
   });
});

$.fn.popup = function () { 	//функция для открытия всплывающего окна:
   this.css('position', 'absolute').fadeIn();	//задаем абсолютное позиционирование и эффект открытия
   //махинации с положением сверху:учитывается высота самого блока, экрана и позиции на странице:
   this.css('top', ($(window).height() - this.height()) / 2 + $(window).scrollTop() + 'px');
   //слева задается отступ, учитывается ширина самого блока и половина ширины экрана
   this.css('left', ($(window).width() - this.width()) / 2 + 'px');
   //открываем тень с эффектом:
   $('.backpopup').fadeIn();
}
$(document).ready(function () {	//при загрузке страницы:
   $('.vintage__btn').click(function () {	//событие клик на нашу ссылку
      $('.slider3__popup_vintage').popup();	//запускаем функцию на наш блок с формой
   });
   $('.backpopup,.close').click(function () { //событие клик на тень и крестик - закрываем окно и тень:
      $('.slider3__popup_vintage').fadeOut();
      $('.backpopup').fadeOut();
   });
});