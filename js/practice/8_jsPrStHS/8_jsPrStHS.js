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
  messages: null,

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
      },
      2023: {
        date: '01.01.23',
        event: 'название события 01.01.23',
        description: 'описание события 01.01.23'
      },
      2022: {
        date: '01.01.22',
        event: 'название события 01.01.22',
        description: 'описание события 01.01.22'
      },
    };
    this.messages = {
      notInformationTag: 'Информации об этом событии на данный момент нет.'
    }
    this.appendOptionInDatalist();
    this.setEventHandlers();
  },

  appendOptionInDatalist() {
    let years = Object.keys(this.historicalEvents);

    for (let year of years) {
      let optionEl = document.createElement('option');
      optionEl.value = year;
      historicalEvents.appendChild(optionEl);
    }
  },

  setEventHandlers() {
    this.btnFindEl.addEventListener('click', e => this.handlerClickBtnFindEl(e));
    document.addEventListener('keydown', e => this.handlerKeydown(e));
  },

  handlerClickBtnFindEl(e) {
    let targetClick = e.target;

    if (targetClick.tagName === 'BUTTON') {
      this.outputInfoEvent();
    }
  },

  outputInfoEvent() {
    let query = this.inputEl.value;
    if (query && this.historicalEvents[query]) {
      let trEl = document.createElement('tr');
      let tdDateEventEl = document.createElement('td');
      let tdNameEventEl = document.createElement('td');
      let tdDescriptionEventEl = document.createElement('td');
      tdDateEventEl.textContent = this.historicalEvents[query].date;
      tdNameEventEl.textContent = this.historicalEvents[query].event;
      tdDescriptionEventEl.textContent = this.historicalEvents[query].description;
      trEl.appendChild(tdDateEventEl);
      trEl.appendChild(tdNameEventEl);
      trEl.appendChild(tdDescriptionEventEl);
      this.monitorEl.appendChild(trEl);
    } else {
      this.monitorEl.textContent = this.messages['notInformationTag']
    }
  },

  handlerKeydown(e) {
    if (e.code === 'Enter') {
      this.outputInfoEvent();
    }
  }

};

window.onload = searchHistoricalEventsByYear.init();