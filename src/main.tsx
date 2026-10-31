import { createRoot } from 'react-dom/client';
import './style.css';
import { ModernDarkTemplate } from './templates/modern-dark/template';
import { CorporateMonoTemplate } from './templates/corporate-mono/template';
import { BlueTemplate } from './templates/blue/template';
import { MinimalTemplate } from './templates/minimal/template';
import type { Template } from './types';

const app = document.querySelector<HTMLDivElement>('#app')!;
const root = createRoot(app);

const templates: Record<string, Template> = {
  'dark': ModernDarkTemplate,
  'mono': CorporateMonoTemplate,
  'blue': BlueTemplate,
  'minimal': MinimalTemplate,
};

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', color: 'white' }}>
      <h1>Modular Presentation System (React Edition)</h1>
      <p>Select a template:</p>
      <ul>
        {Object.keys(templates).map(key => (
          <li key={key}>
            <a href={`/${key}`} style={{ color: '#00ffcc' }}>{templates[key].name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function router() {
  const path = window.location.pathname.slice(1);
  const template = templates[path];

  if (template) {
    root.render(template.render());
  } else {
    root.render(<Home />);
  }
}

window.addEventListener('popstate', router);

// Handle link clicks for SPA routing
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('a');
  if (link && link.hasAttribute('href')) {
    const href = link.getAttribute('href')!;
    if (href.startsWith('/')) {
      e.preventDefault();
      window.history.pushState({}, '', href);
      router();
    }
  }
});

router();

// Marca <html> con .fs cuando el navegador está en pantalla completa (F11 o API Fullscreen).
function syncFullscreen() {
  const fs =
    document.fullscreenElement !== null ||
    window.matchMedia('(display-mode: fullscreen)').matches ||
    (window.innerWidth >= screen.width && window.innerHeight >= screen.height);
  document.documentElement.classList.toggle('fs', fs);
}

window.addEventListener('resize', syncFullscreen);
document.addEventListener('fullscreenchange', syncFullscreen);
syncFullscreen();
