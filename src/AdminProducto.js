import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "./modules/Login/services/adminService";

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", description: "", price: 0 });

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
  };

  const handleUpdateProduct = async (id,updatedProduct) => {
    const updated = await updateProduct(id, updatedProduct);
    setProducts(products.map((p) => (p.id === id ? updated : p)));
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="product-crud">
      <h3>Lista de Productos</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <button onClick={() => handleUpdateProduct(product.id, { title: "INSERTAR TEXTO" })}>
              Editar
            </button>
            <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div className="add-product">
        <h4>Agregar Producto</h4>
        <input
          type="text"
          placeholder="Título"
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={handleAddProduct}>Agregar</button>
      </div>
    </div>
  );
};

export default ProductCRUD;