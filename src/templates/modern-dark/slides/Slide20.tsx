import { HelpCircle } from 'lucide-react';

export const Slide20 = () => (
  <div className="slide">
    <div className="flex-center">
      <h2 style={{ color: '#00ffcc' }}>No hay una solución perfecta</h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', textAlign: 'center', marginTop: '1rem' }}>
        La agilidad es una mentalidad, no una regla rígida. Elige el método que mejor se adapte a tu contexto.
      </p>
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h3>¡Gracias por su atención!</h3>
        <div className="icon-box" style={{ marginTop: '1rem' }}><HelpCircle size={48} color="#00ffcc" /></div>
        <p></p>
      </div>
    </div>
    <div className="footer">
      <span>Final de la Exposición</span>
      <span>Slide 20</span>
    </div>
  </div>
);
