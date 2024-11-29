const url = "http://localhost:8000/Ferreteria";
export const obtenerProductosFerreteria = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }
  
      const data = await response.json();
      if (!Array.isArray(data.productsferre)) {
        throw new Error("El formato de los datos no es válido");
      }
      return data.productsferre.map((producto) => ({
        ...producto,
        categoria: producto.Categorium?.nombre?.trim().toLowerCase() || "sin categoría",
      }));
    } catch (error) {
      throw error.message || "Ocurrió un error inesperado";
    }
  };