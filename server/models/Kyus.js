const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const kyusSchema = new Schema({
  kyuType: {
    type: String,
    required: true
  },
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
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  created: {
    type: String,
  },
  edited: {
    type: String
  }
});

module.exports = mongoose.model('Kyus', kyusSchema);
