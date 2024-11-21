import React from 'react';


const SalePageContent = () => (
 
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'space-between' }}>
   
    {/* Contenido principal */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {/* Primer video con el mensaje a la izquierda, reproducción automática */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          <h3>Organiza tu Garage</h3>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yjwQ4Zld4SA?si=M2fOQ_gMLUN4QO2j&controls=0&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; fullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
           
          ></iframe>
        </div>
      </div>

      {/* Segundo video con el mensaje a la derecha, reproducción automática */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iPf5IY1L1u0?si=N8rVTnpbjWccJ3R-&controls=0&start=1&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; fullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
        
          ></iframe>
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
          <h3>Organiza tus zapatos, zapatillas, pantuflas, sandalias</h3>
        </div>
      </div>

      {/* Tercer video centrado con tamaño doble, reproducción automática */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/AztqepWQDvc?si=l4iJRkVUn-FCnd_w&controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay;fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
  
        ></iframe>
      </div>

      {/* Título "vide OS horts" centrado y tres videos de YouTube Shorts en formato vertical */}
      <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '40px' }}>
        <h3>vide OS horts</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/gB-dCZxn48Q"
          title="YouTube Shorts video player 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/azDlHFsVPdM"
          title="YouTube Shorts video player 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/k5BRTC3_HVI"
          title="YouTube Shorts video player 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Dos nuevos videos en formato horizontal, uno al lado del otro */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YUvWr-YSwGo"
          title="YouTube video player 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SR2S4uQ_qkw"
          title="YouTube video player 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    
    {/* Footer al final de la página */}
    

  </div>
 
);

export default SalePageContent;
