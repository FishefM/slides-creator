# slides-creator

Sistema modular para crear presentaciones con código. Cada diapositiva es un componente de React, cada tema es una plantilla independiente, se ven en el navegador y se exportan a PDF (A4 apaisado) con Puppeteer.

**Stack:** React 19 · TypeScript · Vite · lucide-react · Puppeteer

## Requisitos

- Node.js 20.19 o superior (o 22.12+), requisito de Vite 8
- Chrome para Puppeteer (solo para exportar a PDF, ver más abajo)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://localhost:5173`). La raíz `/` lista las plantillas disponibles y cada una vive en su propia ruta.

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Comprueba tipos (`tsc`) y genera el build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción ya generado |
| `npm start` | Genera el build y lo sirve. **Úsalo para exponer** (ver más abajo) |
| `npm run pdf -- <ruta>` | Exporta una plantilla a PDF. Ej.: `npm run pdf -- mono` genera `presentation-mono.pdf` |
| `npm run pptx` | Exporta la presentación `marketing` a PowerPoint editable (`.pptx` en la raíz). Si el archivo ya existe, pregunta si sobrescribir o guardar con otro nombre (`-- --out Nombre.pptx`, `-- --force`). Los textos viven en `scripts/export-pptx.mjs`, no se leen de la web |

### Para exponer: usa `npm start`, no `npm run dev`

El servidor de desarrollo carga ~50 módulos sueltos (~820 KB) y mantiene un websocket abierto para la recarga en caliente. El build de producción carga 4 archivos (~245 KB) sin websocket. Menos peticiones significa menos trabajo para el navegador y para las extensiones que inspeccionan el tráfico (bloqueadores de anuncios, antivirus). `npm run dev` queda solo para editar.

### Pantalla completa

Al pasar el navegador a pantalla completa (F11), cada diapositiva ocupa **toda la pantalla**, sin bordes, márgenes ni barra de desplazamiento, y el desplazamiento salta de una diapositiva a la siguiente. El contenido escala solo con el tamaño de pantalla (todo el diseño usa `rem`), así que funciona igual en 16:9, 16:10 o ultra ancho. En ventana normal se sigue viendo el formato A4 con márgenes.

`main.tsx` pone la clase `fs` en `<html>` al detectar pantalla completa y los estilos viven en `src/style.css`. Al escribir diapositivas nuevas usa `rem` (no `px`) para tamaños y medidas, para que escalen.

### Exportar a PDF

Puppeteer necesita un Chrome descargado. Si `npm run pdf` dice `Could not find Chrome`, ejecuta:

```bash
npx puppeteer browsers install chrome
```

El script levanta Vite por su cuenta, abre la ruta indicada, genera un PDF con una página por diapositiva y cierra todo. Los PDFs generados (`presentation-*.pdf`) están en `.gitignore`.

## Plantillas

| Ruta | Plantilla | Estado |
| --- | --- | --- |
| `/mono` | **Corporate Mono**: blanco y negro corporativo, escala de grises y un acento azul | Propuesta de migrar de Zoho a ERPNext |
| `/dark` | Modern Dark: tema oscuro con acento cian | Presentación completa de 20 diapositivas sobre metodologías ágiles (Scrum, XP, RUP) |
| `/blue` | Creative Blue: degradado azul | Demo de una diapositiva |
| `/minimal` | Minimalist Design | Demo de una diapositiva |

## Estructura del proyecto

```
├── index.html
├── scripts/
│   └── export-pdf.ts          # Exportación a PDF con Puppeteer
├── src/
│   ├── main.tsx               # Entrada + router SPA y registro de plantillas
│   ├── style.css              # Estilos base: tamaño de diapositiva, @page, impresión
│   ├── types.ts               # Interfaz Template
│   └── templates/
│       └── <plantilla>/
│           ├── template.tsx   # Compone las diapositivas y exporta el Template
│           ├── style.css      # Estilos del tema (con prefijo de clase propio)
│           └── slides/        # SlideNN.tsx, una por diapositiva
└── public/                    # Favicon e iconos
```

## Crear una nueva plantilla o presentación

1. **Copia una plantilla** como punto de partida, por ejemplo `src/templates/corporate-mono/`, con otro nombre de carpeta.
2. **Cambia la clase raíz** en `template.tsx` y en `style.css` (p. ej. `template-mono` → `template-miproyecto`) para que los estilos no choquen con los de otras plantillas.
3. **Edita o añade diapositivas** en `slides/`. Cada una es un componente que devuelve un `.slide`:

   ```tsx
   export const Slide05 = () => (
     <div className="slide">
       <h2>Mi título</h2>
       <p>Contenido</p>
       <div className="footer">
         <span>Mi presentación</span>
         <span>Slide 05</span>
       </div>
     </div>
   );
   ```

4. **Impórtalas** en `template.tsx` y exporta un objeto `Template`:

   ```tsx
   export const MiTemplate: Template = {
     name: 'Mi presentación',
     render: () => (
       <div className="template-miproyecto">
         <Slide01 />
         <Slide02 />
       </div>
     )
   };
   ```

5. **Regístrala** en `src/main.tsx`; la clave se convierte en la ruta:

   ```tsx
   const templates: Record<string, Template> = {
     // ...
     'miproyecto': MiTemplate,
   };
   ```

6. Visualízala en `/miproyecto` y expórtala con `npm run pdf -- miproyecto`.

### Tamaño de diapositiva

Todas miden **297 × 210 mm** (A4 apaisado), definido por `--slide-width` y `--slide-height` en `src/style.css`. Ese mismo tamaño se aplica al PDF mediante `@page`, de modo que cada diapositiva ocupa exactamente una página.

## Notas

- El proyecto no tiene router real: `main.tsx` lee `window.location.pathname` y renderiza la plantilla registrada con esa clave. El servidor de Vite resuelve cualquier ruta al `index.html`, pero si publicas el build `dist/` necesitas un fallback a `index.html` para acceder directamente a `/mono`, `/dark`, etc.
- Los iconos vienen de [lucide-react](https://lucide.dev/).
