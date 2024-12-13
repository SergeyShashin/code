'use strict';

/**
 * источник задачи https://code.mu/ru/javascript/book/practice/prediction/
 * 
 * Cделаем сайт, который будет выдавать предсказания.
 * Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер, который будет каждые 0.1 секунд
 * выводить в в какой-нибудь див случайное число от 1 до некоторого максимального.
 * Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта
 * может остановить таймер и зафиксировать некоторое число в диве.
 * Это число будет номером предсказания. После этого покажите пользователю предсказание с этим номером,
 *  а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно предсказание. То есть на один заход на сайт - одно предсказание.
 */

const prediction = {
  predictionEl: null,
  btnStartEl: null,
  btnGetPrediction: null,
  numberInterval: null,
  predictions: null,
  monitorEl: null,
  randomNumber: null,
  colors: null,

  init() {
    this.predictionEl = document.getElementById('prediction');
    this.btnStartEl = document.getElementById('btnStartTimer');
    this.btnGetPrediction = document.getElementById('btnGetPrediction');
    this.monitorEl = document.getElementById('monitor');
    this.predictions = [
      'Через несколько секунд Вы моргнёте.',
      'Через несколько секунд Вы вдохнёте.',
      'Через несколько секунд Вы выдохните.',
      'Через несколько секунд Вы подумаете о чём-нибудь.',
      'Через какое-то время Вы проснётесь.',
      'Через несколько секунд Вы моргнёте.',
      'Через несколько секунд Вы вдохнёте.',
      'Через несколько секунд Вы выдохните.',
      'Через несколько секунд Вы подумаете о чём-нибудь.',
      'Через какое-то время Вы проснётесь.',
    ];
    this.colors = [
      'red',
      'orange',
      'yellowgreen',
      'green',
      'lightskyblue',
      'blue',
      'violet',
      'crimson',
      'lightseagreen',
      'lightsalmon'
    ],
      this.setEventHandlers();
  },

  setEventHandlers() {
    this.btnStartEl.addEventListener('click', () => this.setTimer());
    this.btnGetPrediction.addEventListener('click', () => this.showPrediction());
  },

  setTimer() {
    this.numberInterval = setInterval(() => this.outputRandomNumber(), 1000 / 10);
    this.btnStartEl.classList.add('dn');
    this.btnGetPrediction.classList.remove('dn');
  },

  outputRandomNumber() {
    this.randomNumber = Math.floor(Math.random() * this.predictions.length);
    this.monitorEl.textContent = this.randomNumber;
  },

  showPrediction() {
    this.stopTimer();
    this.monitorEl.style.color = this.colors[this.randomNumber];
    this.monitorEl.textContent += '\n\n' + this.predictions[this.randomNumber];
    this.btnGetPrediction.classList.add('dn');
  },

  stopTimer() {
    clearInterval(this.numberInterval);
  }

}

window.onload = prediction.init();