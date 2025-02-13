import http from 'http';

http.createServer((request, response) => {
  if (request.url !== '/favicon.ico') {
    console.log(request.url);
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write(`<h1>Welcome World)</h1>`);
    response.end();
  }
}).listen(3000);