const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    phone:Number
},{timesamps:true})

module.exports = mongoose.model('user',userSchema)