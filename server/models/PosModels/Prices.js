const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PricesSchema = new Schema({
  hot: [
    { name: "kids", price: Number },
    { name: "short", price: Number },
    { name: "tall", price: Number },
    { name: "grande", price: Number },
    { name: "venti", price: Number },
  ],
  cold: [
    { name: "tall", price: Number },
    { name: "grande", price: Number },
    { name: "venti", price: Number },
    { name: "trenta", price: Number },
  ]
})

module.exports = mongoose.model("Prices", PricesSchema);