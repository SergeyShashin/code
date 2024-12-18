'use strict';

/**
 * Источник задачи https://code.mu/ru/javascript/book/practice/checklist/task-formulation/
 * Реализуем чеклист. Чеклистом называется программа, которая позволяет сделать список планируемых дел, 
 * а затем по мере выполнения этим дел отмечать эти дела сделанными. 
 * Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными. 
 * Вот образец того, что у нас должно получится (для ввода нового дела введите текст в инпут и нажмите Enter, 
 * для редактирования выполните двойной клик по тексту дела):
 */


let checklist = {
  checkListEl: null,
  enterEl: null,
  monitorEl: null,
  todoListEls: null,
  complitedTasksEls: null,
  deletedTasksEls: null,
  counterforIdTasks: null,

  init() {
    this.checkListEl = document.getElementById('checkList');
    this.enterEl = document.getElementById('enter');
    this.monitorEl = document.getElementById('monitor');
    this.todoListEls = [];
    this.complitedTasksEls = [];
    this.deletedTasksEls = [];
    this.counterForIdTasks = 0;
    this.setEventHandlers();
  },

  setEventHandlers() {
    this.enterEl.addEventListener('change', e => this.addTaskInHTML(e));
    this.monitorEl.addEventListener('click', e => this.handleClickMonitorEl(e));
  },

  addTaskInHTML(e) {
    let taskText = e.target.value;
    this.counterforIdTasks++;
    let taskEl = this.createLiEl(taskText);
    this.monitorEl.appendChild(taskEl);
    this.todoListEls.push(taskEl);
    this.clearInputValue(e.target);
  },

  createLiEl(taskText) {
    let liEl = document.createElement('li');
    liEl.dataset.numberTask = this.counterforIdTasks - 1;
    let textInputEl = document.createElement('input');
    textInputEl.type = 'text';
    textInputEl.value = taskText;
    textInputEl.classList.add('text');
    let checkInputEl = document.createElement('input');
    checkInputEl.type = 'button';
    checkInputEl.value = '  ';
    checkInputEl.classList.add('check');
    let deleteInputEl = document.createElement('input');
    deleteInputEl.type = 'button';
    deleteInputEl.value = 'x';
    deleteInputEl.classList.add('delete');
    liEl.appendChild(textInputEl);
    liEl.appendChild(checkInputEl);
    liEl.appendChild(deleteInputEl);
    return liEl;
  },

  clearInputValue(input) {
    input.value = '';
  },

  handleClickMonitorEl(e) {
    let target = e.target;

    if (target.classList.contains('check')) {
      this.setTaskCompleted(Number(target.parentElement.dataset.numberTask));
    }

    if (target.classList.contains('delete')) {
      this.deleteTask(Number(target.parentElement.dataset.numberTask));
    }
  },

  setTaskCompleted(numberTask) {
    let taskEl = this.todoListEls[numberTask];
    this.complitedTasksEls.push(taskEl);
    taskEl.querySelector('.check').value = 'V';
    taskEl.querySelector('.check').style.color = 'lightseagreen';
    taskEl.querySelector('.text').style.color = 'lightseagreen';
    taskEl.querySelector('.text').disabled = true;
  },

  deleteTask(numberTask) {
    let taskEl = this.todoListEls[numberTask];
    this.deletedTasksEls.push(taskEl);
    taskEl.remove();
  }

};

window.onload = checklist.init();