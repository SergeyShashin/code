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
    this.stickersDB = JSON.parse(localStorage.getItem(this.nameStickersDBInLocalstorage));
    let quantityStickersDB = this.stickersDB ? Object.keys(this.stickersDB).length : null;

    if (quantityStickersDB) {
      let keys = Object.keys(this.stickersDB);
      let lastKey = Number(keys[keys.length - 1]);

      this.insertStickersInHTML();

      this.counterStickers = lastKey + 1;
    } else {
      this.stickersDB = {};
      this.counterStickers = 0;
    }

    this.setEventHandlers();
  },

  insertStickersInHTML() {
    for (let sticker of Object.values(this.stickersDB)) {
      let stikerEl = new StickerEl(sticker.id, sticker.text);
      this.stickersEl.appendChild(stikerEl);
    }
  },

  setEventHandlers() {
    this.stickersEl.addEventListener('click', e => this.handlerClickStikersEl(e));
    this.stickersEl.addEventListener('change', e => this.handlerChangeStikersEl(e));
  },

  handlerClickStikersEl(e) {
    let target = e.target;

    if (target.classList.contains('addSticker')) {
      let textDefault = 'Напишите что-нибудь...';
      let stiker = new StickerEl(this.counterStickers, textDefault);
      this.stickersDB[this.counterStickers] = { id: this.counterStickers, text: textDefault };

      localStorage.setItem(this.nameStickersDBInLocalstorage, JSON.stringify(this.stickersDB));
      this.stickersEl.appendChild(stiker);
      
      this.counterStickers++;
    }

    if (target.classList.contains('removeSticker')) {
      let stiker = target.parentElement.parentElement;
      let idStiker = Number(stiker.id);

      delete this.stickersDB[idStiker];

      localStorage.setItem(this.nameStickersDBInLocalstorage, JSON.stringify(this.stickersDB));
      stiker.remove();
    }
  },

  handlerChangeStikersEl(e) {
    let target = e.target;
    let targetId = Number(target.parentElement.id);
    this.stickersDB[targetId] = { id: targetId, text: target.value };

    localStorage.setItem(this.nameStickersDBInLocalstorage, JSON.stringify(this.stickersDB));
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
