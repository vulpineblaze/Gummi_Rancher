
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Gummi = new Schema({
  name: {
    type: String
  },
  owner: {
    type: String
  },
  make_a_wish: {
    type: String
  }
},{
    collection: 'gummi'
});

module.exports = mongoose.model('Gummi', Gummi);