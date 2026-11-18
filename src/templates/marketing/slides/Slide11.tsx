import { Footer } from '../Footer';
import { Photo } from '../Photo';
import fotoEstado from '../assets/img/estado.jpg';

const TOTAL = 554400;

const items = [
  { name: 'Talento humano', sub: '3 devs, 1 UX/UI y 1 líder', amount: 334000, pct: '60.3', tint: 100 },
  { name: 'Equipo y licencias', sub: '', amount: 84000, pct: '15.1', tint: 55 },
  { name: 'Operación, nube y marketing', sub: '', amount: 86000, pct: '15.5', tint: 55 },
  { name: 'Reserva de contingencia', sub: '', amount: 50400, pct: '9.1', tint: 30 },
];

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;

export const Slide11 = () => (
  <div className="slide slide--blue slide--circle">
    <div className="eyebrow">5.1.1 Caso práctico · Presupuesto de software</div>
    <h2>Presupuesto ilustrativo: App web de inventarios (4 meses)</h2>
    <div className="body">
      <div className="total">
        <span className="big">{fmt(TOTAL)}</span>
        <span className="unit">MXN</span>
        <span className="cap">Total del proyecto</span>
      </div>
      <div>
        {items.map((it) => (
          <div className="hbar" key={it.name}>
            <div className="name">
              {it.name}
              {it.sub && <span className="sub">{it.sub}</span>}
            </div>
            <div className="track">
              <div
                className="fill"
                style={{ width: `${it.pct}%`, background: `color-mix(in srgb, var(--accent) ${it.tint}%, white)` }}
              />
            </div>
            <div className="val">
              {fmt(it.amount)}
              <small>{it.pct} %</small>
            </div>
          </div>
        ))}
      </div>
      <div className="note">Ejemplo ficticio con fines didácticos. Cifras en pesos mexicanos.</div>
    </div>
    <Photo src={fotoEstado} shape="circle-lg" position="62% 58%" />
    <Footer n={11} active={3} />
  </div>
);
