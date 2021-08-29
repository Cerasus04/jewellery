"use strict";

import Swiper from 'swiper';


(() => {
  // new Swiper('.swiper-container', {
  //   breakpoints: {
  //     320: {
  //       pagination: {
  //         el: `.new-in__slider-pagination`,
  //         type: `fraction`,
  //         renderFraction: function (currentClass, totalClass) {
  //           return `<span class=" ${currentClass} "></span> of <span class=" ${totalClass} "></span>`;
  //         },
  //       },
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //       slidesPerGroup: 2
  //     },
  //     768: {
  //       pagination: {
  //         el: `.new-in__slider-pagination`,
  //         type: `bullets`,
  //         clickable: true,
  //         renderBullet: function (index, className) {
  //           return `<span class="${className}">${index + 1}</span>`;
  //         },
  //       },
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //       slidesPerGroup: 2
  //     },
  //     1024: {
  //       pagination: {
  //         el: `.new-in__slider-pagination`,
  //         type: `bullets`,
  //         clickable: true,
  //         renderBullet: function (index, className) {
  //           return `<span class=" ${className} "> ${index + 1} </span>`;
  //         },
  //       },
  //       slidesPerView: 4,
  //       spaceBetween: 30,
  //       //Кол-во пролистываемых слайдов
  //       slidesPerGroup: 4
  //     },
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   }
  // });

  const slider = document.querySelector(`.swiper-container`);

if (slider) {
  /* eslint-disable no-undef */
  const mySwiper = new Swiper(`.swiper-container`, {
    simulateTouch: false,
    spaceBetween: 30,
    watchOverflow: true,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: `.slider-button-next`,
      prevEl: `.slider-button-prev`,
    },
    slidesPerView: 4,
    updateOnWindowResize: true,
    breakpoints: {
      320: {
        width: 970
      },
      768: {
        width: 1010
      }
    }
  });

  mySwiper.init();
  /* eslint-disable no-undef */
}

})();
