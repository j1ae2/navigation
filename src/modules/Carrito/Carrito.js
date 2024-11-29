import React from "react";
import { useCarrito } from "./carritoContext.js";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, limpiarCarrito, calcularTotal } =
    useCarrito();

  return (
    <div className="carrito-container">
      <h3>Carrito de Compras</h3>
      {carrito.length > 0 ? (
        <>
          <ul>
            {carrito.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price?.toFixed(2)} x {item.cantidad}
                <button onClick={() => eliminarDelCarrito(item.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${calcularTotal()}</p>
          <button onClick={limpiarCarrito}>Limpiar carrito</button>
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
      <button
        onClick={() =>
          navigate("/pedido", {
            state: {
              productos: carrito.map((producto) => ({
                id: producto.id,
                title: producto.title,
                cantidad: producto.cantidad,
                precio: producto.precio,
              })),
              total,
            },
          })
        }
      >
        Realizar Pedido
      </button>
    </div>
  );
};

export default Carrito;
