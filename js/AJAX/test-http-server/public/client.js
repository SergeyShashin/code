// alert('test');
let counterPages = 1;

let monitorEl = document.getElementById('monitor');
let btnOutputEl = document.getElementById('btnOutput');
let btnAddPage1El = document.getElementById('btnAddPage1');
let btnAddPage2El = document.getElementById('btnAddPage2');
let btnAddPage3El = document.getElementById('btnAddPage3');

let btnAddPageEl = document.getElementById('btnAddPage');

btnOutputEl.addEventListener('click', () => loadPage('/ajax.html'));

btnAddPage1El.addEventListener('click', () => loadPage('/page1.html'))
btnAddPage2El.addEventListener('click', () => loadPage('/page2.html'))
btnAddPage3El.addEventListener('click', () => loadPage('/page3.html'))

btnAddPageEl.addEventListener('click', loadPages);

function loadPage(pathPage) {
  fetch(pathPage).then(responce => {
    if (responce.ok) {
      return responce.text()
    } else {
      throw new Error('Error.');
    }
  }).then(text => monitorEl.innerHTML += text).catch(error => console.log(error));
  // fetch(pathPage).then(responce => responce.ok ? console.log(responce.status) : console.log(responce.status));
}

function loadPages() {
  loadPage(`/page${counterPages}.html`);
  counterPages++;
  if (counterPages === 6) {
    btnAddPageEl.removeEventListener('click', loadPages);
  }
  // counterPages = counterPages === 5 ? 1 : counterPages + 1;
}