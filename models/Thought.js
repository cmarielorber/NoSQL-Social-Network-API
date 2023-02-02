const { Schema, model } = require('mongoose');
const thoughtSchema = require('./thoughts');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleString()
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
