'use strict';

let productCalculator = {
  productCalculatorEl: null,
  enterEl: null,
  inputsElsInEnterEl: null,
  // nameInputEl: null,
  // priceInputEl: null,
  // quantityInputEl: null,
  addBtnEl: null,
  monitorEl: null,
  resultEl: null,

  init() {

    this.productCalculatorEl = document.getElementById('productCalculator');
    this.enterEl = document.getElementById('enter');
    // this.nameInputEl = document.getElementById('name');
    // this.priceInputEl = document.getElementById('price');
    // this.quantityInputEl = document.getElementById('quantity');
    this.addBtnEl = document.getElementById('add');
    this.monitorEl = document.getElementById('monitor');
    this.resultEl = document.getElementById('result');

    this.setEventHandlers();
  },

  setEventHandlers() {
    this.addBtnEl.addEventListener('click', e => this.addTrElToMonitorEl(e));
  },

  addTrElToMonitorEl(e) {
    e.preventDefault();
    this.inputsElsInEnterEl = this.enterEl.querySelectorAll('input');

    let trEl = document.createElement('tr');
    let quantity = 0;
    let price = 0;
    let sum = 0;

    for (let input of this.inputsElsInEnterEl) {
      let id = input.id;
      let content = input.value;
      switch (id) {
        case 'price':
          price = content;
          break;
        case 'quantity':
          quantity = content;
          break;
      }
      trEl.appendChild(this.createTdEl(id, content));
    }

    sum = price * quantity;
    trEl.appendChild(this.createTdEl('sum', sum));
    trEl.appendChild(this.createTdEl('remove', 'удалить'));
    this.monitorEl.appendChild(trEl);
  },

  createTdEl(idInput, contentInput) {
    let tdEl = document.createElement('td');
    tdEl.textContent = contentInput;
    tdEl.classList.add(idInput);
    return tdEl
  }

};

window.onload = productCalculator.init();