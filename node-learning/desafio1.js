var http = require('http');

var url = require('url');

var fs = require('fs');

var server = http.createServer(function (request,response) {
	 response.writeHead(200,{'Content-Type' : 'text/html'});
	 var result = url.parse(request.url);
	 console.log(result.path);
	 if(result.path == '/'){
	 	fs.readFile('./artigos.html',function (err,html) {
		 	response.end(html);
	 	});		
	 }else if(result.path == '/artigo'){
		fs.readFile('./artigos.html',function (err,html) {
		 	response.end(html);
	 	});	
	 }else if(result.path == '/contato'){
	 	fs.readFile('./contato.html',function (err,html) {
		 	response.end(html);
	 	});	
	 }else{
	 	fs.readFile('./erro.html',function (err,html) {
		 	response.end(html);
	 	});	
	 }
});

server.listen(3000,function () {
	 console.log('file');
});

