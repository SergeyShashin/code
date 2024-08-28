"use strict";


const createLinkFromTextContent = (idEl, text, color) => {
  let elHTML = document.getElementById(idEl);

  text.map(element => {
    let contentHTML = elHTML.outerHTML;
    let rgxp = new RegExp(`${element}`);
    
    if (rgxp.test(contentHTML)) {
      elHTML.innerHTML = '';
      contentHTML = contentHTML.replace(rgxp, `<a href="#">${element}</a>`);
      elHTML.innerHTML = contentHTML;
    }

  });

};

window.onload = () => createLinkFromTextContent('content', ['может быть сделано', 'Лучше'], 'blue');

