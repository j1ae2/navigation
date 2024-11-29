import React, { useState, useEffect } from "react";
import { useCarrito } from "./modules/Carrito/carritoContext";
import { obtenerProductosFerreteria } from "./modules/Carrito/services/FerreteriaServicio";
import "./outlet.css";

const Productsferre = () => {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); 
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("todos");
  const [orden, setOrden] = useState("asc");
  const [paginaActual, setPaginaActual] = useState(1);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(0);
  const productosPorPagina = 16;

  const { agregarAlCarrito } = useCarrito();


  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosNormalizados = await obtenerProductosFerreteria();
        setProductos(productosNormalizados);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchProductos();
  }, []);

  
  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, filtroCategoria, orden]);

  
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

 
  const productosPaginados = productosFiltrados.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  const cerrarDetalle = () => setProductoSeleccionado(null); 
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
          <option value="cocina">Tornillos</option>
          <option value="baño">Adhesivos</option>
          <option value="oficina">Tuverias</option>
          <option value="garage">Soldadura</option>
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
              <button onClick={() => setProductoSeleccionado(producto)}>
                Ver Detalle
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

      {/* Modal de detalle de producto */}
      {productoSeleccionado && (
  <div className="modal">
    <div className="modal-content">
      <button className="close-modal" onClick={cerrarDetalle}>
        X
      </button>
      <h2>{productoSeleccionado.title}</h2>
      <img
        src={productoSeleccionado.image || "/placeholder-image.png"}
        alt={`Imagen de ${productoSeleccionado.title}`}
        onError={(e) => (e.target.src = "/placeholder-image.png")}
      />
      <p>{productoSeleccionado.description || "N/A"}</p>

      {/* Botones para seleccionar el precio */}
      <div>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.price)}>
    Precio Base: ${productoSeleccionado.price ? productoSeleccionado.price.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption1)}>
    Opción 1: ${productoSeleccionado.priceOption1 ? productoSeleccionado.priceOption1.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption2)}>
    Opción 2: ${productoSeleccionado.priceOption2 ? productoSeleccionado.priceOption2.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption3)}>
    Opción 3: ${productoSeleccionado.priceOption3 ? productoSeleccionado.priceOption3.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption4)}>
    Opción 4: ${productoSeleccionado.priceOption4 ? productoSeleccionado.priceOption4.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption5)}>
    Opción 5: ${productoSeleccionado.priceOption5 ? productoSeleccionado.priceOption5.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption6)}>
    Opción 6: ${productoSeleccionado.priceOption6 ? productoSeleccionado.priceOption6.toFixed(2) : "N/A"}
  </button>
  <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption7)}>
    Opción 7: ${productoSeleccionado.priceOption7 ? productoSeleccionado.priceOption7.toFixed(2) : "N/A"}
  </button>
</div>


      {/* Mostrar el precio seleccionado */}
      <p>Precio seleccionado: ${precioSeleccionado}</p>

      <button
        onClick={() => {
          agregarAlCarrito(productoSeleccionado, precioSeleccionado);
          cerrarDetalle();
        }}
      >
        Agregar al carrito
      </button>
      <button onClick={cerrarDetalle}>Seguir comprando</button>
    </div>
  </div>
)}

    </div>
  );
};

export default Productsferre;
