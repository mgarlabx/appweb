# Desenvolvimento de aplicação web com API RESTfull

## Descrição

Esse tutorial tem por objetivo demonstrar passo a passo a construção de uma aplicação simples, estruturada em duas partes: front-end e back-end. 

O front-end é a parte que o usuário visualiza. O back-end é a comunicação com a base de dados. Ambas partes estão conectadas através de uma API RESTfull.

O tutorial é composto de 7 etapas que mostram progressivamente a construção da aplicação.

## Conceitos básicos

**HTTP: Hypertext Transfer Protocol** - protocolo para troca de dados na Web através de mensagens ("requests"). Exemplos de mensagens HTTP são `GET`, `POST`, `PUT` e `DELETE`.

**URL: Uniform Resource Locator** - endereço web de recurso informático. Exemplo: quando se digita um determinado site em um navegador (Chrome, Edge, etc.), esse endereço é a URL e ao se pressionar `ENTER` está sendo feita uma requisição `GET` para o recurso dessa URL.
 
**API: Application Programming Interface** - camada de comunicação para que recursos de uma aplicação possam ser utilizados por outra aplicação.

**REST: Representational State Transfer** - arquitetura usada por APIs através de mensagens HTTP. 

**RESTfull** - expressão gramatical da capacidade de ser REST

**Webservice** - é um tipo de API, que usa recursos da rede. Uma API RESTfull é um webservice.

**Endpoint** - cada um dos pontos de uma API. Um endpoint é representado por uma URL (recurso) e um método (exemplos: `GET`, `POST`, `PUT` e `DELETE`). Uma API possui vários endpoints.

**JavaScript** - linguagem de programação utilizada em aplicações web.

**JSON - JavaScript Object Notation** - formato para troca de dados que usa o conceito `chave: valor`. 
Exemplo: `{nome: "João", idade: 24}`

**JQuery** - biblioteca de funções do JavaScript.

**Bootstrap** - biblioteca para desenvolvimento de front-ends web.


## Instalação

1. Baixar e instalar o Node.js: [https://nodejs.org/pt-br/](https://nodejs.org/pt-br/)
2. Baixar e instalar o DB Browser for SQLite: [https://sqlitebrowser.org/](https://sqlitebrowser.org/)
3. Baixar e instalar o Postman: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
3. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac) e digitar:  
`npm install sqlite3`  
`npm install express --save`
4. Baixar os códigos das 7 etapas do tutorial e salvar em uma pasta



## Etapa 0

### Descrição

Essa etapa tem por objetivo testar a instalação do Node.js e verificar se está funcionando corretamente. 

### Instruções

1) Criar um arquivo texto em uma pasta e salvar com o nome **app.js**.

2) Copiar e colar o conteúdo abaixo nesse arquivo.

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

3) Abrir o promt de comando (Windows) ou o Terminal (Mac) nessa pasta e digitar:

`node app.js`

4) Abrir o Chrome (ou outro navegador) e digitar:

`http://127.0.0.1:3000/`

4) Se tudo estiver correto, vai aparecer **Hello World**.




## Etapa 1

### Descrição

Essa etapa tem apenas front-end. Ela visa demonstrar o comando "Ajax" do JQuery utilizado para fazer requisições para endpoints de APIs. Nesse exemplo, será feita uma requisição `GET` para o endpoint `https://jsonplaceholder.typicode.com/todos/1`.

Esse é apenas um endpoint de demonstração e a requisição irá devolver um objeto json que será exibido no console do navegador.

### Instruções

1. Clicar em `index.html` na pasta `frontend` e observar o navegador exibir a expressão `delectus aut autem`.
2. Abrir o console e observar o objeto.

### Se quiser ir além...

Vá ao site [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) e escolha outros endpoints. Substitua no Ajax e veja o que acontece.

## Etapa 2

### Descrição

Nessa etapa será executado o primeiro back-end local. Ele está no arquivo app.js e basicamente devolve um objeto json, exatamente igual ao devolvido pelo endpoint do exercício anterior. Notar, também, que no front-end foi feita a substituição da URL.

### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end dessa etapa: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 
4. Clicar em `index.html` na pasta `frontend` e observar o navegador exibir a expressão `delectus aut autem`.
5. Abrir o console e observar o objeto.

### Se quiser ir além...

