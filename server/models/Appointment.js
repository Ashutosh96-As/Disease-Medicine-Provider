const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: String,
  doctor: String,
  date: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
