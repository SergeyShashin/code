'use strict';

let tabs = {
  tabsEl: null,
  tabsMenuEl: null,
  textEl: null,
  tabsArr: null,
  textArr: null,
  numTabclasActive: null,

  init() {
    this.tabsEl = document.getElementById('tabs');
    this.tabsMenuEl = document.getElementById('tabsMenu');
    this.textEl = document.getElementById('text');
    this.tabsArr = this.tabsMenuEl.querySelectorAll('a');
    this.textArr = this.textEl.querySelectorAll('p');

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

    console.log(target);
  }
};

window.onload = tabs.init();