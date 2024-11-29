import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Cargar usuario desde localStorage
    const user = localStorage.getItem("user");
    if (user) {
      setUsuario(JSON.parse(user)); // Establece el usuario en el estado
    }
  }, []);

  const iniciarSesion = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUsuario(user);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion}}>
      {children}
    </AuthContext.Provider>
  );
};