import { Target, Zap, Users } from 'lucide-react';

export const Slide12 = () => (
  <div className="slide">
    <h2>Los 3 Roles Fundamentales</h2>
    <div className="grid-3" style={{ marginTop: '2rem' }}>
      <div className="card" style={{ borderTop: '4px solid #00ffcc' }}>
        <h3>Product Owner</h3>
        <p>Voz del cliente. Prioriza el valor del negocio.</p>
        <Target size={24} color="#00ffcc" style={{ marginTop: '1rem' }} />
      </div>
      <div className="card" style={{ borderTop: '4px solid #00ffcc' }}>
        <h3>Scrum Master</h3>
        <p>Líder sirviente. Facilita y elimina bloqueos.</p>
        <Zap size={24} color="#00ffcc" style={{ marginTop: '1rem' }} />
      </div>
      <div className="card" style={{ borderTop: '4px solid #00ffcc' }}>
        <h3>Team</h3>
        <p>Auto-organizado. Crea el incremento real.</p>
        <Users size={24} color="#00ffcc" style={{ marginTop: '1rem' }} />
      </div>
    </div>
    <div className="footer">
      <span>Equipos Scrum</span>
      <span>Slide 12</span>
    </div>
  </div>
);
