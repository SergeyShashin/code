'use strict';

/**
 * Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
 * Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
 * Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
 * Добавить таймер обратного отсчета. Игроку нужно успеть угадать за отведенное время.
 */

const settings = {
  rowsCount: 10,
  colsCount: 10,
  quantityRandomNumbers: 10,
  limitTime: 88,
};

const gameTimer = {
  timerEl: null,
  timer: null,
  numberInterval: null,

  init(el, number) {
    this.timerEl = el;
    this.set(number);
  },

  set(number) {
    this.timer = number;
    this.render();
  },

  render() {
    this.timerEl.textContent = this.timer;
  },

  start(number) {
    this.timer = number;
    this.numberInterval = setInterval(() => {
      if (this.timer === 0) {
        this.stop();
        return
      }
      this.timer--;
      this.render()
    }, 1000)
  },

  stop() {
    clearInterval(this.numberInterval);
    this.render();
  },

  getNumberInterval() {
    return this.numberInterval;
  },

  getNumberTimer() {
    return this.timer
  }
}

const guesCell = {
  settings,
  gameTimer,
  guessCellEl: null,
  playingFieldEl: null,
  newGame: null,
  attempts: null,
  randomNumbers: null,
  quantityNumbers: null,
  quantityGuessed: null,
  statusPlaying: null,

  init() {
    this.guessCellEl = document.getElementById('guessCell');
    this.playingFieldEl = document.getElementById('playingField');
    this.newGameEl = document.getElementById('newGame');
    this.gameTimer.init(document.getElementById('timer'), this.settings.limitTime);
    this.setEventHandlers();
    this.run();
  },

  run() {
    this.reset();
  },

  reset() {
    this.playingFieldEl.innerHTML = '';
    this.attempts = 0;
    this.quantityGuessed = 0;
    this.quantityNumbers = this.settings.rowsCount * this.settings.colsCount;
    this.randomNumbers = this.createRandomNumbers();
    this.createPlayingField();
    this.statusPlaying = 'play';
    clearInterval(this.gameTimer.getNumberInterval());
    this.gameTimer.start(this.settings.limitTime);
  },

  createRandomNumbers() {
    let randomNumbers = [];

    while (randomNumbers.length < this.settings.quantityRandomNumbers) {
      let randomNumber = Math.floor(Math.random() * this.quantityNumbers);
      randomNumbers.includes(randomNumber) ? '' : randomNumbers.push(randomNumber);
    }

    return randomNumbers;
  },

  createPlayingField() {
    for (let row = 0, counter = 0; row < this.settings.rowsCount; row++) {
      let trEl = document.createElement('tr');
      for (let col = 0; col < this.settings.colsCount; col++, counter++) {
        let tdEl = document.createElement('td');
        tdEl.dataset.number = counter;
        if (this.randomNumbers.includes(counter)) {
          tdEl.dataset.guess = true;
        }
        trEl.appendChild(tdEl);
      }
      this.playingFieldEl.appendChild(trEl);
    }
  },

  setEventHandlers() {
    this.playingFieldEl.addEventListener('click', e => this.guesCellHandler(e));
    this.newGameEl.addEventListener('click', () => this.reset());
  },

  guesCellHandler(e) {
    if (e.target.tagName !== 'TD' || this.statusPlaying === 'finish' || this.statusPlaying === 'timeEnd') {
      return
    }

    this.attempts++;

    let tdEl = e.target;

    if (tdEl.dataset.guess) {
      tdEl.classList.add('guessed');
      this.quantityGuessed++;
      this.quantityGuessed === this.settings.quantityRandomNumbers ? this.statusPlaying = 'finish' : '';
    } else {
      tdEl.classList.add('clicked');
    }

    if (this.gameTimer.getNumberTimer() === 0) {
      this.statusPlaying = 'timeEnd';
    }

    if (this.statusPlaying === 'timeEnd') {
      alert(`Время угадывания закончилось.`);
      return
    }

    if (this.statusPlaying === 'finish') {
      this.gameTimer.stop();
      alert(`Все загаданные ячейки угаданы c ${this.attempts} попытки.)`);
    }

  }

}

window.onload = () => guesCell.init();
