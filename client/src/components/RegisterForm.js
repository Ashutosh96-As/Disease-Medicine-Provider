import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
const [form, setForm] = useState({
name: '',
email: '',
password: '',
role: 'patient',
});

const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
setLoading(true);
try {
await axios.post('http://localhost:5000/api/auth/register', form);
alert('✅ Registered successfully');
navigate('/login');
} catch (err) {
alert('❌ Registration failed');
} finally {
setLoading(false);
}
};

return (
<div className="auth-container">
<div className="auth-card">
<h2>📝 Create Your Account</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="👤 Name"
value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
required
/>
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
<select
value={form.role}
onChange={(e) => setForm({ ...form, role: e.target.value })}
>
<option value="patient">🧍 Patient</option>
<option value="admin">🧑‍⚕️ Admin</option>
</select>
<button type="submit" disabled={loading}>
{loading ? 'Registering...' : '🚀 Register'}
</button>
</form>
<p className="auth-footer">
Already have an account? <a href="/login">Login here</a>
</p>
</div>
</div>
);
};

export default RegisterForm;