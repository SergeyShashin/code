'use strict';

const tagsSearching = {
  tagsSearchingEl: null,
  findEl: null,
  btnFindEl: null,
  monitorEl: null,
  tags: null,
  init() {
    this.tagsSearchingEl = document.getElementById('tags-searching');
    this.findEl = document.getElementById('find');
    this.btnFindEl = document.getElementById('btnFind');
    this.monitorEl = document.getElementById('monitorEl');
    this.tags = {
      h1: {
        name: 'h1',
        nameHTML: '<h1>',
        elementHTML: '<h1><h1/>',
        description: `Тег H1 – это главный заголовок, который первым видят пользователи при переходе на сайт.
        В HTML-коде он выглядит следующим образом: <h1>Ваш заголовок</h1>. 
        По своей функции H1 можно сравнить с названием книги – он должен кратко и точно отражать основное содержание веб-страницы, привлекая внимание посетителей. 
        H1 играет важную роль как для пользователей, так и для поисковых систем, облегчая навигацию по содержимому и его понимание.`
      },
      h2: {
        name: 'h2',
        nameHTML: '<h2>',
        elementHTML: '<h2><h2/>',
        description: `Тег h2 в HTML создаёт заголовок второго уровня. 
        Это более мелкий заголовок, чем h1, он подходит для названия раздела или подраздела на странице.`
      },
    };

  }
};

window.onload = () => tagsSearching.init();

