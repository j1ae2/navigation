import React, { useState, useEffect } from "react";
import "./Marca.css";
import nike from "./logos/nike.png"
import puma from "./logos/puma.png"
import rebook from "./logos/rebook.png"
import under from "./logos/under.png"
import adidas from "./logos/adidas.png"

const initialBrands = [
  { id: 1, name: "Nike", logo: nike, link: "https://www.nike.com" },
  { id: 2, name: "Adidas", logo: adidas, link: "https://www.adidas.com" },
  { id: 3, name: "Puma", logo: puma, link: "https://www.puma.com" },
  { id: 4, name: "Reebok", logo: rebook, link: "https://www.reebok.com" },
  { id: 5, name: "Under Armour", logo: under, link: "https://www.underarmour.com" },
];

export default function Marcas() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    async function fetchBrands() {
        setBrands(initialBrands);
    }

    fetchBrands();
  }, []);

  return (
    <div className="contenedor-marca">
      <h2 className="titulo-marca">Nuestras Marcas</h2>
      <div className="red-marca">
        {brands.map((brand) => (
          <a href={brand.link} target="_blank" rel="noopener noreferrer" key={brand.id} className="item-marca">
            <img src={brand.logo} alt={brand.name} className="logo-marca" />
            <p className="nombre-marca">{brand.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}