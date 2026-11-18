import { Footer } from '../Footer';

const models = [
  ['Consultiva', 'Soluciones complejas o de precio alto'],
  ['Directa / e-commerce', 'Control total de la relación con el cliente'],
  ['Indirecta / partners', 'Llegar a más clientes con terceros'],
  ['Freemium SaaS', 'Versión gratis, cobro por funciones'],
  ['Venta cruzada', 'Complemento para clientes actuales'],
];

const prices = [
  ['Valor percibido', 'Lo que el cliente está dispuesto a pagar'],
  ['Suscripción / Freemium', 'Pago recurrente o versión básica gratis'],
  ['Por proyecto / hora', 'Tarifa fija o tiempo de servicio'],
  ['Penetración y descremado', 'Precio bajo para entrar o alto al lanzar'],
];

export const Slide06 = () => (
  <div className="slide slide--teal">
    <div className="eyebrow">4.4.2 Estrategia de venta · Modelos y precios</div>
    <h2>Modalidades de venta y fijación de precios en software</h2>
    <div className="body">
      <div className="g2" style={{ alignItems: 'start', gap: '2.5rem' }}>
        <div>
          <div className="label">Modalidades de venta</div>
          {models.map(([k, v]) => (
            <div className="row" key={k}><b>{k}</b><span>{v}</span></div>
          ))}
        </div>
        <div>
          <div className="label">Esquemas de precio</div>
          {prices.map(([k, v]) => (
            <div className="row" key={k}><b>{k}</b><span>{v}</span></div>
          ))}
        </div>
      </div>
      <div className="callout">Valor de vida del cliente (LTV) ≥ 3 veces el costo de adquisición (CAC)</div>
    </div>
    <Footer n={6} active={1} />
  </div>
);
