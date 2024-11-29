import React from "react";
import "./Marca.css";

import marca2 from "./logos/marca2.gif";
import marca from "./logos/marca.jpg";
import nike from "./logos/nike.png";
import puma from "./logos/puma.png";
import rebook from "./logos/rebook.png";
import under from "./logos/under.png";
import adidas from "./logos/adidas.png";

const brands = [
  { id: 1, name: "Nike", logo: nike, link: "https://www.nike.com" },
  { id: 2, name: "Adidas", logo: adidas, link: "https://www.adidas.com" },
  { id: 3, name: "Puma", logo: puma, link: "https://www.puma.com" },
  { id: 4, name: "Reebok", logo: rebook, link: "https://www.reebok.com" },
  { id: 5, name: "Under Armour", logo: under, link: "https://www.underarmour.com" },
];

export default function Marcas() {
  return (
    <div className="contenedor-marca">
      <h2 className="titulo-marca">Nuestras Marcas</h2>
      {/* Imagen GIF debajo del título */}
      <img src={marca2} alt="Animación de marca" className="gif-marca" />
      {/* Imagen marca.jpg centrada y ocupando todo el ancho */}
      <img src={marca} alt="Marca principal" className="imagen-marca" />
      {/* Subtítulo Marcas Outlet */}
      <h3 className="subtitulo-marca">Marcas Outlet</h3>
      <div className="red-marca">
        {brands.map((brand) => (
          <a
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            key={brand.id}
            className="item-marca"
            aria-label={`Visitar el sitio web de ${brand.name}`}
          >
            <img
              src={brand.logo}
              alt={`Logo de ${brand.name}`}
              className="logo-marca"
            />
            <p className="nombre-marca">{brand.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
