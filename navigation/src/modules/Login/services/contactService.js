const url = "http://localhost:5000/contacto";
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
      throw new Error("Ocurrió un error al enviar el mensaje.");
    }

    return await response.json();
  } catch (error) {
    throw error.message || "Error al realizar la solicitud.";
  }
}
