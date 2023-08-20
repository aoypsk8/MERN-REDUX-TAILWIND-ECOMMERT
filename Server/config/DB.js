const mongoose = require('mongoose')

const connectDB = async =()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/mren")
        console.log("Connect database success");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB