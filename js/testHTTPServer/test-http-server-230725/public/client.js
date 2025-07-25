alert('welcome');

let divEl = document.querySelector('div');

document.body.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    fetch(`/${e.target.textContent}.html`).then(response => {
      (response.text()).then(response => divEl.innerHTML = response);
    });
  }

})