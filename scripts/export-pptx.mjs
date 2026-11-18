// Exporta la presentación "marketing" a PowerPoint (.pptx) editable, con formas, tablas y gráfico nativos.
// Uso: npm run pptx   ->   Comercializacion_y_Viabilidad_Financiera_en_TI.pptx en la raíz del proyecto.
//   Si el archivo ya existe, pregunta si sobrescribirlo, guardar con otro nombre o cancelar.
//   npm run pptx -- --out Otro.pptx   guarda con ese nombre      npm run pptx -- --force   sobrescribe sin preguntar
//
// Es una reescritura de las diapositivas con pptxgenjs (formato 16:9): los textos y posiciones viven en
// este archivo, no se leen de los componentes de React. Si cambias una diapositiva web, actualiza aquí.
import fs from 'fs';
import readline from 'readline/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pptxgen from 'pptxgenjs';
import JSZip from 'jszip';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMG_DIR = path.join(ROOT, 'src/templates/marketing/assets/img');

// ---------- Archivo de salida: nunca se pisa uno existente sin preguntar ----------
const args = process.argv.slice(2);
const FORCE = args.includes('--force') || args.includes('-f');
const outFlag = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
const DEFAULT_NAME = 'Comercializacion_y_Viabilidad_Financiera_en_TI.pptx';

