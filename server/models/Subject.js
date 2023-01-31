const { Schema, model } = require('mongoose');

const subjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
}, {
  timestamps: true
});

const _ = model('', subjectSchema);

module.exports = _;
