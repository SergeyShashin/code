import http from 'http';
import fs from 'fs';

/**
 * 1. Создайте файл styles.css. Отдайте его по соответствующему запросу. Не забудьте правильно указать тип данных.
 * 2. Создайте файл script.js. Отдайте его по соответствующему запросу. Не забудьте правильно указать тип данных.
 * 3. Разместите у себя файл с фавиконкой, назвав его favicon.ico.
 * 4. Уберите в вашем коде условие для блокировки двойного запроса, а вместо этого отдавайте корректную фавиконку.
 *    Скопируйте приведенный код HTML страницы и разместите его в файле.
 *    Отдайте этот файл браузеру по соответствующему запросу.
 *    Сделайте так, чтобы браузер получил запрошенные им файлы ресурсов, на которые ссылается наша HTML страница.
 */

http.createServer(async (request, responce) => {
  let requestUrl = request.url;
  let data;
  let type;

  switch (requestUrl) {

    case '/':
      data = await fs.promises.readFile('index.html', 'utf8');
      type = 'text/html';
      break;

    case '/job.png':
      data = await fs.promises.readFile('job.png');
      type = 'image/png';
      break;

    case '/welcomeWorld.jpg':
      data = await fs.promises.readFile('welcomeWorld.jpg');
      type = 'image/png';
      break;

    case '/style.css':
      data = await fs.promises.readFile(requestUrl.replace(/\//, ''));
      type = 'text/css';
      break;

    case '/script.js':
      data = await fs.promises.readFile(requestUrl.replace(/\//, ''));
      type = 'text/html';
      break;
      
    case '/pageForTask4.html':
      data = await fs.promises.readFile(requestUrl.replace(/\//, ''));
      type = 'text/html';
      break;

    default:
      data = 'There is no such page yet.';
      type = 'text/html';
      break;
  }

  responce.writeHead(200, { 'Content-type': type });
  responce.write(data);
  responce.end();
}).listen(3000);