import puppeteer from 'puppeteer';
import { fork } from 'child_process';

let browser = null;
let page = null;
let server = null;

jest.setTimeout(30000);

beforeAll(async () => {
  server = fork(`${__dirname}/e2e.server.js`);
  await new Promise((resolve, reject) => {
    server.on('error', reject);
    server.on('message', (message) => {
      if (message === 'ok') {
        resolve();
      }
    });
  });

  browser = await puppeteer.launch({
    headless: 'new',
    slowMo: 250,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  page = await browser.newPage();
});

describe('Clicking the buttons activates the popover', () => {
  test('Clicking the normal button activates the popover', async () => {
    await page.goto('http://localhost:8080/');
    await page.waitForSelector('.normalButton');
    const btn = await page.$('.normalButton');
    await btn.click();
    await page.waitForSelector('.popOver');
  }, 20000);

  test('Clicking the bootstrap button activates the popover', async () => {
    await page.goto('http://localhost:8080/');
    await page.waitForSelector('.btn_bootstrap');
    const btn = await page.$('.btn_bootstrap');
    await btn.click();
    await page.waitForSelector('.bs-popover-auto');
  }, 20000);
});

afterAll(async () => {
  if (browser) await browser.close();
  if (server) server.kill();
});
