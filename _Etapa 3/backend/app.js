/************************************************************************************************
 SITE WEB - BACKEND ETAPA 3
************************************************************************************************/

// Recursos
var http = require('http'); // Recurso para http
var sqlite3 = require('sqlite3').verbose(); // Recurso para SQLite

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3000;


// Cria o servidor
var server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.get('SELECT * FROM tbUser WHERE userId = 1', [], (err, row) => { // Faz a consulta (query)
	  	res.end(JSON.stringify(row)); // Retorna o objeto
	});
	db.close(); // Fecha o banco
	
});

// Inicia o servidor
server.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
});




