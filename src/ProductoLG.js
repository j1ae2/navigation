import React, { useState, useEffect } from "react";

export default function ProductoLG() {
  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://fakestoreapi.com/products/";
      const response = await fetch(url + "?limit=5");
      if (!response.ok) {
        const mensaje = "ocurrió un error";
        throw new Error(mensaje);
      }
      const data = await response.json();
      setListaProductos(data);
    }

    fetchData();
  }, []); // El array vacío asegura que esto solo se ejecuta una vez cuando el componente se monta

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {listaProductos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.image} alt={producto.title} />
            <p>
              <b>
                {producto.title +
                  " " +
                  producto.price +
                  " " +
                  producto.description}
              </b>
              {" " + producto.rating.rate + " " + producto.rating.count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}