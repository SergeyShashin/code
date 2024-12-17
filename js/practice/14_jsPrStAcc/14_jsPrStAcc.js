'use strict';

let accordion = {
  accordionEl: null,
  tabsEls: null,
  numberActivelink: null,
  init() {
    this.accordionEl = document.getElementById('accordion');
    this.linksEls = document.querySelectorAll('tab');

  },
};

window.onload = accordion.init();