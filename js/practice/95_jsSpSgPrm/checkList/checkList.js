/**
 * Практика на localStorage в JavaScript
 * №1
 * источник задачи https://code.mu/ru/javascript/book/supreme/storage/practicum/
 * Сделайте чеклист, представляющий собой список дел. Дела можно добавлять, изменять, удалять и помечать сделанными.
 */

function CheckList(nameId) {
  this.nameId = nameId;
  this.counterCase = 0;
}

CheckList.prototype.render = function () {
  this.tableEl = document.createElement('table');
  this.tableEl.id = this.nameId;
  
  let trEl = document.createElement('tr');
  let tdForBtnAddNewCase = document.createElement('td');
  let tdEl = document.createElement('td');
  let btnAddNewCase = document.createElement('button');
  let inputElForEnterNewCase = document.createElement('input');
  
  btnAddNewCase.textContent = '+';
  btnAddNewCase.id = 'btnAddNewCase';
  inputElForEnterNewCase.id = 'inputElForEnterNewCase';
  tdForBtnAddNewCase.appendChild(btnAddNewCase);
  
  trEl.appendChild(tdForBtnAddNewCase);
  trEl.appendChild(tdEl);
  trEl.appendChild(inputElForEnterNewCase);
  
  this.tableEl.appendChild(trEl);
  
  return this.tableEl
}

CheckList.prototype.addNewCase = function (state, text) {
  this.counterCase++;

  let caseEl = document.createElement('tr');
  let tdElForBtnStartOrDoneEl = document.createElement('td');
  let tdElForBtnDelCaseEl = document.createElement('td');
  let btnStartOrDoneEl = document.createElement('button');
  let btnDelCaseEl = document.createElement('button');
  let tdElForInputTextEl = document.createElement('td');
  let inputTextEl = document.createElement('input');

  caseEl.dataset.state = state;
  caseEl.id = this.counterCase;

  btnStartOrDoneEl.classList.add('btnStartOrDone');
  btnDelCaseEl.classList.add('btnDelCaseEl');
  btnDelCaseEl.textContent = 'X';
  btnStartOrDoneEl.textContent = state === 'done' ? 'V' : '';

  inputTextEl.value = text;

  tdElForBtnDelCaseEl.appendChild(btnDelCaseEl);
  tdElForBtnStartOrDoneEl.appendChild(btnStartOrDoneEl);
  tdElForInputTextEl.appendChild(inputTextEl);

  caseEl.appendChild(tdElForBtnStartOrDoneEl);
  caseEl.appendChild(tdElForBtnDelCaseEl);
  caseEl.appendChild(tdElForInputTextEl);

  this.tableEl.appendChild(caseEl);
};