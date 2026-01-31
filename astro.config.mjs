// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://example.github.io';
const basePath = process.env.BASE_PATH;
const base = basePath && basePath !== '/' ? `/${basePath.replace(/^\/+|\/+$/g, '')}/` : '/';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  base,
});
