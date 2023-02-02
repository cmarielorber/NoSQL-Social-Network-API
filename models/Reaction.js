const { Schema } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
    required: true
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleString()
  }
});

module.exports = reactionSchema;
