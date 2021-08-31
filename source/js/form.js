'use strict';
(() => {
  const page = document.querySelector('.page');
  const btnCall = document.querySelector('.header__login');
  const btnCallMobile = document.querySelector('.user-menu__modal-login');
  const overlayCall = document.querySelector('.overlay');
  const popupModal = document.querySelector('.modal-login');
  const btnCloseCall = popupModal.querySelector('.modal-login__close');
  const btnSubmit = popupModal.querySelector('.modal-login__button');
  const name = document.querySelector('#login-email');
  const login = document.querySelector('#login');
  const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = login.querySelectorAll(focusableElements)[0];
  const focusableContent = login.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  const onPopupEscPress = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup(evt);
    }
  };

  const openPopup = (evt) => {
    evt.preventDefault();
    page.classList.add('page--js');
    popupModal.classList.add('modal-login--active');
    overlayCall.classList.add('overlay--active');
    btnCloseCall.addEventListener('click', closePopup);
    document.addEventListener('keydown', onPopupEscPress);
    overlayCall.addEventListener('click', closePopup);
    btnSubmit.addEventListener('click', closePopup);
    name.focus();
  };

  const closePopup = (evt) => {
    evt.preventDefault();
    page.classList.remove('page--js');
    popupModal.classList.remove('modal-login--active');
    overlayCall.classList.remove('overlay--active');
    btnCloseCall.removeEventListener('click', closePopup);
    document.removeEventListener('keydown', onPopupEscPress);
    overlayCall.removeEventListener('click', closePopup);
    btnSubmit.removeEventListener('click', closePopup);
  };

document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab' || e.key === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
btnCall.addEventListener('click', openPopup);
btnCallMobile.addEventListener('click', openPopup);

})();
