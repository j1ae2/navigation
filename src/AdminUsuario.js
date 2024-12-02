import React, { useState, useEffect } from "react";
import {
  obtenerUsuarios,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "./modules/Login/services/adminUsuarioService";

const UsuarioCRUD = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditar, setUsuarioEditar] = useState(null);
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const data = await obtenerUsuarios();
        setUsuarios(data);
      } catch (error) {
        alert("Error al cargar usuarios");
      }
    };
    fetchUsuarios();
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarAgregar = async (e) => {
    e.preventDefault();
    try {
      const nuevoUsuario = await agregarUsuario(formulario);
      setUsuarios([...usuarios, nuevoUsuario]);
      setFormulario({ nombre: "", email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
  };

  const manejarActualizar = async (e) => {
    e.preventDefault();
    try {
      const usuarioActualizado = await actualizarUsuario(
        usuarioEditar,
        formulario
      );
      setUsuarios((prev) =>
        prev.map((user) =>
          user.id === usuarioEditar ? { ...user, ...usuarioActualizado } : user
        )
      );
      setUsuarioEditar(null);
      setFormulario({ nombre: "", email: "", password: "" });
    } catch (error) {
        console.log(error)
    }
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
    try {
      await eliminarUsuario(id);
      setUsuarios((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
        console.log(error)
    }
  };

  const cancelarEdicion = () => {
    setUsuarioEditar(null);
    setFormulario({ nombre: "", email: "", password: "" });
  };

  return (
    <section>
      <h2>Gestión de Usuarios</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <p>
              <strong>{usuario.nombre}</strong> - {usuario.email}
            </p>
            <button onClick={() => setUsuarioEditar(usuario.id)}>Editar</button>
            <button onClick={() => manejarEliminar(usuario.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={usuarioEditar ? manejarActualizar : manejarAgregar}>
        <h3>{usuarioEditar ? "Editar Usuario" : "Agregar Usuario"}</h3>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={formulario.password}
            onChange={manejarCambio}
            required={!usuarioEditar}
          />
        </label>
        <button type="submit">
          {usuarioEditar ? "Actualizar" : "Agregar"}
        </button>
        {usuarioEditar && <button onClick={cancelarEdicion}>Cancelar</button>}
      </form>
    </section>
  );
};

export default UsuarioCRUD;
