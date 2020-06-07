//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose() //isso está retornando um objeto

//criando o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
//utilizando o objeto de banco de dados para nosssa operações 
bd.serialize(() => {
    //criando uma tabela com comando SQL
    db.run(`
        CREATE TABLE IF NOT EXIST places();
    `)
    //inserir dados na tabela

    //consultar os dados da tabela

    //deletar um dado da tabela
})