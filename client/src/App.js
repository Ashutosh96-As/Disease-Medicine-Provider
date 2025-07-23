import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DiseaseForm from './components/DiseaseForm';
import AppointmentForm from './components/AppointmentForm';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import AllDiseases from './components/AllDiseases'; // ✅ Imported
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Segoe UI, sans-serif' }}>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">
              🧬 DiseaseCare+
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/disease">Add Disease</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/appointment">Book Appointment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/alldiseases">All Diseases</Link> {/* ✅ Added */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disease" element={<DiseaseForm />} />
            <Route path="/appointment" element={<AppointmentForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/alldiseases" element={<AllDiseases />} /> {/* ✅ Route Added */}
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-light text-center py-3 mt-auto">
          <small className="text-muted">© 2025 DiseaseCare+ | All rights reserved</small>
        </footer>
      </div>
    </Router>
  );
}

export default App;
