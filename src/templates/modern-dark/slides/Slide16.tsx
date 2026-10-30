import React from 'react';
import { Terminal } from 'lucide-react';

export const Slide16 = () => (
  <div className="slide">
    <div className="flex-center">
      <h1 style={{ color: '#00ffcc' }}>XP</h1>
      <p>Extreme Programming</p>
      <div className="card" style={{ marginTop: '2rem' }}>
        <p>"Si una práctica técnica es buena, llevémosla al extremo."</p>
      </div>
      <Terminal size={48} style={{ marginTop: '2rem' }} />
    </div>
    <div className="footer">
      <span>XP: Introducción</span>
      <span>Slide 16</span>
    </div>
  </div>
);
