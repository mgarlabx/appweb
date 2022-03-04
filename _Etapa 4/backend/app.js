/************************************************************************************************
 SITE WEB - BACKEND ETAPA 4
************************************************************************************************/

// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3000;

// Cria o servidor
var app = express();

// Rotas
app.post('/', (req, res) => {
	res.send('Hello POST!');
});
app.get('/', (req, res) => {
	res.send('Hello GET!');
});
app.put('/', (req, res) => {
	res.send('Hello PUT!');
});
app.delete('/', (req, res) => {
	res.send('Hello DELETE!');
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




