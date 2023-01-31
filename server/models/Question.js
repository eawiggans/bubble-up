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
  choices: {
    type: [String]
  },
  answer: {
    type: String
  },
  feedback: {
	  type: String
  }
}, {
  timestamps: true
});

const Question = model('Question', questionSchema);

module.exports = Question;
