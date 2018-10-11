const express = require('express')
//const bp = require('body-parser')

const app = express()

app.set('port', 3001)

app.get('/api', (req,res) => {
    res.json([
        {_id:1},
        {_id:2}
    ])
})

app.get('/api/mark', (req,res) => {
    res.json([
        {name:'mark'},
        {name:'jt'},
        {name:'jim'},
        {name:'ruth'}
    ])
})


// will have to setup the schema which is the Server

// will have to setup the ServerRouter whcih is the routes

// as well I will need to pull body-parser and connect to the mongodb database 

/*
    setup flux, mongodb, api for routes on changing data

*/

app.listen(app.get('port'), () => {
    console.log('doing the good owrk')
})

