const Disease = require("../models/Disease");

// Get all diseases
const getAllDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.json(diseases);
  } catch (error) {
    res.status(500).json({ message: "Error getting diseases" });
  }
};

// Create a new disease
const createDisease = async (req, res) => {
  const { name, symptoms, description } = req.body;
  try {
    const disease = new Disease({ name, symptoms, description });
    await disease.save();
    res.status(201).json(disease);
  } catch (error) {
    res.status(400).json({ message: "Error creating disease", error });
  }
};

module.exports = { getAllDiseases, createDisease };
