var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/registerapp')

exports.mongoose=mongoose;

var registers = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  phonenumber:String,
  createDate: {
    type: Date,
    default: Date.now
  }
})

exports.User = mongoose.model('User',registers,'users');
