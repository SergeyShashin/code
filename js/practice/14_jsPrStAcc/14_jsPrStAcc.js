'use strict';

let accordion = {
  accordionEl: null,
  tabsEls: null,
  numberActiveTab: null,
  init() {
    this.accordionEl = document.getElementById('accordion');
    this.tabsEls = document.querySelectorAll('.tab');
    this.setEventHandlers();
  },

  setEventHandlers() {
    this.accordionEl.addEventListener('click', e => this.handlerClickTab(e));
  },

  handlerClickTab(e) {
    let target = e.target;

    if (target.className !== 'link') {
      return
    }

    let numberClickTab = Number(target.parentElement.dataset.number);

    if (this.numberActiveTab === numberClickTab) {

    }

    this.tabsEls[this.numberActiveTab].querySelector('.text').classList.add('activeText');
  }

};

window.onload = accordion.init();