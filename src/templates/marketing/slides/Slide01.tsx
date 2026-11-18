import portada from '../assets/img/cover.jpg';

const team = [
  'García Salgado Ángel Gabriel',
  'Hernández García Yucef Ubayd',
  'Huizache Cardón Tonatiuh',
  'López Bandala Jesús Antonio',
  'Luna Guadarrama Kitzya Minerva',
  'Navarrete Gómez Héctor Ramses',
];

export const Slide01 = () => (
  <div className="slide slide--cover">
    <div className="cover-text">
      <div>
        <h1>Comercialización y Viabilidad Financiera en TI</h1>
        <div className="rule" />
      </div>
      <div>
        <div className="cover-subject">Informática Empresarial</div>
        <ul className="team-list">
          {team.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </div>
      <div className="cover-foot">
        Instituto Politécnico Nacional — UPIICSA · Ingeniería en Informática
        <br />
        Equipo 4 · Docente: José Luís Chávez Pérez
      </div>
    </div>
    <div className="cover-art">
      <img src={portada} alt="" style={{ objectPosition: '30% center' }} />
    </div>
  </div>
);
