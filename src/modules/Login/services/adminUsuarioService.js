const API_URL = "https://backend-hkjj.onrender.com/admin/users";
export const obtenerUsuarios = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener usuarios");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const agregarUsuario = async (usuario) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error al agregar usuario");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const actualizarUsuario = async (id, usuario) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) throw new Error("Error al actualizar usuario");
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const eliminarUsuario = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar usuario");
  } catch (error) {
    console.error(error);
    throw error;
  }
};
