import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Configure for GitHub Pages deployment: https://saisiddharthyeggadi.github.io/Portfolio/
    site: 'https://saisiddharthyeggadi.github.io',
    base: '/Portfolio/',
    integrations: [tailwind({
        applyBaseStyles: false,
    })],
    output: 'static',
});
