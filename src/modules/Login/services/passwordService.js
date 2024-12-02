const url = "https://backend-hkjj.onrender.com/changepass";
export async function changePass(email, currentPassword, newPassword) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, currentPassword, newPassword }),
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