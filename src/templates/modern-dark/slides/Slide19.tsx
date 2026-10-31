export const Slide19 = () => (
  <div className="slide">
    <h2>Comparativa Final</h2>
    <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse', textAlign: 'left' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333', color: '#00ffcc' }}>
          <th style={{ padding: '1rem' }}>Método</th>
          <th style={{ padding: '1rem' }}>Foco Principal</th>
          <th style={{ padding: '1rem' }}>Ideal para...</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #222' }}>
          <td style={{ padding: '1rem' }}><strong>RUP</strong></td>
          <td style={{ padding: '1rem' }}>Documentación / Arquitectura</td>
          <td style={{ padding: '1rem' }}>Gobierno y Riesgos</td>
        </tr>
        <tr style={{ borderBottom: '1px solid #222' }}>
          <td style={{ padding: '1rem' }}><strong>Scrum</strong></td>
          <td style={{ padding: '1rem' }}>Organización / Equipo</td>
          <td style={{ padding: '1rem' }}>Proyectos Comerciales</td>
        </tr>
        <tr>
          <td style={{ padding: '1rem' }}><strong>XP</strong></td>
          <td style={{ padding: '1rem' }}>Prácticas Técnicas</td>
          <td style={{ padding: '1rem' }}>Calidad Técnica Extrema</td>
        </tr>
      </tbody>
    </table>
    <p style={{ marginTop: '2rem', color: '#888', textAlign: 'center' }}>* Se recomienda usar "Scrum con prácticas XP".</p>
    <div className="footer">
      <span>Resumen Comparativo</span>
      <span>Slide 19</span>
    </div>
  </div>
);
