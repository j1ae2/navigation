const url = "http://localhost:8000/contacto";
export async function enviarMensajeContacto(datosContacto) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosContacto),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error || "Ocurrió un error al enviar el mensaje."
      );
    }

    return await response.json();
  } catch (error) {
    throw error.message || "Error al realizar la solicitud.";
  }
}
