import http from 'http';
import fs from 'fs/promises';

import qs from 'querystring';
import formidable from 'formidable';
import routes from './server.js'

import config from './config.js';

console.log('Test HTTP server started, open http://localhost:' + config.port + '/');

http.createServer(async (request, response) => {
	let root = 'public';
	
	let [url, querystring = ''] = request.url.split('?');
	url = normalize(url);
	
	let text = '';
	let code = 200;
	
	if (routes[url]) {
		let handler = routes[url];
		
		let body;
		let post;
		
		// todo: не работает совместно
		if (request.headers['content-type'] === 'application/json') {
			body = await getBody(request);
			post = body;
		} else {
			post = await getPost(request);
			body = {};
		}
		
		let get  = qs.parse(querystring);
		
		text = String(handler({get, post, body}, response));
		
		if (!response.getHeader('Content-Type')) {
			response.setHeader('Content-Type', 'text/html');
		}
	} else {
		let path = getPath(root, url);
		response.setHeader('Content-Type', getMimeType(path));
		
		try {
			text = await fs.readFile(path, 'utf-8');
		} catch (error) {
			code = 404;
			text = `Page '${path}' not found`;
		}
	}
	
	response.statusCode = code;
	response.write(text ? text : '');
	response.end();
	
}).listen(config.port);

function getPost(request) {
	return new Promise((resolve, reject) => {
		if (request.method == 'POST') {
			let form = new formidable.IncomingForm();

			form.parse(request, function(err, fields, files) {
				if (err) {
					reject(err.message);
					return;
				}
				
				resolve(fields);
			});
		} else {
			resolve({});
		}
	});
}

function getBody(request) {
	return new Promise((resolve, reject) => {
		let body = [];
		
		request.on('data', chunk => {
			body.push(chunk);
		}).on('end', () => {
			body = Buffer.concat(body).toString();
			resolve(body);
		});
	});
}

function normalize(url) {
	url =  '/' + url.replace(/^\/|\/$/g, '');
	
	if (url !== '/' && !/\.[^/]+?/.test(url)) {
		url = url + '/';
	}
	
	return url;
}
function getPath(root, url) {
	if (url.match(/\/$/)) {
		url = url + 'index.html';
	}
	
	return root + url;
}
function getMimeType(path) {
	let mimes = {
		html: 'text/html',
		jpeg: 'image/jpeg',
		jpg:  'image/jpeg',
		png:  'image/png',
		svg:  'image/svg+xml',
		json: 'application/json',
		js:   'text/javascript',
		css:  'text/css',
		ico:  'image/x-icon',
	};
	
	let exts = Object.keys(mimes);
	let extReg = new RegExp('\\.(' + exts.join('|') + ')$');
	
	let ext = path.match(extReg)[1];
	
	if (ext) {
		return mimes[ext];
	} else {
		return 'text/plain';
	}
}

