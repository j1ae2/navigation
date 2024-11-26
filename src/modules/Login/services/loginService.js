const url = "http://localhost:8000/login";
export async function login(email, password) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
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
