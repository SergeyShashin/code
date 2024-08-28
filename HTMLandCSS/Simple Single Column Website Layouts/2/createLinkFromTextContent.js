"use strict";

const createLinkFromTextContent = (idEl, text) => {
  let elHTML = document.getElementById(idEl);
  let contentHTML = elHTML.outerHTML;
  
  text.map(element => {
    let rgxp = new RegExp(`${element}`);
    
    if (rgxp.test(contentHTML)) {
      contentHTML = contentHTML.replace(rgxp, `<a href="#">${element}</a>`);
      console.dir(elHTML);
      console.log(contentHTML);
    }
    elHTML.innerHTML = contentHTML;

  });

};

window.onload = () => createLinkFromTextContent('content', ['может быть сделано', 'Лучше']);

