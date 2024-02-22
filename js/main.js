$(".dropdown-menu").click(function (e) {
     e.stopPropagation();
})

var swiper = new Swiper(".service-slider", {
     slidesPerView: 4,
     spaceBetween: 20,
     loop: true,
     breakpoints: {
          // when window width is >= 320px
          320: {
               slidesPerView: 1,
               spaceBetween: 20
          },
          490: {
               slidesPerView: 1,
               spaceBetween: 50
          },
          575: {
               slidesPerView: 2,
               spaceBetween: 20
          },
          767: {
               slidesPerView: 2,
               spaceBetween: 20
          },
          // when window width is >= 480px
          991: {
               slidesPerView: 3,
               spaceBetween: 20,
          },
          // when window width is >= 640px
          1199: {
               slidesPerView: 4,
               spaceBetween: 20,
          }
     },
     navigation: {
          nextEl: ".service-button-next2",
          prevEl: ".service-button-prev2",
     },
});

var swiper = new Swiper(".service-slider2", {
     slidesPerView: 4,
     spaceBetween: 20, loop: true,
     breakpoints: {
          // when window width is >= 320px
          320: {
               slidesPerView: 1,
               spaceBetween: 20
          },
          490: {
               slidesPerView: 1.4,
               spaceBetween: 50
          },
          575: {
               slidesPerView: 1.8,
               spaceBetween: 20
          },
          767: {
               slidesPerView: 2.4,
               spaceBetween: 20
          },
          // when window width is >= 480px
          991: {
               slidesPerView: 3.4,
               spaceBetween: 20,
          },
          // when window width is >= 640px
          1199: {
               slidesPerView: 4,
               spaceBetween: 20,
          }
     },
     navigation: {
          nextEl: ".service-button-next",
          prevEl: ".service-button-prev",
     },
});
var swiper = new Swiper(".team-cards", {
     slidesPerView: 4,
     spaceBetween: 20, loop: true,
     breakpoints: {
          // when window width is >= 320px
          320: {
               slidesPerView: 1,
               spaceBetween: 20
          },
          490: {
               slidesPerView: 1.4,
               spaceBetween: 20
          },
          575: {
               slidesPerView: 1.8,
               spaceBetween: 20
          },
          767: {
               slidesPerView: 2.4,
               spaceBetween: 20
          },
          // when window width is >= 480px
          991: {
               slidesPerView: 3.4,
               spaceBetween: 20,
          },
          // when window width is >= 640px
          1199: {
               slidesPerView: 4,
               spaceBetween: 20,
          }
     },
     navigation: {
          nextEl: ".team-button-prev",
          prevEl: ".team-button-next",
     },
});

var swiper = new Swiper(".studie-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     slidesPerGroupSkip: 1, loop: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          768: {
               slidesPerView: 1.5,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 1,
               slidesPerGroup: 1,
          },
     },
     pagination: {
          el: ".pagination2",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".studie-button-next",
          prevEl: ".studie-button-prev",
     },
});


var swiper = new Swiper(".events-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     loop: true,
     breakpoints: {
          320: {
               slidesPerView: 1,
               spaceBetween: 30,
          },
          767: {
               slidesPerView: 1.2,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 1.6,
               spaceBetween: 20,
          },
          1365: {
               slidesPerView: 2.2,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 2.3,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".pagination3",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".button-next",
          prevEl: ".button-prev",
     },
});
var swiper = new Swiper(".value-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20, loop: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          320: {
               slidesPerView: 1,
               spaceBetween: 30,
          },
          767: {
               slidesPerView: 1.2,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 1.6,
               spaceBetween: 20,
          },
          1365: {
               slidesPerView: 2.2,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 2.3,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".value-pagination",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".value-button-next",
          prevEl: ".value-button-prev",
     },
});
var swiper = new Swiper(".events-slider3", {

     spaceBetween: 20,
     loop: true,
     breakpoints: {
          320: {
               slidesPerView: 1,
               spaceBetween: 30,
          },
          767: {
               slidesPerView: 1.2,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 1.6,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 1.8,
               spaceBetween: 20,
          },
          1365: {
               slidesPerView: 2.2,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 2.6,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".pagination5",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".button-next4",
          prevEl: ".button-prev4",
     },
});

var swiper = new Swiper(".customer-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     slidesPerGroupSkip: 1,
     keyboard: {
          enabled: true,
     }, loop: true,
     breakpoints: {

          320: {
               slidesPerView: 1,
               slidesPerGroup: 1,
               spaceBetween: 60,
          },
          767: {
               slidesPerView: 1.4,
               slidesPerGroup: 1,
               spaceBetween: 60,
          },
          991: {
               slidesPerView: 1.9,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 2.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 2.5,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".customer-pagination3",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".customer-button-next",
          prevEl: ".customer-button-prev",
     },
});

var swiper = new Swiper(".resource-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     slidesPerGroupSkip: 1, loop: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          769: {
               slidesPerView: 2.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 4.8,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".pagination4",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
     },
});

