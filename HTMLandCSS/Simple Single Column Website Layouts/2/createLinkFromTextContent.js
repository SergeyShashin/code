"use strict";

const createLinkFromTextContent = (idEl, text) => {
  let elHTML = document.getElementById(idEl);
  let contentHTML = elHTML.innerHTML;

  text.map(element => {
    let rgxp = new RegExp(`${element}`);
    
    if (rgxp.test(contentHTML)) {
      contentHTML = contentHTML.replace(rgxp, `<a href="#">${element}</a>`);
    }

    elHTML.innerHTML = contentHTML;

  });

};


