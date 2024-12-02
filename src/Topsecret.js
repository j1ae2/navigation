import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./modules/Login/loginContext.js";
import admin from "./logos/admin.png";
import { adminLogin } from "./modules/Login/services/adminService.js";
const Admin = () => {
  const [credenciales, setCredenciales] = useState({ username: "", password: ""});
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
      const user = await adminLogin(credenciales.username, credenciales.password);

      // Guarda el usuario en el contexto
      iniciarSesion(user);

      // Redirige al usuario a la página principal
      navigate("/admin");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login-container">
      <img src={admin}></img>
      <h1>HACKERMAN</h1>
      {error && <p>{error}</p>}
      <form onSubmit={manejarSubmit}>
        <input
          type="username"
          name="username"
          placeholder="Usuario"
          value={credenciales.username}
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
      </form>
    </div>
  );
};
export default Admin;