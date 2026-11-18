import { Footer } from '../Footer';

const stages = [
  { name: 'Atención', text: 'Conocen la marca' },
  { name: 'Consideración', text: 'Comparan y se califican leads' },
  { name: 'Demo / Prueba', text: 'Ven cómo resuelve su problema' },
  { name: 'Decisión', text: 'Menos prospectos, más intención' },
  { name: 'Cierre', text: 'Cotización, negociación y venta' },
  { name: 'Postventa', text: 'Soporte, capacitación y recomendación' },
];

export const Slide05 = () => (
  <div className="slide slide--teal">
    <div className="eyebrow">4.4.2 Estrategia de venta · Embudo comercial</div>
    <h2>Cómo convertir prospectos en ingresos reales</h2>
    <div className="body">
      <div className="funnel">
        {stages.map((s, i) => (
          <div key={s.name}>
            <div className="chev" style={{ background: `color-mix(in srgb, var(--accent) ${14 + i * 10}%, white)` }}>
              {i + 1}
            </div>
            <div className="stage-name">{s.name}</div>
            <div className="stage-desc">{s.text}</div>
          </div>
        ))}
      </div>
      <div className="funnel-note">
        <span>Muchos interesados</span>
        <i />
        <span>Solo quienes compran</span>
      </div>
    </div>
    <Footer n={5} active={1} />
  </div>
);
