// alert('test');
let counterPages = 1;

let monitorEl = document.getElementById('monitor');
let btnOutputEl = document.getElementById('btnOutput');
let btnAddPage1El = document.getElementById('btnAddPage1');
let btnAddPage2El = document.getElementById('btnAddPage2');
let btnAddPage3El = document.getElementById('btnAddPage3');

let btnAddPageEl = document.getElementById('btnAddPage');
let btnHandlerEl = document.getElementById('btnHandler');
let btnShowSumEl = document.getElementById('btnShowSum');
let btnShowElArrEl = document.getElementById('btnShowElArr');
let btnShowSumUsePostEl = document.getElementById('btnShowSumUsePost');

let btnShowSumFromInputsEl = document.getElementById('btnShowSumFromInputs');

btnOutputEl.addEventListener('click', () => loadPage('/ajax.html'));

btnAddPage1El.addEventListener('click', () => loadPage('/page1.html'))
btnAddPage2El.addEventListener('click', () => loadPage('/page2.html'))
btnAddPage3El.addEventListener('click', () => loadPage('/page3.html'))

btnAddPageEl.addEventListener('click', loadPages);

btnHandlerEl.addEventListener('click', () => (fetch('/handler/?num=3').then(response => response.text()).then(text => console.log(text))));

// На клиенте дан див и кнопка. По нажатию на кнопку отправьте на сервер два числа.
// Пусть сервер найдет сумму переданных чисел. Результат запишите в див.
btnShowSumEl.addEventListener('click', () => (fetch('/getSum/?n1=8&n2=888').then(response => response.text()).then(text => monitorEl.innerHTML += `<p>${text}</p>`)));

btnShowElArrEl.addEventListener('click', () => (fetch('/getElementArr/?idx=0').then(responce => responce.text()).then(text => monitorEl.innerHTML += `<p>${text}</p>`)));

// На клиенте дан див и кнопка. По нажатию на кнопку отправьте на сервер три числа методом POST. 
// Пусть сервер найдет сумму переданных чисел. Результат запишите в див.
btnShowSumUsePostEl.addEventListener('click', () => (
  fetch('/getSumUsePost/', {
    method: 'post',
    body: 'n1=8&n2=8&n3=8',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(responce => responce.text()).then(text => monitorEl.innerHTML += `<p>${text}</p>`)
));

// На клиенте дан див, кнопка и три инпута. 
// В инпуты вводятся числа. По нажатию на кнопку отправьте введенные числа на сервер. 
// Пусть сервер найдет сумму переданных чисел и вернет ее обратно. Результат запишите в див.
btnShowSumFromInputsEl.addEventListener('click', () => {
  let inputsEls = document.getElementById('sectionWithInputs').querySelectorAll('input');
  let searchParams = new URLSearchParams();
  for (let i = 0; i < inputsEls.length; i++) {
    searchParams.set(`n${i}`, inputsEls[i].value);
  }

  fetch('/getSumUsePostFromInputs/', {
    method: 'post',
    body: searchParams,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  }).then(responce => responce.text()).then(text => monitorEl.innerHTML += `<p>${text}</p>`)
});

/**
* Дан объект с данными:
*    let obj = {
*      a: 1,
*      b: 2,
*      c: 3
*    }
* C помощью цикла сформируйте из этого объекта объект formData и отправьте его на сервер методом POST.
* */
let obj = {
  a: 1,
  b: 2,
  c: 3
}
btnShowDataUsePostAndFormData.addEventListener('click', () => {
  let formData = new FormData();

  for (let key in obj) {
    formData.set(key, obj[key]);
  }

  fetch('/getDataFromPost/', {
    method: 'post',
    body: formData,
  }).then(responce => responce.text()).then(text => console.log(text));
});

fetch('/db.json').then(responce => responce.json()).then(dataJson => dataJson.users.map(user => {
  let li = document.createElement('li');
  li.textContent = user;
  monitorEl.appendChild(li);
}));

function loadPage(pathPage) {
  fetch(pathPage).then(responce => {
    if (responce.ok) {
      console.log(responce.headers.get('Content-Type'));
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