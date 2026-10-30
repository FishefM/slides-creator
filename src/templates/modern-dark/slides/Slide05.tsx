import React from 'react';

export const Slide05 = () => (
  <div className="slide">
    <h2>Nuestra Hoja de Ruta</h2>
    <div className="grid-2" style={{ height: '60%' }}>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: '#00ffcc', color: '#000', padding: '1rem', borderRadius: '50%', fontWeight: 'bold' }}>1</div>
        <div><h3>Intro & Ágil</h3><p>Expone: Angel</p></div>
      </div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: '#00ffcc', color: '#000', padding: '1rem', borderRadius: '50%', fontWeight: 'bold' }}>2</div>
        <div><h3>RUP (Tradicional)</h3><p>Expone: Yucef</p></div>
      </div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: '#00ffcc', color: '#000', padding: '1rem', borderRadius: '50%', fontWeight: 'bold' }}>3</div>
        <div><h3>Scrum (Gestión)</h3><p>Expone: Joshua</p></div>
      </div>
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ background: '#00ffcc', color: '#000', padding: '1rem', borderRadius: '50%', fontWeight: 'bold' }}>4</div>
        <div><h3>XP (Técnico)</h3><p>Expone: Luis y Wendy</p></div>
      </div>
    </div>
    <div className="footer">
      <span>Estructura de la Exposición</span>
      <span>Slide 05</span>
    </div>
  </div>
);
