import { Footer } from '../Footer';

const costs = [
  { title: 'Fijos', text: 'Renta, sueldos permanentes, licencias anuales' },
  { title: 'Variables', text: 'Nube por usuario, comisiones, soporte por ticket' },
  { title: 'Directos', text: 'Horas de programación de una app específica' },
  { title: 'Indirectos', text: 'Energía, internet y administración general' },
];

const items = ['Talento humano', 'Nube', 'Licencias', 'Seguridad', 'Mantenimiento', 'Comercialización'];

export const Slide09 = () => (
  <div className="slide slide--blue">
    <div className="eyebrow">5.1.1 Costos y presupuestos · Estructura en TI</div>
    <h2>Radiografía de costos en un proyecto informático</h2>
    <div className="body">
      <div>
        <div className="label">Fijos vs. variables · Directos vs. indirectos</div>
        <div className="g4">
          {costs.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="label">Rubros clave del ciclo de vida del software</div>
        <div className="chips">
          {items.map((r, i) => (
            <div className="chip" key={r} style={i === 0 ? { background: 'var(--accent)', color: 'var(--white)', borderColor: 'var(--accent)' } : undefined}>
              {r}
            </div>
          ))}
        </div>
        <p className="note" style={{ marginTop: '0.8rem' }}>El talento humano suele ser la mayor parte del costo.</p>
      </div>
    </div>
    <Footer n={9} active={3} />
  </div>
);
