'use strict';

let productCalculator = {
  productCalculatorEl: null,
  enterEl: null,
  nameInputEl: null,
  priceInputEl: null,
  quantityInputEl: null,
  addInputEl: null,
  monitorEl: null,
  resultEl: null,

  init() {
    this.productCalculatorEl = document.getElementById('productCalculator');
    this.enterEl = document.getElementById('enter');
    this.nameInputEl = document.getElementById('name');
    this.priceInputEl = document.getElementById('price');
    this.quantityInputEl = document.getElementById('quantity');
    this.addInputEl = document.getElementById('add');
    this.monitorEl = document.getElementById('monitor');
    this.resultEl = document.getElementById('result');

    this.setEventHandlers();
  },

  setEventHandlers() {
    this.addInputEl.addEventListener('click', e => this.addValueToMonitorEl(e));
  },

  addValueToMonitorEl(e) {
    let trEl = this.createTrEl();
    this.monitorEl.appendChild(trEl);
  },

  createTrEl() {
    let trEl = document.createElement('tr');
    trEl.appendChild(this.createTdEl(this.nameInputEl.value));

    return trEl;
  },

  createTdEl(name) {
    let tdEl = document.createElement('td');
    tdEl.textContent = name;
    return tdEl;
  }




};

window.onload = productCalculator.init();