const cleanName = (n) => {
  let base = path.basename(String(n ?? '').trim()).replace(/[<>:"/\\|?*\x00-\x1f]/g, '_');
  if (!base) return '';
  return /\.pptx$/i.test(base) ? base : `${base}.pptx`;
};

async function resolveOutput() {
  let name = cleanName(outFlag ?? DEFAULT_NAME);
  if (!name) { console.error('Nombre de archivo no válido.'); process.exit(1); }
  const full = (n) => path.join(ROOT, n);
  if (FORCE || !fs.existsSync(full(name))) return full(name);
  if (!process.stdin.isTTY) {
    console.error(`Ya existe «${name}» y no hay terminal interactiva para preguntar.\nUsa --force para sobrescribirlo o --out otro_nombre.pptx para guardar con otro nombre.`);
    process.exit(1);
  }
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    while (fs.existsSync(full(name))) {
      const answer = (await rl.question(`Ya existe «${name}».\n  [S] Sobrescribirlo   [N] Guardar con otro nombre   [C] Cancelar\n¿Qué quieres hacer? (Enter = cancelar) `)).trim().toLowerCase();
      if (answer === 's') break;
      if (answer === 'n') {
        const next = cleanName(await rl.question('Nuevo nombre del archivo: '));
        if (!next) { console.log('Nombre vacío: no se generó nada.'); process.exit(0); }
        name = next;
        continue;
      }
      console.log('Cancelado: no se generó nada.');
      process.exit(0);
    }
  } finally {
    rl.close();
  }
  return full(name);
}
const OUT = await resolveOutput();

// ---------- Paleta (misma que la versión web) ----------
const THEME = {
  name: 'Marketing y Finanzas en TI',
  colors: {
    dk1: '1E293B', lt1: 'FFFFFF', dk2: '64748B', lt2: 'F8FAFC',
    accent1: '0D9488', accent2: '2563EB', accent3: '0F766E', accent4: '1D4ED8',
    accent5: 'F0FDFA', accent6: 'EFF6FF', hlink: '2563EB', folHlink: '64748B',
  },
};
const TEAL = '0D9488', TEAL_INK = '0F766E', TEAL_SOFT = 'F0FDFA';
const BLUE = '2563EB', BLUE_INK = '1D4ED8', BLUE_SOFT = 'EFF6FF';
const TEXT = '1E293B', DIM = '64748B', CARD = 'F8FAFC', LINE = 'E2E8F0', WHITE = 'FFFFFF';

const tint = (hex, pct) => {
  const c = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return c.map((v) => Math.round(v * pct + 255 * (1 - pct)).toString(16).padStart(2, '0')).join('').toUpperCase();
};
const tone = (t) => (t === 'teal' ? { main: TEAL, ink: TEAL_INK, soft: TEAL_SOFT } : { main: BLUE, ink: BLUE_INK, soft: BLUE_SOFT });

// ---------- Fotos: se recortan aquí a la proporción exacta de cada hueco ----------
async function crop(file, ratio, px, py, { rounded = 0 } = {}) {
  const src = sharp(path.join(IMG_DIR, file));
  const { width: W, height: H } = await src.metadata();
  const [w, h] = W / H > ratio ? [Math.round(H * ratio), H] : [W, Math.round(W / ratio)];
  let out = src.extract({ left: Math.round((W - w) * px), top: Math.round((H - h) * py), width: w, height: h });
  if (rounded) {
    const mask = Buffer.from(`<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${Math.round(w * rounded)}"/></svg>`);
    const png = await out.png().toBuffer();
    return 'image/png;base64,' + (await sharp(png).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer()).toString('base64');
  }
  return 'image/jpeg;base64,' + (await out.jpeg({ quality: 88 }).toBuffer()).toString('base64');
}
const PIC = {
  cover: await crop('cover.jpg', 4.933 / 7.5, 0.3, 0.5),
  strip: await crop('marketing.jpg', 2.6 / 7.5, 0.5, 0.4),
  circle4: await crop('social.jpg', 1, 0.55, 0.4),
  card7: await crop('finanzas.jpg', 2.5 / 3.9, 0.28, 0.5, { rounded: 0.08 }),
  circle11: await crop('estado.jpg', 1, 0.62, 0.58),
};

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333" x 7.5"
pres.title = 'Comercialización y Viabilidad Financiera en TI';
pres.author = 'Equipo 4';
pres.subject = 'Informática Empresarial · UPIICSA';
pres.theme = { headFontFace: 'Arial', bodyFontFace: 'Arial' };

// ---------- Diseños (layouts) ----------
const SECTIONS = ['4.4.1 Marketing', '4.4.2 Estrategia de venta', '5.1 Plan financiero', '5.1.1 Costos y presupuestos'];
const SEC_TONE = ['teal', 'teal', 'blue', 'blue'];
const SEC_W = [1.55, 2.35, 1.85, 2.55];

function defineLayout(name, active, left, gap) {
  const objects = [];
  let x = left;
  SECTIONS.forEach((label, i) => {
    const t = tone(SEC_TONE[i]);
    const state = i === active ? 'on' : active !== null && i < active ? 'done' : 'off';
    objects.push({ rect: { x, y: 6.82, w: SEC_W[i], h: 0.045, fill: { color: state === 'on' ? t.main : state === 'done' ? tint(t.main, 0.35) : LINE } } });
    objects.push({ text: { text: label, options: { x, y: 6.9, w: SEC_W[i], h: 0.28, fontSize: 10, bold: state === 'on', color: state === 'on' ? t.ink : DIM, fontFace: 'Arial', margin: 0 } } });
    x += SEC_W[i] + gap;
  });
  objects.push({ placeholder: { options: { name: 'title', type: 'title', x: left, y: 0.8, w: 9.4, h: 1.1, fontFace: 'Arial', fontSize: 30, bold: true, color: TEXT, valign: 'top', margin: 0 }, text: '' } });
  pres.defineSlideMaster({
    title: name,
    background: { color: WHITE },
    objects,
    slideNumber: { x: 11.9, y: 6.88, w: 0.75, h: 0.35, fontSize: 10, color: DIM, align: 'right', fontFace: 'Arial' },
  });
}
defineLayout('Marketing (4.4.1)', 0, 0.7, 0.2);
defineLayout('Marketing con foto a la izquierda (4.4.1)', 0, 3.2, 0.15);
defineLayout('Estrategia de venta (4.4.2)', 1, 0.7, 0.2);
defineLayout('Plan financiero (5.1)', 2, 0.7, 0.2);
defineLayout('Costos y presupuestos (5.1.1)', 3, 0.7, 0.2);
pres.defineSlideMaster({
  title: 'Portada',
  background: { color: WHITE },
  objects: [{ placeholder: { options: { name: 'title', type: 'title', x: 0.7, y: 0.8, w: 7.2, h: 2.3, fontFace: 'Arial', fontSize: 40, bold: true, color: TEXT, valign: 'top', margin: 0 }, text: '' } }],
});

// ---------- Exponentes (se guardan en las notas del orador) ----------
const SPEAKER = {
  1: 'García Salgado Ángel Gabriel', 2: 'García Salgado Ángel Gabriel',
  3: 'Hernández García Yucef Ubayd', 4: 'Hernández García Yucef Ubayd',
  5: 'Huizache Cardón Tonatiuh', 6: 'Huizache Cardón Tonatiuh',
  7: 'López Bandala Jesús Antonio', 8: 'López Bandala Jesús Antonio',
  9: 'Luna Guadarrama Kitzya Minerva', 10: 'Luna Guadarrama Kitzya Minerva',
  11: 'Navarrete Gómez Héctor Ramses', 12: 'Navarrete Gómez Héctor Ramses',
};

// ---------- Ayudantes ----------
function newSlide(n, master, section, eyebrowText, t, eyebrowX = 0.7) {
  const s = pres.addSlide({ masterName: master, sectionTitle: section });
  s.addNotes(`Expone: ${SPEAKER[n]}.`);
  if (eyebrowText) {
    s.addText(eyebrowText.toUpperCase(), { x: eyebrowX, y: 0.4, w: 9.4, h: 0.3, fontSize: 11, bold: true, color: tone(t).ink, charSpacing: 2, fontFace: 'Arial', margin: 0, isTextBox: true });
  }
  return s;
}
const label = (s, text, x, y, w = 6) =>
  s.addText(text.toUpperCase(), { x, y, w, h: 0.3, fontSize: 11, bold: true, color: DIM, charSpacing: 2, fontFace: 'Arial', margin: 0, isTextBox: true });

function card(s, { x, y, w, h, title, body, tn, num, fill = CARD, titleSize = 18, bodySize = 14 }) {
  const t = tone(tn);
  const runs = [];
  if (num) runs.push({ text: num, options: { fontSize: 11, bold: true, color: t.ink, charSpacing: 2, breakLine: true } });
  runs.push({ text: title, options: { fontSize: titleSize, bold: true, color: t.ink, breakLine: true } });
  if (body) runs.push({ text: body, options: { fontSize: bodySize, color: DIM } });
  s.addText(runs, { shape: pres.ShapeType.rect, x, y, w, h, fill: { color: fill }, line: { color: LINE, width: 1 }, margin: 12, valign: 'top', fontFace: 'Arial', paraSpaceAfter: 4, isTextBox: true });
}
function chip(s, { x, y, w, h = 0.5, text, tn, solid = false }) {
  const t = tone(tn);
  s.addText(text, { shape: pres.ShapeType.rect, x, y, w, h, fill: { color: solid ? t.main : t.soft }, line: { color: solid ? t.main : tint(t.main, 0.3), width: 1 }, align: 'center', valign: 'middle', fontSize: 14, bold: true, color: solid ? WHITE : t.ink, fontFace: 'Arial', margin: 4, isTextBox: true });
}
const cellBorder = () => [{ type: 'none' }, { type: 'none' }, { type: 'solid', pt: 1, color: LINE }, { type: 'none' }];
function rowsTable(s, rows, { x, y, w, colW, rowH }) {
  const data = rows.map(([k, v]) => [
    { text: k, options: { bold: true, color: TEXT, fontSize: 14, border: cellBorder() } },
    { text: v, options: { color: DIM, fontSize: 14, border: cellBorder() } },
  ]);
  s.addTable(data, { x, y, w, colW, rowH, fontFace: 'Arial', valign: 'middle', margin: 6 });
}
function headTable(s, head, rows, tn, { x, y, w, colW, rowH }) {
  const t = tone(tn);
  const data = [head.map((h) => ({ text: h.toUpperCase(), options: { bold: true, color: t.ink, fontSize: 11, charSpacing: 1, fill: { color: t.soft }, border: cellBorder() } }))];
  rows.forEach(([k, v]) => data.push([
    { text: k, options: { bold: true, color: TEXT, fontSize: 14, border: cellBorder() } },
    { text: v, options: { color: DIM, fontSize: 14, border: cellBorder() } },
  ]));
  s.addTable(data, { x, y, w, colW, rowH, fontFace: 'Arial', valign: 'middle', margin: 6 });
}

// =====================================================================
// 01 · Portada
// =====================================================================
pres.addSection({ title: 'Portada' });
{
  const s = pres.addSlide({ masterName: 'Portada', sectionTitle: 'Portada' });
  s.addNotes(`Expone: ${SPEAKER[1]}. Presenta al equipo y el objetivo de la exposición.`);
  s.addText('Comercialización y Viabilidad Financiera en TI', { placeholder: 'title' });
  s.addText('Informática Empresarial', { x: 0.7, y: 3.5, w: 7.2, h: 0.45, fontSize: 22, color: TEXT, fontFace: 'Arial', margin: 0, isTextBox: true });
  const names = ['García Salgado Ángel Gabriel', 'Hernández García Yucef Ubayd', 'Huizache Cardón Tonatiuh', 'López Bandala Jesús Antonio', 'Luna Guadarrama Kitzya Minerva', 'Navarrete Gómez Héctor Ramses'];
  s.addText(names.map((t, i) => ({ text: t, options: { bullet: { indent: 18 }, breakLine: i < names.length - 1 } })), { x: 0.7, y: 4.1, w: 7.2, h: 2.2, fontSize: 16, color: TEXT, fontFace: 'Arial', margin: 0, valign: 'top', paraSpaceAfter: 3, isTextBox: true });
  s.addText([
    { text: 'Instituto Politécnico Nacional — UPIICSA · Ingeniería en Informática', options: { breakLine: true } },
    { text: 'Equipo 4 · Docente: José Luís Chávez Pérez' },
  ], { x: 0.7, y: 6.55, w: 7.2, h: 0.6, fontSize: 11, color: DIM, fontFace: 'Arial', margin: 0, valign: 'top', isTextBox: true });
  s.addImage({ data: PIC.cover, x: 8.4, y: 0, w: 4.933, h: 7.5, altText: 'Reunión de negocios' });
}

// =====================================================================
// 02 · STP (foto en tira a la izquierda)
// =====================================================================
pres.addSection({ title: '4.4.1 Marketing' });
{
  const X0 = 3.2;
  const s = newSlide(2, 'Marketing con foto a la izquierda (4.4.1)', '4.4.1 Marketing', '4.4.1 Marketing · Enfoque estratégico', 'teal', X0);
  s.addText('Del desarrollo técnico a una oferta con valor comercial', { placeholder: 'title' });
  s.addImage({ data: PIC.strip, x: 0, y: 0, w: 2.6, h: 7.5, altText: 'Rotafolio con mapa mental de marketing' });
  label(s, 'Modelo STP', X0, 2.1);
  const steps = [
    ['01', 'Segmentación', 'Dividir el mercado en grupos con necesidades parecidas'],
    ['02', 'Mercado meta', 'Elegir el segmento más rentable y atendible'],
    ['03', 'Posicionamiento', 'Ofrecer una propuesta de valor distinta a la competencia'],
  ];
  steps.forEach(([num, title, body], i) => {
    const x = X0 + i * (2.7 + 0.65);
    card(s, { x, y: 2.45, w: 2.7, h: 2.2, title, body, tn: 'teal', num });
    if (i < 2) s.addText('→', { x: x + 2.7, y: 3.2, w: 0.65, h: 0.6, fontSize: 28, bold: true, color: TEAL, align: 'center', valign: 'middle', fontFace: 'Arial', margin: 0, isTextBox: true });
  });
  label(s, 'Objetivos del marketing en TI', X0, 5.0);
  const goals = ['Identificar necesidades', 'Generar prospectos', 'Diferenciar la oferta', 'Fidelizar clientes'];
  goals.forEach((g, i) => chip(s, { x: X0 + (i % 2) * 4.8, y: 5.35 + Math.floor(i / 2) * 0.62, w: 4.6, text: g, tn: 'teal' }));
}

// =====================================================================
// 03 · Mezcla 7P
// =====================================================================
{
  const s = newSlide(3, 'Marketing (4.4.1)', '4.4.1 Marketing', '4.4.1 Marketing · Mezcla 7P en TI', 'teal');
  s.addText('Las 7P aplicadas a productos y servicios de software', { placeholder: 'title' });
  label(s, '4P tradicionales', 0.7, 2.1);
  const four = [
    ['Producto', 'App móvil con soporte y actualizaciones'],
    ['Precio', 'Suscripción mensual por usuario o freemium'],
    ['Plaza', 'Sitio propio, tiendas de apps, integradores'],
    ['Promoción', 'Redes, SEO, correo, webinars y demos'],
  ];
  four.forEach(([title, body], i) => card(s, { x: 0.7 + i * 3.043, y: 2.45, w: 2.8, h: 1.65, title, body, tn: 'teal' }));
  label(s, '3P de servicios digitales', 0.7, 4.35);
  const three = [
    ['Personas', 'Ingenieros de soporte capacitados'],
    ['Procesos / SLA', 'Mesa de ayuda con tiempos de respuesta definidos'],
    ['Evidencia física', 'Casos de éxito, certificaciones y reseñas'],
  ];
  three.forEach(([title, body], i) => card(s, { x: 0.7 + i * 4.065, y: 4.7, w: 3.8, h: 1.65, title, body, tn: 'teal', fill: TEAL_SOFT }));
}

// =====================================================================
// 04 · Medios digitales y KPIs (foto circular arriba a la derecha)
// =====================================================================
{
  const s = newSlide(4, 'Marketing (4.4.1)', '4.4.1 Marketing', '4.4.1 Marketing · Medios digitales y KPIs', 'teal');
  s.addText('Atracción digital (Pull) y métricas de desempeño', { placeholder: 'title' });
  s.addShape(pres.ShapeType.ellipse, { x: 10.53, y: 0.38, w: 2.1, h: 2.1, fill: { color: TEAL_SOFT }, line: { color: TEAL_SOFT, width: 0 } });
  s.addImage({ data: PIC.circle4, x: 10.6, y: 0.45, w: 1.96, h: 1.96, rounding: true, altText: 'Manos con iconos de redes sociales' });
  label(s, 'Herramientas digitales', 0.7, 2.7);
  const tools = [
    ['SEO / SEM', 'Aparecer en los buscadores'],
    ['Contenidos', 'Blogs, guías y webinars'],
    ['Redes sociales', 'Comunidad y publicidad segmentada'],
    ['Email', 'Contacto automático con prospectos'],
  ];
  tools.forEach(([title, body], i) => card(s, { x: 0.7 + (i % 2) * 2.9, y: 3.05 + Math.floor(i / 2) * 1.65, w: 2.75, h: 1.5, title, body, tn: 'teal' }));
  label(s, 'Indicadores clave (KPI)', 6.8, 2.7);
  headTable(s, ['Indicador', 'Qué mide'], [
    ['Tasa de conversión', 'Visitantes que se registran o compran'],
    ['CAC', 'Cuánto cuesta ganar un cliente nuevo'],
    ['ROI', 'Si la campaña dio ganancia o pérdida'],
    ['Churn', 'Clientes que abandonan el servicio'],
  ], 'teal', { x: 6.8, y: 3.05, w: 5.83, colW: [2.0, 3.83], rowH: [0.4, 0.7, 0.7, 0.7, 0.7] });
}

// =====================================================================
// 05 · Embudo comercial
// =====================================================================
pres.addSection({ title: '4.4.2 Estrategia de venta' });
{
  const s = newSlide(5, 'Estrategia de venta (4.4.2)', '4.4.2 Estrategia de venta', '4.4.2 Estrategia de venta · Embudo comercial', 'teal');
  s.addText('Cómo convertir prospectos en ingresos reales', { placeholder: 'title' });
  const stages = [
    ['Atención', 'Conocen la marca'],
    ['Consideración', 'Comparan y se califican leads'],
    ['Demo / Prueba', 'Ven cómo resuelve su problema'],
    ['Decisión', 'Menos prospectos, más intención'],
    ['Cierre', 'Cotización, negociación y venta'],
    ['Postventa', 'Soporte, capacitación y recomendación'],
  ];
  stages.forEach(([name, text], i) => {
    const x = 0.7 + i * 1.98;
    s.addText(String(i + 1), { shape: pres.ShapeType.chevron, x, y: 2.5, w: 2.05, h: 0.9, fill: { color: tint(TEAL, 0.14 + i * 0.1) }, line: { color: WHITE, width: 1 }, align: 'center', valign: 'middle', fontSize: 24, bold: true, color: TEXT, fontFace: 'Arial', margin: 0, isTextBox: true });
    s.addText(name, { x, y: 3.6, w: 1.85, h: 0.4, fontSize: 16, bold: true, color: TEXT, fontFace: 'Arial', margin: 0, valign: 'top', isTextBox: true });
    s.addText(text, { x, y: 4.05, w: 1.8, h: 1.0, fontSize: 14, color: DIM, fontFace: 'Arial', margin: 0, valign: 'top', isTextBox: true });
  });
  s.addText('Muchos interesados', { x: 0.7, y: 5.55, w: 2.4, h: 0.35, fontSize: 14, color: DIM, fontFace: 'Arial', margin: 0, valign: 'middle', isTextBox: true });
  s.addShape(pres.ShapeType.line, { x: 3.2, y: 5.725, w: 6.4, h: 0, line: { color: TEAL, width: 2, endArrowType: 'triangle' } });
  s.addText('Solo quienes compran', { x: 9.83, y: 5.55, w: 2.8, h: 0.35, fontSize: 14, color: DIM, align: 'right', fontFace: 'Arial', margin: 0, valign: 'middle', isTextBox: true });
}

// =====================================================================
// 06 · Modalidades y precios
// =====================================================================
{
  const s = newSlide(6, 'Estrategia de venta (4.4.2)', '4.4.2 Estrategia de venta', '4.4.2 Estrategia de venta · Modelos y precios', 'teal');
  s.addText('Modalidades de venta y fijación de precios en software', { placeholder: 'title' });
  label(s, 'Modalidades de venta', 0.7, 2.1);
  rowsTable(s, [
    ['Consultiva', 'Soluciones complejas o de precio alto'],
    ['Directa / e-commerce', 'Control total de la relación con el cliente'],
    ['Indirecta / partners', 'Llegar a más clientes con terceros'],
    ['Freemium SaaS', 'Versión gratis, cobro por funciones'],
    ['Venta cruzada', 'Complemento para clientes actuales'],
  ], { x: 0.7, y: 2.45, w: 5.7, colW: [2.2, 3.5], rowH: 0.66 });
  label(s, 'Esquemas de precio', 6.93, 2.1);
  rowsTable(s, [
    ['Valor percibido', 'Lo que el cliente está dispuesto a pagar'],
    ['Suscripción / Freemium', 'Pago recurrente o versión básica gratis'],
    ['Por proyecto / hora', 'Tarifa fija o tiempo de servicio'],
    ['Penetración y descremado', 'Precio bajo para entrar o alto al lanzar'],
  ], { x: 6.93, y: 2.45, w: 5.7, colW: [2.2, 3.5], rowH: 0.66 });
  s.addText('Valor de vida del cliente (LTV) ≥ 3 veces el costo de adquisición (CAC)', { shape: pres.ShapeType.rect, x: 0.7, y: 5.8, w: 11.93, h: 0.75, fill: { color: TEAL_SOFT }, line: { color: tint(TEAL, 0.3), width: 1 }, fontSize: 20, bold: true, color: TEXT, valign: 'middle', margin: 14, fontFace: 'Arial', isTextBox: true });
}

// =====================================================================
// 07 · Estructura del plan financiero (tarjeta con foto redondeada)
// =====================================================================
pres.addSection({ title: '5.1 Plan financiero' });
{
  const s = newSlide(7, 'Plan financiero (5.1)', '5.1 Plan financiero', '5.1 Plan financiero y económico · Estructura', 'blue');
  s.addText('Rentabilidad del proyecto vs. liquidez de la empresa', { placeholder: 'title' });
  s.addImage({ data: PIC.card7, x: 10.15, y: 2.15, w: 2.5, h: 3.9, altText: 'Calculadora sobre estados financieros' });
  card(s, { x: 0.7, y: 2.2, w: 4.4, h: 1.75, num: 'ANÁLISIS ECONÓMICO', title: '¿El proyecto es rentable por sí mismo?', body: 'Sin considerar cómo se paga', tn: 'blue', fill: BLUE_SOFT, titleSize: 17 });
  card(s, { x: 5.3, y: 2.2, w: 4.4, h: 1.75, num: 'ANÁLISIS FINANCIERO', title: '¿Hay financiamiento y liquidez?', body: 'Créditos, aportaciones y obligaciones', tn: 'blue', fill: BLUE_SOFT, titleSize: 17 });
  label(s, 'Estados financieros proyectados', 0.7, 4.2);
  const st = [
    ['Resultados', 'Ingresos, costos y utilidad neta'],
    ['Flujo de efectivo', 'Entradas y salidas; anticipa faltantes'],
    ['Balance general', 'Activos, pasivos y capital a una fecha'],
  ];
  st.forEach(([title, body], i) => card(s, { x: 0.7 + i * 3.065, y: 4.55, w: 2.87, h: 1.85, title, body, tn: 'blue' }));
}

// =====================================================================
// 08 · Financiamiento e indicadores
// =====================================================================
{
  const s = newSlide(8, 'Plan financiero (5.1)', '5.1 Plan financiero', '5.1 Plan financiero · Financiamiento e indicadores', 'blue');
  s.addText('De dónde salen los recursos y cómo evaluar si conviene invertir', { placeholder: 'title' });
  label(s, 'Fuentes de financiamiento', 0.7, 2.1);
  const src = [
    ['Capital propio', 'Ahorros de los socios'],
    ['Crédito bancario', 'Con intereses e historial'],
    ['Inversionistas / VC', 'Capital a cambio de participación'],
    ['Incubadoras', 'Apoyo y mentoría'],
    ['Crowdfunding', 'Aportes colectivos en línea'],
    ['Proveedores', 'Plazo para pagar equipos'],
  ];
  src.forEach(([title, body], i) => card(s, { x: 0.7 + (i % 2) * 3.0, y: 2.45 + Math.floor(i / 2) * 1.32, w: 2.85, h: 1.2, title, body, tn: 'blue', titleSize: 16 }));
  label(s, 'Conviene invertir si…', 7.0, 2.1);
  headTable(s, ['Indicador', 'Criterio'], [
    ['VAN', 'Mayor a cero'],
    ['TIR', 'Mayor al costo de oportunidad'],
    ['PRI', 'Plazo de retorno aceptable'],
    ['B/C', 'Mayor a 1'],
  ], 'blue', { x: 7.0, y: 2.45, w: 5.63, colW: [1.4, 4.23], rowH: [0.4, 0.65, 0.65, 0.65, 0.65] });
  s.addText('Se analizan en conjunto, no uno solo.', { x: 7.0, y: 5.5, w: 5.63, h: 0.35, fontSize: 14, color: DIM, fontFace: 'Arial', margin: 0, isTextBox: true });
}

// =====================================================================
// 09 · Estructura de costos
// =====================================================================
pres.addSection({ title: '5.1.1 Costos y presupuestos' });
{
  const s = newSlide(9, 'Costos y presupuestos (5.1.1)', '5.1.1 Costos y presupuestos', '5.1.1 Costos y presupuestos · Estructura en TI', 'blue');
  s.addText('Radiografía de costos en un proyecto informático', { placeholder: 'title' });
  label(s, 'Fijos vs. variables · Directos vs. indirectos', 0.7, 2.1, 9);
  const costs = [
    ['Fijos', 'Renta, sueldos permanentes, licencias anuales'],
    ['Variables', 'Nube por usuario, comisiones, soporte por ticket'],
    ['Directos', 'Horas de programación de una app específica'],
    ['Indirectos', 'Energía, internet y administración general'],
  ];
  costs.forEach(([title, body], i) => card(s, { x: 0.7 + i * 3.043, y: 2.45, w: 2.8, h: 1.75, title, body, tn: 'blue' }));
  label(s, 'Rubros clave del ciclo de vida del software', 0.7, 4.5, 9);
  const items = ['Talento humano', 'Nube', 'Licencias', 'Seguridad', 'Mantenimiento', 'Comercialización'];
  items.forEach((t, i) => chip(s, { x: 0.7 + (i % 3) * 4.065, y: 4.85 + Math.floor(i / 3) * 0.62, w: 3.8, text: t, tn: 'blue', solid: i === 0 }));
  s.addText('El talento humano suele ser la mayor parte del costo.', { x: 0.7, y: 6.15, w: 9, h: 0.35, fontSize: 14, color: DIM, fontFace: 'Arial', margin: 0, isTextBox: true });
}

// =====================================================================
// 10 · Métodos y estimación
// =====================================================================
{
  const s = newSlide(10, 'Costos y presupuestos (5.1.1)', '5.1.1 Costos y presupuestos', '5.1.1 Costos y presupuestos · Métodos y estimación', 'blue');
  s.addText('Cómo presupuestar y estimar el esfuerzo en software', { placeholder: 'title' });
  label(s, 'Métodos de presupuesto', 0.7, 2.1);
  rowsTable(s, [
    ['Incremental', 'Ajusta el presupuesto anterior'],
    ['Base cero', 'Cada gasto se justifica desde cero'],
    ['Continuo / Rolling', 'Se actualiza con frecuencia; ideal en ágil'],
  ], { x: 0.7, y: 2.45, w: 5.7, colW: [2.2, 3.5], rowH: 0.85 });
  label(s, 'Técnicas de estimación', 6.93, 2.1);
  rowsTable(s, [
    ['Análoga', 'Parte de un proyecto similar previo'],
    ['Ascendente (bottom-up)', 'Suma de cada paquete de trabajo'],
    ['Paramétrica', 'Costo por punto de historia'],
    ['PERT', 'Tres escenarios: optimista, probable, pesimista'],
  ], { x: 6.93, y: 2.45, w: 5.7, colW: [2.2, 3.5], rowH: 0.85 });
}

// =====================================================================
// 11 · Caso práctico (gráfico nativo + foto circular)
// =====================================================================
{
  const s = newSlide(11, 'Costos y presupuestos (5.1.1)', '5.1.1 Costos y presupuestos', '5.1.1 Caso práctico · Presupuesto de software', 'blue');
  s.addText('Presupuesto ilustrativo: App web de inventarios (4 meses)', { placeholder: 'title' });
  s.addShape(pres.ShapeType.ellipse, { x: 10.2, y: 0.3, w: 2.5, h: 2.5, fill: { color: BLUE_SOFT }, line: { color: BLUE_SOFT, width: 0 } });
  s.addImage({ data: PIC.circle11, x: 10.28, y: 0.38, w: 2.34, h: 2.34, rounding: true, altText: 'Estado bancario histórico' });
  s.addText([
    { text: '$554,400', options: { fontSize: 44, bold: true, color: BLUE } },
    { text: '  MXN', options: { fontSize: 20, bold: true, color: DIM } },
  ], { x: 0.7, y: 2.05, w: 6.5, h: 0.85, fontFace: 'Arial', margin: 0, valign: 'middle', isTextBox: true });
  s.addText('TOTAL DEL PROYECTO', { x: 7.3, y: 2.3, w: 2.7, h: 0.35, fontSize: 11, bold: true, color: DIM, charSpacing: 2, align: 'right', fontFace: 'Arial', margin: 0, isTextBox: true });
  s.addChart(pres.charts.BAR, [{
    name: '% del total',
    labels: ['Talento humano · $334,000', 'Equipo y licencias · $84,000', 'Operación, nube y marketing · $86,000', 'Reserva de contingencia · $50,400'],
    values: [60.3, 15.1, 15.5, 9.1],
  }], {
    x: 0.7, y: 3.05, w: 11.93, h: 3.2,
    barDir: 'bar', barGapWidthPct: 45,
    chartColors: [BLUE, tint(BLUE, 0.55), tint(BLUE, 0.55), tint(BLUE, 0.3)],
    catAxisOrientation: 'maxMin', catAxisLabelFontSize: 14, catAxisLabelColor: TEXT, catAxisLabelFontFace: 'Arial',
    valAxisHidden: true, valAxisMinVal: 0, valAxisMaxVal: 75, valGridLine: { style: 'none' }, catGridLine: { style: 'none' },
    showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '0.0" %"', dataLabelFontSize: 14, dataLabelColor: TEXT, dataLabelFontFace: 'Arial', dataLabelFontBold: true,
    showLegend: false, showTitle: false,
  });
  s.addText('Talento humano: 3 desarrolladores, 1 diseñador UX/UI y 1 líder de proyecto. Ejemplo ficticio con fines didácticos; cifras en pesos mexicanos.', { x: 0.7, y: 6.3, w: 11.93, h: 0.4, fontSize: 11, color: DIM, fontFace: 'Arial', margin: 0, isTextBox: true });
}

// =====================================================================
// 12 · Control presupuestal y conclusión
// =====================================================================
{
  const s = newSlide(12, 'Costos y presupuestos (5.1.1)', '5.1.1 Costos y presupuestos', '5.1.1 Control presupuestal · Conclusión', 'blue');
  s.addText('Seguimiento del gasto y alineación entre áreas', { placeholder: 'title' });
  const pts = [
    ['01', BLUE, 'Control por valor ganado', 'Comparar plan, avance real y gasto para evitar sobrecostos.'],
    ['02', TEAL, 'Encadenamiento comercial-financiero', 'Marketing atrae, ventas convierte y finanzas asegura utilidad.'],
    ['03', BLUE, 'Visión de ingeniería', 'La calidad técnica necesita viabilidad comercial y económica.'],
  ];
  pts.forEach(([n, color, title, body], i) => {
    const y = 2.2 + i * 1.45;
    s.addText(n, { x: 0.7, y, w: 1.2, h: 0.9, fontSize: 40, bold: true, color, fontFace: 'Arial', margin: 0, valign: 'top', isTextBox: true });
    s.addText([
      { text: title, options: { fontSize: 22, bold: true, color: TEXT, breakLine: true } },
      { text: body, options: { fontSize: 16, color: DIM } },
    ], { x: 2.0, y, w: 10.6, h: 1.0, fontFace: 'Arial', margin: 0, valign: 'top', paraSpaceAfter: 4, isTextBox: true });
    s.addShape(pres.ShapeType.line, { x: 0.7, y: y + 1.2, w: 11.93, h: 0, line: { color: LINE, width: 1 } });
  });
}

// ---------- Escritura + paleta del tema ----------
// pptxgenjs escribe la paleta de Office; aquí se sustituye por la nuestra y se limpia el zip.
async function applyTheme(file, theme) {
  const SLOTS = ['dk1', 'lt1', 'dk2', 'lt2', 'accent1', 'accent2', 'accent3', 'accent4', 'accent5', 'accent6', 'hlink', 'folHlink'];
  const zip = await JSZip.loadAsync(fs.readFileSync(file));
  const part = 'ppt/theme/theme1.xml';
  const scheme = `<a:clrScheme name="${theme.name}">` + SLOTS.map((k) => `<a:${k}><a:srgbClr val="${theme.colors[k]}"/></a:${k}>`).join('') + '</a:clrScheme>';
  const xml = (await zip.file(part).async('string'))
    .replace(/<a:clrScheme\b[\s\S]*?<\/a:clrScheme>/, () => scheme)
    .replace(/(<a:(?:theme|fontScheme)\b[^>]*?\bname=")[^"]*"/g, (_, head) => `${head}${theme.name}"`);
  zip.file(part, xml);
  // pptxgenjs escribe <c:crossesAt val="autoZero"/>, que PowerPoint ofrece reparar; el valor correcto va en <c:crosses>.
  for (const name of Object.keys(zip.files)) {
    if (!name.endsWith('.xml')) continue;
    const x = await zip.file(name).async('string');
    if (x.includes('<c:crossesAt val="autoZero"/>')) zip.file(name, x.replaceAll('<c:crossesAt val="autoZero"/>', '<c:crosses val="autoZero"/>'));
  }
  for (const name of Object.keys(zip.files)) if (zip.files[name].dir) delete zip.files[name];
  fs.writeFileSync(file, await zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' }));
}

await pres.writeFile({ fileName: OUT });
await applyTheme(OUT, THEME);
console.log(`PowerPoint generado: ${OUT}`);
