import http from 'http';
import fs from 'fs';

/**
 * 1. Возьмите приведенный код и потестируйте его работу.
 * 2. Реализуйте показ 404 страницы в случае, если URL не соответствует файлу.
 *    Пусть 404 страница хранится в файле page/404/title.html и page/404/content.html.
 * 3. Добавьте к вашему коду работу с ресурсами.
 * 4. Кроме тайтла и контента на страницах сайта может также изменяться мета-описание (погуглите).
 *    Реализуйте возможность добавлять его к страницам сайта.
 * 5. Возьмите созданный вами в предыдущем уроке сайт из 6-ти страниц. Переделайте его в соответствии с данным уроком.
 */

http.createServer(async (request, response) => {
  let requestUrl = request.url;

  let lpath = `layout.html`;
  let cpath;
  let tpath;

  if (requestUrl === '/') {
    cpath = `content.html`;
    tpath = `title.html`;
  } else if (/^\/page/.test(requestUrl)) {
    tpath = `.${requestUrl}/title.html`;
    cpath = `.${requestUrl}/content.html`;
  } else {
    tpath = `./page/404/title.html`;
    cpath = `./page/404/content.html`;
  }

  let layout = await fs.promises.readFile(lpath, 'utf8');
  let title = await fs.promises.readFile(tpath, 'utf8');
  let content = await fs.promises.readFile(cpath, 'utf8');

  layout = layout.replace(/\{% get title %\}/, title);
  layout = layout.replace(/\{% get content %\}/, content);

  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write(layout);
  response.end();

}).listen(3000);