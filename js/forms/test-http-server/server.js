let obj = { 1: 'a', 2: 'b', 3: 'c' };

export default {
  '/handler/': function ({ get, post }) {
    console.log(get);
    // console.log(post);
    // return (Number(post.num1)+Number(post.num2)+Number(post.num3)+Number(post.num4)+Number(post.num5))/5
    // return `${post.date}`
    // let login = 'admin';
    // let password = 'admin'
    // return `Login ${post.login === login}. Password ${post.password === password}.`
    // return get.num ** 2
    return obj[get.key]
  }
}