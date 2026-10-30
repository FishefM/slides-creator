import type { Template } from '../../types';
import './style.css';

export const BlueTemplate: Template = {
  name: 'Creative Blue',
  render: (container: HTMLElement) => {
    container.innerHTML = `
      <div class="template-blue">
        <div class="slide">
          <h1>BLUE POWER</h1>
          <p>Energetic colors</p>
        </div>
      </div>
    `;
  }
};
