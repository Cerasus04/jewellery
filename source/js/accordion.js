'use strict';

(() => {
  const accordion = document.querySelector(".faq");
  if (accordion) {
    const isAccordionFaq = accordion.classList.contains("faq__list");
    let openedTab;

    const closeTab = () => {
      openedTab.classList.remove("faq__item--open");
      openedTab = null;
    };

    accordion.classList.add("faq--js");
    accordion.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("faq__button")) {
        if (isAccordionFaq && openedTab && target.parentElement !== openedTab) {
          closeTab();
        }
        target.parentElement.classList.toggle("faq__item--open");
        openedTab = target.parentElement;
      }
    });
  }

})();
