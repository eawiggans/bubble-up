const { Schema, model } = require('mongoose');

const questionSchema = Schema({
  type: {
    type: Schema.Types.ObjectId,
    ref: 'QuestionType',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  choices: [{
    type: String,
    required: false
  }],
  answer: {
    type: String,
    required: true
  },
  hint: [{
    type: String,
    required: false
  }],
  followUp: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: false
  },
  feedback: {
	  type: String,
    required: false
  },
  expectedTime: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
});

const Question = model('Question', questionSchema);

module.exports = Question;
