'use strict';
const settings = {
  namesMonth: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
  namesDaysWeek: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
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
};

const calendar = {
  config,
  calendarEl: null,
  tableEl: null,


  init(userSettings = {}) {
    this.config.init(userSettings);
    this.calendarEl = document.getElementById('calendar');

    this.addTableEl();

  },

  addTableEl() {
    this.tableEl = document.createElement('table');

    let tHeadEl = document.createElement('thead');
    let trEl = document.createElement('tr');

    for (let name of this.config.getNamesDaysWeek()) {
      let thEl = document.createElement('th');
      thEl.textContent = name;
      trEl.appendChild(thEl);
    }

    tHeadEl.appendChild(trEl);
    this.tableEl.appendChild(tHeadEl);


    this.calendarEl.appendChild(this.tableEl);
  },

};

window.onload = calendar.init({ namesDaysWeek: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'] });