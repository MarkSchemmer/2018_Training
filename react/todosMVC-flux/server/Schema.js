// mongodb schema here

const mongoose = require('mongoose')

let todoSchema = new mongoose.Schema({
    todo : {type:String, required:true, minlength:5},
    completed : {type:Boolean, required:true, default:false}
}, {timestamps:true})


module.exports = mongoose.model('todo', todoSchema)