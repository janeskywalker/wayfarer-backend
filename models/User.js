const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  signup_date: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema); // collection name 

module.exports = User;
