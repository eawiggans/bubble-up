const { Schema, model } = require('mongoose');

const ScoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz'
  },
  score: {
    type: Number,
    required: true
  },
  dateOfCompletion: {
    type: Date,
    default: Date.now
  }
});

const Score = model('Score', ScoreSchema);

module.exports = Score;
