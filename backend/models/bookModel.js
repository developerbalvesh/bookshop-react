const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    bookPrize:{
        type: Number,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('Books',bookSchema)