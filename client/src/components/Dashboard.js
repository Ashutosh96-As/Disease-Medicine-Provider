import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Optional custom styling

function Dashboard() {
  const [diseases, setDiseases] = useState([]);
  const [search, setSearch] = useState('');
  const [medicineFilter, setMedicineFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get('http://localhost:5000/api/diseases')
      .then(response => {
        setDiseases(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching diseases:', error);
        setLoading(false);
      });
  }, []);

  // Unique medicine list for dropdown
  const allMedicines = [...new Set(
    diseases.flatMap(d => d?.medicines?.split(',').map(m => m.trim()))
  )].filter(Boolean);

  // Find most common medicine
  const medicineCount = {};
  diseases.forEach(d => {
    d?.medicines?.split(',').forEach(m => {
      const med = m.trim();
      if (med) {
        medicineCount[med] = (medicineCount[med] || 0) + 1;
      }
    });
  });
  const mostCommonMedicine = Object.entries(medicineCount)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

  // Filter & sort logic
  const filteredDiseases = diseases
    .filter(d =>
      (d?.diseaseName || '').toLowerCase().includes(search.toLowerCase()) &&
      (!medicineFilter || d?.medicines?.toLowerCase().includes(medicineFilter.toLowerCase()))
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      return (a[sortField] || '').localeCompare(b[sortField] || '');
    });

  return (
    <div className="container my-4">
      <div className="mb-4 p-4 bg-light rounded shadow-sm">
        <h2 className="text-primary">👋 Welcome, {user?.name || 'User'}</h2>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> {user?.role}</p>
        <div className="mt-3">
          <a href="/appointment" className="btn btn-outline-primary me-2">📅 Book Appointment</a>
          <a href="/appointments" className="btn btn-outline-success">🧾 View Appointments</a>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row mb-4 text-center">
        <div className="col-md-4 mb-2">
          <div className="card border-info shadow-sm">
            <div className="card-body">
              <h5>Total Diseases</h5>
              <h3 className="text-info">{diseases.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card border-success shadow-sm">
            <div className="card-body">
              <h5>Unique Medicines</h5>
              <h3 className="text-success">{allMedicines.length}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="card border-warning shadow-sm">
            <div className="card-body">
              <h5>Most Common Medicine</h5>
              <h4 className="text-warning">{mostCommonMedicine}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-3">
        <input
          type="text"
          placeholder="🔍 Search disease..."
          className="form-control w-25"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select w-25"
          value={medicineFilter}
          onChange={(e) => setMedicineFilter(e.target.value)}
        >
          <option value="">Filter by Medicine</option>
          {allMedicines.map((med, idx) => (
            <option key={idx} value={med}>{med}</option>
          ))}
        </select>
        <select
          className="form-select w-25"
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="diseaseName">Disease Name</option>
          <option value="medicines">Medicine</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading data...</p>
        </div>
      ) : (
        <div className="table-responsive shadow-sm">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>Disease</th>
                <th>Symptoms</th>
                <th>Medicines</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredDiseases.length > 0 ? (
                filteredDiseases.map((disease, index) => (
                  <tr key={index}>
                    <td>{disease.diseaseName || '—'}</td>
                    <td>{disease.symptoms || '—'}</td>
                    <td>{disease.medicines || '—'}</td>
                    <td>{disease.description || '—'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    No matching diseases found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
