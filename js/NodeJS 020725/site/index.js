
import { match } from 'assert';
import { readFile, writeFile, promises } from 'fs';
import http from 'http';

http.createServer(async (request, response) => {
  // let requestURL = request.url;
  let status = 200;
  let type = 'text/html';
  let encondingFile = 'utf8';
  let elementsFolderPath = 'elements';

  let indexHTMLMainFile = await promises.readFile('index.html', encondingFile);

  indexHTMLMainFile = indexHTMLMainFile.replace(/{% get element '(.+?)' %}/g, async (match0, match1) => await promises.readFile(`elements/${match1}.html`, encondingFile));

  response.writeHead(status, { 'Content-type': type });
  response.write(indexHTMLMainFile);
  response.end();

}).listen(3000);