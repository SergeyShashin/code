import http from 'http';
import fs from 'fs';

/**
 * 1. Рееализуйте описанный статический сервер.
 * 2. Сделайте так, чтобы 404 страница тоже бралась из файла, например, из файла root/404.html.
 * 3. При обращении к папке URL со слешем /dir/sub/ и без слеша считаются одинаковым /dir/sub и оба ведут на index папки.
 *    Проверьте, как наш сервер справляется с этим. Если есть какие-то проблемы - исправьте их.
 * 4. Скопируйте функцию getMimeType из учебника. Исправьте код вашего сервера, используя эту функцию.
 * 5. Сделайте сайт о вашем городе. Пусть сайт состоит из 6-ти HTML страниц.
 *    К этим страницам должен быть подключен общий CSS файл, общий JavaScript файл, добавлены картинки.
 *    На каждой странице должна быть менюшка, с помощью которой можно будет перемещаться по страницам сайта.
 * 6. Уберите из ваших адресов расширения HTML файлов.
 */

http.createServer(async (request, response) => {
  if (request.url != '/favicon.ico') {
    let text;
    let status;
    let path = 'root' + request.url;
    // let pathPageError = 'root/404.html';

    try {

      if ((await fs.promises.stat(path)).isDirectory()) {
        path += '/index.html';
      }

      text = await fs.promises.readFile(path, 'utf8');
      status = 200;

    } catch (e) {
      status = 404;
      // text = await fs.promises.readFile(pathPageError, 'utf8');
      text = 'page not found';
    }

    response.writeHead(status, { 'Content-Type': getMimeType(path) });
    response.write(text);
    response.end();
  }
}).listen(3000);

function getMimeType(path) {
  let mimes = {
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    json: 'application/json',
    js: 'text/javascript',
    css: 'text/css',
    ico: 'image/x-icon',
  };

  let extensions = Object.keys(mimes);
  let rgxp = new RegExp(`\\.(${extensions.join('|')})$`);
  let extension = path.match(rgxp);

  return extension ? mimes[extension[1]] : 'text/plain'
}

