'use strict';

let test = {
  testEl: null,
  questions: null,
  quantityCorrectAnswerUser: null,
  msgs: null,

  init() {
    this.testEl = document.getElementById('test');
    this.questions = {
      0: {
        questionNumber: 0,
        questionText: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 0,
        resultAnswer: null
      },
      1: {
        questionNumber: 1,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 1,
        resultAnswer: null
      },
      2: {
        questionNumber: 2,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 2,
        resultAnswer: null
      },
    };
    this.msgs = {
      notAnswer: 'Можно ответить.',
      correctAnswer: 'Ответ совпадает с верным:)',
      answerUser: 'Дан индивидуальный ответ:)'
    };
    this.quantityCorrectAnswerUser = 0;
    this.addQuestionsHTML();
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
  }

};

window.onload = test.init();