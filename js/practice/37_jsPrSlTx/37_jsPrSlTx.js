'use strict';

/**
 * В данном разделе мы займемся созданием слайдеров.
 * Начнем с самых простых и будем постепенно усложнять.
 * Для начала сделаем слайдер текста. 
 * Этот слайдер будет представлять собой див, в котором каждую секунду будет меняться текст:
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
    this.timeForShowSlider = 1000;
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