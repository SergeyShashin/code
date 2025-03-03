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
    return Number(post.n1) + Number(post.n2) + Number(post.n3)
  },

  '/getSumUsePostFromInputs/': function ({ post }) {
    return Number(post.n0) + Number(post.n1) + Number(post.n2)
  },

  '/getDataFromPost/': function ({ post }) {
    return post.a + post.b + post.c
  },

  '/sendFormUseFormData/': function ({ post }) {
    let numbers = Object.values(post);

    return numbers.reduce((sum, number) => sum + Number(number), 0) / numbers.length;
  },

  '/getSumUsePostAndJson/': function ({ body }) {
    return JSON.parse(body).reduce((sum, number) => sum + number, 0)
  },

}