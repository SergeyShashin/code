import http from 'http';

http.createServer((request, response) => {
	response.write('text1');
	response.end();
}).listen(3000);