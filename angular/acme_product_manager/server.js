const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const router = require('./server/config/routes').router


const app = express()


app.use(express.static(__dirname+"/client/dist/client"))
app.set('views', path.join(__dirname,'/client/dist/client'))
app.set(mongoose.connect('mongodb://localhost/acme_products'), {useNewUrlParser:true})



 router(app)


app.all("*", (req,res,next)  => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
})

app.listen(8000, () => console.log('doing the good work'))