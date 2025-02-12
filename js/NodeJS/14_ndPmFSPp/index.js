import fs from 'fs';
import { createGzip } from 'zlib';

/**
 * 2. Даны 10 файлов. Напишите код, который заархивирует каждый из этих файлов в свой архив.
 */

// let readableStream = fs.createReadStream('numbers.txt', 'utf8');
// let writeableStream = fs.createWriteStream('numbers_copy.txt');

for (let i = 1; i < 11; i++) {
  let readableStream = fs.createReadStream(`numbers_copy${i}.txt`, 'utf8');
  let writeableStream = fs.createWriteStream(`numbers_copy.gzip${i}`);
  readableStream.pipe(createGzip()).pipe(writeableStream);
}