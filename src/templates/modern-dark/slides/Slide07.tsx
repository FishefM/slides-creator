import React from 'react';
import { BarChart } from 'lucide-react';

export const Slide07 = () => (
  <div className="slide">
    <h2>La Arquitectura de RUP</h2>
    <div className="grid-2">
      <div className="flex-start">
        <h3>Dos Dimensiones</h3>
        <ul className="bullet-list">
          <li><strong>Fases (Tiempo):</strong> Iniciación, Elaboración, Construcción, Transición.</li>
          <li><strong>Disciplinas (Proceso):</strong> Requisitos, Diseño, Pruebas, Gestión.</li>
        </ul>
      </div>
      <div style={{ background: '#111', padding: '1rem', borderRadius: '8px', border: '1px solid #333' }}>
        <BarChart size={200} color="#00ffcc" style={{ width: '100%' }} />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>Gráfico de "Jorobas" de RUP</p>
      </div>
    </div>
    <div className="footer">
      <span>Estructura de RUP</span>
      <span>Slide 07</span>
    </div>
  </div>
);
