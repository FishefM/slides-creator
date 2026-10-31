import type { Template } from '../../types';
import './style.css';

export const BlueTemplate: Template = {
  name: 'Creative Blue',
  render: () => (
    <div className="template-blue">
      <div className="slide">
        <div className="flex-center">
          <h1>BLUE POWER</h1>
          <p>Energetic colors</p>
        </div>
      </div>
    </div>
  )
};
