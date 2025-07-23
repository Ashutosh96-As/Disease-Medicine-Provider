const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const Appointment = require('./models/Appointment'); 
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (no need for useNewUrlParser or useUnifiedTopology)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Import routes
const diseaseRoutes = require('./routes/diseaseRoutes');
const medicineRoutes = require('./routes/medicineRoutes');

// Use routes
app.use('/api/diseases', diseaseRoutes);
app.use('/api/medicines', medicineRoutes);
app.use('/api/auth', authRoutes);

app.post('/api/appointments', async (req, res) => {
  try {
    const { name, doctor, date } = req.body;
    const newApp = new Appointment({ name, doctor, date });
    await newApp.save();
    res.status(201).json({ message: 'Appointment booked!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving appointment' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
