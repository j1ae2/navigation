import React from "react";
import { Link } from "react-router-dom";


const TipoFerreteria = () => {
  return (
    <section className="product-categories">
      <div className="category">
        <Link to="/Ferreteria/Tornillos">
          <div className="category-img">
            <img
              src="https://waykenrm.com/wp-content/uploads/2021/09/fasteners-type-optimized.png"
              alt="Tornillos"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Tornillos</h3>
      </div>

      <div className="category">
        <Link to="/Ferreteria/Adhesivos">
          <div className="category-img">
            <img
              src="https://www.ferricentro.com/media/catalog/product/C/I/CINTA-AISLANTE-19-MM-X-20-MTS-PROFESIONAL-TESA.png?quality=80&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500"
              alt="Adhesivos"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Adhesivos</h3>
      </div>

      <div className="category">
        <Link to="/Soldaduras">
          <div className="category-img">
            <img
              src="https://www.corporacionelectricalima.com/web/imgproductos/herramientasequiposysoldaduras-esmerilangularyrecto.jpg"
              alt="Soldaduras"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Soldaduras</h3>
      </div>

      <div className="category">
        <Link to="/Tuverias">
          <div className="category-img">
            <img
              src="https://m.media-amazon.com/images/I/41v89CXOXQL._AC_UF894,1000_QL80_.jpg"
              alt="Tuverias y accesorios"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
        <h3>Tuverias y accesorios</h3>
      </div>
    </section>
  );
};

export default TipoFerreteria;

