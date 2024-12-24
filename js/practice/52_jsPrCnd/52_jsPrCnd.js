'use strict';

/**
 * Реализуем календарь. Для простоты просто сделаем так, чтобы календарь выводился за текущий месяц.
 * Но с прицелом на то, что его можно будет доработать так, чтобы можно было менять месяц и год.
 */

const settings = {
  namesMonth: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  namesDaysWeek: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  quaintityRows: 6,
  quaintityCols: 7
};

const config = {
  settings,

  init(userSettings) {
    this.settings = Object.assign(this.settings, userSettings);
  },

  getNamesMonth() {
    return this.settings.namesMonth;
  },

  getNamesDaysWeek() {
    return this.settings.namesDaysWeek;
  },

  getQuantityRows() {
    return this.settings.quaintityRows
  },

  getQuantityCols() {
    return this.settings.quaintityCols
  }
};

const calendar = {
  config,
  calendarEl: null,
  tableEl: null,
  currentDate: null,
  currentYearEl: null,
  currentNumberYear: null,
  nextNumberYear: null,
  prevNumberYearnull: null,
  currentNumberMonth: null,
  currentMonthEl: null,
  currentDayWeek: null,
  currentNumber: null,
  numberfirstDayCurrentMonth: null,
  namefirstDayCurrentMonth: null,
  numberNextMonth: null,
  numberPrevMonth: null,
  quantitytDaysInCurrentMonth: null,
  currentMonthEls: null,

  init(userSettings = {}) {
    this.config.init(userSettings);
    this.currentDate = new Date();
    this.calendarEl = document.getElementById('calendar');
    this.currentYearEl = document.getElementById('currentYear');
    this.currentMonthEl = document.getElementById('currentMonth');
    this.currentNumberYear = this.currentDate.getFullYear();
    this.nextNumberYear = this.currentNumberYear + 1;
    this.prevNumberYear = this.currentNumberYear - 1;
    this.currentNumberMonth = this.currentDate.getMonth();
    this.currentNumberDayWeek = this.currentDate.getDay();
    this.currentNumber = this.currentDate.getDate();
    this.currentYearEl.textContent = this.currentNumberYear;
    this.currentMonthEl.textContent = this.config.getNamesMonth()[this.currentNumberMonth];
    this.numberfirstDayCurrentMonth = new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay();
    this.namefirstDayCurrentMonth = this.config.getNamesDaysWeek()[new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay()];
    this.quantitytDaysInCurrentMonth = this.getQuantitytDaysInCurrentMonth();
    this.currentMonthEls = {};
    this.calendarEl.appendChild(this.addTableEl());
    this.setEventHandlers();
  },

  render() {
    this.currentYearEl.innerHTML = '';
    this.currentMonthEl.innerHTML = '';
    this.currentNumberYear = this.currentDate.getFullYear();
    this.nextNumberYear = this.currentNumberYear + 1;
    this.prevNumberYear = this.currentNumberYear - 1;
    this.currentNumberMonth = this.currentDate.getMonth();
    this.currentNumberDayWeek = this.currentDate.getDay();
    this.currentNumber = this.currentDate.getDate();
    this.currentYearEl.textContent = this.currentNumberYear;
    this.currentMonthEl.textContent = this.config.getNamesMonth()[this.currentNumberMonth];
    this.numberfirstDayCurrentMonth = new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay();
    this.namefirstDayCurrentMonth = this.config.getNamesDaysWeek()[new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay()];
    this.quantitytDaysInCurrentMonth = this.getQuantitytDaysInCurrentMonth();
    this.currentMonthEls = {};

    this.calendarEl.querySelector('table').remove();
    this.calendarEl.appendChild(this.addTableEl());
  },

  getQuantitytDaysInCurrentMonth() {
    if (this.currentNumberMonth === 11) {
      this.nextNumberMonth = 0;
      return new Date(this.nextNumberYear, this.nextNumberMonth, 0).getDate();
    }
    this.nextNumberMonth = this.currentNumberMonth + 1;
    return new Date(this.currentNumberYear, this.nextNumberMonth, 0).getDate();
  },

  addTableEl() {
    this.tableEl = document.createElement('table');
    this.tableEl.appendChild(this.addThead());
    this.tableEl.appendChild(this.addTbody());

    return this.tableEl
  },

  addThead() {
    let tHeadEl = document.createElement('thead');
    let trEl = document.createElement('tr');

    for (let name of this.config.getNamesDaysWeek()) {
      let thEl = document.createElement('th');
      thEl.textContent = name;
      trEl.appendChild(thEl);
    }

    tHeadEl.appendChild(trEl);

    return tHeadEl
  },

  addTbody() {
    let tBody = document.createElement('tbody');
    let namesDaysWeek = this.config.getNamesDaysWeek();
    let number = 1;

    for (let row = 0; row < this.config.getQuantityRows(); row++) {
      let trEl = document.createElement('tr');

      for (let col = 0; col < this.config.getQuantityCols(); col++) {
        let tdEl = document.createElement('td');

        if (row === 0 && col >= this.numberfirstDayCurrentMonth) {
          tdEl.dataset.nameDay = namesDaysWeek[col];
          tdEl.dataset.number = number;
          tdEl.textContent = number;
          this.currentMonthEls[`${number}_${namesDaysWeek[col]}`] = tdEl;
          if (number === this.currentNumber) {
            tdEl.classList.add('currentNumber');
          }
          number++;
        }

        if (row > 0 && number <= this.quantitytDaysInCurrentMonth) {
          tdEl.dataset.nameDay = namesDaysWeek[col];
          tdEl.dataset.number = number;
          tdEl.textContent = number;
          this.currentMonthEls[`${number}_${namesDaysWeek[col]}`] = tdEl;
          if (number === this.currentNumber) {
            tdEl.classList.add('currentNumber');
          }
          number++;
        }

        if (tdEl.textContent === '') {
          tdEl.classList.add('emptyTd');
        }

        trEl.appendChild(tdEl);

      }

      tBody.appendChild(trEl);
    }

    return tBody
  },

  setEventHandlers() {
    this.calendarEl.addEventListener('click', e => this.handleClickCalendarEl(e));
  },

  handleClickCalendarEl(e) {
    let target = e.target;
    switch (target.id) {
      case 'btnPrevYear':
        this.setPrevYear();
        break;
      case 'btnNextYear':
        this.setNextYear();
        break;
      case 'btnPrevMonth':
        this.setPrevMonth();
        break;
      case 'btnNextMonth':
        this.setNextMonth();
        break;
    }
  },

  setPrevYear() {
    this.currentDate = new Date(this.prevNumberYear, 0);
    this.render();
  },

  setNextYear() {
    this.currentDate = new Date(this.nextNumberYear, 0);
    this.render();
  },

  setPrevMonth() {
    let month;
    let year = this.currentNumberYear;

    if (this.currentNumberMonth === 0) {
      month = 11;
      year = year - 1;
    } else {
      month = this.currentNumberMonth - 1
    }

    this.currentDate = new Date(year, month);

    this.render();

  },

  setNextMonth() {
    let month;
    let year = this.currentNumberYear;

    if (this.currentNumberMonth === 11) {
      month = 0;
      year = year + 1;
    } else {
      month = this.currentNumberMonth + 1
    }

    this.currentDate = new Date(year, month);

    this.render();

  },

};

window.onload = calendar.init({ namesDaysWeek: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] });