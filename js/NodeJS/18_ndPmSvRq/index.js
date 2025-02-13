import http from 'http';

http.createServer((request, responce) => {
  // request.url='https://www.google.com/';
  console.log(request.url);
  console.log(request.method);
  // console.log(request.headers);
  console.log(request.headers.host);
  responce.writeHead(200, { 'Content-type': 'text/html' });
  responce.write('<h1>Welcome WORLD)</h1>');
  responce.end();
}).listen(3000);