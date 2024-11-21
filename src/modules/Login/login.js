import React, { useState } from 'react';
import './login.css'; //  
import { login } from './services/loginService';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(email, password);
      setMessage(result.message || "Inicio de sesión exitoso.");
      setIsError(false); // Éxito
      setEmail("");
      setPassword("");

      // Aquí puedes redirigir al usuario o guardar el token
      console.log("Datos del usuario:", result);
    } catch (error) {
      setMessage(error); // Mostrar mensaje de error
      setIsError(true); // Indicar que hubo un error
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {message && (
        <p style={{ color: isError ? "red" : "green" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;