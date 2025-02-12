import fs from 'fs';
/**
 * 2. Даны 10 файлов. Напишите код, который заархивирует каждый из этих файлов в свой архив.
 */

let readableStream = fs.createReadStream('numbers.txt', 'utf8');
// let writeableStream = fs.createWriteStream('numbers_copy.txt');
let writeableStream1 = fs.createWriteStream('numbers_copy1.txt');
let writeableStream2 = fs.createWriteStream('numbers_copy2.txt');
let writeableStream3 = fs.createWriteStream('numbers_copy3.txt');
let writeableStream4 = fs.createWriteStream('numbers_copy4.txt');
let writeableStream5 = fs.createWriteStream('numbers_copy5.txt');
let writeableStream6 = fs.createWriteStream('numbers_copy6.txt');
let writeableStream7 = fs.createWriteStream('numbers_copy7.txt');
let writeableStream8 = fs.createWriteStream('numbers_copy8.txt');
let writeableStream9 = fs.createWriteStream('numbers_copy9.txt');
let writeableStream10 = fs.createWriteStream('numbers_copy10.txt');

readableStream.pipe(writeableStream1);
readableStream.pipe(writeableStream2);
readableStream.pipe(writeableStream3);
readableStream.pipe(writeableStream4);
readableStream.pipe(writeableStream5);
readableStream.pipe(writeableStream6);
readableStream.pipe(writeableStream7);
readableStream.pipe(writeableStream8);
readableStream.pipe(writeableStream9);
readableStream.pipe(writeableStream10);

// writeableStream.end();
