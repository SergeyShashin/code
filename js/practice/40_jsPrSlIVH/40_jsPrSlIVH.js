'use strict';

/**
 * Источник https://code.mu/ru/javascript/book/practice/slider/text-with-arrows/
 * В данном разделе мы займемся созданием слайдеров.
 * Начнем с самых простых и будем постепенно усложнять.
 * Для начала сделаем слайдер текста. 
 * Этот слайдер будет представлять собой див, в котором каждую секунду будет меняться текст:
 * Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться не по таймеру, а по нажатию на стрелку.
 * Давайте теперь сделаем слайдер картинок.
 * Пусть теперь в HTML коде у нас есть все картинки, которые мы планируем показывать в нашем слайдере:
 * */

let slider = {
  sliderEL: null,
  sliderButtonsEl: null,
  sliderBtnLeftEl: null,
  sliderBtnRightEl: null,
  sliderContent: null,
  numberInterval: null,
  timeForShowSlider: null,
  counter: null,
  lastCounter: null,

  init() {
    this.sliderEL = document.getElementById('slider');
    this.sliderButtonsEl = document.getElementById('sliderButtons'),
      this.sliderBtnLeftEl = document.getElementById('sliderBtnLeft'),
      this.sliderBtnRightEl = document.getElementById('sliderBtnRight'),
      this.sliderContent = this.sliderEL.querySelectorAll('img');
    this.timeForShowSlider = 4000;
    this.counter = 0;
    this.lastCounter = 0;
    this.sliderStartShow();
    this.setEventHandlers();
  },

  setEventHandlers() {
    this.sliderButtonsEl.addEventListener('click', e => this.handlerClickButtonsEl(e));
  },

  sliderStartShow() {
    this.numberInterval = setInterval(() => this.show(), this.timeForShowSlider);
  },

  show() {
    this.lastCounter = this.counter;
    this.counter = this.counter === this.sliderContent.length - 1 ? 0 : this.counter + 1;
    this.render();
  },

  render() {
    let lastContent = this.getLastContent();
    let content = this.getContent();
    this.HideLastContentHTML(lastContent);
    this.insertContentInSliderEl(content);
  },

  getContent() {
    return this.sliderContent[this.counter];
  },

  getLastContent() {
    return this.sliderContent[this.lastCounter];
  },

  insertContentInSliderEl(content) {
    content.classList.remove('dn');
  },

  HideLastContentHTML(lastContent) {
    lastContent.classList.add('dn');
  },

  handlerClickButtonsEl(e) {
    let target = e.target;

    switch (target.id) {
      case 'sliderBtnLeft':
        this.prevSlide();
        break;
      case 'sliderBtnRight':
        this.nextSlide();
        break;
    }
  },

  prevSlide() {
    this.lastCounter = this.counter;
    this.counter === 0 ? this.counter = this.sliderContent.length - 1 : this.counter--;
    this.render();
  },

  nextSlide() {
    this.lastCounter = this.counter;
    this.counter === this.sliderContent.length - 1 ? this.counter = 0 : this.counter++;
    this.render();
  }

};

window.onload = slider.init();