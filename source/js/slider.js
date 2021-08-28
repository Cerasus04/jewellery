"use strict";

import Swiper from 'swiper';

(() => {
  new Swiper('.swiper-container', {
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    speed: 800,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },

      // when window width is >= 640px
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    }
  });

})();
