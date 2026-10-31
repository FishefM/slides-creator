import { Layers, UserCheck } from 'lucide-react';

export const Slide01 = () => (
  <div className="slide">
    <div className="flex-center">
      <h1 style={{ fontSize: '3.5rem', textAlign: 'center', color: '#00ffcc' }}>Metodologías Ágiles para el desarrollo</h1>
      <p style={{ fontSize: '1.5rem' }}>Guía Práctica de Metodologías de Desarrollo</p>

      <div className="member-list">
        <div className="member-item"><UserCheck size={18} color="#00ffcc" /> <span>Garcia Salgado Angel Gabriel</span></div>
        <div className="member-item"><UserCheck size={18} color="#00ffcc" /> <span>Hernández García Yucef Ubayd</span></div>
        <div className="member-item"><UserCheck size={18} color="#00ffcc" /> <span>Castro Ramirez Joshua</span></div>
        <div className="member-item"><UserCheck size={18} color="#00ffcc" /> <span>Mejía Ramirez Luis Alejandro</span></div>
        <div className="member-item"><UserCheck size={18} color="#00ffcc" /> <span>Olivares Jardines Wendy Alexandra</span></div>
      </div>

      <div style={{ marginTop: '2rem', color: '#00ffcc' }}>
        <Layers size={64} />
      </div>
    </div>
    <div className="footer">
      <span>Metodologías Ágiles para el desarrollo</span>
      <span>Slide 01</span>
    </div>
  </div>
);
