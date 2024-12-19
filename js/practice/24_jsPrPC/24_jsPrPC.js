'use strict';

let productCalculator = {
  productCalculatorEl: null,
  enterEl: null,
  inputsElsInEnterEl: null,
  trEls: null,
  tdEls: null,
  addBtnEl: null,
  monitorEl: null,
  resultEl: null,
  counterForTrElId: null,

  init() {

    this.productCalculatorEl = document.getElementById('productCalculator');
    this.enterEl = document.getElementById('enter');
    this.addBtnEl = document.getElementById('add');
    this.monitorEl = document.getElementById('monitor');
    this.resultEl = document.getElementById('result');
    this.trEls = {};
    this.tdEls = {};
    this.counterForTrElId = 0;

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

    trEl.dataset.code = this.counterForTrElId;
    this.trEls[this.counterForTrElId] = trEl;
    this.monitorEl.appendChild(trEl);

    this.renderResult(this.getResultSum());
    this.counterForTrElId++;
  },

  createTdEl(idInput, contentInput) {
    let tdEl = document.createElement('td');

    if (idInput !== 'sum' && idInput !== 'remove') {
      let inputEl = document.createElement('input');
      inputEl.value = contentInput;
      tdEl.appendChild(inputEl);
    } else {
      tdEl.textContent = contentInput;
    }

    tdEl.dataset.code = `${this.counterForTrElId}_${idInput}`;

    this.tdEls[`${this.counterForTrElId}_${idInput}`] = tdEl;
    tdEl.classList.add(idInput);
    return tdEl
  },

  getResultSum() {
    let keysTdEls = Object.keys(this.tdEls);
    let sum = 0;

    for (let keyTdEls of keysTdEls) {
      /(sum)/.test(keyTdEls) ? sum += Number(this.tdEls[keyTdEls].textContent) : '';
    }

    return sum;
  },

  renderResult(sum) {
    this.resultEl.textContent = `Итого: ${sum}`;
  }
};

window.onload = productCalculator.init();