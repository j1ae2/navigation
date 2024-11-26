const url = "http://localhost:8000/pedido";
export async function crearPedido(pedidoData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedidoData),
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
