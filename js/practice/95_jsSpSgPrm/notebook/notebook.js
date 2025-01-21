/**
 * №2
 * источник https://code.mu/ru/javascript/book/supreme/storage/practicum/
 * Сделайте блокнот, в котором можно будет создавать записи. Пусть он представляет собой textarea для ввода текста.
 * Слева от поля ввода должны размещаться ссылки на сохраненные записи.
 * По нажатию на ссылку запись должна открываться в редакторе для просмотра и редактирования текста.
 */

const notebook = {
  btnAddNoteEl: null,
  notes: null,
  noteNameEl: null,
  noteTextEl: null,
  noteLinksEl: null,

  run() {
    this.init();
  },

  init() {
    this.btnAddNoteEl = document.getElementById('btnAddNote');
    this.notes = {};
    this.noteNameEl = document.getElementById('noteName');
    this.noteTextEl = document.getElementById('noteText');
    this.noteLinksEl = document.getElementById('noteLinks');

    this.setEventHandlers();
  },

  setEventHandlers() {
    this.btnAddNoteEl.addEventListener('click', () => this.handlerClickBtnAddNoteEl());
  },

  handlerClickBtnAddNoteEl() {
    let noteLinkEl = this.createHTMLEl('li', 'a', this.noteNameEl.value);

    this.notes[this.noteNameEl] = { noteName: this.noteNameEl.value, noteText: this.noteTextEl.value };

    localStorage.setItem(this.noteNameEl.value, this.noteTextEl.value);

    this.noteLinksEl.appendChild(noteLinkEl);
  },

  createHTMLEl(typeElement, typeSubElement, contentSubElement) {
    let newEl = document.createElement(typeElement);
    let newSubEl = document.createElement(typeSubElement);
    newSubEl.textContent = contentSubElement;
    typeSubElement === 'a' ? newSubEl.href = '#' : '';
    newEl.appendChild(newSubEl);
    return newEl;
  }
}