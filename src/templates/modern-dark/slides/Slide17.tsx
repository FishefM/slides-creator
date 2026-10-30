import React from 'react';
import { Users, CheckCircle, Zap, Coffee } from 'lucide-react';

export const Slide17 = () => (
  <div className="slide">
    <h2>Prácticas Técnicas de XP</h2>
    <div className="grid-2">
      <div className="card">
        <div className="icon-box"><Users color="#00ffcc" /></div>
        <h3>Pair Programming</h3>
        <p>Dos mentes, un teclado. Calidad instantánea.</p>
      </div>
      <div className="card">
        <div className="icon-box"><CheckCircle color="#00ffcc" /></div>
        <h3>TDD</h3>
        <p>Test Driven Development. Pruebas antes que código.</p>
      </div>
      <div className="card">
        <div className="icon-box"><Zap color="#00ffcc" /></div>
        <h3>Continuous Integration</h3>
        <p>Integrar cambios varias veces al día.</p>
      </div>
      <div className="card">
        <div className="icon-box"><Coffee color="#00ffcc" /></div>
        <h3>Ritmo Sostenible</h3>
        <p>Evitar el agotamiento del equipo.</p>
      </div>
    </div>
    <div className="footer">
      <span>Ingeniería de Calidad</span>
      <span>Slide 17</span>
    </div>
  </div>
);
