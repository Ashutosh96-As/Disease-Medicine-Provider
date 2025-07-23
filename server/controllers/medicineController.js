// controllers/medicineController.js

const Medicine = require("../models/Medicine");
const Disease = require("../models/Disease");

// @desc    Get all medicines
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find().populate("forDisease", "name");
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: "Error fetching medicines", error });
  }
};

// @desc    Create a new medicine
const createMedicine = async (req, res) => {
  const { name, forDisease, dosage, sideEffects } = req.body;

  try {
    // Check if the referenced disease exists
    const disease = await Disease.findById(forDisease);
    if (!disease) {
      return res.status(404).json({ message: "Disease not found" });
    }

    const newMedicine = new Medicine({
      name,
      forDisease,
      dosage,
      sideEffects,
    });

    await newMedicine.save();
    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(400).json({ message: "Error creating medicine", error });
  }
};

module.exports = {
  getAllMedicines,
  createMedicine,
};
