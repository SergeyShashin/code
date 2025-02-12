import fs from 'fs';

let readStream = fs.createReadStream('бумага.webm', 'utf8');

readStream.on('data', chunk => console.log(chunk));