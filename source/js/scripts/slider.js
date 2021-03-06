'use strict';

(() => {
  const page = document.querySelector('.page');
  const main = page.querySelector('.main');
  const newInSlider = document.querySelector('.new-in__slider');

  page.classList.remove('.page--nojs');

  if (main.classList.contains('main--main')) {
    newInSlider.classList.remove('new-in__slider--nojs');
  }

  new Swiper('.new-in__slider', {
    navigation: {
      nextEl: '.new-in__slider-btn--next',
      prevEl: '.new-in__slider-btn--prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: false,
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
          },
        },
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      }
    },
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    speed: 800,
  });
})();
