const express = require("express")
const serverApp = express()
const database = require("./database/db.js")

serverApp.use(express.static("public"))
serverApp.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: serverApp,
    noCache: true
})

serverApp.get("/", (req, response) => {
    return response.render("index.html") 
})

serverApp.get("/create-point", (req, response) => {
    return response.render("create-point.html")
})

serverApp.post("/savepoint", (req, response) => {
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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    function afterInsertData(error){
        if(error){
            return console.log(error)
            return response.send("Erro no cadastro!")
        }
        console.log('Cadastrado com sucesso')
        console.log(this)
            return response.send("create-point.html", {saved: true})
    }
    database.run(query, values, afterInsertData)
})


serverApp.get("/search", (req, response) => {
    const search = req.query.search
    if(search == ""){
        return response.render("search-results.html", {total: 0})
    }
        database.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(error, rows){
            if(error){
                console.log(error)
            }
        const total = rows.length
        return response.render("search-results.html", {places: rows, total})
        })
})

serverApp.listen(3000)