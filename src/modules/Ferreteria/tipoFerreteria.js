import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ferreteria.css";
import { TornillosList ,AdhesivosList} from "./productosDataFerreteria";

const Tornillos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();


  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    navigate(`/Ferreteria/Tornillos/${product.title}`);
    
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    navigate("/Ferreteria/Tornillos");
  };

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


const Adhesivos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
 
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    navigate(`/Ferreteria/Adhesivos/${product.title}`);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
    navigate("/Ferreteria/Adhesivos");
  };

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


export { Tornillos, Adhesivos, Soldaduras, Tuverias };
