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
  '/handlerForm/': ({ get, post }) => {
    // console.log(get);
    // console.log(post.length);

    // return (Object.values(post).reduce((acc, el) => acc + Number(el), 0)) / Object.values(post).length

    // let { surname, name, patronymic } = post;
    // return `Welcome, ${surname} ${name} ${patronymic})`

    // let date = new Date(post.date);

    // return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

    let login = 'login';
    let password = 'password';

    return post.login === login && post.password === password
  }
}