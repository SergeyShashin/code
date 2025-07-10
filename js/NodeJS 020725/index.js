import { square, cube } from './math.js';
import { open, read, close, readFileSync, writeFileSync, readFile, writeFile, promises, createReadStream, createWriteStream } from 'fs';
import __dirname from './__dirname.js';
import { access, constants } from 'fs/promises';
import { createGzip } from 'zlib';
import http from 'http';
import { type } from 'os';

// import { readFile, writeFile } from 'fs/promises';
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


// async function saveSum() {
//   try {
//     let pathDir = './txt/';
//     let fileEnconding = 'utf8';
//     let namesFiles = ['a.txt', 'b.txt'];
//     let sum = 0;

//     for (let fileName of namesFiles) {
//       sum += Number(await promises.readFile(pathDir + fileName, fileEnconding));
//     }

//     await promises.writeFile(pathDir + 'newFile.txt', String(sum));
//   } catch (err) {
//     console.log(err);
//   }
// }

// saveSum();


// async function writeRandomNumAndWriteSumNewFile() {
//   let pathDir = './txt/';
//   let fileEnconding = 'utf8';
//   let namesFiles = ['1.txt', '2.txt', '3.txt', '4.txt', '5.txt', '6.txt', '7.txt', '8.txt', '9.txt', '10.txt'];
//   let sum = 0;

//   for (let fileName of namesFiles) {
//     let randNum = String(Math.floor(Math.random() * 1000));
//     await promises.writeFile(pathDir + fileName, randNum);
//   }

//   for (let fileName of namesFiles) {
//     sum += Number(await promises.readFile(pathDir + fileName, fileEnconding));
//   }

//   await promises.writeFile(pathDir + 'newFile.txt', String(sum));
// }

// writeRandomNumAndWriteSumNewFile();


// async function func() {
//   let data = await readFile('./txt/newFile.txt', 'utf8');
//   console.log(data);
// }

// func();

// console.log(__dirname);

// let fileName = './txt/newFile.txt';
// let fileEnconding = 'utf8';

// access(fileName, constants.F_OK).then(() => promises.readFile(fileName, fileEnconding).then(res=>console.log(res))).catch(err => console.log(err));
// access(fileName, constants.W_OK).then(() => console.log('Can write.')).catch(err => console.log(err));
// access(fileName, constants.R_OK|constants.W_OK).then(() => console.log('Can access.')).catch(err => console.log(err));


// let contnent = createReadStream(fileName, fileEnconding);
// contnent.on('data', chunk => console.log(chunk));

// let str = '';

// for (let i = 0; i < 500; i++) {
//   str += i+'\n';
// }

// await promises.writeFile('./txt/big.txt', str);

// let fileName = './txt/big.txt';
// let fileEnconding = 'utf8';
// let contnent = createReadStream(fileName, fileEnconding);
// contnent.on('data', chunk => console.log(chunk));


// let fileName = './txt/big.txt';

// let fileForWrite = createWriteStream(fileName);

// for (let i = 1; i < 10 ** 6+1; i++) {
//   fileForWrite.write(String(i)+'\n');
// }

// fileForWrite.end();

// let contentFromFile = createReadStream('./txt/big.txt');

// let streamWrite1 = createWriteStream('./txt/big1.txt');
// let streamWrite2 = createWriteStream('./txt/big2.txt');
// let streamWrite3 = createWriteStream('./txt/big3.txt');

// contentFromFile.on('data', chunk => {
//   streamWrite1.write(chunk);
//   streamWrite2.write(chunk);
//   streamWrite3.write(chunk);
// });

// streamWrite1.end();
// streamWrite2.end();
// streamWrite3.end();

// let readStreamBig = createReadStream('./txt/big.txt');
// let writestreamBig1 = createWriteStream('./txt/big1.txt');

// readStreamBig.pipe(writestreamBig1);

// let readStreamBig = createReadStream('./txt/big.txt');
// let writestreamBig1 = createWriteStream('./txt/big1.zip');
// readStreamBig.pipe(createGzip()).pipe(writestreamBig1);

// let pathToCatalogTxt = './txt/';
// let pathToCatalogZip = './zip/';
// let fileExtension = '.txt';
// let extensionArchive = '.zip';
// let fileEnconding = 'utf8';
// let fileNames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fileNames.map((fileName) => {
//   let pathToSourceFile = pathToCatalogTxt + fileName + fileExtension;
//   let pathToTargetFile = pathToCatalogZip + fileName + extensionArchive;
//   let readStream = createReadStream(pathToSourceFile, fileEnconding);
//   let writeStream = createWriteStream(pathToTargetFile, fileEnconding);

