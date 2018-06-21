const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  challenges: {
    type: Array,
  },
  dateCreated: {
    type: String,
  },
  lastLogin: {
    type: String
  },
  kyus: [{
    type: Schema.Types.ObjectId,
    ref: "Kyus"
  }]
})






module.exports = mongoose.model('Users', UserSchema);