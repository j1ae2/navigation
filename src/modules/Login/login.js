import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./services/loginService.js"; // Importa el servicio
import { AuthContext } from "./loginContext.js";

const Login = () => {
  const [credenciales, setCredenciales] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const { iniciarSesion } = useContext(AuthContext);
  const navigate = useNavigate();

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(credenciales.email, credenciales.password);

      // Guarda el usuario en el contexto
      iniciarSesion(user);

      // Redirige al usuario a la página principal
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={manejarSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo"
          value={credenciales.email}
          onChange={manejarCambio}
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={credenciales.password}
          onChange={manejarCambio}
        />
        <button type="submit">Iniciar Sesión</button>
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Login;