'use strict';

/**
 * Источник https://code.mu/ru/javascript/book/practice/test/html-questions-answers/
 * В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами.
 * Начнем с самых простых вариантов и будем постепенно усложнять.
 * Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ.
 * Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
 */

let test = {
  testEl: null,
  questions: null,
  quantityCorrectAnswerUser: null,
  msgs: null,
  btnCheckEl: null,

  init() {
    this.testEl = document.getElementById('test');
    this.questions = {
      0: {
        questionNumber: 0,
        questionText: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: '0',
        resultAnswer: null
      },
      1: {
        questionNumber: 1,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: '1',
        resultAnswer: null
      },
      2: {
        questionNumber: 2,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: '2',
        resultAnswer: null
      },
    };
    this.msgs = {
      notAnswer: 'Можно ответить.',
      correctAnswer: 'Ответ совпадает с верным:)',
      answerUser: 'Дан индивидуальный ответ:)'
    };
    this.btnCheckEl = document.getElementById('btnCheck');
    this.quantityCorrectAnswerUser = 0;
    this.addQuestionsHTML();
    this.setEventHandlers();
  },

  addQuestionsHTML() {

    for (let key in this.questions) {
      let questionEl = document.createElement('article');
      let headerEl = document.createElement('header');
      let h4El = document.createElement('h4');
      let pEl = document.createElement('p');
      let inputEl = document.createElement('input');
      let preEl = document.createElement('pre');

      questionEl.id = key;

      h4El.textContent = `№ ${this.questions[key].questionNumber}`;
      pEl.textContent = this.questions[key].questionText;
      preEl.textContent = this.msgs.notAnswer;

      questionEl.classList.add('question');
      pEl.classList.add('questionText');
      inputEl.classList.add('answerUser');
      preEl.classList.add('resultAnswer');
      preEl.id = `${key}_resultAnswer`;

      this.addElHTML(this.testEl, questionEl);
      this.addElHTML(questionEl, headerEl);
      this.addElHTML(headerEl, h4El);
      this.addElHTML(questionEl, pEl);
      this.addElHTML(questionEl, inputEl);
      this.addElHTML(questionEl, preEl);

    }
  },

  addElHTML(parent, el) {
    parent.appendChild(el);
  },

  setEventHandlers() {
    this.testEl.addEventListener('change', e => this.handleChangeTestEl(e));
    this.btnCheckEl.addEventListener('click', () => this.handleClickBtnChek());
  },

  handleChangeTestEl(e) {
    let target = e.target;
    let numberQuestion = target.parentElement.id;
    let answerUser = target.value;
    let resultAnswer = this.checkAnswerUser(numberQuestion, answerUser);
    console.log(resultAnswer);
    this.setResultHtml(numberQuestion, resultAnswer);
  },

  checkAnswerUser(numberQuestion, answerUser) {
    return this.questions[numberQuestion].correctAnswer === answerUser;
  },

  setResultHtml(numberQuestion, resultAnswer) {
    let resultEl = document.getElementById(`${numberQuestion}_resultAnswer`);
    resultEl.textContent = resultAnswer ? this.msgs.correctAnswer : this.msgs.answerUser;
  },

  handleClickBtnChek() {
    let answersUser = this.testEl.querySelectorAll('.answerUser');
    console.log(answersUser);
    
    for(let question in this.questions){

    }
  }

};

window.onload = test.init();