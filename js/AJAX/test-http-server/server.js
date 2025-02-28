/*
 Пусть на сервере дан массив.
 Пусть сервер ожидает, что параметром будет передано число, и возвращает элемент массива, соответствующий этому числу. 
 По нажатию на кнопку передайте на сервер некоторое число, а ответ сервера выведите в абзац.
*/

let arr = ['welcome', 'world', ')'];

export default {
  '/handler/': function ({ get }) {
    let result = get.num ** 2;
    return result
  },

  '/getSum/': function ({ get }) {
    return Number(get.n1) + Number(get.n2)
  },

  '/getElementArr/': function ({ get }) {
    return arr[get.idx]
  },

  '/getSumUsePost/': function ({ post }) {
    return Number(post.n1) + Number(post.n2)+  Number(post.n3)
  }
}