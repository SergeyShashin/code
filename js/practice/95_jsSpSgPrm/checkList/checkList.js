/**
 * №1
 * Сделайте чеклист, представляющий собой список дел. Дела можно добавлять, изменять, удалять и помечать сделанными.
 */

function CheckList(nameId) {
  this.nameId = nameId;
  this.counterCase = 0;
}

CheckList.prototype.render = function () {
  this.tableEl = document.createElement('table');
  this.tableEl.id = this.nameId;
  return this.tableEl
}

CheckList.prototype.addNewCase = function (text) {
  this.counterCase++;

  let caseEl = document.createElement('tr');
  caseEl.dataset.state = 'start';
  caseEl.id = this.counterCase;

  let tdElForBtnStartOrDoneEl = document.createElement('td');
  let tdElForBtnDelCaseEl = document.createElement('td');
  let btnStartOrDoneEl = document.createElement('button');
  let btnDelCaseEl = document.createElement('button');
  btnDelCaseEl.textContent = 'X';


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