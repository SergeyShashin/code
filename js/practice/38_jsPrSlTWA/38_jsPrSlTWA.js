'use strict';

/**
 * Источник https://code.mu/ru/javascript/book/practice/slider/text-with-arrows/
 * В данном разделе мы займемся созданием слайдеров.
 * Начнем с самых простых и будем постепенно усложнять.
 * Для начала сделаем слайдер текста. 
 * Этот слайдер будет представлять собой див, в котором каждую секунду будет меняться текст:
 * Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться не по таймеру, а по нажатию на стрелку.
 */

let slider = {
  sliderEL: null,
  sliderText: null,
  sliderContent: null,
  numberInterval: null,
  timeForShowSlider: null,
  counter: null,

  init() {
    this.sliderEL = document.getElementById('slider');
    this.sliderText = document.getElementById('sliderText');
    this.sliderContent = ['первый слайдер', 'второй слайдер', 'третий слайдер'];
    this.timeForShowSlider = 2000;
    this.counter = 0;
    this.sliderStartShow();
  },

  sliderStartShow() {
    this.numberInterval = setInterval(() => this.show(), this.timeForShowSlider);
  },

  show() {
    this.counter = this.counter === this.sliderContent.length-1 ? 0 : this.counter + 1;
    let content = this.getContent();
    this.insertContentInSliderEl(content);
  },

  getContent() {
    return this.sliderContent[this.counter];
  },

  insertContentInSliderEl(content) {
    this.sliderText.textContent = content;
  }

};

window.onload = slider.init();