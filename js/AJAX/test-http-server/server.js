export default {
  '/handler/': function ({ get }) {
    console.log(get.num**2);
  }
}