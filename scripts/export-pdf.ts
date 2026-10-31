import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import path from 'path';

async function exportPDF() {
  const template = process.argv[2] || '';

  console.log('Starting Vite server...');
  const server = await createServer({ logLevel: 'error' });
  await server.listen();
  const url = server.resolvedUrls?.local[0]?.replace(/\/$/, '');
  if (!url) throw new Error('Could not resolve Vite server URL');

  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | undefined;
  try {
    console.log(`Server ready at ${url}. Launching Puppeteer...`);
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    const targetUrl = `${url}/${template}`;
    console.log(`Exporting: ${targetUrl}`);
    await page.goto(targetUrl, { waitUntil: 'networkidle0' });

    const pdfPath = path.resolve(`presentation-${template || 'home'}.pdf`);
    await page.pdf({
      path: pdfPath,
      preferCSSPageSize: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    console.log(`PDF successfully generated: ${pdfPath}`);
  } finally {
    await browser?.close();
    await server.close();
  }
}

exportPDF().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
