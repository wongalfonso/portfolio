const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ShotsSchema = new Schema({
  hot: [
    { name: String},
    { name: String},
    { name: String},
    { name: String},
    { name: String},
  ],
  cold: [
    { name: String},
    { name: String},
    { name: String},
    { name: String},
  ]
})

module.exports = mongoose.model('Shots', ShotsSchema);