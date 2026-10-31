import { Fragment } from 'react';
import { Footer } from '../Footer';

const rows = [
  ['Licenciamiento', 'Pago recurrente por usuario', 'Sin costo de licencia por usuario'],
  ['Integración', 'Módulos fragmentados con límites de consulta', 'Flujo nativo en tiempo real (base única)'],
  ['Datos', 'Del proveedor', 'Propiedad de la empresa'],
  ['Personalización', 'Limitada al plan', 'Libre'],
  ['Escalabilidad', 'El costo crece con la plantilla', 'El costo se mantiene estable'],
];

export const Slide04 = () => (
  <div className="slide">
    <div className="eyebrow">Comparativa operativa</div>
    <h2>Lo que cambia en el día a día</h2>
    <div className="body">
      <div className="versus">
        <div className="head">Criterio</div>
        <div className="head">Zoho</div>
        <div className="head erp">ERPNext</div>
        {rows.map(([crit, zoho, erp]) => (
          <Fragment key={crit}>
            <div className="crit">{crit}</div>
            <div className="zoho">{zoho}</div>
            <div className="erp">{erp}</div>
          </Fragment>
        ))}
      </div>
    </div>
    <Footer n={4} />
  </div>
);
