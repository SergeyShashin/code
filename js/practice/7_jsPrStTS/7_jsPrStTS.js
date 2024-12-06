'use strict';
/**
 * Сейчас мы сделаем сайт, который будет помогать определить значение HTML тега.
 * Пусть в этом скрипте будет инпут, в который пользователь будет вводить имя тега.
 * После этого по нажатию на Enter под инпутом пусть выдается описание этого тега. * 
 */

const tagsSearching = {
  tagsSearchingEl: null,
  findEl: null,
  btnFindEl: null,
  monitorEl: null,
  datalistEl: null,
  tags: null,
  messages: null,

  init() {
    this.tagsSearchingEl = document.getElementById('tags-searching');
    this.findEl = document.getElementById('find');
    this.btnFindEl = document.getElementById('btnFind');
    this.monitorEl = document.getElementById('monitor');
    this.datalistEl = document.getElementById('tags');
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
      h3: {
        name: 'h3',
        nameHTML: '<h3>',
        elementHTML: '<h3><h3/>',
        description: `Тег <h3> используется для создания заголовка третьего уровня.
        Это один из шести заголовков, которые можно использовать в HTML для разметки текста: от <h1> до <h6> .
        Каждый последующий заголовок, начиная с <h1> , представляет собой заголовок более низкого уровня, чем предыдущий.`
      },
      h4: {
        name: 'h4',
        nameHTML: '<h4>',
        elementHTML: '<h4><h4/>',
        description: `Тег h4 создает заголовок 4-го уровня.
        Заголовок - это название какого-либо блока, обычно набранное большим и жирным шрифтом.
        Если сравнивать HTML страницу с книгой, то заголовок h1 можно считать названием всей книги,
        h2 - главы, h3 - параграфа в главе и так далее.`
      },
      h5: {
        name: 'h5',
        nameHTML: '<h5>',
        elementHTML: '<h5><h5/>',
        description: `Тег h5 создает заголовок 5 -го уровня.
        Заголовок - это название какого-либо блока, обычно набранное большим и жирным шрифтом.
        Заголовок h1 - это самый главный заголовок на странице, в нем должна быть отражена ее основная мысль.`
      },
      h6: {
        name: 'h6',
        nameHTML: '<h6>',
        elementHTML: '<h6><h6/>',
        description: `Тег <h6> определяет заголовок шестого уровня. Это самый маленький заголовок на странице.`
      },
      p: {
        name: 'p',
        nameHTML: '<p>',
        elementHTML: '<p><p/>',
        description: `HTML-элемент <p> представляет собой абзац.
        Абзацы обычно представлены в визуальной среде в виде блоков текста, отделённых от соседних блоков пустыми
        строками и/или отступом в первой строке, кроме этого HTML-абзацы могут представлять собой структурную
        группировку однотипного содержимого, например изображений или полей формы.
        Абзацы являются блочными элементами.`
      },
      table: {
        name: 'table',
        nameHTML: '<table>',
        elementHTML: '<table><table/>',
        description: `Элемент <table> служит контейнером для элементов, определяющих содержимое таблицы.
        Любая таблица состоит из строк и ячеек, которые задаются с помощью тегов <tr> и <td>.
        Внутри <table> допустимо использовать следующие элементы: <caption>, <col>, <colgroup>, <tbody>,
        <td>, <tfoot>, <th>, <thead> и <tr>.
        Таблицы с невидимой границей долгое время использовались для верстки веб-страниц,
        позволяя разделять документ на модульные блоки.
        Подобный способ применения таблиц нашел воплощение на многих сайтах,
        пока ему на смену не пришел более современный способ верстки с помощью слоев.`
      },
      pre: {
        name: 'pre',
        nameHTML: '<pre>',
        elementHTML: '<pre><pre/>',
        description: `HTML-элемент <pre> представляет собой предварительно отформатированный текст,
        который должен быть представлен точно так, как написано в HTML-файле.
        Текст обычно отображается с использованием непропорционального ("monospace") шрифта.
        Пробелы внутри этого элемента отображаются как записанные.`
      },
      span: {
        name: 'span',
        nameHTML: '<span>',
        elementHTML: '<span><span/>',
        description: `HTML-элемент <span> является основным строковым контейнером для фразового контента,
        который, по существу, ничего не представляет. Он может использоваться для группировки элементов
        в целях стилизации (использование атрибутов class или id) или потому, что они имеет общие значения атрибутов,
        например lang. Он должен быть использован только когда нет другого подходящего по семантике элемента. <span>
        очень похож на элемент <div>, но <div> является блочным элементом, в то время как <span> является строчным.`
      },
      input: {
        name: 'input',
        nameHTML: '<input>',
        elementHTML: '<input/>',
        description: `Тег <input> позволяет создавать интерактивные
        элементы на сайте — поле для ввода текста, кнопка, ползунок, переключатель и другие.
        <label for="name">Введите название (от 4 до 8 символов):</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10">
        https://doka.guide/html/input/
        `
      },
      datalist: {
        name: 'datalist',
        nameHTML: '<datalist>',
        elementHTML: '<datalist/>',
        description: `Элемент <datalist> — это источник предложений, то есть такой элемент,
        который содержит предопределённые варианты выбора для пользователя.
        В основном за варианты выбора опций выступают элементы <option>.
        У тега по умолчанию есть роль listbox.
        https://doka.guide/html/datalist/
        `
      },
    };
    this.messages = {
      notInformationTag: 'Информации об этом теге на данный момент нет.'
    }
    this.appendDatalistToHTML();
    this.setEventHandlers();
  },

  appendDatalistToHTML() {
    for (let tag of Object.keys(this.tags)) {
      let optionEl = document.createElement('option');
      optionEl.value = tag;
      this.datalistEl.appendChild(optionEl);
    }
  },

  setEventHandlers() {
    this.tagsSearchingEl.addEventListener('click', e => this.handlerClickOntagsSearchingEl(e));
    document.addEventListener('keydown', e => this.handlerKeydown(e));
  },

  handlerClickOntagsSearchingEl(e) {
    let targetClick = e.target;
    if (targetClick.tagName === 'BUTTON') {
      this.outputInfoTag();
    }
  },

  outputInfoTag() {
    let tagName = this.findEl.value;
    if (tagName && this.tags[tagName]) {
      this.monitorEl.textContent = this.tags[tagName].description;
    } else {
      this.monitorEl.textContent = this.messages['notInformationTag']
    }
  },

  handlerKeydown(e) {
    if (e.code === 'Enter') {
      this.outputInfoTag();
    }
  }

};

window.onload = () => tagsSearching.init();

