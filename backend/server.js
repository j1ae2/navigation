const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5001;

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

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
