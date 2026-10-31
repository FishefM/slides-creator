import type { Template } from '../../types';
import './style.css';

export const MinimalTemplate: Template = {
  name: 'Minimalist Design',
  render: () => (
    <div className="template-minimal">
      <div className="slide">
        <div className="flex-center">
          <h1>MINIMALIST</h1>
          <p>Clean and professional</p>
        </div>
      </div>
    </div>
  )
};
