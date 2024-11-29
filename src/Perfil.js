import React, { useState, useEffect, useContext } from "react";
import { changePass } from "./modules/Login/services/passwordService";
import { obtenerPedido } from "./modules/Carrito/services/usuarioPedidoServicio";
import { AuthContext } from "./modules/Login/loginContext";

const Perfil = () => {
  const { usuario } = useContext(AuthContext);
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  // Cargar los pedidos del usuario
  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const pedidos = await obtenerPedido(usuario.id); // Usa el servicio actualizado.
        console.log(pedidos);
        setPedidos(pedidos);
      } catch (error) {
        setMensaje("No se pudieron cargar los pedidos.");
        console.log(error);
      }
    };

    if (usuario && usuario.id) {
      fetchPedidos();
    }
  }, [usuario]);

  // Manejar el cambio de contraseña
  const manejarCambioContrasena = async (e) => {
    e.preventDefault();

    try {
      await changePass(usuario.email, confirmarContrasena, nuevaContrasena);
      setMensaje("Contraseña actualizada exitosamente.");
      setNuevaContrasena("");
      setConfirmarContrasena("");
    } catch (error) {
      setMensaje("Error al actualizar la contraseña.");
      console.log(error);
    }
  };

  return (
    <div className="perfil-container">
      <h1>Hola, {usuario.username}</h1>
      <p>Correo: {usuario.email}</p>

      <section className="cambiar-contrasena">
        <h2>Cambiar contraseña</h2>
        {mensaje && <p className="mensaje">{mensaje}</p>}
        <form onSubmit={manejarCambioContrasena}>
          <input
            type="password"
            placeholder="Nueva contraseña"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmar contraseña antigua"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            required
          />
          <button type="submit">Actualizar contraseña</button>
        </form>
      </section>

      <section className="pedidos">
        <h2>Mis Pedidos</h2>
        {pedidos.length === 0 ? (
          <p>No tienes pedidos registrados.</p>
        ) : (
          <ul>
            {pedidos.map((pedido) => (
              <li key={pedido.id}>
                <strong>Pedido #{pedido.id}</strong>
                <p>Fecha: {new Date(pedido.fecha).toLocaleDateString()}</p>
                <p>Estado: {pedido.estado}</p>
                <p>Pago: ${pedido.pago.toFixed(2)}</p>

                {pedido.Productos && pedido.Productos.length > 0 ? (
                  <div className="productos-pedido">
                    <h3>Productos:</h3>
                    <ul>
                      {pedido.Productos.map((producto) => (
                        <li key={producto.id}>
                          <img
                            src={producto.image}
                            alt={producto.title}
                            style={{ width: "100px", height: "auto" }}
                          />
                          <p>
                            <strong>{producto.title}</strong>
                          </p>
                          <p>Descripción: {producto.description}</p>
                          <p>
                            Precio Unitario: $
                            {producto.Pedido_Producto.precioU.toFixed(2)}
                          </p>
                          <p>Cantidad: {producto.Pedido_Producto.cantidad}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No hay productos asociados a este pedido.</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Perfil;
