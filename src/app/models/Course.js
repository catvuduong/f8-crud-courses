const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 600 },
  createAtt: { type: Date, default: Date.now },
  updateAtt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course, 'course');
