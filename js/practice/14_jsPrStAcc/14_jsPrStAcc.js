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

    let numberClickTab = Number(e.target.parentElement.dataset.number);

    if (numberClickTab === this.numberActiveTab) {
      this.tabsEls[numberClickTab].querySelector('.text').classList.toggle('activeText');
    } else if (this.numberActiveTab !== null) {
      this.tabsEls[this.numberActiveTab].querySelector('.text').classList.remove('activeText');
      this.setActiveText(numberClickTab);
    } else {
      this.setActiveText(numberClickTab);
    }
  },

  setActiveText(number) {
    this.numberActiveTab = number;
    this.tabsEls[this.numberActiveTab].querySelector('.text').classList.add('activeText');
  }

};

window.onload = accordion.init();