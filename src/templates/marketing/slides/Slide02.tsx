import { Fragment } from 'react';
import { Footer } from '../Footer';
import { Photo } from '../Photo';
import fotoMarketing from '../assets/img/marketing.jpg';

const steps = [
  { n: '01', title: 'Segmentación', text: 'Dividir el mercado en grupos con necesidades parecidas' },
  { n: '02', title: 'Mercado meta', text: 'Elegir el segmento más rentable y atendible' },
  { n: '03', title: 'Posicionamiento', text: 'Ofrecer una propuesta de valor distinta a la competencia' },
];

const goals = ['Identificar necesidades', 'Generar prospectos', 'Diferenciar la oferta', 'Fidelizar clientes'];

export const Slide02 = () => (
  <div className="slide slide--teal slide--strip">
    <div className="eyebrow">4.4.1 Marketing · Enfoque estratégico</div>
    <h2>Del desarrollo técnico a una oferta con valor comercial</h2>
    <div className="body">
      <div>
        <div className="label">Modelo STP</div>
        <div className="flow">
          {steps.map((s, i) => (
            <Fragment key={s.n}>
              <div className="card">
                <div className="num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < steps.length - 1 && <div className="arrow">→</div>}
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <div className="label">Objetivos del marketing en TI</div>
        <div className="chips">
          {goals.map((g) => <div className="chip" key={g}>{g}</div>)}
        </div>
      </div>
    </div>
    <Photo src={fotoMarketing} shape="strip" position="50% 40%" />
    <Footer n={2} active={0} />
  </div>
);
