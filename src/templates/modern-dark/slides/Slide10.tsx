import { ShieldAlert } from 'lucide-react';

export const Slide10 = () => (
  <div className="slide">
    <h2>Desafíos de RUP</h2>
    <div className="grid-2">
      <div className="flex-start">
        <p>El "Portaviones" del desarrollo.</p>
        <ul className="bullet-list">
          <li>Sobre-burocracia de artefactos.</li>
          <li>Curva de aprendizaje elevada.</li>
          <li>Poco maniobrable en startups.</li>
          <li>Costo de gestión muy alto.</li>
        </ul>
      </div>
      <div className="flex-center" style={{ color: '#ff4444' }}>
        <ShieldAlert size={120} />
      </div>
    </div>
    <div className="footer">
      <span>Limitaciones</span>
      <span>Slide 10</span>
    </div>
  </div>
);
