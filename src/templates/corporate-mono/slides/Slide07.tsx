import { HardDrive, Mail, UserPlus } from 'lucide-react';
import { Footer } from '../Footer';

export const Slide07 = () => (
  <div className="slide">
    <div className="eyebrow">Costos ocultos</div>
    <h2>Y además, cargos adicionales en Zoho</h2>
    <div className="body">
      <div className="grid-3">
        <div className="card">
          <HardDrive className="icon icon--warn" />
          <h3>Almacenamiento</h3>
          <p>Cobro por ampliar el espacio de documentos.</p>
        </div>
        <div className="card">
          <Mail className="icon icon--warn" />
          <h3>Límites de uso</h3>
          <p>Correos automáticos y consultas, con créditos de pago.</p>
        </div>
        <div className="card">
          <UserPlus className="icon icon--warn" />
          <h3>Accesos externos</h3>
          <p>Licencias extra para clientes y proveedores.</p>
        </div>
      </div>
    </div>
    <Footer n={7} />
  </div>
);
