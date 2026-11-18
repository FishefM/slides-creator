import { Footer } from '../Footer';

const four = [
  { title: 'Producto', text: 'App móvil con soporte y actualizaciones' },
  { title: 'Precio', text: 'Suscripción mensual por usuario o freemium' },
  { title: 'Plaza', text: 'Sitio propio, tiendas de apps, integradores' },
  { title: 'Promoción', text: 'Redes, SEO, correo, webinars y demos' },
];

const three = [
  { title: 'Personas', text: 'Ingenieros de soporte capacitados' },
  { title: 'Procesos / SLA', text: 'Mesa de ayuda con tiempos de respuesta definidos' },
  { title: 'Evidencia física', text: 'Casos de éxito, certificaciones y reseñas' },
];

export const Slide03 = () => (
  <div className="slide slide--teal">
    <div className="eyebrow">4.4.1 Marketing · Mezcla 7P en TI</div>
    <h2>Las 7P aplicadas a productos y servicios de software</h2>
    <div className="body">
      <div>
        <div className="label">4P tradicionales</div>
        <div className="g4">
          {four.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="label">3P de servicios digitales</div>
        <div className="g3">
          {three.map((c) => (
            <div className="card card--soft" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer n={3} active={0} />
  </div>
);
