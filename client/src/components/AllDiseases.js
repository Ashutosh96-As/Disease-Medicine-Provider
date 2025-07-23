import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AllDiseases.css'; // optional for custom styling

function AllDiseases() {
  const [diseases, setDiseases] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDiseases = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/diseases');
        setDiseases(res.data);
        setFiltered(res.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Failed to fetch diseases.");
        setLoading(false);
      }
    };

    fetchDiseases();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filteredList = diseases.filter((d) =>
      d.name.toLowerCase().includes(term)
    );
    setFiltered(filteredList);
  };

  const toggleSort = () => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(order);
    const sorted = [...filtered].sort((a, b) =>
      order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFiltered(sorted);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary mb-4">🦠 All Diseases</h2>

      <div className="row mb-3 justify-content-between">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search disease by name..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-4 text-md-end mt-2 mt-md-0">
          <button className="btn btn-outline-primary" onClick={toggleSort}>
            Sort: {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-info" role="status" />
          <p>Loading diseases...</p>
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && filtered.length === 0 && (
        <div className="alert alert-warning">No diseases found.</div>
      )}

      <div className="row">
        {filtered.map((disease, idx) => (
          <div className="col-md-6 col-lg-4 mb-4" key={idx}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title text-success">{disease.name}</h5>
                <p className="card-text"><strong>Symptoms:</strong> {disease.symptoms.join(', ')}</p>
                <p className="card-text"><strong>Description:</strong> {disease.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllDiseases;
