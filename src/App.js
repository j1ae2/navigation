import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './App.css';
import PROMOCION20porc from './logos/PROMOCION20porc.png';
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
import HolidayShop from './Holidayshop';
import { useCarrito } from "./modules/Carrito/carritoContext";
import Pedido from "./modules/Carrito/Pedido";
import { AuthContext } from "./modules/Login/loginContext";
import Perfil from "./Perfil";
import Productsferre from './tipoFerreteria';

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
  const { usuario, cerrarSesion } = useContext(AuthContext);
  const totalProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );
  return (
    <header className="header">
      <div className="top-banner">Envios gratis a partir de 200 soles.</div>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img
              src="https://cdn.freelogovectors.net/wp-content/uploads/2022/05/the_container_store_logo_freelogovectors.net_.png"
              alt="The Container Store Icon"
              className="icon"
            />
            <h1 className="TextCointainer">
              The Container Store<h2>®</h2>
            </h1>
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Buscar productos..." />
        </div>
        <div className="navbar-icons">
          <span>❤ 12</span>
          <Link to="/shop">
            🛒 <span>{totalProductos}</span>
          </Link>
          {usuario ? (
            <div className="user-session">
              <span>Hola, {usuario.username}</span>
              <button onClick={cerrarSesion}>Cerrar sesión</button>
              <Link to="/perfil/{}"><button>Perfil</button></Link>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/Navideñas">ComprasNavideñas</Link></li>
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
      <img
        src={PROMOCION20porc}
        alt="Promoción 20% Off"
        className="promocion20porc-image"
      />
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
          <li>
            <strong>$100 off</strong> en compras de más de $500
          </li>
          <li>
            <strong>$250 off</strong> en compras de más de $1,000
          </li>
          <li>
            <strong>$500 off</strong> en compras de más de $1,500
          </li>
        </ul>
        <p>
          Prepara tu garaje para ser más funcional y ordenado. Promoción válida
          hasta el 26/11.
        </p>
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
        El hogar para las fiestas es mucho mejor con Elfa. Ya sea que necesites
        actualizar un rincón, crear un sistema de orden en la despensa o renovar
        una habitación de invitados, Elfa es el sistema infinitamente flexible e
        increíblemente duradero que te permite preparar tu hogar para las
        fiestas en un abrir y cerrar de ojos.
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
  const { carrito, eliminarDelCarrito, actualizarCantidad, limpiarCarrito } =
    useCarrito();
    const { usuario } = useContext(AuthContext);
  const navigate = useNavigate();

  const total = carrito.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );
  if (carrito.length === 0 && !usuario) {
    return (
      <section className="grid-carrito">
        <h2>Dentro del carrito</h2>
        <h2>Se encuentra un gran potencial.</h2>
        <p>
          Parece que su carrito de compras está vacío. Explore y agregue
          elementos para comenzar.
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
  } else if (carrito.length === 0 && usuario){
    return (
      <section className="grid-carrito">
        <h2>Dentro del carrito</h2>
        <h2>Se encuentra un gran potencial.</h2>
        <p>
          Parece que su carrito de compras está vacío. Explore y agregue
          elementos para comenzar.
        </p>
        <Link to="/products">
          <button className="add-cart-productos">Empieza a comprar</button>
        </Link>
      </section>
    );
  }
  const shippingCost = 12; // Costo fijo de envío como ejemplo
  const discount = 5.0; // Descuento aplicado como ejemplo

  return (
    <section className="shopping-cart">
      <h2>Carrito de Compras</h2>
      <div className="cart-content">
        {/* Sección izquierda: Detalles de los productos */}
        <div className="cart-items">
          <h3>Envio a domicilio ({carrito.length} items)</h3>
          <p className="shipment-info">
            Llegada: <strong>Listo lunes, diciembre 16</strong>
          </p>
          {carrito.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>SKU#: {item.sku}</p>
                <p>Dimensions: {item.dimensions}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad - 1)
                    }
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) =>
                      actualizarCantidad(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() =>
                      actualizarCantidad(item.id, item.cantidad + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="item-price">
                  <span className="current-price">
                    ${item.price.toFixed(2)}
                  </span>
                  <span className="original-price">$9.99</span>
                </p>
                <button
                  className="action-button"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Delete
                </button>
                <button className="action-button">Save for Later</button>
                <button className="action-button">Move to Wishlist</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={limpiarCarrito} className="clear-cart">
          Clear Cart
        </button>
        {/* Sección derecha: Resumen de pedido */}
        <div className="cart-summary">
          <h3>Resumen de Orden</h3>
          <div className="summary-item">
            <span>Orden Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Ahorro:</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Envio:</span>
            <span>${shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Sin Impuesto Total:</span>
            <span>${(total - discount + shippingCost).toFixed(2)}</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => navigate("/pedido")}
          >
            Realizar pedido ({carrito.length})
          </button>
          <div className="offers-promos">
            <h4>Ofertas y Promo</h4>
          </div>
        </div>
      </div>
    </section>
  );
};








const ProductCategories = () => (
  <section className="product-categories">
    {/* Categorías de productos con enlaces */}
  </section>
);






//imagenes trending

const NewProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imágenes (reemplaza los links con tus imágenes)
  const images = [
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/507973/10093949-jumbo-merry-christmas-tote-.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/509697/10093907-fringe-ven.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/565133/10101846-medium-tote-gnome-snowglobe.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/563339/10101896-mini-tote-little-nutcracker.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/466986/10089050-ven1.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/396627/10082541g.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/500680/10093993-gift-bag-ven.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/554701/10101869-84077-lady-jayne-ven.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/399801/10082476_Collapsible-Box_with_Bow_Wh.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/565193/10102279-70422-punch-studio-ven.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.555.0.0/https://images.containerstore.com/catalogimages/556638/10102278-70421-punch-studio-ven.jpg?width=312&height=312",
    "https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/ecdf7130ef10013390340a3ba3fac80a.yottaa.net/v~4b.555/catalogimages/496355/10082050_Large_Collapsible-Box_with_.jpg?width=312&height=312&yocs=9y_9z_9B_9C_",
  ];

const itemsPerPage = 4;
const totalPages = Math.ceil(images.length / itemsPerPage);

const nextSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
};

const prevSlide = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
};

