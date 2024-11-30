import React from 'react';


const SalePageContent = () => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px' }}>
    {/* Banner principal */}
   

    {/* Primer video con el mensaje a la izquierda */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%' }}>
      <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h3>Organiza tu Garage</h3>
      </div>
      <div style={{ flex: 1 }}>
        <iframe
          style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
          src="https://www.youtube.com/embed/yjwQ4Zld4SA?controls=0&autoplay=1"
          title="Video Organiza tu Garage"
          frameBorder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>

    {/* Segundo video con el mensaje a la derecha */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '100%' }}>
      <div style={{ flex: 1 }}>
        <iframe
          style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
          src="https://www.youtube.com/embed/iPf5IY1L1u0?controls=0&start=1&autoplay=1"
          title="Video Organiza tus zapatos"
          frameBorder="0"
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div style={{ flex: 1, textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h3>Organiza tus zapatos, zapatillas, pantuflas, sandalias</h3>
      </div>
    </div>

    {/* Tercer video centrado */}
    <div style={{ textAlign: 'center', width: '100%' }}>
      <iframe
        style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
        src="https://www.youtube.com/embed/AztqepWQDvc?controls=0&autoplay=1"
        title="Video Organiza"
        frameBorder="0"
        allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>

    {/* Videos Shorts */}
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '40px' }}>
      <h3>Videos Shorts</h3>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', width: '100%' }}>
      {['gB-dCZxn48Q', 'azDlHFsVPdM', 'k5BRTC3_HVI'].map((videoId, index) => (
        <iframe
          key={index}
          style={{ width: '360px', height: '640px', flex: '1 1 300px' }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube Shorts ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ))}
    </div>

    {/* Dos nuevos videos en formato horizontal */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap', width: '100%' }}>
      {['YUvWr-YSwGo', 'SR2S4uQ_qkw'].map((videoId, index) => (
        <iframe
          key={index}
          style={{ width: '100%', maxWidth: '640px', height: '360px', flex: '1 1 300px' }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube Video ${index + 4}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ))}
    </div>
  </div>
);

export default SalePageContent;
