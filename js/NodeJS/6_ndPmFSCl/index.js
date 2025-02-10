/*
источник задачи: https://code.mu/ru/javascript/nodejs/book/prime/file-system/callbacks/
1. Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа.
2. Проверьте, что код после метода readFile будет выполнен раньше, чем будет прочитан файл.
3. Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация.
   Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
4. С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10.
5. Даны три файла с числами. Выведите в консоль сумму этих чисел.
6. Даны пять файлов с числами. Выведите в консоль сумму этих чисел.
7. Дан файл с числом. Запишите в этот файл квадрат этого числа.
8. Даны три файла с числами. Запишите в новый файл сумму этих чисел.
9. Перепишите код через стрелочные функции.
*/

import fs from 'fs';

//1
// fs.readFile('number.txt', 'utf8', (er, d) => console.log(d**2));

//2
// console.log('!!!');

//3
// fs.readFile('number.txt', 'utf8', (er, d) => console.log(er ? er : d ** 2));

//4
// let text = '1 2 3 4 5 6 7 8 9 10';

// for (let i = 1; i < 11; i++) {
//   fs.writeFile(`number${i}.txt`, text, er => console.log(er ? er : `Данные в файл number${i}.txt сохранены.`));
// }

//5
// let encoding = 'utf8';

// let file1 = 'f1.txt';
// let file2 = 'f2.txt';
// let file3 = 'f3.txt';

// fs.readFile(
//   file1, encoding, (er1, d1) => er1
//     ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er1}.`)
//     : fs.readFile(file2, encoding, (er2, d2) => er2
//       ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er2}.`)
//       : fs.readFile(file3, encoding, (er3, d3) => er3
//         ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er3}.`)
//         : console.log(Number(d1) + Number(d2) + Number(d3))
//       )
//     )
// );


//6
// let encoding = 'utf8';

// let file1 = 'f1.txt';
// let file2 = 'f2.txt';
// let file3 = 'f3.txt';
// let file4 = 'f4.txt';
// let file5 = 'f5.txt';

// fs.readFile(
//   file1, encoding, (er1, d1) => er1
//     ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er1}.`)
//     : fs.readFile(file2, encoding, (er2, d2) => er2
//       ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er2}.`)
//       : fs.readFile(file3, encoding, (er3, d3) => er3
//         ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er3}.`)
//         : fs.readFile(file4, encoding, (er4, d4) => er4
//           ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er4}.`)
//           : fs.readFile(file5, encoding, (er5, d5) => er4
//             ? console.log(`При получении информации из файла ${encoding} случилась ошибка ${er5}.`)
//             : console.log(Number(d1) + Number(d2) + Number(d3) + Number(d4) + Number(d5))
//           )
//         )
//       )
//     )
// );

//7.
// fs.readFile('rw.txt', 'utf8', (er1, d) => er1
//   ? console.log(er1)
//   : fs.writeFile('rw.txt', `${Number(d) ** 2}`, er2 => console.log(er2 ? er2 : 'Чтение и запись в файл rw.txt сделаны.'))
// )

//8
// let sum = 0;

// fs.readFile('f1.txt', 'utf8', (er1, d) => {
//    if (er1) {
//       console.log(er1);
//    } else {
//       sum += Number(d);
//       fs.readFile('f2.txt', 'utf8', (er2, d2) => {
//          if (er2) {
//             console.log(er2);
//          } else {
//             sum += Number(d2);
//             fs.readFile('f3.txt', 'utf8', (er3, d3) => {
//                if (er3) {
//                   console.log(er3);
//                } else {
//                   sum += Number(d3);
//                   fs.writeFile('sum8.txt', String(sum), er4 => console.log(er4 ? er4 : 'Сумма из 3 файлов сохранена в файл sum8.txt'));
//                }
//             });
//          }
//       })
//    }

// })

//9
fs.readFile('readme1.txt', 'utf8', (err, data1) => {
   if (!err) {
      fs.readFile('readme2.txt', 'utf8', (err, data2) => {
         if (!err) {
            fs.writeFile('readme.txt', data1 + data2, err => {
               if (err) {
                  console.log('ошибка записи файла');
               }
            });
         } else {
            console.log('ошибка чтения файла readme2');
         }
      });
   }
   else {
      console.log('ошибка чтения файла readme1');
   }
}
);


