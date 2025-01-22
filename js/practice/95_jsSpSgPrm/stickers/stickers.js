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

  run() {
    this.stickersEl = document.getElementById('stickers');
    this.stickersDB = JSON.parse(localStorage.getItem('stickers'));
    this.counterStickers = 0;
    this.insertStickersInHTML();
  },

  insertStickersInHTML() {
    for (let sticker of this.stickersDB) {
      let stikerEl = new StickerEl(sticker.id, sticker.text);
      this.stickersEl.appendChild(stikerEl);
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
