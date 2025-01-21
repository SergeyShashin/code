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
    this.noteNameEl = document.getElementById('noteName');
    this.noteTextEl = document.getElementById('noteText');
    this.noteLinksEl = document.getElementById('noteLinks');

    let letNotesFromLocalStorage = this.getNotesFromLocalStorage();

    if (letNotesFromLocalStorage) {
      this.notes = letNotesFromLocalStorage;
      for (let note of Object.values(this.notes)) {
        this.noteLinksEl.appendChild(this.createHTMLEl('li', 'a', note.noteName));
      }
    } else {
      this.notes = {};
    }

    this.setEventHandlers();
  },

  setEventHandlers() {
    this.btnAddNoteEl.addEventListener('click', () => this.handlerClickBtnAddNoteEl());
    this.noteLinksEl.addEventListener('click', (e) => this.handlerClickNoteLinks(e));
  },

  handlerClickBtnAddNoteEl() {

    if (this.notes[this.noteNameEl.value]) {
      this.notes[this.noteNameEl.value] = { noteName: this.noteNameEl.value, noteText: this.noteTextEl.value };
    } else {
      this.notes[this.noteNameEl.value] = { noteName: this.noteNameEl.value, noteText: this.noteTextEl.value };
      let noteLinkEl = this.createHTMLEl('li', 'a', this.noteNameEl.value);
      this.noteLinksEl.appendChild(noteLinkEl);
    }

    localStorage.setItem('notes', JSON.stringify(this.notes));

  },

  createHTMLEl(typeElement, typeSubElement, contentSubElement) {
    let newEl = document.createElement(typeElement);
    let newSubEl = document.createElement(typeSubElement);
    newSubEl.textContent = contentSubElement;
    typeSubElement === 'a' ? newSubEl.href = '#' : '';
    newEl.appendChild(newSubEl);
    return newEl;
  },

  handlerClickNoteLinks(e) {
    let target = e.target;

    if (target.tagName !== 'A') {
      return
    }

    let note = this.notes[target.textContent];

    this.noteNameEl.value = note.noteName;
    this.noteTextEl.value = note.noteText;
  },

  getNotesFromLocalStorage() {
    return JSON.parse(localStorage.getItem('notes'));
  }
}