const mongoose = require('mongoose');

const DrinkTypesSchema = mongoose.Schema({
  name: String,
  types: [{
    type: Schema.Types.ObjectId, ref: 'Drinks'
  }]
});

module.exports = mongoose.model('DrinkTypes', DrinkTypesSchema);
