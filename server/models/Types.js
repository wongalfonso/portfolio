const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TypesSchema = new Schema({
    difficulty: {
        type: String, 
        required: true
    },
    challenges: [{
        type: Schema.Types.ObjectId, 
        ref: "Challenges"
    }]
})

module.exports = mongoose.model("Types", TypesSchema)