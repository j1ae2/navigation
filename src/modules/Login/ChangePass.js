import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthContext } from "./loginContext.js";
import { changePass } from "./services/passwordService";
import React, { useState} from "react";
const  ChangePass = ()=>{
    const [email, setEmail] = useState("");
    const [currentPassword, setPassword] = useState("");
    const [newPassword, setNew] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    setTimeout(() => {
        console.log("Waited for 5 seconds");
    }, 5000);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const result = await changePass(email, currentPassword, newPassword);
        setMessage(result.message || "Contraseña cambiada.");
        setIsError(false); // Éxito
        setEmail("");
        setPassword("");
        setTimeout();
      } catch (error) {
        setMessage(error); // Muestra el error devuelto por el backend
        setIsError(true); // Indica que hubo un error
      }
    };
  
    return (
      <div className="register-container">
        <h2>Confirme correo:</h2>
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
            <label htmlFor="password">Confirme contraseña:</label>
            <input
              type="password"
              id="password"
              value={currentPassword}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="newpass">Nueva contraseña:</label>
            <input
              type="newpass"
              id="newpass"
              value={newPassword}
              onChange={(e) => setNew(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cambiar</button>
        </form>
        {message && (
          <p style={{ color: isError ? "red" : "green" }}>
            {message}
          </p>
        )}
      </div>
    );
  };
export default ChangePass;