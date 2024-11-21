
import { enviarMensajeContacto } from './modules/Login/services/contactService';
import './contacto.css'
import React, { useState } from 'react';

const Contact = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [respuesta, setRespuesta] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const datosContacto = { nombre, correo, mensaje };
        const data = await enviarMensajeContacto(datosContacto);
        
        setRespuesta(data.message);
        setNombre('');
        setCorreo('');
        setMensaje('');
      } catch (error) {
        setRespuesta(error.message);
      }
    };
    return (
      <div className="contact-container">
        <h1>¡Contáctanos!</h1>
        <p>¿Tienes alguna pregunta o necesitas más información? ¡Estamos aquí para ayudarte!</p>
        <h2>¿Cómo contactarnos?</h2>
        <ul>
          <li><strong>Correo:</strong> mycontainer@mail.com</li>
          <li><strong>Teléfono:</strong> +96434232</li>
          <li><strong>Redes sociales:</strong> Síguenos en nuestras redes para estar al día de nuestras novedades.</li> 
        </ul>
        <h3>Formulario de contacto</h3>
        <form onSubmit={handleSubmit}>
          <label className='contact-label'>Nombre:
            <input className='contact-input'
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              required 
            />
          </label>
          <br />
          <label className='contact-label'>Correo electrónico:
            <input className='contact-input'
              type="email" 
              value={correo} 
              onChange={(e) => setCorreo(e.target.value)} 
              required 
            />
          </label>
          <br />
          <label className='contact-label'>Mensaje:
            <textarea className='contact-textarea'
              value={mensaje} 
              onChange={(e) => setMensaje(e.target.value)} 
              required 
            />
          </label>
          <br />
          <button className='contact-button' type="submit">Enviar</button>
        </form>
        {respuesta && <p>{respuesta}</p>}
      </div>
    );
  };

  export default Contact;