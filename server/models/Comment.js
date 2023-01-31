const { Schema, model } = require('mongoose');

const commentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: false
  }
}, {
  timestamps: true
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
