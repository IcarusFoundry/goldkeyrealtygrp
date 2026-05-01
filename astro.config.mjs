import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://goldkeyrealtygrp.com',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
