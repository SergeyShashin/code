export default {
  '/handler/': function ({get, post}) {
    console.log(get);
    console.log(post);
    return 'form data received'
  }
}