// Obtener las imágenes visibles en la página actual
const getVisibleImages = () => {
  const start = currentIndex * itemsPerPage;
  return images.slice(start, start + itemsPerPage);
};

return (
  <section className="new-products">
    <h2>New products!</h2>
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-button">{"<"}</button>
      <div className="carousel">
        {getVisibleImages().map((src, index) => (
          <img key={index} src={src} alt={`Producto ${currentIndex + index + 1}`} />
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button">{">"}</button>
    </div>
  </section>
);
};

















const PromoBox = () => {
  const [email, setEmail] = useState("");
  const [buttonText, setButtonText] = useState("SUSCRÍBETE");
  const [buttonColor, setButtonColor] = useState("#007bff");

  const handleSubscribe = () => {
    const newButtonText =
      buttonText === "SUSCRÍBETE" ? "GRACIAS" : "SUSCRÍBETE";
    const newButtonColor = buttonColor === "#007bff" ? "#f5deb3" : "#007bff";
    setButtonText(newButtonText);
    setButtonColor(newButtonColor);

    if (newButtonText === "GRACIAS") {
      const subscriptionCode = Math.floor(10000 + Math.random() * 90000);
      const subscriptionData = { email, subscriptionCode };

      fetch("http://localhost:5000/saveSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscriptionData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(
            `Gracias por tu suscripción a ofertas. Tu código es: ${subscriptionCode}`
          );
          setEmail("");
        })
        .catch((error) =>
          console.error("Error al guardar la suscripción:", error)
        );
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
    {
      title: "Buena atención al cliente",
      stars: "⭐⭐⭐⭐☆",
      text: "El servicio al cliente fue muy amable y resolvió todas mis dudas.",
      author: "Ana López, hace 3 días",
    },
    {
      title: "Calidad en cada detalle",
      stars: "⭐⭐⭐⭐⭐",
      text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.",
      author: "Mario Díaz, hace 2 días",
    },
    {
      title: "Muy buen producto",
      stars: "⭐⭐⭐⭐⭐",
      text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.",
      author: "Luz Gómez, hace 1 día",
    },
    {
      title: "Entrega rápida y segura",
      stars: "⭐⭐⭐⭐⭐",
      text: "El paquete llegó antes de lo esperado y en perfectas condiciones.",
      author: "Carlos Ramos, hace 5 días",
    },
    {
      title: "Calidad en cada detalle",
      stars: "⭐⭐⭐⭐⭐",
      text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.",
      author: "Mario Díaz, hace 2 días",
    },
    {
      title: "Muy buen producto",
      stars: "⭐⭐⭐⭐⭐",
      text: "Es justo lo que necesitaba. Práctico, de buen tamaño y fácil de usar.",
      author: "Luz Gómez, hace 1 día",
    },
    {
      title: "Buena atención al cliente",
      stars: "⭐⭐⭐⭐☆",
      text: "El servicio al cliente fue muy amable y resolvió todas mis dudas.",
      author: "Ana López, hace 3 días",
    },
    {
      title: "Calidad en cada detalle",
      stars: "⭐⭐⭐⭐⭐",
      text: "El producto está muy bien hecho. Atención a cada detalle. Me encantó.",
      author: "Mario Díaz, hace 2 días",
    },
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
        <p>
          Suscríbete al boletín mensual. Recibe las últimas actualizaciones de
          productos y ofertas especiales directamente en tu bandeja de entrada.
        </p>
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
          <Route path="/shop" element={<Carrito />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/sale" element={<SalePageContent />} /> 
          <Route path="/brands" element={<Brands />} />
          <Route path="/outlet" element={<Outlets />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns-warranty" element={<ReturnsWarranty />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil/:id" element= {<Perfil/>}/>
          <Route path="/pedido" element={<Order />} />
          <Route path="/Ferreteria" element={<Productsferre />} />
          <Route path="/Navideñas" element={<HolidayShop  />} />
        </Routes>
        <Footer />{" "}
        {/* Footer agregado aquí para que se muestre en todas las subpáginas */}
      </div>
    </Router>
  );
};

export default App;
