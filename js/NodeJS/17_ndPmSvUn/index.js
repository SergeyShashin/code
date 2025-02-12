import http, { request } from 'http';
let i = 0;

http.createServer((request, responce) => {
  responce.writeHead(200, {'Content-Type': 'text/html'});
  responce.write(`<h1>${i++}</h1>`);
  responce.end();
});