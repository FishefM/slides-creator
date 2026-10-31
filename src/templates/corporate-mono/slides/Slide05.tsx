import { Footer } from '../Footer';

const MAX = 743700;
const CHART_H = 16.25; // rem

const tiers = [
  { users: 10, one: 148700, crm: 51000 },
  { users: 25, one: 371800, crm: 127600 },
  { users: 50, one: 743700, crm: 255300 },
];

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;
const h = (n: number) => `${Math.max((n / MAX) * CHART_H, 0.2)}rem`;

export const Slide05 = () => (
  <div className="slide">
    <div className="eyebrow">Proyección anual en MXN</div>
    <h2>El gasto crece con cada usuario</h2>
    <div className="body">
      <div className="legend">
        <span><i className="swatch" style={{ background: 'var(--gray-950)' }} /> Zoho One</span>
        <span><i className="swatch" style={{ background: 'var(--gray-400)' }} /> Zoho CRM Profesional</span>
        <span><i className="swatch" style={{ background: 'var(--accent)' }} /> ERPNext</span>
      </div>
      <div className="chart">
        {tiers.map((t) => (
          <div className="bar-group" key={t.users}>
            <div className="bar-col">
              <span className="bar-val">{fmt(t.one)}</span>
              <div className="bar-fill" style={{ height: h(t.one), background: 'var(--gray-950)' }} />
            </div>
            <div className="bar-col">
              <span className="bar-val">{fmt(t.crm)}</span>
              <div className="bar-fill" style={{ height: h(t.crm), background: 'var(--gray-400)' }} />
            </div>
            <div className="bar-col">
              <span className="bar-val bar-val--badge">$0</span>
              <div className="bar-fill" style={{ height: '0.2rem', background: 'var(--accent)' }} />
            </div>
          </div>
        ))}
      </div>
      <div className="chart-labels">
        {tiers.map((t) => <span key={t.users}>{t.users} usuarios</span>)}
      </div>
      <div className="note">Zoho One por usuarios activos ($67 USD) y Zoho CRM Profesional ($23 USD), facturación anual. $18.50 MXN/USD.</div>
    </div>
    <Footer n={5} />
  </div>
);
