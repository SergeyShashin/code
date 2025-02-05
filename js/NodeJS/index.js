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

// Дан объект:

// let obj = {
// 	'file1.txt': 'text1',
// 	'file2.txt': 'text2',
// 	'file3.txt': 'text3',
// }
// С помощью цикла для каждого элемента объекта создайте файл, именем которого будет свойство элемента,
//  а текстом - значение свойства.

let obj = {
  'file1.txt': 'text1',
  'file2.txt': 'text2',
  'file3.txt': 'text3',
}

for (let key in obj) {
  fs.writeFileSync(`${key}.txt`, `${obj[key]}`);
}

//4. Дан файл с текстом. Запустите таймер, который каждые 5 секунд в конец этого файла будет записывать восклицательный знак
let sign = '!';
// setInterval(() => { fs.writeFileSync('fileForSign.txt', sign); sign += '!' }, 5000);

//5. Даны 3 файла с числами. Напишите скрипт, который прочитает числа из файлов, найдет их сумму и запишет ее в новый файл.
fs.writeFileSync('sum.txt', `${[...fs.readFileSync('numbers.txt', 'utf8').split(' '),
...fs.readFileSync('numbers1.txt', 'utf8').split(' '),
...fs.readFileSync('numbers2.txt', 'utf8').split(' ')
].reduce((acc, el) => acc + Number(el), 0)
  }`);

//6. Попробуйте прочитать несуществующий файл.
//Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.

try {
  fs.readFileSync('someFile.txt', 'utf8');
} catch (e) {
  console.log(e);
}