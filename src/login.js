import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; //  


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // "user" o "cliente"
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación, como llamar a una API o servicio de autenticación
    if (email && password) {
      // Redirige al usuario a la página principal o a otra según el rol
      navigate('/');
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