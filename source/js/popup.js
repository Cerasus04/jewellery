'use strict';

(() => {
  const page = document.querySelector('.page');
  const catalogFilter = document.querySelector('.catalog__filter');
  const filterCall = document.querySelector('.catalog__filter-button');
  const filterClose = document.querySelector('.filter__close');


  catalogFilter.classList.remove('catalog__filter--nojs');

  const onPopupEscPress = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeFilter(evt);
    }
  };

  const openFilter = (evt) => {
    evt.preventDefault();
    page.classList.add('page--js');
    catalogFilter.classList.add('catalog__filter--js');
    filterClose.addEventListener('click', closeFilter);
    document.addEventListener('keydown', onPopupEscPress);
  };

  const closeFilter = (evt) => {
    evt.preventDefault();
    page.classList.remove('page--js');
    filterClose.removeEventListener('click', closeFilter);
  };

  filterCall.addEventListener('click', openFilter);

})();
