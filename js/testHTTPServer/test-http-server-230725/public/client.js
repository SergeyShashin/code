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

fetch('/data.json').then(response => response.json()).then(response => {
  // let data = JSON.parse(response);

  for (let el of Object.values(response)) {
    let liEl = document.createElement('li');
    liEl.textContent = el;
    document.body.appendChild(liEl);
  }
})