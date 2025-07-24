export default {
  '/welcome/': () => 'Welcome World!',
  '/page1/': () => 'Welcome World! From page1.',
  '/page2/': () => 'Welcome World! From page2.',
  '/page3/': () => 'Welcome World! From page3.',
  '/page4/': () => {
    let arr = [1, 2, 3, 4, 5];
    let div = '<div>';

    for (let el of arr) {
      div += `<p>${el}<p/>`
    }

    div += '<div/>'

    return div
  },
  '/getContentType]': (data, resp) => {
    resp.setHeader('Content-Type', 'text/plane');
    return [1, 2, 3]
  },
  '/handlerForm/': (data) => {
    console.log(data);
    return 'form data receivd.'
  }
}