import { square, cube } from './math.js';
import { open, read, close, readFileSync, writeFileSync, readFile, writeFile, promises } from 'fs';
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

// let pathDir = './txt/';
// let namesFiles = ['a.txt', 'b.txt', 'c.txt'];
// let fileEnconding = 'utf8';

// writeSumNewFile(pathDir, namesFiles, fileEnconding);

// function writeSumNewFile(pathDir, namesFiles, fileEnconding) {
//   let newFileName = pathDir + 'newFile.txt';
//   let sum = 0;

//   for (let fileName of namesFiles) {
//     let pathFile = pathDir + fileName;
//     sum += Number(readFileSync(pathFile, fileEnconding));
//   }

//   writeFileSync(newFileName, String(sum));
// }

// try {
//   readFileSync('', 'utf8');
// } catch (e) {
//   console.log('Вот что случилось. ' + e);
// }

// readFile('./txt/a.txt', 'utf8', (err, data) => console.log(err ? err : data ** 2));
// console.log('!!!');

// let pathDir = './txt/';

// for (let i = 1; i < 11; i++) {
//   writeFile(pathDir + i + '.txt', String(i), err => console.log(err ? err : ''));
// }


// let pathDir = './txt/';
// let namesFiles = ['a.txt', 'b.txt', 'c.txt', 'a.txt', 'b.txt'];
// let fileEnconding = 'utf8';
// let sum = 0;

// readFile(pathDir + namesFiles[0], fileEnconding, (err0, content0) => {
//   content0 ? sum += Number(content0) : console.log(err0);
//   readFile(pathDir + namesFiles[1], fileEnconding, (err1, content1) => {
//     content1 ? sum += Number(content1) : console.log(err1);
//     readFile(pathDir + namesFiles[2], fileEnconding, (err2, content2) => {
//       content2 ? sum += Number(content2) : console.log(err2);
//       readFile(pathDir + namesFiles[3], fileEnconding, (err3, content3) => {
//         content3 ? sum += Number(content3) : console.log(err3);
//         readFile(pathDir + namesFiles[4], fileEnconding, (err4, content4) => {
//           content4 ? sum += Number(content4) : console.log(err4);
//           console.log(sum*22+8);
//         });
//       });
//     });
//   });
// });

// let pathDir = './txt/';
// let nameFile = 'newFile.txt';
// let fileEnconding = 'utf8';

// readFile(pathDir + nameFile, fileEnconding, (err, content) =>
//   err ? console.log(err) : writeFile(pathDir + nameFile, `${content ** 2}`, errWrite => errWrite ? console.log(errWrite) : ''));

// let pathDir = './txt/';
// readFile(pathDir + '1.txt', 'utf8', (err, data1) => {
//   if (!err) {
//     readFile(pathDir + '2.txt', 'utf8', (err, data2) => {
//       if (!err) {
//         writeFile(pathDir + '3.txt', data1 + data2, err => {
//           if (err) {
//             console.log('ошибка записи файла');
//           }
//         });
//       } else {
//         console.log('ошибка чтения файла readme2');
//       }
//     });
//   } else {
//     console.log('ошибка чтения файла readme1');
//   }
// });


// let pathDir = './txt/';
// let fileEnconding = 'utf8';

// promises.readFile(pathDir + 'newFile.txt', fileEnconding).then(res => console.log(res)).catch(err=>console.log(err));


// let pathDir = './txt/';
// let fileEnconding = 'utf8';

// promises.readFile(pathDir + 'numbers.txt', fileEnconding).then(numbers => numbers.split(',').map(number =>
//   promises.writeFile(pathDir + number + '.txt', number).catch(err => console.log(err))
// )).catch(err => console.log(err));


// let pathDir = './txt/';
// let fileEnconding = 'utf8';
// let namesFiles = ['a.txt', 'b.txt', 'c.txt', 'a.txt', 'b.txt'];
// let contentFromFiles = [];
// let sum = 0;

// namesFiles.map(fileName =>
//   contentFromFiles.push(promises.readFile(pathDir + fileName, fileEnconding))
// );

// Promise.all(contentFromFiles).then(numbers => { numbers.map(number => sum += Number(number)); console.log(sum/5*111); }).catch(err => console.log(err));


async function saveSum() {
  try {
    let pathDir = './txt/';
    let fileEnconding = 'utf8';
    let namesFiles = ['a.txt', 'b.txt'];
    let sum = 0;

    for (let fileName of namesFiles) {
      sum += Number(await promises.readFile(pathDir + fileName, fileEnconding));
    }

    await promises.writeFile(pathDir + 'newFile.txt', String(sum));
  } catch (err) {
    console.log(err);
  }
}

saveSum();