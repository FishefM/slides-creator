import { Footer } from '../Footer';

export const Slide06 = () => (
  <div className="slide">
    <div className="eyebrow">Impacto financiero · 10 usuarios · 3 años</div>
    <h2>Total ahorrado en licencias a 3 años</h2>
    <div className="body">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="card">
          <div className="eyebrow">Zoho</div>
          <div className="big-number">$446,100<span className="unit">MXN</span></div>
          <p>en pagos recurrentes no reembolsables (Plan Zoho One para 10 usuarios)</p>
        </div>
        <div className="card card--accent">
          <div className="eyebrow">ERPNext</div>
          <div className="big-number">$0</div>
          <p>en licencias</p>
          <div className="card-tag">Desplegado sobre nuestro VPS Hostinger KVM 4 ya contratado ($210.99 MXN/mes · 16 GB RAM / 4 vCPU)</div>
        </div>
      </div>
      <div className="note">
        Cálculo basado en Zoho One (esquema de usuarios activos a $67 USD/mes en facturación anual) para 10 usuarios con tipo de cambio de $18.50 MXN/USD.
      </div>
    </div>
    <Footer n={6} />
  </div>
);
