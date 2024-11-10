import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Ferreteria from './Ferreteria';
import { Tornillos,Adhesivos, Soldaduras, Tuverias } from './tipoFerreteria';

// Importa el nuevo archivo Products.js
import Products from './products';
import ProductoLG from './ProductoLG';
import Marcas from './Marca';

// Componentes de Páginas

// Página de Oferta
const Sale = () => <h2>Sale Page</h2>;

// Página de Marcas
const Brands = () => {
  return(
    <Marcas/>
  )
};

// Página de Outlet
const Outlet = () => {
  return(<ProductoLG/>)
};

// Página de Envío
const Shipping = () => <h2>Shipping Page</h2>;

// Página de Devoluciones y Garantía
const ReturnsWarranty = () => <h2>Returns & Warranty Page</h2>;

// Página de Contacto
const Contacto = () => <h2>Contact Page</h2>;





// Página de Contacto
const Contact = () => {
  return (
    <div>
      <h1>¡Contáctanos!</h1>
      <p>¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!</p>

      <h2>¿Cómo contactarnos?</h2>
      <ul>
        <li>**Correo** mycontainer@mail.com</li>
        <li>**Teléfono:** +96434232</li>
        <li>**Redes sociales:** Síguenos en [nombre de tu red social] para estar al día de nuestras novedades.</li>
      </ul>

      <h3>Formulario de contacto</h3>
      <p>
        Para enviarnos un mensaje directo, por favor completa los siguientes campos:
      </p>
      <p>
        Nombre:
        <input type="text" />
      </p>
      <p>
        Correo electrónico:
        <input type="email" />
      </p>
      <p>
        Mensaje:
        <textarea></textarea>
      </p>
      <button>Enviar</button>
    </div>
  );
};

// Página de Inicio
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <NewProducts />
      <PromoBox />
      <ReviewSection />
      <Footer />
    </>
  );
};

