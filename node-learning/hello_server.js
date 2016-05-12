var http = require('http');

var atendeRequisicao = function (request,response) {
	 response.writeHead(200,{'Content-Type' : 'text/html'});
	 response.write('<h1>OH Yeah!</h1>');
	 response.end();
};

var server = http.createServer(atendeRequisicao);

var servidorRodando = function(){
	console.log('filé');
}
server.listen(3000,servidorRodando);