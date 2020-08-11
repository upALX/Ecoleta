const sqlite3 = require('sqlite3').verbose()
const database = new sqlite3.Database('./src/database/database.db')
module.exports = database

//database
database.serialize(() =>{
/*
    database.run(`
        CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)    
    const query = `
    INSERT INTO places (
        image, 
        name, 
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);`

    const values = [
        "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "Pappersider",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos eletronicos, lâmpadas"
    ]
    function afterInsertData(error){
        if(error){
            return console.log(error)
        }
        console.log('sucessful cadaster!')
        console.log(this)
    }
    database.run(query, values, afterInsertData)
        database.run(`DELETE FROM places WHERE id = ?`, [5], function(error){
        if(error){
            console.log(error)
        }
        console.log('Deleted!')
    })
 Command to delete dates  
   database.all(`SELECT * FROM places`, function(error, rows){
        if(error){
            console.log(error)
        }
        console.log('Your registers: ')
        console.log(rows)
    }) */
})