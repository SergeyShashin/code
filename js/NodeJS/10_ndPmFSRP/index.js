import fs from 'fs/promises';

/* 
1. Напишите код, который прочитает содержимое текстового файла:
index.js
/dir1/
  /dir2/
    readme.txt
*/

//1
console.log(await fs.readFile('dir1/dir2/readme.txt', 'utf8'));