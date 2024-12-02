import React, { useState, useEffect } from "react";
import {
  obtenerProductos,
  añadirProductos,
  actualizarProductos,
  eliminarProductos,
} from "./modules/Login/services/adminProductoService";

const ProductCRUD = () => {
  const [products, setProducts] = useState([]);
  const [formulario, setFormulario] = useState({ title: "", description: "", price: 0 });
  const [productoEditar, setProductoEditar] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productos = await obtenerProductos();
        setProducts(productos);
      } catch (error) {
        console.log(error)
      }
    };
    fetchProducts();
  }, []);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const manejarAgregar = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = await añadirProductos(formulario);
      setProducts([...products, nuevoProducto]);
      setFormulario({ title: "", description: "", price: 0 });
    } catch (error) {
      console.log(error)
    }
  };

  const manejarActualizar = async (e) => {
    e.preventDefault();
    try {
      const productoActualizado = await actualizarProductos(productoEditar, formulario);
      setProducts((prev) =>
        prev.map((producto) =>
          producto.id === productoEditar ? { ...producto, ...productoActualizado } : producto
        )
      );
      setProductoEditar(null);
      setFormulario({ title: "", description: "", price: 0 });
    } catch (error) {
      console.log(error)
    }
  };

  const manejarEliminar = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;
    try {
      await eliminarProductos(id);
      setProducts((prev) => prev.filter((producto) => producto.id !== id));
    } catch (error) {
      console.log(error)
    }
  };

  const cancelarEdicion = () => {
    setProductoEditar(null);
    setFormulario({ title: "", description: "", price: 0 });
  };

  return (
    <div className="product-crud">
      <h2>Gestión de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>
              <strong>{product.title}</strong> - {product.description} - ${product.price}
            </p>
            <button onClick={() => setProductoEditar(product.id)}>Editar</button>
            <button onClick={() => manejarEliminar(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={productoEditar ? manejarActualizar : manejarAgregar}>
        <h3>{productoEditar ? "Editar Producto" : "Agregar Producto"}</h3>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formulario.title}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={formulario.description}
            onChange={manejarCambio}
            required
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="price"
            value={formulario.price}
            onChange={manejarCambio}
            required
          />
        </label>
        <button type="submit">{productoEditar ? "Actualizar" : "Agregar"}</button>
        {productoEditar && <button onClick={cancelarEdicion}>Cancelar</button>}
      </form>
    </div>
  );
};

export default ProductCRUD;