const mongoose = require('mongoose')

let authorSchema = new mongoose.Schema({
    twitterHandler:{type:String, required:true},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true}
}, {timestamps:true})

 
module.exports = mongoose.model('author', authorSchema)