import http, { request } from 'http';
let i = 0;

/**
 * Пусть изначально наш счетчик имеет значение 100.
 * Каждый запрос уменьшайте это значение на единицу и отдавайте новое значение в браузер.
 * Как только счетчик дойдет до 100, выведите результатом запроса сообщение об этом.
 */

http.createServer((request, responce) => {
  responce.writeHead(200, {'Content-Type': 'text/html', 'Content-Language': 'ru'});
  i===10 ?  responce.write(`<h1>Quantity ${i++}</h1>`):responce.write(`<h1>${i++}</h1>`);
  responce.end();
}).listen(3000);