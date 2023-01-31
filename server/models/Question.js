const questionSchema = new mongoose.Schema({
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Type',
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
