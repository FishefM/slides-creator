import { Fragment } from 'react';
import { Footer } from '../Footer';
import { Photo } from '../Photo';
import fotoSocial from '../assets/img/social.jpg';

const tools = [
  { title: 'SEO / SEM', text: 'Aparecer en los buscadores' },
  { title: 'Contenidos', text: 'Blogs, guías y webinars' },
  { title: 'Redes sociales', text: 'Comunidad y publicidad segmentada' },
  { title: 'Email', text: 'Contacto automático con prospectos' },
];

const kpis = [
  ['Tasa de conversión', 'Visitantes que se registran o compran'],
  ['CAC', 'Cuánto cuesta ganar un cliente nuevo'],
  ['ROI', 'Si la campaña dio ganancia o pérdida'],
  ['Churn', 'Clientes que abandonan el servicio'],
];

export const Slide04 = () => (
  <div className="slide slide--teal slide--circle">
    <div className="eyebrow">4.4.1 Marketing · Medios digitales y KPIs</div>
    <h2>Atracción digital (Pull) y métricas de desempeño</h2>
    <div className="body">
      <div className="g2" style={{ alignItems: 'start' }}>
        <div>
          <div className="label">Herramientas digitales</div>
          <div className="g2" style={{ gap: '1rem' }}>
            {tools.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="label">Indicadores clave (KPI)</div>
          <div className="tbl">
            <div className="th">Indicador</div>
            <div className="th">Qué mide</div>
            {kpis.map(([k, v]) => (
              <Fragment key={k}>
                <div className="k">{k}</div>
                <div className="v">{v}</div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Photo src={fotoSocial} shape="circle" position="55% 40%" />
    <Footer n={4} active={0} />
  </div>
);
