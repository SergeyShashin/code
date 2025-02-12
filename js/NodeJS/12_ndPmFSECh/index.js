import fs from 'fs/promises';
import constants from 'fs';

fs.access('1.txt', constants.F_OK).then(() => fs.readFile('1.txt', 'utf8').then(data => console.log(data))).catch(er => console.log(er));

try {
  await fs.access('1.txt', constants.R_Ok);
  console.log('can read');
} catch (e) {
  console.error('cannot read');
}

try {
  await fs.access('1.txt', constants.W_Ok);
  console.log('can write');
} catch (e) {
  console.error('cannot write');
}

try {
  await fs.access('1.txt', constants.R_Ok | constants.W_Ok);
  console.log('can access');
} catch (e) {
  console.error('cannot access');
}
