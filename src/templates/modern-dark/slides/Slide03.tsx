import { Users, Code, MessageSquare, RefreshCcw } from 'lucide-react';

export const Slide03 = () => (
  <div className="slide">
    <h2>El Manifiesto Ágil: 4 Valores</h2>
    <div className="grid-4" style={{ marginTop: '2rem' }}>
      <div className="card">
        <div className="icon-box"><Users color="#00ffcc" /></div>
        <h3>Personas</h3>
        <p>Sobre procesos y herramientas.</p>
      </div>
      <div className="card">
        <div className="icon-box"><Code color="#00ffcc" /></div>
        <h3>Software</h3>
        <p>Funcionando sobre documentación.</p>
      </div>
      <div className="card">
        <div className="icon-box"><MessageSquare color="#00ffcc" /></div>
        <h3>Colaboración</h3>
        <p>Sobre negociación contractual.</p>
      </div>
      <div className="card">
        <div className="icon-box"><RefreshCcw color="#00ffcc" /></div>
        <h3>Cambio</h3>
        <p>Sobre seguir un plan rígido.</p>
      </div>
    </div>
    <div className="footer">
      <span>Filosofía Ágil</span>
      <span>Slide 03</span>
    </div>
  </div>
);
