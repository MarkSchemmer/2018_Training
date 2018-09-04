const product = require('../models/model').product



function allProducts(req,res){
    product.find({})
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}


function createProduct(req, res){
    product.create(req.body)
        .then(dt => res.json(dt))
        .catch(er => res.json(er))
}


module.exports = { allProducts, createProduct }