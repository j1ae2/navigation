import React from "react";
import "./Marca.css";

import marca2 from "./logos/marca2.gif";
import marca from "./logos/marca.jpg";
import nike from "./logos/nike.png";
import puma from "./logos/puma.png";
import rebook from "./logos/rebook.png";
import under from "./logos/under.png";
import adidas from "./logos/adidas.png";
import hook from "./logos/hook.png";



const brands = [
  { id: 1, name: "Nike", logo: nike, link: "https://www.nike.com" },
  { id: 2, name: "Adidas", logo: adidas, link: "https://www.adidas.com" },
  { id: 3, name: "Puma", logo: puma, link: "https://www.puma.com" },
  { id: 4, name: "Reebok", logo: rebook, link: "https://www.reebok.com" },
  { id: 5, name: "Under Armour", logo: under, link: "https://www.underarmour.com" },
];

const imageLinks = [
  { id: 1, top: "8%", left: "5%", width: "6%", height: "8%", link: "https://www.firstalert.com" },
  { id: 2, top: "8%", left: "15%", width: "6%", height: "8%", link: "https://badgerairbrush.com" },
  { id: 3, top: "8%", left: "25%", width: "6%", height: "8%", link: "https://www.kilz.com" },
  { id: 4, top: "8%", left: "45%", width: "6%", height: "8%", link: "https://www.kwikset.com" },
  { id: 5, top: "8%", left: "65%", width: "6%", height: "8%", link: "https://www.moen.com" },
  { id: 6, top: "8%", left: "85%", width: "6%", height: "8%", link: "https://www.wernerco.com" },
  { id: 7, top: "18%", left: "5%", width: "6%", height: "8%", link: "https://www.acehardware.com" },
  { id: 8, top: "18%", left: "15%", width: "6%", height: "8%", link: "https://www.aquaphalt.com" },
  { id: 9, top: "18%", left: "37%", width: "6%", height: "8%", link: "https://www.toiletseats.com" },
  { id: 10, top: "18%", left: "45%", width: "6%", height: "8%", link: "https://www.betco.com" },
  { id: 11, top: "18%", left: "45%", width: "6%", height: "8%", link: "https://www.broan-nutone.com" },
  { id: 12, top: "18%", left: "55%", width: "6%", height: "8%", link: "https://www.brkelectronics.com" },
  { id: 13, top: "28%", left: "5%", width: "6%", height: "8%", link: "https://www.clarkandkensington.com" },
  { id: 14, top: "28%", left: "15%", width: "6%", height: "8%", link: "https://www.charlottepipe.com" },
  { id: 15, top: "28%", left: "43%", width: "6%", height: "8%", link: "https://www.connectite.com" },
  { id: 16, top: "28%", left: "65%", width: "6%", height: "8%", link: "https://www.deltafaucet.com" },
  { id: 17, top: "28%", left: "75%", width: "6%", height: "8%", link: "https://www.dewalt.com" },
  { id: 18, top: "28%", left: "85%", width: "6%", height: "8%", link: "https://www.duracell.com" },
  { id: 19, top: "63%", left: "10%", width: "6%", height: "8%", link: "https://www.irwin.com" },
  { id: 20, top: "63%", left: "15%", width: "6%", height: "8%", link: "https://www.scjohnson.com" },
  { id: 20, top: "63%", left: "5%", width: "6%", height: "8%", link: "https://lithonia.acuitybrands.com/" },
  { id: 21, top: "63%", left: "36%", width: "6%", height: "8%", link: "https://www.leviton.com" },
  { id: 21, top: "90%", left: "35%", width: "6%", height: "8%", link: "https://westinghouse.com/" },
  { id: 21, top: "90%", left: "45%", width: "6%", height: "8%", link: "https://zep.com/?srsltid=AfmBOooZT7ZvLz0KJ5LZOhkzq23Gup81KYGdn2TzwblcLk-YlM3OOatZ" },
  { id: 21, top: "90%", left: "55%", width: "6%", height: "8%", link: "https://www.3m.com.pe/3M/es_PE/inicio/" },
];






export default function Marcas() {
  return (
    <div className="contenedor-marca">
      <h2 className="titulo-marca">Nuestras Marcas</h2>
      {/* Imagen GIF debajo del título */}
      <img src={marca2} alt="Animación de marca" className="gif-marca" />
      {/* Imagen marca.jpg con áreas interactivas */}
      <div className="imagen-marca-container">
        <img src={marca} alt="Marca principal" className="imagen-marca" />
        {imageLinks.map((item) => (
          <div
            key={item.id}
            className="logo-link"
            onClick={() => window.open(item.link, "_blank")}
            style={{
              position: "absolute",
              top: item.top,
              left: item.left,
              width: item.width,
              height: item.height,
              cursor: "pointer",
            }}
            aria-label={`Visitar el sitio web asociado`}
          />
        ))}
      </div>
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
