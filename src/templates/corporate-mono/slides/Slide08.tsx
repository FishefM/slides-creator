import { Footer } from '../Footer';

const phases = [
  { name: 'Diagnóstico y depuración', out: 'Datos depurados', weeks: 'Sem 1–2', bg: 'color-mix(in srgb, var(--accent) 15%, white)', fg: 'var(--gray-950)' },
  { name: 'Configuración', out: 'Flujo comercial listo', weeks: 'Sem 3–5', bg: 'color-mix(in srgb, var(--accent) 35%, white)', fg: 'var(--gray-950)' },
  { name: 'Pruebas operativas', out: 'Procesos validados', weeks: 'Sem 6–7', bg: 'color-mix(in srgb, var(--accent) 55%, white)', fg: 'var(--gray-950)' },
  { name: 'Capacitación y paralelo', out: 'Personal capacitado', weeks: 'Sem 8–9', bg: 'color-mix(in srgb, var(--accent) 80%, white)', fg: 'var(--white)' },
  { name: 'Puesta en marcha', out: 'Salida a producción y cierre de Zoho', weeks: 'Sem 10–12', bg: 'color-mix(in srgb, var(--accent) 100%, white)', fg: 'var(--white)' },
];

export const Slide08 = () => (
  <div className="slide">
    <div className="eyebrow">Plan de migración</div>
    <h2>8 a 12 semanas, sin detener la operación</h2>
    <div className="body">
      <div className="timeline">
        {phases.map((p, i) => (
          <div key={p.name}>
            <div className="phase-bar" style={{ background: p.bg, color: p.fg }}>{p.weeks}</div>
            <div className="phase-n" style={{ marginTop: '1rem' }}>FASE {i + 1}</div>
            <div className="phase-name">{p.name}</div>
            <div className="phase-out">{p.out}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer n={8} />
  </div>
);
