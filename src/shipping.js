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
    </div>
  );
};

export default Shipping;
