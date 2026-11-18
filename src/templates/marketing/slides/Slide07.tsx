import { Footer } from '../Footer';
import { Photo } from '../Photo';
import fotoFinanzas from '../assets/img/finanzas.jpg';

const statements = [
  { title: 'Resultados', text: 'Ingresos, costos y utilidad neta' },
  { title: 'Flujo de efectivo', text: 'Entradas y salidas; anticipa faltantes' },
  { title: 'Balance general', text: 'Activos, pasivos y capital a una fecha' },
];

export const Slide07 = () => (
  <div className="slide slide--blue slide--card">
    <div className="eyebrow">5.1 Plan financiero y económico · Estructura</div>
    <h2>Rentabilidad del proyecto vs. liquidez de la empresa</h2>
    <div className="body">
      <div className="g2">
        <div className="card card--soft">
          <div className="num">ANÁLISIS ECONÓMICO</div>
          <h3>¿El proyecto es rentable por sí mismo?</h3>
          <p>Sin considerar cómo se paga</p>
        </div>
        <div className="card card--soft">
          <div className="num">ANÁLISIS FINANCIERO</div>
          <h3>¿Hay financiamiento y liquidez?</h3>
          <p>Créditos, aportaciones y obligaciones</p>
        </div>
      </div>
      <div>
        <div className="label">Estados financieros proyectados</div>
        <div className="g3">
          {statements.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Photo src={fotoFinanzas} shape="card" position="28% center" />
    <Footer n={7} active={2} />
  </div>
);
