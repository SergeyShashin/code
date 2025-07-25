alert('welcome');

// let divEl = document.querySelector('div');

// document.body.addEventListener('click', e => {
//   if (e.target.tagName === 'BUTTON') {
//     fetch(`/${e.target.textContent}.html`).then(response => {
//       (response.text()).then(response => divEl.innerHTML = response);
//     });
//   }

// })

let divEl = document.querySelector('div');
let counterPages = 0;

document.body.addEventListener('click', e => {
  let pages = ['ajax', 'ajax1', 'ajax2', 'ajax3', 'ajax4', 'ajax5'];
  let extension = 'html';
  if (e.target.tagName === 'BUTTON') {
    console.log(counterPages);
    fetch(`/${pages[counterPages]}.${extension}`).then(response => {
      (response.text()).then(response => { divEl.innerHTML = response; counterPages = counterPages === pages.length-1 ? 0 : counterPages + 1 });
    });
  }

})