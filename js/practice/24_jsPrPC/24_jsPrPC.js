'use strict';

let productCalculator = {
  productCalculatorEl: null,
  enterEl: null,
  inputsElsInEnterEl: null,
  trEls: null,
  deletedTrEls: null,
  tdEls: null,
  deletedTdEls: null,
  addBtnEl: null,
  monitorEl: null,
  nameColsInMonitorEl: null,
  resultEl: null,
  counterForTrElId: null,

  init() {
    this.productCalculatorEl = document.getElementById('productCalculator');
    this.enterEl = document.getElementById('enter');
    this.addBtnEl = document.getElementById('add');
    this.monitorEl = document.getElementById('monitor');
    this.resultEl = document.getElementById('result');
    this.nameColsInMonitorEl = ['name', 'price', 'quantity', 'sum', 'remove']
    this.trEls = {};
    this.tdEls = {};
    this.deletedTrEls = {};
    this.deletedTdEls = {};
    this.counterForTrElId = 0;

    this.setEventHandlers();

  },

  setEventHandlers() {
    this.addBtnEl.addEventListener('click', e => this.addTrElToMonitorEl(e));
    this.monitorEl.addEventListener('change', e => this.handleChangeMonitorEl(e));
    this.monitorEl.addEventListener('click', e => this.handleClickMonitorEl(e));
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
      inputEl.name = idInput;
      idInput === 'price' || idInput == 'quantity' ? inputEl.type = 'number' : '';
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
  },

  handleChangeMonitorEl(e) {
    let target = e.target;
    let nameInput = target.name;

    if (nameInput === 'price' || nameInput === 'quantity') {
      let numberTr = target.parentElement.parentElement.dataset.code;
      this.tdEls[`${numberTr}_sum`].textContent = Number(this.tdEls[`${numberTr}_price`].firstChild.value) * Number(this.tdEls[`${numberTr}_quantity`].firstChild.value);
      this.renderResult(this.getResultSum());
    }
  },

  handleClickMonitorEl(e) {
    let target = e.target;

    if (target.classList.contains('remove')) {
      let numberTr = target.parentElement.dataset.code;
      this.deletedTrEls[numberTr] = this.trEls[numberTr];
      delete this.trEls[numberTr];

      for (let tdName of this.nameColsInMonitorEl) {
        this.deletedTdEls[`${numberTr}_${tdName}`] = this.tdEls[`${numberTr}_${tdName}`];
        delete this.tdEls[`${numberTr}_${tdName}`];
      }

      target.parentElement.remove();

      this.renderResult(this.getResultSum());
    }
  }
};

window.onload = productCalculator.init();