'use strict';

/**
 * Источник задачи file:///C:/Users/tdgbi/Desktop/S/code/js/practice/47_jsPrGChC/47_jsPrGChC.html
 * Игра будет представлять собой таблицу, ячейки которой окрашены в разные случайные цвета.
 * Пусть есть определенный набор цветов, например, красный, зеленый, синий.
 * Пусть каждый клик на ячейку меняет ее цвет по кругу.
 * Цель игры - за наименьшее количество кликов сделать таблицу одного - любого - цвета.
 */

const settings = {
  rowsQuantity: 3,
  colsQuantity: 3,
  colors: ['red', 'green', 'blue'],
};

const config = {
  settings,

  init(userSettings) {
    this.settings = Object.assign(this.settings, userSettings);
  },

  getRows() {
    return this.settings.rowsQuantity
  },

  getCols() {
    return this.settings.colsQuantity
  },

  getColors() {
    return this.settings.colors
  }
};

const map = {
  gameChangeColorEl: null,
  rowsQuantity: null,
  colsQuantityQuantity: null,
  colors: null,
  gameEls: null,
  colorsLength: null,

  init(rowsQuantity, colsQuantity, colors) {
    this.rowsQuantity = rowsQuantity;
    this.colsQuantityQuantity = colsQuantity;
    this.colors = [...colors];
    this.colorsLength = this.colors.length;
    this.gameChangeColorEl = document.getElementById('gameChangeColor');
    this.gameEls = {};

    for (let row = 0; row < rowsQuantity; row++) {
      let trEl = document.createElement('tr');
      for (let col = 0; col < colsQuantity; col++) {
        let tdEl = document.createElement('td');
        tdEl.classList.add(this.getRandomColor());
        trEl.appendChild(tdEl);
        tdEl.dataset.row = row;
        tdEl.dataset.col = col;
        this.gameEls[`${row}_${col}`] = tdEl;
      }
      this.gameChangeColorEl.appendChild(trEl);
    }

  },

  getGameChangeColorEl() {
    return this.gameChangeColorEl
  },

  getGameEls() {
    return this.gameEls
  },

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colorsLength)];
  },

  changeColorEl(e) {
    let target = e.target;

    if (target.tagName !== 'TD') {
      return
    }

    let nextColor = this.getNextColor(target.className);
    target.className = nextColor;
  },

  getNextColor(currentColor) {
    let idxCurrentColor = this.colors.indexOf(currentColor);
    idxCurrentColor = idxCurrentColor + 1 === this.colorsLength ? 0 : idxCurrentColor + 1;
    return this.colors[idxCurrentColor];
  }

};

const statusGame = {
  statusGame: null,
  play() {
    this.statusGame = 'play';
  },

  finish() {
    this.statusGame = 'finish';
  },
  isPlay() {
    return this.statusGame === 'play'
  }
}

const gameChangeColor = {
  config,
  map,
  statusGame,
  quantityOneColorForWin: null,
  counter: null,
  counterEl: null,

  init(userSettings = {}) {
    this.config.init(userSettings);
    this.map.init(this.config.getRows(), this.config.getCols(), this.config.getColors());
    this.quantityOneColorForWin = this.config.getRows() * this.config.getCols();
    this.counterEl = document.getElementById('clicks');
    this.counter = 0;
    this.statusGame.play();
    this.setEventHandlers();
  },

  setEventHandlers() {
    this.map.getGameChangeColorEl().addEventListener('click', (e) => this.changeColorEl(e));
  },

  changeColorEl(e) {
    if (this.isFinish()) {
      this.statusGame.finish();
      this.sayWin();
      this.map.getGameChangeColorEl().removeEventListener('click', this.changeColorEl);
      return
    } else {
      this.incrementCounter();
      this.map.changeColorEl(e);
    }
  },

  isFinish() {
    let gameEls = this.map.getGameEls();

    const result = {};

    for (let el in gameEls) {
      let color = gameEls[el].className
      result[`${color}`] ? result[`${color}`]++ : result[`${color}`] = 1
    }


    return Object.values(result).filter(el => el === this.quantityOneColorForWin).length
  },

  sayWin() {
    alert('У Вас получилось собрать ячейки одного цвета)');
  },

  incrementCounter() {
    this.counter++;
    this.counterEl.textContent = this.counter;
  }

};

window.onload = gameChangeColor.init({ rowsQuantity: 5, colsQuantity: 5 });

