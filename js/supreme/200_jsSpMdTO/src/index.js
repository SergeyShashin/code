// import { pow2 as square, pow3 as cube, pow4, root2, root3 } from "./math.js";
import * as math from "./math.js";
// import text, { f1, f2 } from "./welcome.js";
import text, * as mod from "./welcome.js";
import arr from "./arr.js";

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

// Сделайте модуль, экспортирующий массив с числами.
//  Подключите этот модуль к другому файлу и найдите сумму элементов подключенного массива.
console.log('');