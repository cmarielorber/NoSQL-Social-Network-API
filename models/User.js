const { Schema, model } = require('mongoose');
const userSchema = require('./users');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    thoughts: [{
      type: mongoose.Types.ObjectId,
      ref: "Thought"
    }],
    friends: [{
      type: mongoose.Types.ObjectId,
      ref: "User"
    }]
  });

const User = model('user', userSchema);

module.exports = User;
