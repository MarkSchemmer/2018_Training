const express = require('express');
const app = express()
const ServerPortRouter = express.Router()

const ServerPort = require('./ServerPort')



ServerPortRouter.route('/api/authors').post((req, res) => {
    ServerPort.create(req.body)
    .then(serve => res.json('Server Added Successfully'))
    .catch(err => res.status(400).send('unable to save to database'))
})


ServerPortRouter.route('/api/authors').get((req,res) => {
    ServerPort.find({})
    .then(data => res.json(data))
    .catch(er => res.json(er))
})


ServerPortRouter.route('/api/authors/:id').get((req,res) => {
    ServerPort.findById(req.params.id)
        .then(data => res.json(data))
        .catch(er => res.json(er))
})

ServerPortRouter.route('/api/authors/:id').patch((req,res) => {
    ServerPort.findByIdAndUpdate(req.params.id, req.body, {
        context:'query'
    }).then(data => res.json(data))
        .catch(er => res.json(er))
})

ServerPortRouter.route('/api/authors/:id').delete((req,res) => {
    ServerPort
        .findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(er => res.json(er))
})

module.exports = ServerPortRouter