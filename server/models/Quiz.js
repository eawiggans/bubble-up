const { Schema, model } = require('mongoose');

const quizSchema = new Schema({
  difficulty: {
    type: String,
    required: true
  },
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question'
  }],
  subject: {
    type: String,
    required: true
  },
  timeLimit: {
    type: Number,
    required: true
  }
});

const Quiz = model('Quiz', quizSchema);

module.exports = Quiz;
