const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,

  },
});

const City = mongoose.model('City', citySchema); // collection name 

module.exports = City;
