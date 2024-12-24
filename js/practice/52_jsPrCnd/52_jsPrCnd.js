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
  currentNumberYear: null,
  currentYearEl: null,
  currentNumberMonth: null,
  currentMonthEl: null,
  currentDayWeek: null,
  namefirstDayCurrentMonth: null,
  numberNextMonth: null,
  numberPrevMonth: null,
  quantitytDaysInCurrentMonth: null,

  init(userSettings = {}) {
    this.config.init(userSettings);
    this.calendarEl = document.getElementById('calendar');
    this.currentYearEl = document.getElementById('currentYear');
    this.currentMonthEl = document.getElementById('currentMonth');
    this.currentDate = new Date();
    this.currentNumberYear = this.currentDate.getFullYear();
    this.currentNumberMonth = this.currentDate.getMonth();
    this.currentNumberDayWeek = this.currentDate.getDay();
    this.currentYearEl.textContent = this.currentNumberYear;
    this.currentMonthEl.textContent = this.config.getNamesMonth()[this.currentNumberMonth];
    this.namefirstDayCurrentMonth = this.config.getNamesDaysWeek()[new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay()];
    console.log(new Date(this.currentNumberYear, this.currentNumberMonth, 1).getDay());
    this.nextNumberMonth = this.currentNumberMonth === 11 ? 0 : this.currentNumberMonth + 1;
    this.prevNumberMonth = this.currentNumberMonth === 0 ? 11 : this.currentNumberMonth - 1;
    this.quantitytDaysInCurrentMonth = new Date(this.currentNumberYear, this.nextNumberMonth, 0).getDate();
    this.calendarEl.appendChild(this.addTableEl());
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

    for (let row = 0; row < this.config.getQuantityRows(); row++) {
      let trEl = document.createElement('tr');
      for (let col = 0; col < this.config.getQuantityCols(); col++) {
        let tdEl = document.createElement('td');
        tdEl.dataset.nameDay = namesDaysWeek[col];
        trEl.appendChild(tdEl);
      }
      tBody.appendChild(trEl);
    }

    return tBody
  }

};

window.onload = calendar.init({ namesDaysWeek: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'] });