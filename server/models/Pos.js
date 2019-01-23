const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PosSchema = Schema({
  name: String,
  types: [{
    type: Schema.Types.ObjectId, ref: 'DrinkCategories'
  }]
})

module.exports = mongoose.model('POS', PosSchema);