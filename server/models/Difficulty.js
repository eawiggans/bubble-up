const { Schema, model } = require('mongoose');

const difficultySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  pointModifier: {
	type: Float,
	required: true
  }
}, {
  timestamps: true
});

const Difficulty = model('Difficulty', difficultySchema);

module.exports = Difficulty;
