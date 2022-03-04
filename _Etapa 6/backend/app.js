/************************************************************************************************
 SITE WEB - BACKEND ETAPA 6
Não foram usados PUT e DELETE pois há algumas limitações com o Ajax do JQuery
************************************************************************************************/

// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save
var sqlite3 = require('sqlite3').verbose(); // Recurso para SQLite
var bodyParser = require('body-parser'); // Para parse do request. Ver mais em: http://expressjs.com/en/resources/middleware/body-parser.html 


// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3000;

// Cria o servidor
var app = express();

// Ativa resposta em JSON
app.use(express.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false })



/****** CRUD ******************************************************************/


// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.all('SELECT * FROM tbUser ORDER BY title COLLATE NOCASE', [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});


// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});


// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});





// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




