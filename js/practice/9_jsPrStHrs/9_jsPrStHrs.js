/**
 * Гороскоп на JavaScript
 * источник задачи https://code.mu/ru/javascript/book/practice/horoscope/
 * Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения.
 * Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
 * Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра. 
 * Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день.
 * Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.
 */

/**
Козерог (21 декабря - 20 января)
Водолей (21 января - 19 февраля)
Рыбы (20 февраля - 20 марта)
Овен (21 марта – 20 апреля)
Телец (21 апреля – 20 мая)
Близнецы (21 мая – 21 июня)
Рак (22 июня – 22 июля)
Лев (23 июля – 23 августа)
Дева (24 августа – 23 сентября)
Весы (24 сентября – 23 октября)
Скорпион (24 октября – 22 ноября)
Стрелец (23 ноября – 22 декабря)

1  20 21
2  19 20
3  20 21
4  20 21
5  20 21
6  21 22
7  22 23
8  23 24
9  23 24
10 23 24
11 22 23
12 22 21
*/

let horoscope = {
  horoscopeEl: null,
  inputEl: null,
  btnFindEl: null,
  monitor: null,

  init() {
    this.horoscopeEl = document.getElementById('horoscope');
    this.inputEl = document.getElementById('input');
    this.btnFindEl = document.getElementById('find');
    this.monitorEl = document.getElementById('monitor');
    this.setCurrentDateInInputEl();
  },

  setCurrentDateInInputEl() {
    let today = new Date();
    // let tomorow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    // let afterDayTomorow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2);
    // console.log(tomorow);
    // console.log(afterDayTomorow);
    this.inputEl.value = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  },
};

window.onload = horoscope.init();




