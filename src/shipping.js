import React, { useState } from 'react';

const departamentos = ["Lima", "Arequipa", "Trujillo", "Cajamarca", "Cusco", "Piura", "Otros"];
const provincias = {
  Lima: ["Lima Metropolitana", "Cañete", "Barranca"],
  Arequipa: ["Arequipa", "Camaná", "Caravelí"],
  LaLibertad: ["Trujillo", "Ascope", "Pacasmayo"],
  Cajamarca: ["Cajamarca", "Jaén", "Chota"],
  Cusco: ["Cusco", "Calca", "Urubamba"],
  Piura: ["Piura", "Sullana", "Talara"],
  Otros: ["Provincia Genérica"]
};
const distritos = {
  "Lima Metropolitana": ["Miraflores", "San Isidro", "Surco", "Barranco", "San Borja", "La Molina", "Pueblo Libre", "Magdalena del Mar", "Jesús María", "Lince"],
  "Cañete": ["San Vicente", "Imperial", "Mala"],
  "Barranca": ["Paramonga", "Supe", "Barranca"],
  "Arequipa": ["Cercado", "Cayma", "Yanahuara"],
  "Camaná": ["Camaná", "Matarani", "Ocoña"],
  "Caravelí": ["Atico", "Chala", "Quicacha"],
  "LaLibertad": ["Centro", "Víctor Larco", "El Porvenir"],
  "Ascope": ["Chocope", "Paiján", "Casa Grande"],
  "Pacasmayo": ["Guadalupe", "Jequetepeque", "San Pedro"],
  "Cajamarca": ["Centro", "Baños del Inca", "San Miguel"],
  "Jaén": ["Jaén", "Bellavista", "San Ignacio"],
  "Chota": ["Chota", "Cutervo", "Lajas"],
  "Cusco": ["Santiago", "San Sebastián", "Wanchaq"],
  "Calca": ["Pisac", "Yucay", "Calca"],
  "Urubamba": ["Urubamba", "Ollantaytambo", "Maras"],
  "Piura": ["Piura", "Castilla", "Catacaos"],
  "Sullana": ["Sullana", "Querecotillo", "Marcavelica"],
  "Talara": ["Talara", "Máncora", "Lobitos"],
  "Provincia Genérica": ["Distrito Genérico"]
};

const Shipping = () => {
  const [selectedDepartamento, setSelectedDepartamento] = useState("");
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [selectedDistrito, setSelectedDistrito] = useState("");
  const [shippingCost, setShippingCost] = useState(null);

  const handleDepartamentoChange = (event) => {
    setSelectedDepartamento(event.target.value);
    setSelectedProvincia("");
    setSelectedDistrito("");
  };

  const handleProvinciaChange = (event) => {
    setSelectedProvincia(event.target.value);
    setSelectedDistrito("");
  };

  const calculateShippingCost = () => {
    if (selectedDepartamento === "Otros") {
      setShippingCost("Muy pronto estaremos en nuevos sitios");
    } else {
      const baseCost = 10;
      const extraCost = distritos[selectedProvincia]?.indexOf(selectedDistrito) + 1 || 1;
      setShippingCost(`S/${baseCost + extraCost} soles`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Envios</h2>
      <form>
        <label>Departamento:</label>
        <select
          value={selectedDepartamento}
          onChange={handleDepartamentoChange}
        >
          <option value="">Seleccionar Departamento</option>
          {departamentos.map((dep) => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>

        {selectedDepartamento && selectedDepartamento !== "Otros" && (
          <>
            <label>Provincia:</label>
            <select
              value={selectedProvincia}
              onChange={handleProvinciaChange}
            >
              <option value="">Seleccionar Provincia</option>
              {(provincias[selectedDepartamento] || []).map((prov) => (
                <option key={prov} value={prov}>{prov}</option>
              ))}
            </select>
          </>
        )}

        {selectedProvincia && selectedDepartamento !== "Otros" && (
          <>
            <label>Distrito:</label>
            <select
              value={selectedDistrito}
              onChange={(e) => setSelectedDistrito(e.target.value)}
            >
              <option value="">Seleccionar Distrito</option>
              {(distritos[selectedProvincia] || []).map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
          </>
        )}
        
        <button
          type="button"
          onClick={calculateShippingCost}
          style={{ display: "block", margin: "10px auto" }}
        >
          Calcular Envío
        </button>
      </form>
      {shippingCost !== null && (
        <p>{shippingCost}</p>
      )}

<img 
        src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/ecdf7130ef10013390340a3ba3fac80a.yottaa.net/v~4b.555/medialibrary/images/curbside/masthead-curbside-desktop.jpg?yocs=9y_9B_9C_" 
        alt="Envios" 
        style={{ width: "100%", marginTop: "20px", borderRadius: "10px" }} 
      />

      {/* Texto traducido en dos columnas */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        {/* Primera columna */}
        <div style={{ maxWidth: "45%", textAlign: "left" }}>
     
        <h3>Recogida en la Tienda</h3>
          <p>
            Recoger tu pedido en la tienda es GRATIS y rápido. Simplemente haz tu pedido en línea
            y selecciona "Recogida en la Tienda" al finalizar la compra. Te enviaremos un correo electrónico
            o un mensaje de texto con instrucciones específicas cuando tu pedido esté listo.
            Una vez que llegues, haz clic en el enlace de tu correo electrónico, y llevaremos tu pedido a tu coche.
          </p>
        
          <p>
            También puedes llamar al <strong>1-800-733-3532</strong> para realizar un pedido para la Recogida en la Tienda.
          </p>
          {/* Imagen para Recogida en la Tienda */}
          <img
            src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/ecdf7130ef10013390340a3ba3fac80a.yottaa.net/v~4b.555/medialibrary/images/icons/icon_curbside-blue.svg?yocs=9y_9C_"
            alt="Recogida en la Tienda"
            style={{ width: "100%", marginTop: "10px", borderRadius: "10px" }}
          />
        </div>

        {/* Segunda columna */}
        <div style={{ maxWidth: "45%", textAlign: "left" }}>
          <h3>Entrega Local</h3>
          <p>
            Ofrecemos entrega local en mercados seleccionados. Solo selecciona "Entrega Local" al finalizar la compra,
            y recogeremos tu pedido en la tienda y lo entregaremos en tu hogar. En otros mercados,
            alentamos a nuestros clientes a usar uno de nuestros socios de entrega, como Dolly.
            Selecciona "Recogida en la Tienda" al finalizar la compra y luego permite que Dolly recoja tu pedido a través de su aplicación.
          </p>
          <p>
            <strong>EXCLUSIVAMENTE EN MANHATTAN:</strong> Haz tu pedido en línea o compra en la tienda con un escáner
            y haz que se entregue en cualquier lugar de Manhattan por solo $29.99.
          </p>
          {/* Imagen para Entrega Local */}
          <img
            src="https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/ecdf7130ef10013390340a3ba3fac80a.yottaa.net/v~4b.555/medialibrary/images/icons/icon_truck-blue.svg?yocs=9y_9C_"
            alt="Entrega Local"
            style={{ width: "100%", marginTop: "10px", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Shipping;