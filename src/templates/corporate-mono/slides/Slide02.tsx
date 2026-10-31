import { Layers, Lock, Users } from 'lucide-react';
import { Footer } from '../Footer';

export const Slide02 = () => (
  <div className="slide">
    <div className="eyebrow">Situación actual</div>
    <h2>Zoho nos cobra más cada vez que crecemos</h2>
    <div className="body">
      <div className="grid-3">
        <div className="card">
          <Users className="icon" />
          <h3>Costo por usuario</h3>
          <p>Cada empleado suma a la factura.</p>
        </div>
        <div className="card">
          <Layers className="icon" />
          <h3>Módulos extra</h3>
          <p>Cada función adicional se paga aparte.</p>
        </div>
        <div className="card">
          <Lock className="icon" />
          <h3>Dependencia</h3>
          <p>Técnica y comercial del proveedor.</p>
        </div>
      </div>
    </div>
    <Footer n={2} />
  </div>
);
