import React, { useState } from "react";
import { registerUser } from "./services/registerService";
import './register.css'
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const result = await registerUser(email, password);
        setMessage(result.message || "Usuario registrado exitosamente.");
        setIsError(false); // Éxito
        setEmail("");
        setPassword("");
      } catch (error) {
        setMessage(error); // Muestra el error devuelto por el backend
        setIsError(true); // Indica que hubo un error
      }
    };
  
    return (
      <div className="register-container">
        <h2>Registrar Usuario</h2>
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
          <button type="submit">Registrar</button>
        </form>
        {message && (
          <p style={{ color: isError ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    );
  };

export default Register;