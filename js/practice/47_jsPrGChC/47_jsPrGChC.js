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

  init(rowsQuantity, colsQuantity, colors) {
    this.rowsQuantity = rowsQuantity;
    this.colsQuantityQuantity = colsQuantity;
    this.colors = [...colors];
    this.gameChangeColorEl = document.getElementById('gameChangeColor');
    this.gameEls = {};

    for (let row = 0; row < rowsQuantity; row++) {
      let trEl = document.createElement('tr');
      for (let col = 0; col < colsQuantity; col++) {
        let tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        this.gameEls[`${row}_${col}`] = tdEl;
      }
      this.gameChangeColorEl.appendChild(trEl);
    }

  },

  getgameChangeColorEl() {
    return this.gameChangeColorEl
  },

  getGameEls() {
    return this.gameEls
  },

};

const statusGame = {

}

const gameChangeColor = {
  config,
  map,
  statusGame,

  init(userSettings = {}) {
    this.config.init(userSettings);
    this.map.init(this.config.getRows(), this.config.getCols(), this.config.getColors());
  }

};

window.onload = gameChangeColor.init({ rowsQuantity: 5, colsQuantity: 5 });

