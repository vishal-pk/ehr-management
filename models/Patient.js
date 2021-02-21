const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    unique: true
  },
  contactnum: {
    type: Number,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    default: Date.now
  },
  address: {
    type: String,
    required: true,
    unique: true
  },
});
module.exports = mongoose.model('patient', PatientSchema);
