const url = "http://localhost:5000/login";
export async function login(username, password) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Ocurrió un error al intentar loguearse.");
    }
    return await response.json();
  } catch (error) {
    throw error.message || "Error al realizar la solicitud.";
  }
}
