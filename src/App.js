import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Ferreteria from './Ferreteria';
import { Tornillos,Adhesivos, Soldaduras, Tuverias } from './tipoFerreteria';
import ReturnsWarranty from './ReturnsWarranty';
import Products from './products';
import ProductoLG from './ProductoLG';
import Marcas from './Marca';
import Login from './login';

const Sale = () => <h2>Sale Page</h2>;
const Brands = () => <Marcas />;
const Outlet = () => <ProductoLG />;
const Shipping = () => <h2>Shipping Page</h2>;

const Contact = () => {
  return (
    <div>
      <h1>¡Contáctanos!</h1>
      <p>¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!</p>
      <h2>¿Cómo contactarnos?</h2>
      <ul>
        <li><strong>Correo:</strong> mycontainer@mail.com</li>
        <li><strong>Teléfono:</strong> +96434232</li>
        <li><strong>Redes sociales:</strong> Síguenos en [container] para estar al día de nuestras novedades.</li> 
      </ul>
      <h3>Formulario de contacto</h3>
      <p>Nombre: <input type="text" /></p>
      <p>Correo electrónico: <input type="email" /></p>
      <p>Mensaje: <textarea></textarea></p>
      <button>Enviar</button>
    </div>
  );
};

const HomePage = () => (
  <>
    <HeroSection />
    <ProductCategories />
    <NewProducts />
    <PromoBox />
    <ReviewSection />
    <Footer />
  </>
);

