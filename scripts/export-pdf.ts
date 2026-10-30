import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';

async function exportPDF() {
  console.log('Starting Vite server...');
  const viteServer = spawn('npm', ['run', 'dev'], {
    shell: true,
    stdio: 'pipe'
  });

  const url = await new Promise<string>((resolve) => {
    viteServer.stdout.on('data', (data) => {
      const output = data.toString();
      const match = output.match(/http:\/\/localhost:(\d+)/);
      if (match) {
        resolve(match[0]);
      }
    });
  });

  console.log(`Server ready at ${url}. Launching Puppeteer...`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const template = process.argv[2] || '';
  const targetUrl = `${url}/${template}`;
  console.log(`Exporting: ${targetUrl}`);
  
  await page.goto(targetUrl, { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(`presentation-${template || 'home'}.pdf`);
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  console.log(`PDF successfully generated: ${pdfPath}`);

  await browser.close();
  viteServer.kill();
  process.exit(0);
}

exportPDF().catch((err) => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
