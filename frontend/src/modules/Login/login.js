import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; //  
import { login } from './services/loginService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const data = await login(email, password);
        alert(data.message); // Muestra el mensaje de éxito
        navigate('/'); // Redirige al usuario
      } catch (error) {
        alert(error.message); // Muestra el mensaje de error del backend
      }
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="role">Tipo de usuario:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Usuario</option>
          <option value="cliente">Cliente</option>
        </select>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;