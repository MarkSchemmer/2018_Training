const mongoose = require('mongoose')


let productSchema = new mongoose.Schema({
        name: {
                 type:String,required:true, 
                 minlength:[4,"Product's name must be at least 4"], 
                 maxlength:[25, "Product name cannot be longer than 25 chars"]
        },
        code : { 
                type : String, 
                required : true
        },
        description : { 
                type : String, 
                required : true, 
                minlength : [10, "Description must be longer than 10 chars"]
        },
        availability : { 
                 type : Date,
                 required : true, 
                 validate : (v) => v > Date.now() 
        },
        rating : { 
                type : Number, 
                required : true, 
                min : [0, "Must be greater than 0"], 
                max : [5, "Must be "] 
        },
        image : { type : String, required : true },
}, {timestamps:true})



let product = mongoose.model('Product', productSchema) 


module.exports = { product }