// need to setup api routes here for all the http calls...

// get express and make app and set ServerRouter to express.Router()

const express = require('express')
const app = express()
const ServerRouter = express.Router()
const async = require('async')

// get the db table where the data lives 
const Schema = require('./Schema')

// This is where my routes live 


ServerRouter.route('/api/todos').get((req,res) => {
    Schema.find({}).then(dt => res.json(dt))
                   .catch(er => res.json(er))
})

ServerRouter.route('/api/todos/completeall/:which').post((req,res) => {
        let which = req.params.which==='true'? true : false
        console.log(which)
        Schema.updateMany({}, {$set:{completed:which}})
          .then(dt => res.json(dt))
          .catch(er => res.json(er))
})

ServerRouter.route('/api/todos/:id').put((req,res) => {
    Schema.findByIdAndUpdate(req.params.id, req.body, {
        context:'query'
    }).then(dt => res.json(dt))
      .catch(er => res.json(er))
})


ServerRouter.route('/api/todos/:id').delete((req, res) => {
    Schema.findByIdAndRemove(req.params.id)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
})

ServerRouter.route('/api/todos/delete').post((req, res) => {
    let completed = req.body.todo.map(x => x._id)
    Schema.deleteMany({_id : { $in : completed}})
                .then(dt => res.json(dt))
                .catch(er => res.json(er))
})


ServerRouter.route('/api/todos').post((req,res) => {
    Schema.create(req.body).then(serve => res.json('server added successfully'))
                           .catch(er => res.json(er))
}) 





module.exports = ServerRouter