// Componente de Cabecera
const Header = () => {
  return (
    <header className="header">
      <div className="top-banner">
        Envios gratis a partir de 200 soles.
      </div>
      <div className="navbar">
        <div className="logo">
          <Link to=""><h1> \cÖn/ + \tÄi/ + \nËr/  </h1></Link> {/* Redirige a la página de inicio */}
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
        </div>

        <div className="navbar-icons">
          <span>❤ 12</span>
          <span>Login</span>
          <span>🛒 2</span>
        </div>

      </div>
      <nav className="main-nav">
        <ul>
          {/* Menú de navegación con enlaces a diferentes páginas */}
          <li><Link to="/products">Productos</Link></li> {/* Modificación para enlazar con Products.js */}
          <li><Link to="/sale">SALE</Link></li>
          <li><Link to="/Ferreteria">Ferretería</Link></li>
          <li><Link to="/brands">Marcas</Link></li>
          <li><Link to="/outlet">Outlet</Link></li>
          <li><Link to="/shipping">Shipping</Link></li>
          <li><Link to="/returns-warranty">Devoluciones & Garantias</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Sección del Héroe
const HeroSection = () => {
  return (
    <section className="hero">
      <h2>Customiza tus espacios, te hacen sonreír.</h2>
      <p>
      El hogar para las fiestas es mucho mejor con Elfa. Ya sea que necesites actualizar un rincón, 
      crear un sistema de orden en la despensa o renovar una habitación de invitados,
      Elfa es el sistema infinitamente flexible e increíblemente duradero que te permite preparar tu hogar para las fiestas en un abrir y cerrar de ojos.
      </p>
      <div className="hero-buttons">
        <button>SHOP SALES</button>
        <button>ALL PRODUCTS</button>
      </div>
      <div className="hero-pagination">
        <span>●</span> <span>○</span> <span>○</span>
      </div>
    </section>
  );
};

// Sección de Categorías de Productos
const ProductCategories = () => {
  return (
    <section className="product-categories">
      <div className="category">
        <Link to="/image">
          <div className="category-img">
            {/* Carga de una imagen desde un enlace */}
            <img
              src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/356423/10008760-our-mens-shoe-box.jpg"
              alt="Product"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Bestsellers</h3>
      </div>
      <div className="category">
        <Link to="/image">
          <div className="category-img">
            {/* Carga de una imagen desde un enlace */}
            <img
              src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://www.containerstore.com/catalogimages/532319/10098672g-glass-hause-company-3-ounc.jpg"
              alt="Product"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Temporada</h3>
        <Link to="/image">
          <div className="category-img">
            {/* Carga de una imagen desde un enlace */}
            <img
              src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://www.containerstore.com/catalogimages/542031/10086227_Kon_Mari_Shoji_Bamboo_booke.jpg?width=1200&height=1200&align=center"
              alt="Product"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Categorias</h3>
      </div>
      <div className="category">
      <Link to="/image">
          <div className="category-img">
            {/* Carga de una imagen desde un enlace */}
            <img
              src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://www.containerstore.com/catalogimages/249745/10065565LED3LightSilverV2_KO_600.jpg"
              alt="Product"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Outlet</h3>
      </div>
    </section>
  );
};

// Sección de Nuevos Productos
const NewProducts = () => {
  return (
    <section className="new-products">
      <h2>New products!</h2>
      <div className="product-grid">
        {/* Cuadrícula de productos nuevos */}
        <div className="product-card">
          <div className="product-img">
            <img src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://www.containerstore.com/catalogimages/285812/basketball%202.jpg?width=1200&height=1200&align=center" alt="Product 1" />
          </div>
          <p>Product Name</p>
          <p>Description, color, size</p>
          <p>$95 <span className="old-price">$119</span> <span className="discount">-20%</span></p>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/532995/10098986-samson-faux-leather-bin-cog.jpg" alt="Product 2" />
          </div>
          <p>Product Name</p>
          <p>Description, color, size</p>
          <p>$95</p>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/337793/10074299-Stacker-Tote_10gal-Black.jpg" alt="Product 3" />
          </div>
          <p>Product Name</p>
          <p>Description, color, size</p>
          <p>$95</p>
        </div>
        <div className="product-card">
          <div className="product-img">
            <img src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/562610/10104194-31231-treekeeper-ds-ven.jpg" alt="Product 4" />
          </div>
          <p>Product Name</p>
          <p>Description, color, size</p>
          <p>$95</p>
        </div>
      </div>
    </section>
  );
};

// Caja Promocional
const PromoBox = () => {
  return (
    <section className="promo-box">
      <h2>Promo box</h2>
      <p>UP TO</p>
      <h1>50%</h1>
      <p>descuentos especiales por Categorias</p>
      <Link to="/shop">
        <button>SHOP NOW</button>
      </Link>
    </section>
  );
};

// Sección de Reseñas y Suscripción
const ReviewSection = () => {
  return (
    <section className="review-section">
      <div className="subscribe-box">
        <h2>Gana 5% de descuento, suscribete</h2>
        <p>Suscríbete al boletín mensual. Recibe las últimas actualizaciones de productos y ofertas especiales directamente en tu bandeja de entrada.</p>
        <div className="subscribe-input">
          {/* Campo de entrada para suscripción al boletín */}
          <input type="email" placeholder="escribe tu email" />
          <button>SUBSCRIBETE</button>
        </div>
      </div>
      <div className="reviews">
        {/* Tarjetas de reseñas de clientes */}
        <div className="review-card">
          <h3>Our Rating</h3>
          <p>⭐⭐⭐⭐☆</p>
          <p>Based on 2303 reviews</p>
        </div>
        <div className="review-card">
          <h3>Great value and quality</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Will Fred, 6 days ago</p>
        </div>
        <div className="review-card">
          <h3>Beautiful design!</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Ker Aloe, 6 days ago</p>
        </div>
        <div className="review-card">
          <h3>Exactly what I wanted</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Phil Dreg, 6 days ago</p>
        </div>
      </div>
    </section>
  );
};

// Footer de la página
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Need help?</h3>
          <button>Contact Us</button>
        </div>
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="#">Returns & Warranty</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Corporate Info</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Gift Card</h3>
          <ul>
            <li><a href="#">Buy Gift Cards</a></li>
            <li><a href="#">Redeem Card</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Location</h3>
          <p>Peru</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="social-media">
          {/* Iconos de redes sociales */}
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

// Componente Principal App
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Rutas de la aplicación */}
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} /> {/* Nueva ruta */}
          <Route path="/sale" element={<Sale />} />
          <Route path="/Ferreteria" element={<Ferreteria />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns-warranty" element={<ReturnsWarranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Tornillos" element={<Tornillos/>} />
          <Route path="/Adhesivos" element={<Adhesivos />} />
          <Route path="/Soldaduras" element={<Soldaduras />} />
          <Route path="/Tuverias" element={<Tuverias />} />
        </Routes>
      </div>
    </Router>
  );
};





export default App;
