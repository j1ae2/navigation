const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;

let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

//PARA CREAR EL HASH DE LA CONTRASEÑA DE LOS NUEVOS USUARIOS (SI VAMOS A IMPLEMENTAR UNA FUNCIÓN DE CREAR USUARIO)
/*bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log(`Hash: ${hash}`);
});*/


// Middleware
app.use(cors());
app.use(express.json());

// Ruta para guardar la suscripción
app.post('/saveSubscription', (req, res) => {
  const { email, subscriptionCode } = req.body;

  // Cargar el archivo JSON existente o crear uno nuevo
  const filePath = path.join(__dirname, 'subscriptions.json');
  let subscriptions = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    subscriptions = JSON.parse(data);
  }

  // Agregar la nueva suscripción
  subscriptions.push({ email, subscriptionCode });

  // Guardar en el archivo JSON
  fs.writeFileSync(filePath, JSON.stringify(subscriptions, null, 2), 'utf-8');
  
  res.status(200).json({ message: 'Suscripción guardada exitosamente' });
});

//PÁGINA DE LOGIN
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario por nombre
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
  }

  // Comparar la contraseña ingresada con el hash almacenado
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (isMatch) {
    res.json({ message: 'Inicio de sesión exitoso' });
  } else {
    res.status(400).json({ error: 'Contraseña incorrecta' });
  }
});

//PÁGINA DE CONTACTO
app.post('/contacto',(req, res) => {
  const { nombre, correo, mensaje } = req.body;
  if (nombre && correo && mensaje) {
    res.json({ message: '¡Nos contactaremos pronto con usted!' });
  } else {
    res.status(400).json({ error: 'Algo salió mal' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
