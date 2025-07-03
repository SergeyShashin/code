import { square, cube } from './math.js';
import { open, read, close, readFileSync, writeFileSync } from 'fs';
// import _ from 'underscore';
// import _ from 'lodash';

// console.log(square(8));
// console.log(cube(8));
// console.log(_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 }));
// console.log(readFileSync('./txt/text.txt', 'utf8'));
// console.log(Number(readFileSync('./txt/a.txt', 'utf8')) + Number(readFileSync('./txt/b.txt', 'utf8')));

// let obj = {
//   'file1.txt': 'text1',
//   'file2.txt': 'text2',
//   'file3.txt': 'text3',
// };

// for (let key in obj) {
//   writeFileSync(`./txt/${key}`, obj[key]);
// }

// let numberInterval = setInterval(() => {
//   let path = './txt/text.txt';
//   let fileEnconding = 'utf8';
//   let content = readFileSync(path, fileEnconding);
//   let addContent = '!';
//   let newContent = content + addContent
//   writeFileSync(path, newContent);
// }, 5000);

// setTimeout(() => clearInterval(numberInterval), 15012);

let pathDir = './txt/';
let namesFiles = ['a.txt', 'b.txt', 'c.txt'];
let fileEnconding = 'utf8';

// writeSumNewFile(pathDir, namesFiles, fileEnconding);

// function writeSumNewFile(pathDir, namesFiles, fileEnconding) {
//   let newFileName = pathDir + 'newFile.txt';
//   let sum = 0;
  
//   for (let fileName of namesFiles) {
//     let pathFile = pathDir + fileName;
//     sum += Number(readFileSync(pathFile, fileEnconding));
//   }

//   console.log(sum);

//   writeFileSync(newFileName, sum);
// }