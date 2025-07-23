const express = require('express');
const router = express.Router();
const Disease = require('../models/Disease');

// POST: Add a disease
router.post('/', async (req, res) => {
    try {
        const { name, symptoms, description } = req.body;
        const disease = new Disease({ name, symptoms, description });
        await disease.save();
        res.status(201).json(disease);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add disease' });
    }
});

// GET: Fetch all diseases
router.get('/', async (req, res) => {
    try {
        const diseases = await Disease.find();
        res.status(200).json(diseases);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch diseases' });
    }
});

module.exports = router; // ✅ Always export at the end
