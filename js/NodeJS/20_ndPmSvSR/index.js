import http from 'http';

// http.createServer((request, responce) => {

//   if (request.url !== '/favicon.ico') {
//     responce.writeHead(200, { 'Content-type': 'text/html' });

//     if (request.url === '/' || request.url === '/page1' || request.url === '/page2' || request.url === '/page3') {
//       responce.write(`<h1>Welcome World)</h2><p>${request.url}</p>`);
//     } else {
//       responce.write(`<p>${request.url}</p>`);
//     }

//     responce.end();
//   }

// }).listen(3000);

// http.createServer((request, response) => {
// 	if (request.url != '/favicon.ico') {
// 		let text;
// 		let status = 200;

// 		if (request.url == '/page1') {
// 			text = '1';
// 		}
// 		else if (request.url == '/page2') {
// 			text = '2';
// 		}
// 		else if (request.url == '/page3') {
// 			text = '3';
// 		} else {
// 			text = 'page not found';
// 			status = 404;
// 		}

// 		response.writeHead(status, {'Content-Type': 'text/html'});
// 		response.end();
// 	}
// }).listen(3000);

// 1. Перепишите код через оператор switch-case.
// http.createServer((request, response) => {
//   if (request.url != '/favicon.ico') {
//     let text = `<h1>${request.url}</h1>`;
//     let status = 200;

//     switch (request.url) {
//       case '/page1':
//         response.write(text);
//         break;
//       case '/page2':
//         response.write(text);
//         break;
//       case '/page3':
//         response.write(text);
//         break;
//       default:
//         response.write(text);
//         status = 404;
//     }

//     response.writeHead(status, { 'Content-Type': 'text/html' });
//     response.end();
//   }
// }).listen(3000);

/*
Дан объект с URL-лами и соответствующими им текстами страниц:
*/
let obj = {
  '/': 'Welcome world)',
  '/page1': '1',
  '/page2': '2',
  '/page3': '3',
}
/*
Сделайте сервер на основе этого объекта.
При запросе существующего в объекте адреса отдавайте соответствующий текст,
а при запросе отсутствующего - сообщение об ошибке и статус 404.
*/

http.createServer((request, responce) => {
  for (let linkPage in obj) {
    switch (linkPage) {
      case request.url:
        responce.writeHead(200, { 'Content-type': 'text/html' });
        responce.write(`<h1>${obj[linkPage]}</h1>`);
        responce.end();
        break;
        default:
          responce.writeHead(404, { 'Content-type': 'text/html' });
        break;
    }
  }
  responce.end();

}).listen(3000);