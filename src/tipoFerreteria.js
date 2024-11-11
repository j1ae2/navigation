import React, { useState } from "react";
import "./Ferreteria.css";
import { TornillosList ,AdhesivosList} from "./productosDataFerreteria";

const Tornillos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Maneja el clic en un producto para mostrar su detalle
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Maneja el regreso a la lista de productos
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Si hay un producto seleccionado, muestra el detalle
  if (selectedProduct) {
    return (
      <div className="producto-detalle-tornillos">
        <button onClick={handleBackToList} className="back-button-tornillos">
          Regresar a la lista
        </button>
        <div className="detalle-contenedor-tornillos">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="imagen-detalle-tornillos"
          />
          <div className="info-detalle-tornillos">
            <h2 className="titulo-detalle-tornillos">{selectedProduct.title}</h2>
            
            <p className="productos-detalle-tornillos">{selectedProduct.products} productos</p>
            <p className="precio-detalle-tornillos">{selectedProduct.precio}</p> 
            <p className="descripcion-detalle-tornillos">{selectedProduct.description}</p>
            <button className="add-cart-button-tornillos">Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
  };

  // Si no hay producto seleccionado, muestra la lista de productos
  return (
    <section className="Productos-tornillos">
      <h2>Tornillos</h2>
      <div className="product-gridTornillos">
        {TornillosList.map((item) => (
          <div className="tarjeta-productoTornillos" key={item.id}>
            <img src={item.image} alt={item.title} className="Imagen-productoTornillos" />
            <div className="info-productoTornillos">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.products} productos</p>
              <button
                className="view-detailsTornillos"
                onClick={() => handleViewDetails(item)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Otros componentes para las secciones adicionales
const Adhesivos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Maneja el clic en un producto para mostrar su detalle
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Maneja el regreso a la lista de productos
  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  // Si hay un producto seleccionado, muestra el detalle
  if (selectedProduct) {
    return (
      <div className="producto-detalle">
        <button onClick={handleBackToList}>Regresar a la lista</button>
        <img src={selectedProduct.image} alt={selectedProduct.title} className="Imagen-detalle" />
        <h2>{selectedProduct.title}</h2>
        <p>{selectedProduct.description}</p>
        <p>{selectedProduct.products} productos</p>
      </div>
    );
  };

  // Si no hay producto seleccionado, muestra la lista de productos
  return (
    <section className="Productos-Adhesivos">
      <h2>Adhesivos</h2>
      <div className="product-grid">
        {AdhesivosList.map((item) => (
          <div className="tarjeta-producto" key={item.id}>
            <img src={item.image} alt={item.title} className="Imagen-producto" />
            <div className="info-producto">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.products} productos</p>
              <button
                className="view-details"
                onClick={() => handleViewDetails(item)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Soldaduras = () => (
  <div>
    <h2>Soldaduras</h2>
    <p>Aquí puedes mostrar los productos disponibles para Soldaduras.</p>
  </div>
);

const Tuverias = () => (
  <div>
    <h2>Tuverias y accesorios</h2>
    <p>Aquí puedes mostrar los productos disponibles para Tuverias y accesorios.</p>
  </div>
);

// Exporta todos los componentes
export { Tornillos, Adhesivos, Soldaduras, Tuverias };
