import React from "react";
import { Link } from "react-router-dom";
import "./Holidayshopp.css"; // Estilo combinado

const HolidayBanner = () => {
  return (
    <div className="holiday-banner-section">
      <div className="holiday-banner-text">
        <h1>Simplemente Alegre</h1>
        <p>
          Prepárate antes del estrés: compra papel de regalo, rellenos para calcetas, almacenamiento navideño, favoritos para entretener y más.
        </p>
        <Link to="/Navideñas">
          <button className="holiday-shop-now-button">Compra ahora</button>
        </Link>
      </div>
      <div className="holiday-banner-image">
        <img
          src="https://images.prismic.io/containerstoriesproduction/ZwP0tYF3NbkBW-t3_hero1-wrap.jpg?auto=format,compress&rect=0,0,2240,1493&w=1125&h=750"
          alt="Holiday gift wrapping"
        />
      </div>
    </div>
  );
};

const PantryBanner = () => {
  return (
    <div className="pantry-banner-section">
  
      <div className="video-container">
    <iframe
      width="560"
      height="315"
      src="https://www.containerstore.com/073bbc76-3993-40fb-9eca-5bd0bf297b3b"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  </div>
      
      <div className="pantry-banner-text">
        <h2>Trae Alegría y Paz a Tu Despensa</h2>
        <p>
          Organizar para las fiestas no tiene por qué ser estresante. Antes de sacar los utensilios, transforma tu cocina con sistemas de organización para despensas que te ahorrarán tanto espacio como tiempo.
        </p>
        <p>
          Nuestras soluciones Elfa y organizadores de cocina llevarán tu despensa al siguiente nivel, devolviendo la alegría a la cocina y repostería navideñas.
        </p>
      </div>
    </div>
  );
};

const HolidayShop = () => {
  const categories = [
    { name: "Papel de Regalo Navideño", id: "papel-de-regalo-navideno", image: "https://images.prismic.io/containerstoriesproduction/ZwP1rYF3NbkBW-uc_HS-24-holiday-gift-wrap-v1.jpg?auto=format,compress" },
    { name: "Cajas y Bolsas de Regalo Navideñas", id: "cajas-bolsas-regalo-navidenas", image: "https://images.prismic.io/containerstoriesproduction/ZwP1qoF3NbkBW-uX_HS-24-holiday-gift-bags-boxes-v1-1-.jpg?auto=format,compress" },
    { name: "Rellenos para Calcetas Navideñas", id: "rellenos-calcetas-navidenas", image: "https://images.prismic.io/containerstoriesproduction/ZwP1rIF3NbkBW-ub_HS-24-stocking-stuffers-adult-focused.jpg?auto=format,compress" },
    { name: "Almacenamiento Navideño", id: "almacenamiento-navideno", image: "https://images.prismic.io/containerstoriesproduction/ZwP1_YF3NbkBW-uj_image-2-.jpeg?auto=format,compress" },
    { name: "Regalos Top Navideños", id: "regalos-top-navidenos", image: "https://images.prismic.io/containerstoriesproduction/ZwP1qoF3NbkBW-uY_S3-24-holiday-livingroom-talent-v2_315_TopGifts.jpg?auto=format,compress" },
  ];

  return (
    <div className="holiday-shop-section">
      <HolidayBanner />
      <div className="holiday-shop-categories">
        {categories.map((category, index) => (
          <div className="holiday-category-card" key={index}>
            <Link to={`/holiday/${category.id}`}>
              <img src={category.image} alt={category.name} className="holiday-category-image" />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <PantryBanner />
    </div>
  );
};


export default HolidayShop;
