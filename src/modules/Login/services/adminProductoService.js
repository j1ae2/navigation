const API_URL = "http://localhost:8000/admin";
export async function adminLogin(username, password) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || "Ocurrió un error al intentar loguearse."
      );
    }
    return await response.json();
  } catch (error) {
    throw error.message || "Error al realizar la solicitud.";
  }
}

export const obtenerProductos = async () => {
  const response = await fetch(`${API_URL}/products`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  const products = await response.json();
  return products;
};

export const añadirProductos = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error al agregar el producto");
  }

  const newProduct = await response.json();
  return newProduct;
};

export const actualizarProductos = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el producto");
  }

  const updatedProduct = await response.json();
  return updatedProduct;
};

export const eliminarProductos = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el producto");
  }
};