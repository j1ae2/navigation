export async function login(username, password) {
    const url = "http://localhost:5001/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      return await response.json(); // Retorna el mensaje de éxito
    } catch (error) {
      throw error; // Lanza el error para que el componente lo maneje
    }
  }