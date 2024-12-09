/**
 * Источник задачи https://code.mu/ru/javascript/book/practice/history-searching/
 * Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год.
 * Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год.
 * Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
 */

const searchHistoricalEventsByYear = {
  searchHistoricalEventsByYearEl: null,
  inputEl: null,
  monitorEl: null,
  historicalEvets: null,
  init() {

  }
};

window.onload = searchHistoricalEventsByYear.init();