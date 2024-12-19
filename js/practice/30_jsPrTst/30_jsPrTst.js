'use strict';

let test = {
  testEl: null,
  questions: null,
  quantityCorrectAnswerUser: null,

  init() {
    this.testEl = document.getElementById('test');
    this.questions = {
      0: {
        numberQuestion: 0,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 0,
        resultAnswer: null
      },
      1: {
        numberQuestion: 1,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 1,
        resultAnswer: null
      },
      2: {
        numberQuestion: 2,
        question: 'Какой номер вопроса?',
        answerUser: null,
        correctAnswer: 2,
        resultAnswer: null
      },
    };
    this.quantityCorrectAnswerUser = 0;

  }

};

window.onload = test.init();