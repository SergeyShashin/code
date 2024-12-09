/**
 * Источник задачи https://code.mu/ru/javascript/book/practice/history-searching/
 * Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год.
 * Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год.
 * Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
 */

const searchHistoricalEventsByYear = {
  searchHistoricalEventsByYearEl: null,
  inputEl: null,
  btnFindEl: null,
  monitorEl: null,
  historicalEventsEl: null,
  historicalEvents: null,
  init() {
    this.searchHistoricalEventsByYear = document.getElementById('searchHistoricalEventsByYear');
    this.inputEl = document.getElementById('input');
    this.btnFindEl = document.getElementById('btnFind');
    this.monitorEl = document.getElementById('monitor');
    this.historicalEventsEl = document.getElementById('historicalEvents');
    this.historicalEvents = {
      2024: {
        date: '01.01.24',
        event: 'название события 01.01.24',
        description: 'описание события 01.01.24'
      }
    };
  }
};

window.onload = searchHistoricalEventsByYear.init();