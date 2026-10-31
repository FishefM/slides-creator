import { Footer } from '../Footer';

export const Slide03 = () => (
  <div className="slide">
    <div className="eyebrow">Arquitectura</div>
    <h2>Módulos dispersos vs. plataforma única</h2>
    <div className="body">
      <div className="grid-2">
        <div className="panel panel--zoho">
          <h3>Zoho</h3>
          <div className="sub">Aplicaciones independientes</div>
          <div className="chip">CRM · Ventas</div>
          <div className="sync">⇅ dependencia de conectores y límites por app</div>
          <div className="chip">Books · Facturación</div>
          <div className="sync">⇅ dependencia de conectores y límites por app</div>
          <div className="chip">Inventory · Almacén</div>
          <div className="panel-tag">Costo recurrente por usuario</div>
        </div>
        <div className="panel panel--erp">
          <h3>ERPNext</h3>
          <div className="sub">Módulos nativos en un solo entorno</div>
          <div className="db">
            <div className="db-title">Base de datos única</div>
            <div className="chips">
              <div className="chip">Ventas</div>
              <div className="chip">Compras</div>
              <div className="chip">Inventarios</div>
              <div className="chip">Contabilidad</div>
              <div className="chip">Nómina</div>
            </div>
          </div>
          <div className="panel-tag">Sin licencias por usuario</div>
        </div>
      </div>
    </div>
    <Footer n={3} />
  </div>
);
