const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:Array,
})

module.exports = mongoose.model('user',userSchema);