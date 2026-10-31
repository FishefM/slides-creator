import { Footer } from '../Footer';

export const Slide09 = () => (
  <div className="slide">
    <div className="eyebrow">Transición segura</div>
    <h2>Medidas para asegurar la continuidad</h2>
    <div className="body">
      <div>
        <div className="num-row">
          <div className="num">01</div>
          <div>
            <h3>Un responsable interno</h3>
            <p>Coordinador administrativo que valida cada etapa.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="num">02</div>
          <div>
            <h3>Solo cuentas activas</h3>
            <p>Se migran únicamente tratos vigentes.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="num">03</div>
          <div>
            <h3>Zoho como respaldo</h3>
            <p>Activo 2 semanas tras el arranque, con respaldo histórico completo.</p>
          </div>
        </div>
      </div>
      <div className="note">Esfuerzo inicial del equipo: 2 sesiones de trabajo de 1 hora.</div>
    </div>
    <Footer n={9} />
  </div>
);
