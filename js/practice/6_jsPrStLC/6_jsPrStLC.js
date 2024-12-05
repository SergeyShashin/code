'use strict';
/**
 *Линейный календарь на JavaScript
 *Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.
 *Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.
 *Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.
 *Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц.
 *Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу. 
 */

const lineCalendar = {
  lineCalendarEl: null,
  yearEl: null,
  monthEl: null,
  dayWeekEl: null,
  headerEl: null,
  date: null,
  currentYear: null,
  nameCurrentMonth: null,
  currentNumberMonth: null,
  currentMonth: null,
  numberCurrentDayMonth: null,
  nameCurrentDayWeek: null,
  namesMonths: null,
  namesDays: null,
  leapYear: null,
  quantityDaysInFebruaryOfLeapYear: null,

  init() {
    this.lineCalendarEl = document.getElementById('lineCalendar');
    this.yearEl = document.getElementById('year');
    this.monthEl = document.getElementById('month');
    this.dayWeekEl = document.getElementById('dayWeek');
    this.headerEl = document.getElementById('header');
    this.namesMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    this.namesDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    this.quantityDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.quantityDaysInFebruaryOfLeapYear = 29;
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentNumberMonth = this.date.getMonth();
    this.nameCurrentMonth = this.namesMonths[this.currentNumberMonth];
    this.nameCurrentDayWeek = this.namesDays[this.date.getDay()];
    this.leapYear = this.defineLeapYear();
    this.currentMonth = this.getCurrentMonth();
    this.numberCurrentDayMonth = this.date.getDate();

    this.setYearAndMonthTohtml();
    this.addCurrentMonthToHTML();
    this.setEventHandlers();
  },

  defineLeapYear() {
    return this.currentYear % 4 === 0 ? true : false;
  },

  getCurrentMonth() {
    let currentMonth = [];

    let quantityDaysInMonth = this.currentNumberMonth === 1 && this.leapYear
      ? this.quantityDaysInFebruaryOfLeapYear
      : this.quantityDaysInMonth[this.currentNumberMonth];

    for (let day = 1; day <= quantityDaysInMonth; day++) {
      currentMonth.push(day);
    }

    return currentMonth;
  },

  addCurrentMonthToHTML() {
    for (let day of this.currentMonth) {
      let liEl = document.createElement('li');
      liEl.textContent = day;
      liEl.dataset.currentYear = this.currentYear;
      liEl.dataset.currentMonth = this.currentMonth;
      liEl.dataset.currentMonth = this.num;
      liEl.dataset.currentNumberMonth = this.currentNumberMonth;

      if (this.numberCurrentDayMonth === day) {
        liEl.classList.add('currentDayMonth');
        liEl.dataset.currentDayMonth = this.numberCurrentDayMonth;
      } else if (this.numberCurrentDayMonth < day) {
        liEl.classList.add('pastDaysCurrentMonth');
      } else if (this.numberCurrentDayMonth > day) {
        liEl.classList.add('futureDaysCurrentMonth');
      }
      this.lineCalendarEl.appendChild(liEl);
    }
  },

  setYearAndMonthTohtml() {
    this.yearEl.value = this.currentYear;
    this.monthEl.value = this.nameCurrentMonth;
    this.dayWeekEl.value = this.nameCurrentDayWeek;
  },

  setEventHandlers() {
    this.headerEl.addEventListener('click', e => this.hanleClick(e));
  },

  hanleClick(e) {
    let numberPrevMonth = null;
    let numberPrevYear = null;

    if (e.target.id === 'prevMonth') {

      if (this.currentNumberMonth - 1 < 0) {
        numberPrevYear = Number(this.currentYear) - 1;
        numberPrevMonth = 11;
        this.date = new Date(numberPrevYear, numberPrevMonth);
      } else {
        numberPrevMonth = this.currentNumberMonth - 1;
        this.date = new Date(this.currentYear, numberPrevMonth);
      }
    }

    if (e.target.id === 'nextMonth') {
      if (this.currentNumberMonth + 1 > 11) {
        numberPrevYear = Number(this.currentYear) + 1;
        numberPrevMonth = 0;
        this.date = new Date(numberPrevYear, numberPrevMonth);
      } else {
        numberPrevMonth = this.currentNumberMonth + 1;
        this.date = new Date(this.currentYear, numberPrevMonth);
      }
    }

    this.render();
  },

  render() {
    this.lineCalendarEl.innerHTML = '';
    this.currentYear = this.date.getFullYear();
    this.currentNumberMonth = this.date.getMonth();
    this.nameCurrentMonth = this.namesMonths[this.currentNumberMonth];
    this.nameCurrentDayWeek = this.namesDays[this.date.getDay()];
    this.leapYear = this.defineLeapYear();
    this.currentMonth = this.getCurrentMonth();
    this.numberCurrentDayMonth = this.date.getDate();

    this.setYearAndMonthTohtml();
    this.addCurrentMonthToHTML();
  }

};

window.onload = () => lineCalendar.init();