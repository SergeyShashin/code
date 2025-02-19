import http from 'http';
import fs from 'fs';

/**
 * 1. Разберите приведенный мною код. Напишите текст, в котором вы объясните работу этого кода.
 * 2. Добавьте этот код к коду сервера, созданному вами в предыдущем уроке.
 * 3. Возьмите созданный вами сайт из 6-ти страниц и разделите шаблон сайта на элементы. 
 */


http.createServer(
  async (request, response) => {
    let encoding = 'utf8';
    let statusResponce = 200;
    let typeContent = 'text/html';
    let requestUrl = request.url;
    let lpath = 'layout.html';
    let tpath = 'title.html';
    let cpath = 'content.html';

    if (/^\/page/.test(requestUrl)) {
      tpath = `.${requestUrl}/title.html`;
      cpath = `.${requestUrl}/content.html`;
    }

    let layout = await fs.promises.readFile(lpath, encoding);

    let title = await fs.promises.readFile(tpath, encoding);
    let content = await fs.promises.readFile(cpath, encoding);

    layout = layout.replace(/\{% get title %\}/, title);
    layout = layout.replace(/\{% get content %\}/, content);

    layout = layout.replace(/\{% get elem '(.+?)' %\}/g, async (match0, match1) => {
      let result = await fs.promises.readFile(`./elems/${match1}.html`, encoding)
      console.log(typeof result);
      // console.log(layout);
      return result;
    });

    response.writeHead(statusResponce, { 'Content-type': typeContent });
    response.write(layout);
    response.end();
  }
).listen(3000);