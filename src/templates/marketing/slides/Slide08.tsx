import { Fragment } from 'react';
import { Footer } from '../Footer';

const sources = [
  ['Capital propio', 'Ahorros de los socios'],
  ['Crédito bancario', 'Con intereses e historial'],
  ['Inversionistas / VC', 'Capital a cambio de participación'],
  ['Incubadoras', 'Apoyo y mentoría'],
  ['Crowdfunding', 'Aportes colectivos en línea'],
  ['Proveedores', 'Plazo para pagar equipos'],
];

const criteria = [
  ['VAN', 'Mayor a cero'],
  ['TIR', 'Mayor al costo de oportunidad'],
  ['PRI', 'Plazo de retorno aceptable'],
  ['B/C', 'Mayor a 1'],
];

export const Slide08 = () => (
  <div className="slide slide--blue">
    <div className="eyebrow">5.1 Plan financiero · Financiamiento e indicadores</div>
    <h2>De dónde salen los recursos y cómo evaluar si conviene invertir</h2>
    <div className="body">
      <div className="g2" style={{ alignItems: 'start', gap: '2.5rem' }}>
        <div>
          <div className="label">Fuentes de financiamiento</div>
          <div className="g2" style={{ gap: '0.8rem' }}>
            {sources.map(([k, v]) => (
              <div className="card card--plain" key={k} style={{ padding: '0.9rem 1.1rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>{k}</h3>
                <p style={{ fontSize: '1rem' }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="label">Conviene invertir si…</div>
          <div className="tbl" style={{ gridTemplateColumns: '0.6fr 1.6fr' }}>
            <div className="th">Indicador</div>
            <div className="th">Criterio</div>
            {criteria.map(([k, v]) => (
              <Fragment key={k}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </Fragment>
            ))}
          </div>
          <p className="note" style={{ marginTop: '1rem' }}>Se analizan en conjunto, no uno solo.</p>
        </div>
      </div>
    </div>
    <Footer n={8} active={2} />
  </div>
);
