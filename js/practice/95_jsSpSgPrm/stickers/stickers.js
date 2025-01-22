/**
 * источник https://code.mu/ru/javascript/book/supreme/storage/practicum/
 * Сделайте стикеры для оставления коротких записей.
 * Стикеры должны представлять собой блоки текста, расположенные на странице в виде плиточки.
 * Пользователь может создавать новые стикеры через textarea, а также редактировать и удалять их.
 * Каждый новый стикер должен добавляться в конец плиточки.
 */

const stickers = {
  stickersEl: null,
  stickersDB: null,
  counterStickers: null,
  nameStickersDBInLocalstorage: null,

  run() {
    this.stickersEl = document.getElementById('stickers');
    this.nameStickersDBInLocalstorage = 'stickers';
    this.counterStickers = 0;
    this.stickersDB = JSON.parse(localStorage.getItem(this.nameStickersDBInLocalstorage));
    this.stickersDB ? this.insertStickersInHTML() : this.stickersDB = [];
    this.setEventHandlers();
  },

  insertStickersInHTML() {
    for (let sticker of this.stickersDB) {
      let stikerEl = new StickerEl(sticker.id, sticker.text);
      this.stickersEl.appendChild(stikerEl);
    }
  },

  setEventHandlers() {
    this.stickersEl.addEventListener('click', e => this.handlerClickStikersEl(e))
  },

  handlerClickStikersEl(e) {
    let target = e.target;

    if (target.classList.contains('addSticker')) {
      let textDefault = 'Напишите что-нибудь...';
      let stiker = new StickerEl(this.counterStickers, textDefault);
      this.stickersDB.push({ id: this.counterStickers, text: textDefault });
      localStorage.setItem(this.nameStickersDBInLocalstorage, JSON.stringify(this.stickersDB));
      this.stickersEl.appendChild(stiker);
      this.counterStickers++;
    }

    if (target.classList.contains('removeSticker')) {
      let stiker = target.parentElement.parentElement;
      let idStiker = Number(stiker.id);
      this.stickersDB = this.stickersDB.slice(idStiker);
      localStorage.setItem(this.nameStickersDBInLocalstorage, JSON.stringify(this.stickersDB));
      stiker.remove();
    }
  }
}

function StickerEl(idStiker, textStiker) {
  let article = document.createElement('article');
  let headerEl = document.createElement('header');
  let btnRemoveEl = document.createElement('button');
  let textareaEl = document.createElement('textarea');

  article.id = idStiker;
  article.classList.add('sticker');

  headerEl.appendChild(btnRemoveEl);

  btnRemoveEl.textContent = 'X';
  btnRemoveEl.classList.add('removeSticker');

  textareaEl.value = textStiker;
  textareaEl.classList.add('stickerText');

  article.appendChild(headerEl);
  article.appendChild(textareaEl);

  return article
}
