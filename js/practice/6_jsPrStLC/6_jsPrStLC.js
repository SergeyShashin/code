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
  date: null,
  currentYear: null,
  nameCurrentMonth: null,
  currentNumberMonth: null,
  currentMonth: null,
  nameCurrentDay: null,
  namesMonths: null,
  namesDays: null,
  leapYear: null,
  quantityDaysInFebruaryOfLeapYear: null,

  init() {
    this.lineCalendarEl = document.getElementById('lineCalendar');
    this.namesMonths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    this.namesDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    this.quantityDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    this.quantityDaysInFebruaryOfLeapYear = 29;
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentNumberMonth = this.date.getDay();
    this.nameCurrentMonth = this.namesMonths[this.currentNumberMonth];
    this.nameCurrentDay = this.namesDays[this.date.getDay()];
    this.leapYear = this.defineLeapYear();
    this.currentMonth = this.getCurrentMonth();

    console.log(this.currentYear);
    console.log(this.nameCurrentMonth);
    console.log(this.nameCurrentDay);
    console.log(this.leapYear);
    console.log(this.currentMonth);
  },

  defineLeapYear() {
    return this.currentYear % 4 === 0 ? true : false;
  },

  getCurrentMonth() {
    let currentMonth = [];

    let quantityDaysInMonth = this.currentMonth === this.namesMonths[1] && this.leapYear
      ? this.quantityDaysInFebruaryOfLeapYear
      : this.quantityDaysInMonth[this.currentNumberMonth];

    console.log('дней в этом месяце' + quantityDaysInMonth);

    // for (let day = 1; day < this) { }
  }

};

window.onload = () => lineCalendar.init();