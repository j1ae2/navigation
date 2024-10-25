import React, { useState, useEffect } from "react";
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
    <div>
      <h2>Nuestras Marcas</h2>
      <div>
        {brands.map((marca) => (
          <a href={marca.link} key={marca.id}>
            <img src={marca.logo} alt={marca.name}/>
            <p>{marca.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}