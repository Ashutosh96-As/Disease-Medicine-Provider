import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
return (
<div className="home-container">
<div className="welcome-card shadow">
<h1 className="main-title">👋 Welcome to Disease Medicine Portal</h1>
<p className="subtitle">New here? Please login or register to get started.</p>
<div className="auth-buttons">
<Link to="/login" className="home-btn login-btn">🔐 Login</Link>
<Link to="/register" className="home-btn register-btn">📝 Register</Link>
</div>
</div>
</div>
);
};

export default Home;