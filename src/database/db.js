//importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose() //isso está retornando um objeto

//criando o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
//utilizando o objeto de banco de dados para nosssa operações 
bd.serialize(() => {
    //criando uma tabela com comando SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //inserir dados na tabela
const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);        
    `
const values = [
    "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "Colectoria",
    "Guilherme Gemballa, Jardim América", 
    "Número 260", 
    "Santa Catarina",
    "Rio do Sul",
    "Resíduos eletronicos e lâmpadas"
]
    function adterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso!")
        console.log("this") //esse this referência a resposta do run()
    }
    db.run(query, values, afterInsertData)
        //consultar os dados da tabela

        //deletar um dado da tabela
    })