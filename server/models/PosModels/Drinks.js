const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DrinkSchema = new Schema({
  name: {
    type: String,    
  },
  price: {
    types: [{
      type: Schema.Types.ObjectId, ref: 'Prices'
    }]
  },
  ingredients: {
    type: Array,
  },
  color: {
    type: String
  }
})

module.exports = mongoose.model('Drinks', DrinkSchema);