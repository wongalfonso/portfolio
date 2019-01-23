const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrinkCategoriesSchema = new Schema({
  name: String,
  types: [{
    type: Schema.Types.ObjectId, ref: 'DrinkTypes'
  }]
});

module.exports = mongoose.model('DrinkCategories', DrinkCategoriesSchema);