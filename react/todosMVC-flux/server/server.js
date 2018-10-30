const express = require('express')
//const bp = require('body-parser')
const db = require('./DB').DB
const mongoose = require('mongoose')
const bp = require('body-parser')
const app = express()
const PORT = 3001

/*
    The ServerPort is the same as the Schema but for now I will be refering to the 
    ServerPort as Schema 

    The Schema is basically the document that is stored in the database

    and the ServerRouter is equal to a express.Router()

    and will call Schema/ServerPort for data from the database.
*/


// need to call router function witch will be my api
const ServerRouter = require('./ServerRouter')

// need to connect to the database...
mongoose.connect(db).then(
    () => { console.log('database connected success')},
    err => { console.log(`can't connect to database err ${err}`)}
)


app.use(bp.urlencoded({extended:true}))
app.use(bp.json())


app.use(ServerRouter)


// app.get('/api', (req,res) => {
//     res.json([
//         {_id:1},
//         {_id:2}
//     ])
// })

// app.get('/api/mark', (req,res) => {
//     res.json([
//         {name:'mark'},
//         {name:'jt'},
//         {name:'jim'},
//         {name:'ruth'}
//     ])
// })


// will have to setup the schema which is the Server

// will have to setup the ServerRouter whcih is the routes

// as well I will need to pull body-parser and connect to the mongodb database 

/* setup flux, mongodb, api for routes on changing data */

app.listen(PORT, () => {
    console.log('doing the good owrk')
})