const Header = () => {
  return (
    <header className="header">
      <div className="top-banner">
        Envios gratis a partir de 200 soles.
      </div>
      <div className="navbar">
        <div className="logo">
          <Link to="/"><h1> \cÖn/ + \tÄi/ + \nËr/ </h1></Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
        </div>
        <div className="navbar-icons">
          <span>❤ 12</span>
          <Link to="/login">Login</Link>
          <Link to="/carrito">🛒</Link>
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/sale">SALE</Link></li>
          <li><Link to="/Ferreteria">Ferretería</Link></li>
          <li><Link to="/brands">Marcas</Link></li>
          <li><Link to="/outlet">Outlet</Link></li>
          <li><Link to="/shipping">Shipping</Link></li>
          <li><Link to="/returns-warranty">Devoluciones & Garantías</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

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
const Carrito = () => {
  return (
    <>
    <section className="grid-carrito">
      <h2>Dentro de cada carrito </h2>
      <h2>Se encuentra un gran potencial.</h2>
         
      <p>
      Parece que su carrito de compras está vacío.

      Explore y agregue elementos para comenzar.
      </p>
        <Link to="/products">
        <button className="add-cart-productos" >Empieza a comprar</button></Link> 
        <p>o</p>
        <Link to="/login">
        <button className="add-cart-login">Login</button></Link>
        <p>Para ver los artículos de su carrito y los productos guardados
        de tu visita anterior</p>
    </section>
     <Footer />
     </>
  );
};

const ProductCategories = () => {
  return (
    <section className="product-categories">
      {/* Categorías de productos con enlaces */}
    </section>
  );
};

const NewProducts = () => {
  return (
    <section className="new-products">
      <h2>New products!</h2>
      <div className="product-grid">
        {/* Cuadrícula de productos nuevos */}
      </div>
    </section>
  );
};

const PromoBox = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [buttonText, setButtonText] = useState('SUSCRÍBETE');
  const [buttonColor, setButtonColor] = useState('#007bff');

  const handleSubscribe = () => {
    const newButtonText = buttonText === 'SUSCRÍBETE' ? 'GRACIAS' : 'SUSCRÍBETE';
    const newButtonColor = buttonColor === '#007bff' ? '#f5deb3' : '#007bff';
    setButtonText(newButtonText);
    setButtonColor(newButtonColor);
  
    if (newButtonText === 'GRACIAS') {
      const subscriptionCode = Math.floor(10000 + Math.random() * 90000);
      const subscriptionData = { email, subscriptionCode };
  
      fetch('http://localhost:5000/saveSubscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscriptionData),
      })
        .then(response => response.json())
        .then(data => {
          alert(`Gracias por tu suscripción a ofertas. Tu código es: ${subscriptionCode}`);
          setEmail(''); // Limpiar el campo de correo después de la suscripción
        })
        .catch(error => console.error('Error al guardar la suscripción:', error));
    }
  };
  

  return (
    <section className="promo-box">
      <h2>Promo box</h2>
      <p>UP TO</p>
      <h1>50%</h1>
      <p>descuentos especiales por Categorias</p>
      <input
        type="email"
        placeholder="Escribe tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handleSubscribe}
        style={{ backgroundColor: buttonColor }}
      >
        {buttonText}
      </button>
    </section>
  );
};

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { title: "Buena atención al cliente", stars: "⭐⭐⭐⭐☆", text: "El servicio al cliente fue muy amable y resolvió todas mis dudas.", author: "Ana López, hace 3 días" },
    { title: "Calidad en cada detalle", stars: "⭐⭐⭐⭐⭐", text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.", author: "Mario Díaz, hace 2 días" },
    { title: "Muy funcional", stars: "⭐⭐⭐⭐⭐", text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.", author: "Luz Gómez, hace 1 día" },
    { title: "Entrega rápida y segura", stars: "⭐⭐⭐⭐⭐", text: "El paquete llegó antes de lo esperado y en perfectas condiciones.", author: "Carlos Ramos, hace 5 días" },
    { title: "Buena atención al cliente", stars: "⭐⭐⭐⭐☆", text: "El servicio al cliente fue muy amable y resolvió todas mis dudas.", author: "Ana López, hace 3 días" },
    { title: "Calidad en cada detalle", stars: "⭐⭐⭐⭐⭐", text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.", author: "Mario Díaz, hace 2 días" },
    { title: "Muy funcional", stars: "⭐⭐⭐⭐⭐", text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.", author: "Luz Gómez, hace 1 día" },
    { title: "Entrega rápida y segura", stars: "⭐⭐⭐⭐⭐", text: "El paquete llegó antes de lo esperado y en perfectas condiciones.", author: "Carlos Ramos, hace 5 días" },
 
  ];

  const reviewsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getVisibleReviews = () => {
    const start = currentIndex * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  };

  return (
    <section className="review-section">
      <div className="subscribe-box">
        <h2>Gana 5% de descuento, suscríbete</h2>
        <p>Suscríbete al boletín mensual. Recibe las últimas actualizaciones de productos y ofertas especiales directamente en tu bandeja de entrada.</p>
        <div className="subscribe-input">
          <input type="email" placeholder="Escribe tu email" />
          <button>SUBSCRÍBETE</button>
        </div>
      </div>
      <div className="reviews">
        <div className="carousel">
          <button onClick={prevReview}>&lt;</button>
          <div className="review-row">
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="review-card">
                <h3>{review.title}</h3>
                <p>{review.stars}</p>
                <p>“{review.text}”</p>
                {review.author && <p>{review.author}</p>}
              </div>
            ))}
          </div>
          <button onClick={nextReview}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

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
            <li><a href="#">Devoluciones & Garantías</a></li>
            <li><a href="#">Pagos</a></li>
            <li><a href="#">Envío</a></li>
            <li><a href="#">Términos del Servicio</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Información Corporativa</h3>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Marcas</a></li>
            <li><a href="#">Afiliados</a></li>
            <li><a href="#">Inversionistas</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Gift Card</h3>
          <ul>
            <li><a href="#">Comprar Gift Cards</a></li>
            <li><a href="#">Canjear Gift Card</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Ubicación</h3>
          <p>Perú</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. Todos los derechos reservados.</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/Ferreteria" element={<Ferreteria />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns-warranty" element={<ReturnsWarranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/Ferreteria/Tornillos" element={<Tornillos />} />
          <Route path="/Ferreteria/Tornillos/:productTitle" element={<Tornillos />} />
          <Route path="/Ferreteria/Adhesivos" element={<Adhesivos />} />
          <Route path="/Ferreteria/Adhesivos/:productTitle" element={<Adhesivos />} />
          <Route path="/Soldaduras" element={<Soldaduras />} />
          <Route path="/Tuverias" element={<Tuverias />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
