const bp = require('body-parser')
const api = require('./controller')


function router(app){
    app.use(bp.json())

    app.get('/api/products', api.allProducts)
    
    app.post('/api/products', api.createProduct)
}


module.exports = { router }