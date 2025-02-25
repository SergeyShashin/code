// import { pow2 as square, pow3 as cube, pow4, root2, root3 } from "./math.js";
import * as math from "./math.js";
// import text, { f1, f2 } from "./welcome.js";
import text, * as mod from "./welcome.js";
import arr from "./arr.js";
import * as numbers from "./numbers.js";

import _ from 'underscore';
import ld from 'lodash';
import namesOfDaysWeek from "./namesOfDaysWeek.js";

alert('Welcome, world)');
alert('it works!');

// let res = Number(root2(2)) + Number(root3(3));

// console.log(res);

// console.log(square(2) + cube(3) + pow4(4));

console.log(math.root2(4));
console.log(math.pow2(2));
console.log(text());
// console.log(f1());
// console.log(f2());
console.log(mod.f1());
console.log(mod.f2());

/* 
  1. Сделайте модуль, экспортирующий массив с числами.
     Подключите этот модуль к другому файлу и найдите сумму элементов подключенного массива.
*/
console.log(arr.reduce((acc, el) => acc + el, 0));

/*
  2. Сделайте модуль, экспортирующий три числа.Подключите этот модуль к другому файлу и найдите сумму этих чисел.
*/
console.log(Object.values(numbers).reduce((acc, el) => acc + el, 0));

console.log(_.first(arr) + _.last(arr));

console.dir(ld);

/**
 * Установите библиотеку lodash. Подключите ее себе в проект и используйте несколько методов из этой библиотеки.
 */
console.log(ld.castArray(arr));
console.log(ld.chunk(arr));
console.log(ld.drop(arr));
console.log(ld.head(arr));
console.log(ld.isArray(arr));
console.log(ld.sortedUniq(arr));
console.log(ld.sum(arr));


/**
 * Сделайте модуль, экспортирующий массив названий дней недели.
 * По нажатию на кнопку импортируйте этот модуль и выведите дни недели в виде списка ul.
 */
let btnOutputNamesOfDaysWeekEl = document.getElementById('outputNamesOfDaysWeek');

btnOutputNamesOfDaysWeekEl.addEventListener('click', () => handlerClickBtnOutputNamesOfDaysWeek());

function handlerClickBtnOutputNamesOfDaysWeek() {
  console.log('есть клик');
  import('./namesOfDaysWeek.js').then(obj => {
    let ulEl = document.createElement('ul');
    for (let day of obj.default) {
      let liEl = document.createElement('li');
      liEl.textContent = day;
      ulEl.appendChild(liEl);
    }
    document.body.appendChild(ulEl);
  })
}