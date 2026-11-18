import { Footer } from '../Footer';

export const Slide12 = () => (
  <div className="slide slide--blue">
    <div className="eyebrow">5.1.1 Control presupuestal · Conclusión</div>
    <h2>Seguimiento del gasto y alineación entre áreas</h2>
    <div className="body">
      <div>
        <div className="num-row">
          <div className="n" style={{ color: 'var(--accent-secondary)' }}>01</div>
          <div>
            <h3>Control por valor ganado</h3>
            <p>Comparar plan, avance real y gasto para evitar sobrecostos.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="n" style={{ color: 'var(--accent-primary)' }}>02</div>
          <div>
            <h3>Encadenamiento comercial-financiero</h3>
            <p>Marketing atrae, ventas convierte y finanzas asegura utilidad.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="n" style={{ color: 'var(--accent-secondary)' }}>03</div>
          <div>
            <h3>Visión de ingeniería</h3>
            <p>La calidad técnica necesita viabilidad comercial y económica.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer n={12} active={3} />
  </div>
);
