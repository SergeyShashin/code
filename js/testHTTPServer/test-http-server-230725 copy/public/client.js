alert('welcome');

// let divEl = document.querySelector('div');

// document.body.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     fetch(`/${e.target.textContent}.html`).then(response => {
//       (response.text()).then(response => divEl.innerHTML = response);
//     });
//   }

// })

// let divEl = document.querySelector('div');
// let counterPages = 0;

// document.body.addEventListener('click', e => {
//   let pages = ['ajax', 'ajax1', 'ajax2', 'ajax3', 'ajax4', 'ajax5'];
//   let extension = 'html';
//   if (e.target.tagName === 'BUTTON') {
//     console.log(counterPages);
//     fetch(`/${pages[counterPages]}.${extension}`).then(response => {
//       response.status === 200
//         ? (response.text()).then(response => { divEl.innerHTML = response; counterPages = counterPages === pages.length - 1 ? 0 : counterPages + 1 })
//         : console.log('File or link, or code needs to be improved.');
//     });
//   }

// });

// let divEl = document.querySelector('div');
// let counterPages = 0;

// document.body.addEventListener('click', e => {
//   let pages = ['ajax', 'ajax1', 'ajax2', 'ajax3', 'ajax4', 'ajax5'];
//   let extension = 'html';
//   if (e.target.tagName === 'BUTTON') {
//     console.log(counterPages);
//     fetch(`/${pages[counterPages]}.${extension}`).then(response => {
//       response.ok
//         ? (response.text()).then(response => { divEl.innerHTML = response; counterPages = counterPages === pages.length - 1 ? 0 : counterPages + 1 })
//         : console.log('File or link, or code needs to be improved.');
//     });
//   }

// });


// let divEl = document.querySelector('div');
// let counterPages = 0;

// document.body.addEventListener('click', e => {
//   let pages = ['ajax', 'ajax1', 'ajax2', 'ajax3', 'ajax4', 'ajax5'];
//   let extension = 'html';
//   if (e.target.tagName === 'BUTTON') {
//     fetch(`/${pages[counterPages]}.${extension}`).then(response => {

//       console.log(response.headers.get('Content-Length'));

//       if (response.ok) {
//         (response.text()).then(response => { divEl.innerHTML = response; counterPages = counterPages === pages.length - 1 ? 0 : counterPages + 1 })
//       } else {
//         throw new Error('404 или 500')
//       }
//     }).catch(error => alert(error));
//   }

// });

// fetch('/data.json').then(response => response.json()).then(response => {
//   // let data = JSON.parse(response);

//   for (let el of Object.values(response)) {
//     let liEl = document.createElement('li');
//     liEl.textContent = el;
//     document.body.appendChild(liEl);
//   }
// })


// document.querySelector('button').addEventListener('click', function () {
//   let promise = fetch('/handler/?num=3').then(response => response.text()).then(response => alert(response));
// });

// document.getElementById('btnOutputSum8+80').addEventListener('click', (e) => fetch('/handlerBtnOutputSum8+80/?num1=8&num2=80').then(response => response.text()).then(response =>

//   document.getElementById('monitor').textContent = response
// ));


// document.getElementById('btnGetElArr').addEventListener('click', (e) => fetch('/getElArr/?num=8').then(response => response.text()).then(response =>

//   document.getElementById('monitor').textContent = response
// ));


// document.getElementById('btnGetSum8+80+800').addEventListener('click', (e) => fetch('/GetSum8+80+800/', {
//   method: 'post',
//   body: '?n1=8&n2=80&n3=800',
//   headers: { 'Content-type': 'application/x-www-form-urlencoded' }
// }).then(response => response.text()).then(response =>
//   document.getElementById('monitor').textContent = response
// ));


// document.getElementById('btnGetSum').addEventListener('click', (e) => {
//   let inputsEl = document.querySelectorAll('input');
//   let values = [];

//   for (let input of inputsEl) {
//     values.push(Number(input.value));
//   }

//   let searchParams = new URLSearchParams();
//   values.map((val, idx) => searchParams.set(`num${idx}`, val));

//   fetch('/getSum/', {
//     method: 'post',
//     body: searchParams,
//     // headers: { 'Content-type': 'application/x-www-form-urlencoded' }
//   }).then(response => response.text()).then(response =>
//     document.getElementById('monitor').textContent = response
//   )
// });

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// };

// let formData = new FormData();
// Object.values(obj).map((el, idx) => formData.set(`num${idx}`, el));

// fetch('/sendFormData/', {
//   method: 'post',
//   body: formData
// })


// document.getElementById('getAverage').addEventListener('submit', e => {
//   let formData = new FormData(e.target);

//   fetch('/getAverage/', {
//     method: 'POST',
//     body: formData
//   }).then(response => response.text()).then(response => alert(response));

// });

document.getElementById('btnSendFrom3001').addEventListener('click', e =>
  fetch('http://localhost:3000/getSumFromJson/', {
    method: 'POST',
    body: JSON.stringify('Привет с 3001'),
    headers: { 'Content-type': 'application/json' }
  }).then(response => response.text()).then(response => alert(response))
)