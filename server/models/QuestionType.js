const { Schema, model } = require('mongoose');

const questionTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  points: {
	type: Number,
	required: true
  }
}, {
  timestamps: true
});

const QuestionType = model('QuestionType', questionTypeSchema);

module.exports = QuestionType;
