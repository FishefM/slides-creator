const SECTIONS = [
  { label: '4.4.1 Marketing', tone: 'teal' },
  { label: '4.4.2 Estrategia de venta', tone: 'teal' },
  { label: '5.1 Plan financiero', tone: 'blue' },
  { label: '5.1.1 Costos y presupuestos', tone: 'blue' },
];

// active: índice de la sección en curso (0-3); las anteriores se marcan como avanzadas.
export const Footer = ({ n, active }: { n: number; active?: number }) => (
  <div className="footer">
    <nav className="sections">
      {SECTIONS.map((s, i) => {
        const state = active === undefined ? '' : i === active ? ' is-active' : i < active ? ' is-done' : '';
        return <span key={s.label} className={`sec sec--${s.tone}${state}`}>{s.label}</span>;
      })}
    </nav>
    <span>Slide {String(n).padStart(2, '0')}</span>
  </div>
);
