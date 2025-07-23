// routes/medicineRoutes.js

const express = require("express");
const router = express.Router();
const {
  getAllMedicines,
  createMedicine,
} = require("../controllers/medicineController");

// GET /api/medicines
router.get("/", getAllMedicines);

// POST /api/medicines
router.post("/", createMedicine);

module.exports = router;
