import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
const [form, setForm] = useState({ email: '', password: '' });
const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
try {
const res = await axios.post('http://localhost:5000/api/auth/login', form);
alert("✅ Login successful");
localStorage.setItem("user", JSON.stringify(res.data));
navigate('/dashboard');
} catch (err) {
alert("❌ Login failed");
} finally {
setLoading(false);
}
};

return (
<div className="auth-container">
<h2>🔐 Login</h2>
<form onSubmit={handleSubmit}>
<input
type="email"
placeholder="📧 Email"
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
required
/>
<input
type="password"
placeholder="🔒 Password"
value={form.password}
onChange={(e) => setForm({ ...form, password: e.target.value })}
required
/>
<button type="submit" disabled={loading}>
{loading ? 'Logging in...' : '➡️ Login'}
</button>
</form>
<p className="toggle-link">
New here? <a href="/register">Register now</a>
</p>
</div>
);
};

export default LoginForm;