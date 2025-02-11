import fs from 'fs';

// 1. Даны два файла с числами. Найдите сумму этих чисел и запишите результат в третий файл.

// 1
async function writeSumToFile(filesNames, nameResultFile) {

  try {
    let sum = 0;

    for (let fileName of filesNames) {
      sum += Number(await fs.promises.readFile(fileName, 'utf8'));
    }
    await fs.promises.writeFile(nameResultFile, String(sum));
  }
  catch (er) {
    console.log(er);
  }
}

writeSumToFile(['number0.txt', 'number1.txt'], 'sum.txt');