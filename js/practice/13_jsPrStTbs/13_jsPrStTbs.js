'use strict';

let tabs = {
  tabsEl: null,
  tabsMenuEl: null,
  textEl: null,
  tabsArr: null,
  textArr: null,
  numberTabWithClassActive: null,

  init() {
    this.tabsEl = document.getElementById('tabs');
    this.tabsMenuEl = document.getElementById('tabsMenu');
    this.textEl = document.getElementById('text');
    this.tabsArr = this.tabsMenuEl.querySelectorAll('a');
    this.textArr = this.textEl.querySelectorAll('p');
    this.numberTabWithClassActive = 0;

    this.setEventHandlers();
  },

  setEventHandlers() {
    this.tabsMenuEl.addEventListener('click', e => this.handlerClickTab(e));
  },

  handlerClickTab(e) {
    let target = e.target;

    if (target.tagName !== 'A') {
      return
    }

    this.clearActive();
    this.setNewNumberTabWithClassActive(Number(target.dataset.num));
    this.setActive();
  },

  clearActive() {
    this.tabsArr[this.numberTabWithClassActive].classList.remove('activeTab');
    this.textArr[this.numberTabWithClassActive].classList.add('dNoneText');
  },

  setNewNumberTabWithClassActive(number) {
    this.numberTabWithClassActive = number;
  },

  setActive() {
    this.tabsArr[this.numberTabWithClassActive].classList.add('activeTab');
    this.textArr[this.numberTabWithClassActive].classList.remove('dNoneText');
  }
};

window.onload = tabs.init();