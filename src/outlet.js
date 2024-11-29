import React, { useState, useEffect } from "react";
import { useCarrito } from "./modules/Carrito/carritoContext";
import "./outlet.css";

const Outlet = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [orden, setOrden] = useState("asc");
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProductos(data);
        setCargando(false);
      } catch (err) {
        setError(err.message);
        setCargando(false);
      }
    };
    fetchProductos();
  }, []);

  const productosFiltrados = productos
    .filter((producto) =>
      producto.title.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((producto) =>
      filtroCategoria === "todos"
        ? true
        : producto.category === filtroCategoria
    )
    .sort((a, b) => {
      if (orden === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="outlet-container">
      <h2>Productos en Outlet</h2>
      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="todos">Todas las categorías</option>
          <option value="men's clothing">Ropa de Hombre</option>
          <option value="women's clothing">Ropa de Mujer</option>
          <option value="jewelery">Joyería</option>
          <option value="electronics">Electrónica</option>
        </select>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="asc">Precio: Menor a Mayor</option>
          <option value="desc">Precio: Mayor a Menor</option>
        </select>
      </div>

      <div className="productos">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div key={producto.id} className="producto">
              <img src={producto.image} alt={producto.title} />
              <h3>{producto.title}</h3>
              <p>Precio: ${producto.price.toFixed(2)}</p>
              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
              </button>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};

export default Outlet;