// models/Medicine.js

const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  forDisease: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Disease", // foreign key reference
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  sideEffects: {
    type: [String],
    default: [],
  }
});

module.exports = mongoose.model("Medicine", medicineSchema);
