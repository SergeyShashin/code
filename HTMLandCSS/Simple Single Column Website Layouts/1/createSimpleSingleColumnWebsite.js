/**
 * Создаёт простой одноколоночный сайт
 * @param {string} idNameBlock Идентификатор HTML элемента в который будет вставляться сгененрированный сайт.
 * @param {object} menu Меню сайта 
 * @param {object} content Содержимое сайта
 */
const createSimpleSingleColumnWebsite = (idNameBlock, menu, content) => {
  const createElement = (tag) => document.createElement(tag);
  let wrapHTML = createElement('div');
  wrapHTML.id = idNameBlock;
  document.body.appendChild(wrapHTML);

  if (menu) {
    let menuHTML = createElement('div');
    menuHTML.id = menu.id;
    wrapHTML.appendChild(menuHTML);

    menu.labels.forEach((label, idx) => {

      let aHTML = createElement('a');
      aHTML.textContent = label;
      aHTML.href = menu.links[idx];
      menuHTML.appendChild(aHTML);
    });
  }

  if (content) {
    let contentHTML = createElement('div');
    contentHTML.id = content.id;
    wrapHTML.appendChild(contentHTML);

    content.content.forEach(el => {
      let block = createElement('div');
      let h2HTML = createElement('h2');
      let pHTML = createElement('p');

      contentHTML.appendChild(block);
      h2HTML.textContent = el.h2;
      pHTML.id = el.id;
      pHTML.textContent = el.text;
      block.appendChild(h2HTML);
      block.appendChild(pHTML);
    });

  }

}