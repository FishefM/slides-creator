import { Footer } from '../Footer';

const methods = [
  ['Incremental', 'Ajusta el presupuesto anterior'],
  ['Base cero', 'Cada gasto se justifica desde cero'],
  ['Continuo / Rolling', 'Se actualiza con frecuencia; ideal en ágil'],
];

const techniques = [
  ['Análoga', 'Parte de un proyecto similar previo'],
  ['Ascendente (bottom-up)', 'Suma de cada paquete de trabajo'],
  ['Paramétrica', 'Costo por punto de historia'],
  ['PERT', 'Tres escenarios: optimista, probable, pesimista'],
];

export const Slide10 = () => (
  <div className="slide slide--blue">
    <div className="eyebrow">5.1.1 Costos y presupuestos · Métodos y estimación</div>
    <h2>Cómo presupuestar y estimar el esfuerzo en software</h2>
    <div className="body">
      <div className="g2" style={{ alignItems: 'start', gap: '2.5rem' }}>
        <div>
          <div className="label">Métodos de presupuesto</div>
          {methods.map(([k, v]) => (
            <div className="row" key={k}><b>{k}</b><span>{v}</span></div>
          ))}
        </div>
        <div>
          <div className="label">Técnicas de estimación</div>
          {techniques.map(([k, v]) => (
            <div className="row" key={k}><b>{k}</b><span>{v}</span></div>
          ))}
        </div>
      </div>
    </div>
    <Footer n={10} active={3} />
  </div>
);