No arquivo `app.js`, altere a estrutura do objeto json e observe o que acontece.

## Etapa 3

### Descrição

Nessa etapa, o back-end irá devolver um objeto a partir de um banco de dados. Os dados estarão no arquivo `dbUser.db` e serão extraídos pela aplicação `app.js`. O front-end é o mesmo da Etapa 2.

### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end dessa etapa: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 
4. Clicar em `index.html` na pasta `frontend` da **Etapa 2** e observar o navegador exibir a expressão `delectus aut autem`.
5. Abrir o console e observar o objeto.

### Se quiser ir além...

Use o **DB Browser for SQLite** para abrir, analisar e alterar o arquivo `dbUser.db`. Rode a aplicação novamente para analisar o resultado. 

## Etapa 4

### Descrição

Essa etapa introduz novos tipos de requisições HTTP, usando o framework `express` do Node.js. Nessa etapa não há front-end. Será rodada a aplicação do back-end e a consulta aos endpoints será feita utilizando o aplicativo **Postman**.

### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end dessa etapa: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 
4. Acessar o Postman e fazer 4 requisições:  
`POST http://127.0.0.1:3000`  
`GET http://127.0.0.1:3000`  
`PUT http://127.0.0.1:3000`  
`DELETE http://127.0.0.1:3000`  
5. Observar o resultado

### Se quiser ir além...

No arquivo `app.js`, troque as mensagens das respostas e veja o resultado.

## Etapa 5

### Descrição

Nessa etapa serão feitas as requisições HTTP da etapa anterior, porém com acesso ao banco de dados. Nessa etapa também não há front-end. Será rodada a aplicação do back-end e a consulta aos endpoints será feita utilizando o aplicativo **Postman**.


### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end dessa etapa: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 

4. Acessar o Postman e fazer a requisição GET:  
`GET http://127.0.0.1:3000/users`  

5. Acessar o Postman e fazer a requisição POST:  
`POST http://127.0.0.1:3000/user`
colando no **body** esse json (clicar em RAW e formato JSON):
`{"title": "Teste Etapa 5"}`
  
6. Acessar o Postman e fazer a requisição PUT:  
`PUT http://127.0.0.1:3000/user`
colando no **body** esse json (clicar em RAW e formato JSON):
`{"title": "Novo Teste Etapa 5", "userId": 2}`


7. Acessar o Postman e fazer a requisição DELETE:  
`DELETE http://127.0.0.1:3000/user`
colando no **body** esse json (clicar em RAW e formato JSON):
`{"userId": 2}`

### Se quiser ir além...

Acompanhe os testes acima olhando o banco de dados pelo **DB Browser for SQLite**.

Se quiser saber mais sobre o SQLite no Node.js, veja em: [https://www.sqlitetutorial.net/sqlite-nodejs/](https://www.sqlitetutorial.net/sqlite-nodejs/)


## Etapa 6

### Descrição

A Etapa 6 é uma aplicação completa, com front-end. O back-end foi ligeiramente modificado com relação ao back-end da Etapa 5, para se adaptar melhor à aplicação.

### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end dessa etapa: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 
4. Clicar em `index.html` na pasta `frontend` e rodar a aplicação.

### Se quiser ir além...

Faça alterações no front-end, mude o visual. Acompanhe os resultados pelo banco de dados pelo **DB Browser for SQLite**.


## Etapa 7

### Descrição

Essa etapa introduz o **Bootstrap**, que é um framework para front-end de aplicações web. O front-end foi modificado para usar o Bootstrap, mas o back-end é o mesmo da etapa anterior.

### Instruções

1. Abrir o "Prompt de Comando" (Windows) ou "Terminal" (Mac).
2. Ir até a pasta em que está o back-end da **Etapa 6**: `cd <nome da pasta>/backend`
3. Rodar o back-end: `node app.js` 
4. Clicar em `index.html` na pasta `frontend` da **Etapa 7** e rodar a aplicação.

### Se quiser ir além...

Conheça mais sobre o Bootstrap em:[https://getbootstrap.com/](https://getbootstrap.com/). 

Baixe e teste temas prontos do Bootstrap em:  
[https://startbootstrap.com/](https://startbootstrap.com/)  
[https://bootstrapmade.com/](https://bootstrapmade.com/)  
[https://themefisher.com/](https://themefisher.com/)


