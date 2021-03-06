import { getOptions } from './chromeOptions';
import puppeteer from 'puppeteer-core';

async function getPage(isDev: boolean) {
  const options = await getOptions(isDev);
  const browser = await puppeteer.launch(options);

  return {
    browser,
    page: await browser.newPage(),
  };
}

export async function getScreenshot({
  html,
  width,
  height,
  type = 'png',
  isDev,
}: {
  html: string;
  width: number;
  height: number;
  type?: 'png' | 'jpeg';
  isDev: boolean;
}) {
  const { page, browser } = await getPage(isDev);
  await page.setViewport({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle2' });

  const screenshot = await page.screenshot({ type });

  await browser.close();

  return screenshot;
}
