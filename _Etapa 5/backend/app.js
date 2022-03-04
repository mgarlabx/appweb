/************************************************************************************************
 SITE WEB - BACKEND ETAPA 5
************************************************************************************************/

// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save
var sqlite3 = require('sqlite3').verbose(); // Recurso para SQLite


// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3000;

// Cria o servidor
var app = express();

// Ativa resposta em JSON
app.use(express.json());


// Retorna todos registros
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.all('SELECT * FROM tbUser ORDER BY LOWER(title)', [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});



/****** CRUD ******************************************************************/


// Insere um registro (é o C do CRUD - Create)
app.post('/user', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});


// Retorna um registro  (é o R do CRUD - Read)
app.get('/user', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database('dbUser.db'); // Abre o banco
	db.get('SELECT * FROM tbUser WHERE userId = ' + req.body.userId, [],  (err, row ) => {
		if (err) {
		    throw err;
		}
		res.json(row);
	});
	db.close(); // Fecha o banco
});


// Atualiza um registro (é o U do CRUD - Update)
app.put('/user', (req, res) => {
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
app.delete('/user', (req, res) => {
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




