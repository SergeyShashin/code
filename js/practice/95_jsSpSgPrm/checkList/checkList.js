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
  btnAddNewCase.textContent = '+';
  btnAddNewCase.id = 'btnAddNewCase';
  let inputElForEnterNewCase = document.createElement('input');
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
  caseEl.dataset.state = state;
  caseEl.id = this.counterCase;

  let tdElForBtnStartOrDoneEl = document.createElement('td');
  let tdElForBtnDelCaseEl = document.createElement('td');
  let btnStartOrDoneEl = document.createElement('button');
  btnStartOrDoneEl.classList.add('btnStartOrDone');
  let btnDelCaseEl = document.createElement('button');
  btnDelCaseEl.classList.add('btnDelCaseEl');
  btnDelCaseEl.textContent = 'X';
  btnStartOrDoneEl.textContent = state === 'done' ? 'V' : '';

  let tdElForInputTextEl = document.createElement('td');
  let inputTextEl = document.createElement('input');
  inputTextEl.value = text;

  tdElForBtnDelCaseEl.appendChild(btnDelCaseEl);
  tdElForBtnStartOrDoneEl.appendChild(btnStartOrDoneEl);
  tdElForInputTextEl.appendChild(inputTextEl);

  caseEl.appendChild(tdElForBtnStartOrDoneEl);
  caseEl.appendChild(tdElForBtnDelCaseEl);
  caseEl.appendChild(tdElForInputTextEl);

  this.tableEl.appendChild(caseEl);

};