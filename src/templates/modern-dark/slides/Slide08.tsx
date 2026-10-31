import { UserCheck, FileText, Activity } from 'lucide-react';

export const Slide08 = () => (
  <div className="slide">
    <h2>Roles, Artefactos y Actividades</h2>
    <div className="grid-3" style={{ marginTop: '2rem' }}>
      <div className="card">
        <div className="icon-box"><UserCheck color="#00ffcc" /></div>
        <h3>Roles</h3>
        <p>Analista, Arquitecto, Desarrollador.</p>
      </div>
      <div className="card">
        <div className="icon-box"><FileText color="#00ffcc" /></div>
        <h3>Artefactos</h3>
        <p>UML, Requisitos, Planes de prueba.</p>
      </div>
      <div className="card">
        <div className="icon-box"><Activity color="#00ffcc" /></div>
        <h3>Actividades</h3>
        <p>Tareas específicas paso a paso.</p>
      </div>
    </div>
    <div className="footer">
      <span>Componentes de RUP</span>
      <span>Slide 08</span>
    </div>
  </div>
);
