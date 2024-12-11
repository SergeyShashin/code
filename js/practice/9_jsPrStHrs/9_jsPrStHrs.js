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
*/

let horoscope = {
  horoscopeEl: null,
  inputEl: null,
  btnFindEl: null,
  monitor: null,
  infoSignsZodiac: null,

  init() {
    this.horoscopeEl = document.getElementById('horoscope');
    this.inputEl = document.getElementById('input');
    this.btnFindEl = document.getElementById('find');
    this.monitorEl = document.getElementById('monitor');
    this.setCurrentDateInInputEl();
    this.infoSignsZodiac = {
      'сapricorn': {
        today: 'Сегодня козерога ждёт много приятных событий.',
        tomorrow: 'Завтра козерога ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра козерога ждут события, которые обязательно произойдут послезавтра.'
      },
      'aquarius': {
        today: 'Сегодня водолея ждёт много приятных событий.',
        tomorrow: 'Завтра водолея ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра водолея ждут события, которые обязательно произойдут послезавтра.'
      },
      'pisces': {
        today: 'Сегодня рыб ждёт много приятных событий.',
        tomorrow: 'Завтра рыб ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра рыб ждут события, которые обязательно произойдут послезавтра.'
      },
      'aries': {
        today: 'Сегодня овнов ждёт много приятных событий.',
        tomorrow: 'Завтра овнов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра овнов ждут события, которые обязательно произойдут послезавтра.'
      },
      'taurus': {
        today: 'Сегодня тельцов ждёт много приятных событий.',
        tomorrow: 'Завтра тельцов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра тельцов ждут события, которые обязательно произойдут послезавтра.'
      },
      'gemini': {
        today: 'Сегодня близнецов ждёт много приятных событий.',
        tomorrow: 'Завтра близнецов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра близнецов ждут события, которые обязательно произойдут послезавтра.'
      },
      'сancer': {
        today: 'Сегодня раков ждёт много приятных событий.',
        tomorrow: 'Завтра раков ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра раков ждут события, которые обязательно произойдут послезавтра.'
      },
      'leo': {
        today: 'Сегодня львов ждёт много приятных событий.',
        tomorrow: 'Завтра львов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра львов ждут события, которые обязательно произойдут послезавтра.'
      },
      'virgo': {
        today: 'Сегодня дев ждёт много приятных событий.',
        tomorrow: 'Завтра дев ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра дев ждут события, которые обязательно произойдут послезавтра.'
      },
      'libra': {
        today: 'Сегодня весов ждёт много приятных событий.',
        tomorrow: 'Завтра весов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра весов ждут события, которые обязательно произойдут послезавтра.'
      },
      'scorpio': {
        today: 'Сегодня скорпионов ждёт много приятных событий.',
        tomorrow: 'Завтра скорпионов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра скорпионов ждут события, которые обязательно произойдут послезавтра.'
      },
      'scorpio': {
        today: 'Сегодня скорпионов ждёт много приятных событий.',
        tomorrow: 'Завтра скорпионов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра скорпионов ждут события, которые обязательно произойдут послезавтра.'
      },
      'sagittarius': {
        today: 'Сегодня стрельцов ждёт много приятных событий.',
        tomorrow: 'Завтра стрельцов ждёт еще больше приятных событий, чем вчера.',
        afterDayTomorrow: 'Послезавтра стрельцов ждут события, которые обязательно произойдут послезавтра.'
      },
    };
    this.setEventHandlers();
  },

  setCurrentDateInInputEl() {
    let today = new Date();
    this.inputEl.value = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  },

  setEventHandlers() {
    this.btnFindEl.addEventListener('click', () => this.showInfoZodiac());
  },

  showInfoZodiac() {
    let signZodiac = this.defineSignZodiac(this.inputEl.value);
    let todayOrTomorowOrAfterTomorow = this.defineTodayOrTomorowOrAfterTomorow();
    console.log(signZodiac);
    console.log(todayOrTomorowOrAfterTomorow);
  },

  defineSignZodiac(date) {

    let [year, month, day] = date.split('-');
    month = Number(month);
    day = Number(day);

    switch (month) {
      case 1:
        return day < 21 ? 'сapricorn' : 'aquarius';
      case 2:
        return day < 20 ? 'aquarius' : 'pisces';
      case 3:
        return day < 21 ? 'pisces' : 'aries';
      case 4:
        return day < 21 ? 'aries' : 'taurus';
      case 5:
        return day < 21 ? 'taurus' : 'gemini';
      case 6:
        return day < 22 ? 'gemini' : 'сancer';
      case 7:
        return day < 23 ? 'сancer' : 'leo';
      case 8:
        return day < 24 ? 'leo' : 'virgo';
      case 9:
        return day < 24 ? 'virgo' : 'libra';
      case 10:
        return day < 24 ? 'libra' : 'scorpio';
      case 11:
        return day < 23 ? 'scorpio' : 'sagittarius';
      case 12:
        return day < 22 ? 'sagittarius' : 'сapricorn';
    }
  },

  defineTodayOrTomorowOrAfterTomorow() {
    if (document.getElementById('today').checked) {
      return 'today'
    } else if (document.getElementById('tomorrow').checked) {
      return 'tomorrow'
    } else if (document.getElementById('afterDayTomorrow').checked) {
      return 'afterDayTomorrow'
    }
  }

};

window.onload = horoscope.init();




