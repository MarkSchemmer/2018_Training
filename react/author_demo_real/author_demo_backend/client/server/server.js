const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bp = require('body-parser')
const PORT = 3001
const cors = require('cors')

const config = require('./DB')
const ServerPortRouter = require('./ServerPortRouter')

mongoose.connect(config.DB).then(
    () => {console.log('database connected')},
    err => { console.log('can not connect to database ', err)}
)


app.use(cors())
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())

app.use('/port', ServerPortRouter)

app.listen(PORT, () => {
      console.log(`doing the good work on PORT: ${PORT}`)
})