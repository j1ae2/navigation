
export async function enviarMensajeContacto(datosContacto) {
    const response = await fetch("http://localhost:5001/contacto", {
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
  }