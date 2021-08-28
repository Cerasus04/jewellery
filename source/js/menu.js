'use strict';

(() => {
const header = document.querySelector('.header');
const headerToggle = header.querySelector('.header__burger-btn');
const listItems = header.querySelectorAll('.nav-list__link');
const page = document.querySelector('.page');

header.classList.remove('header--nojs');

  const onMenuClick = function () {
    console.log("1");
    header.classList.toggle('header--js');
    page.classList.toggle('page--js');
  };

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }

  headerToggle.addEventListener('click', onMenuClick);

})();
