const url = "https://backend-hkjj.onrender.com/register";
export async function registerUser(email, password, username) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username }),
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
