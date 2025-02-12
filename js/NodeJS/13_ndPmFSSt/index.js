import fs from 'fs';

/**
 * 1. Сделайте файл достаточно большого размера. Прочитайте его по кусочкам и выведите каждый кусочек в консоль. 
 * 
 * 2. Запишите в файл столбец чисел от одного до миллиона.
 * 
 * 3. Дан файл большого размера. Напишите код, который сделает три копии этого файла.
 */

//1.
// let readStream = fs.createReadStream('бумага.webm', 'utf8');
// readStream.on('data', chunk => console.log(chunk));

//2.
// let writeableStream = fs.createWriteStream('numbers.txt');

// for (let i = 1; i < 1000001; writeableStream.write(`${i}\n`), i++) { }
// writeableStream.end();

//3.
// let readStream = fs.createReadStream('numbers.txt', 'utf8');
// let writeableStream1 = fs.createWriteStream('number1.txt');
// let writeableStream2 = fs.createWriteStream('number2.txt');
// let writeableStream3 = fs.createWriteStream('number3.txt');

// readStream.on('data', chunk => {
//   writeableStream1.write(chunk);
//   writeableStream2.write(chunk);
//   writeableStream3.write(chunk);
// });

// writeableStream1.end();
// writeableStream2.end();
// writeableStream3.end();
