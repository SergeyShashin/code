import fs from 'fs';

/*
 1. Пусть в файле записано число. Прочитайте этот файл и выведите в консоль сумму цифр этого числа.
 2. Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация.
    Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
 3. Пусть в файле через запятую записаны числа. Сделайте скрипт, который запишет каждое из этих чисел в отдельный файл.
 4. Пусть у вас есть 5 файлов с числами. Найдите сумму этих чисел и запишите в новый файл.
 */

// 1
// fs.promises.readFile('number.txt', 'utf8').then(data => {
// console.log(data.split('').reduce((acc, el) => acc + Number(el), 0));
// });

// 2
// fs.promises.readFile('number1.txt', 'utf8').then(data => {
//   console.log(data.split('').reduce((acc, el) => acc + Number(el), 0));
// }).catch(err => console.log(err));

// 3
// fs.promises.readFile('numbers.txt', 'utf8').then(data => {
//   data.split(',').map((el, idx) => fs.promises.writeFile(`numberFromNumbers${idx}.txt`, el))
// }).catch(err => console.log(err));


// let namesFiles = ['1.txt', '2.txt', '3.txt'];
// let promisesFiles = [];

// for (let nameFile of namesFiles) {
//   promisesFiles.push(fs.promises.readFile(nameFile, 'utf8'));
// }

// Promise.all(promisesFiles).then(data => fs.promises.writeFile('res.txt', data.join(' '))).catch(err => console.log(err));

// 4.
let namesFiles = ['numberFromNumbers0.txt', 'numberFromNumbers1.txt', 'numberFromNumbers2.txt', 'numberFromNumbers3.txt', 'numberFromNumbers4.txt'];
let promisesFiles = [];

for (let nameFile of namesFiles) {
  promisesFiles.push(fs.promises.readFile(nameFile, 'urf8'));
}

Promise.all(promisesFiles).then(data=>fs.writeFile('res' data);