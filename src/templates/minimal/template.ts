import type { Template } from '../../types';
import './style.css';

export const MinimalTemplate: Template = {
  name: 'Minimalist Design',
  render: (container: HTMLElement) => {
    container.innerHTML = `
      <div class="template-minimal">
        <div class="slide">
          <h1>MINIMALIST</h1>
          <p>Clean and professional</p>
        </div>
      </div>
    `;
  }
};
