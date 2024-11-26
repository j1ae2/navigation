const url = "http:localhost:8000/register";
export async function registerUser(email, password) {
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
      throw new Error(errorData.error || "Error al registrar el usuario.");
    }

    return await response.json();
  } catch (error) {
    throw error.message || "Error al realizar la solicitud.";
  }
}
