export const Slide02 = () => (
  <div className="slide">
    <h2>De lo Tradicional a lo Ágil</h2>
    <div className="grid-2">
      <div className="flex-start">
        <p>Durante décadas, el desarrollo fue lineal y rígido. En 2001, todo cambió buscando flexibilidad.</p>
        <div className="card" style={{ marginTop: '1rem', borderLeft: '4px solid #00ffcc' }}>
          <p><strong>Filosofía Ágil:</strong> Capacidad de respuesta ante el cambio constante del mercado.</p>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" className="slide-img" alt="Evolution" />
    </div>
    <div className="footer">
      <span>Contexto Histórico</span>
      <span>Slide 02</span>
    </div>
  </div>
);
