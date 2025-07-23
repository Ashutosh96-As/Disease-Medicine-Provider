// models/Disease.js

const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  symptoms: {
    type: [String], // array of symptoms
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Disease", diseaseSchema);
