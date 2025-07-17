import { daysWeek } from './daysWeek.js';
import numbers, * as math from './math.js';
import { chunk, concat } from 'lodash';
// import { daysWeek } from './daysWeek.js';

alert('it works');
alert('Welcome world)');

// alert(math.root2(4));
// alert(math.root3(9));
// alert(math.pow2(8));
// alert(math.pow4(8));
// alert(numbers.reduce((acc, el) => acc + el));
// console.log(chunk(['a', 'b', 'c', 'd'], 2));
// let arr = [1, 2, 3, ...[1, 2, 3]];
// console.log(arr);

// document.getElementById('addDaysWeek').onclick = () => {
//   import('./daysWeek.js').then(({daysWeek}) => {
//     let ulEl = document.createElement('ul');
//     for (let day of daysWeek) {
//       let liEl = document.createElement('li');
//       liEl.textContent = day;
//       ulEl.appendChild(liEl);
//     }
//     document.body.appendChild(ulEl);
//   })
// }

function createOrder(arr) {
  let ulEl = document.createElement('ul');

  for (let el of arr) {
    let liEl = document.createElement('li');
    liEl.textContent = el;
    ulEl.appendChild(liEl);
  }
  return ulEl
}

document.getElementById('addDaysWeek').onclick = () => {
  Promise.all([import('./daysWeek.js'), import('./month.js')]).then(([res1, res2]) => {
    document.body.appendChild(createOrder(res1.daysWeek)),
    document.body.appendChild(createOrder(res2.months))
  })
};


