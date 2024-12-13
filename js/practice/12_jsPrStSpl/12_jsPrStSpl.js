/**
Сейчас мы научимся делать спойлеры. Под спойлерами я понимаю блоки, которые можно развернуть, либо свернуть с помощью специальной ссылки.

В следующем примере кода абзац с классом spoiler является спойлером, а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер:
 <p>
  абзац с текстом
</p>
<p>
  абзац с текстом
  <a href="" class="toggle">развернуть спойлер 1</a>
</p>
<p class="spoiler">
  скрытый спойлер 1
</p>
<p>
  абзац с текстом
</p>
<p>
  абзац с текстом
  <a href="" class="toggle">развернуть спойлер 2</a>
</p>
<p class="spoiler">
  скрытый спойлер 2
</p>
<p>
  абзац с текстом
</p>
Очевидно, что ссылку для разворачивания и сам спойлер надо как-то связать. Можно придумать различные варианты, но в данном случае я предлагаю сделать по местоположению: скажем, что ссылка с классом toggle открывает или закрывает элемент с классом spoiler, расположенный сразу под родителем этой ссылки.

Пусть спойлер по умолчанию будет скрыт, а если мы хотим его показать - будем давать ему класс active. Напишем соответствующий CSS код:
.spoiler:not(.active) {
  display: none;
}
 
 */

let spoiler = {
  spoilerEl: null,
  spoilersEls: null,

  init() {
    this.spoilerEl = document.getElementById('spoiler');
    this.spoilersEls = document.querySelectorAll('.spoiler');
    this.setEventHandlers();
  },

  setEventHandlers() {
    this.spoilerEl.addEventListener('click', (e) => this.handlerClickSploilerEl(e));
  },

  handlerClickSploilerEl(e) {
    if (e.target.classList.contains('toggle')) {
      let text = e.target.textContent.split(' ');

      for (let el of this.spoilersEls) {
        console.log(el);
        if (el.textContent.split(' ')[2] == text[2]) {
          console.log(el.textContent);
          el.classList.add('show');
          console.log(el.className);
          return
        }
      }
    }
  }
};

window.onload = spoiler.init();

