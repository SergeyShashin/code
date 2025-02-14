import http from 'http';
import fs from 'fs';

// http.createServer(async (request, responce) => {

//   let page = await fs.promises.readFile('home.html', 'utf8');

//   if (request.url !== 'favicon.ico') {
//     responce.writeHead(200, { 'Content-type': 'text/html' });
//     responce.write(page);
//     responce.end();
//   }
// }).listen(3000);


/*
Дан объект с URL-лами и соответствующими им именам HTML страниц:
*/

let obj = {
  '/': 'home.html',
  '/page1': 'file1.html',
  '/page2': 'file2.html',
  '/page3': 'file3.html',
}

/*
Сделайте сервер на основе этого объекта.
При запросе существующего в объекте адреса отдавайте соответствующую страницу,
а при запросе отсутствующего - сообщение об ошибке и статус 404.
*/

http.createServer(async (request, responce) => {

  let requestUrl = request.url;
  if (requestUrl !== 'favicon.ico' && Object.keys(obj).includes(requestUrl)) {
    let page = await fs.promises.readFile(obj[requestUrl], 'utf8');
    responce.writeHead(200, { 'Content-type': 'text/html' });
    responce.write(page);
    responce.end();
  } else {
    responce.write('<h2>Такой страницы пока нет.</h2>');
    responce.writeHead(404, { 'Content-type': 'text/html' });
    responce.end();
  }
}).listen(3000);