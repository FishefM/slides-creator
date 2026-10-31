import { Footer } from '../Footer';

export const Slide10 = () => (
  <div className="slide">
    <div className="eyebrow">Dictamen final</div>
    <h2>Tres razones para migrar</h2>
    <div className="body">
      <div>
        <div className="num-row">
          <div className="num">01</div>
          <div>
            <h3>Elimina el gasto recurrente</h3>
            <p>Del desembolso continuo en dólares a una solución propia.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="num">02</div>
          <div>
            <h3>Unifica la gestión</h3>
            <p>Ventas, almacén y cobranza en un solo sistema.</p>
          </div>
        </div>
        <div className="num-row">
          <div className="num">03</div>
          <div>
            <h3>Plazo controlado</h3>
            <p>8 a 12 semanas con la operación en marcha.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer n={10} />
  </div>
);
