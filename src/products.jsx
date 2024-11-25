import React, { useState, useEffect } from "react";
import { useCarrito } from "./modules/Carrito/carritoContext";
import { obtenerProductos } from "./modules//Carrito/services/productoServicio";
import "./outlet.css";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [orden, setOrden] = useState("asc");
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 30;

  const { agregarAlCarrito } = useCarrito();

  // Fetch de productos con normalización de categorías
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosNormalizados = await obtenerProductos();
        setProductos(productosNormalizados);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  // Reinicio de página al cambiar filtros
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, filtroCategoria, orden]);

  // Filtro de productos
  const productosFiltrados = productos
    .filter((producto) =>
      producto.title.toLowerCase().includes(busqueda.toLowerCase())
    )
    .filter((producto) =>
      filtroCategoria === "todos"
        ? true
        : producto.categoria === filtroCategoria.toLowerCase()
    )
    .sort((a, b) => (orden === "asc" ? a.price - b.price : b.price - a.price));

  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

  // Productos paginados
  const productosPaginados = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  // Renderización de la vista
  if (cargando) {
    return (
      <div className="loading">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="outlet-container">
      <h2>Productos Contenedores</h2>

      {/* Filtros */}
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
          <option value="cocina">Cocina</option>
          <option value="baño">Baño</option>
          <option value="oficina">Oficina</option>
          <option value="garage">Garage</option>
        </select>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="asc">Precio: Menor a Mayor</option>
          <option value="desc">Precio: Mayor a Menor</option>
        </select>
        <button
          className="reset-filters"
          onClick={() => {
            setBusqueda("");
            setFiltroCategoria("todos");
            setOrden("asc");
          }}
        >
          Vaciar Filtros
        </button>
      </div>

      {/* Información de productos */}
      <p>Total de productos encontrados: {productosFiltrados.length}</p>

      {/* Lista de productos */}
      <div className="productos">
        {productosPaginados.length > 0 ? (
          productosPaginados.map((producto) => (
            <div key={producto.id} className="producto">
              <img
                src={producto.image || "/placeholder-image.png"}
                alt={`Imagen de ${producto.title}`}
                onError={(e) => (e.target.src = "/placeholder-image.png")}
              />
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

      {/* Paginación */}
      <div className="paginacion">
        <button
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
        <button
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Products;
