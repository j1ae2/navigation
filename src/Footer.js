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

export default Footer;