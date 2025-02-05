import { square, cube } from './math.js';
// import _ from 'underscore';
import _ from 'lodash';

let res = square(2) + cube(3);
console.log(res);

// console.log(_.first([1, 2, 3]));

console.log(_.chunk([1, 2, 3], 2));
console.log(_.compact([1, '', 2, '', 3]));