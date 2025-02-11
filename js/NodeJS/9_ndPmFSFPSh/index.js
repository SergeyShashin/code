import fs from 'fs/promises';

outputContentFile('readme.txt');

async function outputContentFile(namefile) {
  let data = await fs.readFile(namefile, 'utf8');
  console.log(data);
}
