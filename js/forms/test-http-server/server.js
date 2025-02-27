// let obj = { 1: 'a', 2: 'b', 3: 'c' };
// let arr = [
// 	'user1', 'user2', 'user3'
// ];

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
    // return obj[get.key]
    // return arr[get.key] ? arr[get.key] : 'User not found.'
  },

  '/target/': function ({ get, post }) {
    console.log(post);
  }
}