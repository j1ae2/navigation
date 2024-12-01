import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "./carritoContext.js";
import { crearPedido } from "./services/pedidoServicio.js"; // Servicio para manejar pedidos
import { AuthContext } from "../Login/loginContext";
const Pedido = () => {
  const { usuario } = useContext(AuthContext);
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
      const usuarioId = usuario.id; // Cambia esto según tu lógica de usuario

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px",
      }}
    >
      <form
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold" }}>
          Confirmar Pedido
        </h2>
  
        {/* Información del cliente */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Datos del Cliente</h3>
          <label htmlFor="nombre">Nombre :</label>
          <br></br>
          <label htmlFor="espacio"></label>
          <label htmlFor="direccion">Dirección de envío:</label>
          
        </div>
  
        {/* Resumen de compra */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Resumen de Compra</h3>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {carrito.map((producto) => (
              <li
                key={producto.id}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                }}
              >
                {producto.title} - {producto.cantidad} x ${producto.price} = $
                {(producto.cantidad * producto.price).toFixed(2)}
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: "bold", textAlign: "right" }}>
            Total: ${total.toFixed(2)}
          </p>
        </div>
  
        {/* Forma de pago */}
        <div>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Seleccionar Forma de Pago</h3>
          <select
            value={formapago}
            onChange={(e) => setFormaPago(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="">Selecciona una opción</option>
            <option value="Tarjeta de débito">Tarjeta de débito</option>
            <option value="Tarjeta de crédito">Tarjeta de crédito</option>
            <option value="Yape">Yape</option>
            <option value="Plin">Plin</option>
            <option value="PagoEfectivo">PagoEfectivo</option>
          </select>
        </div>
  
        {/* Mensaje de error */}
        {mensaje && (
          <p style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {mensaje}
          </p>
        )}
  
        {/* Botón de confirmar */}
        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          {loading ? "Procesando..." : "Realizar Pedido"}
        </button>
      </form>
    </div>
  );
  
};

export default Pedido;