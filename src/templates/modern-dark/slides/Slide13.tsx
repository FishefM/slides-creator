import { RefreshCcw } from 'lucide-react';

export const Slide13 = () => (
  <div className="slide">
    <h2>El Ciclo de un Sprint</h2>
    <div className="grid-2">
      <div className="flex-start">
        <div className="card" style={{ width: '100%', marginBottom: '0.5rem' }}><strong>Planning:</strong> Qué haremos.</div>
        <div className="card" style={{ width: '100%', marginBottom: '0.5rem' }}><strong>Daily:</strong> Sincronización diaria.</div>
        <div className="card" style={{ width: '100%', marginBottom: '0.5rem' }}><strong>Review:</strong> Demo al cliente.</div>
        <div className="card" style={{ width: '100%', marginBottom: '0.5rem' }}><strong>Retro:</strong> Mejora interna.</div>
      </div>
      <div className="flex-center">
        <RefreshCcw size={150} color="#00ffcc" />
        <p style={{ marginTop: '1rem' }}>Sprint (1 - 4 semanas)</p>
      </div>
    </div>
    <div className="footer">
      <span>Ceremonias Scrum</span>
      <span>Slide 13</span>
    </div>
  </div>
);