var swiper = new Swiper(".related-slider", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     slidesPerGroupSkip: 1, loop: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          320: {
               slidesPerView: 1,
               slidesPerGroup: 1,
               spaceBetween: 30,
          },
          767: {
               slidesPerView: 2.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 3.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 4.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 4.8,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".related-pagination4",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".related-next-slide",
          prevEl: ".related-prev-slide",
     },
});

var swiper = new Swiper(".studie-slider2", {
     slidesPerView: 1,
     centeredSlides: false, spaceBetween: 20,
     slidesPerGroupSkip: 1, loop: true,
     keyboard: {
          enabled: true,
     },
     breakpoints: {
          320: {
               slidesPerView: 1,
               slidesPerGroup: 1,
               spaceBetween: 30,
          },
          767: {
               slidesPerView: 1.8,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 2.8,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1199: {
               slidesPerView: 3.2,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 3.6,
               slidesPerGroup: 1,
               spaceBetween: 20,
          },
     },
     pagination: {
          el: ".pagination4",
          type: "progressbar",
     },
     navigation: {
          nextEl: ".next-slide",
          prevEl: ".prev-slide",
     },
});
var slider = new Swiper(".product-slider", {
     slidesPerView: 1,
     spaceBetween: 20, loop: true,
     freeMode: true,
     watchSlidesProgress: true,
     breakpoints: {
          767: {
               slidesPerView: 2.2,
               spaceBetween: 20,
          },
          991: {
               slidesPerView: 3.2,
               spaceBetween: 20,
          },
          1365: {
               slidesPerView: 4.2,
               spaceBetween: 20,
          },
          1600: {
               slidesPerView: 4.8,
               spaceBetween: 20,
          },
     },
     navigation: {
          nextEl: ".product-next-slide",
          prevEl: ".product-prev-slide",
     },
});
var thumbs = new Swiper(".mySwiper2", {
     spaceBetween: 10,
     loop: true,
     slideToClickedSlide: true,
     navigation: {
          nextEl: ".product-next-slide",
          prevEl: ".product-prev-slide",
     },
     thumbs: {
          swiper: swiper,
     },
});


$("#msg-icon").click(function () {
     $(".chat-box").toggleClass("box-show");
});


document.querySelectorAll('#myTab button').forEach(function (everyitem) {

     var tabTrigger = new bootstrap.Tab(everyitem)
     everyitem.addEventListener('mouseenter', function () {
          tabTrigger.show();
     });

});


document.addEventListener("DOMContentLoaded", function () {
     window.addEventListener('scroll', function () {
          if (window.scrollY > 50) {
               document.getElementById('navbar_top').classList.add('fixed-top');
               // add padding top to show content behind navbar
               navbar_height = document.querySelector('.navbar').offsetHeight;
               document.body.style.paddingTop = navbar_height + 'px';
          } else {
               document.getElementById('navbar_top').classList.remove('fixed-top');
               // remove padding top from body
               document.body.style.paddingTop = '0';
          }
     });
});

$(".navbar-toggler").click(function () {
     $("body").toggleClass("space");
});

$(window).scroll(function () {
     if ($(this).scrollTop() > 600) {
          $('.bottom-nav').addClass('newClass');
     } else {
          $('.bottom-nav').removeClass('newClass');
     }
});