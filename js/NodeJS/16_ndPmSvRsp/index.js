import { write } from 'fs';
import http from 'http';

let date = new Date();
let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

// http.createServer((request, response) => {
//   response.setHeader('Content-Type', 'text/html');
//   response.statusCode = 200;
//   response.write('<h1>Welcome WORLD)</h1>');
//   response.write(`<p>${time} </p>`);
//   response.end();
// }).listen(3000);

http.createServer((request, response) => {
  // response.setHeader('Content-Type', 'text/html');
  // response.statusCode = 200;
  response.writeHead(200, { 'Content-Type': 'text/html', 'Content-Language': 'ru' })
  response.write('<h1>Welcome WORLD)</h1>');
  response.write(`<p>${time} </p>`);
  response.end();
}).listen(3000);