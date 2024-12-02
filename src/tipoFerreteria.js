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
    const fetchProductosFerrteria = async () => {
      try {
        const productosNormalizados = await obtenerProductosFerreteria();
        setProductos(productosNormalizados);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    fetchProductosFerrteria();
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
      <h2>Productos Ferreteria</h2>

     
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
           <option value="">Filtrar por precio</option> 
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

      
      <p>Total de productos encontrados: {productosFiltrados.length}</p>

  
      <div className="productos">
        {productosPaginados.length > 0 ? (
          productosPaginados.map((producto) => (
            <div key={producto.id} className="producto"onClick={() => setProductoSeleccionado(producto)}   style={{ cursor: "pointer" }} >
              <img
                src={producto.image || "/placeholder-image.png"}
                alt={`Imagen de ${producto.title}`}
                onError={(e) => (e.target.src = "/placeholder-image.png")}
              />
              <h3>{producto.title}</h3>
          
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>

    
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

     
      {productoSeleccionado && (
  <div className="modal">
    <div className="modal-content">
      <h2>{productoSeleccionado.title}</h2>
      <img className="imagen-producfere"
        src={productoSeleccionado.image || "/placeholder-image.png"}
        alt={`Imagen de ${productoSeleccionado.title}`}
        onError={(e) => (e.target.src = "/placeholder-image.png")}
      />
      <p>{productoSeleccionado.description || "N/A"}</p>
     
        
      <table className="tabla-producto">
        <thead>
          <tr>
            <th>Lg.</th>
            <th>Threading</th>
            <th>Thread Spacing</th>
            <th>Dia.</th>
            <th>Ht.</th>
            <th>Drive Size</th>
            <th>Tensile Strength (psi)</th>
            <th>Specifications Met</th>
            <th>Pkg. Qty.</th>
            <th>Pkg. Code</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/16"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASME B18.3, ASTM A574</td>
            <td>50</td>
            <td>91251A051</td>
            <td>
            <button onClick={() => setPrecioSeleccionado(productoSeleccionado.price)}>
   ${productoSeleccionado.price ? productoSeleccionado.price.toFixed(2) : "N/A"}
  </button>
            </td>
          </tr>
          <tr>
            <td>3/32"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASME B18.3, ASTM A574</td>
            <td>10</td>
            <td>91251A431</td>
            <td>
            {productoSeleccionado.priceOption1 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption1)}>
     ${productoSeleccionado.priceOption1.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>1/8"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASTM A574</td>
            <td>50</td>
            <td>91251A052</td>
            <td>
            {productoSeleccionado.priceOption2 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption2)}>
    ${productoSeleccionado.priceOption2.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>5/32"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASME B18.3, ASTM A574</td>
            <td>10</td>
            <td>91251A445</td>
            <td>
            {productoSeleccionado.priceOption3 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption3)}>
      ${productoSeleccionado.priceOption3.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>3/16"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASTM A574</td>
            <td>50</td>
            <td>91251A054</td>
            <td>
            {productoSeleccionado.priceOption4 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption4)}>
      ${productoSeleccionado.priceOption4.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>1/4"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASTM A574</td>
            <td>50</td>
            <td>91251A055</td>
            <td>
            {productoSeleccionado.priceOption5 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption5)}>
      ${productoSeleccionado.priceOption5.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>5/16"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASTM A574</td>
            <td>25</td>
            <td>91864A002</td>
            <td>
            {productoSeleccionado.priceOption6 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption6)}>
    ${productoSeleccionado.priceOption6.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
          <tr>
            <td>3/8"</td>
            <td>Fully Threaded</td>
            <td>Fine</td>
            <td>0.096"</td>
            <td>0.06"</td>
            <td>0.050"</td>
            <td>170,000</td>
            <td>ASTM A574</td>
            <td>50</td>
            <td>91864A003</td>
            <td>
            {productoSeleccionado.priceOption7 && (
    <button onClick={() => setPrecioSeleccionado(productoSeleccionado.priceOption7)}>
    ${productoSeleccionado.priceOption7.toFixed(2)}
    </button>
  )}
            </td>
          </tr>
        </tbody>
      </table>
 
      



     
      <p>Precio seleccionado: ${precioSeleccionado}</p>

      <button
  onClick={() => {
    agregarAlCarrito({
      ...productoSeleccionado, 
      price: precioSeleccionado, 
    });
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
