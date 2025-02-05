import { square, cube } from './math.js';
// import _ from 'underscore';
import _ from 'lodash';

import fs from 'fs';

let res = square(2) + cube(3);
console.log(res);

// console.log(_.first([1, 2, 3]));

console.log(_.chunk([1, 2, 3], 2));
console.log(_.compact([1, '', 2, '', 3]));

let text = fs.readFileSync('readme.txt', 'utf8');
console.log(text);

let numbers = fs.readFileSync('numbers.txt', 'utf8');
let numbers1 = fs.readFileSync('numbers1.txt', 'utf8');

console.log(`Сумма numbers и numbers1 = ${[...numbers.split(' '), ...numbers1.split(' ')].reduce((acc, el) => acc + Number(el), 0)}`);