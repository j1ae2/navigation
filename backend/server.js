import express from 'express';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { sequelize } from './db/db.js';
import { Usuario } from './models/Usuario.js';
import { json, where } from 'sequelize';

const app = express();
const PORT = 5000;

async function verificarConexion(){
  try{
    await sequelize.authenticate();
    console.log("Conectado a la BD")
    await sequelize.sync();
  }catch(error){
    console.log("ERROR: ",error)
  }
}

let users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

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

//REGISTRAR USUARIOS
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Por favor, rellene todos los campos" });
  }

  //EXPRESSION PARA FORMATO DE CORREO
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //VALIDACION MINISMALISTA
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "El correo electrónico no es válido" });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: "La constraseña tiene que tener al menos 8 caracteres" });
  }
  try {
  //HASHEAR LA CONTRASEÑA
    const hash = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({ email, passwordHash: hash });

    res.status(201).json({ message: "Usuario registrado exitosamente", email: nuevoUsuario.email });
  } catch (err) {
    console.error("Error al registrar usuario:", err);

    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "El correo electrónico ya está registrado" });
    }
    res.status(500).json({ error: "Ocurrió un error en el servidor" });
  }
});

//GET DE TODOS LOS USUARIOS (admin)
app.get('/users', async (req, res) => {
  const usuariosRegistrados = await Usuario.findAll({where: {estado:true}})
  res.status(200).json(usuariosRegistrados)
});

//PÁGINA DE LOGIN
app.get('/login', async (req, res) => {
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


//CAMBIAR CONTRASEÑA DEL USUARIO
app.put("/changepass", async (req, res) => {
  const { email, currentPassword, newPassword } = req.body;
  if (!email || !currentPassword || !newPassword) {
    return res.status(400).json({ error: "Rellene todos los campos" });
  }

  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // VERIFICACION DE CONTRASEÑA ACTUAL
    const isMatch = await bcrypt.compare(currentPassword, usuario.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ error: "La contraseña actual es incorrecta" });
    }

    // VALIDACION MINIMALISTA
    if (newPassword.length < 8) {
      return res.status(400).json({ error: "La nueva contraseña debe tener al menos 8 caracteres" });
    }

    const hash = await bcrypt.hash(newPassword, 10);

    usuario.passwordHash = hash;
    await usuario.save();

    res.status(200).json({ message: "¡Contraseña actualizada!" });
  } catch (err) {
    res.status(400).json({ error: "Ocurrió un error" });
  }
});

// DELETE DE USUARIOS (admin)
app.delete('/deleteuser', async (req, res) => {
  const { email } = req.body;
  const usuario = await Usuario.findOne({where: {email}})
  if (!usuario ) {
    return res.status(400).json({ error: 'Confirme el usuario' });
  }
  usuario.estado = false;
  await usuario.save();
  res.json({ message: 'Eliminado exitoso', usuario });
});

//PRODUCTOS COMPRADOS DEL USUARIO

/*app.get("userproducts/:id/producto", async (req,res)=>{
  const productos = await Usuario.findByPk(req.params.id,{
    include:{
      model: Producto
    }
  })
})*/

// PÁGINA DE CONTACTO
app.post('/contacto', (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  
  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  console.log(`Nuevo mensaje de contacto: ${nombre}, ${correo}, ${mensaje}`);

  res.json({ message: '¡Nos contactaremos pronto con usted!' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  verificarConexion();
});
