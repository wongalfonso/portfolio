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
  kyus: [{
    type: Schema.Types.ObjectId, 
    ref: "Types"
  }]
})






module.exports = mongoose.model('Users', UserSchema);