//   readStream.pipe(createGzip()).pipe(writeStream);
// });


// http.createServer((request, response) => {
//   response.setHeader('Content-Language', 'ru');
//   response.setHeader('Cache-Control', 'no-cache');
//   response.setHeader('Content-Type', 'text/html');
//   response.write('Welcome World!');
//   let date = new Date();
//   response.write(`<time>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</time>`);
//   response.end();
// }).listen(3000);

// http.createServer((request, response) => {
//   response.writeHead(404, { 'Content-Type': 'text/plain' })
//   response.write('page not found');
//   response.end();
// }).listen(3000);


// let i = 0;

// http.createServer((request, response) => {
//   // console.log(request.url, request.method, request.headers);
//   console.log(request.headers.host);
//   response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Language': 'ru' });
//   response.write(`${++i}`);
//   response.end();
// }).listen(3000);


// http.createServer((request, response) => {
// 	if (request.url != '/favicon.ico'){
// 		console.log(request.url); // теперь выполнится один раз

// 		response.writeHead(200, {'Content-Type': 'text/html'});
// 		response.write('text');
// 		response.end();
// 	}
// }).listen(3000);

// http.createServer((request, response) => {
//   if (request.url !== '/favicon.ico') {
//     console.log(request.url);
//     let text = '/';
//     let status = 200;

//     switch (request.url) {
//       case '/':
//         text = '/'
//         break;
//       case '/page1':
//         text = 'page1'
//         break;
//       case '/page2':
//         text = 'page2'
//         break;
//       case '/page3':
//         text = 'page3'
//         break;
//       default:
//         text = 'page not found';
//         status = 404;
//         break;
//     }

//     response.writeHead(status, { 'Content-type': 'text/html' });
//     response.write('Welcome world!');
//     response.write('<br/>');
//     response.write(text);
//     response.end();
//   }
// }).listen(3000);



// http.createServer(async (request, response) => {
//   if (request.url !== 'favicon.ico') {
//     let status = 200;
//     let content = '';

//     switch (request.url) {
//       case '/':
//         content = 'Welcome world)';
//       case '/page1':
//         content = await promises.readFile('./html/page1.html', 'utf8');
//         break;
//       case '/page2':
//         content = await promises.readFile('./html/page2.html', 'utf8');
//         break;
//       case '/page3':
//         content = await promises.readFile('./html/page3.html', 'utf8');
//         break;
//       default:
//         content = '<br> Page not found.';
//         status = 404;
//     }

//     response.writeHead(status, { 'Content-type': 'text/html' });
//     response.write(request.url);
//     response.write(content);
//     response.end();
//   }

// }).listen(3000);


// http.createServer(async (request, responce) => {
//   if (request.url !== 'favicon.ico') {
//     let codeAnswer = 200;
//     let content;
//     let type = 'text/html';

//     switch (request.url) {
//       case '/':
//         content = 'Welcome World!';
//         break;
//       case '/favicon':
//         content = await promises.readFile('./ico/favicon.ico');
//         type = 'image/vnd.microsoft.icon';
//         break;
//       case '/page':
//         content = await promises.readFile('./html/page888.html');
//         break;
//       case '/12':
//         content = await promises.readFile('./img/12.jpg');
//         type = 'image/jpg';
//         break;
//       case '/style':
//         content = await promises.readFile('./css/style.css');
//         type = 'text/css';
//         break;
//       case '/welcome':
//         content = await promises.readFile('./js/welcome.js');
//         type = 'text/javascript';
//         break;
//       default:
//         content = 'Page not find.';
//         break;
//     }

//     responce.writeHead(codeAnswer, { 'Content-type': type });
//     responce.write(content);
//     responce.end();
//   }

// }).listen(3000);


http.createServer(async (request, response) => {
  if (request.url !== '/favicon.ico') {
    let path = 'root' + request.url;
    let status = 200;

    try {

      if ((await promises.stat(path)).isDirectory()) {
        path += 'index.html';
      }

      let type = 'text/html';
      let content = await promises.readFile(path, 'utf8');
    } catch(err) {
      status=404;
      content='page not found.'
    }

    response.writeHead(status, { 'Content-type': type });
    response.write(content);
    response.end();
  }

}).listen(3000);