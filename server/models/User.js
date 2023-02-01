const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  scores: [{
    type: Schema.Types.ObjectId,
    ref: 'Score',
    required: false
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: false
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment',
    required: false
  }]
});

const User = model('User', userSchema);

module.exports = User;
