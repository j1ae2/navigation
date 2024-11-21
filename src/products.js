import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './products.css';


  

const Products = () => {
  const { category } = useParams(); 
  const [selectedCategory, setSelectedCategory] = useState(category || 'Cocina'); 
  
  const categories = [
    'General',
    'Cocina',
    'Baño',
    'Oficina',
    'Garaje',
    'Cuarto de Manualidades',
    'Viaje',
    'Universidad',
    'Lavandería',
    'Bebés y Niños',
    'Fiestas',
    'Closet'
  ];

  // Lista de productos en formato de objetos, no JSX
  const products = [
    {
      title: 'Product Name 1',
      description: 'Description, color, size',
      price: 95,
      oldPrice: 119,
      discount: '-20%',
      image: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://www.containerstore.com/catalogimages/285812/basketball%202.jpg?width=1200&height=1200&align=center',
      category: 'Cocina'
    },
    {
      title: 'Product Name 2',
      description: 'Description, color, size',
      price: 95,
      image: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/532995/10098986-samson-faux-leather-bin-cog.jpg',
      category: 'Cocina'
    },
    {
      title: 'Product Name 3',
      description: 'Description, color, size',
      price: 95,
      image: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/337793/10074299-Stacker-Tote_10gal-Black.jpg',
      category: 'Cocina'
    },
    {
      title: 'Product Name 4',
      description: 'Description, color, size',
      price: 95,
      image: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.525.0.0/https://images.containerstore.com/catalogimages/562610/10104194-31231-treekeeper-ds-ven.jpg',
      category: 'Cocina'
      
    }
  ];

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Proyectos & Inspiración</h1>
        <p>¿En qué estás trabajando hoy?</p>
        <input type="text" placeholder="Buscar un proyecto, video, consejo, o publicación de blog" className="search-bar" />
      </header>

      <div className="products-content">
        <aside className="filter-sidebar">
          <h2>Filtrar por:</h2>
          <h3>Categoría</h3>
          <ul>
            {categories.map(category => (
              <li
                key={category}
                className={category === selectedCategory ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        <section className="products-grid">
          {filteredProducts.length ? (
            filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.image} alt={product.title} />
                <div className="product-info">
                  <span className="product-type">{product.type}</span>
                  <h3>{product.title}</h3>
                  {product.time && <p>{product.time}</p>}
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron productos en esta categoría.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Products;