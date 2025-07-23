import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      // Assuming you’ll create /api/appointments route in backend
      await axios.post('http://localhost:5000/api/appointments', {
        name,
        doctor,
        date
      });
      setMessage("✅ Appointment booked successfully!");
      setName('');
      setDoctor('');
      setDate('');
    } catch (err) {
      setMessage("❌ Error booking appointment.");
    }
  };

  return (
    <div className="form-container">
      <h2>Book Appointment</h2>
      <form onSubmit={handleAppointment}>
        <label>Patient Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Doctor Name:</label>
        <input type="text" value={doctor} onChange={(e) => setDoctor(e.target.value)} required />

        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <button type="submit">Book</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default AppointmentForm;
