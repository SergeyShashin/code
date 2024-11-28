'use strict';

/**
 * Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
 * Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
 * Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.
 */

const settings = {
  rowsCount: 10,
  colsCount: 10,
  quantityRandomNumbers: 10
};

const guesCell = {
  settings,
  guessCellEl: null,
  playingFieldEl: null,
  attempts: null,
  randomNumbers: null,
  quantityNumbers: null,
  quantityGuessed: null,
  statusPlaying: null,

  init() {
    this.guessCellEl = document.getElementById('guessCell');
    this.playingFieldEl = document.getElementById('playingField');
    this.run();
  },

  run() {
    this.reset();

  },

  reset() {
    this.attempts = 0;
    this.quantityGuessed = 0;
    this.quantityNumbers = this.settings.rowsCount * this.settings.colsCount;
    this.randomNumbers = this.createRandomNumbers();
    this.createPlayingField();
    this.setEventHandlers();
    this.statusPlaying = 'play';
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
    console.log(this.randomNumbers);
    for (let row = 0, counter = 0; row < this.settings.rowsCount; row++) {
      let trEl = document.createElement('tr');
      for (let col = 0; col < this.settings.colsCount; col++, counter++) {
        let tdEl = document.createElement('td');
        tdEl.dataset.number = counter;
        if (this.randomNumbers.includes(counter)) {
          tdEl.dataset.guess = true;
          tdEl.textContent = '?';
        }
        trEl.appendChild(tdEl);
      }
      this.playingFieldEl.appendChild(trEl);
    }
  },

  setEventHandlers() {
    this.playingFieldEl.addEventListener('click', e => this.guesCellHandler(e));
  },

  guesCellHandler(e) {
    if (e.target.tagName !== 'TD' || this.statusPlaying === 'finish') {
      return
    }

    this.attempts++;

    let tdEl = e.target;

    if (tdEl.dataset.guess) {
      tdEl.classList.add('guessed');
      this.quantityGuessed++;
      this.quantityGuessed === this.settings.quantityRandomNumbers ? this.statusPlaying = 'finish' : '';
    }

    if (this.statusPlaying === 'finish') {
      alert(`Все загаданные ячейки угаданы за ${this.attempts} попыток)`);
    }

  }

}

window.onload = () => guesCell.init();
