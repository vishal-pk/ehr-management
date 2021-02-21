const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pid: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('appointment', AppointmentSchema);
