'use strict';

(() => {
  const form = document.querySelector('.modal-login__form');
  const emailInputCall = document.querySelector('#login-email');

  let storageEmail = '',
    isStorageSupport = true;

  try {
    storageEmail = localStorage.getItem('npx');
  } catch (err) {
    isStorageSupport = false;
  }

  if (storageEmail) {
    emailInputCall.value = storageEmail;
  }

  form.addEventListener('submit', () => {
    if (isStorageSupport) {
      localStorage.setItem('email', emailInputCall.value);
    }
  });

})();
