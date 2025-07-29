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

    // let login = 'login';
    // let password = 'password';

    // return post.login === login && post.password === password

    // return 'sent'

    // console.log(post.email);

    // return post.email ? 'Data received.' : ''
  },

  '/handlerLink/': ({ get, post }) => {
    // console.log(get.number ** 2);
    // console.log(Number(get.number) + Number(get.number2));
    // return `${get.number ** 2}_${Number(get.number) + Number(get.number2)}`

    // let obj = { 1: 'a', 2: 'b', 3: 'c' };
    // console.log(get.key);
    // return obj[get.key]

    // let arr = ['user1', 'user2', 'user3'];
    // return arr[get.key] ? arr[get.key] : 'Not user.'
  },

  // '/handler/': ({ get, post }) => get.num**3


  // '/handlerBtnOutputSum8+80/': ({ get, post }) => Number(get.num1)+Number(get.num2),


  // '/getElArr/': ({ get, post }) => {
  //   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //   return arr[get.num]
  // },


  // '/GetSum8+80+800/': ({ get, post }) => Object.values(post).reduce((acc, el) => acc + Number(el), 0),


  // '/getSum/': ({ get, post }) => Object.values(post).reduce((acc, el) => acc + Number(el), 0),


  // '/sendFormData/': ({ get, post }) => console.log(post),

  // '/getAverage/': ({ get, post }) => { let numbers = Object.values(post); return numbers.reduce((acc, el) => acc + Number(el), 0)/numbers.length },

  // '/getSumFromJson/': ({ body }) => JSON.parse(body).split(',').reduce((acc, el) => acc + Number(el), 0)

  '/getSumFromJson/': (data) => console.log(data)

}