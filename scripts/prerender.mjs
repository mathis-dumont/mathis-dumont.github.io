// Post-build pre-render: serves the built site, renders it in a headless
// browser, and writes the fully-rendered HTML back into dist/index.html so
// crawlers receive real content instead of an empty <div id="root">.
import { preview } from 'vite';
import puppeteer from 'puppeteer';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const server = await preview({ preview: { port: 4317 } });
const url = server.resolvedUrls.local[0];

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#root > *');

  const html = '<!doctype html>\n' + (await page.content()).replace(/^<!doctype html>/i, '');
  const out = resolve('dist/index.html');
  writeFileSync(out, html);
  console.log(`Pre-rendered ${out}`);
} finally {
  await browser.close();
  await server.httpServer.close();
}
