import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';

export const Slide15 = () => (
  <div className="slide">
    <h2>Planeación Just-in-Time</h2>
    <div className="grid-2">
       <div className="flex-start">
          <div className="card" style={{ background: '#111' }}>
             <h3>Product Backlog</h3>
             <p>Lista infinita de deseos priorizada.</p>
          </div>
          <div style={{ textAlign: 'center', width: '100%', margin: '1rem 0' }}>
             <TrendingUp color="#00ffcc" />
          </div>
          <div className="card" style={{ background: '#00ffcc', color: '#000' }}>
             <h3>Sprint Backlog</h3>
             <p>Compromiso del equipo para 2 semanas.</p>
          </div>
       </div>
       <div className="flex-center">
          <p>No planificamos el Sprint 10 cuando estamos en el 1.</p>
          <Calendar size={80} style={{ marginTop: '1rem' }} />
       </div>
    </div>
    <div className="footer">
      <span>Estrategia de Planeación</span>
      <span>Slide 15</span>
    </div>
  </div>
);
