const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CodeWarChallengesSchema = new Schema({
    name: {
      type: String, 
      required: true
    },
    instructions: {
      type: String, 
      required: true
    },
    thinking: {
      type: String, 
      required: true
    },
    answer: {
      type: String, 
      required: true
    }
})

module.exports = mongoose.model("CodeWars", CodeWarChallengesSchema)