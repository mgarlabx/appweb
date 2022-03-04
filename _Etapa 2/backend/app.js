/************************************************************************************************
 SITE WEB - BACKEND ETAPA 2
************************************************************************************************/

// Recurso para http
var http = require('http');

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3000;

// Objeto que será retornado (idêntico ao gerado por https://jsonplaceholder.typicode.com/todos/1)
var obj = {
	userId: 1,
	id: 1,
	title: 'delectus aut autem',
	completed: false
};
obj = JSON.stringify(obj); // É preciso converter JSON em String usando a função JSON.stringify(). É o contrário de JSON.parse().

// Cria o servidor
var server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
	res.end(obj); // Retorna o objeto
});

// Inicia o servidor
server.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
});