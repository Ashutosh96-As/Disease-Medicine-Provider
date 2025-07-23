// src/components/DiseaseForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function DiseaseForm() {
  const [name, setName] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/diseases', {
        name,
        symptoms: symptoms.split(',').map(s => s.trim()),
        description
      });

      setMessage(`✅ Disease "${response.data.name}" added successfully!`);
      setName('');
      setSymptoms('');
      setDescription('');
    } catch (err) {
      setMessage(`❌ Error: ${err.response?.data?.message || err.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a Disease</h2>
      <form onSubmit={handleSubmit}>
        <label>Disease Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Symptoms (comma separated):</label>
        <input type="text" value={symptoms} onChange={(e) => setSymptoms(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default DiseaseForm;
