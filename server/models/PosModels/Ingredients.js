const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const IngredientsSchema = new Schema({
  shots: {
    types: [{
      type: Schema.Types.ObjectId, ref: 'Shots'
    }]
  },
  milk: [{
    name: String,
    active: Boolean
  }],
  blonde: [{
    name: 'blonde',
    active: Boolean
  }],
  decaf: [{
    name: String,
    active: Boolean
  }],
  modifiedTemp: [{
    name: String, 
    active: Boolean,
  }],
  syrup: {
    types: [{
      type: Schema.Types.ObjectId, ref: 'Syrups'
    }]
  },
  custom: [{
    name: String,
    active: Boolean
  }]
})

module.exports = mongoose.model("Ingredients", IngredientsSchema);