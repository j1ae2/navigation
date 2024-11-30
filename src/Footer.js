






const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Need help?</h3>
          <button onClick={() => window.location.href = "https://www.containerstore.com/contact/index.htm"}>Contact Us</button>
        </div>
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul>
            <li><a href="https://j1ae2.github.io/returns-warranty" target="_blank" rel="noopener noreferrer">Devoluciones & Garantías</a></li>
            <li><a href="https://www.example.com/payments" target="_blank" rel="noopener noreferrer">Pagos</a></li>
            <li><a href="https://j1ae2.github.io/shipping" target="_blank" rel="noopener noreferrer">Envío</a></li>
            <li><a href="https://j1ae2.github.io/returns-warranty" target="_blank" rel="noopener noreferrer">Términos del Servicio</a></li>
            <li><a href="https://www.example.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Información Corporativa</h3>
          <ul>
            <li><a href="https://www.example.com/about" target="_blank" rel="noopener noreferrer">Acerca de Nosotros</a></li>
            <li><a href="https://j1ae2.github.io/brands" target="_blank" rel="noopener noreferrer">Marcas</a></li>
            <li><a href="https://www.example.com/affiliates" target="_blank" rel="noopener noreferrer">Afiliados</a></li>
            <li><a href="https://www.example.com/investors" target="_blank" rel="noopener noreferrer">Inversionistas</a></li>
            <li><a href="https://www.example.com/cookies" target="_blank" rel="noopener noreferrer">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Gift Card</h3>
          <ul>
            <li><a href="https://www.example.com/buy-giftcards" target="_blank" rel="noopener noreferrer">Comprar Gift Cards</a></li>
            <li><a href="https://www.example.com/redeem-giftcards" target="_blank" rel="noopener noreferrer">Canjear Gift Card</a></li>
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
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
