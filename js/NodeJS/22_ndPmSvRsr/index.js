import http from 'http';
import fs from 'fs';

http.createServer(async (request, responce) => {
  let requestUrl = request.url;
  let data;
  let type;

  if (requestUrl !== '/favicon.ico') {
    if (requestUrl === '/') {
      data = await fs.promises.readFile('index.html', 'utf8');
      type='text/html';
    }

    if (requestUrl === '/job.png') {
      data = await fs.promises.readFile('job.png');
      type='image/png';
    }

    if (requestUrl === '/welcomeWorld.jpg') {
      data = await fs.promises.readFile('welcomeWorld.jpg');
      type='image/png';
    }

    responce.writeHead(200, {'Content-type': type })
    responce.write(data);
    responce.end();
  }
}).listen(3000);