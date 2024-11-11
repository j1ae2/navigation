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
      <div className="producto-detalle">
        <button onClick={handleBackToList} className="back-button">
          Regresar a la lista
        </button>
        <div className="detalle-contenedor">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="imagen-detalle"
          />
          <div className="info-detalle">
            <h2 className="titulo-detalle">{selectedProduct.title}</h2>
            
            <p className="productos-detalle">{selectedProduct.products} productos</p>
            <p className="precio-detalle">{selectedProduct.precio}</p> 
            <p className="descripcion-detalle">{selectedProduct.description}</p>
            <button className="add-cart-button">Agregar al carrito</button>
          </div>
        </div>
      </div>
    );
  };

  // Si no hay producto seleccionado, muestra la lista de productos
  return (
    <section className="Productos-general">
      <h2>Tornillos</h2>
      <div className="product-grid-general">
        {TornillosList.map((item) => (
          <div className="tarjeta-producto-general" key={item.id}>
            <img src={item.image} alt={item.title} className="Imagen-producto-general" />
            <div className="info-producto-general">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.products} productos</p>
              <button
                className="view-details-general"
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
    <section className="Productos-general">
      <h2>Adhesivos</h2>
      <div className="product-grid-general">
        {AdhesivosList.map((item) => (
          <div className="tarjeta-producto-general" key={item.id}>
            <img src={item.image} alt={item.title} className="Imagen-producto-general" />
            <div className="info-producto-general">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.products} productos</p>
              <button
                className="view-details-general"
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
