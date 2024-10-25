import React from 'react';
import "./Ferreteria.css";

// Componente para Tornillos
const Tornillos = () => {
  const TornillosList = [
    {
        "title": "Tornillos de Cabeza Hueca",
        "description": "Con un giro más profundo que los tornillos de cabeza plana y redondeada, estos soportan más torsión para un agarre más firme",
        "products": 7875,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNGP45aINpEOzcRxvSbmIxwy0harwNHgJYre6x07X6eeGuE7MDquN216LTS9NdnUK2Z4&usqp=CAU"
    },
    {
        "title": "Tornillos de Cabeza Redondeada",
        "description": "Se sitúan justo por encima de la superficie para un acabado de bajo perfil y sostienen más firmemente que los tornillos de cabeza plana",
        "products": 10407,
        "image": "https://img.freepik.com/vector-premium/ilustracion-tornillo-metal-aislado-sobre-fondo-blanco-cabeza-redonda-tipos-tornillos-ranurados-cruzados-hexagonales-vista-superior_212889-4520.jpg"
    },
    {
        "title": "Tornillos de Cabeza Hexagonal",
        "description": "Se utilizan con tuercas para crear una unión más fuerte que los tornillos de cabeza plana y redondeada",
        "products": 8889,
        "image": "https://ferrecito.com/cdn/shop/files/TORM-1-4X1-1-2_1024x.jpg?v=1710432573"
    },
    {
        "title": "Tornillos de Cabeza Plana",
        "description": "Se ajustan en agujeros avellanados para un acabado a ras",
        "products": 6539,
        "image": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/4122917_01/w=1500,h=1500,fit=pad"
    },
    {
        "title": "Tornillos para Atornillar",
        "description": "Fijan una variedad de materiales juntos sin necesidad de roscar el agujero primero",
        "products": 5470,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de Hombro",
        "description": "Hacen girar partes alrededor del cilindro bajo la cabeza para guiarlas y alinearlas durante la instalación",
        "products": 6603,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de Ajuste",
        "description": "Ejercen presión en la punta para mantener las partes en su lugar, a diferencia de los tornillos que mantienen el material unido con hilos",
        "products": 5289,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos para Madera",
        "description": "Fijan material a la madera o piezas de madera entre sí",
        "products": 1481,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de Manija",
        "description": "Se aprietan y aflojan a mano sin necesidad de herramientas",
        "products": 1519,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de Carro",
        "description": "Una cabeza lisa proporciona un acabado terminado mientras que un cuello cuadrado mantiene el tornillo en su lugar al usar una tuerca",
        "products": 872,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de 12 Puntos",
        "description": "12 puntos de contacto manejan más torsión que una cabeza hexagonal mientras que un flanco elimina la necesidad de una arandela",
        "products": 208,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos para Paneles Captivos",
        "description": "Aseguran paneles y recintos mientras aún se tiene acceso a ellos",
        "products": 378,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos para Drywall",
        "description": "Fijan paneles de drywall a materiales como madera, metal y drywall",
        "products": 132,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Asortimientos de Sujetadores",
        "description": "Mantente preparado teniendo sujetadores en tamaños y materiales comunes a mano",
        "products": 17,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Tornillos de Cabeza Cuadrada",
        "description": "Gira los lados planos grandes con una llave en agujeros cuadrados que impiden la rotación adicional",
        "products": 145,
        "image": "https://via.placeholder.com/80"
    },
    {
        "title": "Estudios",
        "description": "Presiona, suelda o atornilla en su lugar para agregar un punto de sujeción roscado",
        "products": 674,
        "image": "https://via.placeholder.com/80"
    }
]
;

  return (
    <section className="Productos-tornillos">
      <h2>Tornillos</h2>
      <div className="product-grid">
        {TornillosList.map((item, index) => (
          <div className="tarjeta-producto" key={index}>
            <img src={item.image} alt={item.title} className="Imagen-producto" />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.products} products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Componente para Adhesivos
const Adhesivos = () => {
  return (
    <div>
      <h2>Adhesivos</h2>
      <p>Aquí puedes mostrar los productos disponibles para Adhesivos.</p>
    </div>
  );
};

// Componente para Soldaduras
const Soldaduras = () => {
  return (
    <div>
      <h2>Soldaduras</h2>
      <p>Aquí puedes mostrar los productos disponibles para Soldaduras.</p>
    </div>
  );
};

// Componente para Tuverias y accesorios
const Tuverias = () => {
  return (
    <div>
      <h2>Tuverias y accesorios</h2>
      <p>Aquí puedes mostrar los productos disponibles para Tuverias y accesorios.</p>
    </div>
  );
};

// Exportar los componentes para usarlos en otras partes
export { Tornillos, Adhesivos, Soldaduras, Tuverias };
