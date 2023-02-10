import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
//import netlify from '@astrojs/netlify/functions'

// https://astro.build/config
export default /** @type {import('astro').AstroUserConfig} */ defineConfig({
	integrations: [
    tailwind(),
    svelte(),
  ],
  /*adapter: netlify({
    dist: new URL('./build/', import.meta.url)
  }),*/
  site: 'https://b2b.urosystem.com',
  base: '/',
  outDir: './build',
  trailingSlash: 'ignore'
});

