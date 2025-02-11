import fs, { writeFile } from 'fs';

// 1. Даны два файла с числами. Найдите сумму этих чисел и запишите результат в третий файл.
// 
// 2. Дан массив имен файлов. Переберите этот массив циклом и создайте файлы с этими именами,
//    записав при создании в каждый файл случайное число.
//    После этого в цикле прочитайте содержимое всех файлов и найдите сумму их чисел. Запишите ее в новый файл.

// 1
// async function writeSumToFile(filesNames, nameResultFile) {

//   try {
//     let sum = 0;

//     for (let fileName of filesNames) {
//       sum += Number(await fs.promises.readFile(fileName, 'utf8'));
//     }
//     await fs.promises.writeFile(nameResultFile, String(sum));
//   }
//   catch (er) {
//     console.log(er);
//   }
// }

// writeSumToFile(['number0.txt', 'number1.txt'], 'sum.txt');


//2.
sum();

async function sum() {
  let namesFiles = ['1.txt', '2.txt', '3.txt'];

  await createFiles(namesFiles);

  getContentFiles(namesFiles).then(data => writeFileSum(data.reduce((acc, el) => acc + Number(el), 0)));

  async function writeFileSum(sum) {
    fs.promises.writeFile('sum2.txt', String(sum));
  }

  async function createFiles(namesFiles) {
    for (let nameFile of namesFiles) {
      await fs.promises.writeFile(nameFile, String(getRandomNum(1, 100)));
    }
  }

  async function getContentFiles(namesFiles) {
    let content = [];
    for (let nameFile of namesFiles) {
      content.push(await fs.promises.readFile(nameFile, 'utf8'));
    }
    return content;
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

}