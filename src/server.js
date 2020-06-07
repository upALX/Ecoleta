const express = require("express")
const serverApp = express()

//Configurando a pasta publica
serverApp.use(express.static("public"))

//utilizando template engine: nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: serverApp,
    noCache: true
})
//configurando os caminhos da minha aplicação
serverApp.get("/", (require, response) => {
    return response.render("index.html") // esse ".render" é por conta do nunjucks. E como temos o nunjucks para renderizar, não precisamos fazer o caminho inteiro de pastas.  Temos o express ligado ao nunjucks.
})
serverApp.get("/create-point", (require, response) =>{
    return response.render("create-point.html")  
})//aqui estou fazendo uma requisição de rota, não de arquivos
serverApp.get("/search", (require, response) =>{
    return response.render("search-results.html")  
})

//Startando o servidor
serverApp.listen(3000) //aqui é a porta onde o servidor vai abrir a aplicação