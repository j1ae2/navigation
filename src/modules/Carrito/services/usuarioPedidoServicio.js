export async function obtenerPedido(id) {
  try {
    console.log("inicio")
    const response = await fetch(`http://localhost:8000/perfil?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error al realizar el pedido.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message || "Hubo un problema con la solicitud.";
  }
}