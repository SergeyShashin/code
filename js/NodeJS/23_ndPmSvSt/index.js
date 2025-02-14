import http from 'http';
import fs from 'fs';

/**
 * 1. Рееализуйте описанный статический сервер.
 */
http.createServer(async (request, response) => {
  if (request.url != '/favicon.ico') {
    let text;
    let status;
    let path = 'root' + request.url;

    try {
      if ((await fs.promises.stat(path)).isDirectory()) {
        path += '/index.html';
      }

      status = 200;
      text = await fs.promises.readFile(path, 'utf8');
    } catch (err) {
      status = 404;
      text = 'page not found';
    }

    response.writeHead(status, { 'Content-Type': 'text/html' });
    response.write(text);
    response.end();
  }
}).listen(3000);