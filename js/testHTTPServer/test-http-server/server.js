export default {
  '/test/': function () {
    let num1 = 1;
    let num2 = 2;

    return num1 + num2;
  },
  '/page1/': function () {

    return 'page1';
  },
  '/page2/': function () {

    return 'page2';
  },
  '/page3/': function () {

    return 'page3';
  },
  '/task1/': function () {
    let arr = [1, 2, 3, 4, 5];
    let section = '<section>';
    for (let content of arr) {
      section += `<p>${content}<p/>`
    }
    section += '</section>';
    return section
  },
  '/handler/': function (data, resp) {
    resp.setHeader('Content-type', 'application/json');
    return '[1, 2, 3]';
  },
  '/handler2/': function (data, resp) {
    resp.setHeader('Content-type', 'text/plain');
    return '[1, 2, 3]';
  }
}