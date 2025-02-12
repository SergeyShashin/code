import fs from 'fs/promises';
import constants from 'fs';

fs.access('1.txt', constants.F_OK).then(() => fs.readFile('1.txt', 'utf8').then(data=>console.log(data))).catch(er => console.log(er));
