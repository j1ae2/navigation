import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';
import PROMOCION20porc from './logos/PROMOCION20porc.png';
import Ferreteria from './modules/Ferreteria/Ferreteria';
import { Tornillos, Adhesivos, Soldaduras, Tuverias } from './modules/Ferreteria/tipoFerreteria';
import ReturnsWarranty from './ReturnsWarranty';
import Products from './products';
import Outlet from './outlet';
import Marcas from './Marca';
import Login from './modules/Login/login';
import Register from './modules/Login/register';
import Footer from './Footer';
import Contact from './contacto';
import SalePageContent from './SalePageContent'; // Nuevo componente para el contenido de la página de ofertas
import Shipping from './shipping';
import { useCarrito } from "./modules/Carrito/carritoContext";
import Pedido from './modules/Carrito/Pedido';

const Brands = () => <Marcas />;
const Order = () => <Pedido />;
const Outlets = () => <Outlet />;
const HomePage = () => (
  <>
    <Promocion20porciento />
    <GarajeOferta />
    <HeroSection />
    <ProductCategories />
    <NewProducts />
    <PromoBox />
    <ReviewSection />
  </>
);

const Header = () => {
  const { carrito } = useCarrito();
  const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0);
  return (
    <header className="header">
      <div className="top-banner">Envios gratis a partir de 200 soles.</div>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2022/05/the_container_store_logo_freelogovectors.net_.png" alt="The Container Store Icon" className="icon"/>
            <h1 className="TextCointainer">The Container Store<h2>®</h2></h1>
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
        </div>
        <div className="navbar-icons">
          <span>❤ 12</span>
          <Link to="/login">Login</Link>
          <Link to="/shop">🛒 <span>{totalProductos}</span></Link>
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

const Promocion20porciento = () => {
  return (
    <section className="promocion20porc">
      <img src={PROMOCION20porc} alt="Promoción 20% Off" className="promocion20porc-image" />
    </section>
  );
};
const GarajeOferta = () => {
  return (
    <section className="garaje-oferta-section">
      <div className="garaje-oferta-content">
        <p>SOLO EN TIEMPO LIMITADO</p>
        <h1>Organiza tu garaje con estilo</h1>
        <ul>
          <li><strong>$100 off</strong> en compras de más de $500</li>
          <li><strong>$250 off</strong> en compras de más de $1,000</li>
          <li><strong>$500 off</strong> en compras de más de $1,500</li>
        </ul>
        <p>Prepara tu garaje para ser más funcional y ordenado. Promoción válida hasta el 26/11.</p>
        <div className="garaje-oferta-buttons">
          <button>Consulta de diseño gratuita</button>
          <Link to="/products/Garaje">
            <button>Ver productos de garaje</button>
          </Link>
        </div>
      </div>
    </section>
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
  const { carrito, eliminarDelCarrito, actualizarCantidad, limpiarCarrito } = useCarrito();
  const navigate = useNavigate();
  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <section className="grid-carrito">
        <h2>Dentro del carrito</h2>
        <h2>Se encuentra un gran potencial.</h2>
        <p>
          Parece que su carrito de compras está vacío.
          Explore y agregue elementos para comenzar.
        </p>
        <Link to="/products">
          <button className="add-cart-productos">Empieza a comprar</button>
        </Link>
        <p>o</p>
        <Link to="/login">
          <button className="add-cart-login">Login</button>
        </Link>
        <p>
          Para ver los artículos de su carrito y los productos guardados de tu
          visita anterior
        </p>
      </section>
    );
  }

  return (
    <section className="carrito">
      <h2>Tu carrito</h2>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>${item.price.toFixed(2)}</p>
              <input
                type="number"
                min="1"
                value={item.cantidad}
                onChange={(e) => actualizarCantidad(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={limpiarCarrito}>Vaciar Carrito</button>
        <button
  onClick={() => navigate("/pedido")}
  className="btn btn-pedido"
>
  Realizar Pedido
</button>

      </div>
    </section>
  );
};

const ProductCategories = () => (
  <section className="product-categories">
    {/* Categorías de productos con enlaces */}
  </section>
);

const NewProducts = () => (
  <section className="new-products">
    <h2>New products!</h2>
    <div className="product-grid">
      {/* Cuadrícula de productos nuevos */}
    </div>
  </section>
);

const PromoBox = () => {
  const [email, setEmail] = useState('');
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
          setEmail('');
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
    { title: "Muy buen producto", stars: "⭐⭐⭐⭐⭐", text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.", author: "Luz Gómez, hace 1 día" },
    { title: "Entrega rápida y segura", stars: "⭐⭐⭐⭐⭐", text: "El paquete llegó antes de lo esperado y en perfectas condiciones.", author: "Carlos Ramos, hace 5 días" },
    { title: "Calidad en cada detalle", stars: "⭐⭐⭐⭐⭐", text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.", author: "Mario Díaz, hace 2 días" },
    { title: "Muy buen producto", stars: "⭐⭐⭐⭐⭐", text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.", author: "Luz Gómez, hace 1 día" },
    { title: "Buena atención al cliente", stars: "⭐⭐⭐⭐☆", text: "El servicio al cliente fue muy amable y resolvió todas mis dudas.", author: "Ana López, hace 3 días" },
    { title: "Calidad en cada detalle", stars: "⭐⭐⭐⭐⭐", text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.", author: "Mario Díaz, hace 2 días" },
    
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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Carrito/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/sale" element={<SalePageContent />} /> 
          <Route path="/Ferreteria" element={<Ferreteria />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/outlet" element={<Outlets />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns-warranty" element={<ReturnsWarranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pedido" element={<Order />} />
          <Route path="/Ferreteria/Tornillos" element={<Tornillos />} />
          <Route path="/Ferreteria/Tornillos/:productTitle" element={<Tornillos />} />
          <Route path="/Ferreteria/Adhesivos" element={<Adhesivos />} />
          <Route path="/Ferreteria/Adhesivos/:productTitle" element={<Adhesivos />} />
          <Route path="/Soldaduras" element={<Soldaduras />} />
          <Route path="/Tuverias" element={<Tuverias />} />
        </Routes>
        <Footer /> {/* Footer agregado aquí para que se muestre en todas las subpáginas */}
      </div>
    </Router>
  );
};

export default App;
