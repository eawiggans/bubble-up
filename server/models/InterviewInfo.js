const { Schema, model } = require('mongoose');

const interviewInfoSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  resFeedback: {
    type: String,
    required: true
  },
  commFeedback: [{
    type: String,
    required: true
  }]
}, {
  timestamps: true
});

const InterviewInfo = model('InterviewInfo', interviewInfoSchema);

module.exports = InterviewInfo;
