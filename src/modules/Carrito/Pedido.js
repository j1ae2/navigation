import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "./carritoContext.js";
import { crearPedido } from "./services/pedidoServicio.js"; // Servicio para manejar pedidos

const Pedido = () => {
  const { carrito, limpiarCarrito } = useCarrito();
  const navigate = useNavigate();

  const [formapago, setFormaPago] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  const handleSubmit = async () => {
    if (!formapago) {
      setMensaje("Por favor, selecciona un método de pago.");
      return;
    }

    setLoading(true);
    try {
      const fecha = new Date().toISOString();
      const estado = "pendiente";
      const usuarioId = 1; // Cambia esto según tu lógica de usuario

      const pedidoData = {
        id: usuarioId,
        fecha,
        estado,
        total,
        formapago,
        productos: carrito.map((producto) => ({
          id: producto.id,
          cantidad: producto.cantidad,
          price: producto.price,
        })),
      };

      const response = await crearPedido(pedidoData); // Usar el servicio
      setMensaje(response.message || "¡Pedido realizado con éxito!");
      limpiarCarrito(); // Vaciar carrito tras realizar el pedido
      setTimeout(() => {
        navigate("/"); // Redirigir tras el éxito
      }, 3000);
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!carrito.length) {
    return <p>No hay productos en el carrito para realizar un pedido.</p>;
  }

  return (
    <div className="pedido-container">
      <h2>Confirmar Pedido</h2>
      <div className="pedido-detalle">
        <h3>Resumen de Compra</h3>
        <ul>
          {carrito.map((producto) => (
            <li key={producto.id}>
              {producto.title} - {producto.cantidad} x ${producto.price} = $
              {(producto.cantidad * producto.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${total.toFixed(2)}
        </p>
      </div>

      <div className="forma-pago">
        <h3>Seleccionar Forma de Pago</h3>
        <select
          value={formapago}
          onChange={(e) => setFormaPago(e.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="Tarjeta de débito">Tarjeta de débito</option>
          <option value="Tarjeta de crédito">Tarjeta de crédito</option>
          <option value="Yape">Yape</option>
          <option value="Plin">Plin</option>
          <option value="PagoEfectivo">PagoEfectivo</option>
        </select>
      </div>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Procesando..." : "Realizar Pedido"}
      </button>
    </div>
  );
};

export default Pedido;
